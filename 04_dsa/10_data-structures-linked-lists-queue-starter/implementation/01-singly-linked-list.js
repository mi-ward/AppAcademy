// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let next = this.head;
        let newNode = new SinglyLinkedNode(val);
        this.head = newNode;
        newNode.next = next;
        this.length += 1;

        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(1);
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n)
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);


        if (!this.head) {
            this.head = newNode;
            this.length += 1
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length += 1

        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length >= 1) {
            let removedValue = this.head;
            this.head = removedValue.next;
            this.length -= 1;
            return removedValue;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    removeFromTail() {
        let current = this.head;

        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.length -= 1;
            return current;
        }

        while (current.next.next) {
            current = current.next;
        }

        let removedTail = current.next;
        current.next = null;
        this.length -= 1;
        return removedTail;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    peekAtHead() {
        return this.length === 0 ? undefined : this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O (1)
    }

    print() {


        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
