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

eval("__webpack_require__.r(__webpack_exports__);\n// Catalog action\r\nconst catalogOpen = document.querySelector('.header-main__btn')\r\n\r\nif (catalogOpen) {\r\n    const catalog = document.querySelector('.header-catalog')\r\n\r\n    catalogOpen.addEventListener('click', () => {\r\n        catalog.classList.toggle('active')\r\n        catalogOpen.classList.toggle('active')\r\n    })\r\n}\r\n\r\n\r\n// Tabs catalog\r\nconst tabBtns = document.querySelectorAll('#tabBtn')\r\nconst tabItems = document.querySelectorAll('.tabItem')\r\n\r\ntabBtns.forEach((tabBtn) => {\r\n    tabBtn.addEventListener('mouseover', () => {\r\n        let tabId = tabBtn.getAttribute('data-tab')\r\n        let currentTab = document.querySelector(tabId)\r\n\r\n        if (!tabBtn.classList.contains('active')) {\r\n            tabBtns.forEach((tabBtn) => {\r\n                tabBtn.classList.remove('active')\r\n            })\r\n\r\n            tabItems.forEach((tabItem) => {\r\n                tabItem.classList.remove('active')\r\n            })\r\n\r\n            tabBtn.classList.add('active')\r\n            currentTab.classList.add('active')\r\n        }\r\n    })\r\n})\r\n\r\n\r\n// Tabs catalog mobile\r\nconst tabMobileBtns = document.querySelectorAll('#tabMobileBtn')\r\nconst tabMobileNextBtns = document.querySelectorAll('#tabMobileBtnNext')\r\nconst tabMobileItems = document.querySelectorAll('.tabMobileItem')\r\nconst tabMobileSecondItems = document.querySelectorAll('.header-catalog-mob__secondary')\r\nconst tabMobileThirdItems = document.querySelectorAll('.header-catalog-mob__inthird')\r\nconst firstTab = document.querySelector('.header-catalog-mob__first')\r\nconst tabMobileBtnBackCatalog = document.querySelector('.header-catalog-mob__back-catalog')\r\nconst tabMobileBtnBackSecond = document.querySelector('.header-catalog-mob__back-second')\r\n\r\n\r\ntabMobileBtns.forEach((tabBtn) => {\r\n    tabBtn.addEventListener('click', () => {\r\n        let tabId = tabBtn.getAttribute('data-tab')\r\n        let currentTab = document.querySelector(tabId)\r\n\r\n        tabMobileSecondItems.forEach((item) => {\r\n            item.classList.remove('move-left')\r\n        })\r\n        currentTab.classList.remove('move-right')\r\n        firstTab.classList.add('move-left')\r\n        tabMobileBtnBackCatalog.classList.add('active')\r\n\r\n        tabMobileBtnBackCatalog.addEventListener('click', () => {\r\n            tabMobileSecondItems.forEach((item) => {\r\n                item.classList.add('move-right')\r\n            })\r\n            firstTab.classList.remove('move-left')\r\n            tabMobileBtnBackCatalog.classList.remove('active')\r\n        })\r\n    })\r\n})\r\n\r\ntabMobileNextBtns.forEach((tabBtn) => {\r\n    tabBtn.addEventListener('click', () => {\r\n        let tabId = tabBtn.getAttribute('data-tab')\r\n        let currentTab = document.querySelector(tabId)\r\n        let previousTabName = currentTab.getAttribute('data-back')\r\n\r\n        tabMobileBtnBackSecond.innerHTML = `${previousTabName}`\r\n\r\n        currentTab.classList.remove('move-right')\r\n        tabMobileSecondItems.forEach((item) => {\r\n            item.classList.add('move-left')\r\n        })\r\n        tabMobileBtnBackCatalog.classList.remove('active')\r\n        tabMobileBtnBackSecond.classList.add('active')\r\n\r\n        tabMobileBtnBackSecond.addEventListener('click', () => {\r\n            tabMobileThirdItems.forEach((item) => {\r\n                item.classList.add('move-right')\r\n            })\r\n            tabMobileSecondItems.forEach((item) => {\r\n                item.classList.remove('move-left')\r\n            })\r\n            tabMobileBtnBackCatalog.classList.add('active')\r\n            tabMobileBtnBackSecond.classList.remove('active')\r\n        })\r\n    })\r\n})\r\n\r\n\r\n// Menu burger action\r\nconst menuMobileOpenBtns = document.querySelectorAll('#catalog')\r\n\r\nif (menuMobileOpenBtns) {\r\n    const menuMobile = document.querySelector('.header-catalog-mob')\r\n    const menuMobileClose = document.querySelector('.header-catalog-mob__close')\r\n    const menuMobileOpenBtnFooter = document.querySelector('.menu-footer__link-catalog')\r\n    const menuMobileFooterBtns = document.querySelectorAll('.menu-footer__link')\r\n\r\n    menuMobileOpenBtns.forEach((menuMobileOpenBtn) => {\r\n        menuMobileOpenBtn.addEventListener('click', () => {\r\n            menuMobileFooterBtns.forEach((item) => {\r\n                item.classList.remove('active')\r\n            })\r\n            menuMobile.classList.add('active')\r\n            menuMobileOpenBtnFooter.classList.add('active')\r\n            document.body.classList.toggle('noscroll')\r\n        })\r\n    })\r\n\r\n    menuMobileClose.addEventListener('click', () => {\r\n        menuMobileFooterBtns[0].classList.add('active')\r\n        menuMobile.classList.remove('active')\r\n        menuMobileOpenBtnFooter.classList.remove('active')\r\n        tabMobileItems.forEach((item) => {\r\n            item.classList.add('move-right')\r\n        })\r\n        firstTab.classList.remove('move-left')\r\n        tabMobileBtnBackCatalog.classList.remove('active')\r\n        tabMobileBtnBackSecond.classList.remove('active')\r\n    })\r\n\r\n    menuMobileFooterBtns[0].addEventListener('click', () => {\r\n        menuMobileFooterBtns[0].classList.add('active')\r\n        menuMobile.classList.remove('active')\r\n        menuMobileOpenBtnFooter.classList.remove('active')\r\n        tabMobileItems.forEach((item) => {\r\n            item.classList.add('move-right')\r\n        })\r\n        firstTab.classList.remove('move-left')\r\n        tabMobileBtnBackCatalog.classList.remove('active')\r\n        tabMobileBtnBackSecond.classList.remove('active')\r\n    })\r\n}\n\n//# sourceURL=webpack://gulp-builder/./src/js/app.js?");

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