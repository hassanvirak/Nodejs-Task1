// Task 4 â€” Display one student's complete result
const { calculateTotal, calculatePercentage, calculateGrade } = require("./resultHelper");

const student = {
  name: "Ali Raza",
  subjectMarks: {
    English: 78,
    Mathematics: 85,
    Physics: 72,
    Chemistry: 68,
    Computer: 91,
  },
};

const MARKS_PER_SUBJECT = 100;
const marks = Object.values(student.subjectMarks);
const totalMarks = calculateTotal(marks);
const maximumMarks = marks.length * MARKS_PER_SUBJECT;
const percentage = calculatePercentage(totalMarks, maximumMarks);
const grade = calculateGrade(percentage);

console.log("========= STUDENT RESULT =========");
console.log(`Name: ${student.name}`);
for (const [subject, mark] of Object.entries(student.subjectMarks)) {
  console.log(`${subject.padEnd(12)}: ${mark}/${MARKS_PER_SUBJECT}`);
}
console.log("----------------------------------");
console.log(`Total Marks : ${totalMarks}/${maximumMarks}`);
console.log(`Percentage  : ${percentage.toFixed(2)}%`);
console.log(`Grade       : ${grade}`);
console.log("==================================");
