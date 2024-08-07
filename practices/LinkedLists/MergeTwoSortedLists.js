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

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let newnode = new SinglyLinkedListNode(0, null)
    let tempnode = newnode
    
    while(head1 !== null && head2 !== null ){
        if(head1.data < head2.data){
            tempnode.next = head1
            head1 = head1.next  //inc of head1 linked list
        }else{
            tempnode.next = head2
            head2 = head2.next  //inc of head2 linked list
        }
        tempnode = tempnode.next //inc of newnode
    }
    
    tempnode.next = head1 || head2 // if either head1 is null then tempnode will update with head2 or vice-versa
    
    return newnode.next
}

function main() {
    const filePath = "/Users/edwardnguyen/Documents/Edward/Interview/node-hello-world/output.txt";
    const ws = fs.createWriteStream(filePath);
    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        console.log("llist3: ", llist3)

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}

main()
