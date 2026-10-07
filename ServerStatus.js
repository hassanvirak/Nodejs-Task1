// Task 11 â€” Server Status Information
console.log("Current File Path   :", __filename);
console.log("Current Folder Path :", __dirname);
console.log("Node.js Version     :", process.version);
console.log("Command-line Args   :", process.argv);

setTimeout(() => {
  console.log("Status check completed");
}, 2000);

console.log("Waiting for status check...");

/*
  OUTPUT ORDER EXPLANATION
  ------------------------
  1. The four console.log lines run first because they are synchronous.
  2. setTimeout() does NOT block; it registers the callback with a 2-second timer.
  3. "Waiting for status check..." prints immediately, even though it is written
     after setTimeout(), because the main code keeps running.
  4. After the call stack is empty and 2 seconds pass, the event loop runs the
     timer callback, so "Status check completed" prints last.
*/
