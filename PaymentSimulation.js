// Task 13 â€” Callback-Based Payment Simulation
function processPayment(customer, amount, callback) {
  setTimeout(() => {
    if (amount > 0) {
      callback(null, `Payment of Rs. ${amount} by ${customer} was successful.`);
    } else {
      callback(`Payment failed for ${customer}: amount must be greater than 0.`);
    }
  }, 2000);
}

function handlePaymentResult(error, successMessage) {
  if (error) {
    console.log("ERROR:", error);
  } else {
    console.log("SUCCESS:", successMessage);
  }
}

console.log("Starting payment...");
processPayment("Ayesha", 4500, handlePaymentResult);
processPayment("Usman", 0, handlePaymentResult);
console.log("Payment started. Waiting for confirmation...");
