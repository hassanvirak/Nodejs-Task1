// Task 16 â€” URL Encoding Practice
const querystring = require("querystring");

const courseDetails = {
  courseName: "Node JS Intermediate",
  instructorName: "Ahmed Khan",
  city: "Karachi Sindh",
};

const encodedQueryString = querystring.stringify(courseDetails);
const decodedCourse = querystring.parse(encodedQueryString);

console.log("Encoded Query String:");
console.log(encodedQueryString);

console.log("\nDecoded Values:");
console.log("Course Name    :", decodedCourse.courseName);
console.log("Instructor Name:", decodedCourse.instructorName);
console.log("City           :", decodedCourse.city);
