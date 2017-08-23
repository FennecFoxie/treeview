import * as Tree from './tree-data';

Tree.showAllNodes()
  .then(tree => {
      let data = '';
      tree.forEach(node => {
          let hasChildren = Tree.hasChildren(node);
          data += `<li class="node">`;
          if (hasChildren) {
            data += `<i class="glyphicon glyphicon-chevron-right node__expand"></i>`;
          }
          data += `<div class="node__heading">${node.data}</div>`;
          if (hasChildren) {
            data += `<ul class="node__content">${Tree.recursiveGetChildren(node, "")}</ul>`;
            }
            data += `</li>`;
          }); document.getElementById("treeview").innerHTML = data;
      })
    .catch(e => console.log(e));
