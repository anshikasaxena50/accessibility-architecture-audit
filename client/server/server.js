const http = require("http");
const url = require("url");

const documents = [
{ id: 1, name: "Aadhaar Card" },
{ id: 2, name: "Driving Licence" },
{ id: 3, name: "Education Certificate" }
];

const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);

```
res.setHeader("Content-Type", "application/json");
res.setHeader("Access-Control-Allow-Origin", "*");

if (parsedUrl.pathname === "/api/documents" && req.method === "GET") {
    const query = (parsedUrl.query.query || "").toLowerCase();

    const results = documents.filter((document) =>
        document.name.toLowerCase().includes(query)
    );

    res.writeHead(200);
    res.end(JSON.stringify(results));
    return;
}

res.writeHead(404);
res.end(JSON.stringify({ error: "Route not found" }));
```

});

server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
