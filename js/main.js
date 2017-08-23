import * as Tree from './tree-data';

Tree.showAllNodes()
  .then(tree => {
      let data = '';
      tree.forEach(node => {
          let hasChildren = Tree.hasChildren(node);
          data += `<li class="node"><div class="node__heading">`;
          if (hasChildren) {
            data += `<i class="glyphicon glyphicon-chevron-right node__expand node__expand--collapsed"></i>`;
          }
          data += `<span class="node__heading-text">${node.data}</span></div>`;
          if (hasChildren) {
            data += `<ul class="node__content node__content--collapsed">${Tree.recursiveGetChildren(node, "")}</ul>`;
            }
            data += `</li>`;
          });
          document.getElementById("treeview").innerHTML = data;


          $('.node__heading').on('click', function() {
            let target = $(this).next();
            let icon = $(this).find('.node__expand');
            if(target.hasClass('node__content')) {
              target.slideToggle();
              icon.toggleClass('node__expand--collapsed').toggleClass('node__expand--expanded');
            }
          });
      })
    .catch(e => console.log(e));
