const API_URL = "https://fakestoreapi.com/products";

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryTabs = document.getElementById("categoryTabs");
const errorBanner = document.getElementById("errorBanner");
const loadingSkeleton = document.getElementById("loadingSkeleton");
const cartCount = document.getElementById("cartCount");
const clearCartButton = document.getElementById("clearCart");

let products = [];
let selectedCategory = "all";

// Load saved cart from localStorage
let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cart));
    updateCartCount();
}

function showLoading() {
    loadingSkeleton.hidden = false;
    productList.innerHTML = "";
}

function hideLoading() {
    loadingSkeleton.hidden = true;
}

function showError(message) {
    errorBanner.textContent = message;
    errorBanner.hidden = false;
}

function hideError() {
    errorBanner.hidden = true;
    errorBanner.textContent = "";
}

// Fetch products from REST API
async function fetchProducts() {
    showLoading();
    hideError();

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to load products.");
        }

        products = await response.json();
        displayProducts();
    } catch (error) {
        showError(
            "Sorry, we could not load the products. Please try again."
        );
    } finally {
        hideLoading();
    }
}

// Display products after filtering and sorting
function displayProducts() {
    let filteredProducts = [...products];

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm)
        );
    }

    if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(
            product => product.category === selectedCategory
        );
    }

    switch (sortSelect.value) {
        case "price-low":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "name":
            filteredProducts.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            break;
    }

    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button type="button" data-id="${product.id}">
                Add to Cart
            </button>
        `;

        productList.appendChild(card);
    });
}

// Search products in real time
searchInput.addEventListener("input", displayProducts);

// Sort products
sortSelect.addEventListener("change", displayProducts);

// Category filtering
categoryTabs.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    selectedCategory = event.target.dataset.category;
    displayProducts();
});

// Add products to cart
productList.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    const productId = Number(event.target.dataset.id);

    cart.push(productId);
    saveCart();

    event.target.textContent = "Added!";
});

// Clear cart
clearCartButton.addEventListener("click", () => {
    cart = [];
    saveCart();
});

// Start application
updateCartCount();
fetchProducts();
