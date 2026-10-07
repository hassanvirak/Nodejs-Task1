// Task 20 â€” Local module: ticket storage, events and processing
const EventEmitter = require("events");
const querystring = require("querystring");

const ticketEvents = new EventEmitter();
const tickets = []; // temporary in-memory storage
let nextTicketId = 101;

function createTicket(name, issue) {
  const ticket = { id: nextTicketId++, name, issue, createdAt: new Date().toLocaleString() };
  tickets.push(ticket);
  ticketEvents.emit("ticketCreated", ticket);
  return ticket;
}

function findTicket(id) {
  return tickets.find((ticket) => ticket.id === Number(id));
}

// Simulates ticket processing with a delayed callback
function processTicket(ticket, callback) {
  setTimeout(() => {
    const statuses = ["Open", "In Progress", "Resolved"];
    const status = statuses[ticket.id % statuses.length];
    callback(null, { ...ticket, status });
  }, 1500);
}

// Builds a status link for a ticket using querystring
function buildStatusLink(ticketId) {
  return `/status?${querystring.stringify({ id: ticketId })}`;
}

function sendResponse(response, statusCode, message) {
  response.writeHead(statusCode, { "Content-Type": "text/plain" });
  response.end(message);
}

module.exports = { ticketEvents, createTicket, findTicket, processTicket, buildStatusLink, sendResponse, tickets };
