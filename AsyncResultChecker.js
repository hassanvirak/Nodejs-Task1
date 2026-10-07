// Task 6 â€” Asynchronous Result Checker
const PASSING_PERCENTAGE = 40;

function checkResult(studentName, marks, callback) {
  console.log(`Processing result for ${studentName}... (takes 3 seconds)`);

  setTimeout(() => {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / (marks.length * 100)) * 100;
    const status = percentage >= PASSING_PERCENTAGE ? "PASS" : "FAIL";
    callback(studentName, percentage, status);
  }, 3000);
}

function displayResult(studentName, percentage, status) {
  console.log("\n--- Result Ready ---");
  console.log(`Student   : ${studentName}`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
  console.log(`Status    : ${status}`);
}

console.log("1. Program started");
checkResult("Hamza Ali", [65, 72, 58, 80, 49], displayResult);
console.log("2. Main program continues while the result is being processed...");
console.log("3. Main program finished its synchronous work");
