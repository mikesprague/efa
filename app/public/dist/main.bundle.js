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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/public/javascripts/main.js":
/*!****************************************!*\
  !*** ./app/public/javascripts/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./app/public/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_bling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bling */ \"./app/public/javascripts/modules/bling.js\");\n/* harmony import */ var _modules_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/autocomplete */ \"./app/public/javascripts/modules/autocomplete.js\");\n\n\n\n\nvar initFoodPrefCheckboxes = function initFoodPrefCheckboxes(checkboxSelector) {\n  var firstCheckBox = Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])(\"input[name=\\\"\".concat(checkboxSelector, \"\\\"]\"));\n\n  if (firstCheckBox) {\n    firstCheckBox.on('change', function () {\n      if (this.checked) {\n        Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$$\"])(\"input[name=\\\"\".concat(checkboxSelector, \"\\\"]\")).map(function (checkbox) {\n          /* eslint-disable no-param-reassign */\n          checkbox.checked = false;\n          /* eslint-enable no-param-reassign */\n\n          return checkbox;\n        });\n        this.checked = true;\n      }\n    });\n    Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$$\"])(\"input[name=\\\"\".concat(checkboxSelector, \"\\\"]\")).on('change', function () {\n      if (this.value !== firstCheckBox.value) {\n        firstCheckBox.checked = false;\n      }\n    });\n  }\n};\n\nvar initAllCheckboxes = function initAllCheckboxes() {\n  initFoodPrefCheckboxes('foodExclusions');\n  initFoodPrefCheckboxes('dietRequirements');\n  initFoodPrefCheckboxes('foodAllergies');\n};\n\nvar initAutoComplete = function initAutoComplete() {\n  Object(_modules_autocomplete__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#address'), Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#lat'), Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#lng'));\n};\n\nvar initFocusEmail = function initFocusEmail() {\n  Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#emailLogin').focus();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcHVibGljL2phdmFzY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcHVibGljL2phdmFzY3JpcHRzL21haW4uanM/YWUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyAkLCAkJCB9IGZyb20gJy4vbW9kdWxlcy9ibGluZyc7XG5pbXBvcnQgYXV0b2NvbXBsZXRlIGZyb20gJy4vbW9kdWxlcy9hdXRvY29tcGxldGUnO1xuXG5jb25zdCBpbml0Rm9vZFByZWZDaGVja2JveGVzID0gKChjaGVja2JveFNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGZpcnN0Q2hlY2tCb3ggPSAkKGBpbnB1dFtuYW1lPVwiJHtjaGVja2JveFNlbGVjdG9yfVwiXWApO1xuICBpZiAoZmlyc3RDaGVja0JveCkge1xuICAgIGZpcnN0Q2hlY2tCb3gub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgJCQoYGlucHV0W25hbWU9XCIke2NoZWNrYm94U2VsZWN0b3J9XCJdYCkubWFwKChjaGVja2JveCkgPT4ge1xuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQkKGBpbnB1dFtuYW1lPVwiJHtjaGVja2JveFNlbGVjdG9yfVwiXWApLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gZmlyc3RDaGVja0JveC52YWx1ZSkge1xuICAgICAgICBmaXJzdENoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbmNvbnN0IGluaXRBbGxDaGVja2JveGVzID0gKCkgPT4ge1xuICBpbml0Rm9vZFByZWZDaGVja2JveGVzKCdmb29kRXhjbHVzaW9ucycpO1xuICBpbml0Rm9vZFByZWZDaGVja2JveGVzKCdkaWV0UmVxdWlyZW1lbnRzJyk7XG4gIGluaXRGb29kUHJlZkNoZWNrYm94ZXMoJ2Zvb2RBbGxlcmdpZXMnKTtcbn07XG5cbmNvbnN0IGluaXRBdXRvQ29tcGxldGUgPSAoKSA9PiB7XG4gIGF1dG9jb21wbGV0ZSgkKCcjYWRkcmVzcycpLCAkKCcjbGF0JyksICQoJyNsbmcnKSk7XG59O1xuXG5jb25zdCBpbml0Rm9jdXNFbWFpbCA9ICgpID0+IHtcbiAgJCgnI2VtYWlsTG9naW4nKS5mb2N1cygpO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/public/javascripts/main.js\n");

/***/ }),

