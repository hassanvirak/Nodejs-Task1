// Task 12 â€” Inventory Query Builder
const querystring = require("querystring");

// ---------- Section 1: Build the query string ----------
const inventoryItem = {
  itemCode: "INV-2045",
  category: "Stationery",
  location: "Warehouse-B",
  quantity: 320,
};

const inventoryQueryString = querystring.stringify(inventoryItem);
console.log("Generated Query String:", inventoryQueryString);

// ---------- Section 2: Parse the query string ----------
const parsedInventory = querystring.parse(inventoryQueryString);

console.log("\nParsed Values:");
console.log("Item Code :", parsedInventory.itemCode);
console.log("Category  :", parsedInventory.category);
console.log("Location  :", parsedInventory.location);
console.log("Quantity  :", parsedInventory.quantity);

console.log(`\nItem ${parsedInventory.itemCode} has ${parsedInventory.quantity} units in stock.`);
