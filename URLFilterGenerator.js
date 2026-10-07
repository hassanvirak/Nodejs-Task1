// Task 3 â€” URL Filter Generator
const querystring = require("querystring");

const productFilter = {
  category: "electronics",
  minimumPrice: 1000,
  maximumPrice: 5000,
};

const generatedQueryString = querystring.stringify(productFilter);
const parsedFilter = querystring.parse(generatedQueryString);

console.log("Original Object:", productFilter);
console.log("Generated Query String:", generatedQueryString);
console.log("Parsed Object:", parsedFilter);
