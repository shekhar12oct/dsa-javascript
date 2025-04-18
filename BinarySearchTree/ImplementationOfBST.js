// BST (Binary Search Tree)
//  sequest left < parent && parent <right
// This structure makes searching, insertion, and deletion efficient (average O(log n)).

// Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //   Inserting values in trees
  insert = (value) => {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    }
    let current = this.root;
    while (current) {
      if (value < current.left) {
        if (!current.left) {
          current.left = newNode;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
  };

  // Searching values in the trees
  search = (value) => {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  };

  delete = (value, node = this.head, parent = null) => {
    if (!node) return this.root;
    if (value < node.value) {
      node.left = this.delete(value, node.left, node);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right, node);
    } else {
      // Case 1: No child
      if (!node.left && !node.right) return null;

      // Case 2: One child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Case 3: Two children
      let minLargerNode = this.findMin(node.right);
      node.value = minLargerNode.value;
      node.right = this.delete(minLargerNode.value, node.right);
    }
    return node;
  };

  //   Find minimum in the BST
  findMin = (node) => {
    while (node.left) node = node.left;
    return node;
  };

  // Tree Traversal
  // In-order (Left → Root → Right) — returns sorted data
  inOrderTraversal = (node = this.root, result = []) => {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  };

  //   Pre-order (Root → Left → Right)
  preOrderTraversal = (node = this.root, result = []) => {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  };

  //   Post-order (Left → Right → Root)
  postOrderTraversal = (node = this.root, result = []) => {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  };
}
