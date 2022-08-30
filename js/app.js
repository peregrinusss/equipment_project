/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Menu burger action\r\nconst menuBurgerOpen = document.querySelector('.header-main__btn')\r\n\r\nif (menuBurgerOpen) {\r\n    const menuMobile = document.querySelector('.header-catalog')\r\n\r\n    menuBurgerOpen.addEventListener('click', () => {\r\n        menuMobile.classList.toggle('active')\r\n        // document.body.classList.toggle('noscroll')\r\n        menuBurgerOpen.classList.toggle('active')\r\n    })\r\n}\r\n\r\n\r\n// Tabs catalog\r\nconst tabBtns = document.querySelectorAll('#tabBtn')\r\nconst tabItems = document.querySelectorAll('.tabItem')\r\n\r\ntabBtns.forEach((tabBtn) => {\r\n    tabBtn.addEventListener('mouseover', () => {\r\n        let tabId = tabBtn.getAttribute('data-tab')\r\n        let currentTab = document.querySelector(tabId)\r\n\r\n        if (!tabBtn.classList.contains('active')) {\r\n            tabBtns.forEach((tabBtn) => {\r\n                tabBtn.classList.remove('active')\r\n            })\r\n\r\n            tabItems.forEach((tabItem) => {\r\n                tabItem.classList.remove('active')\r\n            })\r\n\r\n            tabBtn.classList.add('active')\r\n            currentTab.classList.add('active')\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://gulp-builder/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;