// Use two stacks to simulate queue behavior (enqueue & dequeue).
//Stack1 for pushing; Stack2 for popping when needed.

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(val) {
    this.stack1.push(val);
  }
  pop() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    this.stack2[this.stack2.length - 1];
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Time: Amortized O(1)
