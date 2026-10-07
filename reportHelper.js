// Task 10 â€” Calculation module

function calculateTotal(marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

function calculateAverage(marks) {
  return calculateTotal(marks) / marks.length;
}

function calculateGrade(average) {
  if (average >= 80) return "A+";
  if (average >= 70) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  if (average >= 40) return "D";
  return "F";
}

module.exports = { calculateTotal, calculateAverage, calculateGrade };
