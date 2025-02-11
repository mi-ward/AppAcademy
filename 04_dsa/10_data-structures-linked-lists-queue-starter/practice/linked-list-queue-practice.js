// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
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
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
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

    listLength() {
        let length = 0;
        let current = this.head;
        while (current) {
            current = current.next;
            length++;
        }

        return length;
        // Implement in O(n) and in O(1) time complexity
        return this.length;
    }

    sumOfNodes() {
        let current = this.head;
        let sum = 0;
        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.length;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findNthNode(n) {
        let current = this.head;
        for (let i = 0; i < n; i++) {
            current = current.next;
        }

        return current;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        let mid = Math.ceil(this.length / 2) - 1
        return this.findNthNode(mid);
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        // they don't you still have to traverse the list
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    reverse() {
        let reversedSll = new SinglyLinkedList;
        let current = this.head;

        while (current) {
            reversedSll.addToHead(current.value);
            current = current.next;
        }

        return reversedSll;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverseInPlace() {
        let current = this.head;
        let next = current.next;
        current.next = null;
        let prev = current;
        current = next;

        while (current) {
            next = current.next
            current.next = prev;
            prev = current
            current = next;
        }
        this.head = prev;
        return this;

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        let mid = null;
        let currentHead = this.head;
        let currentPrev = this.tail;

        while (!mid) {
            if (currentHead.next === currentPrev.prev) {
                mid = currentHead.next;
            }

            if (currentHead.next === currentPrev && currentPrev.prev === currentHead) {
                mid = currentHead;
            }

            currentHead = currentHead.next;
            currentPrev = currentPrev.prev;
        }

        return mid;


        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        // One traverse the whole list to identify the length and validate the midpoint
        // Doubly linked is half of that because it can traverse the start and end at the same time.
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let dll = new DoublyLinkedList;

        let current = this.tail;

        while (current) {
            dll.addToTail(current.value)
            current = current.prev
        }

        return dll;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;

        while (current) {

            if (current.prev === null) {
                this.tail = current;
            }

            if (current.next === null) {
                this.head = current;
            }

            let tempNext = current.next;
            let tempPrev = current.prev;
            current.next = tempPrev;
            current.prev = tempNext;
            current = current.prev;
        }
        // Write your hypothesis on the time complexity of this method here
        return this;
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
