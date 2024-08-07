'use strict';

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep) {
    while (node != null) {
        process.stdout.write(String(node.data));

        node = node.next;

        if (node != null) {
            process.stdout.write(sep);
        }
    }
}

/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reversePrint(llist) {
    // Write your code here
    /*
    // Solution 01: using Array to contain results
    let array = []
    let current = llist;
    while (current !== null) {
        array.push(current.data);
        current = current.next;
    }

    array.reverse().forEach(element => {
        console.log(element)
    });
    */

    // Solution 02: without new Data Structure
    let current = llist;
    let previous = null;

    while (current) {
        let tempNode = current.next;
        current.next = previous;
        previous = current;
        current = tempNode;
    }

    while (previous) {
        console.log(previous.data);
        previous = previous.next;
    }
}

function main() {
    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        reversePrint(llist.head);
    }
}

main();