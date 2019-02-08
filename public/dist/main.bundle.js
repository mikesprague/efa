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

/***/ "./public/javascripts/main.js":
/*!************************************!*\
  !*** ./public/javascripts/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./public/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_bling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bling */ \"./public/javascripts/modules/bling.js\");\n/* harmony import */ var _modules_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/autocomplete */ \"./public/javascripts/modules/autocomplete.js\");\n\n\n\n\nvar initFoodPrefCheckboxes = function initFoodPrefCheckboxes(checkboxSelector) {\n  var firstCheckBox = Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])(\"input[name=\\\"\".concat(checkboxSelector, \"\\\"]\"));\n\n  if (firstCheckBox) {\n    firstCheckBox.on('change', function () {\n      if (this.checked) {\n        Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$$\"])(\"input[name=\\\"\".concat(checkboxSelector, \"\\\"]\")).map(function (checkbox) {\n          /* eslint-disable no-param-reassign */\n          checkbox.checked = false;\n          /* eslint-enable no-param-reassign */\n\n          return checkbox;\n        });\n        this.checked = true;\n      }\n    });\n    Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$$\"])(\"input[name=\\\"\".concat(checkboxSelector, \"\\\"]\")).on('change', function () {\n      if (this.value !== firstCheckBox.value) {\n        firstCheckBox.checked = false;\n      }\n    });\n  }\n};\n\nvar initAllCheckboxes = function initAllCheckboxes() {\n  initFoodPrefCheckboxes('foodExclusions');\n  initFoodPrefCheckboxes('dietRequirements');\n  initFoodPrefCheckboxes('foodAllergies');\n};\n\nvar initAutoComplete = function initAutoComplete() {\n  Object(_modules_autocomplete__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#address'), Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#lat'), Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#lng'));\n};\n\nvar initFocusEmail = function initFocusEmail() {\n  Object(_modules_bling__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('#emailLogin').focus();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgJCwgJCQgfSBmcm9tICcuL21vZHVsZXMvYmxpbmcnO1xuaW1wb3J0IGF1dG9jb21wbGV0ZSBmcm9tICcuL21vZHVsZXMvYXV0b2NvbXBsZXRlJztcblxuY29uc3QgaW5pdEZvb2RQcmVmQ2hlY2tib3hlcyA9ICgoY2hlY2tib3hTZWxlY3RvcikgPT4ge1xuICBjb25zdCBmaXJzdENoZWNrQm94ID0gJChgaW5wdXRbbmFtZT1cIiR7Y2hlY2tib3hTZWxlY3Rvcn1cIl1gKTtcbiAgaWYgKGZpcnN0Q2hlY2tCb3gpIHtcbiAgICBmaXJzdENoZWNrQm94Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICQkKGBpbnB1dFtuYW1lPVwiJHtjaGVja2JveFNlbGVjdG9yfVwiXWApLm1hcCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkJChgaW5wdXRbbmFtZT1cIiR7Y2hlY2tib3hTZWxlY3Rvcn1cIl1gKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IGZpcnN0Q2hlY2tCb3gudmFsdWUpIHtcbiAgICAgICAgZmlyc3RDaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5jb25zdCBpbml0QWxsQ2hlY2tib3hlcyA9ICgpID0+IHtcbiAgaW5pdEZvb2RQcmVmQ2hlY2tib3hlcygnZm9vZEV4Y2x1c2lvbnMnKTtcbiAgaW5pdEZvb2RQcmVmQ2hlY2tib3hlcygnZGlldFJlcXVpcmVtZW50cycpO1xuICBpbml0Rm9vZFByZWZDaGVja2JveGVzKCdmb29kQWxsZXJnaWVzJyk7XG59O1xuXG5jb25zdCBpbml0QXV0b0NvbXBsZXRlID0gKCkgPT4ge1xuICBhdXRvY29tcGxldGUoJCgnI2FkZHJlc3MnKSwgJCgnI2xhdCcpLCAkKCcjbG5nJykpO1xufTtcblxuY29uc3QgaW5pdEZvY3VzRW1haWwgPSAoKSA9PiB7XG4gICQoJyNlbWFpbExvZ2luJykuZm9jdXMoKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ }),

