const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");

form.addEventListener("submit", async function (event) {
event.preventDefault();

```
const query = searchInput.value.trim();

if (query === "") {
    results.textContent = "Please enter a document name.";
    return;
}

results.textContent = "Searching...";

try {
    const response = await fetch(
        `http://localhost:3000/api/documents?query=${encodeURIComponent(query)}`
    );

    const documents = await response.json();

    results.innerHTML = "";

    if (documents.length === 0) {
        results.textContent = "No documents found.";
        return;
    }

    documents.forEach((document) => {
        const item = document.createElement("p");
        item.textContent = document.name;
        results.appendChild(item);
    });
} catch (error) {
    results.textContent = "Unable to connect to the server.";
    console.error(error);
}
```

});
