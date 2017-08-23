let tree = [{
    "data": "ParentNode1",
    "children": [],
  },
  {
    "data": "ParentNode2",
    "children": [{
        "data": "ChildNode1",
        "children": [],
      },
      {
        "data": "ChildNode2",
        "children": [
          {
            "data": "GrandChildNode1",
            "children": [],
          }
        ],
      }
    ],
  },
  {
    "data": "ParentNode3",
    "children": [],
  }
];

export let showAllNodes = () => new Promise((resolve, reject) => {
  if (tree) {
    resolve(tree);
  } else {
    reject("No data avaliable");
  }
});

export let hasChildren = (node) => {
  if(node.children.length > 0) {
    return true;
  }
  else {
    return false;
  }
}

// @node - target node
// @view - result html code
export let recursiveGetChildren(node, view) {
  if(hasChildren(node)) {
    node.children.forEach(child => {
      let hasChildren = Tree.hasChildren(child);
        data += `<li class="node">`;
      if (hasChildren) {
        data += `<i class="glyphicon glyphicon-chevron-right node__expand"></i>`;
      }
       data += `<div class="node__heading">${child.data}</div></li>`
      });
      data += `</ul>`;
  }
}
