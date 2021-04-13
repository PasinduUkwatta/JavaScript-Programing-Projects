console.log("Linked List");
const basket = ["apples", "grapes", "pears"];

//pointer example
const obj1 = { a: true };
const obj2 = obj1;

obj1.a = "pasindu";

console.log("1", obj1);
console.log("2", obj2);

//10-->5-->6-->null

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const firstNode = {
      value: value,
      next: null,
    };
    firstNode.next = this.head;
    this.head = firstNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList);
