/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_data__ = __webpack_require__(2);


__WEBPACK_IMPORTED_MODULE_0__tree_data__["c" /* showAllNodes */]()
  .then(tree => {
      let data = '';
      tree.forEach(node => {
          let hasChildren = __WEBPACK_IMPORTED_MODULE_0__tree_data__["a" /* hasChildren */](node);
          data += `<li class="node"><div class="node__heading">`;
          if (hasChildren) {
            data += `<i class="glyphicon glyphicon-chevron-right node__expand node__expand--collapsed"></i>`;
          }
          data += `<span class="node__heading-text">${node.data}</span></div>`;
          if (hasChildren) {
            data += `<ul class="node__content node__content--collapsed">${__WEBPACK_IMPORTED_MODULE_0__tree_data__["b" /* recursiveGetChildren */](node, "")}</ul>`;
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showAllNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return recursiveGetChildren; });
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

let showAllNodes = () => new Promise((resolve, reject) => {
  if (tree) {
    resolve(tree);
  } else {
    reject("No data avaliable");
  }
});

let hasChildren = (node) => {
  if (node.children.length > 0) {
    return true;
  } else {
    return false;
  }
}

// @node - target node
// @view - result html code
let recursiveGetChildren = (node, view) => {

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map