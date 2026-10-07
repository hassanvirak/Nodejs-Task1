// Task 20 â€” Mini Project: Event-Based Help Desk Server
// Routes:
//   /                              -> welcome message
//   /ticket?name=Ali&issue=Login   -> create a support ticket
//   /status?id=101                 -> simulated ticket-processing status
const http = require("http");
const url = require("url");
const {
  ticketEvents,
  createTicket,
  findTicket,
  processTicket,
  buildStatusLink,
  sendResponse,
  tickets,
} = require("./ticketService");

const PORT = 3000;

ticketEvents.on("ticketCreated", (ticket) => {
  console.log(`[Event] Ticket #${ticket.id} created by ${ticket.name} for issue "${ticket.issue}".`);
});

ticketEvents.on("ticketCreated", () => {
  console.log(`[Event] Total tickets stored: ${tickets.length}`);
});

const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true);

  if (pathname === "/") {
    sendResponse(
      response,
      200,
      "Welcome to the Help Desk Server!\n\n" +
        "Create a ticket : /ticket?name=Ali&issue=Login\n" +
        "Check status    : /status?id=101"
    );
    return;
  }

  if (pathname === "/ticket") {
    const { name, issue } = query;
    if (!name || !issue) {
      sendResponse(response, 400, "400 - Both 'name' and 'issue' are required. Example: /ticket?name=Ali&issue=Login");
      return;
    }

    const ticket = createTicket(name, issue);
    sendResponse(
      response,
      200,
      "Ticket created successfully!\n" +
        `Ticket ID : ${ticket.id}\n` +
        `Name      : ${ticket.name}\n` +
        `Issue     : ${ticket.issue}\n` +
        `Created   : ${ticket.createdAt}\n\n` +
        `Check status at: ${buildStatusLink(ticket.id)}`
    );
    return;
  }

  if (pathname === "/status") {
    if (!query.id) {
      sendResponse(response, 400, "400 - 'id' is required. Example: /status?id=101");
      return;
    }

    const ticket = findTicket(query.id);
    if (!ticket) {
      sendResponse(response, 404, `404 - Ticket #${query.id} not found.`);
      return;
    }

    processTicket(ticket, (error, processedTicket) => {
      if (error) {
        sendResponse(response, 500, "500 - Could not process ticket.");
        return;
      }
      sendResponse(
        response,
        200,
        `Ticket #${processedTicket.id}\n` +
          `Name   : ${processedTicket.name}\n` +
          `Issue  : ${processedTicket.issue}\n` +
          `Status : ${processedTicket.status}`
      );
    });
    return;
  }

  sendResponse(response, 404, "404 - Route not found.");
});

server.listen(PORT, () => {
  console.log(`Help Desk Server running at http://localhost:${PORT}`);
});
