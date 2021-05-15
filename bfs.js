console.log("bf search");

//different ways to search-linier search
var beasts = ["kong", "godzilla", "hydra", "nessie", "mosura"];

console.log(beasts.indexOf("godzilla"));

console.log(
  beasts.findIndex(function (item) {
    return item == "godzilla";
  })
);

console.log(
  beasts.find(function (item) {
    return item == "godzilla";
  })
);

console.log(beasts.includes("godzilla"));

function breathFirstSearch() {
  let currentNode = this.root;
  let list = [];
  let queue = [];

  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
}

//---------------------------------------------------------------------------
depthFirstSearchInOrder = () => {
  return traverseInOrder(this.root, []);
};

depthFirstSearchPreOrder = () => {
  return traversePreOrder(this.root, []);
};

depthFirstSearchPostOrder = () => {
  return traversePostOrder(this.root, []);
};

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }

  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}
