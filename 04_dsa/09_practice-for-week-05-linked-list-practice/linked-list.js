class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let temp = this.head;
    this.head = new LinkedListNode(val);
    this.head.next = temp;
    this.length += 1;

  }

  addToTail(val) {
    if (this.head === null) {
      this.head = new LinkedListNode(val);
    } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next
        }
        current.next = new LinkedListNode(val);
    }
    this.length += 1;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
