const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++
        return this.length;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            let removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed.value;
        } else {
            let removedValue = this.head;
            this.head = removedValue.next;
            this.length -= 1;
            return removedValue.value;
        }


        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
