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

"use strict";


var _treeData = __webpack_require__(1);

var Tree = _interopRequireWildcard(_treeData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Tree.showAllNodes().then(function (tree) {
  var data = '';
  tree.forEach(function (node) {
    var hasChildren = Tree.hasChildren(node);
    data += '<li class="node"><div class="node__heading">';
    if (hasChildren) {
      data += '<i class="glyphicon glyphicon-chevron-right node__expand node__expand--collapsed"></i>';
    }
    data += '<span class="node__heading-text">' + node.data + '</span></div>';
    if (hasChildren) {
      data += '<ul class="node__content node__content--collapsed">' + Tree.recursiveGetChildren(node, "") + '</ul>';
    }
    data += '</li>';
  });
  document.getElementById("treeview").innerHTML = data;

  $('.node__heading').on('click', function () {
    var target = $(this).next();
    var icon = $(this).find('.node__expand');
    if (target.hasClass('node__content')) {
      target.slideToggle();
      icon.toggleClass('node__expand--collapsed').toggleClass('node__expand--expanded');
    }
  });
}).catch(function (e) {
  return console.log(e);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tree = [{
  "data": "ParentNode1",
  "children": [{
    "data": "ChildNode1",
    "children": []
  }]
}, {
  "data": "ParentNode2",
  "children": [{
    "data": "ChildNode1",
    "children": []
  }, {
    "data": "ChildNode2",
    "children": [{
      "data": "GrandChildNode1",
      "children": [{
        "data": "GrandGrandChildNode1",
        "children": []
      }]
    }]
  }]
}, {
  "data": "ParentNode3",
  "children": []
}];

var showAllNodes = exports.showAllNodes = function showAllNodes() {
  return new Promise(function (resolve, reject) {
    if (tree) {
      resolve(tree);
    } else {
      reject("No data avaliable");
    }
  });
};

var hasChildren = exports.hasChildren = function hasChildren(node) {
  if (node.children.length > 0) {
    return true;
  } else {
    return false;
  }
};

// @node - target node
// @view - result html code
var recursiveGetChildren = exports.recursiveGetChildren = function recursiveGetChildren(node, view) {

  node.children.forEach(function (child) {

    view += "<li class=\"node\"><div class=\"node__heading\">";
    if (hasChildren(child)) {
      view += "<i class=\"glyphicon glyphicon-chevron-right node__expand node__expand--collapsed\"></i>";
    }
    view += "<span class=\"node__heading-text\">" + child.data + "</span></div>";

    if (hasChildren(child)) {
      view += "<ul class=\"node__content node__content--collapsed\">";
      view = recursiveGetChildren(child, view);
      view += "</ul></li>";
    }
  });

  return view;
};

// export let setControlClasses = () => {
//   let treeNodes = document.querySelector('.node');
//
//   treeNodes.forEach(node)
// }

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map