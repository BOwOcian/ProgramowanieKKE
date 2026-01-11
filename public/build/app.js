(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_styles_live_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/styles/live.css */ "./vendor/symfony/ux-live-component/assets/styles/live.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

var btn = document.getElementById("hamburger-icon");
var nav = document.getElementById("mobile-menu");
btn.addEventListener("click", function () {
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].start();

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ default_1),
/* harmony export */   "getComponent": () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



























































function parseDirectives(content) {
  var directives = [];
  if (!content) {
    return directives;
  }
  var currentActionName = '';
  var currentArgumentName = '';
  var currentArgumentValue = '';
  var currentArguments = [];
  var currentNamedArguments = {};
  var currentModifiers = [];
  var state = 'action';
  var getLastActionName = function getLastActionName() {
    if (currentActionName) {
      return currentActionName;
    }
    if (directives.length === 0) {
      throw new Error('Could not find any directives');
    }
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      named: currentNamedArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArgumentValue = '';
    currentArguments = [];
    currentNamedArguments = {};
    currentModifiers = [];
    state = 'action';
  };
  var pushArgument = function pushArgument() {
    var mixedArgTypesError = function mixedArgTypesError() {
      throw new Error("Normal and named arguments cannot be mixed inside \"".concat(currentActionName, "()\""));
    };
    if (currentArgumentName) {
      if (currentArguments.length > 0) {
        mixedArgTypesError();
      }
      currentNamedArguments[currentArgumentName.trim()] = currentArgumentValue;
    } else {
      if (Object.keys(currentNamedArguments).length > 0) {
        mixedArgTypesError();
      }
      currentArguments.push(currentArgumentValue.trim());
    }
    currentArgumentName = '';
    currentArgumentValue = '';
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    }
    if (Object.keys(currentNamedArguments).length > 0) {
      throw new Error("The modifier \"".concat(currentActionName, "()\" does not support named arguments."));
    }
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = '';
    currentArgumentName = '';
    currentArguments = [];
    state = 'action';
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case 'action':
        if (_char === '(') {
          state = 'arguments';
          break;
        }
        if (_char === ' ') {
          if (currentActionName) {
            pushInstruction();
          }
          break;
        }
        if (_char === '|') {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case 'arguments':
        if (_char === ')') {
          pushArgument();
          state = 'after_arguments';
          break;
        }
        if (_char === ',') {
          pushArgument();
          break;
        }
        if (_char === '=') {
          currentArgumentName = currentArgumentValue;
          currentArgumentValue = '';
          break;
        }
        currentArgumentValue += _char;
        break;
      case 'after_arguments':
        if (_char === '|') {
          pushModifier();
          break;
        }
        if (_char !== ' ') {
          throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        }
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case 'action':
    case 'after_arguments':
      if (currentActionName) {
        pushInstruction();
      }
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(part.split(' ')));
  });
  return finalParts;
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, '').split('[').map(function (s) {
    return s.replace(']', '');
  }).join('.');
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'checkbox') {
      var modelNameData = getModelDirectiveFromElement(element);
      if (modelNameData === null) {
        return null;
      }
      var modelValue = valueStore.get(modelNameData.action);
      if (Array.isArray(modelValue)) {
        return getMultipleCheckboxValue(element, modelValue);
      }
      return element.checked ? inputValue(element) : null;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) {
      return Array.from(element.selectedOptions).map(function (el) {
        return el.value;
      });
    }
    return element.value;
  }
  if (element.dataset.value) {
    return element.dataset.value;
  }
  if ('value' in element) {
    return element.value;
  }
  if (element.hasAttribute('value')) {
    return element.getAttribute('value');
  }
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === 'file') {
      return;
    }
    if (element.type === 'radio') {
      element.checked = element.value == value;
      return;
    }
    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        var valueFound = false;
        value.forEach(function (val) {
          if (val == element.value) {
            valueFound = true;
          }
        });
        element.checked = valueFound;
      } else {
        element.checked = element.value == value;
      }
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === undefined ? '' : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) {
    return [];
  }
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0 || directive.named.length > 0) {
      throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    }
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) {
    return dataModelDirectives[0];
  }
  if (element.getAttribute('name')) {
    var formElement = element.closest('form');
    if (formElement && 'model' in formElement.dataset) {
      var directives = parseDirectives(formElement.dataset.model || '*');
      var directive = directives[0];
      if (directive.args.length > 0 || directive.named.length > 0) {
        throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      }
      directive.action = normalizeModelName(element.getAttribute('name'));
      return directive;
    }
  }
  if (!throwOnMissing) {
    return null;
  }
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) {
    return true;
  }
  if (!component.element.contains(element)) {
    return false;
  }
  var foundChildComponent = false;
  component.getChildren().forEach(function (childComponent) {
    if (foundChildComponent) {
      return;
    }
    if (childComponent.element === element || childComponent.element.contains(element)) {
      foundChildComponent = true;
    }
  });
  return !foundChildComponent;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) {
    throw new Error('Could not clone element');
  }
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) {
    throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  }
  var child = template.content.firstElementChild;
  if (!child) {
    throw new Error('Child not found');
  }
  if (!(child instanceof HTMLElement)) {
    throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  }
  return child;
}
function cloneElementWithNewTagName(element, newTag) {
  var originalTag = element.tagName;
  var startRX = new RegExp('^<' + originalTag, 'i');
  var endRX = new RegExp(originalTag + '>$', 'i');
  var startSubst = '<' + newTag;
  var endSubst = newTag + '>';
  var newHTML = element.outerHTML.replace(startRX, startSubst).replace(endRX, endSubst);
  return htmlToElement(newHTML);
}
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) {
      currentValues.push(value);
    }
    return currentValues;
  }
  if (index > -1) {
    currentValues.splice(index, 1);
  }
  return currentValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === undefined) {
    return undefined;
  }
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split('.');
  for (var i = 0; i < parts.length - 1; i++) {
    currentLevelData = currentLevelData[parts[i]];
  }
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
function setDeepData(data, propertyPath, value) {
  var _parseDeepData2 = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData2.currentLevelData,
    finalData = _parseDeepData2.finalData,
    finalKey = _parseDeepData2.finalKey,
    parts = _parseDeepData2.parts;
  if (_typeof(currentLevelData) !== 'object') {
    var lastPart = parts.pop();
    if (typeof currentLevelData === 'undefined') {
      throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not exist. Did you forget to expose \"").concat(parts[0], "\" as a LiveProp?"));
    }
    throw new Error("Cannot set data-model=\"".concat(propertyPath, "\". The parent \"").concat(parts.join('.'), "\" data does not appear to be an object (it's \"").concat(currentLevelData, "\"). Did you forget to add exposed={\"").concat(lastPart, "\"} to its LiveProp?"));
  }
  if (currentLevelData[finalKey] === undefined) {
    var _lastPart = parts.pop();
    if (parts.length > 0) {
      throw new Error("The model name ".concat(propertyPath, " was never initialized. Did you forget to add exposed={\"").concat(_lastPart, "\"} to its LiveProp?"));
    } else {
      throw new Error("The model name \"".concat(propertyPath, "\" was never initialized. Did you forget to expose \"").concat(_lastPart, "\" as a LiveProp? Available models values are: ").concat(Object.keys(data).length > 0 ? Object.keys(data).join(', ') : '(none)'));
    }
  }
  currentLevelData[finalKey] = value;
  return finalData;
}
var ValueStore = /*#__PURE__*/function () {
  function ValueStore(props, data) {
    _classCallCheck(this, ValueStore);
    this.updatedModels = [];
    this.props = {};
    this.data = {};
    this.props = props;
    this.data = data;
  }
  _createClass(ValueStore, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      var result = getDeepData(this.data, normalizedName);
      if (result !== undefined) {
        return result;
      }
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== undefined;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      var currentValue = this.get(name);
      if (currentValue !== value && !this.updatedModels.includes(normalizedName)) {
        this.updatedModels.push(normalizedName);
      }
      this.data = setDeepData(this.data, normalizedName, value);
      return currentValue !== value;
    }
  }, {
    key: "all",
    value: function all() {
      return Object.assign(Object.assign({}, this.props), this.data);
    }
  }, {
    key: "reinitializeData",
    value: function reinitializeData(data) {
      this.updatedModels = [];
      this.data = data;
    }
  }, {
    key: "reinitializeProps",
    value: function reinitializeProps(props) {
      if (JSON.stringify(props) == JSON.stringify(this.props)) {
        return false;
      }
      this.props = props;
      return true;
    }
  }]);
  return ValueStore;
}();
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;

  // document-fragments dont have attributes so lets not do anything
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  // update attributes on original DOM element
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === 'xmlns') {
          attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
        }

        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';
