// Task 4 â€” Reusable result functions

function calculateTotal(marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

function calculatePercentage(total, maximumMarks) {
  return (total / maximumMarks) * 100;
}

function calculateGrade(percentage) {
  if (percentage >= 80) return "A+";
  if (percentage >= 70) return "A";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C";
  if (percentage >= 40) return "D";
  return "F";
}

module.exports = { calculateTotal, calculatePercentage, calculateGrade };
