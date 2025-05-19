let val1 = 10;
let val2 = 20;

function addNums(num1, num2) {
  let total = num1 + num2;
  console.log(this);
  return total;
}

console.log(addNums(val1, val2));
console.log(addNums(2, 3));

/*
🧠 1. JS is Single-Threaded
It executes one command at a time — no true parallelism (unless using Web Workers).

🔁 2. Execution Flow in JS
1) Code is loaded and parsed
JavaScript engine (like V8 in Chrome) reads and prepares to execute.

2) Synchronous code goes into the Call Stack
JS starts executing line by line.
Each function call is pushed to the call stack and popped off when done.

3) Asynchronous code (like setTimeout) is sent to Web APIs
JS doesn’t wait. It hands off the task and moves on.

4) Web APIs return results to the Task Queue
When done (e.g., a timer finishes), the callback is queued.

5)Event Loop checks the Call Stack
If the stack is empty, it pushes queued tasks back into the stack.


*/