var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement('template');
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement('body');
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
    // createContextualFragment doesn't support
    // <template> support not available in IE
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);

  // If the target element is a virtual DOM node or SVG node then we may
  // need to normalize the tag name before comparing. Normal HTML elements that are
  // in the "http://www.w3.org/1999/xhtml"
  // are converted to upper case
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    // from is upper and to is lower
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    // to is upper and from is lower
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, '');
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function OPTION(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === 'OPTGROUP') {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
        if (fromEl.hasAttribute('selected') && !toEl.selected) {
          // Workaround for MS Edge bug where the 'selected' attribute can only be
          // removed if set to a non-empty value:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
          fromEl.setAttribute('selected', 'selected');
          fromEl.removeAttribute('selected');
        }
        // We have to reset select element's selectedIndex to -1, otherwise setting
        // fromEl.selected using the syncBooleanAttrProp below has no effect.
        // The correct selectedIndex will be set in the SELECT special handler below.
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, 'selected');
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  INPUT: function INPUT(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, 'checked');
    syncBooleanAttrProp(fromEl, toEl, 'disabled');
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute('value')) {
      fromEl.removeAttribute('value');
    }
  },
  TEXTAREA: function TEXTAREA(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function SELECT(fromEl, toEl) {
    if (!toEl.hasAttribute('multiple')) {
      var selectedIndex = -1;
      var i = 0;
      // We have to loop through children of fromEl, not toEl since nodes can be moved
      // from toEl to fromEl directly when morphing.
      // At the time this special handler is invoked, all children have already been morphed
      // and appended to / removed from fromEl, so using fromEl here is safe and correct.
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === 'OPTGROUP') {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === 'OPTION') {
            if (curChild.hasAttribute('selected')) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute('id') || node.id;
  }
}
function morphdomFactory(morphAttrs) {
  return function morphdom(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === 'string') {
      if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
        var toNodeHtml = toNode;
        toNode = doc.createElement('html');
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = undefined;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            // If we are skipping keyed nodes then we add the key
            // to a list so that it can be handled at the very end.
            addKeyedRemoval(key);
          } else {
            // Only report the node as discarded if it is not keyed. We do this because
            // at the end we loop through all keyed elements that were unmatched
            // and then discard them in one final pass.
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }

    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }

          // Walk recursively
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          // if we find a duplicate #id node in cache, replace `el` with cache value
          // and morph it to the child node.
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          // recursively call for curChild and it's children to see if we find something in
          // fromNodesLookup
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      // We have processed all of the "to nodes". If curFromNodeChild is
      // non-null then we still have some from nodes left over that need
      // to be removed
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          // Since the node is keyed it might be matched up later so we defer
          // the actual removal to later
          addKeyedRemoval(curFromNodeKey);
        } else {
          // NOTE: we skip nested keyed nodes from being removed since there is
          //       still a chance they will be matched up later
          removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
        }

        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        // If an element with an ID is being morphed then it will be in the final
        // DOM so clear it out of the saved elements collection
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly) {
        // optional
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }

        // update attributes on original DOM element first
        morphAttrs(fromEl, toEl);
        // optional
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== 'TEXTAREA') {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;

      // walk the children
      outer: while (curToNodeChild) {
        toNextSibling = curToNodeChild.nextSibling;
        curToNodeKey = getNodeKey(curToNodeChild);

        // walk the fromNode children all the way through
        while (curFromNodeChild) {
          fromNextSibling = curFromNodeChild.nextSibling;
          if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }
          curFromNodeKey = getNodeKey(curFromNodeChild);
          var curFromNodeType = curFromNodeChild.nodeType;

          // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
          var isCompatible = undefined;
          if (curFromNodeType === curToNodeChild.nodeType) {
            if (curFromNodeType === ELEMENT_NODE) {
              // Both nodes being compared are Element nodes

              if (curToNodeKey) {
                // The target node has a key so we want to match it up with the correct element
                // in the original DOM tree
                if (curToNodeKey !== curFromNodeKey) {
                  // The current element in the original DOM tree does not have a matching key so
                  // let's check our lookup to see if there is a matching element in the original
                  // DOM tree
                  if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                    if (fromNextSibling === matchingFromEl) {
                      // Special case for single element removals. To avoid removing the original
                      // DOM node out of the tree (since that can break CSS transitions, etc.),
                      // we will instead discard the current node and wait until the next
                      // iteration to properly match up the keyed target element with its matching
                      // element in the original tree
                      isCompatible = false;
                    } else {
                      // We found a matching keyed element somewhere in the original DOM tree.
                      // Let's move the original DOM node into the current position and morph
                      // it.

                      // NOTE: We use insertBefore instead of replaceChild because we want to go through
                      // the `removeNode()` function for the node that is being discarded so that
                      // all lifecycle hooks are correctly invoked
                      fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                      // fromNextSibling = curFromNodeChild.nextSibling;

                      if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                      } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                      }

                      curFromNodeChild = matchingFromEl;
                    }
                  } else {
                    // The nodes are not compatible since the "to" node has a key and there
                    // is no matching keyed node in the source tree
                    isCompatible = false;
                  }
                }
              } else if (curFromNodeKey) {
                // The original has a key
                isCompatible = false;
              }
              isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
              if (isCompatible) {
                // We found compatible DOM elements so transform
                // the current "from" node to match the current
                // target DOM node.
                // MORPH
                morphEl(curFromNodeChild, curToNodeChild);
              }
            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
              // Both nodes being compared are Text or Comment nodes
              isCompatible = true;
              // Simply update nodeValue on the original node to
              // change the text value
              if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
              }
            }
          }
          if (isCompatible) {
            // Advance both the "to" child and the "from" child since we found a match
            // Nothing else to do as we already recursively called morphChildren above
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
            continue outer;
          }

          // No compatible match so remove the old node from the DOM and continue trying to find a
          // match in the original DOM. However, we only do this if the from node is not keyed
          // since it is possible that a keyed node might match up with a node somewhere else in the
          // target tree and we don't want to discard it just yet since it still might find a
          // home in the final DOM tree. After everything is done we will remove any keyed nodes
          // that didn't find a home
          if (curFromNodeKey) {
            // Since the node is keyed it might be matched up later so we defer
            // the actual removal to later
            addKeyedRemoval(curFromNodeKey);
          } else {
            // NOTE: we skip nested keyed nodes from being removed since there is
            //       still a chance they will be matched up later
            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
          }

          curFromNodeChild = fromNextSibling;
        } // END: while(curFromNodeChild) {}

        // If we got this far then we did not find a candidate match for
        // our "to node" and we exhausted all of the children "from"
        // nodes. Therefore, we will just append the current "to" node
        // to the end
        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
          fromEl.appendChild(matchingFromEl);
          // MORPH
          morphEl(matchingFromEl, curToNodeChild);
        } else {
          var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
          if (onBeforeNodeAddedResult !== false) {
            if (onBeforeNodeAddedResult) {
              curToNodeChild = onBeforeNodeAddedResult;
            }
            if (curToNodeChild.actualize) {
              curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
            }
            fromEl.appendChild(curToNodeChild);
            handleNodeAdded(curToNodeChild);
          }
        }
        curToNodeChild = toNextSibling;
        curFromNodeChild = fromNextSibling;
      }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    } // END: morphChildren(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      // Handle the case where we are given two DOM nodes that are not
      // compatible (e.g. <div> --> <span> or <div> --> TEXT)
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          // Going from an element node to a text node
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        // Text or comment node
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          // Text node to something else
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      // The "to node" was not compatible with the "from node" so we had to
      // toss out the "from node" and use the "to node"
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);

      // We now need to loop over any keyed nodes that might need to be
      // removed. We only do the removal if we know that the keyed node
      // never found a match. When a keyed node is matched up we remove
      // it out of fromNodesLookup and we use fromNodesLookup to determine
      // if a keyed node has been matched up or not
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      // If we had to swap out the from node with a new node because the old
      // node was not compatible with the target node then we need to
      // replace the old DOM node in the original DOM tree. This is only
      // possible if the original DOM node was part of a DOM tree which
      // we know is the case if it has a parent node.
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
function normalizeAttributesForComparison(element) {
  var isFileInput = element instanceof HTMLInputElement && element.type === 'file';
  if (!isFileInput) {
    if ('value' in element) {
      element.setAttribute('value', element.value);
    } else if (element.hasAttribute('value')) {
      element.setAttribute('value', '');
    }
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, childComponents, findChildComponent, getKeyFromElement) {
  var childComponentMap = new Map();
  childComponents.forEach(function (childComponent) {
    childComponentMap.set(childComponent.element, childComponent);
    if (!childComponent.id) {
      throw new Error('Child is missing id.');
    }
    var childComponentToElement = findChildComponent(childComponent.id, rootToElement);
    if (childComponentToElement && childComponentToElement.tagName !== childComponent.element.tagName) {
      var newTag = cloneElementWithNewTagName(childComponentToElement, childComponent.element.tagName);
      childComponentToElement.replaceWith(newTag);
    }
  });
  morphdom(rootFromElement, rootToElement, {
    getNodeKey: function getNodeKey(node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      return getKeyFromElement(node);
    },
    onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
      if (fromEl === rootFromElement) {
        return true;
      }
      if (!(fromEl instanceof HTMLElement || fromEl instanceof SVGElement) || !(toEl instanceof HTMLElement || toEl instanceof SVGElement)) {
        return false;
      }
      var childComponent = childComponentMap.get(fromEl) || false;
      if (childComponent) {
        return childComponent.updateFromNewElement(toEl);
      }
      if (modifiedFieldElements.includes(fromEl)) {
        setValueOnElement(toEl, getElementValue(fromEl));
      }
      if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement && fromEl.isEqualNode(toEl)) {
        var normalizedFromEl = cloneHTMLElement(fromEl);
        normalizeAttributesForComparison(normalizedFromEl);
        var normalizedToEl = cloneHTMLElement(toEl);
        normalizeAttributesForComparison(normalizedToEl);
        if (normalizedFromEl.isEqualNode(normalizedToEl)) {
          return false;
        }
      }
      return !fromEl.hasAttribute('data-live-ignore');
    },
    onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      return !node.hasAttribute('data-live-ignore');
    }
  });
}
var UnsyncedInputsTracker = /*#__PURE__*/function () {
  function UnsyncedInputsTracker(component, modelElementResolver) {
    var _this = this;
    _classCallCheck(this, UnsyncedInputsTracker);
    this.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  _createClass(UnsyncedInputsTracker, [{
    key: "activate",
    value: function activate() {
      var _this2 = this;
      this.elementEventListeners.forEach(function (_ref) {
        var event = _ref.event,
          callback = _ref.callback;
        _this2.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this3 = this;
      this.elementEventListeners.forEach(function (_ref2) {
        var event = _ref2.event,
          callback = _ref2.callback;
        _this3.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
  return UnsyncedInputsTracker;
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = new Map();
  }
  _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) {
          this.unsyncedModelNames.push(modelName);
        }
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this4 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this4.unsyncedModelNames.includes(key)) {
          _this4.unsyncedModelFields["delete"](key);
        }
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) {
        this.unsyncedModelNames.splice(index, 1);
      }
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
  return UnsyncedInputContainer;
}();
var HookManager = /*#__PURE__*/function () {
  function HookManager() {
    _classCallCheck(this, HookManager);
    this.hooks = new Map();
  }
  _createClass(HookManager, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) {
        return;
      }
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var hooks = this.hooks.get(hookName) || [];
      hooks.forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
  return HookManager;
}();
var BackendResponse = /*#__PURE__*/function () {
  function BackendResponse(response) {
    _classCallCheck(this, BackendResponse);
    this.response = response;
  }
  _createClass(BackendResponse, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.body) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.response.text();
            case 3:
              this.body = _context.sent;
            case 4:
              return _context.abrupt("return", this.body);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }]);
  return BackendResponse;
}();
var ChildComponentWrapper = /*#__PURE__*/_createClass(function ChildComponentWrapper(component, modelBindings) {
  _classCallCheck(this, ChildComponentWrapper);
  this.component = component;
  this.modelBindings = modelBindings;
});
var Component = /*#__PURE__*/function () {
  function Component(element, props, data, fingerprint, id, backend, elementDriver) {
    _classCallCheck(this, Component);
    this.defaultDebounce = 150;
    this.pendingActions = [];
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.children = new Map();
    this.parent = null;
    this.element = element;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.fingerprint = fingerprint;
    this.valueStore = new ValueStore(props, data);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker(this, elementDriver);
    this.hooks = new HookManager();
    this.resetPromise();
    this.onChildComponentModelUpdate = this.onChildComponentModelUpdate.bind(this);
  }
  _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      this.hooks.triggerHook('connect', this);
      this.unsyncedInputsTracker.activate();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.hooks.triggerHook('disconnect', this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook('model:set', model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) {
        this.debouncedStartRequest(debounce);
      }
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) {
        throw new Error("Invalid model \"".concat(model, "\"."));
      }
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var modelBindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children.set(child.id, new ChildComponentWrapper(child, modelBindings));
      child.parent = this;
      child.on('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      if (!child.id) {
        throw new Error('Children components must have an id.');
      }
      this.children["delete"](child.id);
      child.parent = null;
      child.off('model:set', this.onChildComponentModelUpdate);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = new Map();
      this.children.forEach(function (childComponent, id) {
        children.set(id, childComponent.component);
      });
      return children;
    }
  }, {
    key: "updateFromNewElement",
    value: function updateFromNewElement(toEl) {
      var props = this.elementDriver.getComponentProps(toEl);
      if (props === null) {
        return false;
      }
      var isChanged = this.valueStore.reinitializeProps(props);
      var fingerprint = toEl.dataset.liveFingerprintValue;
      if (fingerprint !== undefined) {
        this.fingerprint = fingerprint;
      }
      if (isChanged) {
        this.render();
      }
      return false;
    }
  }, {
    key: "onChildComponentModelUpdate",
    value: function onChildComponentModelUpdate(modelName, value, childComponent) {
      var _this5 = this;
      if (!childComponent.id) {
        throw new Error('Missing id');
      }
      var childWrapper = this.children.get(childComponent.id);
      if (!childWrapper) {
        throw new Error('Missing child');
      }
      childWrapper.modelBindings.forEach(function (modelBinding) {
        var childModelName = modelBinding.innerModelName || 'value';
        if (childModelName !== modelName) {
          return;
        }
        _this5.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this6 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      this.backendRequest = this.backend.makeRequest(this.valueStore.all(), this.pendingActions, this.valueStore.updatedModels, this.getChildrenFingerprints());
      this.hooks.triggerHook('loading.state:started', this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.updatedModels = [];
      this.isRequestPending = false;
      this.backendRequest.promise.then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
          var backendResponse, html, headers, controls;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                backendResponse = new BackendResponse(response);
                _context2.next = 3;
                return backendResponse.getBody();
              case 3:
                html = _context2.sent;
                headers = backendResponse.response.headers;
                if (!(headers.get('Content-Type') !== 'application/vnd.live-component+html' && !headers.get('X-Live-Redirect'))) {
                  _context2.next = 11;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this6.hooks.triggerHook('response:error', backendResponse, controls);
                if (controls.displayError) {
                  _this6.renderError(html);
                }
                thisPromiseResolve(backendResponse);
                return _context2.abrupt("return", response);
              case 11:
                _this6.processRerender(html, backendResponse);
                _this6.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this6.isRequestPending) {
                  _this6.isRequestPending = false;
                  _this6.performRequest();
                }
                return _context2.abrupt("return", response);
              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this7 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook('render:started', html, backendResponse, controls);
      if (!controls.shouldRender) {
        return;
      }
      if (backendResponse.response.headers.get('Location')) {
        if (typeof Turbo !== 'undefined') {
          Turbo.visit(backendResponse.response.headers.get('Location'));
        } else {
          window.location.href = backendResponse.response.headers.get('Location') || '';
        }
        return;
      }
      this.hooks.triggerHook('loading.state:finished', this.element);
      var modifiedModelValues = {};
      this.valueStore.updatedModels.forEach(function (modelName) {
        modifiedModelValues[modelName] = _this7.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches('[data-controller~=live]')) {
          throw new Error('A live component template must contain a single root controller element.');
        }
      } catch (error) {
        console.error('There was a problem with the component HTML returned:');
        throw error;
      }
      this.hooks.triggerHook('loading.state:finished', newElement);
      this.valueStore.reinitializeData(this.elementDriver.getComponentData(newElement));
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this7.valueStore);
      }, Array.from(this.getChildren().values()), this.elementDriver.findChildComponentElement, this.elementDriver.getKeyFromElement);
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this7.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      this.hooks.triggerHook('render:finished', this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) {
        return this.defaultDebounce;
      }
      if (debounce === false) {
        return 0;
      }
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this8 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this8.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById('live-component-error');
      if (modal) {
        modal.innerHTML = '';
      } else {
        modal = document.createElement('div');
        modal.id = 'live-component-error';
        modal.style.padding = '50px';
        modal.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        modal.style.zIndex = '100000';
        modal.style.position = 'fixed';
        modal.style.top = '0px';
        modal.style.bottom = '0px';
        modal.style.left = '0px';
        modal.style.right = '0px';
        modal.style.display = 'flex';
        modal.style.flexDirection = 'column';
      }
      var iframe = document.createElement('iframe');
      iframe.style.borderRadius = '5px';
      iframe.style.flexGrow = '1';
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = 'hidden';
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) {
          modal.outerHTML = '';
        }
        document.body.style.overflow = 'visible';
      };
      modal.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.setAttribute('tabindex', '0');
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal(modal);
        }
      });
      modal.focus();
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.children.forEach(function (childComponent) {
        var child = childComponent.component;
        if (!child.id) {
          throw new Error('missing id');
        }
        fingerprints[child.id] = child.fingerprint;
      });
      return fingerprints;
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this9 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this9.nextRequestPromiseResolve = resolve;
      });
    }
  }]);
  return Component;
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== 'string') {
        if (typeof component[prop] === 'function') {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) {
        return component.getData(prop);
      }
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var BackendRequest = /*#__PURE__*/function () {
  function BackendRequest(promise, actions, updateModels) {
    var _this10 = this;
    _classCallCheck(this, BackendRequest);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this10.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  _createClass(BackendRequest, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
  return BackendRequest;
}();
var Backend = /*#__PURE__*/function () {
  function Backend(url) {
    var csrfToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Backend);
    this.url = url;
    this.csrfToken = csrfToken;
  }
  _createClass(Backend, [{
    key: "makeRequest",
    value: function makeRequest(data, actions, updatedModels, childrenFingerprints) {
      var splitUrl = this.url.split('?');
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || '');
      var fetchOptions = {};
      fetchOptions.headers = {
        Accept: 'application/vnd.live-component+html'
      };
      var hasFingerprints = Object.keys(childrenFingerprints).length > 0;
      var hasUpdatedModels = Object.keys(updatedModels).length > 0;
      if (actions.length === 0 && this.willDataFitInUrl(JSON.stringify(data), params, JSON.stringify(childrenFingerprints))) {
        params.set('data', JSON.stringify(data));
        if (hasFingerprints) {
          params.set('childrenFingerprints', JSON.stringify(childrenFingerprints));
        }
        updatedModels.forEach(function (model) {
          params.append('updatedModels[]', model);
        });
        fetchOptions.method = 'GET';
      } else {
        fetchOptions.method = 'POST';
        fetchOptions.headers['Content-Type'] = 'application/json';
        var requestData = {
          data: data
        };
        if (hasUpdatedModels) {
          requestData.updatedModels = updatedModels;
        }
        if (hasFingerprints) {
          requestData.childrenFingerprints = childrenFingerprints;
        }
        if (actions.length > 0) {
          if (this.csrfToken) {
            fetchOptions.headers['X-CSRF-TOKEN'] = this.csrfToken;
          }
          if (actions.length === 1) {
            requestData.args = actions[0].args;
            url += "/".concat(encodeURIComponent(actions[0].name));
          } else {
            url += '/_batch';
            requestData.actions = actions;
          }
        }
        fetchOptions.body = JSON.stringify(requestData);
      }
      var paramsString = params.toString();
      return new BackendRequest(fetch("".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ''), fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), updatedModels);
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(dataJson, params, childrenFingerprintsJson) {
      var urlEncodedJsonData = new URLSearchParams(dataJson + childrenFingerprintsJson).toString();
      return (urlEncodedJsonData + params.toString()).length < 1500;
    }
  }]);
  return Backend;
}();
var StandardElementDriver = /*#__PURE__*/function () {
  function StandardElementDriver() {
    _classCallCheck(this, StandardElementDriver);
  }
  _createClass(StandardElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return null;
      }
      return modelDirective.action;
    }
  }, {
    key: "getComponentData",
    value: function getComponentData(rootElement) {
      if (!rootElement.dataset.liveDataValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.liveDataValue);
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps(rootElement) {
      if (!rootElement.dataset.livePropsValue) {
        return null;
      }
      return JSON.parse(rootElement.dataset.livePropsValue);
    }
  }, {
    key: "findChildComponentElement",
    value: function findChildComponentElement(id, element) {
      return element.querySelector("[data-live-id=".concat(id, "]"));
    }
  }, {
    key: "getKeyFromElement",
    value: function getKeyFromElement(element) {
      return element.dataset.liveId || null;
    }
  }]);
  return StandardElementDriver;
}();
var LoadingPlugin = /*#__PURE__*/function () {
  function LoadingPlugin() {
    _classCallCheck(this, LoadingPlugin);
  }
  _createClass(LoadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this11 = this;
      component.on('loading.state:started', function (element, request) {
        _this11.startLoading(element, request);
      });
      component.on('loading.state:finished', function (element) {
        _this11.finishLoading(element);
      });
      this.finishLoading(component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(targetElement, backendRequest) {
      this.handleLoadingToggle(true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(targetElement) {
      this.handleLoadingToggle(false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(isLoading, targetElement, backendRequest) {
      var _this12 = this;
      if (isLoading) {
        this.addAttributes(targetElement, ['busy']);
      } else {
        this.removeAttributes(targetElement, ['busy']);
      }
      this.getLoadingDirectives(targetElement).forEach(function (_ref4) {
        var element = _ref4.element,
          directives = _ref4.directives;
        if (isLoading) {
          _this12.addAttributes(element, ['data-live-is-loading']);
        } else {
          _this12.removeAttributes(element, ['data-live-is-loading']);
        }
        directives.forEach(function (directive) {
          _this12.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this13 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = new Map();
      validModifiers.set('delay', function (modifier) {
        if (!isLoading) {
          return;
        }
        delay = modifier.value ? parseInt(modifier.value) : 200;
      });
      validModifiers.set('action', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedActions.push(modifier.value);
      });
      validModifiers.set('model', function (modifier) {
        if (!modifier.value) {
          throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        }
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        var _a;
        if (validModifiers.has(modifier.name)) {
          var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
          callable(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) {
        return;
      }
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) {
        return;
      }
      var loadingDirective;
      switch (finalAction) {
        case 'show':
          loadingDirective = function loadingDirective() {
            _this13.showElement(element);
          };
          break;
        case 'hide':
          loadingDirective = function loadingDirective() {
            return _this13.hideElement(element);
          };
          break;
        case 'addClass':
          loadingDirective = function loadingDirective() {
            return _this13.addClass(element, directive.args);
          };
          break;
        case 'removeClass':
          loadingDirective = function loadingDirective() {
            return _this13.removeClass(element, directive.args);
          };
          break;
        case 'addAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.addAttributes(element, directive.args);
          };
          break;
        case 'removeAttribute':
          loadingDirective = function loadingDirective() {
            return _this13.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) {
            loadingDirective();
          }
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(element) {
      var loadingDirectives = [];
      element.querySelectorAll('[data-loading]').forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          throw new Error('Invalid Element Type');
        }
        var directives = parseDirectives(element.dataset.loading || 'show');
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = 'inline-block';
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = 'none';
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList2;
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) {
        this.removeAttributes(element, ['class']);
      }
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, '');
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
  return LoadingPlugin;
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case 'show':
      return isLoading ? 'show' : 'hide';
    case 'hide':
      return isLoading ? 'hide' : 'show';
    case 'addClass':
      return isLoading ? 'addClass' : 'removeClass';
    case 'removeClass':
      return isLoading ? 'removeClass' : 'addClass';
    case 'addAttribute':
      return isLoading ? 'addAttribute' : 'removeAttribute';
    case 'removeAttribute':
      return isLoading ? 'removeAttribute' : 'addAttribute';
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var ValidatedFieldsPlugin = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin() {
    _classCallCheck(this, ValidatedFieldsPlugin);
  }
  _createClass(ValidatedFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this14 = this;
      component.on('model:set', function (modelName) {
        _this14.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has('validatedFields')) {
        var validatedFields = _toConsumableArray(valueStore.get('validatedFields'));
        if (!validatedFields.includes(modelName)) {
          validatedFields.push(modelName);
        }
        valueStore.set('validatedFields', validatedFields);
      }
    }
  }]);
  return ValidatedFieldsPlugin;
}();
var PageUnloadingPlugin = /*#__PURE__*/function () {
  function PageUnloadingPlugin() {
    _classCallCheck(this, PageUnloadingPlugin);
    this.isConnected = false;
  }
  _createClass(PageUnloadingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this15 = this;
      component.on('render:started', function (html, response, controls) {
        if (!_this15.isConnected) {
          controls.shouldRender = false;
        }
      });
      component.on('connect', function () {
        _this15.isConnected = true;
      });
      component.on('disconnect', function () {
        _this15.isConnected = false;
      });
    }
  }]);
  return PageUnloadingPlugin;
}();
var PollingDirector = /*#__PURE__*/function () {
  function PollingDirector(component) {
    _classCallCheck(this, PollingDirector);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  _createClass(PollingDirector, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) {
        this.initiatePoll(actionName, duration);
      }
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this16 = this;
      if (this.isPollingActive) {
        return;
      }
      this.isPollingActive = true;
      this.polls.forEach(function (_ref5) {
        var actionName = _ref5.actionName,
          duration = _ref5.duration;
        _this16.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this17 = this;
      var callback;
      if (actionName === '$render') {
        callback = function callback() {
          _this17.component.render();
        };
      } else {
        callback = function callback() {
          _this17.component.action(actionName, {}, 0);
        };
      }
      var timer = setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
  return PollingDirector;
}();
var PollingPlugin = /*#__PURE__*/function () {
  function PollingPlugin() {
    _classCallCheck(this, PollingPlugin);
  }
  _createClass(PollingPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this18 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector(component);
      this.initializePolling();
      component.on('connect', function () {
        _this18.pollingDirector.startAllPolling();
      });
      component.on('disconnect', function () {
        _this18.pollingDirector.stopAllPolling();
      });
      component.on('render:finished', function () {
        _this18.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this19 = this;
      this.clearPolling();
      if (this.element.dataset.poll === undefined) {
        return;
      }
      var rawPollConfig = this.element.dataset.poll;
      var directives = parseDirectives(rawPollConfig || '$render');
      directives.forEach(function (directive) {
        var duration = 2000;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case 'delay':
              if (modifier.value) {
                duration = parseInt(modifier.value);
              }
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this19.addPoll(directive.action, duration);
      });
    }
  }]);
  return PollingPlugin;
}();
var SetValueOntoModelFieldsPlugin = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin);
  }
  _createClass(SetValueOntoModelFieldsPlugin, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this20 = this;
      this.synchronizeValueOfModelFields(component);
      component.on('render:finished', function () {
        _this20.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll('[data-model]').forEach(function (element) {
        if (!(element instanceof HTMLElement)) {
          throw new Error('Invalid element using data-model.');
        }
        if (element instanceof HTMLFormElement) {
          return;
        }
        if (!elementBelongsToThisComponent(element, component)) {
          return;
        }
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) {
          return;
        }
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) {
          return;
        }
        if (component.valueStore.has(modelName)) {
          setValueOnElement(element, component.valueStore.get(modelName));
        }
        if (element instanceof HTMLSelectElement && !element.multiple) {
          component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
        }
      });
    }
  }]);
  return SetValueOntoModelFieldsPlugin;
}();
function getModelBinding(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case 'on':
        if (!modifier.value) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        }
        if (!['input', 'change'].includes(modifier.value)) {
          throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        }
        targetEventName = modifier.value;
        break;
      case 'norender':
        shouldRender = false;
        break;
      case 'debounce':
        debounce = modifier.value ? parseInt(modifier.value) : true;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(':'),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName
  };
}
var ComponentRegistry = /*#__PURE__*/function () {
  function ComponentRegistry() {
    _classCallCheck(this, ComponentRegistry);
    this.components = new WeakMap();
  }
  _createClass(ComponentRegistry, [{
    key: "registerComponent",
    value: function registerComponent(element, definition) {
      this.components.set(element, definition);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(element) {
      this.components["delete"](element);
    }
  }, {
    key: "getComponent",
    value: function getComponent(element) {
      var _this21 = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        var maxCount = 10;
        var interval = setInterval(function () {
          var component = _this21.components.get(element);
          if (component) {
            resolve(component);
          }
          count++;
          if (count > maxCount) {
            clearInterval(interval);
            reject(new Error("Component not found for element ".concat(getElementAsTagText(element))));
          }
        }, 5);
      });
    }
  }]);
  return ComponentRegistry;
}();
var ComponentRegistry$1 = new ComponentRegistry();
var getComponent = function getComponent(element) {
  return ComponentRegistry$1.getComponent(element);
};
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this22;
    _classCallCheck(this, default_1);
    _this22 = _super.apply(this, arguments);
    _this22.pendingActionTriggerModelElement = null;
    _this22.elementEventListeners = [{
      event: 'input',
      callback: function callback(event) {
        return _this22.handleInputEvent(event);
      }
    }, {
      event: 'change',
      callback: function callback(event) {
        return _this22.handleChangeEvent(event);
      }
    }, {
      event: 'live:connect',
      callback: function callback(event) {
        return _this22.handleConnectedControllerEvent(event);
      }
    }];
    return _this22;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this23 = this;
      this.handleDisconnectedChildControllerEvent = this.handleDisconnectedChildControllerEvent.bind(this);
      var id = this.element.dataset.liveId || null;
      this.component = new Component(this.element, this.propsValue, this.dataValue, this.fingerprintValue, id, new Backend(this.urlValue, this.csrfValue), new StandardElementDriver());
      this.proxiedComponent = proxifyComponent(this.component);
      this.element.__component = this.proxiedComponent;
      if (this.hasDebounceValue) {
        this.component.defaultDebounce = this.debounceValue;
      }
      var plugins = [new LoadingPlugin(), new ValidatedFieldsPlugin(), new PageUnloadingPlugin(), new PollingPlugin(), new SetValueOntoModelFieldsPlugin()];
      plugins.forEach(function (plugin) {
        _this23.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this24 = this;
      this.component.connect();
      this.elementEventListeners.forEach(function (_ref6) {
        var event = _ref6.event,
          callback = _ref6.callback;
        _this24.component.element.addEventListener(event, callback);
      });
      ComponentRegistry$1.registerComponent(this.element, this.component);
      this.dispatchEvent('connect');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this25 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref7) {
        var event = _ref7.event,
          callback = _ref7.callback;
        _this25.component.element.removeEventListener(event, callback);
      });
      ComponentRegistry$1.unregisterComponent(this.element);
      this.dispatchEvent('disconnect');
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === 'input' || event.type === 'change') {
        throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.target)));
      }
      this.updateModelFromElementEvent(event.target, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this26 = this;
      var rawAction = event.currentTarget.dataset.actionName;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var validModifiers = new Map();
        validModifiers.set('prevent', function () {
          event.preventDefault();
        });
        validModifiers.set('stop', function () {
          event.stopPropagation();
        });
        validModifiers.set('self', function () {
          if (event.target !== event.currentTarget) {
            return;
          }
        });
        validModifiers.set('debounce', function (modifier) {
          debounce = modifier.value ? parseInt(modifier.value) : true;
        });
        directive.modifiers.forEach(function (modifier) {
          var _a;
          if (validModifiers.has(modifier.name)) {
            var callable = (_a = validModifiers.get(modifier.name)) !== null && _a !== void 0 ? _a : function () {};
            callable(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(', '), "."));
        });
        _this26.component.action(directive.action, directive.named, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) {
          _this26.pendingActionTriggerModelElement = event.currentTarget;
        }
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      this.component.render();
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'input');
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) {
        return;
      }
      this.updateModelFromElementEvent(target, 'change');
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) {
        return;
      }
      if (!(element instanceof HTMLElement)) {
        throw new Error('Could not update model for non HTMLElement');
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) {
        return;
      }
      var modelBinding = getModelBinding(modelDirective);
      if (!modelBinding.targetEventName) {
        modelBinding.targetEventName = 'input';
      }
      if (this.pendingActionTriggerModelElement === element) {
        modelBinding.shouldRender = false;
      }
      if (eventName === 'change' && modelBinding.targetEventName === 'input') {
        modelBinding.targetEventName = 'change';
      }
      if (eventName && modelBinding.targetEventName !== eventName) {
        return;
      }
      if (false === modelBinding.debounce) {
        if (modelBinding.targetEventName === 'input') {
          modelBinding.debounce = true;
        } else {
          modelBinding.debounce = 0;
        }
      }
      var finalValue = getValueFromElement(element, this.component.valueStore);
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "handleConnectedControllerEvent",
    value: function handleConnectedControllerEvent(event) {
      if (event.target === this.element) {
        return;
      }
      var childController = event.detail.controller;
      if (childController.component.getParent()) {
        return;
      }
      var modelDirectives = getAllModelDirectiveFromElements(childController.element);
      var modelBindings = modelDirectives.map(getModelBinding);
      this.component.addChild(childController.component, modelBindings);
      childController.element.addEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
    }
  }, {
    key: "handleDisconnectedChildControllerEvent",
    value: function handleDisconnectedChildControllerEvent(event) {
      var childController = event.detail.controller;
      childController.element.removeEventListener('live:disconnect', this.handleDisconnectedChildControllerEvent);
      if (childController.component.getParent() !== this.component) {
        return;
      }
      this.component.removeChild(childController.component);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: 'live',
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_58__.Controller);
default_1.values = {
  url: String,
  data: Object,
  props: Object,
  csrf: String,
  debounce: {
    type: Number,
    "default": 150
  },
  id: String,
  fingerprint: String
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/styles/live.css":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/styles/live.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_alpinejs_dist_module_-ceadad"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtNQUN4QyxJQUFJLENBQUMyQixRQUFRLENBQUNucEIsSUFBSSxFQUFFO1FBQUU4b0IsTUFBTSxFQUFOQSxNQUFNO1FBQUUvYixNQUFNLEVBQUUsTUFBTTtRQUFFbWMsVUFBVSxFQUFWQSxVQUFVO1FBQUVFLE9BQU8sRUFBRUg7TUFBVSxDQUFDLENBQUM7SUFDbkY7RUFBQztFQUFBLE9BQUF0QyxTQUFBO0FBQUEsRUF2S21CbnZCLDJEQUFVO0FBeUtsQ212QixTQUFTLENBQUN2cUIsTUFBTSxHQUFHO0VBQ2ZpakIsR0FBRyxFQUFFcmMsTUFBTTtFQUNYeUgsSUFBSSxFQUFFaFIsTUFBTTtFQUNaaUosS0FBSyxFQUFFakosTUFBTTtFQUNiNHZCLElBQUksRUFBRXJtQixNQUFNO0VBQ1pzVyxRQUFRLEVBQUU7SUFBRTNkLElBQUksRUFBRTJILE1BQU07SUFBRSxXQUFTO0VBQUksQ0FBQztFQUN4Q3VOLEVBQUUsRUFBRTdOLE1BQU07RUFDVmtWLFdBQVcsRUFBRWxWO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3MEVEOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvYXNzZXRzL2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz82YmU2Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9zdHlsZXMvbGl2ZS5jc3M/MDJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZV9jb250cm9sbGVyLmpzJztcbmltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvc3R5bGVzL2xpdmUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlci1pY29uXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiZmxleFwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuXG5pbXBvcnQgQWxwaW5lIGZyb20gJ2FscGluZWpzJ1xud2luZG93LkFscGluZSA9IEFscGluZVxuQWxwaW5lLnN0YXJ0KCkiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZXMoY29udGVudCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG4gICAgfVxuICAgIGxldCBjdXJyZW50QWN0aW9uTmFtZSA9ICcnO1xuICAgIGxldCBjdXJyZW50QXJndW1lbnROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gJyc7XG4gICAgbGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE5hbWVkQXJndW1lbnRzID0ge307XG4gICAgbGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcbiAgICBsZXQgc3RhdGUgPSAnYWN0aW9uJztcbiAgICBjb25zdCBnZXRMYXN0QWN0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGFueSBkaXJlY3RpdmVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZXNbZGlyZWN0aXZlcy5sZW5ndGggLSAxXS5hY3Rpb247XG4gICAgfTtcbiAgICBjb25zdCBwdXNoSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMucHVzaCh7XG4gICAgICAgICAgICBhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXJnczogY3VycmVudEFyZ3VtZW50cyxcbiAgICAgICAgICAgIG5hbWVkOiBjdXJyZW50TmFtZWRBcmd1bWVudHMsXG4gICAgICAgICAgICBtb2RpZmllcnM6IGN1cnJlbnRNb2RpZmllcnMsXG4gICAgICAgICAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRBY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50cyA9IFtdO1xuICAgICAgICBjdXJyZW50TmFtZWRBcmd1bWVudHMgPSB7fTtcbiAgICAgICAgY3VycmVudE1vZGlmaWVycyA9IFtdO1xuICAgICAgICBzdGF0ZSA9ICdhY3Rpb24nO1xuICAgIH07XG4gICAgY29uc3QgcHVzaEFyZ3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtaXhlZEFyZ1R5cGVzRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vcm1hbCBhbmQgbmFtZWQgYXJndW1lbnRzIGNhbm5vdCBiZSBtaXhlZCBpbnNpZGUgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCJgKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROYW1lZEFyZ3VtZW50c1tjdXJyZW50QXJndW1lbnROYW1lLnRyaW0oKV0gPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50TmFtZWRBcmd1bWVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhlZEFyZ1R5cGVzRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudHMucHVzaChjdXJyZW50QXJndW1lbnRWYWx1ZS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICB9O1xuICAgIGNvbnN0IHB1c2hNb2RpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnROYW1lZEFyZ3VtZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBuYW1lZCBhcmd1bWVudHMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgPSAnJztcbiAgICAgICAgY3VycmVudEFyZ3VtZW50TmFtZSA9ICcnO1xuICAgICAgICBjdXJyZW50QXJndW1lbnRzID0gW107XG4gICAgICAgIHN0YXRlID0gJ2FjdGlvbic7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGNvbnRlbnRbaV07XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9ICdhcmd1bWVudHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hJbnN0cnVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ3wnKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hNb2RpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FyZ3VtZW50cyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQXJndW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXJfYXJndW1lbnRzJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFyZ3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudE5hbWUgPSBjdXJyZW50QXJndW1lbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZ3VtZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBcmd1bWVudFZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnfCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaE1vZGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhciAhPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzcGFjZSBhZnRlciAke2dldExhc3RBY3Rpb25OYW1lKCl9KClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICBjYXNlICdhZnRlcl9hcmd1bWVudHMnOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgcHVzaEluc3RydWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGEgY2xvc2luZyBcIilcIiBhZnRlciBcIiR7Y3VycmVudEFjdGlvbk5hbWV9XCI/YCk7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU3BhY2VkQXJyYXkocGFydHMpIHtcbiAgICBjb25zdCBmaW5hbFBhcnRzID0gW107XG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBmaW5hbFBhcnRzLnB1c2goLi4ucGFydC5zcGxpdCgnICcpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWxQYXJ0cztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCkge1xuICAgIHJldHVybiAobW9kZWxcbiAgICAgICAgLnJlcGxhY2UoL1xcW10kLywgJycpXG4gICAgICAgIC5zcGxpdCgnWycpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgnXScsICcnKTtcbiAgICB9KVxuICAgICAgICAuam9pbignLicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZURhdGEgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vZGVsTmFtZURhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB2YWx1ZVN0b3JlLmdldChtb2RlbE5hbWVEYXRhLmFjdGlvbik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaGVja2VkID8gaW5wdXRWYWx1ZShlbGVtZW50KSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKCd2YWx1ZScgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBlbGVtZW50LnZhbHVlID09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB2YWx1ZUZvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFycmF5V3JhcHBlZFZhbHVlID0gW10uY29uY2F0KHZhbHVlKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGFycmF5V3JhcHBlZFZhbHVlLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogdmFsdWU7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHBhcnNlRGlyZWN0aXZlcyhlbGVtZW50LmRhdGFzZXQubW9kZWwpO1xuICAgIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3RpdmUuYXJncy5sZW5ndGggPiAwIHx8IGRpcmVjdGl2ZS5uYW1lZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkYXRhLW1vZGVsPVwiJHtlbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICB9XG4gICAgICAgIGRpcmVjdGl2ZS5hY3Rpb24gPSBub3JtYWxpemVNb2RlbE5hbWUoZGlyZWN0aXZlLmFjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRhdGFNb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KTtcbiAgICBpZiAoZGF0YU1vZGVsRGlyZWN0aXZlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybUVsZW1lbnQgJiYgJ21vZGVsJyBpbiBmb3JtRWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgJyonKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IGRpcmVjdGl2ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCB8fCBkaXJlY3RpdmUubmFtZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aHJvd09uTWlzc2luZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIHRoZSBtb2RlbCBuYW1lIGZvciBcIiR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1cIjogdGhlIGVsZW1lbnQgbXVzdCBlaXRoZXIgaGF2ZSBhIFwiZGF0YS1tb2RlbFwiIChvciBcIm5hbWVcIiBhdHRyaWJ1dGUgbGl2aW5nIGluc2lkZSBhIDxmb3JtIGRhdGEtbW9kZWw9XCIqXCI+KS5gKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmb3VuZENoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gICAgY29tcG9uZW50LmdldENoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKGZvdW5kQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZENoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhZm91bmRDaGlsZENvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGNsb25lSFRNTEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGNsb25lIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IEhUTUwgY29udGFpbnMgJHt0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50fSBlbGVtZW50cywgYnV0IG9ubHkgMSByb290IGVsZW1lbnQgaXMgYWxsb3dlZC5gKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGQgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZShlbGVtZW50LCBuZXdUYWcpIHtcbiAgICBjb25zdCBvcmlnaW5hbFRhZyA9IGVsZW1lbnQudGFnTmFtZTtcbiAgICBjb25zdCBzdGFydFJYID0gbmV3IFJlZ0V4cCgnXjwnICsgb3JpZ2luYWxUYWcsICdpJyk7XG4gICAgY29uc3QgZW5kUlggPSBuZXcgUmVnRXhwKG9yaWdpbmFsVGFnICsgJz4kJywgJ2knKTtcbiAgICBjb25zdCBzdGFydFN1YnN0ID0gJzwnICsgbmV3VGFnO1xuICAgIGNvbnN0IGVuZFN1YnN0ID0gbmV3VGFnICsgJz4nO1xuICAgIGNvbnN0IG5ld0hUTUwgPSBlbGVtZW50Lm91dGVySFRNTC5yZXBsYWNlKHN0YXJ0UlgsIHN0YXJ0U3Vic3QpLnJlcGxhY2UoZW5kUlgsIGVuZFN1YnN0KTtcbiAgICByZXR1cm4gaHRtbFRvRWxlbWVudChuZXdIVE1MKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgICAgICA/IGVsZW1lbnQub3V0ZXJIVE1MLnNsaWNlKDAsIGVsZW1lbnQub3V0ZXJIVE1MLmluZGV4T2YoZWxlbWVudC5pbm5lckhUTUwpKVxuICAgICAgICA6IGVsZW1lbnQub3V0ZXJIVE1MO1xufVxuY29uc3QgZ2V0TXVsdGlwbGVDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGN1cnJlbnRWYWx1ZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0VmFsdWUoZWxlbWVudCk7XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50VmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlcztcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY3VycmVudFZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnZhbHVlID8gZWxlbWVudC5kYXRhc2V0LnZhbHVlIDogZWxlbWVudC52YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIGdldERlZXBEYXRhKGRhdGEsIHByb3BlcnR5UGF0aCkge1xuICAgIGNvbnN0IHsgY3VycmVudExldmVsRGF0YSwgZmluYWxLZXkgfSA9IHBhcnNlRGVlcERhdGEoZGF0YSwgcHJvcGVydHlQYXRoKTtcbiAgICBpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgcHJvcGVydHlQYXRoKSB7XG4gICAgY29uc3QgZmluYWxEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgbGV0IGN1cnJlbnRMZXZlbERhdGEgPSBmaW5hbERhdGE7XG4gICAgY29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjdXJyZW50TGV2ZWxEYXRhID0gY3VycmVudExldmVsRGF0YVtwYXJ0c1tpXV07XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsS2V5ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudExldmVsRGF0YSxcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBmaW5hbEtleSxcbiAgICAgICAgcGFydHMsXG4gICAgfTtcbn07XG5mdW5jdGlvbiBzZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgsIHZhbHVlKSB7XG4gICAgY29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbERhdGEsIGZpbmFsS2V5LCBwYXJ0cyB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuICAgIGlmICh0eXBlb2YgY3VycmVudExldmVsRGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGFzdFBhcnQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50TGV2ZWxEYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2V0IGRhdGEtbW9kZWw9XCIke3Byb3BlcnR5UGF0aH1cIi4gVGhlIHBhcmVudCBcIiR7cGFydHMuam9pbignLicpfVwiIGRhdGEgZG9lcyBub3QgZXhpc3QuIERpZCB5b3UgZm9yZ2V0IHRvIGV4cG9zZSBcIiR7cGFydHNbMF19XCIgYXMgYSBMaXZlUHJvcD9gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZXQgZGF0YS1tb2RlbD1cIiR7cHJvcGVydHlQYXRofVwiLiBUaGUgcGFyZW50IFwiJHtwYXJ0cy5qb2luKCcuJyl9XCIgZGF0YSBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYW4gb2JqZWN0IChpdCdzIFwiJHtjdXJyZW50TGV2ZWxEYXRhfVwiKS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIGV4cG9zZWQ9e1wiJHtsYXN0UGFydH1cIn0gdG8gaXRzIExpdmVQcm9wP2ApO1xuICAgIH1cbiAgICBpZiAoY3VycmVudExldmVsRGF0YVtmaW5hbEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHBhcnRzLnBvcCgpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kZWwgbmFtZSAke3Byb3BlcnR5UGF0aH0gd2FzIG5ldmVyIGluaXRpYWxpemVkLiBEaWQgeW91IGZvcmdldCB0byBhZGQgZXhwb3NlZD17XCIke2xhc3RQYXJ0fVwifSB0byBpdHMgTGl2ZVByb3A/YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtb2RlbCBuYW1lIFwiJHtwcm9wZXJ0eVBhdGh9XCIgd2FzIG5ldmVyIGluaXRpYWxpemVkLiBEaWQgeW91IGZvcmdldCB0byBleHBvc2UgXCIke2xhc3RQYXJ0fVwiIGFzIGEgTGl2ZVByb3A/IEF2YWlsYWJsZSBtb2RlbHMgdmFsdWVzIGFyZTogJHtPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwID8gT2JqZWN0LmtleXMoZGF0YSkuam9pbignLCAnKSA6ICcobm9uZSknfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnRMZXZlbERhdGFbZmluYWxLZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcbn1cblxuY2xhc3MgVmFsdWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkTW9kZWxzID0gW107XG4gICAgICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdldERlZXBEYXRhKHRoaXMuZGF0YSwgbm9ybWFsaXplZE5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldERlZXBEYXRhKHRoaXMucHJvcHMsIG5vcm1hbGl6ZWROYW1lKTtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlICYmICF0aGlzLnVwZGF0ZWRNb2RlbHMuaW5jbHVkZXMobm9ybWFsaXplZE5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMucHVzaChub3JtYWxpemVkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhID0gc2V0RGVlcERhdGEodGhpcy5kYXRhLCBub3JtYWxpemVkTmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlICE9PSB2YWx1ZTtcbiAgICB9XG4gICAgYWxsKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgdGhpcy5kYXRhKTtcbiAgICB9XG4gICAgcmVpbml0aWFsaXplRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudXBkYXRlZE1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZWluaXRpYWxpemVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJvcHMpID09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gMTE7XG5cbmZ1bmN0aW9uIG1vcnBoQXR0cnMoZnJvbU5vZGUsIHRvTm9kZSkge1xuICAgIHZhciB0b05vZGVBdHRycyA9IHRvTm9kZS5hdHRyaWJ1dGVzO1xuICAgIHZhciBhdHRyO1xuICAgIHZhciBhdHRyTmFtZTtcbiAgICB2YXIgYXR0ck5hbWVzcGFjZVVSSTtcbiAgICB2YXIgYXR0clZhbHVlO1xuICAgIHZhciBmcm9tVmFsdWU7XG5cbiAgICAvLyBkb2N1bWVudC1mcmFnbWVudHMgZG9udCBoYXZlIGF0dHJpYnV0ZXMgc28gbGV0cyBub3QgZG8gYW55dGhpbmdcbiAgICBpZiAodG9Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8IGZyb21Ob2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGF0dHJpYnV0ZXMgb24gb3JpZ2luYWwgRE9NIGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gdG9Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IHRvTm9kZUF0dHJzW2ldO1xuICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgYXR0ck5hbWVzcGFjZVVSSSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICBhdHRyVmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgIGlmIChhdHRyTmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubG9jYWxOYW1lIHx8IGF0dHJOYW1lO1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlTlMoYXR0ck5hbWVzcGFjZVVSSSwgYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZnJvbVZhbHVlICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5wcmVmaXggPT09ICd4bWxucycpe1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTsgLy8gSXQncyBub3QgYWxsb3dlZCB0byBzZXQgYW4gYXR0cmlidXRlIHdpdGggdGhlIFhNTE5TIG5hbWVzcGFjZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGB4bWxuc2AgcHJlZml4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnNldEF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbVZhbHVlID0gZnJvbU5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGZyb21WYWx1ZSAhPT0gYXR0clZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnJvbU5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBleHRyYSBhdHRyaWJ1dGVzIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudCB0aGF0XG4gICAgLy8gd2VyZW4ndCBmb3VuZCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgdmFyIGZyb21Ob2RlQXR0cnMgPSBmcm9tTm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yICh2YXIgZCA9IGZyb21Ob2RlQXR0cnMubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgYXR0ciA9IGZyb21Ob2RlQXR0cnNbZF07XG4gICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICBhdHRyTmFtZXNwYWNlVVJJID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5sb2NhbE5hbWUgfHwgYXR0ck5hbWU7XG5cbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKGF0dHJOYW1lc3BhY2VVUkksIGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdG9Ob2RlLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgcmFuZ2U7IC8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciBOU19YSFRNTCA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcblxudmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbnZhciBIQVNfVEVNUExBVEVfU1VQUE9SVCA9ICEhZG9jICYmICdjb250ZW50JyBpbiBkb2MuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnZhciBIQVNfUkFOR0VfU1VQUE9SVCA9ICEhZG9jICYmIGRvYy5jcmVhdGVSYW5nZSAmJiAnY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50JyBpbiBkb2MuY3JlYXRlUmFuZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gc3RyO1xuICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVJhbmdlKHN0cikge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSBkb2MuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2MuYm9keSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50RnJvbVdyYXAoc3RyKSB7XG4gICAgdmFyIGZyYWdtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgcmV0dXJuIGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG59XG5cbi8qKlxuICogVGhpcyBpcyBhYm91dCB0aGUgc2FtZVxuICogdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xuICogcmV0dXJuIGh0bWwuYm9keS5maXJzdENoaWxkO1xuICpcbiAqIEBtZXRob2QgdG9FbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuICAgIGlmIChIQVNfVEVNUExBVEVfU1VQUE9SVCkge1xuICAgICAgLy8gYXZvaWQgcmVzdHJpY3Rpb25zIG9uIGNvbnRlbnQgZm9yIHRoaW5ncyBsaWtlIGA8dHI+PHRoPkhpPC90aD48L3RyPmAgd2hpY2hcbiAgICAgIC8vIGNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCBkb2Vzbid0IHN1cHBvcnRcbiAgICAgIC8vIDx0ZW1wbGF0ZT4gc3VwcG9ydCBub3QgYXZhaWxhYmxlIGluIElFXG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tVGVtcGxhdGUoc3RyKTtcbiAgICB9IGVsc2UgaWYgKEhBU19SQU5HRV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tUmFuZ2Uoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRnJhZ21lbnRGcm9tV3JhcChzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0d28gbm9kZSdzIG5hbWVzIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBOT1RFOiBXZSBkb24ndCBib3RoZXIgY2hlY2tpbmcgYG5hbWVzcGFjZVVSSWAgYmVjYXVzZSB5b3Ugd2lsbCBuZXZlciBmaW5kIHR3byBIVE1MIGVsZW1lbnRzIHdpdGggdGhlIHNhbWVcbiAqICAgICAgIG5vZGVOYW1lIGFuZCBkaWZmZXJlbnQgbmFtZXNwYWNlIFVSSXMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGIgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBjb21wYXJlTm9kZU5hbWVzKGZyb21FbCwgdG9FbCkge1xuICAgIHZhciBmcm9tTm9kZU5hbWUgPSBmcm9tRWwubm9kZU5hbWU7XG4gICAgdmFyIHRvTm9kZU5hbWUgPSB0b0VsLm5vZGVOYW1lO1xuICAgIHZhciBmcm9tQ29kZVN0YXJ0LCB0b0NvZGVTdGFydDtcblxuICAgIGlmIChmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnJvbUNvZGVTdGFydCA9IGZyb21Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuICAgIHRvQ29kZVN0YXJ0ID0gdG9Ob2RlTmFtZS5jaGFyQ29kZUF0KDApO1xuXG4gICAgLy8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgdmlydHVhbCBET00gbm9kZSBvciBTVkcgbm9kZSB0aGVuIHdlIG1heVxuICAgIC8vIG5lZWQgdG8gbm9ybWFsaXplIHRoZSB0YWcgbmFtZSBiZWZvcmUgY29tcGFyaW5nLiBOb3JtYWwgSFRNTCBlbGVtZW50cyB0aGF0IGFyZVxuICAgIC8vIGluIHRoZSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgIC8vIGFyZSBjb252ZXJ0ZWQgdG8gdXBwZXIgY2FzZVxuICAgIGlmIChmcm9tQ29kZVN0YXJ0IDw9IDkwICYmIHRvQ29kZVN0YXJ0ID49IDk3KSB7IC8vIGZyb20gaXMgdXBwZXIgYW5kIHRvIGlzIGxvd2VyXG4gICAgICAgIHJldHVybiBmcm9tTm9kZU5hbWUgPT09IHRvTm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRvQ29kZVN0YXJ0IDw9IDkwICYmIGZyb21Db2RlU3RhcnQgPj0gOTcpIHsgLy8gdG8gaXMgdXBwZXIgYW5kIGZyb20gaXMgbG93ZXJcbiAgICAgICAgcmV0dXJuIHRvTm9kZU5hbWUgPT09IGZyb21Ob2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQsIG9wdGlvbmFsbHkgd2l0aCBhIGtub3duIG5hbWVzcGFjZSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGVsZW1lbnQgbmFtZSwgZS5nLiAnZGl2JyBvciAnc3ZnJ1xuICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lc3BhY2VVUkldIHRoZSBlbGVtZW50J3MgbmFtZXNwYWNlIFVSSSwgaS5lLiB0aGUgdmFsdWUgb2ZcbiAqIGl0cyBgeG1sbnNgIGF0dHJpYnV0ZSBvciBpdHMgaW5mZXJyZWQgbmFtZXNwYWNlLlxuICpcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lLCBuYW1lc3BhY2VVUkkpIHtcbiAgICByZXR1cm4gIW5hbWVzcGFjZVVSSSB8fCBuYW1lc3BhY2VVUkkgPT09IE5TX1hIVE1MID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQobmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgbmFtZSk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGN1ckNoaWxkKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdG9FbC5hcHBlbmRDaGlsZChjdXJDaGlsZCk7XG4gICAgICAgIGN1ckNoaWxkID0gbmV4dENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gdG9FbDtcbn1cblxuZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyUHJvcChmcm9tRWwsIHRvRWwsIG5hbWUpIHtcbiAgICBpZiAoZnJvbUVsW25hbWVdICE9PSB0b0VsW25hbWVdKSB7XG4gICAgICAgIGZyb21FbFtuYW1lXSA9IHRvRWxbbmFtZV07XG4gICAgICAgIGlmIChmcm9tRWxbbmFtZV0pIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIHNwZWNpYWxFbEhhbmRsZXJzID0ge1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZnJvbUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50TmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnROYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBwYXJlbnROYW1lID0gcGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50TmFtZSA9PT0gJ1NFTEVDVCcgJiYgIXBhcmVudE5vZGUuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21FbC5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgJiYgIXRvRWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgTVMgRWRnZSBidWcgd2hlcmUgdGhlICdzZWxlY3RlZCcgYXR0cmlidXRlIGNhbiBvbmx5IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgaWYgc2V0IHRvIGEgbm9uLWVtcHR5IHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjA4NzY3OS9cbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXNldCBzZWxlY3QgZWxlbWVudCdzIHNlbGVjdGVkSW5kZXggdG8gLTEsIG90aGVyd2lzZSBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gZnJvbUVsLnNlbGVjdGVkIHVzaW5nIHRoZSBzeW5jQm9vbGVhbkF0dHJQcm9wIGJlbG93IGhhcyBubyBlZmZlY3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNvcnJlY3Qgc2VsZWN0ZWRJbmRleCB3aWxsIGJlIHNldCBpbiB0aGUgU0VMRUNUIHNwZWNpYWwgaGFuZGxlciBiZWxvdy5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ3NlbGVjdGVkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgXCJ2YWx1ZVwiIGF0dHJpYnV0ZSBpcyBzcGVjaWFsIGZvciB0aGUgPGlucHV0PiBlbGVtZW50IHNpbmNlIGl0IHNldHNcbiAgICAgKiB0aGUgaW5pdGlhbCB2YWx1ZS4gQ2hhbmdpbmcgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgd2l0aG91dCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInZhbHVlXCIgcHJvcGVydHkgd2lsbCBoYXZlIG5vIGVmZmVjdCBzaW5jZSBpdCBpcyBvbmx5IHVzZWQgdG8gdGhlIHNldCB0aGVcbiAgICAgKiBpbml0aWFsIHZhbHVlLiAgU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZSwgYW5kIFwiZGlzYWJsZWRcIi5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIHN5bmNCb29sZWFuQXR0clByb3AoZnJvbUVsLCB0b0VsLCAnY2hlY2tlZCcpO1xuICAgICAgICBzeW5jQm9vbGVhbkF0dHJQcm9wKGZyb21FbCwgdG9FbCwgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdG9FbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgVEVYVEFSRUE6IGZ1bmN0aW9uKGZyb21FbCwgdG9FbCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0b0VsLnZhbHVlO1xuICAgICAgICBpZiAoZnJvbUVsLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgLy8gTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBzZXRzIHRoZSBwbGFjZWhvbGRlciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG5vZGUgdmFsdWUgYW5kIHZpc2UgdmVyc2EuIFRoaXMgaWdub3JlcyBhbiBlbXB0eSB1cGRhdGUuXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBmaXJzdENoaWxkLm5vZGVWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09IG5ld1ZhbHVlIHx8ICghbmV3VmFsdWUgJiYgb2xkVmFsdWUgPT0gZnJvbUVsLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU0VMRUNUOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgaWYgKCF0b0VsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbG9vcCB0aHJvdWdoIGNoaWxkcmVuIG9mIGZyb21FbCwgbm90IHRvRWwgc2luY2Ugbm9kZXMgY2FuIGJlIG1vdmVkXG4gICAgICAgICAgICAvLyBmcm9tIHRvRWwgdG8gZnJvbUVsIGRpcmVjdGx5IHdoZW4gbW9ycGhpbmcuXG4gICAgICAgICAgICAvLyBBdCB0aGUgdGltZSB0aGlzIHNwZWNpYWwgaGFuZGxlciBpcyBpbnZva2VkLCBhbGwgY2hpbGRyZW4gaGF2ZSBhbHJlYWR5IGJlZW4gbW9ycGhlZFxuICAgICAgICAgICAgLy8gYW5kIGFwcGVuZGVkIHRvIC8gcmVtb3ZlZCBmcm9tIGZyb21FbCwgc28gdXNpbmcgZnJvbUVsIGhlcmUgaXMgc2FmZSBhbmQgY29ycmVjdC5cbiAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IGZyb21FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9wdGdyb3VwO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IGN1ckNoaWxkLm5vZGVOYW1lICYmIGN1ckNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lID09PSAnT1BUR1JPVVAnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gY3VyQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gb3B0Z3JvdXAuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBjdXJDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJDaGlsZCAmJiBvcHRncm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBvcHRncm91cC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJvbUVsLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxID0gMTE7XG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdEdldE5vZGVLZXkobm9kZSkge1xuICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSkgfHwgbm9kZS5pZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3JwaGRvbUZhY3RvcnkobW9ycGhBdHRycykge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRvTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJyNkb2N1bWVudCcgfHwgZnJvbU5vZGUubm9kZU5hbWUgPT09ICdIVE1MJyB8fCBmcm9tTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvTm9kZUh0bWwgPSB0b05vZGU7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICAgICAgICAgICAgICB0b05vZGUuaW5uZXJIVE1MID0gdG9Ob2RlSHRtbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Ob2RlID0gdG9FbGVtZW50KHRvTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0Tm9kZUtleSA9IG9wdGlvbnMuZ2V0Tm9kZUtleSB8fCBkZWZhdWx0R2V0Tm9kZUtleTtcbiAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVBZGRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25Ob2RlQWRkZWQgPSBvcHRpb25zLm9uTm9kZUFkZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsVXBkYXRlZCA9IG9wdGlvbnMub25CZWZvcmVFbFVwZGF0ZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uRWxVcGRhdGVkID0gb3B0aW9ucy5vbkVsVXBkYXRlZCB8fCBub29wO1xuICAgICAgICB2YXIgb25CZWZvcmVOb2RlRGlzY2FyZGVkID0gb3B0aW9ucy5vbkJlZm9yZU5vZGVEaXNjYXJkZWQgfHwgbm9vcDtcbiAgICAgICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBvbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkID0gb3B0aW9ucy5vbkJlZm9yZUVsQ2hpbGRyZW5VcGRhdGVkIHx8IG5vb3A7XG4gICAgICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIGFzIGEgbG9va3VwIHRvIHF1aWNrbHkgZmluZCBhbGwga2V5ZWQgZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlLlxuICAgICAgICB2YXIgZnJvbU5vZGVzTG9va3VwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIGtleWVkUmVtb3ZhbExpc3QgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBhZGRLZXllZFJlbW92YWwoa2V5KSB7XG4gICAgICAgICAgICBrZXllZFJlbW92YWxMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKG5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBLZXllZE5vZGVzICYmIChrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBza2lwcGluZyBrZXllZCBub2RlcyB0aGVuIHdlIGFkZCB0aGUga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIGxpc3Qgc28gdGhhdCBpdCBjYW4gYmUgaGFuZGxlZCBhdCB0aGUgdmVyeSBlbmQuXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVwb3J0IHRoZSBub2RlIGFzIGRpc2NhcmRlZCBpZiBpdCBpcyBub3Qga2V5ZWQuIFdlIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXQgdGhlIGVuZCB3ZSBsb29wIHRocm91Z2ggYWxsIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSB1bm1hdGNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIGRpc2NhcmQgdGhlbSBpbiBvbmUgZmluYWwgcGFzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGEgRE9NIG5vZGUgb3V0IG9mIHRoZSBvcmlnaW5hbCBET01cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAgICAgICAgICogQHBhcmFtICB7Tm9kZX0gcGFyZW50Tm9kZSBUaGUgbm9kZXMgcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IHNraXBLZXllZE5vZGVzIElmIHRydWUgdGhlbiBlbGVtZW50cyB3aXRoIGtleXMgd2lsbCBiZSBza2lwcGVkIGFuZCBub3QgZGlzY2FyZGVkLlxuICAgICAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUsIHNraXBLZXllZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlLCBza2lwS2V5ZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAvLyBUcmVlV2Fsa2VyIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUocm9vdCkge1xuICAgICAgICAvLyAgICAgdmFyIHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAvLyAgICAgICAgIHJvb3QsXG4gICAgICAgIC8vICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGVsO1xuICAgICAgICAvLyAgICAgd2hpbGUoKGVsID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGVsKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGZyb21Ob2Rlc0xvb2t1cFtrZXldID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8gTm9kZUl0ZXJhdG9yIGltcGxlbWVudGF0aW9uIGlzIG5vIGZhc3RlciwgYnV0IGtlZXBpbmcgdGhpcyBhcm91bmQgaW4gY2FzZSB0aGlzIGNoYW5nZXMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvL1xuICAgICAgICAvLyBmdW5jdGlvbiBpbmRleFRyZWUobm9kZSkge1xuICAgICAgICAvLyAgICAgdmFyIG5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihub2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCk7XG4gICAgICAgIC8vICAgICB2YXIgZWw7XG4gICAgICAgIC8vICAgICB3aGlsZSgoZWwgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIga2V5ID0gZ2V0Tm9kZUtleShlbCk7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluZGV4VHJlZShub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUkMSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tTm9kZXNMb29rdXBba2V5XSA9IGN1ckNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2FsayByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICBpbmRleFRyZWUoY3VyQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhUcmVlKGZyb21Ob2RlKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVOb2RlQWRkZWQoZWwpIHtcbiAgICAgICAgICAgIG9uTm9kZUFkZGVkKGVsKTtcblxuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U2libGluZyA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE5vZGVLZXkoY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVubWF0Y2hlZEZyb21FbCA9IGZyb21Ob2Rlc0xvb2t1cFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBmaW5kIGEgZHVwbGljYXRlICNpZCBub2RlIGluIGNhY2hlLCByZXBsYWNlIGBlbGAgd2l0aCBjYWNoZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbW9ycGggaXQgdG8gdGhlIGNoaWxkIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bm1hdGNoZWRGcm9tRWwgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJDaGlsZCwgdW5tYXRjaGVkRnJvbUVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQ2hpbGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodW5tYXRjaGVkRnJvbUVsLCBjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKHVubWF0Y2hlZEZyb21FbCwgY3VyQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2FsbCBmb3IgY3VyQ2hpbGQgYW5kIGl0J3MgY2hpbGRyZW4gdG8gc2VlIGlmIHdlIGZpbmQgc29tZXRoaW5nIGluXG4gICAgICAgICAgICAgICAgICAvLyBmcm9tTm9kZXNMb29rdXBcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU5vZGVBZGRlZChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG9mIHRoZSBcInRvIG5vZGVzXCIuIElmIGN1ckZyb21Ob2RlQ2hpbGQgaXNcbiAgICAgICAgICAgIC8vIG5vbi1udWxsIHRoZW4gd2Ugc3RpbGwgaGF2ZSBzb21lIGZyb20gbm9kZXMgbGVmdCBvdmVyIHRoYXQgbmVlZFxuICAgICAgICAgICAgLy8gdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoKGN1ckZyb21Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJGcm9tTm9kZUNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgYWRkS2V5ZWRSZW1vdmFsKGN1ckZyb21Ob2RlS2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgc3RpbGwgYSBjaGFuY2UgdGhleSB3aWxsIGJlIG1hdGNoZWQgdXAgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaEVsKGZyb21FbCwgdG9FbCwgY2hpbGRyZW5Pbmx5KSB7XG4gICAgICAgICAgICB2YXIgdG9FbEtleSA9IGdldE5vZGVLZXkodG9FbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0VsS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAgICAgICAgIC8vIERPTSBzbyBjbGVhciBpdCBvdXQgb2YgdGhlIHNhdmVkIGVsZW1lbnRzIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBkZWxldGUgZnJvbU5vZGVzTG9va3VwW3RvRWxLZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgaWYgKG9uQmVmb3JlRWxVcGRhdGVkKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgYXR0cmlidXRlcyBvbiBvcmlnaW5hbCBET00gZWxlbWVudCBmaXJzdFxuICAgICAgICAgICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25hbFxuICAgICAgICAgICAgICAgIG9uRWxVcGRhdGVkKGZyb21FbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZChmcm9tRWwsIHRvRWwpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJvbUVsLm5vZGVOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgIG1vcnBoQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwZWNpYWxFbEhhbmRsZXJzLlRFWFRBUkVBKGZyb21FbCwgdG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3JwaENoaWxkcmVuKGZyb21FbCwgdG9FbCkge1xuICAgICAgICAgICAgdmFyIGN1clRvTm9kZUNoaWxkID0gdG9FbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBjdXJUb05vZGVLZXk7XG4gICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVLZXk7XG5cbiAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0Zyb21FbDtcblxuICAgICAgICAgICAgLy8gd2FsayB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIG91dGVyOiB3aGlsZSAoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlS2V5ID0gZ2V0Tm9kZUtleShjdXJUb05vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3YWxrIHRoZSBmcm9tTm9kZSBjaGlsZHJlbiBhbGwgdGhlIHdheSB0aHJvdWdoXG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbU5leHRTaWJsaW5nID0gY3VyRnJvbU5vZGVDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuaXNTYW1lTm9kZSAmJiBjdXJUb05vZGVDaGlsZC5pc1NhbWVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUtleSA9IGdldE5vZGVLZXkoY3VyRnJvbU5vZGVDaGlsZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlVHlwZSA9IGN1ckZyb21Ob2RlQ2hpbGQubm9kZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBtZWFucyBpZiB0aGUgY3VyRnJvbU5vZGVDaGlsZCBkb2VzbnQgaGF2ZSBhIG1hdGNoIHdpdGggdGhlIGN1clRvTm9kZUNoaWxkXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0NvbXBhdGlibGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlVHlwZSA9PT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRhcmdldCBub2RlIGhhcyBhIGtleSBzbyB3ZSB3YW50IHRvIG1hdGNoIGl0IHVwIHdpdGggdGhlIGNvcnJlY3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clRvTm9kZUtleSAhPT0gY3VyRnJvbU5vZGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIGRvZXMgbm90IGhhdmUgYSBtYXRjaGluZyBrZXkgc29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGNoZWNrIG91ciBsb29rdXAgdG8gc2VlIGlmIHRoZXJlIGlzIGEgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21OZXh0U2libGluZyA9PT0gbWF0Y2hpbmdGcm9tRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBzaW5nbGUgZWxlbWVudCByZW1vdmFscy4gVG8gYXZvaWQgcmVtb3ZpbmcgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERPTSBub2RlIG91dCBvZiB0aGUgdHJlZSAoc2luY2UgdGhhdCBjYW4gYnJlYWsgQ1NTIHRyYW5zaXRpb25zLCBldGMuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBpbnN0ZWFkIGRpc2NhcmQgdGhlIGN1cnJlbnQgbm9kZSBhbmQgd2FpdCB1bnRpbCB0aGUgbmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpb24gdG8gcHJvcGVybHkgbWF0Y2ggdXAgdGhlIGtleWVkIHRhcmdldCBlbGVtZW50IHdpdGggaXRzIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBtYXRjaGluZyBrZXllZCBlbGVtZW50IHNvbWV3aGVyZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExldCdzIG1vdmUgdGhlIG9yaWdpbmFsIERPTSBub2RlIGludG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIG1vcnBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFdlIHVzZSBpbnNlcnRCZWZvcmUgaW5zdGVhZCBvZiByZXBsYWNlQ2hpbGQgYmVjYXVzZSB3ZSB3YW50IHRvIGdvIHRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGByZW1vdmVOb2RlKClgIGZ1bmN0aW9uIGZvciB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGRpc2NhcmRlZCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCBsaWZlY3ljbGUgaG9va3MgYXJlIGNvcnJlY3RseSBpbnZva2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5pbnNlcnRCZWZvcmUobWF0Y2hpbmdGcm9tRWwsIGN1ckZyb21Ob2RlQ2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgbm9kZSBpcyBrZXllZCBpdCBtaWdodCBiZSBtYXRjaGVkIHVwIGxhdGVyIHNvIHdlIGRlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYWN0dWFsIHJlbW92YWwgdG8gbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleWVkUmVtb3ZhbChjdXJGcm9tTm9kZUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiB3ZSBza2lwIG5lc3RlZCBrZXllZCBub2RlcyBmcm9tIGJlaW5nIHJlbW92ZWQgc2luY2UgdGhlcmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN0aWxsIGEgY2hhbmNlIHRoZXkgd2lsbCBiZSBtYXRjaGVkIHVwIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgdHJ1ZSAvKiBza2lwIGtleWVkIG5vZGVzICovKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBtYXRjaGluZ0Zyb21FbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBub2RlcyBhcmUgbm90IGNvbXBhdGlibGUgc2luY2UgdGhlIFwidG9cIiBub2RlIGhhcyBhIGtleSBhbmQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBtYXRjaGluZyBrZXllZCBub2RlIGluIHRoZSBzb3VyY2UgdHJlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaGFzIGEga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IGlzQ29tcGF0aWJsZSAhPT0gZmFsc2UgJiYgY29tcGFyZU5vZGVOYW1lcyhjdXJGcm9tTm9kZUNoaWxkLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBjb21wYXRpYmxlIERPTSBlbGVtZW50cyBzbyB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgXCJmcm9tXCIgbm9kZSB0byBtYXRjaCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQgRE9NIG5vZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1PUlBIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwoY3VyRnJvbU5vZGVDaGlsZCwgY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IFRFWFRfTk9ERSB8fCBjdXJGcm9tTm9kZVR5cGUgPT0gQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBvciBDb21tZW50IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW1wbHkgdXBkYXRlIG5vZGVWYWx1ZSBvbiB0aGUgb3JpZ2luYWwgbm9kZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgdGV4dCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUNoaWxkLm5vZGVWYWx1ZSAhPT0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQubm9kZVZhbHVlID0gY3VyVG9Ob2RlQ2hpbGQubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGF0aWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSBib3RoIHRoZSBcInRvXCIgY2hpbGQgYW5kIHRoZSBcImZyb21cIiBjaGlsZCBzaW5jZSB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIGVsc2UgdG8gZG8gYXMgd2UgYWxyZWFkeSByZWN1cnNpdmVseSBjYWxsZWQgbW9ycGhDaGlsZHJlbiBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gY29tcGF0aWJsZSBtYXRjaCBzbyByZW1vdmUgdGhlIG9sZCBub2RlIGZyb20gdGhlIERPTSBhbmQgY29udGludWUgdHJ5aW5nIHRvIGZpbmQgYVxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBpbiB0aGUgb3JpZ2luYWwgRE9NLiBIb3dldmVyLCB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIGZyb20gbm9kZSBpcyBub3Qga2V5ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgaXMgcG9zc2libGUgdGhhdCBhIGtleWVkIG5vZGUgbWlnaHQgbWF0Y2ggdXAgd2l0aCBhIG5vZGUgc29tZXdoZXJlIGVsc2UgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhcmdldCB0cmVlIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRpc2NhcmQgaXQganVzdCB5ZXQgc2luY2UgaXQgc3RpbGwgbWlnaHQgZmluZCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIGhvbWUgaW4gdGhlIGZpbmFsIERPTSB0cmVlLiBBZnRlciBldmVyeXRoaW5nIGlzIGRvbmUgd2Ugd2lsbCByZW1vdmUgYW55IGtleWVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgZGlkbid0IGZpbmQgYSBob21lXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5vZGUgaXMga2V5ZWQgaXQgbWlnaHQgYmUgbWF0Y2hlZCB1cCBsYXRlciBzbyB3ZSBkZWZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFjdHVhbCByZW1vdmFsIHRvIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRLZXllZFJlbW92YWwoY3VyRnJvbU5vZGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogd2Ugc2tpcCBuZXN0ZWQga2V5ZWQgbm9kZXMgZnJvbSBiZWluZyByZW1vdmVkIHNpbmNlIHRoZXJlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzdGlsbCBhIGNoYW5jZSB0aGV5IHdpbGwgYmUgbWF0Y2hlZCB1cCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIHRydWUgLyogc2tpcCBrZXllZCBub2RlcyAqLyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH0gLy8gRU5EOiB3aGlsZShjdXJGcm9tTm9kZUNoaWxkKSB7fVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZ290IHRoaXMgZmFyIHRoZW4gd2UgZGlkIG5vdCBmaW5kIGEgY2FuZGlkYXRlIG1hdGNoIGZvclxuICAgICAgICAgICAgICAgIC8vIG91ciBcInRvIG5vZGVcIiBhbmQgd2UgZXhoYXVzdGVkIGFsbCBvZiB0aGUgY2hpbGRyZW4gXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAvLyBub2Rlcy4gVGhlcmVmb3JlLCB3ZSB3aWxsIGp1c3QgYXBwZW5kIHRoZSBjdXJyZW50IFwidG9cIiBub2RlXG4gICAgICAgICAgICAgICAgLy8gdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVLZXkgJiYgKG1hdGNoaW5nRnJvbUVsID0gZnJvbU5vZGVzTG9va3VwW2N1clRvTm9kZUtleV0pICYmIGNvbXBhcmVOb2RlTmFtZXMobWF0Y2hpbmdGcm9tRWwsIGN1clRvTm9kZUNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tRWwuYXBwZW5kQ2hpbGQobWF0Y2hpbmdGcm9tRWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNT1JQSFxuICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKG1hdGNoaW5nRnJvbUVsLCBjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0ID0gb25CZWZvcmVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25CZWZvcmVOb2RlQWRkZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IG9uQmVmb3JlTm9kZUFkZGVkUmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlQ2hpbGQuYWN0dWFsaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSBjdXJUb05vZGVDaGlsZC5hY3R1YWxpemUoZnJvbUVsLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21FbC5hcHBlbmRDaGlsZChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOb2RlQWRkZWQoY3VyVG9Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFudXBGcm9tRWwoZnJvbUVsLCBjdXJGcm9tTm9kZUNoaWxkLCBjdXJGcm9tTm9kZUtleSk7XG5cbiAgICAgICAgICAgIHZhciBzcGVjaWFsRWxIYW5kbGVyID0gc3BlY2lhbEVsSGFuZGxlcnNbZnJvbUVsLm5vZGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbEVsSGFuZGxlcihmcm9tRWwsIHRvRWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIEVORDogbW9ycGhDaGlsZHJlbiguLi4pXG5cbiAgICAgICAgdmFyIG1vcnBoZWROb2RlID0gZnJvbU5vZGU7XG4gICAgICAgIHZhciBtb3JwaGVkTm9kZVR5cGUgPSBtb3JwaGVkTm9kZS5ub2RlVHlwZTtcbiAgICAgICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB3ZSBhcmUgZ2l2ZW4gdHdvIERPTSBub2RlcyB0aGF0IGFyZSBub3RcbiAgICAgICAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgICAgICAgIGlmIChtb3JwaGVkTm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIGlmICh0b05vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlTm9kZU5hbWVzKGZyb21Ob2RlLCB0b05vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQoZnJvbU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGNyZWF0ZUVsZW1lbnROUyh0b05vZGUubm9kZU5hbWUsIHRvTm9kZS5uYW1lc3BhY2VVUkkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSBURVhUX05PREUgfHwgbW9ycGhlZE5vZGVUeXBlID09PSBDT01NRU5UX05PREUpIHsgLy8gVGV4dCBvciBjb21tZW50IG5vZGVcbiAgICAgICAgICAgICAgICBpZiAodG9Ob2RlVHlwZSA9PT0gbW9ycGhlZE5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaGVkTm9kZS5ub2RlVmFsdWUgIT09IHRvTm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlLm5vZGVWYWx1ZSA9IHRvTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gdG9Ob2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3JwaGVkTm9kZSA9PT0gdG9Ob2RlKSB7XG4gICAgICAgICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCIgc28gd2UgaGFkIHRvXG4gICAgICAgICAgICAvLyB0b3NzIG91dCB0aGUgXCJmcm9tIG5vZGVcIiBhbmQgdXNlIHRoZSBcInRvIG5vZGVcIlxuICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b05vZGUuaXNTYW1lTm9kZSAmJiB0b05vZGUuaXNTYW1lTm9kZShtb3JwaGVkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vcnBoRWwobW9ycGhlZE5vZGUsIHRvTm9kZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgICAgICAgLy8gV2Ugbm93IG5lZWQgdG8gbG9vcCBvdmVyIGFueSBrZXllZCBub2RlcyB0aGF0IG1pZ2h0IG5lZWQgdG8gYmVcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIFdlIG9ubHkgZG8gdGhlIHJlbW92YWwgaWYgd2Uga25vdyB0aGF0IHRoZSBrZXllZCBub2RlXG4gICAgICAgICAgICAvLyBuZXZlciBmb3VuZCBhIG1hdGNoLiBXaGVuIGEga2V5ZWQgbm9kZSBpcyBtYXRjaGVkIHVwIHdlIHJlbW92ZVxuICAgICAgICAgICAgLy8gaXQgb3V0IG9mIGZyb21Ob2Rlc0xvb2t1cCBhbmQgd2UgdXNlIGZyb21Ob2Rlc0xvb2t1cCB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIC8vIGlmIGEga2V5ZWQgbm9kZSBoYXMgYmVlbiBtYXRjaGVkIHVwIG9yIG5vdFxuICAgICAgICAgICAgaWYgKGtleWVkUmVtb3ZhbExpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTAsIGxlbj1rZXllZFJlbW92YWxMaXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb1JlbW92ZSA9IGZyb21Ob2Rlc0xvb2t1cFtrZXllZFJlbW92YWxMaXN0W2ldXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoZWxUb1JlbW92ZSwgZWxUb1JlbW92ZS5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkcmVuT25seSAmJiBtb3JwaGVkTm9kZSAhPT0gZnJvbU5vZGUgJiYgZnJvbU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKG1vcnBoZWROb2RlLmFjdHVhbGl6ZSkge1xuICAgICAgICAgICAgICAgIG1vcnBoZWROb2RlID0gbW9ycGhlZE5vZGUuYWN0dWFsaXplKGZyb21Ob2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHRhcmdldCBub2RlIHRoZW4gd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgb2xkIERPTSBub2RlIGluIHRoZSBvcmlnaW5hbCBET00gdHJlZS4gVGhpcyBpcyBvbmx5XG4gICAgICAgICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgICAgICAgLy8gd2Uga25vdyBpcyB0aGUgY2FzZSBpZiBpdCBoYXMgYSBwYXJlbnQgbm9kZS5cbiAgICAgICAgICAgIGZyb21Ob2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1vcnBoZWROb2RlLCBmcm9tTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9ycGhlZE5vZGU7XG4gICAgfTtcbn1cblxudmFyIG1vcnBoZG9tID0gbW9ycGhkb21GYWN0b3J5KG1vcnBoQXR0cnMpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG4gICAgY29uc3QgaXNGaWxlSW5wdXQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcbiAgICBpZiAoIWlzRmlsZUlucHV0KSB7XG4gICAgICAgIGlmICgndmFsdWUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVNb3JwaGRvbShyb290RnJvbUVsZW1lbnQsIHJvb3RUb0VsZW1lbnQsIG1vZGlmaWVkRmllbGRFbGVtZW50cywgZ2V0RWxlbWVudFZhbHVlLCBjaGlsZENvbXBvbmVudHMsIGZpbmRDaGlsZENvbXBvbmVudCwgZ2V0S2V5RnJvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZENvbXBvbmVudE1hcCA9IG5ldyBNYXAoKTtcbiAgICBjaGlsZENvbXBvbmVudHMuZm9yRWFjaCgoY2hpbGRDb21wb25lbnQpID0+IHtcbiAgICAgICAgY2hpbGRDb21wb25lbnRNYXAuc2V0KGNoaWxkQ29tcG9uZW50LmVsZW1lbnQsIGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCBpcyBtaXNzaW5nIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50VG9FbGVtZW50ID0gZmluZENoaWxkQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50LmlkLCByb290VG9FbGVtZW50KTtcbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50VG9FbGVtZW50ICYmIGNoaWxkQ29tcG9uZW50VG9FbGVtZW50LnRhZ05hbWUgIT09IGNoaWxkQ29tcG9uZW50LmVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFnID0gY2xvbmVFbGVtZW50V2l0aE5ld1RhZ05hbWUoY2hpbGRDb21wb25lbnRUb0VsZW1lbnQsIGNoaWxkQ29tcG9uZW50LmVsZW1lbnQudGFnTmFtZSk7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudFRvRWxlbWVudC5yZXBsYWNlV2l0aChuZXdUYWcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9ycGhkb20ocm9vdEZyb21FbGVtZW50LCByb290VG9FbGVtZW50LCB7XG4gICAgICAgIGdldE5vZGVLZXk6IChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEtleUZyb21FbGVtZW50KG5vZGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZUVsVXBkYXRlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShmcm9tRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBmcm9tRWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB8fFxuICAgICAgICAgICAgICAgICEodG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHRvRWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRDb21wb25lbnRNYXAuZ2V0KGZyb21FbCkgfHwgZmFsc2U7XG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnQudXBkYXRlRnJvbU5ld0VsZW1lbnQodG9FbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZU9uRWxlbWVudCh0b0VsLCBnZXRFbGVtZW50VmFsdWUoZnJvbUVsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGZyb21FbC5pc0VxdWFsTm9kZSh0b0VsKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGcm9tRWwgPSBjbG9uZUhUTUxFbGVtZW50KGZyb21FbCk7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24obm9ybWFsaXplZEZyb21FbCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRvRWwgPSBjbG9uZUhUTUxFbGVtZW50KHRvRWwpO1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRUb0VsKTtcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEZyb21FbC5pc0VxdWFsTm9kZShub3JtYWxpemVkVG9FbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhZnJvbUVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlZm9yZU5vZGVEaXNjYXJkZWQobm9kZSkge1xuICAgICAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBVbnN5bmNlZElucHV0c1RyYWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxFbGVtZW50UmVzb2x2ZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG4gICAgICAgIHRoaXMudW5zeW5jZWRJbnB1dHMgPSBuZXcgVW5zeW5jZWRJbnB1dENvbnRhaW5lcigpO1xuICAgIH1cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgICB1cGRhdGVNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLmFkZChlbGVtZW50LCBtb2RlbE5hbWUpO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZElucHV0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudW5zeW5jZWRJbnB1dHMuZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcbiAgICB9XG59XG5jbGFzcyBVbnN5bmNlZElucHV0Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG4gICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKG1vZGVsTmFtZSkge1xuICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnNldChtb2RlbE5hbWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXNldFVuc3luY2VkRmllbGRzKCkge1xuICAgICAgICB0aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWxsVW5zeW5jZWRJbnB1dHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy51bnN5bmNlZE5vbk1vZGVsRmllbGRzLCAuLi50aGlzLnVuc3luY2VkTW9kZWxGaWVsZHMudmFsdWVzKCldO1xuICAgIH1cbiAgICBtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5pbmRleE9mKG1vZGVsTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VW5zeW5jZWRNb2RlbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG4gICAgfVxufVxuXG5jbGFzcyBIb29rTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3MuZ2V0KGhvb2tOYW1lKSB8fCBbXTtcbiAgICAgICAgaG9va3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuaG9va3Muc2V0KGhvb2tOYW1lLCBob29rcyk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcbiAgICB9XG4gICAgdHJpZ2dlckhvb2soaG9va05hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG4gICAgICAgIGhvb2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrZW5kUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Qm9keSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IGF3YWl0IHRoaXMucmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGlsZENvbXBvbmVudFdyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgbW9kZWxCaW5kaW5ncykge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tb2RlbEJpbmRpbmdzID0gbW9kZWxCaW5kaW5ncztcbiAgICB9XG59XG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHByb3BzLCBkYXRhLCBmaW5nZXJwcmludCwgaWQsIGJhY2tlbmQsIGVsZW1lbnREcml2ZXIpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVib3VuY2UgPSAxNTA7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5iYWNrZW5kID0gYmFja2VuZDtcbiAgICAgICAgdGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gZmluZ2VycHJpbnQ7XG4gICAgICAgIHRoaXMudmFsdWVTdG9yZSA9IG5ldyBWYWx1ZVN0b3JlKHByb3BzLCBkYXRhKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIgPSBuZXcgVW5zeW5jZWRJbnB1dHNUcmFja2VyKHRoaXMsIGVsZW1lbnREcml2ZXIpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcm9taXNlKCk7XG4gICAgICAgIHRoaXMub25DaGlsZENvbXBvbmVudE1vZGVsVXBkYXRlID0gdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkUGx1Z2luKHBsdWdpbikge1xuICAgICAgICBwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2Nvbm5lY3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnZGlzY29ubmVjdCcsIHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICAgIG9uKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhvb2tzLnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ob29rcy51bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldChtb2RlbCwgdmFsdWUsIHJlUmVuZGVyID0gZmFsc2UsIGRlYm91bmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuICAgICAgICBjb25zdCBtb2RlbE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobW9kZWwpO1xuICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdtb2RlbDpzZXQnLCBtb2RlbCwgdmFsdWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuICAgICAgICBpZiAocmVSZW5kZXIgJiYgaXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGdldERhdGEobW9kZWwpIHtcbiAgICAgICAgY29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBcIiR7bW9kZWx9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVTdG9yZS5nZXQobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgYWN0aW9uKG5hbWUsIGFyZ3MgPSB7fSwgZGVib3VuY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG4gICAgICAgIHRoaXMudHJ5U3RhcnRpbmdSZXF1ZXN0KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBnZXRVbnN5bmNlZE1vZGVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLmdldFVuc3luY2VkTW9kZWxzKCk7XG4gICAgfVxuICAgIGFkZENoaWxkKGNoaWxkLCBtb2RlbEJpbmRpbmdzID0gW10pIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZHJlbiBjb21wb25lbnRzIG11c3QgaGF2ZSBhbiBpZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNldChjaGlsZC5pZCwgbmV3IENoaWxkQ29tcG9uZW50V3JhcHBlcihjaGlsZCwgbW9kZWxCaW5kaW5ncykpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICBjaGlsZC5vbignbW9kZWw6c2V0JywgdGhpcy5vbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoIWNoaWxkLmlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoaWxkcmVuIGNvbXBvbmVudHMgbXVzdCBoYXZlIGFuIGlkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGNoaWxkLmlkKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY2hpbGQub2ZmKCdtb2RlbDpzZXQnLCB0aGlzLm9uQ2hpbGRDb21wb25lbnRNb2RlbFVwZGF0ZSk7XG4gICAgfVxuICAgIGdldFBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRDb21wb25lbnQsIGlkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZHJlbi5zZXQoaWQsIGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdFbGVtZW50KHRvRWwpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHModG9FbCk7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQ2hhbmdlZCA9IHRoaXMudmFsdWVTdG9yZS5yZWluaXRpYWxpemVQcm9wcyhwcm9wcyk7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdG9FbC5kYXRhc2V0LmxpdmVGaW5nZXJwcmludFZhbHVlO1xuICAgICAgICBpZiAoZmluZ2VycHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUobW9kZWxOYW1lLCB2YWx1ZSwgY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFjaGlsZENvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRXcmFwcGVyID0gdGhpcy5jaGlsZHJlbi5nZXQoY2hpbGRDb21wb25lbnQuaWQpO1xuICAgICAgICBpZiAoIWNoaWxkV3JhcHBlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNoaWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRXcmFwcGVyLm1vZGVsQmluZGluZ3MuZm9yRWFjaCgobW9kZWxCaW5kaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE1vZGVsTmFtZSA9IG1vZGVsQmluZGluZy5pbm5lck1vZGVsTmFtZSB8fCAndmFsdWUnO1xuICAgICAgICAgICAgaWYgKGNoaWxkTW9kZWxOYW1lICE9PSBtb2RlbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCB2YWx1ZSwgbW9kZWxCaW5kaW5nLnNob3VsZFJlbmRlciwgbW9kZWxCaW5kaW5nLmRlYm91bmNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRyeVN0YXJ0aW5nUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1SZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGVyZm9ybVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgdGhpcy5yZXNldFByb21pc2UoKTtcbiAgICAgICAgdGhpcy51bnN5bmNlZElucHV0c1RyYWNrZXIucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gdGhpcy5iYWNrZW5kLm1ha2VSZXF1ZXN0KHRoaXMudmFsdWVTdG9yZS5hbGwoKSwgdGhpcy5wZW5kaW5nQWN0aW9ucywgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMsIHRoaXMuZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSk7XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6c3RhcnRlZCcsIHRoaXMuZWxlbWVudCwgdGhpcy5iYWNrZW5kUmVxdWVzdCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucHJvbWlzZS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFja2VuZFJlc3BvbnNlID0gbmV3IEJhY2tlbmRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgYmFja2VuZFJlc3BvbnNlLmdldEJvZHkoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgIGlmIChoZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgIT09ICdhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbCcgJiYgIWhlYWRlcnMuZ2V0KCdYLUxpdmUtUmVkaXJlY3QnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0geyBkaXNwbGF5RXJyb3I6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXJIb29rKCdyZXNwb25zZTplcnJvcicsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9scy5kaXNwbGF5RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFcnJvcihodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVlc3RQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvY2Vzc1JlcmVuZGVyKGh0bWwsIGJhY2tlbmRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHsgc2hvdWxkUmVuZGVyOiB0cnVlIH07XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ3JlbmRlcjpzdGFydGVkJywgaHRtbCwgYmFja2VuZFJlc3BvbnNlLCBjb250cm9scyk7XG4gICAgICAgIGlmICghY29udHJvbHMuc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBUdXJibyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBUdXJiby52aXNpdChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygnbG9hZGluZy5zdGF0ZTpmaW5pc2hlZCcsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkTW9kZWxWYWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnVwZGF0ZWRNb2RlbHMuZm9yRWFjaCgobW9kZWxOYW1lKSA9PiB7XG4gICAgICAgICAgICBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0gPSB0aGlzLnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBodG1sVG9FbGVtZW50KGh0bWwpO1xuICAgICAgICAgICAgaWYgKCFuZXdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLWNvbnRyb2xsZXJ+PWxpdmVdJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBjb21wb25lbnQgSFRNTCByZXR1cm5lZDonKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlckhvb2soJ2xvYWRpbmcuc3RhdGU6ZmluaXNoZWQnLCBuZXdFbGVtZW50KTtcbiAgICAgICAgdGhpcy52YWx1ZVN0b3JlLnJlaW5pdGlhbGl6ZURhdGEodGhpcy5lbGVtZW50RHJpdmVyLmdldENvbXBvbmVudERhdGEobmV3RWxlbWVudCkpO1xuICAgICAgICBleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCBBcnJheS5mcm9tKHRoaXMuZ2V0Q2hpbGRyZW4oKS52YWx1ZXMoKSksIHRoaXMuZWxlbWVudERyaXZlci5maW5kQ2hpbGRDb21wb25lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0S2V5RnJvbUVsZW1lbnQpO1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZmllZE1vZGVsVmFsdWVzKS5mb3JFYWNoKChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdG9yZS5zZXQobW9kZWxOYW1lLCBtb2RpZmllZE1vZGVsVmFsdWVzW21vZGVsTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VySG9vaygncmVuZGVyOmZpbmlzaGVkJywgdGhpcyk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdERlYm91bmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWJvdW5jZTtcbiAgICB9XG4gICAgY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG4gICAgICAgIHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIHRoaXMuY2FsY3VsYXRlRGVib3VuY2UoZGVib3VuY2UpKTtcbiAgICB9XG4gICAgcmVuZGVyRXJyb3IoaHRtbCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZS1jb21wb25lbnQtZXJyb3InKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtb2RhbC5pZCA9ICdsaXZlLWNvbXBvbmVudC1lcnJvcic7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgLjUpJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnpJbmRleCA9ICcxMDAwMDAnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzVweCc7XG4gICAgICAgIGlmcmFtZS5zdHlsZS5mbGV4R3JvdyA9ICcxJztcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1vZGFsKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBpZiAoaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9wZW4oKTtcbiAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kYWwuZm9jdXMoKTtcbiAgICB9XG4gICAgZ2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50cyA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkQ29tcG9uZW50LmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmdlcnByaW50c1tjaGlsZC5pZF0gPSBjaGlsZC5maW5nZXJwcmludDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaW5nZXJwcmludHM7XG4gICAgfVxuICAgIHJlc2V0UHJvbWlzZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcHJveGlmeUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KGNvbXBvbmVudCwge1xuICAgICAgICBnZXQoY29tcG9uZW50LCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjb21wb25lbnQgfHwgdHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGFibGUgPSBjb21wb25lbnRbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxhYmxlLmFwcGx5KGNvbXBvbmVudCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldChjb21wb25lbnQsIHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuZ2V0RGF0YShwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgW3Byb3AsIGFyZ3NdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5zZXQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jbGFzcyBCYWNrZW5kUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IocHJvbWlzZSwgYWN0aW9ucywgdXBkYXRlTW9kZWxzKSB7XG4gICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICB0aGlzLnByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICB0aGlzLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVNb2RlbHM7XG4gICAgfVxuICAgIGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmZpbHRlcigoYWN0aW9uKSA9PiB0YXJnZXRlZEFjdGlvbnMuaW5jbHVkZXMoYWN0aW9uKSkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgYXJlQW55TW9kZWxzVXBkYXRlZCh0YXJnZXRlZE1vZGVscykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgY3NyZlRva2VuID0gbnVsbCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIG1ha2VSZXF1ZXN0KGRhdGEsIGFjdGlvbnMsIHVwZGF0ZWRNb2RlbHMsIGNoaWxkcmVuRmluZ2VycHJpbnRzKSB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoJz8nKTtcbiAgICAgICAgbGV0IFt1cmxdID0gc3BsaXRVcmw7XG4gICAgICAgIGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nIHx8ICcnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmxpdmUtY29tcG9uZW50K2h0bWwnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYXNGaW5nZXJwcmludHMgPSBPYmplY3Qua2V5cyhjaGlsZHJlbkZpbmdlcnByaW50cykubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgaGFzVXBkYXRlZE1vZGVscyA9IE9iamVjdC5rZXlzKHVwZGF0ZWRNb2RlbHMpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy53aWxsRGF0YUZpdEluVXJsKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuRmluZ2VycHJpbnRzKSkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBpZiAoaGFzRmluZ2VycHJpbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnNldCgnY2hpbGRyZW5GaW5nZXJwcmludHMnLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbkZpbmdlcnByaW50cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlZE1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ3VwZGF0ZWRNb2RlbHNbXScsIG1vZGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0geyBkYXRhIH07XG4gICAgICAgICAgICBpZiAoaGFzVXBkYXRlZE1vZGVscykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLnVwZGF0ZWRNb2RlbHMgPSB1cGRhdGVkTW9kZWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc0ZpbmdlcnByaW50cykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhLmNoaWxkcmVuRmluZ2VycHJpbnRzID0gY2hpbGRyZW5GaW5nZXJwcmludHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRoaXMuY3NyZlRva2VuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYXJncyA9IGFjdGlvbnNbMF0uYXJncztcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtlbmNvZGVVUklDb21wb25lbnQoYWN0aW9uc1swXS5uYW1lKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcvX2JhdGNoJztcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGEuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zU3RyaW5nID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBuZXcgQmFja2VuZFJlcXVlc3QoZmV0Y2goYCR7dXJsfSR7cGFyYW1zU3RyaW5nLmxlbmd0aCA+IDAgPyBgPyR7cGFyYW1zU3RyaW5nfWAgOiAnJ31gLCBmZXRjaE9wdGlvbnMpLCBhY3Rpb25zLm1hcCgoYmFja2VuZEFjdGlvbikgPT4gYmFja2VuZEFjdGlvbi5uYW1lKSwgdXBkYXRlZE1vZGVscyk7XG4gICAgfVxuICAgIHdpbGxEYXRhRml0SW5VcmwoZGF0YUpzb24sIHBhcmFtcywgY2hpbGRyZW5GaW5nZXJwcmludHNKc29uKSB7XG4gICAgICAgIGNvbnN0IHVybEVuY29kZWRKc29uRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YUpzb24gKyBjaGlsZHJlbkZpbmdlcnByaW50c0pzb24pLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiAodXJsRW5jb2RlZEpzb25EYXRhICsgcGFyYW1zLnRvU3RyaW5nKCkpLmxlbmd0aCA8IDE1MDA7XG4gICAgfVxufVxuXG5jbGFzcyBTdGFuZGFyZEVsZW1lbnREcml2ZXIge1xuICAgIGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsRGlyZWN0aXZlID0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIGlmICghbW9kZWxEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbERpcmVjdGl2ZS5hY3Rpb247XG4gICAgfVxuICAgIGdldENvbXBvbmVudERhdGEocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFyb290RWxlbWVudC5kYXRhc2V0LmxpdmVEYXRhVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJvb3RFbGVtZW50LmRhdGFzZXQubGl2ZURhdGFWYWx1ZSk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudFByb3BzKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGlmICghcm9vdEVsZW1lbnQuZGF0YXNldC5saXZlUHJvcHNWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uocm9vdEVsZW1lbnQuZGF0YXNldC5saXZlUHJvcHNWYWx1ZSk7XG4gICAgfVxuICAgIGZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQoaWQsIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbGl2ZS1pZD0ke2lkfV1gKTtcbiAgICB9XG4gICAgZ2V0S2V5RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LmxpdmVJZCB8fCBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgTG9hZGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5vbignbG9hZGluZy5zdGF0ZTpzdGFydGVkJywgKGVsZW1lbnQsIHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKGVsZW1lbnQsIHJlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdsb2FkaW5nLnN0YXRlOmZpbmlzaGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmluaXNoTG9hZGluZyhjb21wb25lbnQuZWxlbWVudCk7XG4gICAgfVxuICAgIHN0YXJ0TG9hZGluZyh0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCkge1xuICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUodHJ1ZSwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpO1xuICAgIH1cbiAgICBmaW5pc2hMb2FkaW5nKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkaW5nVG9nZ2xlKGZhbHNlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ1RvZ2dsZShpc0xvYWRpbmcsIHRhcmdldEVsZW1lbnQsIGJhY2tlbmRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlcyh0YXJnZXRFbGVtZW50LCBbJ2J1c3knXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgWydidXN5J10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0TG9hZGluZ0RpcmVjdGl2ZXModGFyZ2V0RWxlbWVudCkuZm9yRWFjaCgoeyBlbGVtZW50LCBkaXJlY3RpdmVzIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgWydkYXRhLWxpdmUtaXMtbG9hZGluZyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBbJ2RhdGEtbGl2ZS1pcy1sb2FkaW5nJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxvYWRpbmdEaXJlY3RpdmUoZWxlbWVudCwgaXNMb2FkaW5nLCBkaXJlY3RpdmUsIGJhY2tlbmRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlTG9hZGluZ0RpcmVjdGl2ZShlbGVtZW50LCBpc0xvYWRpbmcsIGRpcmVjdGl2ZSwgYmFja2VuZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBwYXJzZUxvYWRpbmdBY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgaXNMb2FkaW5nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHRhcmdldGVkTW9kZWxzID0gW107XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlbGF5JywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGF5ID0gbW9kaWZpZXIudmFsdWUgPyBwYXJzZUludChtb2RpZmllci52YWx1ZSkgOiAyMDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2FjdGlvbicsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiYWN0aW9uXCIgaW4gZGF0YS1sb2FkaW5nIG11c3QgaGF2ZSBhbiBhY3Rpb24gbmFtZSAtIGUuZy4gYWN0aW9uKGZvbykuIEl0J3MgbWlzc2luZyBmb3IgXCIke2RpcmVjdGl2ZS5nZXRTdHJpbmcoKX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ZWRBY3Rpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdtb2RlbCcsIChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFtb2RpZmllci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxhYmxlID0gKF9hID0gdmFsaWRNb2RpZmllcnMuZ2V0KG1vZGlmaWVyLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYWJsZShtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIHVzZWQgaW4gZGF0YS1sb2FkaW5nPVwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuIEF2YWlsYWJsZSBtb2RpZmllcnMgYXJlOiAke0FycmF5LmZyb20odmFsaWRNb2RpZmllcnMua2V5cygpKS5qb2luKCcsICcpfS5gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0xvYWRpbmcgJiYgdGFyZ2V0ZWRBY3Rpb25zLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkTW9kZWxzLmxlbmd0aCA+IDAgJiYgYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYWRpbmdEaXJlY3RpdmU7XG4gICAgICAgIHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUNsYXNzJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhZGRBdHRyaWJ1dGUnOlxuICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdEaXJlY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ0RpcmVjdGl2ZSgpO1xuICAgIH1cbiAgICBnZXRMb2FkaW5nRGlyZWN0aXZlcyhlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbG9hZGluZ10nKS5mb3JFYWNoKChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiYgIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRWxlbWVudCBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKGVsZW1lbnQuZGF0YXNldC5sb2FkaW5nIHx8ICdzaG93Jyk7XG4gICAgICAgICAgICBsb2FkaW5nRGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbG9hZGluZ0RpcmVjdGl2ZXM7XG4gICAgfVxuICAgIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfVxuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgWydjbGFzcyddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgJycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBwYXJzZUxvYWRpbmdBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uLCBpc0xvYWRpbmcpIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdoaWRlJyA6ICdzaG93JztcbiAgICAgICAgY2FzZSAnYWRkQ2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xuICAgICAgICBjYXNlICdyZW1vdmVDbGFzcyc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyc7XG4gICAgICAgIGNhc2UgJ2FkZEF0dHJpYnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nID8gJ2FkZEF0dHJpYnV0ZScgOiAncmVtb3ZlQXR0cmlidXRlJztcbiAgICAgICAgY2FzZSAncmVtb3ZlQXR0cmlidXRlJzpcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRpbmcgPyAncmVtb3ZlQXR0cmlidXRlJyA6ICdhZGRBdHRyaWJ1dGUnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YS1sb2FkaW5nIGFjdGlvbiBcIiR7YWN0aW9ufVwiYCk7XG59O1xuXG5jbGFzcyBWYWxpZGF0ZWRGaWVsZHNQbHVnaW4ge1xuICAgIGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQub24oJ21vZGVsOnNldCcsIChtb2RlbE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kZWxTZXQobW9kZWxOYW1lLCBjb21wb25lbnQudmFsdWVTdG9yZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcbiAgICAgICAgaWYgKHZhbHVlU3RvcmUuaGFzKCd2YWxpZGF0ZWRGaWVsZHMnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gWy4uLnZhbHVlU3RvcmUuZ2V0KCd2YWxpZGF0ZWRGaWVsZHMnKV07XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkRmllbGRzLnB1c2gobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlU3RvcmUuc2V0KCd2YWxpZGF0ZWRGaWVsZHMnLCB2YWxpZGF0ZWRGaWVsZHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBQYWdlVW5sb2FkaW5nUGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdyZW5kZXI6c3RhcnRlZCcsIChodG1sLCByZXNwb25zZSwgY29udHJvbHMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ0RpcmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xscy5wdXNoKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSk7XG4gICAgICAgIGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0QWxsUG9sbGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BvbGxpbmdBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbGxzLmZvckVhY2goKHsgYWN0aW9uTmFtZSwgZHVyYXRpb24gfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcEFsbFBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbGVhclBvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5wb2xscyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXJ0QWxsUG9sbGluZygpO1xuICAgIH1cbiAgICBpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrO1xuICAgICAgICBpZiAoYWN0aW9uTmFtZSA9PT0gJyRyZW5kZXInKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oYWN0aW9uTmFtZSwge30sIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy5wb2xsaW5nSW50ZXJ2YWxzLnB1c2godGltZXIpO1xuICAgIH1cbn1cblxuY2xhc3MgUG9sbGluZ1BsdWdpbiB7XG4gICAgYXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50O1xuICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3IoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuICAgICAgICBjb21wb25lbnQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbGxpbmdEaXJlY3Rvci5zdGFydEFsbFBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXBvbmVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0b3BBbGxQb2xsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuYWRkUG9sbChhY3Rpb25OYW1lLCBkdXJhdGlvbik7XG4gICAgfVxuICAgIGNsZWFyUG9sbGluZygpIHtcbiAgICAgICAgdGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsZWFyUG9sbGluZygpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG4gICAgICAgIGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMocmF3UG9sbENvbmZpZyB8fCAnJHJlbmRlcicpO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gMjAwMDtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsYXknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChtb2RpZmllci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiBpbiBkYXRhLXBvbGwgXCIke3Jhd1BvbGxDb25maWd9XCIuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luIHtcbiAgICBhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuICAgICAgICBjb21wb25lbnQub24oJ3JlbmRlcjpmaW5pc2hlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RlbF0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGVsZW1lbnQgdXNpbmcgZGF0YS1tb2RlbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IG1vZGVsRGlyZWN0aXZlLmFjdGlvbjtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0VW5zeW5jZWRNb2RlbHMoKS5pbmNsdWRlcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC52YWx1ZVN0b3JlLmhhcyhtb2RlbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIGdldFZhbHVlRnJvbUVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2RlbEJpbmRpbmcgKG1vZGVsRGlyZWN0aXZlKSB7XG4gICAgbGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG4gICAgbGV0IHRhcmdldEV2ZW50TmFtZSA9IG51bGw7XG4gICAgbGV0IGRlYm91bmNlID0gZmFsc2U7XG4gICAgbW9kZWxEaXJlY3RpdmUubW9kaWZpZXJzLmZvckVhY2goKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobW9kaWZpZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnb24nOlxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZpZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IHJlcXVpcmVzIGEgdmFsdWUgLSBlLmcuIG9uKGNoYW5nZSkuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghWydpbnB1dCcsICdjaGFuZ2UnXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJvblwiIG1vZGlmaWVyIGluICR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9IG9ubHkgYWNjZXB0cyB0aGUgYXJndW1lbnRzIFwiaW5wdXRcIiBvciBcImNoYW5nZVwiLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudE5hbWUgPSBtb2RpZmllci52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vcmVuZGVyJzpcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gcGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtbW9kZWw9XCIke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfVwiLmApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZWxOYW1lLFxuICAgICAgICBpbm5lck1vZGVsTmFtZTogaW5uZXJNb2RlbE5hbWUgfHwgbnVsbCxcbiAgICAgICAgc2hvdWxkUmVuZGVyLFxuICAgICAgICBkZWJvdW5jZSxcbiAgICAgICAgdGFyZ2V0RXZlbnROYW1lXG4gICAgfTtcbn1cblxuY29uc3QgQ29tcG9uZW50UmVnaXN0cnkgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGVsZW1lbnQsIGRlZmluaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNldChlbGVtZW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gICAgdW5yZWdpc3RlckNvbXBvbmVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4Q291bnQgPSAxMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50cy5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gbWF4Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYENvbXBvbmVudCBub3QgZm91bmQgZm9yIGVsZW1lbnQgJHtnZXRFbGVtZW50QXNUYWdUZXh0KGVsZW1lbnQpfWApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbnZhciBDb21wb25lbnRSZWdpc3RyeSQxID0gbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCk7XG5cbmNvbnN0IGdldENvbXBvbmVudCA9IChlbGVtZW50KSA9PiBDb21wb25lbnRSZWdpc3RyeSQxLmdldENvbXBvbmVudChlbGVtZW50KTtcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IGV2ZW50OiAnaW5wdXQnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIH0sXG4gICAgICAgICAgICB7IGV2ZW50OiAnY2hhbmdlJywgY2FsbGJhY2s6IChldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VFdmVudChldmVudCkgfSxcbiAgICAgICAgICAgIHsgZXZlbnQ6ICdsaXZlOmNvbm5lY3QnLCBjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEaXNjb25uZWN0ZWRDaGlsZENvbnRyb2xsZXJFdmVudCA9IHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5saXZlSWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmRhdGFWYWx1ZSwgdGhpcy5maW5nZXJwcmludFZhbHVlLCBpZCwgbmV3IEJhY2tlbmQodGhpcy51cmxWYWx1ZSwgdGhpcy5jc3JmVmFsdWUpLCBuZXcgU3RhbmRhcmRFbGVtZW50RHJpdmVyKCkpO1xuICAgICAgICB0aGlzLnByb3hpZWRDb21wb25lbnQgPSBwcm94aWZ5Q29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50Ll9fY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuICAgICAgICBpZiAodGhpcy5oYXNEZWJvdW5jZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kZWZhdWx0RGVib3VuY2UgPSB0aGlzLmRlYm91bmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtcbiAgICAgICAgICAgIG5ldyBMb2FkaW5nUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luKCksXG4gICAgICAgICAgICBuZXcgUGFnZVVubG9hZGluZ1BsdWdpbigpLFxuICAgICAgICAgICAgbmV3IFBvbGxpbmdQbHVnaW4oKSxcbiAgICAgICAgICAgIG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbigpLFxuICAgICAgICBdO1xuICAgICAgICBwbHVnaW5zLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHsgZXZlbnQsIGNhbGxiYWNrIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgQ29tcG9uZW50UmVnaXN0cnkkMS5yZWdpc3RlckNvbXBvbmVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0Jyk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBDb21wb25lbnRSZWdpc3RyeSQxLnVucmVnaXN0ZXJDb21wb25lbnQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxuICAgIHVwZGF0ZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2lucHV0JyB8fCBldmVudC50eXBlID09PSAnY2hhbmdlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaW5jZSBMaXZlQ29tcG9uZW50cyAyLjMsIHlvdSBubyBsb25nZXIgbmVlZCBkYXRhLWFjdGlvbj1cImxpdmUjdXBkYXRlXCIgb24gZm9ybSBlbGVtZW50cy4gRm91bmQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LnRhcmdldCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQudGFyZ2V0LCBudWxsKTtcbiAgICB9XG4gICAgYWN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJhd0FjdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpb25OYW1lO1xuICAgICAgICBjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG4gICAgICAgIGxldCBkZWJvdW5jZSA9IGZhbHNlO1xuICAgICAgICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRNb2RpZmllcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3ByZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsaWRNb2RpZmllcnMuc2V0KCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ3NlbGYnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YWxpZE1vZGlmaWVycy5zZXQoJ2RlYm91bmNlJywgKG1vZGlmaWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2UgPSBtb2RpZmllci52YWx1ZSA/IHBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYWJsZSA9IChfYSA9IHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCgpID0+IHsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oJywgJyl9LmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgZGlyZWN0aXZlLm5hbWVkLCBkZWJvdW5jZSk7XG4gICAgICAgICAgICBpZiAoZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0LCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cbiAgICAkdXBkYXRlTW9kZWwobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIgPSB0cnVlLCBkZWJvdW5jZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsLCB2YWx1ZSwgc2hvdWxkUmVuZGVyLCBkZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KHRhcmdldCwgJ2lucHV0Jyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsICdjaGFuZ2UnKTtcbiAgICB9XG4gICAgdXBkYXRlTW9kZWxGcm9tRWxlbWVudEV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFtb2RlbERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZyA9IGdldE1vZGVsQmluZGluZyhtb2RlbERpcmVjdGl2ZSk7XG4gICAgICAgIGlmICghbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSkge1xuICAgICAgICAgICAgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSA9ICdpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY2hhbmdlJyAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gJ2NoYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFsc2UgPT09IG1vZGVsQmluZGluZy5kZWJvdW5jZSkge1xuICAgICAgICAgICAgaWYgKG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxCaW5kaW5nLmRlYm91bmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaW5hbFZhbHVlID0gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLmNvbXBvbmVudC52YWx1ZVN0b3JlKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIGZpbmFsVmFsdWUsIG1vZGVsQmluZGluZy5zaG91bGRSZW5kZXIsIG1vZGVsQmluZGluZy5kZWJvdW5jZSk7XG4gICAgfVxuICAgIGhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZENvbnRyb2xsZXIgPSBldmVudC5kZXRhaWwuY29udHJvbGxlcjtcbiAgICAgICAgaWYgKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQuZ2V0UGFyZW50KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbERpcmVjdGl2ZXMgPSBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhjaGlsZENvbnRyb2xsZXIuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1vZGVsQmluZGluZ3MgPSBtb2RlbERpcmVjdGl2ZXMubWFwKGdldE1vZGVsQmluZGluZyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LmFkZENoaWxkKGNoaWxkQ29udHJvbGxlci5jb21wb25lbnQsIG1vZGVsQmluZGluZ3MpO1xuICAgICAgICBjaGlsZENvbnRyb2xsZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsaXZlOmRpc2Nvbm5lY3QnLCB0aGlzLmhhbmRsZURpc2Nvbm5lY3RlZENoaWxkQ29udHJvbGxlckV2ZW50KTtcbiAgICB9XG4gICAgaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb250cm9sbGVyID0gZXZlbnQuZGV0YWlsLmNvbnRyb2xsZXI7XG4gICAgICAgIGNoaWxkQ29udHJvbGxlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xpdmU6ZGlzY29ubmVjdCcsIHRoaXMuaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQpO1xuICAgICAgICBpZiAoY2hpbGRDb250cm9sbGVyLmNvbXBvbmVudC5nZXRQYXJlbnQoKSAhPT0gdGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudC5yZW1vdmVDaGlsZChjaGlsZENvbnRyb2xsZXIuY29tcG9uZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBkZXRhaWwgPSB7fSwgY2FuQnViYmxlID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgZGV0YWlsLmNvbXBvbmVudCA9IHRoaXMucHJveGllZENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbCwgcHJlZml4OiAnbGl2ZScsIGNhbmNlbGFibGUsIGJ1YmJsZXM6IGNhbkJ1YmJsZSB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHVybDogU3RyaW5nLFxuICAgIGRhdGE6IE9iamVjdCxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGNzcmY6IFN0cmluZyxcbiAgICBkZWJvdW5jZTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDE1MCB9LFxuICAgIGlkOiBTdHJpbmcsXG4gICAgZmluZ2VycHJpbnQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgZGVmYXVsdF8xIGFzIGRlZmF1bHQsIGdldENvbXBvbmVudCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJBbHBpbmUiLCJ3aW5kb3ciLCJzdGFydCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsImxlbiIsImFycjIiLCJwYXJzZURpcmVjdGl2ZXMiLCJjb250ZW50IiwiZGlyZWN0aXZlcyIsImN1cnJlbnRBY3Rpb25OYW1lIiwiY3VycmVudEFyZ3VtZW50TmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnROYW1lZEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJnZXRMYXN0QWN0aW9uTmFtZSIsImFjdGlvbiIsInB1c2hJbnN0cnVjdGlvbiIsIm5hbWVkIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwibWl4ZWRBcmdUeXBlc0Vycm9yIiwiY29uY2F0IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0Iiwic3BsaXQiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJtb2RlbCIsInJlcGxhY2UiLCJtYXAiLCJzIiwiam9pbiIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJ2YWx1ZVN0b3JlIiwiSFRNTElucHV0RWxlbWVudCIsIm1vZGVsTmFtZURhdGEiLCJnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50IiwibW9kZWxWYWx1ZSIsImdldCIsImdldE11bHRpcGxlQ2hlY2tib3hWYWx1ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkT3B0aW9ucyIsImVsIiwiZGF0YXNldCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInNldFZhbHVlT25FbGVtZW50IiwidmFsdWVGb3VuZCIsImFycmF5V3JhcHBlZFZhbHVlIiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdGVkIiwiaW5jbHVkZXMiLCJnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyIsImRpcmVjdGl2ZSIsInRocm93T25NaXNzaW5nIiwiZGF0YU1vZGVsRGlyZWN0aXZlcyIsImZvcm1FbGVtZW50IiwiY2xvc2VzdCIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNvbXBvbmVudCIsImNvbnRhaW5zIiwiZm91bmRDaGlsZENvbXBvbmVudCIsImdldENoaWxkcmVuIiwiY2hpbGRDb21wb25lbnQiLCJjbG9uZUhUTUxFbGVtZW50IiwibmV3RWxlbWVudCIsImNsb25lTm9kZSIsIkhUTUxFbGVtZW50IiwiaHRtbFRvRWxlbWVudCIsImh0bWwiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbG9uZUVsZW1lbnRXaXRoTmV3VGFnTmFtZSIsIm5ld1RhZyIsIm9yaWdpbmFsVGFnIiwidGFnTmFtZSIsInN0YXJ0UlgiLCJSZWdFeHAiLCJlbmRSWCIsInN0YXJ0U3Vic3QiLCJlbmRTdWJzdCIsIm5ld0hUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY3VycmVudFZhbHVlcyIsImluZGV4Iiwic3BsaWNlIiwiZ2V0RGVlcERhdGEiLCJkYXRhIiwicHJvcGVydHlQYXRoIiwiX3BhcnNlRGVlcERhdGEiLCJwYXJzZURlZXBEYXRhIiwiY3VycmVudExldmVsRGF0YSIsImZpbmFsS2V5IiwiZmluYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0RGVlcERhdGEiLCJfcGFyc2VEZWVwRGF0YTIiLCJsYXN0UGFydCIsIlZhbHVlU3RvcmUiLCJ1cGRhdGVkTW9kZWxzIiwibm9ybWFsaXplZE5hbWUiLCJoYXMiLCJzZXQiLCJjdXJyZW50VmFsdWUiLCJhbGwiLCJhc3NpZ24iLCJyZWluaXRpYWxpemVEYXRhIiwicmVpbml0aWFsaXplUHJvcHMiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwibW9ycGhBdHRycyIsImZyb21Ob2RlIiwidG9Ob2RlIiwidG9Ob2RlQXR0cnMiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsImF0dHJOYW1lIiwiYXR0ck5hbWVzcGFjZVVSSSIsImF0dHJWYWx1ZSIsImZyb21WYWx1ZSIsIm5vZGVUeXBlIiwibmFtZXNwYWNlVVJJIiwibG9jYWxOYW1lIiwiZ2V0QXR0cmlidXRlTlMiLCJwcmVmaXgiLCJzZXRBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZSIsImZyb21Ob2RlQXR0cnMiLCJkIiwiaGFzQXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZSIsInJhbmdlIiwiTlNfWEhUTUwiLCJkb2MiLCJIQVNfVEVNUExBVEVfU1VQUE9SVCIsIkhBU19SQU5HRV9TVVBQT1JUIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVGcmFnbWVudEZyb21UZW1wbGF0ZSIsInN0ciIsImNoaWxkTm9kZXMiLCJjcmVhdGVGcmFnbWVudEZyb21SYW5nZSIsInNlbGVjdE5vZGUiLCJib2R5IiwiZnJhZ21lbnQiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJjcmVhdGVGcmFnbWVudEZyb21XcmFwIiwidG9FbGVtZW50IiwiY29tcGFyZU5vZGVOYW1lcyIsImZyb21FbCIsInRvRWwiLCJmcm9tTm9kZU5hbWUiLCJub2RlTmFtZSIsInRvTm9kZU5hbWUiLCJmcm9tQ29kZVN0YXJ0IiwidG9Db2RlU3RhcnQiLCJjaGFyQ29kZUF0IiwidG9VcHBlckNhc2UiLCJjcmVhdGVFbGVtZW50TlMiLCJtb3ZlQ2hpbGRyZW4iLCJjdXJDaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0Q2hpbGQiLCJuZXh0U2libGluZyIsImFwcGVuZENoaWxkIiwic3luY0Jvb2xlYW5BdHRyUHJvcCIsInNwZWNpYWxFbEhhbmRsZXJzIiwiT1BUSU9OIiwicGFyZW50Tm9kZSIsInBhcmVudE5hbWUiLCJzZWxlY3RlZEluZGV4IiwiSU5QVVQiLCJURVhUQVJFQSIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJub2RlVmFsdWUiLCJwbGFjZWhvbGRlciIsIlNFTEVDVCIsIm9wdGdyb3VwIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSQxIiwiVEVYVF9OT0RFIiwiQ09NTUVOVF9OT0RFIiwibm9vcCIsImRlZmF1bHRHZXROb2RlS2V5Iiwibm9kZSIsImlkIiwibW9ycGhkb21GYWN0b3J5IiwibW9ycGhkb20iLCJ0b05vZGVIdG1sIiwiZ2V0Tm9kZUtleSIsIm9uQmVmb3JlTm9kZUFkZGVkIiwib25Ob2RlQWRkZWQiLCJvbkJlZm9yZUVsVXBkYXRlZCIsIm9uRWxVcGRhdGVkIiwib25CZWZvcmVOb2RlRGlzY2FyZGVkIiwib25Ob2RlRGlzY2FyZGVkIiwib25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZCIsImNoaWxkcmVuT25seSIsImZyb21Ob2Rlc0xvb2t1cCIsImtleWVkUmVtb3ZhbExpc3QiLCJhZGRLZXllZFJlbW92YWwiLCJ3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyIsInNraXBLZXllZE5vZGVzIiwicmVtb3ZlTm9kZSIsInJlbW92ZUNoaWxkIiwiaW5kZXhUcmVlIiwiaGFuZGxlTm9kZUFkZGVkIiwidW5tYXRjaGVkRnJvbUVsIiwicmVwbGFjZUNoaWxkIiwibW9ycGhFbCIsImNsZWFudXBGcm9tRWwiLCJjdXJGcm9tTm9kZUNoaWxkIiwiY3VyRnJvbU5vZGVLZXkiLCJmcm9tTmV4dFNpYmxpbmciLCJ0b0VsS2V5IiwibW9ycGhDaGlsZHJlbiIsImN1clRvTm9kZUNoaWxkIiwiY3VyVG9Ob2RlS2V5IiwidG9OZXh0U2libGluZyIsIm1hdGNoaW5nRnJvbUVsIiwib3V0ZXIiLCJpc1NhbWVOb2RlIiwiY3VyRnJvbU5vZGVUeXBlIiwiaXNDb21wYXRpYmxlIiwiaW5zZXJ0QmVmb3JlIiwib25CZWZvcmVOb2RlQWRkZWRSZXN1bHQiLCJhY3R1YWxpemUiLCJvd25lckRvY3VtZW50Iiwic3BlY2lhbEVsSGFuZGxlciIsIm1vcnBoZWROb2RlIiwibW9ycGhlZE5vZGVUeXBlIiwidG9Ob2RlVHlwZSIsImVsVG9SZW1vdmUiLCJub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbiIsImlzRmlsZUlucHV0IiwiY2hpbGRyZW4iLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiY2hpbGRDb21wb25lbnRzIiwiZmluZENoaWxkQ29tcG9uZW50IiwiZ2V0S2V5RnJvbUVsZW1lbnQiLCJjaGlsZENvbXBvbmVudE1hcCIsIk1hcCIsImNoaWxkQ29tcG9uZW50VG9FbGVtZW50IiwicmVwbGFjZVdpdGgiLCJTVkdFbGVtZW50IiwidXBkYXRlRnJvbU5ld0VsZW1lbnQiLCJpc0VxdWFsTm9kZSIsIm5vcm1hbGl6ZWRGcm9tRWwiLCJub3JtYWxpemVkVG9FbCIsIlVuc3luY2VkSW5wdXRzVHJhY2tlciIsIm1vZGVsRWxlbWVudFJlc29sdmVyIiwiX3RoaXMiLCJlbGVtZW50RXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsImNhbGxiYWNrIiwiaGFuZGxlSW5wdXRFdmVudCIsInVuc3luY2VkSW5wdXRzIiwiVW5zeW5jZWRJbnB1dENvbnRhaW5lciIsImFjdGl2YXRlIiwiX3RoaXMyIiwiX3JlZiIsImRlYWN0aXZhdGUiLCJfdGhpczMiLCJfcmVmMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJhZGQiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczQiLCJIb29rTWFuYWdlciIsImhvb2tzIiwicmVnaXN0ZXIiLCJob29rTmFtZSIsInVucmVnaXN0ZXIiLCJ0cmlnZ2VySG9vayIsIl9sZW4iLCJfa2V5IiwiQmFja2VuZFJlc3BvbnNlIiwicmVzcG9uc2UiLCJfZ2V0Qm9keSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidGV4dCIsImdldEJvZHkiLCJDaGlsZENvbXBvbmVudFdyYXBwZXIiLCJtb2RlbEJpbmRpbmdzIiwiQ29tcG9uZW50IiwiZmluZ2VycHJpbnQiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsImRlZmF1bHREZWJvdW5jZSIsInBlbmRpbmdBY3Rpb25zIiwiaXNSZXF1ZXN0UGVuZGluZyIsInJlcXVlc3REZWJvdW5jZVRpbWVvdXQiLCJwYXJlbnQiLCJ1bnN5bmNlZElucHV0c1RyYWNrZXIiLCJyZXNldFByb21pc2UiLCJvbkNoaWxkQ29tcG9uZW50TW9kZWxVcGRhdGUiLCJiaW5kIiwiYWRkUGx1Z2luIiwicGx1Z2luIiwiYXR0YWNoVG9Db21wb25lbnQiLCJkaXNjb25uZWN0IiwiY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0Iiwib24iLCJvZmYiLCJyZVJlbmRlciIsImRlYm91bmNlIiwicHJvbWlzZSIsIm5leHRSZXF1ZXN0UHJvbWlzZSIsImlzQ2hhbmdlZCIsImRlYm91bmNlZFN0YXJ0UmVxdWVzdCIsImdldERhdGEiLCJyZW5kZXIiLCJ0cnlTdGFydGluZ1JlcXVlc3QiLCJhZGRDaGlsZCIsImdldFBhcmVudCIsImdldENvbXBvbmVudFByb3BzIiwibGl2ZUZpbmdlcnByaW50VmFsdWUiLCJfdGhpczUiLCJjaGlsZFdyYXBwZXIiLCJtb2RlbEJpbmRpbmciLCJjaGlsZE1vZGVsTmFtZSIsImlubmVyTW9kZWxOYW1lIiwic2hvdWxkUmVuZGVyIiwiYmFja2VuZFJlcXVlc3QiLCJwZXJmb3JtUmVxdWVzdCIsIl90aGlzNiIsInRoaXNQcm9taXNlUmVzb2x2ZSIsIm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUiLCJtYWtlUmVxdWVzdCIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwiX3JlZjMiLCJfY2FsbGVlMiIsImJhY2tlbmRSZXNwb25zZSIsImhlYWRlcnMiLCJjb250cm9scyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwicHJvY2Vzc1JlcmVuZGVyIiwiX3giLCJfdGhpczciLCJUdXJibyIsInZpc2l0IiwibG9jYXRpb24iLCJocmVmIiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJjb25zb2xlIiwiZ2V0Q29tcG9uZW50RGF0YSIsImZpbmRDaGlsZENvbXBvbmVudEVsZW1lbnQiLCJjYWxjdWxhdGVEZWJvdW5jZSIsImNsZWFyVGltZW91dCIsIl90aGlzOCIsInNldFRpbWVvdXQiLCJtb2RhbCIsInN0eWxlIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpZnJhbWUiLCJib3JkZXJSYWRpdXMiLCJmbGV4R3JvdyIsInByZXBlbmQiLCJvdmVyZmxvdyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNsb3NlTW9kYWwiLCJlIiwiZm9jdXMiLCJmaW5nZXJwcmludHMiLCJfdGhpczkiLCJwcm94aWZ5Q29tcG9uZW50IiwiUHJveHkiLCJwcm9wIiwiY2FsbGFibGUiLCJfbGVuMiIsIl9rZXkyIiwiUmVmbGVjdCIsInByb3BlcnR5IiwiQmFja2VuZFJlcXVlc3QiLCJhY3Rpb25zIiwidXBkYXRlTW9kZWxzIiwiX3RoaXMxMCIsImlzUmVzb2x2ZWQiLCJjb250YWluc09uZU9mQWN0aW9ucyIsInRhcmdldGVkQWN0aW9ucyIsImZpbHRlciIsImFyZUFueU1vZGVsc1VwZGF0ZWQiLCJ0YXJnZXRlZE1vZGVscyIsIkJhY2tlbmQiLCJ1cmwiLCJjc3JmVG9rZW4iLCJjaGlsZHJlbkZpbmdlcnByaW50cyIsInNwbGl0VXJsIiwiX3NwbGl0VXJsIiwiX3NsaWNlZFRvQXJyYXkiLCJfc3BsaXRVcmwyIiwicXVlcnlTdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaE9wdGlvbnMiLCJBY2NlcHQiLCJoYXNGaW5nZXJwcmludHMiLCJoYXNVcGRhdGVkTW9kZWxzIiwid2lsbERhdGFGaXRJblVybCIsImFwcGVuZCIsInJlcXVlc3REYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zU3RyaW5nIiwiZmV0Y2giLCJiYWNrZW5kQWN0aW9uIiwiZGF0YUpzb24iLCJjaGlsZHJlbkZpbmdlcnByaW50c0pzb24iLCJ1cmxFbmNvZGVkSnNvbkRhdGEiLCJTdGFuZGFyZEVsZW1lbnREcml2ZXIiLCJtb2RlbERpcmVjdGl2ZSIsInJvb3RFbGVtZW50IiwibGl2ZURhdGFWYWx1ZSIsImxpdmVQcm9wc1ZhbHVlIiwicXVlcnlTZWxlY3RvciIsImxpdmVJZCIsIkxvYWRpbmdQbHVnaW4iLCJfdGhpczExIiwicmVxdWVzdCIsInN0YXJ0TG9hZGluZyIsImZpbmlzaExvYWRpbmciLCJ0YXJnZXRFbGVtZW50IiwiaGFuZGxlTG9hZGluZ1RvZ2dsZSIsImlzTG9hZGluZyIsIl90aGlzMTIiLCJhZGRBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlcyIsImdldExvYWRpbmdEaXJlY3RpdmVzIiwiX3JlZjQiLCJoYW5kbGVMb2FkaW5nRGlyZWN0aXZlIiwiX3RoaXMxMyIsImZpbmFsQWN0aW9uIiwicGFyc2VMb2FkaW5nQWN0aW9uIiwiZGVsYXkiLCJ2YWxpZE1vZGlmaWVycyIsIm1vZGlmaWVyIiwicGFyc2VJbnQiLCJfYSIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxvYWRpbmdEaXJlY3RpdmVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsInJlbW92ZSIsImF0dHJpYnV0ZSIsIlZhbGlkYXRlZEZpZWxkc1BsdWdpbiIsIl90aGlzMTQiLCJoYW5kbGVNb2RlbFNldCIsInZhbGlkYXRlZEZpZWxkcyIsIlBhZ2VVbmxvYWRpbmdQbHVnaW4iLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTUiLCJQb2xsaW5nRGlyZWN0b3IiLCJpc1BvbGxpbmdBY3RpdmUiLCJwb2xsaW5nSW50ZXJ2YWxzIiwiYWRkUG9sbCIsImFjdGlvbk5hbWUiLCJkdXJhdGlvbiIsInBvbGxzIiwiaW5pdGlhdGVQb2xsIiwic3RhcnRBbGxQb2xsaW5nIiwiX3RoaXMxNiIsIl9yZWY1Iiwic3RvcEFsbFBvbGxpbmciLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclBvbGxpbmciLCJfdGhpczE3IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIlBvbGxpbmdQbHVnaW4iLCJfdGhpczE4IiwicG9sbGluZ0RpcmVjdG9yIiwiaW5pdGlhbGl6ZVBvbGxpbmciLCJfdGhpczE5IiwicG9sbCIsInJhd1BvbGxDb25maWciLCJ3YXJuIiwiU2V0VmFsdWVPbnRvTW9kZWxGaWVsZHNQbHVnaW4iLCJfdGhpczIwIiwic3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMiLCJIVE1MRm9ybUVsZW1lbnQiLCJnZXRNb2RlbEJpbmRpbmciLCJ0YXJnZXRFdmVudE5hbWUiLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8iLCJfbW9kZWxEaXJlY3RpdmUkYWN0aW8yIiwiQ29tcG9uZW50UmVnaXN0cnkiLCJjb21wb25lbnRzIiwiV2Vha01hcCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGVmaW5pdGlvbiIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJfdGhpczIxIiwiY291bnQiLCJtYXhDb3VudCIsIkNvbXBvbmVudFJlZ2lzdHJ5JDEiLCJkZWZhdWx0XzEiLCJfdGhpczIyIiwicGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQiLCJoYW5kbGVDaGFuZ2VFdmVudCIsImhhbmRsZUNvbm5lY3RlZENvbnRyb2xsZXJFdmVudCIsImluaXRpYWxpemUiLCJfdGhpczIzIiwiaGFuZGxlRGlzY29ubmVjdGVkQ2hpbGRDb250cm9sbGVyRXZlbnQiLCJwcm9wc1ZhbHVlIiwiZGF0YVZhbHVlIiwiZmluZ2VycHJpbnRWYWx1ZSIsInVybFZhbHVlIiwiY3NyZlZhbHVlIiwicHJveGllZENvbXBvbmVudCIsIl9fY29tcG9uZW50IiwiaGFzRGVib3VuY2VWYWx1ZSIsImRlYm91bmNlVmFsdWUiLCJwbHVnaW5zIiwiX3RoaXMyNCIsIl9yZWY2IiwiZGlzcGF0Y2hFdmVudCIsIl90aGlzMjUiLCJfcmVmNyIsInVwZGF0ZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCIsIl90aGlzMjYiLCJyYXdBY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkcmVuZGVyIiwiJHVwZGF0ZU1vZGVsIiwiZXZlbnROYW1lIiwiZmluYWxWYWx1ZSIsImNoaWxkQ29udHJvbGxlciIsImRldGFpbCIsImNvbnRyb2xsZXIiLCJtb2RlbERpcmVjdGl2ZXMiLCJjYW5CdWJibGUiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2giLCJidWJibGVzIiwiY3NyZiJdLCJzb3VyY2VSb290IjoiIn0=