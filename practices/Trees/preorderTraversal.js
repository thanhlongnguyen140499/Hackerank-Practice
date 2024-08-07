var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
        node = new Node(data);
    }
    else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function preOrder(root) {
    let results = [];
    let stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        results.push(current.data);

        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
    }

    console.log(results.join(" "))
}

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

function solution() {
    var tree = new Tree();
    var n = parseInt(readLine());
    var m = readLine().split(" ").map(Number);
    for (var i=0; i<n; i++) {
        tree.root = tree.insert(tree.root, m[i]);
    }

    preOrder(tree.root);
}

solution();
