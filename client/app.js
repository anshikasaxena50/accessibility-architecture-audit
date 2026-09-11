const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
event.preventDefault();

```
const query = searchInput.value.trim();

if (query === "") {
    results.textContent = "Please enter a document name.";
    return;
}

results.textContent = `Searching for "${query}"...`;

// This will later connect to the server API:
// GET /api/documents?query=...
```

});
