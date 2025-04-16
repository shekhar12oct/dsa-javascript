// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    const min =
      this.minStack.length === 0
        ? val
        : Math.min(CSSMathValue, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }
  pop(val) {
    this.stack.pop();
    this.minStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// All operations are 0(1)
