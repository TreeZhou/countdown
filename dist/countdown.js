(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["countdown"] = factory();
	else
		root["countdown"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/Countdown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modeOptions = ['auto', 'manual', 'static'];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    time: {
      type: Number,
      "default": 0,
      required: true
    },
    size: {
      type: Number,
      "default": 0,
      required: true
    },
    bgColor: {
      type: String,
      "default": '#fff'
    },
    interval: {
      type: Number,
      "default": 1000
    },
    annulusColor: {
      type: String,
      "default": '#0e65ff'
    },
    fontColor: {
      type: String,
      "default": '#000'
    },
    mode: {
      type: String,
      "default": 'auto',
      validator: function validator(value) {
        return modeOptions.indexOf(value) > -1;
      }
    }
  },
  data: function data() {
    return {
      CurrentMode: '',
      currentTime: 0,
      timer: null,
      ani: false,
      showProess: false,
      autoParams: {
        autoing: false,
        isEnd: false
      }
    };
  },
  computed: {
    bgStyle: function bgStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundColor: this.bgColor
      };
    },
    annulusODStyle: function annulusODStyle() {
      return {
        backgroundColor: this.annulusColor
      };
    },
    annulusIDStyle: function annulusIDStyle() {
      return {
        backgroundColor: this.bgColor
      };
    },
    clipLeftStyle: function clipLeftStyle() {
      return {
        clip: "rect(0px,\n                    ".concat(this.size / 2, "px,\n                    ").concat(this.size, "px,\n                    0px)")
      };
    },
    clipRightStyle: function clipRightStyle() {
      return {
        clip: "rect(0px,\n                    ".concat(this.size, "px,\n                    ").concat(this.size, "px,\n                    ").concat(this.size / 2, "px)")
      };
    },
    secondStyle: function secondStyle() {
      return {
        'font-size': this.size * 0.3 + 'px',
        color: this.fontColor
      };
    },
    rotateCoverStyle: function rotateCoverStyle() {
      return {
        '-webkit-transition-property': this.ani ? '-webkit-transform' : 'opacity',
        transitionDuration: this.interval / 1000 + 's',
        transitionTimingFunction: 'linear'
      };
    },
    amendment: function amendment() {
      return this.CurrentMode === 'static' ? 0 : 1;
    },
    leftCover: function leftCover() {
      var rotate, zIndex;

      if (!this.showProess) {
        rotate = 0;
        zIndex = -1;
      } else if (this.currentTime <= this.time / 2) {
        rotate = 180;
        zIndex = 1;
      } else {
        rotate = 180 / (this.time / 2) * (this.time - this.currentTime + this.amendment);
        zIndex = 0;
      }

      return {
        transform: "rotate(".concat(rotate, "deg) scale(0.95)"),
        'z-index': zIndex
      };
    },
    rightCover: function rightCover() {
      var rotate, zIndex;

      if (this.currentTime === 0) {
        rotate = 180;
        zIndex = 1;
      } else if (this.currentTime > this.time / 2) {
        rotate = 0;
        zIndex = -1;
      } else {
        rotate = 180 / (this.time / 2) * (this.time / 2 - this.currentTime + this.amendment);
        zIndex = 1;
      }

      return {
        transform: "rotate(".concat(rotate, "deg) scale(0.95)"),
        'z-index': zIndex
      };
    }
  },
  methods: {
    init: function init() {
      clearInterval(this.timer);
      Object.assign(this.$data, this.$options.data());
      this.currentTime = this.time;
      this.CurrentMode = this.mode;
    },
    play: function play() {
      var _this = this;

      this.isContinue('auto');

      if (this.autoParams.isEnd) {
        this.init();
      }

      if (this.autoParams.autoing) return console.error('已经在倒数中');
      this.autoParams.autoing = true;
      var timer = setTimeout(function () {
        _this.ani = true;
        _this.showProess = true;
        return new Promise(function (resolve) {
          _this.timer = setInterval(function () {
            _this.currentTime--;

            if (_this.currentTime === 0) {
              resolve();

              _this.end();
            }
          }, _this.interval);
        });
        clearTimeout(timer);
      }, 50);
    },
    pause: function pause() {
      this.isContinue('auto');
      this.autoParams.autoing = false;

      if (this.currentTime !== 1) {
        clearInterval(this.timer);
      }
    },
    reset: function reset() {
      this.init();
    },
    end: function end() {
      this.autoParams.autoing = false;
      this.autoParams.isEnd = true;
      clearInterval(this.timer);
      this.$emit('end');
    },
    setTime: function setTime(time) {
      this.isContinue('manual');
      this.ani = true;
      this.showProess = true;
      this.currentTime = time;
    },
    setStaticTime: function setStaticTime(time) {
      this.isContinue('static');
      this.showProess = true;
      this.ani = false;
      this.currentTime = time;
    },
    isContinue: function isContinue(mode) {
      if (this.CurrentMode === mode) return true;
      throw new Error("\u5F53\u524D\u6A21\u5F0F\u4E3A".concat(this.CurrentMode, ",\u8BF7\u5148\u8C03\u7528setMode\u91CD\u7F6E\u6A21\u5F0F"));
    },
    setMode: function setMode(mode) {
      if (!modeOptions.indexOf(mode) > -1) {
        throw new Error('mode的可选值为:' + modeOptions.join('、'));
      }

      this.init();
      this.CurrentMode = mode;
    }
  },
  created: function created() {
    this.init();
  }
});

