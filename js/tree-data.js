let tree = [{
    "data": "ParentNode1",
    "children": [{
        "data": "ChildNode1",
        "children": [],
      }],
  },
  {
    "data": "ParentNode2",
    "children": [{
        "data": "ChildNode1",
        "children": [],
      },
      {
        "data": "ChildNode2",
        "children": [{
          "data": "GrandChildNode1",
          "children": [{
            "data": "GrandGrandChildNode1",
            "children": [],
          }, ],
        }],
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
  if (node.children.length > 0) {
    return true;
  } else {
    return false;
  }
}

// @node - target node
// @view - result html code
export let recursiveGetChildren = (node, view) => {

  node.children.forEach(child => {

    view += `<li class="node"><div class="node__heading">`;
    if (hasChildren(child)) {
      view += `<i class="glyphicon glyphicon-chevron-right node__expand node__expand--collapsed"></i>`;
    }
    view += `<span class="node__heading-text">${child.data}</span></div>`;

    if (hasChildren(child)) {
      view += `<ul class="node__content node__content--collapsed">`;
      view = recursiveGetChildren(child, view);
      view += `</ul></li>`;
    }
  });

  return view;

}

// export let setControlClasses = () => {
//   let treeNodes = document.querySelector('.node');
//
//   treeNodes.forEach(node)
// }
