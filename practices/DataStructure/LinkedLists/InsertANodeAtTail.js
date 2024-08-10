'use strict';

const fs = require('fs');

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
    }

};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    if (head === null) {
        return { data, next: null }
    }
    let node = head; 
    while(node !== null) {
        if(node.next === null) {
            node.next = { data, next: null };
            break;
        }
        node = node.next;
    }
    return head;
}

function main() {
    const filePath = "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
    const ws = fs.createWriteStream(filePath);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
    	const llist_head = insertNodeAtTail(llist.head, llistItem);
      	llist.head = llist_head;
    }

    console.log("llist: ", llist)
    printSinglyLinkedList(llist.head, '\n', ws);
    ws.write('\n');
    ws.end();
}

main();