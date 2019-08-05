// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty flatay for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {}
  add(data) {}
  remove(data) {}
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {}
  traverseDF(fn) {}
}

// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;

// const letters = [];
// const t = new Tree();
// t.root = new Node('a');
// t.root.add('b');
// t.root.add('c');
// t.root.children[0].add('d');

// t.traverseBF(node => {
//   letters.push(node.data);
// });

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.traverseDF(node => {
  letters.push(node.data);
});

console.log(t);
console.log(letters);
