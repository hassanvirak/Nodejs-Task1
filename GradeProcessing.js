// Task 18 â€” Modular Grade Processing with Callback
const { processGrades } = require("./gradeService");

const studentMarks = [82, 74, 91, 66, 78];

processGrades(studentMarks, (error, result) => {
  if (error) {
    console.log("Error:", error.message);
    return;
  }

  console.log("===== FINAL RESULT =====");
  console.log(`Marks   : ${studentMarks.join(", ")}`);
  console.log(`Total   : ${result.total}`);
  console.log(`Average : ${result.average.toFixed(2)}`);
  console.log(`Grade   : ${result.grade}`);
});
