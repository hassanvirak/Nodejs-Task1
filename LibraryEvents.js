// Task 5 â€” Library Event Notification System
const EventEmitter = require("events");

const library = new EventEmitter();

// Listener 1: borrowing information
library.on("bookBorrowed", (bookTitle, studentName) => {
  console.log(`[Borrowing] ${studentName} borrowed "${bookTitle}".`);
});

// Listener 2: due-date reminder
library.on("bookBorrowed", (bookTitle, studentName) => {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);
  console.log(`[Reminder] ${studentName}, please return "${bookTitle}" by ${dueDate.toDateString()}.`);
});

// Listener 3: inventory update
library.on("bookBorrowed", (bookTitle) => {
  console.log(`[Inventory] "${bookTitle}" marked as borrowed. Available copies reduced by 1.`);
});

// A single emit triggers all three listeners
library.emit("bookBorrowed", "Clean Code", "Sara Ahmed");
