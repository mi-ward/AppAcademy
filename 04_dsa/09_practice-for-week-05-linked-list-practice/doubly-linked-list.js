const LinkedList = require("./linked-list");

class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    if (this.length === 0) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = new DoublyLinkedListNode(val);
      this.length += 1;
    }
    else if (this.length === 1) {
      let newNode = new DoublyLinkedListNode(val);
      let prevNode = this.head;
      this.head = newNode
      prevNode.prev = this.head;
      this.tail = prevNode;
      this.head.next = prevNode;
      this.length += 1;
    }
     else {
      let newNode = new DoublyLinkedListNode(val);
      let prevNode = this.head;
      this.head = newNode
      prevNode.prev = this.head;
      this.head.next = prevNode;
      this.length += 1;
    }
  }

  addToTail(val) {
    if (this.length === 0) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = new DoublyLinkedListNode(val);
      this.length += 1;
    } else if (this.length === 1) {
      let newNode = new DoublyLinkedListNode(val);
      this.head.next = newNode;
      this.tail = newNode;
      this.tail.prev = this.head;
      this.length += 1;
    } else {
      let newNode = new DoublyLinkedListNode(val);
      let prev = this.tail;
      this.tail = newNode;
      prev.next = this.tail;
      this.tail.prev = prev;
      this.length += 1;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
