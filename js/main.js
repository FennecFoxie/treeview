import * as Tree from './tree-data';

Tree.showAllNodes()
  .then(tree => {
      let data = '';
      tree.forEach(node => {
          data += `<li class="node"><i class="glyphicon glyphicon-chevron-right"></i><div class="node__heading">${node.data}</div>`;
          if (node.children.length > 0) {
            data += `<ul class="node__content">`;
            node.children.forEach(child => {
               data += `<li class="node"><i class="glyphicon glyphicon-chevron-right"></i><div class="node__heading">${child.data}</div></li>`
              });
              data += `</ul>`;
            }
            data += `</li>`;
          }); document.getElementById("treeview").innerHTML = data;
      })
    .catch(e => console.log(e));