/***/ "./public/javascripts/modules/autocomplete.js":
/*!****************************************************!*\
  !*** ./public/javascripts/modules/autocomplete.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction autocomplete(addressInput, latInput, lngInput) {\n  if (!addressInput) return;\n  /* eslint-disable no-undef */\n  // eslint was unaware of google since it's being included at the html level\n\n  var dropdown = new google.maps.places.Autocomplete(addressInput); // {\n  //   types: ['establishment'],\n  // }\n\n  /* eslint-enable no-undef */\n\n  dropdown.addListener('place_changed', function () {\n    var place = dropdown.getPlace(); // console.log(place);\n\n    var _place$geometry$locat = place.geometry.location,\n        lat = _place$geometry$locat.lat,\n        lng = _place$geometry$locat.lng;\n    /* eslint-disable no-param-reassign */\n    // setting value of the lat/lng inputs was bothering eslin\n\n    latInput.value = lat();\n    lngInput.value = lng();\n    /* eslint-enable no-param-reassign */\n  });\n  addressInput.on('keydown', function (keydownEvent) {\n    if (keydownEvent.keyCode === 13) {\n      keydownEvent.preventDefault();\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (autocomplete);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbW9kdWxlcy9hdXRvY29tcGxldGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdHMvbW9kdWxlcy9hdXRvY29tcGxldGUuanM/OGQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhdXRvY29tcGxldGUoYWRkcmVzc0lucHV0LCBsYXRJbnB1dCwgbG5nSW5wdXQpIHtcbiAgaWYgKCFhZGRyZXNzSW5wdXQpIHJldHVybjtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqLyAvLyBlc2xpbnQgd2FzIHVuYXdhcmUgb2YgZ29vZ2xlIHNpbmNlIGl0J3MgYmVpbmcgaW5jbHVkZWQgYXQgdGhlIGh0bWwgbGV2ZWxcbiAgY29uc3QgZHJvcGRvd24gPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShhZGRyZXNzSW5wdXQpO1xuICAvLyB7XG4gIC8vICAgdHlwZXM6IFsnZXN0YWJsaXNobWVudCddLFxuICAvLyB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cblxuICBkcm9wZG93bi5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcbiAgICBjb25zdCBwbGFjZSA9IGRyb3Bkb3duLmdldFBsYWNlKCk7XG4gICAgLy8gY29uc29sZS5sb2cocGxhY2UpO1xuICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovIC8vIHNldHRpbmcgdmFsdWUgb2YgdGhlIGxhdC9sbmcgaW5wdXRzIHdhcyBib3RoZXJpbmcgZXNsaW5cbiAgICBsYXRJbnB1dC52YWx1ZSA9IGxhdCgpO1xuICAgIGxuZ0lucHV0LnZhbHVlID0gbG5nKCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICB9KTtcblxuICBhZGRyZXNzSW5wdXQub24oJ2tleWRvd24nLCAoa2V5ZG93bkV2ZW50KSA9PiB7XG4gICAgaWYgKGtleWRvd25FdmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAga2V5ZG93bkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGF1dG9jb21wbGV0ZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/modules/autocomplete.js\n");

/***/ }),

/***/ "./public/javascripts/modules/bling.js":
/*!*********************************************!*\
  !*** ./public/javascripts/modules/bling.js ***!
  \*********************************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\n// based on https://gist.github.com/paulirish/12fb951a8b893a454b32\nvar $ = document.querySelector.bind(document);\nvar $$ = document.querySelectorAll.bind(document);\n/* eslint-disable no-multi-assign */\n\nNode.prototype.on = window.on = function (name, fn) {\n  /* eslint-enable no-multi-assign */\n  this.addEventListener(name, fn);\n};\n\nNodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line\n\n/* eslint-disable no-multi-assign */\n\nNodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {\n  /* eslint-enable no-multi-assign */\n  this.forEach(function (elem) {\n    elem.on(name, fn);\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbW9kdWxlcy9ibGluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tb2R1bGVzL2JsaW5nLmpzPzczOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzEyZmI5NTFhOGI4OTNhNDU0YjMyXG5cbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xuY29uc3QgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cbk5vZGUucHJvdG90eXBlLm9uID0gd2luZG93Lm9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4pO1xufTtcblxuTm9kZUxpc3QucHJvdG90eXBlLl9fcHJvdG9fXyA9IEFycmF5LnByb3RvdHlwZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cbk5vZGVMaXN0LnByb3RvdHlwZS5vbiA9IE5vZGVMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuICB0aGlzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBlbGVtLm9uKG5hbWUsIGZuKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyAkLCAkJCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/modules/bling.js\n");

/***/ }),

/***/ "./public/sass/style.scss":
/*!********************************!*\
  !*** ./public/sass/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3Nhc3Mvc3R5bGUuc2Nzcz9mMmUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./public/javascripts/main.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./public/javascripts/main.js */"./public/javascripts/main.js");


/***/ })

/******/ });