// Reusable error responses
function sendBadRequest(response, message = "Bad Request") {
  response.writeHead(400, { "Content-Type": "text/plain" });
  response.end(`400 - ${message}`);
}

function sendNotFound(response, message = "Route Not Found") {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end(`404 - ${message}`);
}

module.exports = { sendBadRequest, sendNotFound };
