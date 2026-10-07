// Task 15 â€” Multi-Parameter Search Server
// Try: http://localhost:3000/search?keyword=node&level=intermediate&duration=4
const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true);
  response.setHeader("Content-Type", "text/plain");

  if (pathname !== "/search") {
    response.statusCode = 404;
    response.end("404 - Unsupported route. Use /search?keyword=node&level=intermediate&duration=4");
    return;
  }

  if (!query.keyword) {
    response.statusCode = 400;
    response.end("400 - 'keyword' is required. Example: /search?keyword=node");
    return;
  }

  const filterLines = Object.entries(query).map(([filterName, filterValue]) => `${filterName}: ${filterValue}`);

  response.statusCode = 200;
  response.end("Search Filters\n--------------\n" + filterLines.join("\n"));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/search?keyword=node&level=intermediate&duration=4`);
});
