// Task 1 â€” Course Information Server
const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const route = request.url;

  if (route === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Course: Node.js Intermediate (2501B1)\nWelcome to the course! Let's build servers with Node.js.");
  } else if (route === "/schedule") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Class Schedule\nDays: Monday, Wednesday, Friday\nTiming: 6:00 PM - 8:00 PM");
  } else if (route === "/instructor") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Instructor Information\nName: Sir Ahmed Khan\nEmail: ahmed.khan@example.com\nExperience: 8 years");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 - Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
