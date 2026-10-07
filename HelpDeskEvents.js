// Task 9 â€” Event-Driven Help Desk
const EventEmitter = require("events");

const helpDesk = new EventEmitter();

helpDesk.on("ticketCreated", (ticketNumber, issueTitle) => {
  console.log(`[Assignment] Ticket #${ticketNumber} ("${issueTitle}") assigned to agent Bilal.`);
});

helpDesk.on("ticketCreated", (ticketNumber, issueTitle) => {
  console.log(`[Support Team] New ticket #${ticketNumber} needs attention: ${issueTitle}`);
});

helpDesk.on("ticketCreated", (ticketNumber) => {
  console.log(`[Confirmation] Your ticket #${ticketNumber} has been created successfully.`);
});

// Create a sample ticket, then emit the event
const sampleTicket = { number: 1001, title: "Unable to reset password" };
console.log("Creating sample ticket...");
helpDesk.emit("ticketCreated", sampleTicket.number, sampleTicket.title);
