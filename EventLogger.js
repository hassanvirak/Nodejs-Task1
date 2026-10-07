// Task 17 â€” Event Logger with Multiple Actions
const EventEmitter = require("events");

const authSystem = new EventEmitter();

authSystem.on("userLoggedIn", (username, loginTime) => {
  console.log(`[Login Info] ${username} logged in at ${loginTime}.`);
});

authSystem.on("userLoggedIn", (username) => {
  console.log(`[Activity] ${username}'s status updated to ONLINE.`);
});

authSystem.on("userLoggedIn", (username, loginTime) => {
  console.log(`[Audit Log] LOGIN | user=${username} | time=${loginTime}`);
});

authSystem.on("userLoggedIn", (username) => {
  console.log(`[Notification] Hi ${username}, a new login was detected on your account.`);
});

console.log(`Listeners registered: ${authSystem.listenerCount("userLoggedIn")}`);
authSystem.emit("userLoggedIn", "zain_ali", new Date().toLocaleString());
