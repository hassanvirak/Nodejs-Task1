// Reusable success response
function sendSuccess(response, message) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(message);
}

module.exports = { sendSuccess };
