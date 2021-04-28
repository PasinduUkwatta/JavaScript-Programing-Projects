console.log("Stacks and Queues");

//Stacks-->back option in browser

//stack overflow error due to recurtio programme
// function add() {
//   add();
// }

// add();

// const newNode = {
//   value: value,
//   next: null,
// };

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.lenght = 0;
//   }

//   peek() {
//     return this.top;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (this.lenght === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }

//     this.lenght++;
//     return this;
//   }

//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.lenght--;
//     return holdingPointer;
//   }
// }

// const myStack = new Stack();

// myStack.peek();
// myStack.push("google");
// myStack.push("youtube");
// myStack.push("twitter");

// myStack.pop();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.lenght = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.lenght === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.lenght++;
    return this;
  }

  dequeue() {
    if (!this.top) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.lenght--;
    return holdingPointer;
  }
}

const myQueue = new Queue();

console.log(myQueue.peek());

myQueue.enqueue("pasindu");
myQueue.enqueue("thiwanka");
myQueue.enqueue("deshan");
console.log(myQueue);

console.log(myQueue);

console.log(myQueue);

console.log(myQueue.peek());
