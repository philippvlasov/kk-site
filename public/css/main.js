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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Comfortaa:400,700|Montserrat:400,700,900|Open+Sans:400,700,800&subset=cyrillic);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n  position: relative;\n  font-family: 'Comfortaa', sans-serif;\n  font-size: 24px;\n  color: #fff;\n  background: #4a4a4a;\n  width: 100%;\n  height: 100%; }\n  @media screen and (max-width: 1600px) {\n    body {\n      font-size: 18px; } }\n  @media screen and (max-width: 1440px) {\n    body {\n      font-size: 16px; } }\n  @media screen and (max-width: 1280px) {\n    body {\n      font-size: 14px; } }\n\n.bg {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  overflow: visible;\n  transition: background linear 0.35s;\n  z-index: -1; }\n  .bg:after {\n    position: fixed;\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: url(\"/../img/background-image-overlay-full.png\");\n    opacity: 0.5;\n    z-index: -1; }\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\na, a:hover, a:focus, a:active {\n  color: #fff;\n  text-decoration: none; }\n\nh3, h4, h5, h6 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: bold; }\n\nh3 {\n  font-size: 42px;\n  margin-bottom: 60px; }\n  @media screen and (max-width: 1600px) {\n    h3 {\n      font-size: 38px;\n      margin-bottom: 40px; } }\n  @media screen and (max-width: 1440px) {\n    h3 {\n      font-size: 32px;\n      margin-bottom: 30px; } }\n  @media screen and (max-width: 767px) {\n    h3 {\n      text-align: center; } }\n\nh4 {\n  font-size: 36px;\n  margin-bottom: 20px; }\n  @media screen and (max-width: 1600px) {\n    h4 {\n      font-size: 32px;\n      margin-bottom: 40px; } }\n  @media screen and (max-width: 1440px) {\n    h4 {\n      font-size: 28px;\n      margin-bottom: 22px; } }\n  @media screen and (max-width: 767px) {\n    h4 {\n      font-size: 26px; } }\n\nh5 {\n  font-size: 28px;\n  margin-bottom: 20px; }\n  @media screen and (max-width: 1600px) {\n    h5 {\n      font-size: 24px;\n      margin-bottom: 10px; } }\n  @media screen and (max-width: 1440px) {\n    h5 {\n      font-size: 20px;\n      margin-bottom: 18px; } }\n  @media screen and (max-width: 767px) {\n    h5 {\n      font-size: 18px; } }\n\nh6 {\n  font-size: 24px;\n  margin-bottom: 15px; }\n  @media screen and (max-width: 1600px) {\n    h6 {\n      font-size: 20px;\n      margin-bottom: 6px; } }\n  @media screen and (max-width: 1440px) {\n    h6 {\n      font-size: 17px;\n      margin-bottom: 14px; } }\n  @media screen and (max-width: 767px) {\n    h6 {\n      font-size: 16px; } }\n\n.menu {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 80px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.29) 0%, rgba(0, 0, 0, 0) 78%, rgba(0, 0, 0, 0) 100%);\n  text-align: center;\n  font-weight: bold;\n  z-index: 10; }\n  @media screen and (max-width: 1600px) {\n    .menu {\n      left: 70px; } }\n  @media screen and (max-width: 1440px) {\n    .menu {\n      left: 60px; } }\n  @media screen and (max-width: 1280px) {\n    .menu {\n      left: 50px; } }\n  @media screen and (max-width: 1023px) {\n    .menu {\n      width: 100%;\n      left: 0;\n      background: #252525;\n      height: auto;\n      padding: 15px 0; } }\n  .menu i {\n    cursor: pointer;\n    display: none; }\n    @media screen and (max-width: 1023px) {\n      .menu i {\n        display: block; } }\n  .menu svg {\n    width: 250px;\n    margin: 40px 10px 35px 10px; }\n    @media screen and (max-width: 1600px) {\n      .menu svg {\n        width: 200px;\n        margin: 40px 10px 25px 10px; } }\n    @media screen and (max-width: 1440px) {\n      .menu svg {\n        width: 180px;\n        margin: 35px 8px 20px 8px; } }\n    @media screen and (max-width: 1280px) {\n      .menu svg {\n        width: 160px;\n        margin: 35px 5px 15px 5px; } }\n    @media screen and (max-width: 1023px) {\n      .menu svg {\n        display: none; } }\n  @media screen and (max-width: 1023px) {\n    .menu ul {\n      display: none;\n      margin-top: 15px; } }\n  .menu ul li {\n    padding: 8px 0;\n    transition: all .2s; }\n    @media screen and (max-width: 1600px) {\n      .menu ul li {\n        padding: 6px 0; } }\n    @media screen and (max-width: 1440px) {\n      .menu ul li {\n        padding: 4px 0; } }\n    .menu ul li:hover {\n      background-color: rgba(0, 0, 0, 0.25); }\n  .menu ul li.active {\n    background-color: rgba(0, 0, 0, 0.25); }\n\n@media screen and (max-width: 767px) {\n  .button-wrapper {\n    text-align: center; } }\n\n@media screen and (max-width: 767px) {\n  .button-wrapper .button {\n    display: inline-block;\n    width: 200px; } }\n\n.button {\n  padding: 20px 25px;\n  border: 1px solid #fff;\n  transition: all .2s; }\n  @media screen and (max-width: 1600px) {\n    .button {\n      padding: 18px 23px; } }\n  @media screen and (max-width: 1440px) {\n    .button {\n      padding: 16px 21px; } }\n  .button:hover {\n    background-color: #fff;\n    color: #252525; }\n\n.button_inverse {\n  border-color: #FBB03B; }\n  .button_inverse:hover {\n    background-color: #FBB03B;\n    color: #252525; }\n\n.main-content {\n  position: static;\n  padding-left: 300px;\n  padding-right: 80px;\n  text-align: center; }\n  @media screen and (max-width: 1280px) {\n    .main-content {\n      padding-left: 150px;\n      padding-right: 40px; } }\n  @media screen and (max-width: 1023px) {\n    .main-content {\n      padding: 50px 10% 10% 50px; } }\n  @media screen and (max-width: 767px) {\n    .main-content {\n      padding: 50px 2% 50px 2%; } }\n\n.section {\n  text-align: left;\n  padding-left: 25%;\n  padding-right: 10%;\n  min-height: 70vh; }\n  @media screen and (max-width: 1280px) {\n    .section {\n      padding-left: 25%;\n      padding-right: 5%; } }\n  @media screen and (max-width: 1023px) {\n    .section {\n      min-height: 0;\n      padding: 100px 0; } }\n  @media screen and (max-width: 767px) {\n    .section {\n      padding: 80px 0; } }\n  @media screen and (max-width: 550px) {\n    .section {\n      padding: 60px 0; } }\n\n.case_content {\n  display: none; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.modal {\n  max-height: 100vh; }\n\n.modal-content {\n  color: #252525;\n  background-color: rgba(255, 255, 255, 0.9); }\n  .modal-content .close span {\n    position: absolute;\n    right: 15px; }\n  .modal-content .modal-body {\n    padding: 30px; }\n    .modal-content .modal-body .img_item {\n      margin: 0 auto;\n      width: 70%;\n      position: relative;\n      padding: 15px 0; }\n      .modal-content .modal-body .img_item:hover i {\n        opacity: 1; }\n      .modal-content .modal-body .img_item:hover img {\n        border-color: #fff; }\n      .modal-content .modal-body .img_item i {\n        position: absolute;\n        top: calc(50% - 40px);\n        left: calc(50% - 40px);\n        transition: all .2s;\n        opacity: 0;\n        color: #fff;\n        font-size: 80px; }\n      .modal-content .modal-body .img_item img {\n        border: 4px solid transparent; }\n\n.main {\n  height: 100vh; }\n  @media screen and (max-width: 1023px) {\n    .main {\n      text-align: center;\n      height: auto; } }\n  .main h1 {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 70px;\n    font-weight: 700;\n    margin: 0; }\n    @media screen and (max-width: 1600px) {\n      .main h1 {\n        font-size: 60px; } }\n    @media screen and (max-width: 1440px) {\n      .main h1 {\n        font-size: 50px; } }\n    @media screen and (max-width: 1280px) {\n      .main h1 {\n        font-size: 40px; } }\n    .main h1 .yellow {\n      color: #FBB03B;\n      font-size: 90px; }\n      @media screen and (max-width: 1600px) {\n        .main h1 .yellow {\n          font-size: 80px; } }\n      @media screen and (max-width: 1440px) {\n        .main h1 .yellow {\n          font-size: 70px; } }\n      @media screen and (max-width: 1280px) {\n        .main h1 .yellow {\n          font-size: 50px; } }\n    .main h1 .lastWord {\n      position: relative; }\n      .main h1 .lastWord:after {\n        content: '\\412\\430\\448   \\443\\434\\430\\43B\\435\\43D\\43D\\44B\\439   \\43A\\43E\\43D\\442\\435\\43D\\442-\\43E\\442\\434\\435\\43B';\n        position: absolute;\n        left: 5px;\n        font-size: 21px; }\n        @media screen and (max-width: 1600px) {\n          .main h1 .lastWord:after {\n            font-size: 18px; } }\n        @media screen and (max-width: 1440px) {\n          .main h1 .lastWord:after {\n            font-size: 15px;\n            top: -5px;\n            left: 2px; } }\n        @media screen and (max-width: 1280px) {\n          .main h1 .lastWord:after {\n            font-size: 10px; } }\n        @media screen and (max-width: 453px) {\n          .main h1 .lastWord:after {\n            display: none; } }\n  .main .main_subtext {\n    margin-top: 28px; }\n    @media screen and (max-width: 1600px) {\n      .main .main_subtext {\n        margin-top: 25px; } }\n    @media screen and (max-width: 1440px) {\n      .main .main_subtext {\n        margin-top: 22px; } }\n    @media screen and (max-width: 1280px) {\n      .main .main_subtext {\n        margin-top: 19px; } }\n    @media screen and (max-width: 767px) {\n      .main .main_subtext br {\n        display: none; } }\n  .main .main_subtext:first-of-type {\n    font-size: 34px;\n    font-weight: bold; }\n    @media screen and (max-width: 1600px) {\n      .main .main_subtext:first-of-type {\n        font-size: 30px; } }\n    @media screen and (max-width: 1440px) {\n      .main .main_subtext:first-of-type {\n        font-size: 22px; } }\n    @media screen and (max-width: 1280px) {\n      .main .main_subtext:first-of-type {\n        font-size: 18px; } }\n  .main .main_subtext:last-of-type {\n    font-size: 26px; }\n    @media screen and (max-width: 1600px) {\n      .main .main_subtext:last-of-type {\n        font-size: 22px; } }\n    @media screen and (max-width: 1440px) {\n      .main .main_subtext:last-of-type {\n        font-size: 18px; } }\n    @media screen and (max-width: 1280px) {\n      .main .main_subtext:last-of-type {\n        font-size: 16px; } }\n  .main .button-wrapper {\n    margin-top: 70px; }\n    @media screen and (max-width: 424px) {\n      .main .button-wrapper {\n        margin-top: 30px; } }\n    .main .button-wrapper .button:first-of-type {\n      margin-right: 30px; }\n      @media screen and (max-width: 424px) {\n        .main .button-wrapper .button:first-of-type {\n          margin-right: auto; } }\n    @media screen and (max-width: 424px) {\n      .main .button-wrapper .button {\n        display: block;\n        margin: 10px auto; } }\n\n.about ul {\n  margin: 20px 0 60px 0;\n  padding-left: 40px; }\n  @media screen and (max-width: 1600px) {\n    .about ul {\n      padding-left: 30px;\n      margin-bottom: 50px; } }\n  @media screen and (max-width: 1440px) {\n    .about ul {\n      padding-left: 25px;\n      margin-bottom: 40px; } }\n  .about ul li {\n    margin: 15px 0;\n    position: relative; }\n    @media screen and (max-width: 1600px) {\n      .about ul li {\n        margin: 12px 0; } }\n    @media screen and (max-width: 1440px) {\n      .about ul li {\n        margin: 10px 0; } }\n    .about ul li:before {\n      content: '';\n      position: absolute;\n      top: 5px;\n      left: -40px;\n      width: 30px;\n      height: 30px;\n      background-image: url(\"/../img/checkmark-checked.png\");\n      background-repeat: no-repeat;\n      background-size: cover; }\n      @media screen and (max-width: 1600px) {\n        .about ul li:before {\n          left: -30px;\n          width: 20px;\n          height: 20px; } }\n      @media screen and (max-width: 1440px) {\n        .about ul li:before {\n          left: -25px;\n          width: 15px;\n          height: 15px; } }\n\n.services .nav-tabs {\n  flex-wrap: wrap;\n  border: none; }\n  .services .nav-tabs .nav-item {\n    width: 50%;\n    border-bottom: 3px solid transparent;\n    transition: all .2s; }\n    @media screen and (max-width: 767px) {\n      .services .nav-tabs .nav-item {\n        width: 100%;\n        text-align: center; } }\n    .services .nav-tabs .nav-item:hover {\n      transform: translateY(5px);\n      opacity: 1; }\n    .services .nav-tabs .nav-item .nav-link {\n      padding: 15px 15px 12px 50px;\n      position: relative;\n      display: inline-block;\n      color: #fff;\n      background-color: transparent;\n      border: none;\n      border-bottom: 4px solid transparent;\n      transition: all .2s;\n      opacity: .8; }\n      @media screen and (max-width: 1600px) {\n        .services .nav-tabs .nav-item .nav-link {\n          border-bottom: 3px solid transparent;\n          padding: 10px 10px 7px 35px; } }\n      @media screen and (max-width: 1440px) {\n        .services .nav-tabs .nav-item .nav-link {\n          border-bottom: 2px solid transparent;\n          padding: 7px 7px 5px 30px; } }\n      .services .nav-tabs .nav-item .nav-link.active {\n        opacity: 1;\n        border-color: #FBB03B; }\n        .services .nav-tabs .nav-item .nav-link.active i {\n          color: #FBB03B; }\n      .services .nav-tabs .nav-item .nav-link i {\n        position: absolute;\n        left: 0;\n        line-height: 130%; }\n\n.services hr {\n  height: 1px;\n  background-color: #fff;\n  opacity: .4; }\n\n.services .tab-content {\n  margin-top: 30px;\n  min-height: 350px; }\n  @media screen and (max-width: 1600px) {\n    .services .tab-content {\n      min-height: 250px; } }\n  @media screen and (max-width: 1440px) {\n    .services .tab-content {\n      min-height: 200px; } }\n  @media screen and (max-width: 1280px) {\n    .services .tab-content {\n      min-height: 180px; } }\n  @media screen and (max-width: 1023px) {\n    .services .tab-content {\n      min-height: auto;\n      padding-bottom: 50px; } }\n  .services .tab-content ul li {\n    padding-left: 35px;\n    position: relative; }\n    .services .tab-content ul li:before {\n      content: \"\\2014\";\n      position: absolute;\n      left: 0;\n      line-height: 100%; }\n\n.reviews .img_slide img {\n  width: 100%;\n  height: auto; }\n\n.reviews .slick-arrow {\n  background-size: cover;\n  width: 60px;\n  height: 60px;\n  opacity: .6;\n  transition: all .2s; }\n  @media screen and (max-width: 1600px) {\n    .reviews .slick-arrow {\n      width: 40px;\n      height: 40px; } }\n  .reviews .slick-arrow:before {\n    display: none; }\n\n.reviews .slick-prev {\n  background-image: url(\"/../img/carousel_arrow_left.png\");\n  left: -60px; }\n  @media screen and (max-width: 1600px) {\n    .reviews .slick-prev {\n      left: -40px; } }\n  .reviews .slick-prev:hover {\n    opacity: 1;\n    left: -65px; }\n    @media screen and (max-width: 1600px) {\n      .reviews .slick-prev:hover {\n        left: -45px; } }\n\n.reviews .slick-next {\n  background-image: url(\"/../img/carousel_arrow_right.png\");\n  right: -60px; }\n  @media screen and (max-width: 1600px) {\n    .reviews .slick-next {\n      right: -40px; } }\n  .reviews .slick-next:hover {\n    opacity: 1;\n    right: -65px; }\n    @media screen and (max-width: 1600px) {\n      .reviews .slick-next:hover {\n        right: -45px; } }\n\n.reviews #slider-nav {\n  margin-bottom: 50px; }\n  @media screen and (max-width: 1600px) {\n    .reviews #slider-nav {\n      margin-bottom: 40px; } }\n  @media screen and (max-width: 1440px) {\n    .reviews #slider-nav {\n      margin-bottom: 30px; } }\n  @media screen and (max-width: 1023px) {\n    .reviews #slider-nav {\n      margin-bottom: 50px; } }\n\n.reviews .slick-dots {\n  display: none; }\n  @media screen and (max-width: 1023px) {\n    .reviews .slick-dots {\n      display: block; } }\n  .reviews .slick-dots li {\n    width: 12px;\n    height: 12px;\n    border-radius: 100%;\n    background-color: #fff;\n    margin: 0 8px; }\n  .reviews .slick-dots .slick-active {\n    background-color: #FBB03B; }\n\n.portfolio .case_row {\n  display: flex;\n  justify-content: space-between; }\n  @media screen and (max-width: 767px) {\n    .portfolio .case_row {\n      flex-wrap: wrap;\n      justify-content: center; } }\n  .portfolio .case_row .case_item {\n    width: 30%;\n    transition: all .2s; }\n    @media screen and (max-width: 767px) {\n      .portfolio .case_row .case_item {\n        width: 60%;\n        margin: 15px 0; } }\n    .portfolio .case_row .case_item:hover {\n      background: #fff;\n      cursor: pointer; }\n      .portfolio .case_row .case_item:hover .caption {\n        color: #252525;\n        transition: all .2s; }\n    .portfolio .case_row .case_item .caption {\n      padding: 20px 0 0 15px;\n      font-size: 18px;\n      line-height: 22px;\n      font-weight: bold; }\n      @media screen and (max-width: 1600px) {\n        .portfolio .case_row .case_item .caption {\n          font-size: 16px;\n          line-height: 20px;\n          padding: 18px 0 0 13px; } }\n      @media screen and (max-width: 1440px) {\n        .portfolio .case_row .case_item .caption {\n          font-size: 14px;\n          padding: 16px 0 0 11px;\n          line-height: 18px; } }\n      @media screen and (max-width: 1280px) {\n        .portfolio .case_row .case_item .caption {\n          font-size: 12px;\n          padding: 14px 0 0 9px;\n          line-height: 16px; } }\n    .portfolio .case_row .case_item img {\n      width: 100%;\n      height: auto; }\n\n.portfolio .button-wrapper {\n  margin-top: 50px; }\n  @media screen and (max-width: 1280px) {\n    .portfolio .button-wrapper {\n      margin-top: 30px; } }\n  @media screen and (max-width: 1023px) {\n    .portfolio .button-wrapper {\n      margin-top: 20px; } }\n\n.contact .contact_info {\n  padding-left: 30px;\n  position: relative; }\n  .contact .contact_info i {\n    position: absolute;\n    left: 0;\n    line-height: 140%;\n    color: #FBB03B; }\n\n.form_block {\n  float: left;\n  width: 50%; }\n  @media screen and (max-width: 767px) {\n    .form_block {\n      float: none;\n      display: block;\n      margin: 0 auto;\n      width: 100%; } }\n\n@media screen and (max-width: 767px) {\n  .form_block:first-of-type {\n    display: flex;\n    flex-direction: column;\n    align-items: center; } }\n\n@media screen and (max-width: 767px) {\n  .form_block:last-of-type {\n    width: 60%; } }\n\n@media screen and (max-width: 550px) {\n  .form_block:last-of-type {\n    width: 95%; } }\n\n.form_block:last-of-type input {\n  color: #fff;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.35);\n  border: 1px solid #fff;\n  padding: 15px;\n  margin-bottom: 15px; }\n\n.form_block:last-of-type textarea {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.15);\n  border: 1px solid #fff;\n  width: 100%;\n  resize: none;\n  padding: 15px;\n  min-height: 150px; }\n\n.form_block:last-of-type .button {\n  margin-top: 15px;\n  background-color: transparent;\n  color: #fff;\n  float: right; }\n  @media screen and (max-width: 767px) {\n    .form_block:last-of-type .button {\n      float: none;\n      display: block;\n      margin: 15px auto; } }\n\n#about_page {\n  background-image: url(\"/../img/bg9.jpg\"); }\n\n.about_page .main {\n  height: auto; }\n\n.about_page .section {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  min-height: auto; }\n  .about_page .section .icon {\n    display: block;\n    height: 80px;\n    width: auto;\n    margin: 10px auto; }\n\n.about_page .about_img {\n  display: block;\n  width: 80%;\n  margin: 25px auto;\n  opacity: .8; }\n\n.about_page .about h3 {\n  position: relative; }\n  .about_page .about h3 img {\n    position: absolute;\n    top: -40px;\n    left: -160px;\n    width: 140px;\n    height: auto; }\n    @media screen and (max-width: 1280px) {\n      .about_page .about h3 img {\n        width: 100px;\n        top: -10px;\n        left: -110px; } }\n    @media screen and (max-width: 1023px) {\n      .about_page .about h3 img {\n        width: 40%;\n        position: static;\n        display: block;\n        margin: 20px auto; } }\n\n#services_page {\n  background-image: url(\"/../img/bg4.jpg\"); }\n\n.services_page .section {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  min-height: auto; }\n  .services_page .section .tab-content {\n    min-height: auto;\n    margin-bottom: 50px; }\n    .services_page .section .tab-content ul li {\n      padding-left: 30px; }\n      .services_page .section .tab-content ul li:before {\n        content: ''; }\n      .services_page .section .tab-content ul li label input {\n        position: absolute;\n        opacity: 0; }\n        .services_page .section .tab-content ul li label input:checked ~ .checkmark {\n          background-image: url(\"/../img/checkmark-checked.png\"); }\n      .services_page .section .tab-content ul li label .checkmark {\n        display: inline-block;\n        height: 20px;\n        width: 20px;\n        background-image: url(\"/../img/checkmark.png\");\n        background-size: cover;\n        position: absolute;\n        left: 0; }\n\nul.cart li {\n  padding-left: 30px; }\n  ul.cart li:before {\n    content: ''; }\n  ul.cart li label input {\n    position: absolute;\n    opacity: 0; }\n    ul.cart li label input:checked ~ .checkmark {\n      background-image: url(\"/../img/checkmark-checked.png\"); }\n  ul.cart li label .checkmark {\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    background-image: url(\"/../img/checkmark.png\");\n    background-size: cover;\n    position: absolute;\n    left: 0; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);