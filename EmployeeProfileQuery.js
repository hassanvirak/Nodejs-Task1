// Task 2 â€” Employee Profile Query
// Try: http://localhost:3000/employee?id=105&department=IT
const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname;
  const { id, department } = parsedUrl.query;

  response.setHeader("Content-Type", "text/plain");

  if (pathname !== "/employee") {
    response.statusCode = 404;
    response.end(`Requested Pathname: ${pathname}\n404 - Route not found. Use /employee?id=105&department=IT`);
    return;
  }

  if (!id || !department) {
    response.statusCode = 400;
    const missingFields = [];
    if (!id) missingFields.push("id");
    if (!department) missingFields.push("department");
    response.end(
      `Requested Pathname: ${pathname}\nValidation Error: missing ${missingFields.join(" and ")}.\n` +
        "Correct format: /employee?id=105&department=IT"
    );
    return;
  }

  response.statusCode = 200;
  response.end(`Requested Pathname: ${pathname}\nEmployee ID: ${id}\nDepartment: ${department}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/employee?id=105&department=IT`);
});
