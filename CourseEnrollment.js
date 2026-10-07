// Task 14 â€” Event-Based Course Enrollment
const { CourseEnrollment, enrollStudent } = require("./enrollment");

const courseEnrollment = new CourseEnrollment();

courseEnrollment.on("enrolled", (studentName, courseName, batch) => {
  console.log(`[Details] Student: ${studentName} | Course: ${courseName} | Batch: ${batch}`);
});

courseEnrollment.on("enrolled", (studentName, courseName) => {
  console.log(`[Welcome] Welcome to ${courseName}, ${studentName}!`);
});

courseEnrollment.on("enrolled", (studentName, courseName, batch) => {
  console.log(`[Class List] ${studentName} has been added to the ${batch} class list.`);
});

enrollStudent(courseEnrollment, "Fatima Noor", "Node.js Intermediate", "2501B1");
