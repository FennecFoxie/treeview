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
let getChildren = (node) => {
  console.log(node);
  let view = view || "";
  node.children.forEach(child => {
    view += `<li class="node">`;
    if (hasChildren(child)) {
      view += `<i class="glyphicon glyphicon-chevron-right node__expand"></i>`;
    }
    view += `<div class="node__heading">${child.data}</div></li>`
  });
  view += `</ul>`;
  return view;
}

// @node - target node
// @view - result html code
export let recursiveGetChildren = (node, view) => {
  // view = view || "";
  node.children.forEach(child => {
    console.log(child);
    view += `<li class="node">`;
    if (hasChildren(child)) {
      view += `<i class="glyphicon glyphicon-chevron-right node__expand"></i>`;
    }
    view += `<div class="node__heading">${child.data}</div></li>`;
    if (hasChildren(child))
      view += recursiveGetChildren(child, view);

  });

  return view;

}
