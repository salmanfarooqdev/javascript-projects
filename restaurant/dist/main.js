/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPageContent: () => (/* binding */ createContactPageContent)
/* harmony export */ });
function createContactPageContent(){

    let main = document.querySelector('.main');
    let contact = document.createElement('div');
    contact.classList.add('contactdiv');

    let pp = document.createElement('p');
    pp.textContent = "123 456 789";

    let address = document.createElement('p');
    address.textContent = "Ali View Park, House No 879, Lahore, Pakistan";

    let img = document.createElement('img');
    img.src = 'location.png';

    contact.appendChild(pp);
    contact.appendChild(address);
    contact.appendChild(img);

    main.appendChild(contact);
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatefooter: () => (/* binding */ generatefooter)
/* harmony export */ });
function generatefooter(){
    const content = document.querySelector('.content');
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = "footers";
    content.appendChild(footer);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHeader: () => (/* binding */ generateHeader)
/* harmony export */ });

function generateHeader()
{
    const content = document.querySelector('.content');
    const headerContent = `
        <div class="header">
            <h1 class="restaurant">Restaurant</h1>
            <div class="nav">
                <button class="btn home">Home</button>
                <button class="btn menu">Menu</button>
                <button class="btn contact">Contact</button>
            </div>
        </div>
    `;
    content.innerHTML = headerContent + content.innerHTML;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePageContent: () => (/* binding */ createHomePageContent)
/* harmony export */ });
//home page content

function createHomePageContent(){
    const main = document.querySelector('.main');

    let homediv = document.createElement('div');
    homediv.classList.add('homediv');

    let para = document.createElement('p');
    para.textContent = "Welcome To our Home Page";

    let para2 = document.createElement('p');
    para2.textContent = "Order Online Now";

    const image = document.createElement('img');
    image.src = 'chef.png';

    homediv.appendChild(para);
    homediv.appendChild(image);
    homediv.appendChild(para2);


    main.appendChild(homediv);

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPageContent: () => (/* binding */ createMenuPageContent)
/* harmony export */ });

function createMenuPageContent()
{ 
    const main = document.querySelector('.main');

    let menudiv = document.createElement('div');
    menudiv.classList.add('menudiv');

    const menuItems = [
        {
          name: 'Margherita Pizza',
          ingredients: 'Tomato, Mozzarella, Basil',
          imgSrc: 'chef.png',
        },
        {
            name: 'PeePEePoo Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          },
          {
            name: 'Margherita Pizza',
            ingredients: 'Tomato, Mozzarella, Basil',
            imgSrc: 'chef.png',
          }
        
      ];

      menuItems.forEach(function(item)
      {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.imgSrc;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const ingredients = document.createElement('p');
        ingredients.textContent = item.ingredients;

        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(ingredients);

        menudiv.appendChild(menuItem);
      });

    main.appendChild(menudiv);

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");







(0,_header__WEBPACK_IMPORTED_MODULE_3__.generateHeader)();

const contentdiv = document.querySelector('.content');
const maindiv = document.createElement('div');
maindiv.classList.add('main');
contentdiv.appendChild(maindiv);

function clearMain()
{
    maindiv.innerHTML='';
}

(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePageContent)();

document.querySelector('.home').addEventListener('click', ()=>{
    maindiv.classList.add('fade-out');

    setTimeout(()=>{
        clearMain();
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePageContent)();
        maindiv.classList.remove('fade-out');
        maindiv.classList.add('fade-in');

    },300);
   
});

document.querySelector('.contact').addEventListener('click', ()=>{

    maindiv.classList.add('fade-out');

    setTimeout(()=>{
        clearMain();
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactPageContent)();
        maindiv.classList.remove('fade-out');
        maindiv.classList.add('fade-in');

    },300);

    
});


document.querySelector('.menu').addEventListener('click', ()=>{
    maindiv.classList.add('fade-out');

    setTimeout(()=>{
        clearMain();
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuPageContent)();
        maindiv.classList.remove('fade-out');
        maindiv.classList.add('fade-in');

    },300);

    
});

