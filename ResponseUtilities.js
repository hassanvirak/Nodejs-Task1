// Task 7 â€” Reusable HTTP Response Utilities
const http = require("http");
const url = require("url");
const { sendSuccess } = require("./success");
const { sendBadRequest, sendNotFound } = require("./errors");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true);

  if (pathname === "/") {
    sendSuccess(response, "Welcome to the Home Page");
  } else if (pathname === "/about") {
    sendSuccess(response, "About Us: We teach Node.js.");
  } else if (pathname === "/contact") {
    sendSuccess(response, "Contact: info@example.com");
  } else if (pathname === "/greet") {
    if (!query.name) {
      sendBadRequest(response, "Missing 'name' parameter. Use /greet?name=Ali");
    } else {
      sendSuccess(response, `Hello, ${query.name}!`);
    }
  } else {
    sendNotFound(response);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
