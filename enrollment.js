// Task 14 â€” Local module that emits the enrollment event
const EventEmitter = require("events");

class CourseEnrollment extends EventEmitter {}

function enrollStudent(enrollmentEmitter, studentName, courseName, batch) {
  enrollmentEmitter.emit("enrolled", studentName, courseName, batch);
}

module.exports = { CourseEnrollment, enrollStudent };