(0,_footer__WEBPACK_IMPORTED_MODULE_4__.generatefooter)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7Ozs7O1VDakVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0E7QUFDTTtBQUNYO0FBQ0E7OztBQUcxQyx1REFBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBcUI7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQXFCO0FBQzdCO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxrRUFBd0I7QUFDaEM7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw0REFBcUI7QUFDN0I7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRCx1REFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlQ29udGVudCgpe1xuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0ZGl2Jyk7XG5cbiAgICBsZXQgcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHAudGV4dENvbnRlbnQgPSBcIjEyMyA0NTYgNzg5XCI7XG5cbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJBbGkgVmlldyBQYXJrLCBIb3VzZSBObyA4NzksIExhaG9yZSwgUGFraXN0YW5cIjtcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gJ2xvY2F0aW9uLnBuZyc7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBwKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlZm9vdGVyKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gXCJmb290ZXJzXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKClcbntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJyZXN0YXVyYW50XCI+UmVzdGF1cmFudDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBob21lXCI+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gbWVudVwiPk1lbnU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNvbnRhY3RcIj5Db250YWN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGhlYWRlckNvbnRlbnQgKyBjb250ZW50LmlubmVySFRNTDtcbn0iLCIvL2hvbWUgcGFnZSBjb250ZW50XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZUNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICAgIGxldCBob21lZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZWRpdi5jbGFzc0xpc3QuYWRkKCdob21lZGl2Jyk7XG5cbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gXCJXZWxjb21lIFRvIG91ciBIb21lIFBhZ2VcIjtcblxuICAgIGxldCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9IFwiT3JkZXIgT25saW5lIE5vd1wiO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSAnY2hlZi5wbmcnO1xuXG4gICAgaG9tZWRpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICBob21lZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBob21lZGl2LmFwcGVuZENoaWxkKHBhcmEyKTtcblxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lZGl2KTtcblxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlQ29udGVudCgpXG57IFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gICAgbGV0IG1lbnVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51ZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVkaXYnKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdNYXJnaGVyaXRhIFBpenphJyxcbiAgICAgICAgICBpbmdyZWRpZW50czogJ1RvbWF0bywgTW96emFyZWxsYSwgQmFzaWwnLFxuICAgICAgICAgIGltZ1NyYzogJ2NoZWYucG5nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1BlZVBFZVBvbyBQaXp6YScsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ1RvbWF0bywgTW96emFyZWxsYSwgQmFzaWwnLFxuICAgICAgICAgICAgaW1nU3JjOiAnY2hlZi5wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01hcmdoZXJpdGEgUGl6emEnLFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdUb21hdG8sIE1venphcmVsbGEsIEJhc2lsJyxcbiAgICAgICAgICAgIGltZ1NyYzogJ2NoZWYucG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNYXJnaGVyaXRhIFBpenphJyxcbiAgICAgICAgICAgIGluZ3JlZGllbnRzOiAnVG9tYXRvLCBNb3p6YXJlbGxhLCBCYXNpbCcsXG4gICAgICAgICAgICBpbWdTcmM6ICdjaGVmLnBuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTWFyZ2hlcml0YSBQaXp6YScsXG4gICAgICAgICAgICBpbmdyZWRpZW50czogJ1RvbWF0bywgTW96emFyZWxsYSwgQmFzaWwnLFxuICAgICAgICAgICAgaW1nU3JjOiAnY2hlZi5wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01hcmdoZXJpdGEgUGl6emEnLFxuICAgICAgICAgICAgaW5ncmVkaWVudHM6ICdUb21hdG8sIE1venphcmVsbGEsIEJhc2lsJyxcbiAgICAgICAgICAgIGltZ1NyYzogJ2NoZWYucG5nJyxcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgXTtcblxuICAgICAgbWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSlcbiAgICAgIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpdGVtLmltZ1NyYztcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICBjb25zdCBpbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzO1xuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpbmdyZWRpZW50cyk7XG5cbiAgICAgICAgbWVudWRpdi5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgICB9KTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudWRpdik7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlQ29udGVudCB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlQ29udGVudCB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlQ29udGVudCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IGdlbmVyYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZWZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xuXG5cbmdlbmVyYXRlSGVhZGVyKCk7XG5cbmNvbnN0IGNvbnRlbnRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgbWFpbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbmRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5jb250ZW50ZGl2LmFwcGVuZENoaWxkKG1haW5kaXYpO1xuXG5mdW5jdGlvbiBjbGVhck1haW4oKVxue1xuICAgIG1haW5kaXYuaW5uZXJIVE1MPScnO1xufVxuXG5jcmVhdGVIb21lUGFnZUNvbnRlbnQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbWFpbmRpdi5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuXG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgY3JlYXRlSG9tZVBhZ2VDb250ZW50KCk7XG4gICAgICAgIG1haW5kaXYuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgICAgICAgbWFpbmRpdi5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG5cbiAgICB9LDMwMCk7XG4gICBcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcblxuICAgIG1haW5kaXYuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcblxuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgY2xlYXJNYWluKCk7XG4gICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlQ29udGVudCgpO1xuICAgICAgICBtYWluZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgICAgIG1haW5kaXYuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuXG4gICAgfSwzMDApO1xuXG4gICAgXG59KTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBtYWluZGl2LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICBjcmVhdGVNZW51UGFnZUNvbnRlbnQoKTtcbiAgICAgICAgbWFpbmRpdi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgICAgICBtYWluZGl2LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcblxuICAgIH0sMzAwKTtcblxuICAgIFxufSk7XG5cbmdlbmVyYXRlZm9vdGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9