/***/ }),

/***/ "./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n*[data-v-df670bf0] {\n  font-size: 0;\n}\n.abs_both_middle[data-v-df670bf0] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.wrap[data-v-df670bf0] {\n  position: relative;\n  border-radius: 50%;\n}\n.abs[data-v-df670bf0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n}\n/* 半环外径  */\n.annulus-OD[data-v-df670bf0] {\n  border-radius: 50%;\n  width: 88%;\n  height: 88%;\n}\n/* 半环内径  */\n.annulus-ID[data-v-df670bf0] {\n  border-radius: 50%;\n  width: 80%;\n  height: 80%;\n}\n.second[data-v-df670bf0] {\n  z-index: 1;\n  width: 100%;\n  text-align: center;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.2.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=template&id=df670bf0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/Countdown.vue?vue&type=template&id=df670bf0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrap", style: _vm.bgStyle }, [
    _c("div", { staticClass: "abs", style: _vm.bgStyle }, [
      _c(
        "div",
        {
          staticClass: "annulus-OD abs_both_middle",
          style: _vm.annulusODStyle
        },
        [
          _c("div", {
            staticClass: "annulus-ID abs_both_middle",
            style: _vm.annulusIDStyle
          })
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "abs",
      style: [
        _vm.rotateCoverStyle,
        _vm.leftCover,
        _vm.bgStyle,
        _vm.clipLeftStyle
      ]
    }),
    _vm._v(" "),
    _c("div", { staticClass: "abs", style: [_vm.bgStyle, _vm.clipLeftStyle] }, [
      _c(
        "div",
        {
          staticClass: "annulus-OD abs_both_middle",
          style: _vm.annulusODStyle
        },
        [
          _c("div", {
            staticClass: "annulus-ID abs_both_middle",
            style: _vm.annulusIDStyle
          })
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "abs",
      style: [
        _vm.rotateCoverStyle,
        _vm.rightCover,
        _vm.bgStyle,
        _vm.clipRightStyle
      ]
    }),
    _vm._v(" "),
    _c(
      "strong",
      { staticClass: "second abs_both_middle", style: _vm.secondStyle },
      [_vm._v("\n    " + _vm._s(_vm.currentTime) + "s\n  ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader!./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css& */ "./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("214fdaa0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/Countdown.vue":
/*!***************************!*\
  !*** ./src/Countdown.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Countdown_vue_vue_type_template_id_df670bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Countdown.vue?vue&type=template&id=df670bf0&scoped=true& */ "./src/Countdown.vue?vue&type=template&id=df670bf0&scoped=true&");
/* harmony import */ var _Countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Countdown.vue?vue&type=script&lang=js& */ "./src/Countdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css& */ "./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Countdown_vue_vue_type_template_id_df670bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Countdown_vue_vue_type_template_id_df670bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df670bf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Countdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/Countdown.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/Countdown.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_babel-loader@8.0.6@babel-loader/lib!../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Countdown.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css&":
/*!************************************************************************************!*\
  !*** ./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_vue-style-loader@4.1.2@vue-style-loader!../node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!./node_modules/_css-loader@3.2.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=style&index=0&id=df670bf0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_style_index_0_id_df670bf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/Countdown.vue?vue&type=template&id=df670bf0&scoped=true&":
/*!**********************************************************************!*\
  !*** ./src/Countdown.vue?vue&type=template&id=df670bf0&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_template_id_df670bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Countdown.vue?vue&type=template&id=df670bf0&scoped=true& */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./src/Countdown.vue?vue&type=template&id=df670bf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_template_id_df670bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Countdown_vue_vue_type_template_id_df670bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Countdown_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Countdown.vue */ "./src/Countdown.vue");

/* harmony default export */ __webpack_exports__["default"] = (_Countdown_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });
});