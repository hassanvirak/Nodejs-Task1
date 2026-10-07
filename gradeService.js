// Task 18 â€” Grade calculation module

function getGrade(average) {
  if (average >= 80) return "A+";
  if (average >= 70) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  if (average >= 40) return "D";
  return "F";
}

function processGrades(marks, callback) {
  if (!Array.isArray(marks) || marks.length === 0) {
    callback(new Error("Marks must be a non-empty array."));
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const grade = getGrade(average);

  callback(null, { total, average, grade });
}

module.exports = { processGrades };
