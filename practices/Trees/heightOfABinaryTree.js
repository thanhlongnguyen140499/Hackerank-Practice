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

/* head ends */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function treeHeight(root) {
    if (root === null) {
        return -1;  // If the tree is empty, the height is -1
    }
    
    // Recursively find the height of left and right subtrees
    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);
    
    // The height of the tree is the maximum height of either subtree plus 1 for the current node
    return Math.max(leftHeight, rightHeight) + 1;
}

/* tail begins */

const readlineSync = require("readline-sync");

function readLine() {
  return readlineSync.question();
}

function solution() {

    var tree = new Tree();
    var n = parseInt(readLine());

    for (var i=0; i<n; i++) {
        var m = parseInt(readLine());
        tree.root = tree.insert(tree.root, m);
    }

    var height = treeHeight(tree.root);
    console.log("height: ", height)
    // process.stdout.write(height);
}

solution()
