// Task 8 â€” Product Details API with Validation
// Try: http://localhost:3000/product?name=Keyboard&price=2500&stock=15
const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true);
  response.setHeader("Content-Type", "text/plain");

  if (pathname !== "/product") {
    response.statusCode = 404;
    response.end("404 - Unsupported route. Use /product?name=Keyboard&price=2500&stock=15");
    return;
  }

  const { name, price, stock } = query;
  const missingFields = ["name", "price", "stock"].filter((field) => !query[field]);

  if (missingFields.length > 0) {
    response.statusCode = 400;
    response.end(`400 - Missing required field(s): ${missingFields.join(", ")}`);
    return;
  }

  response.statusCode = 200;
  response.end(
    "===== Product Summary =====\n" +
      `Name  : ${name}\n` +
      `Price : Rs. ${price}\n` +
      `Stock : ${stock} units\n` +
      "==========================="
  );
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/product?name=Keyboard&price=2500&stock=15`);
});
