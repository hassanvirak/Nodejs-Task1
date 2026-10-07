// Task 10 â€” Command-Line Student Report
// Usage: node CLIStudentReport.js <name> <mark1> <mark2> <mark3>
const { calculateTotal, calculateAverage, calculateGrade } = require("./reportHelper");

const [studentName, ...markArguments] = process.argv.slice(2);
const marks = markArguments.map(Number);

const hasValidInput =
  studentName && marks.length === 3 && marks.every((mark) => !Number.isNaN(mark) && mark >= 0 && mark <= 100);

if (!hasValidInput) {
  console.log("Missing or invalid arguments.");
  console.log("Correct format: node CLIStudentReport.js <name> <mark1> <mark2> <mark3>");
  console.log("Example:        node CLIStudentReport.js Ali 75 82 68");
  process.exit(1);
}

const total = calculateTotal(marks);
const average = calculateAverage(marks);
const grade = calculateGrade(average);

console.log("======= STUDENT REPORT =======");
console.log(`Name    : ${studentName}`);
console.log(`Marks   : ${marks.join(", ")}`);
console.log(`Total   : ${total}/300`);
console.log(`Average : ${average.toFixed(2)}`);
console.log(`Grade   : ${grade}`);
console.log("==============================");
