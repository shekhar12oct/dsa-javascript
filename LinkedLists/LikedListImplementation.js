// Create a node class first

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create first linked list

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const linkedList = new LinkedList();

// Insert at end of the Linked List

const insertAtEnd = (data) => {
  const newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
};

const traverse = () => {
  if (this.head === null) {
    return;
  }
  let current = this.head;
  while (current.next !== null) {
    current = current.next;
    console.log(current.value);
  }
};

const deleteByValue = (dataToDelete) => {
  if (this.head === null) {
    return;
  }
  let current = this.head;
  if (current.data === dataToDelete) {
    this.head = current.next;
    return;
  }
  let previous = null;
  while (current.next !== null) {
    previous = current;
    current = current.next;
    if (current.value === dataToDelete) {
      previous.next = current.next;
      return;
    }
  }
};

const search = (searchData) => {
  if (this.head === null) {
    return false;
  }
  let current = this.head;
  if (current.data === searchData) {
    return true;
  }
  while (current.next !== null) {
    current = current.next;
    if (current.value === searchData) {
      return true;
    }
  }
  return false;
};

const getLength = () => {
  if (this.head === null) {
    return 0;
  }
  let counter = 1;
  let current = this.head;
  while (current.next !== null) {
    current = current.next;
    counter++;
  }
  return counter;
};
