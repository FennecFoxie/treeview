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