/***/ "./app/public/javascripts/modules/autocomplete.js":
/*!********************************************************!*\
  !*** ./app/public/javascripts/modules/autocomplete.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction autocomplete(addressInput, latInput, lngInput) {\n  if (!addressInput) return;\n  /* eslint-disable no-undef */\n  // eslint was unaware of google since it's being included at the html level\n\n  var dropdown = new google.maps.places.Autocomplete(addressInput); // {\n  //   types: ['establishment'],\n  // }\n\n  /* eslint-enable no-undef */\n\n  dropdown.addListener('place_changed', function () {\n    var place = dropdown.getPlace(); // console.log(place);\n\n    var _place$geometry$locat = place.geometry.location,\n        lat = _place$geometry$locat.lat,\n        lng = _place$geometry$locat.lng;\n    /* eslint-disable no-param-reassign */\n    // setting value of the lat/lng inputs was bothering eslin\n\n    latInput.value = lat();\n    lngInput.value = lng();\n    /* eslint-enable no-param-reassign */\n  });\n  addressInput.on('keydown', function (keydownEvent) {\n    if (keydownEvent.keyCode === 13) {\n      keydownEvent.preventDefault();\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (autocomplete);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcHVibGljL2phdmFzY3JpcHRzL21vZHVsZXMvYXV0b2NvbXBsZXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3B1YmxpYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2F1dG9jb21wbGV0ZS5qcz81OGY2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGF1dG9jb21wbGV0ZShhZGRyZXNzSW5wdXQsIGxhdElucHV0LCBsbmdJbnB1dCkge1xuICBpZiAoIWFkZHJlc3NJbnB1dCkgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovIC8vIGVzbGludCB3YXMgdW5hd2FyZSBvZiBnb29nbGUgc2luY2UgaXQncyBiZWluZyBpbmNsdWRlZCBhdCB0aGUgaHRtbCBsZXZlbFxuICBjb25zdCBkcm9wZG93biA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGFkZHJlc3NJbnB1dCk7XG4gIC8vIHtcbiAgLy8gICB0eXBlczogWydlc3RhYmxpc2htZW50J10sXG4gIC8vIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuXG4gIGRyb3Bkb3duLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlID0gZHJvcGRvd24uZ2V0UGxhY2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGFjZSk7XG4gICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb247XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi8gLy8gc2V0dGluZyB2YWx1ZSBvZiB0aGUgbGF0L2xuZyBpbnB1dHMgd2FzIGJvdGhlcmluZyBlc2xpblxuICAgIGxhdElucHV0LnZhbHVlID0gbGF0KCk7XG4gICAgbG5nSW5wdXQudmFsdWUgPSBsbmcoKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gIH0pO1xuXG4gIGFkZHJlc3NJbnB1dC5vbigna2V5ZG93bicsIChrZXlkb3duRXZlbnQpID0+IHtcbiAgICBpZiAoa2V5ZG93bkV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBrZXlkb3duRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgYXV0b2NvbXBsZXRlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/public/javascripts/modules/autocomplete.js\n");

/***/ }),

/***/ "./app/public/javascripts/modules/bling.js":
/*!*************************************************!*\
  !*** ./app/public/javascripts/modules/bling.js ***!
  \*************************************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\n// based on https://gist.github.com/paulirish/12fb951a8b893a454b32\nvar $ = document.querySelector.bind(document);\nvar $$ = document.querySelectorAll.bind(document);\n/* eslint-disable no-multi-assign */\n\nNode.prototype.on = window.on = function (name, fn) {\n  /* eslint-enable no-multi-assign */\n  this.addEventListener(name, fn);\n};\n\nNodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line\n\n/* eslint-disable no-multi-assign */\n\nNodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {\n  /* eslint-enable no-multi-assign */\n  this.forEach(function (elem) {\n    elem.on(name, fn);\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcHVibGljL2phdmFzY3JpcHRzL21vZHVsZXMvYmxpbmcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcHVibGljL2phdmFzY3JpcHRzL21vZHVsZXMvYmxpbmcuanM/MDQwYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBiYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTJmYjk1MWE4Yjg5M2E0NTRiMzJcblxuY29uc3QgJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5jb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuTm9kZS5wcm90b3R5cGUub24gPSB3aW5kb3cub24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbi8qIGVzbGludC1lbmFibGUgbm8tbXVsdGktYXNzaWduICovXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbik7XG59O1xuXG5Ob2RlTGlzdC5wcm90b3R5cGUuX19wcm90b19fID0gQXJyYXkucHJvdG90eXBlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuTm9kZUxpc3QucHJvdG90eXBlLm9uID0gTm9kZUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbi8qIGVzbGludC1lbmFibGUgbm8tbXVsdGktYXNzaWduICovXG4gIHRoaXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0ub24obmFtZSwgZm4pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7ICQsICQkIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/public/javascripts/modules/bling.js\n");

/***/ }),

/***/ "./app/public/sass/style.scss":
/*!************************************!*\
  !*** ./app/public/sass/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcHVibGljL3Nhc3Mvc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9wdWJsaWMvc2Fzcy9zdHlsZS5zY3NzPzdiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/public/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./app/public/javascripts/main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./app/public/javascripts/main.js */"./app/public/javascripts/main.js");


/***/ })

/******/ });