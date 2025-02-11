// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1)
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.tail;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    removeFromHead() {
        if (this.length > 1) {
            let newHead = this.head.next;
            let removed = this.head;
            this.head = newHead;
            this.head.prev = null;
            this.length--
            return removed.value;
        } else if (this.length === 1) {
            let removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed.value;
        }

        return undefined;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (this.length > 1) {
            let removed = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return removed.value;
        } else if (this.length === 1) {
            let removed = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed.value;
        }

        return undefined;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (this.length > 0) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if (this.length > 0) {
            return this.tail.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
