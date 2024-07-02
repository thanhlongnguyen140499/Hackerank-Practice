class MyNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree2 {
  constructor() {
    this.root = null;
  }
  // value : 9
  insert(value) {
    const newNode = new MyNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    this.removeNode(this.root, value)
  }

  removeNode(node, value) {
    // if the node is empty
    if (node === null) {
      return null;
    }

    // if node has no children
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    // if node has one children
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    // if node has two children
    let aux = this.findMinNode(node.right);
    node.value = aux.value;
    node.right = this.removeNode(node.right, aux.value);
    return node;
  }

  findMinNode(node) {
    if (node === null) {
      return null;
    } else if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree2();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(traverse(tree.root)));
tree.remove(20);

console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(10));
//      9
//   4     20
// 1  6  15  170
