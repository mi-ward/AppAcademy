const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let addToHeadLL = new LinkedList
let addToTailLL = new LinkedList
let addToHeadDLL = new DoublyLinkedList
let addToTailDLL = new DoublyLinkedList


function addToHeadTest(num, ll) {
    for (let i = 0; i <= num; i++) {
        ll.addToHead(i)
    }
}

function addToTailTest(num, ll) {
    for (let i = 0; i <= num; i++) {
        ll.addToTail(i);
    }
}



for (let i = 0; i < 10000; i+=100) {
    start = Date.now()
    addToHeadTest(i, addToHeadLL)
    end = Date.now()
    console.log(`${end - start}`)

    start = Date.now()
    addToTailTest(i, addToTailLL)
    end = Date.now()
    console.log(`${end - start}`)

    start = Date.now()
    addToHeadTest(i, addToHeadDLL)
    end = Date.now()
    console.log(`${end - start}`)

    start = Date.now()
    addToTailTest(i, addToTailDLL)
    end = Date.now()
    console.log(`${end - start}`)

}
