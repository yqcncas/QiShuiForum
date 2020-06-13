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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/main.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 30);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();
  Vue.component('Status', __webpack_require__(/*! ./components/Status/Status.vue */ 5).default);
  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!******************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages.json?{"type":"view"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1e596cfa&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=less&mpType=page */ 27);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=template&id=1e596cfa&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=1e596cfa&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_1e596cfa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=template&id=1e596cfa&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  Status: __webpack_require__(/*! @/components/Status/Status.vue */ 5).default,
  simpleAddress: __webpack_require__(/*! @/components/simple-address/simple-address.vue */ 17)
    .default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("Status", { attrs: { _i: 1 } }),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "v-uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function($event) {
                      return _vm.$handleViewEvent($event)
                    }
                  }
                },
                [_vm._v("温州市")]
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(7, "a-src"), mode: "", _i: 7 }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: _vm._$g(9, "a-src"), mode: "", _i: 9 }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
            [
              _c(
                "v-uni-scroll-view",
                { attrs: { "scroll-x": "true", _i: 11 } },
                [
                  _c(
                    "v-uni-view",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    _vm._l(_vm._$g(13, "f"), function(item, index, $20, $30) {
                      return _c(
                        "v-uni-view",
                        {
                          key: item,
                          staticClass: _vm._$g("13-" + $30, "sc"),
                          class: _vm._$g("13-" + $30, "c"),
                          attrs: { _i: "13-" + $30 }
                        },
                        [_vm._v(_vm._$g("13-" + $30, "t0-0"))]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: _vm._$g(15, "a-src"), mode: "", _i: 15 }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
            [
              _c(
                "v-uni-swiper",
                {
                  staticClass: _vm._$g(18, "sc"),
                  attrs: {
                    "indicator-dots": true,
                    autoplay: true,
                    interval: 5000,
                    duration: 1000,
                    circular: true,
                    _i: 18
                  }
                },
                [
                  _c(
                    "v-uni-swiper-item",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [
                          _c("v-uni-image", {
                            attrs: {
                              src:
                                "http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853",
                              mode: "",
                              _i: 21
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-uni-swiper-item",
                    { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                    [
                      _c(
                        "v-uni-view",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [
                          _c("v-uni-image", {
                            attrs: {
                              src:
                                "http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853",
                              mode: "",
                              _i: 24
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
            _vm._l(_vm._$g(27, "f"), function(item, index, $21, $31) {
              return _c(
                "v-uni-view",
                {
                  key: item,
                  staticClass: _vm._$g("27-" + $31, "sc"),
                  attrs: { _i: "27-" + $31 }
                },
                [
                  _c("v-uni-image", {
                    attrs: {
                      src: _vm._$g("28-" + $31, "a-src"),
                      mode: "",
                      _i: "28-" + $31
                    }
                  }),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g("29-" + $31, "sc"),
                      attrs: { _i: "29-" + $31 }
                    },
                    [_vm._v(_vm._$g("29-" + $31, "t0-0"))]
                  )
                ],
                1
              )
            }),
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
            _vm._l(_vm._$g(31, "f"), function(item, index, $22, $32) {
              return _c(
                "v-uni-view",
                {
                  key: item,
                  staticClass: _vm._$g("31-" + $32, "sc"),
                  attrs: { _i: "31-" + $32 }
                },
                [
                  _c("v-uni-image", {
                    attrs: {
                      src: _vm._$g("32-" + $32, "a-src"),
                      mode: "",
                      _i: "32-" + $32
                    }
                  }),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g("33-" + $32, "sc"),
                      attrs: { _i: "33-" + $32 }
                    },
                    [_vm._v(_vm._$g("33-" + $32, "t0-0"))]
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _c("v-uni-view", { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } }),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
        [
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
            [
              _c("v-uni-image", {
                attrs: { src: _vm._$g(37, "a-src"), mode: "", _i: 37 }
              }),
              _c("v-uni-text", { attrs: { _i: 38 } }, [_vm._v("大家都在讨论")])
            ],
            1
          ),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
            _vm._l(_vm._$g(40, "f"), function(item, index, $23, $33) {
              return _c(
                "v-uni-text",
                {
                  key: item,
                  staticClass: _vm._$g("40-" + $33, "sc"),
                  attrs: { _i: "40-" + $33 }
                },
                [_vm._v("#" + _vm._$g("40-" + $33, "t0-0") + "#")]
              )
            }),
            1
          )
        ],
        1
      ),
      _c("v-uni-view", { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } }),
      _c(
        "v-uni-view",
        { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
        [
          _c("v-uni-image", {
            attrs: { src: _vm._$g(43, "a-src"), mode: "", _i: 43 }
          }),
          _c(
            "v-uni-view",
            { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
            [_vm._v("温州乐清 多云 20～25度 舒适 适合穿着短袖衬衫长裤")]
          )
        ],
        1
      ),
      _c("v-uni-view", { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } }),
      _c("simple-address", {
        ref: "simpleAddress",
        attrs: { _i: 46 },
        on: {
          onConfirm: function($event) {
            return _vm.$handleViewEvent($event)
          }
        }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status.vue?vue&type=template&id=bea42f46&scoped=true& */ 6);
/* harmony import */ var _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Status.vue?vue&type=script&lang=js& */ 8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Status.vue?vue&type=style&index=0&id=bea42f46&lang=scss&scoped=true& */ 10);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bea42f46",
  null,
  false,
  _Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=template&id=bea42f46&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Status.vue?vue&type=template&id=bea42f46&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_template_id_bea42f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=template&id=bea42f46&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-uni-view", { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Status.vue?vue&type=script&lang=js& */ 9);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 10 */
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=style&index=0&id=bea42f46&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Status.vue?vue&type=style&index=0&id=bea42f46&lang=scss&scoped=true& */ 11);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_Status_vue_vue_type_style_index_0_id_bea42f46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=style&index=0&id=bea42f46&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./Status.vue?vue&type=style&index=0&id=bea42f46&lang=scss&scoped=true& */ 12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("48185e6c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 12 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/Status/Status.vue?vue&type=style&index=0&id=bea42f46&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.status[data-v-bea42f46] {\r\n  width: 100%;\r\n  position: fixed;\r\n  z-index: 10;\r\n  background-color: #FFFFFF;\r\n  top: 0;\r\n  height: 0;\r\n  height: var(--status-bar-height);\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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
/* 14 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 15);
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
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

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
  var css = processCss(obj.css) // fixed by xxxxxx
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

//fixed by xxxxxx
var UPX_RE = /([+-]?\d+(\.\d+)?)[r|u]px/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
	}
  return css.replace(/\{[\s\S]+?\}/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 15 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
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
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
/* 17 */
/*!************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-address.vue?vue&type=template&id=5f42387d&scoped=true& */ 18);
/* harmony import */ var _simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-address.vue?vue&type=script&lang=js& */ 20);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-address.vue?vue&type=style&index=0&id=5f42387d&lang=scss&scoped=true& */ 22);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f42387d",
  null,
  false,
  _simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=template&id=5f42387d&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./simple-address.vue?vue&type=template&id=5f42387d&scoped=true& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_template_id_5f42387d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=template&id=5f42387d&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$g(0, "i")
    ? _c(
        "v-uni-view",
        {
          staticClass: _vm._$g(0, "sc"),
          attrs: { _i: 0 },
          on: {
            touchmove: function($event) {
              return _vm.$handleViewEvent($event, { stop: true, prevent: true })
            }
          }
        },
        [
          _vm._$g(1, "i")
            ? _c("v-uni-view", {
                staticClass: _vm._$g(1, "sc"),
                class: _vm._$g(1, "c"),
                style: _vm._$g(1, "s"),
                attrs: { _i: 1 },
                on: {
                  touchmove: function($event) {
                    return _vm.$handleViewEvent($event, {
                      stop: true,
                      prevent: true
                    })
                  },
                  click: function($event) {
                    return _vm.$handleViewEvent($event)
                  }
                }
              })
            : _vm._e(),
          _c(
            "v-uni-view",
            {
              staticClass: _vm._$g(2, "sc"),
              class: _vm._$g(2, "c"),
              attrs: { _i: 2 }
            },
            [
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(4, "sc"),
                      attrs: { _i: 4 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g(5, "sc"),
                          style: _vm._$g(5, "s"),
                          attrs: { _i: 5 }
                        },
                        [_vm._v("取消")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-uni-view",
                    {
                      staticClass: _vm._$g(6, "sc"),
                      attrs: { _i: 6 },
                      on: {
                        click: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g(7, "sc"),
                          style: _vm._$g(7, "s"),
                          attrs: { _i: 7 }
                        },
                        [_vm._v("确定")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "v-uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c(
                    "v-uni-picker-view",
                    {
                      staticClass: _vm._$g(9, "sc"),
                      attrs: {
                        "indicator-style": "height: 70rpx;",
                        value: _vm._$g(9, "a-value"),
                        _i: 9
                      },
                      on: {
                        change: function($event) {
                          return _vm.$handleViewEvent($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-uni-picker-view-column",
                        { attrs: { _i: 10 } },
                        _vm._l(_vm._$g(11, "f"), function(
                          item,
                          index,
                          $20,
                          $30
                        ) {
                          return _c(
                            "v-uni-view",
                            {
                              key: item,
                              staticClass: _vm._$g("11-" + $30, "sc"),
                              style: _vm._$g("11-" + $30, "s"),
                              attrs: { _i: "11-" + $30 }
                            },
                            [_vm._v(_vm._$g("11-" + $30, "t0-0"))]
                          )
                        }),
                        1
                      ),
                      _c(
                        "v-uni-picker-view-column",
                        { attrs: { _i: 12 } },
                        _vm._l(_vm._$g(13, "f"), function(
                          item,
                          index,
                          $21,
                          $31
                        ) {
                          return _c(
                            "v-uni-view",
                            {
                              key: item,
                              staticClass: _vm._$g("13-" + $31, "sc"),
                              style: _vm._$g("13-" + $31, "s"),
                              attrs: { _i: "13-" + $31 }
                            },
                            [_vm._v(_vm._$g("13-" + $31, "t0-0"))]
                          )
                        }),
                        1
                      ),
                      _c(
                        "v-uni-picker-view-column",
                        { attrs: { _i: 14 } },
                        _vm._l(_vm._$g(15, "f"), function(
                          item,
                          index,
                          $22,
                          $32
                        ) {
                          return _c(
                            "v-uni-view",
                            {
                              key: item,
                              staticClass: _vm._$g("15-" + $32, "sc"),
                              style: _vm._$g("15-" + $32, "s"),
                              attrs: { _i: "15-" + $32 }
                            },
                            [_vm._v(_vm._$g("15-" + $32, "t0-0"))]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./simple-address.vue?vue&type=script&lang=js& */ 21);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{
  name: "simpleAddress",
  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 22 */
/*!**********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=style&index=0&id=5f42387d&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./simple-address.vue?vue&type=style&index=0&id=5f42387d&lang=scss&scoped=true& */ 23);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_simple_address_vue_vue_type_style_index_0_id_5f42387d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=style&index=0&id=5f42387d&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./simple-address.vue?vue&type=style&index=0&id=5f42387d&lang=scss&scoped=true& */ 24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("f18b30d0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 24 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/components/simple-address/simple-address.vue?vue&type=style&index=0&id=5f42387d&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\n.simple-address[data-v-5f42387d] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\n}\n.simple-address-mask[data-v-5f42387d] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n  opacity: 0;\r\n  z-index: 99;\n}\n.mask-ani[data-v-5f42387d] {\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\r\n  -webkit-transition-duration: 0.2s;\r\n          transition-duration: 0.2s;\n}\n.simple-bottom-mask[data-v-5f42387d] {\r\n  opacity: 1;\n}\n.simple-center-mask[data-v-5f42387d] {\r\n  opacity: 1;\n}\n.simple-address--fixed[data-v-5f42387d] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n  -webkit-transform: translateY(460rpx);\r\n          transform: translateY(460rpx);\r\n  z-index: 99;\n}\n.simple-address-content[data-v-5f42387d] {\r\n  background-color: #ffffff;\n}\n.simple-content-bottom[data-v-5f42387d] {\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-transform: translateY(500rpx);\r\n          transform: translateY(500rpx);\n}\n.content-ani[data-v-5f42387d] {\r\n  -webkit-transition-property: opacity, -webkit-transform;\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: transform, opacity;\r\n  transition-property: transform, opacity, -webkit-transform;\r\n  -webkit-transition-duration: 0.2s;\r\n          transition-duration: 0.2s;\n}\n.simple-bottom-content[data-v-5f42387d] {\r\n  -webkit-transform: translateY(0);\r\n          transform: translateY(0);\n}\n.simple-center-content[data-v-5f42387d] {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  opacity: 1;\n}\n.simple-address__header[data-v-5f42387d] {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-flex-wrap: nowrap;\r\n          flex-wrap: nowrap;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\r\n  border-bottom-color: #f2f2f2;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 1rpx;\n}\n.simple-address--fixed-top[data-v-5f42387d] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\r\n  border-top-color: #c8c7cc;\r\n  border-top-style: solid;\r\n  border-top-width: 1rpx;\n}\n.simple-address__header-btn-box[data-v-5f42387d] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  height: 70rpx;\n}\n.simple-address__header-text[data-v-5f42387d] {\r\n  text-align: center;\r\n  font-size: 28rpx;\r\n  color: #1aad19;\r\n  line-height: 70rpx;\r\n  padding-left: 40rpx;\r\n  padding-right: 40rpx;\n}\n.simple-address__box[data-v-5f42387d] {\r\n  position: relative;\n}\n.simple-address-view[data-v-5f42387d] {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 408rpx;\r\n  background-color: white;\n}\n.picker-item[data-v-5f42387d] {\r\n  text-align: center;\r\n  line-height: 70rpx;\r\n  text-overflow: ellipsis;\r\n  font-size: 28rpx;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 25 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 26);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _simpleAddress = _interopRequireDefault(__webpack_require__(/*! @/components/simple-address/simple-address.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {
    'simpleAddress': _simpleAddress.default } };exports.default = _default;

/***/ }),
/* 27 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=style&index=0&lang=less&mpType=page ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_10_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=less&mpType=page */ 28);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_10_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_10_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_10_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_10_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_10_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_less_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=style&index=0&lang=less&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=less&mpType=page */ 29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("565868da", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 29 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/pages/index/index.vue?vue&type=style&index=0&lang=less&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body::after {\n  display: none;\n}\n.index .index-header {\n  width: 100%;\n  padding-top: var(--status-bar-height);\n  position: fixed;\n  z-index: 999;\n  background-color: #fff;\n}\n.index .index-header .index-header-top {\n  width: 100%;\n  height: 120rpx;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-left: 32rpx;\n  padding-right: 48rpx;\n  box-sizing: border-box;\n}\n.index .index-header .index-header-top .index-header-top-left {\n  font-family: PingFangSC-Medium;\n  font-size: 16px;\n  color: #141414;\n  letter-spacing: -0.39px;\n  font-weight: bold;\n  padding-right: 28rpx;\n  box-sizing: border-box;\n}\n.index .index-header .index-header-top .index-header-top-center {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.index .index-header .index-header-top .index-header-top-center .index-header-top-center-search {\n  width: 100%;\n  height: 58rpx;\n  background: #EFEFEF;\n  border-radius: 14.5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-left: 18rpx;\n  box-sizing: border-box;\n}\n.index .index-header .index-header-top .index-header-top-center .index-header-top-center-search uni-image {\n  width: 34rpx;\n  height: 34rpx;\n  margin-left: 18rpx;\n}\n.index .index-header .index-header-top .index-header-top-rihgt {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-left: 20rpx;\n  box-sizing: border-box;\n}\n.index .index-header .index-header-top .index-header-top-rihgt uni-image {\n  width: 44rpx;\n  height: 44rpx;\n}\n.index .index-header .index-header-bottom {\n  width: 100%;\n  height: 44rpx;\n  position: relative;\n}\n.index .index-header .index-header-bottom .index-header-bottom-ul {\n  width: 100%;\n  height: 100%;\n  white-space: nowrap;\n  display: inline-block;\n}\n.index .index-header .index-header-bottom .index-header-bottom-ul .index-header-bottom-li {\n  width: 128rpx;\n  height: 100%;\n  display: inline-block;\n  font-family: PingFangSC-Regular;\n  font-size: 16px;\n  color: #141414;\n  letter-spacing: -0.39px;\n  position: relative;\n  text-align: center;\n}\n.index .index-header .index-header-bottom .index-header-bottom-ul .index-header-bottom-li::after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-bottom: 6rpx solid #FF682D;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.index .index-header .index-header-bottom .index-header-bottom-ul .index-header-bottom-li.navActive {\n  font-size: 16px;\n  color: #FF682D;\n}\n.index .index-header .index-header-bottom .index-header-bottom-ul .index-header-bottom-li.navActive::after {\n  width: 50%;\n}\n.index .index-header .index-header-bottom .addli {\n  width: 64rpx;\n  height: 44rpx;\n  position: absolute;\n  right: 0;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  text-align: center;\n  background: #FFFFFF;\n  box-shadow: -2px 0 2px -1px rgba(167, 167, 167, 0.5);\n}\n.index .index-header .index-header-bottom .addli uni-image {\n  width: 32rpx;\n  height: 32rpx;\n}\n.index .index-banner {\n  padding-top: 236rpx;\n  box-sizing: border-box;\n}\n.index .index-banner .index-banner-wrapper {\n  width: 100%;\n  height: 336rpx;\n}\n.index .index-banner .index-banner-wrapper .index-swiper {\n  width: 100%;\n  height: 336rpx;\n}\n.index .index-banner .index-banner-wrapper .index-swiper .index-swiper-item {\n  width: 100%;\n  height: 336rpx;\n}\n.index .index-banner .index-banner-wrapper .index-swiper .index-swiper-item .swiper-item {\n  width: 100%;\n  height: 336rpx;\n}\n.index .index-banner .index-banner-wrapper .index-swiper .index-swiper-item .swiper-item uni-image {\n  width: 100%;\n  height: 100%;\n}\n.index .index-main-nav {\n  padding: 22rpx 64rpx 22rpx 58rpx;\n  box-sizing: border-box;\n}\n.index .index-main-nav .index-main-nav-top,\n.index .index-main-nav .index-main-nav-bottom {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n.index .index-main-nav .index-main-nav-top .index-main-nav-top-item,\n.index .index-main-nav .index-main-nav-bottom .index-main-nav-top-item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.index .index-main-nav .index-main-nav-top .index-main-nav-top-item uni-image,\n.index .index-main-nav .index-main-nav-bottom .index-main-nav-top-item uni-image {\n  width: 92rpx;\n  height: 92rpx;\n}\n.index .index-main-nav .index-main-nav-top .index-main-nav-top-item .index-main-nav-top-item-text,\n.index .index-main-nav .index-main-nav-bottom .index-main-nav-top-item .index-main-nav-top-item-text {\n  font-family: PingFangSC-Medium;\n  font-size: 12px;\n  color: #545454;\n  letter-spacing: -0.29px;\n}\n.index .index-main-nav .index-main-nav-bottom {\n  padding-top: 38rpx;\n  box-sizing: border-box;\n}\n.index .index-talk {\n  width: 100%;\n  padding: 22rpx 38rpx;\n  box-sizing: border-box;\n}\n.index .index-talk .index-talk-top {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-bottom: 30rpx;\n  box-sizing: border-box;\n}\n.index .index-talk .index-talk-top uni-image {\n  width: 28rpx;\n  height: 28rpx;\n}\n.index .index-talk .index-talk-top uni-text {\n  font-family: PingFangSC-Medium;\n  font-size: 14px;\n  color: #141414;\n  letter-spacing: -0.34px;\n  font-weight: bold;\n  padding-left: 14rpx;\n  box-sizing: border-box;\n}\n.index .index-talk .index-talk-bottom .index-talk-bottom-item {\n  display: inline-block;\n  margin-right: 180rpx;\n}\n.index .index-talk .index-talk-bottom .index-talk-bottom-item:last-child {\n  margin-right: 0;\n}\n.index .index-weather {\n  width: 100%;\n  height: 72rpx;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0 38rpx;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.index .index-weather uni-image {\n  width: 48rpx;\n  height: 32rpx;\n}\n.index .index-weather .index-weather-main {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  padding-left: 20rpx;\n  box-sizing: border-box;\n  font-family: PingFangSC-Regular;\n  font-size: 12px;\n  color: #141414;\n  letter-spacing: -0.29px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/论坛app/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 31);
/* harmony import */ var _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_8_oneOf_1_0_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 14).default
var update = add("62411e07", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 32 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Administrator/Documents/HBuilderProjects/论坛app/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 13);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 注意要写在第一行，同时给style标签加入lang=\"scss\"属性 */\n.u-relative,\r\n.u-rela {\r\n  position: relative;\n}\n.u-absolute,\r\n.u-abso {\r\n  position: absolute;\n}\n.u-font-xs {\r\n  font-size: 22rpx;\n}\n.u-font-sm {\r\n  font-size: 26rpx;\n}\n.u-font-md {\r\n  font-size: 28rpx;\n}\n.u-font-lg {\r\n  font-size: 30rpx;\n}\n.u-font-xl {\r\n  font-size: 34rpx;\n}\n.u-flex {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\n.u-flex-wrap {\r\n  -webkit-flex-wrap: wrap;\r\n          flex-wrap: wrap;\n}\n.u-flex-nowrap {\r\n  -webkit-flex-wrap: nowrap;\r\n          flex-wrap: nowrap;\n}\n.u-col-center {\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\n.u-col-top {\r\n  -webkit-box-align: start;\r\n  -webkit-align-items: flex-start;\r\n          align-items: flex-start;\n}\n.u-col-bottom {\r\n  -webkit-box-align: end;\r\n  -webkit-align-items: flex-end;\r\n          align-items: flex-end;\n}\n.u-row-center {\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\n}\n.u-row-left {\r\n  -webkit-box-pack: start;\r\n  -webkit-justify-content: flex-start;\r\n          justify-content: flex-start;\n}\n.u-row-right {\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\n.u-row-between {\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\n}\n.u-row-around {\r\n  -webkit-justify-content: space-around;\r\n          justify-content: space-around;\n}\n.u-text-left {\r\n  text-align: left;\n}\n.u-text-center {\r\n  text-align: center;\n}\n.u-text-right {\r\n  text-align: right;\n}\n.u-flex-col {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\n}\n.u-flex-1 {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1;\r\n          flex: 1;\n}\n.u-flex-2 {\r\n  -webkit-box-flex: 2;\r\n  -webkit-flex: 2;\r\n          flex: 2;\n}\n.u-flex-3 {\r\n  -webkit-box-flex: 3;\r\n  -webkit-flex: 3;\r\n          flex: 3;\n}\n.u-flex-4 {\r\n  -webkit-box-flex: 4;\r\n  -webkit-flex: 4;\r\n          flex: 4;\n}\n.u-flex-5 {\r\n  -webkit-box-flex: 5;\r\n  -webkit-flex: 5;\r\n          flex: 5;\n}\n.u-flex-6 {\r\n  -webkit-box-flex: 6;\r\n  -webkit-flex: 6;\r\n          flex: 6;\n}\n.u-flex-7 {\r\n  -webkit-box-flex: 7;\r\n  -webkit-flex: 7;\r\n          flex: 7;\n}\n.u-flex-8 {\r\n  -webkit-box-flex: 8;\r\n  -webkit-flex: 8;\r\n          flex: 8;\n}\n.u-flex-9 {\r\n  -webkit-box-flex: 9;\r\n  -webkit-flex: 9;\r\n          flex: 9;\n}\n.u-flex-10 {\r\n  -webkit-box-flex: 10;\r\n  -webkit-flex: 10;\r\n          flex: 10;\n}\n.u-flex-11 {\r\n  -webkit-box-flex: 11;\r\n  -webkit-flex: 11;\r\n          flex: 11;\n}\n.u-flex-12 {\r\n  -webkit-box-flex: 12;\r\n  -webkit-flex: 12;\r\n          flex: 12;\n}\n.u-font-9 {\r\n  font-size: 9px;\n}\n.u-font-10 {\r\n  font-size: 10px;\n}\n.u-font-11 {\r\n  font-size: 11px;\n}\n.u-font-12 {\r\n  font-size: 12px;\n}\n.u-font-13 {\r\n  font-size: 13px;\n}\n.u-font-14 {\r\n  font-size: 14px;\n}\n.u-font-15 {\r\n  font-size: 15px;\n}\n.u-font-16 {\r\n  font-size: 16px;\n}\n.u-font-17 {\r\n  font-size: 17px;\n}\n.u-font-18 {\r\n  font-size: 18px;\n}\n.u-font-19 {\r\n  font-size: 19px;\n}\n.u-font-20 {\r\n  font-size: 20rpx;\n}\n.u-font-21 {\r\n  font-size: 21rpx;\n}\n.u-font-22 {\r\n  font-size: 22rpx;\n}\n.u-font-23 {\r\n  font-size: 23rpx;\n}\n.u-font-24 {\r\n  font-size: 24rpx;\n}\n.u-font-25 {\r\n  font-size: 25rpx;\n}\n.u-font-26 {\r\n  font-size: 26rpx;\n}\n.u-font-27 {\r\n  font-size: 27rpx;\n}\n.u-font-28 {\r\n  font-size: 28rpx;\n}\n.u-font-29 {\r\n  font-size: 29rpx;\n}\n.u-font-30 {\r\n  font-size: 30rpx;\n}\n.u-font-31 {\r\n  font-size: 31rpx;\n}\n.u-font-32 {\r\n  font-size: 32rpx;\n}\n.u-font-33 {\r\n  font-size: 33rpx;\n}\n.u-font-34 {\r\n  font-size: 34rpx;\n}\n.u-font-35 {\r\n  font-size: 35rpx;\n}\n.u-font-36 {\r\n  font-size: 36rpx;\n}\n.u-font-37 {\r\n  font-size: 37rpx;\n}\n.u-font-38 {\r\n  font-size: 38rpx;\n}\n.u-font-39 {\r\n  font-size: 39rpx;\n}\n.u-font-40 {\r\n  font-size: 40rpx;\n}\n.u-margin-0, .u-m-0 {\r\n  margin: 0rpx !important;\n}\n.u-padding-0, .u-p-0 {\r\n  padding: 0rpx !important;\n}\n.u-m-l-0 {\r\n  margin-left: 0rpx !important;\n}\n.u-p-l-0 {\r\n  padding-left: 0rpx !important;\n}\n.u-margin-left-0 {\r\n  margin-left: 0rpx !important;\n}\n.u-padding-left-0 {\r\n  padding-left: 0rpx !important;\n}\n.u-m-t-0 {\r\n  margin-top: 0rpx !important;\n}\n.u-p-t-0 {\r\n  padding-top: 0rpx !important;\n}\n.u-margin-top-0 {\r\n  margin-top: 0rpx !important;\n}\n.u-padding-top-0 {\r\n  padding-top: 0rpx !important;\n}\n.u-m-r-0 {\r\n  margin-right: 0rpx !important;\n}\n.u-p-r-0 {\r\n  padding-right: 0rpx !important;\n}\n.u-margin-right-0 {\r\n  margin-right: 0rpx !important;\n}\n.u-padding-right-0 {\r\n  padding-right: 0rpx !important;\n}\n.u-m-b-0 {\r\n  margin-bottom: 0rpx !important;\n}\n.u-p-b-0 {\r\n  padding-bottom: 0rpx !important;\n}\n.u-margin-bottom-0 {\r\n  margin-bottom: 0rpx !important;\n}\n.u-padding-bottom-0 {\r\n  padding-bottom: 0rpx !important;\n}\n.u-margin-2, .u-m-2 {\r\n  margin: 2rpx !important;\n}\n.u-padding-2, .u-p-2 {\r\n  padding: 2rpx !important;\n}\n.u-m-l-2 {\r\n  margin-left: 2rpx !important;\n}\n.u-p-l-2 {\r\n  padding-left: 2rpx !important;\n}\n.u-margin-left-2 {\r\n  margin-left: 2rpx !important;\n}\n.u-padding-left-2 {\r\n  padding-left: 2rpx !important;\n}\n.u-m-t-2 {\r\n  margin-top: 2rpx !important;\n}\n.u-p-t-2 {\r\n  padding-top: 2rpx !important;\n}\n.u-margin-top-2 {\r\n  margin-top: 2rpx !important;\n}\n.u-padding-top-2 {\r\n  padding-top: 2rpx !important;\n}\n.u-m-r-2 {\r\n  margin-right: 2rpx !important;\n}\n.u-p-r-2 {\r\n  padding-right: 2rpx !important;\n}\n.u-margin-right-2 {\r\n  margin-right: 2rpx !important;\n}\n.u-padding-right-2 {\r\n  padding-right: 2rpx !important;\n}\n.u-m-b-2 {\r\n  margin-bottom: 2rpx !important;\n}\n.u-p-b-2 {\r\n  padding-bottom: 2rpx !important;\n}\n.u-margin-bottom-2 {\r\n  margin-bottom: 2rpx !important;\n}\n.u-padding-bottom-2 {\r\n  padding-bottom: 2rpx !important;\n}\n.u-margin-4, .u-m-4 {\r\n  margin: 4rpx !important;\n}\n.u-padding-4, .u-p-4 {\r\n  padding: 4rpx !important;\n}\n.u-m-l-4 {\r\n  margin-left: 4rpx !important;\n}\n.u-p-l-4 {\r\n  padding-left: 4rpx !important;\n}\n.u-margin-left-4 {\r\n  margin-left: 4rpx !important;\n}\n.u-padding-left-4 {\r\n  padding-left: 4rpx !important;\n}\n.u-m-t-4 {\r\n  margin-top: 4rpx !important;\n}\n.u-p-t-4 {\r\n  padding-top: 4rpx !important;\n}\n.u-margin-top-4 {\r\n  margin-top: 4rpx !important;\n}\n.u-padding-top-4 {\r\n  padding-top: 4rpx !important;\n}\n.u-m-r-4 {\r\n  margin-right: 4rpx !important;\n}\n.u-p-r-4 {\r\n  padding-right: 4rpx !important;\n}\n.u-margin-right-4 {\r\n  margin-right: 4rpx !important;\n}\n.u-padding-right-4 {\r\n  padding-right: 4rpx !important;\n}\n.u-m-b-4 {\r\n  margin-bottom: 4rpx !important;\n}\n.u-p-b-4 {\r\n  padding-bottom: 4rpx !important;\n}\n.u-margin-bottom-4 {\r\n  margin-bottom: 4rpx !important;\n}\n.u-padding-bottom-4 {\r\n  padding-bottom: 4rpx !important;\n}\n.u-margin-5, .u-m-5 {\r\n  margin: 5rpx !important;\n}\n.u-padding-5, .u-p-5 {\r\n  padding: 5rpx !important;\n}\n.u-m-l-5 {\r\n  margin-left: 5rpx !important;\n}\n.u-p-l-5 {\r\n  padding-left: 5rpx !important;\n}\n.u-margin-left-5 {\r\n  margin-left: 5rpx !important;\n}\n.u-padding-left-5 {\r\n  padding-left: 5rpx !important;\n}\n.u-m-t-5 {\r\n  margin-top: 5rpx !important;\n}\n.u-p-t-5 {\r\n  padding-top: 5rpx !important;\n}\n.u-margin-top-5 {\r\n  margin-top: 5rpx !important;\n}\n.u-padding-top-5 {\r\n  padding-top: 5rpx !important;\n}\n.u-m-r-5 {\r\n  margin-right: 5rpx !important;\n}\n.u-p-r-5 {\r\n  padding-right: 5rpx !important;\n}\n.u-margin-right-5 {\r\n  margin-right: 5rpx !important;\n}\n.u-padding-right-5 {\r\n  padding-right: 5rpx !important;\n}\n.u-m-b-5 {\r\n  margin-bottom: 5rpx !important;\n}\n.u-p-b-5 {\r\n  padding-bottom: 5rpx !important;\n}\n.u-margin-bottom-5 {\r\n  margin-bottom: 5rpx !important;\n}\n.u-padding-bottom-5 {\r\n  padding-bottom: 5rpx !important;\n}\n.u-margin-6, .u-m-6 {\r\n  margin: 6rpx !important;\n}\n.u-padding-6, .u-p-6 {\r\n  padding: 6rpx !important;\n}\n.u-m-l-6 {\r\n  margin-left: 6rpx !important;\n}\n.u-p-l-6 {\r\n  padding-left: 6rpx !important;\n}\n.u-margin-left-6 {\r\n  margin-left: 6rpx !important;\n}\n.u-padding-left-6 {\r\n  padding-left: 6rpx !important;\n}\n.u-m-t-6 {\r\n  margin-top: 6rpx !important;\n}\n.u-p-t-6 {\r\n  padding-top: 6rpx !important;\n}\n.u-margin-top-6 {\r\n  margin-top: 6rpx !important;\n}\n.u-padding-top-6 {\r\n  padding-top: 6rpx !important;\n}\n.u-m-r-6 {\r\n  margin-right: 6rpx !important;\n}\n.u-p-r-6 {\r\n  padding-right: 6rpx !important;\n}\n.u-margin-right-6 {\r\n  margin-right: 6rpx !important;\n}\n.u-padding-right-6 {\r\n  padding-right: 6rpx !important;\n}\n.u-m-b-6 {\r\n  margin-bottom: 6rpx !important;\n}\n.u-p-b-6 {\r\n  padding-bottom: 6rpx !important;\n}\n.u-margin-bottom-6 {\r\n  margin-bottom: 6rpx !important;\n}\n.u-padding-bottom-6 {\r\n  padding-bottom: 6rpx !important;\n}\n.u-margin-8, .u-m-8 {\r\n  margin: 8rpx !important;\n}\n.u-padding-8, .u-p-8 {\r\n  padding: 8rpx !important;\n}\n.u-m-l-8 {\r\n  margin-left: 8rpx !important;\n}\n.u-p-l-8 {\r\n  padding-left: 8rpx !important;\n}\n.u-margin-left-8 {\r\n  margin-left: 8rpx !important;\n}\n.u-padding-left-8 {\r\n  padding-left: 8rpx !important;\n}\n.u-m-t-8 {\r\n  margin-top: 8rpx !important;\n}\n.u-p-t-8 {\r\n  padding-top: 8rpx !important;\n}\n.u-margin-top-8 {\r\n  margin-top: 8rpx !important;\n}\n.u-padding-top-8 {\r\n  padding-top: 8rpx !important;\n}\n.u-m-r-8 {\r\n  margin-right: 8rpx !important;\n}\n.u-p-r-8 {\r\n  padding-right: 8rpx !important;\n}\n.u-margin-right-8 {\r\n  margin-right: 8rpx !important;\n}\n.u-padding-right-8 {\r\n  padding-right: 8rpx !important;\n}\n.u-m-b-8 {\r\n  margin-bottom: 8rpx !important;\n}\n.u-p-b-8 {\r\n  padding-bottom: 8rpx !important;\n}\n.u-margin-bottom-8 {\r\n  margin-bottom: 8rpx !important;\n}\n.u-padding-bottom-8 {\r\n  padding-bottom: 8rpx !important;\n}\n.u-margin-10, .u-m-10 {\r\n  margin: 10rpx !important;\n}\n.u-padding-10, .u-p-10 {\r\n  padding: 10rpx !important;\n}\n.u-m-l-10 {\r\n  margin-left: 10rpx !important;\n}\n.u-p-l-10 {\r\n  padding-left: 10rpx !important;\n}\n.u-margin-left-10 {\r\n  margin-left: 10rpx !important;\n}\n.u-padding-left-10 {\r\n  padding-left: 10rpx !important;\n}\n.u-m-t-10 {\r\n  margin-top: 10rpx !important;\n}\n.u-p-t-10 {\r\n  padding-top: 10rpx !important;\n}\n.u-margin-top-10 {\r\n  margin-top: 10rpx !important;\n}\n.u-padding-top-10 {\r\n  padding-top: 10rpx !important;\n}\n.u-m-r-10 {\r\n  margin-right: 10rpx !important;\n}\n.u-p-r-10 {\r\n  padding-right: 10rpx !important;\n}\n.u-margin-right-10 {\r\n  margin-right: 10rpx !important;\n}\n.u-padding-right-10 {\r\n  padding-right: 10rpx !important;\n}\n.u-m-b-10 {\r\n  margin-bottom: 10rpx !important;\n}\n.u-p-b-10 {\r\n  padding-bottom: 10rpx !important;\n}\n.u-margin-bottom-10 {\r\n  margin-bottom: 10rpx !important;\n}\n.u-padding-bottom-10 {\r\n  padding-bottom: 10rpx !important;\n}\n.u-margin-12, .u-m-12 {\r\n  margin: 12rpx !important;\n}\n.u-padding-12, .u-p-12 {\r\n  padding: 12rpx !important;\n}\n.u-m-l-12 {\r\n  margin-left: 12rpx !important;\n}\n.u-p-l-12 {\r\n  padding-left: 12rpx !important;\n}\n.u-margin-left-12 {\r\n  margin-left: 12rpx !important;\n}\n.u-padding-left-12 {\r\n  padding-left: 12rpx !important;\n}\n.u-m-t-12 {\r\n  margin-top: 12rpx !important;\n}\n.u-p-t-12 {\r\n  padding-top: 12rpx !important;\n}\n.u-margin-top-12 {\r\n  margin-top: 12rpx !important;\n}\n.u-padding-top-12 {\r\n  padding-top: 12rpx !important;\n}\n.u-m-r-12 {\r\n  margin-right: 12rpx !important;\n}\n.u-p-r-12 {\r\n  padding-right: 12rpx !important;\n}\n.u-margin-right-12 {\r\n  margin-right: 12rpx !important;\n}\n.u-padding-right-12 {\r\n  padding-right: 12rpx !important;\n}\n.u-m-b-12 {\r\n  margin-bottom: 12rpx !important;\n}\n.u-p-b-12 {\r\n  padding-bottom: 12rpx !important;\n}\n.u-margin-bottom-12 {\r\n  margin-bottom: 12rpx !important;\n}\n.u-padding-bottom-12 {\r\n  padding-bottom: 12rpx !important;\n}\n.u-margin-14, .u-m-14 {\r\n  margin: 14rpx !important;\n}\n.u-padding-14, .u-p-14 {\r\n  padding: 14rpx !important;\n}\n.u-m-l-14 {\r\n  margin-left: 14rpx !important;\n}\n.u-p-l-14 {\r\n  padding-left: 14rpx !important;\n}\n.u-margin-left-14 {\r\n  margin-left: 14rpx !important;\n}\n.u-padding-left-14 {\r\n  padding-left: 14rpx !important;\n}\n.u-m-t-14 {\r\n  margin-top: 14rpx !important;\n}\n.u-p-t-14 {\r\n  padding-top: 14rpx !important;\n}\n.u-margin-top-14 {\r\n  margin-top: 14rpx !important;\n}\n.u-padding-top-14 {\r\n  padding-top: 14rpx !important;\n}\n.u-m-r-14 {\r\n  margin-right: 14rpx !important;\n}\n.u-p-r-14 {\r\n  padding-right: 14rpx !important;\n}\n.u-margin-right-14 {\r\n  margin-right: 14rpx !important;\n}\n.u-padding-right-14 {\r\n  padding-right: 14rpx !important;\n}\n.u-m-b-14 {\r\n  margin-bottom: 14rpx !important;\n}\n.u-p-b-14 {\r\n  padding-bottom: 14rpx !important;\n}\n.u-margin-bottom-14 {\r\n  margin-bottom: 14rpx !important;\n}\n.u-padding-bottom-14 {\r\n  padding-bottom: 14rpx !important;\n}\n.u-margin-15, .u-m-15 {\r\n  margin: 15rpx !important;\n}\n.u-padding-15, .u-p-15 {\r\n  padding: 15rpx !important;\n}\n.u-m-l-15 {\r\n  margin-left: 15rpx !important;\n}\n.u-p-l-15 {\r\n  padding-left: 15rpx !important;\n}\n.u-margin-left-15 {\r\n  margin-left: 15rpx !important;\n}\n.u-padding-left-15 {\r\n  padding-left: 15rpx !important;\n}\n.u-m-t-15 {\r\n  margin-top: 15rpx !important;\n}\n.u-p-t-15 {\r\n  padding-top: 15rpx !important;\n}\n.u-margin-top-15 {\r\n  margin-top: 15rpx !important;\n}\n.u-padding-top-15 {\r\n  padding-top: 15rpx !important;\n}\n.u-m-r-15 {\r\n  margin-right: 15rpx !important;\n}\n.u-p-r-15 {\r\n  padding-right: 15rpx !important;\n}\n.u-margin-right-15 {\r\n  margin-right: 15rpx !important;\n}\n.u-padding-right-15 {\r\n  padding-right: 15rpx !important;\n}\n.u-m-b-15 {\r\n  margin-bottom: 15rpx !important;\n}\n.u-p-b-15 {\r\n  padding-bottom: 15rpx !important;\n}\n.u-margin-bottom-15 {\r\n  margin-bottom: 15rpx !important;\n}\n.u-padding-bottom-15 {\r\n  padding-bottom: 15rpx !important;\n}\n.u-margin-16, .u-m-16 {\r\n  margin: 16rpx !important;\n}\n.u-padding-16, .u-p-16 {\r\n  padding: 16rpx !important;\n}\n.u-m-l-16 {\r\n  margin-left: 16rpx !important;\n}\n.u-p-l-16 {\r\n  padding-left: 16rpx !important;\n}\n.u-margin-left-16 {\r\n  margin-left: 16rpx !important;\n}\n.u-padding-left-16 {\r\n  padding-left: 16rpx !important;\n}\n.u-m-t-16 {\r\n  margin-top: 16rpx !important;\n}\n.u-p-t-16 {\r\n  padding-top: 16rpx !important;\n}\n.u-margin-top-16 {\r\n  margin-top: 16rpx !important;\n}\n.u-padding-top-16 {\r\n  padding-top: 16rpx !important;\n}\n.u-m-r-16 {\r\n  margin-right: 16rpx !important;\n}\n.u-p-r-16 {\r\n  padding-right: 16rpx !important;\n}\n.u-margin-right-16 {\r\n  margin-right: 16rpx !important;\n}\n.u-padding-right-16 {\r\n  padding-right: 16rpx !important;\n}\n.u-m-b-16 {\r\n  margin-bottom: 16rpx !important;\n}\n.u-p-b-16 {\r\n  padding-bottom: 16rpx !important;\n}\n.u-margin-bottom-16 {\r\n  margin-bottom: 16rpx !important;\n}\n.u-padding-bottom-16 {\r\n  padding-bottom: 16rpx !important;\n}\n.u-margin-18, .u-m-18 {\r\n  margin: 18rpx !important;\n}\n.u-padding-18, .u-p-18 {\r\n  padding: 18rpx !important;\n}\n.u-m-l-18 {\r\n  margin-left: 18rpx !important;\n}\n.u-p-l-18 {\r\n  padding-left: 18rpx !important;\n}\n.u-margin-left-18 {\r\n  margin-left: 18rpx !important;\n}\n.u-padding-left-18 {\r\n  padding-left: 18rpx !important;\n}\n.u-m-t-18 {\r\n  margin-top: 18rpx !important;\n}\n.u-p-t-18 {\r\n  padding-top: 18rpx !important;\n}\n.u-margin-top-18 {\r\n  margin-top: 18rpx !important;\n}\n.u-padding-top-18 {\r\n  padding-top: 18rpx !important;\n}\n.u-m-r-18 {\r\n  margin-right: 18rpx !important;\n}\n.u-p-r-18 {\r\n  padding-right: 18rpx !important;\n}\n.u-margin-right-18 {\r\n  margin-right: 18rpx !important;\n}\n.u-padding-right-18 {\r\n  padding-right: 18rpx !important;\n}\n.u-m-b-18 {\r\n  margin-bottom: 18rpx !important;\n}\n.u-p-b-18 {\r\n  padding-bottom: 18rpx !important;\n}\n.u-margin-bottom-18 {\r\n  margin-bottom: 18rpx !important;\n}\n.u-padding-bottom-18 {\r\n  padding-bottom: 18rpx !important;\n}\n.u-margin-20, .u-m-20 {\r\n  margin: 20rpx !important;\n}\n.u-padding-20, .u-p-20 {\r\n  padding: 20rpx !important;\n}\n.u-m-l-20 {\r\n  margin-left: 20rpx !important;\n}\n.u-p-l-20 {\r\n  padding-left: 20rpx !important;\n}\n.u-margin-left-20 {\r\n  margin-left: 20rpx !important;\n}\n.u-padding-left-20 {\r\n  padding-left: 20rpx !important;\n}\n.u-m-t-20 {\r\n  margin-top: 20rpx !important;\n}\n.u-p-t-20 {\r\n  padding-top: 20rpx !important;\n}\n.u-margin-top-20 {\r\n  margin-top: 20rpx !important;\n}\n.u-padding-top-20 {\r\n  padding-top: 20rpx !important;\n}\n.u-m-r-20 {\r\n  margin-right: 20rpx !important;\n}\n.u-p-r-20 {\r\n  padding-right: 20rpx !important;\n}\n.u-margin-right-20 {\r\n  margin-right: 20rpx !important;\n}\n.u-padding-right-20 {\r\n  padding-right: 20rpx !important;\n}\n.u-m-b-20 {\r\n  margin-bottom: 20rpx !important;\n}\n.u-p-b-20 {\r\n  padding-bottom: 20rpx !important;\n}\n.u-margin-bottom-20 {\r\n  margin-bottom: 20rpx !important;\n}\n.u-padding-bottom-20 {\r\n  padding-bottom: 20rpx !important;\n}\n.u-margin-22, .u-m-22 {\r\n  margin: 22rpx !important;\n}\n.u-padding-22, .u-p-22 {\r\n  padding: 22rpx !important;\n}\n.u-m-l-22 {\r\n  margin-left: 22rpx !important;\n}\n.u-p-l-22 {\r\n  padding-left: 22rpx !important;\n}\n.u-margin-left-22 {\r\n  margin-left: 22rpx !important;\n}\n.u-padding-left-22 {\r\n  padding-left: 22rpx !important;\n}\n.u-m-t-22 {\r\n  margin-top: 22rpx !important;\n}\n.u-p-t-22 {\r\n  padding-top: 22rpx !important;\n}\n.u-margin-top-22 {\r\n  margin-top: 22rpx !important;\n}\n.u-padding-top-22 {\r\n  padding-top: 22rpx !important;\n}\n.u-m-r-22 {\r\n  margin-right: 22rpx !important;\n}\n.u-p-r-22 {\r\n  padding-right: 22rpx !important;\n}\n.u-margin-right-22 {\r\n  margin-right: 22rpx !important;\n}\n.u-padding-right-22 {\r\n  padding-right: 22rpx !important;\n}\n.u-m-b-22 {\r\n  margin-bottom: 22rpx !important;\n}\n.u-p-b-22 {\r\n  padding-bottom: 22rpx !important;\n}\n.u-margin-bottom-22 {\r\n  margin-bottom: 22rpx !important;\n}\n.u-padding-bottom-22 {\r\n  padding-bottom: 22rpx !important;\n}\n.u-margin-24, .u-m-24 {\r\n  margin: 24rpx !important;\n}\n.u-padding-24, .u-p-24 {\r\n  padding: 24rpx !important;\n}\n.u-m-l-24 {\r\n  margin-left: 24rpx !important;\n}\n.u-p-l-24 {\r\n  padding-left: 24rpx !important;\n}\n.u-margin-left-24 {\r\n  margin-left: 24rpx !important;\n}\n.u-padding-left-24 {\r\n  padding-left: 24rpx !important;\n}\n.u-m-t-24 {\r\n  margin-top: 24rpx !important;\n}\n.u-p-t-24 {\r\n  padding-top: 24rpx !important;\n}\n.u-margin-top-24 {\r\n  margin-top: 24rpx !important;\n}\n.u-padding-top-24 {\r\n  padding-top: 24rpx !important;\n}\n.u-m-r-24 {\r\n  margin-right: 24rpx !important;\n}\n.u-p-r-24 {\r\n  padding-right: 24rpx !important;\n}\n.u-margin-right-24 {\r\n  margin-right: 24rpx !important;\n}\n.u-padding-right-24 {\r\n  padding-right: 24rpx !important;\n}\n.u-m-b-24 {\r\n  margin-bottom: 24rpx !important;\n}\n.u-p-b-24 {\r\n  padding-bottom: 24rpx !important;\n}\n.u-margin-bottom-24 {\r\n  margin-bottom: 24rpx !important;\n}\n.u-padding-bottom-24 {\r\n  padding-bottom: 24rpx !important;\n}\n.u-margin-25, .u-m-25 {\r\n  margin: 25rpx !important;\n}\n.u-padding-25, .u-p-25 {\r\n  padding: 25rpx !important;\n}\n.u-m-l-25 {\r\n  margin-left: 25rpx !important;\n}\n.u-p-l-25 {\r\n  padding-left: 25rpx !important;\n}\n.u-margin-left-25 {\r\n  margin-left: 25rpx !important;\n}\n.u-padding-left-25 {\r\n  padding-left: 25rpx !important;\n}\n.u-m-t-25 {\r\n  margin-top: 25rpx !important;\n}\n.u-p-t-25 {\r\n  padding-top: 25rpx !important;\n}\n.u-margin-top-25 {\r\n  margin-top: 25rpx !important;\n}\n.u-padding-top-25 {\r\n  padding-top: 25rpx !important;\n}\n.u-m-r-25 {\r\n  margin-right: 25rpx !important;\n}\n.u-p-r-25 {\r\n  padding-right: 25rpx !important;\n}\n.u-margin-right-25 {\r\n  margin-right: 25rpx !important;\n}\n.u-padding-right-25 {\r\n  padding-right: 25rpx !important;\n}\n.u-m-b-25 {\r\n  margin-bottom: 25rpx !important;\n}\n.u-p-b-25 {\r\n  padding-bottom: 25rpx !important;\n}\n.u-margin-bottom-25 {\r\n  margin-bottom: 25rpx !important;\n}\n.u-padding-bottom-25 {\r\n  padding-bottom: 25rpx !important;\n}\n.u-margin-26, .u-m-26 {\r\n  margin: 26rpx !important;\n}\n.u-padding-26, .u-p-26 {\r\n  padding: 26rpx !important;\n}\n.u-m-l-26 {\r\n  margin-left: 26rpx !important;\n}\n.u-p-l-26 {\r\n  padding-left: 26rpx !important;\n}\n.u-margin-left-26 {\r\n  margin-left: 26rpx !important;\n}\n.u-padding-left-26 {\r\n  padding-left: 26rpx !important;\n}\n.u-m-t-26 {\r\n  margin-top: 26rpx !important;\n}\n.u-p-t-26 {\r\n  padding-top: 26rpx !important;\n}\n.u-margin-top-26 {\r\n  margin-top: 26rpx !important;\n}\n.u-padding-top-26 {\r\n  padding-top: 26rpx !important;\n}\n.u-m-r-26 {\r\n  margin-right: 26rpx !important;\n}\n.u-p-r-26 {\r\n  padding-right: 26rpx !important;\n}\n.u-margin-right-26 {\r\n  margin-right: 26rpx !important;\n}\n.u-padding-right-26 {\r\n  padding-right: 26rpx !important;\n}\n.u-m-b-26 {\r\n  margin-bottom: 26rpx !important;\n}\n.u-p-b-26 {\r\n  padding-bottom: 26rpx !important;\n}\n.u-margin-bottom-26 {\r\n  margin-bottom: 26rpx !important;\n}\n.u-padding-bottom-26 {\r\n  padding-bottom: 26rpx !important;\n}\n.u-margin-28, .u-m-28 {\r\n  margin: 28rpx !important;\n}\n.u-padding-28, .u-p-28 {\r\n  padding: 28rpx !important;\n}\n.u-m-l-28 {\r\n  margin-left: 28rpx !important;\n}\n.u-p-l-28 {\r\n  padding-left: 28rpx !important;\n}\n.u-margin-left-28 {\r\n  margin-left: 28rpx !important;\n}\n.u-padding-left-28 {\r\n  padding-left: 28rpx !important;\n}\n.u-m-t-28 {\r\n  margin-top: 28rpx !important;\n}\n.u-p-t-28 {\r\n  padding-top: 28rpx !important;\n}\n.u-margin-top-28 {\r\n  margin-top: 28rpx !important;\n}\n.u-padding-top-28 {\r\n  padding-top: 28rpx !important;\n}\n.u-m-r-28 {\r\n  margin-right: 28rpx !important;\n}\n.u-p-r-28 {\r\n  padding-right: 28rpx !important;\n}\n.u-margin-right-28 {\r\n  margin-right: 28rpx !important;\n}\n.u-padding-right-28 {\r\n  padding-right: 28rpx !important;\n}\n.u-m-b-28 {\r\n  margin-bottom: 28rpx !important;\n}\n.u-p-b-28 {\r\n  padding-bottom: 28rpx !important;\n}\n.u-margin-bottom-28 {\r\n  margin-bottom: 28rpx !important;\n}\n.u-padding-bottom-28 {\r\n  padding-bottom: 28rpx !important;\n}\n.u-margin-30, .u-m-30 {\r\n  margin: 30rpx !important;\n}\n.u-padding-30, .u-p-30 {\r\n  padding: 30rpx !important;\n}\n.u-m-l-30 {\r\n  margin-left: 30rpx !important;\n}\n.u-p-l-30 {\r\n  padding-left: 30rpx !important;\n}\n.u-margin-left-30 {\r\n  margin-left: 30rpx !important;\n}\n.u-padding-left-30 {\r\n  padding-left: 30rpx !important;\n}\n.u-m-t-30 {\r\n  margin-top: 30rpx !important;\n}\n.u-p-t-30 {\r\n  padding-top: 30rpx !important;\n}\n.u-margin-top-30 {\r\n  margin-top: 30rpx !important;\n}\n.u-padding-top-30 {\r\n  padding-top: 30rpx !important;\n}\n.u-m-r-30 {\r\n  margin-right: 30rpx !important;\n}\n.u-p-r-30 {\r\n  padding-right: 30rpx !important;\n}\n.u-margin-right-30 {\r\n  margin-right: 30rpx !important;\n}\n.u-padding-right-30 {\r\n  padding-right: 30rpx !important;\n}\n.u-m-b-30 {\r\n  margin-bottom: 30rpx !important;\n}\n.u-p-b-30 {\r\n  padding-bottom: 30rpx !important;\n}\n.u-margin-bottom-30 {\r\n  margin-bottom: 30rpx !important;\n}\n.u-padding-bottom-30 {\r\n  padding-bottom: 30rpx !important;\n}\n.u-margin-32, .u-m-32 {\r\n  margin: 32rpx !important;\n}\n.u-padding-32, .u-p-32 {\r\n  padding: 32rpx !important;\n}\n.u-m-l-32 {\r\n  margin-left: 32rpx !important;\n}\n.u-p-l-32 {\r\n  padding-left: 32rpx !important;\n}\n.u-margin-left-32 {\r\n  margin-left: 32rpx !important;\n}\n.u-padding-left-32 {\r\n  padding-left: 32rpx !important;\n}\n.u-m-t-32 {\r\n  margin-top: 32rpx !important;\n}\n.u-p-t-32 {\r\n  padding-top: 32rpx !important;\n}\n.u-margin-top-32 {\r\n  margin-top: 32rpx !important;\n}\n.u-padding-top-32 {\r\n  padding-top: 32rpx !important;\n}\n.u-m-r-32 {\r\n  margin-right: 32rpx !important;\n}\n.u-p-r-32 {\r\n  padding-right: 32rpx !important;\n}\n.u-margin-right-32 {\r\n  margin-right: 32rpx !important;\n}\n.u-padding-right-32 {\r\n  padding-right: 32rpx !important;\n}\n.u-m-b-32 {\r\n  margin-bottom: 32rpx !important;\n}\n.u-p-b-32 {\r\n  padding-bottom: 32rpx !important;\n}\n.u-margin-bottom-32 {\r\n  margin-bottom: 32rpx !important;\n}\n.u-padding-bottom-32 {\r\n  padding-bottom: 32rpx !important;\n}\n.u-margin-34, .u-m-34 {\r\n  margin: 34rpx !important;\n}\n.u-padding-34, .u-p-34 {\r\n  padding: 34rpx !important;\n}\n.u-m-l-34 {\r\n  margin-left: 34rpx !important;\n}\n.u-p-l-34 {\r\n  padding-left: 34rpx !important;\n}\n.u-margin-left-34 {\r\n  margin-left: 34rpx !important;\n}\n.u-padding-left-34 {\r\n  padding-left: 34rpx !important;\n}\n.u-m-t-34 {\r\n  margin-top: 34rpx !important;\n}\n.u-p-t-34 {\r\n  padding-top: 34rpx !important;\n}\n.u-margin-top-34 {\r\n  margin-top: 34rpx !important;\n}\n.u-padding-top-34 {\r\n  padding-top: 34rpx !important;\n}\n.u-m-r-34 {\r\n  margin-right: 34rpx !important;\n}\n.u-p-r-34 {\r\n  padding-right: 34rpx !important;\n}\n.u-margin-right-34 {\r\n  margin-right: 34rpx !important;\n}\n.u-padding-right-34 {\r\n  padding-right: 34rpx !important;\n}\n.u-m-b-34 {\r\n  margin-bottom: 34rpx !important;\n}\n.u-p-b-34 {\r\n  padding-bottom: 34rpx !important;\n}\n.u-margin-bottom-34 {\r\n  margin-bottom: 34rpx !important;\n}\n.u-padding-bottom-34 {\r\n  padding-bottom: 34rpx !important;\n}\n.u-margin-35, .u-m-35 {\r\n  margin: 35rpx !important;\n}\n.u-padding-35, .u-p-35 {\r\n  padding: 35rpx !important;\n}\n.u-m-l-35 {\r\n  margin-left: 35rpx !important;\n}\n.u-p-l-35 {\r\n  padding-left: 35rpx !important;\n}\n.u-margin-left-35 {\r\n  margin-left: 35rpx !important;\n}\n.u-padding-left-35 {\r\n  padding-left: 35rpx !important;\n}\n.u-m-t-35 {\r\n  margin-top: 35rpx !important;\n}\n.u-p-t-35 {\r\n  padding-top: 35rpx !important;\n}\n.u-margin-top-35 {\r\n  margin-top: 35rpx !important;\n}\n.u-padding-top-35 {\r\n  padding-top: 35rpx !important;\n}\n.u-m-r-35 {\r\n  margin-right: 35rpx !important;\n}\n.u-p-r-35 {\r\n  padding-right: 35rpx !important;\n}\n.u-margin-right-35 {\r\n  margin-right: 35rpx !important;\n}\n.u-padding-right-35 {\r\n  padding-right: 35rpx !important;\n}\n.u-m-b-35 {\r\n  margin-bottom: 35rpx !important;\n}\n.u-p-b-35 {\r\n  padding-bottom: 35rpx !important;\n}\n.u-margin-bottom-35 {\r\n  margin-bottom: 35rpx !important;\n}\n.u-padding-bottom-35 {\r\n  padding-bottom: 35rpx !important;\n}\n.u-margin-36, .u-m-36 {\r\n  margin: 36rpx !important;\n}\n.u-padding-36, .u-p-36 {\r\n  padding: 36rpx !important;\n}\n.u-m-l-36 {\r\n  margin-left: 36rpx !important;\n}\n.u-p-l-36 {\r\n  padding-left: 36rpx !important;\n}\n.u-margin-left-36 {\r\n  margin-left: 36rpx !important;\n}\n.u-padding-left-36 {\r\n  padding-left: 36rpx !important;\n}\n.u-m-t-36 {\r\n  margin-top: 36rpx !important;\n}\n.u-p-t-36 {\r\n  padding-top: 36rpx !important;\n}\n.u-margin-top-36 {\r\n  margin-top: 36rpx !important;\n}\n.u-padding-top-36 {\r\n  padding-top: 36rpx !important;\n}\n.u-m-r-36 {\r\n  margin-right: 36rpx !important;\n}\n.u-p-r-36 {\r\n  padding-right: 36rpx !important;\n}\n.u-margin-right-36 {\r\n  margin-right: 36rpx !important;\n}\n.u-padding-right-36 {\r\n  padding-right: 36rpx !important;\n}\n.u-m-b-36 {\r\n  margin-bottom: 36rpx !important;\n}\n.u-p-b-36 {\r\n  padding-bottom: 36rpx !important;\n}\n.u-margin-bottom-36 {\r\n  margin-bottom: 36rpx !important;\n}\n.u-padding-bottom-36 {\r\n  padding-bottom: 36rpx !important;\n}\n.u-margin-38, .u-m-38 {\r\n  margin: 38rpx !important;\n}\n.u-padding-38, .u-p-38 {\r\n  padding: 38rpx !important;\n}\n.u-m-l-38 {\r\n  margin-left: 38rpx !important;\n}\n.u-p-l-38 {\r\n  padding-left: 38rpx !important;\n}\n.u-margin-left-38 {\r\n  margin-left: 38rpx !important;\n}\n.u-padding-left-38 {\r\n  padding-left: 38rpx !important;\n}\n.u-m-t-38 {\r\n  margin-top: 38rpx !important;\n}\n.u-p-t-38 {\r\n  padding-top: 38rpx !important;\n}\n.u-margin-top-38 {\r\n  margin-top: 38rpx !important;\n}\n.u-padding-top-38 {\r\n  padding-top: 38rpx !important;\n}\n.u-m-r-38 {\r\n  margin-right: 38rpx !important;\n}\n.u-p-r-38 {\r\n  padding-right: 38rpx !important;\n}\n.u-margin-right-38 {\r\n  margin-right: 38rpx !important;\n}\n.u-padding-right-38 {\r\n  padding-right: 38rpx !important;\n}\n.u-m-b-38 {\r\n  margin-bottom: 38rpx !important;\n}\n.u-p-b-38 {\r\n  padding-bottom: 38rpx !important;\n}\n.u-margin-bottom-38 {\r\n  margin-bottom: 38rpx !important;\n}\n.u-padding-bottom-38 {\r\n  padding-bottom: 38rpx !important;\n}\n.u-margin-40, .u-m-40 {\r\n  margin: 40rpx !important;\n}\n.u-padding-40, .u-p-40 {\r\n  padding: 40rpx !important;\n}\n.u-m-l-40 {\r\n  margin-left: 40rpx !important;\n}\n.u-p-l-40 {\r\n  padding-left: 40rpx !important;\n}\n.u-margin-left-40 {\r\n  margin-left: 40rpx !important;\n}\n.u-padding-left-40 {\r\n  padding-left: 40rpx !important;\n}\n.u-m-t-40 {\r\n  margin-top: 40rpx !important;\n}\n.u-p-t-40 {\r\n  padding-top: 40rpx !important;\n}\n.u-margin-top-40 {\r\n  margin-top: 40rpx !important;\n}\n.u-padding-top-40 {\r\n  padding-top: 40rpx !important;\n}\n.u-m-r-40 {\r\n  margin-right: 40rpx !important;\n}\n.u-p-r-40 {\r\n  padding-right: 40rpx !important;\n}\n.u-margin-right-40 {\r\n  margin-right: 40rpx !important;\n}\n.u-padding-right-40 {\r\n  padding-right: 40rpx !important;\n}\n.u-m-b-40 {\r\n  margin-bottom: 40rpx !important;\n}\n.u-p-b-40 {\r\n  padding-bottom: 40rpx !important;\n}\n.u-margin-bottom-40 {\r\n  margin-bottom: 40rpx !important;\n}\n.u-padding-bottom-40 {\r\n  padding-bottom: 40rpx !important;\n}\n.u-margin-42, .u-m-42 {\r\n  margin: 42rpx !important;\n}\n.u-padding-42, .u-p-42 {\r\n  padding: 42rpx !important;\n}\n.u-m-l-42 {\r\n  margin-left: 42rpx !important;\n}\n.u-p-l-42 {\r\n  padding-left: 42rpx !important;\n}\n.u-margin-left-42 {\r\n  margin-left: 42rpx !important;\n}\n.u-padding-left-42 {\r\n  padding-left: 42rpx !important;\n}\n.u-m-t-42 {\r\n  margin-top: 42rpx !important;\n}\n.u-p-t-42 {\r\n  padding-top: 42rpx !important;\n}\n.u-margin-top-42 {\r\n  margin-top: 42rpx !important;\n}\n.u-padding-top-42 {\r\n  padding-top: 42rpx !important;\n}\n.u-m-r-42 {\r\n  margin-right: 42rpx !important;\n}\n.u-p-r-42 {\r\n  padding-right: 42rpx !important;\n}\n.u-margin-right-42 {\r\n  margin-right: 42rpx !important;\n}\n.u-padding-right-42 {\r\n  padding-right: 42rpx !important;\n}\n.u-m-b-42 {\r\n  margin-bottom: 42rpx !important;\n}\n.u-p-b-42 {\r\n  padding-bottom: 42rpx !important;\n}\n.u-margin-bottom-42 {\r\n  margin-bottom: 42rpx !important;\n}\n.u-padding-bottom-42 {\r\n  padding-bottom: 42rpx !important;\n}\n.u-margin-44, .u-m-44 {\r\n  margin: 44rpx !important;\n}\n.u-padding-44, .u-p-44 {\r\n  padding: 44rpx !important;\n}\n.u-m-l-44 {\r\n  margin-left: 44rpx !important;\n}\n.u-p-l-44 {\r\n  padding-left: 44rpx !important;\n}\n.u-margin-left-44 {\r\n  margin-left: 44rpx !important;\n}\n.u-padding-left-44 {\r\n  padding-left: 44rpx !important;\n}\n.u-m-t-44 {\r\n  margin-top: 44rpx !important;\n}\n.u-p-t-44 {\r\n  padding-top: 44rpx !important;\n}\n.u-margin-top-44 {\r\n  margin-top: 44rpx !important;\n}\n.u-padding-top-44 {\r\n  padding-top: 44rpx !important;\n}\n.u-m-r-44 {\r\n  margin-right: 44rpx !important;\n}\n.u-p-r-44 {\r\n  padding-right: 44rpx !important;\n}\n.u-margin-right-44 {\r\n  margin-right: 44rpx !important;\n}\n.u-padding-right-44 {\r\n  padding-right: 44rpx !important;\n}\n.u-m-b-44 {\r\n  margin-bottom: 44rpx !important;\n}\n.u-p-b-44 {\r\n  padding-bottom: 44rpx !important;\n}\n.u-margin-bottom-44 {\r\n  margin-bottom: 44rpx !important;\n}\n.u-padding-bottom-44 {\r\n  padding-bottom: 44rpx !important;\n}\n.u-margin-45, .u-m-45 {\r\n  margin: 45rpx !important;\n}\n.u-padding-45, .u-p-45 {\r\n  padding: 45rpx !important;\n}\n.u-m-l-45 {\r\n  margin-left: 45rpx !important;\n}\n.u-p-l-45 {\r\n  padding-left: 45rpx !important;\n}\n.u-margin-left-45 {\r\n  margin-left: 45rpx !important;\n}\n.u-padding-left-45 {\r\n  padding-left: 45rpx !important;\n}\n.u-m-t-45 {\r\n  margin-top: 45rpx !important;\n}\n.u-p-t-45 {\r\n  padding-top: 45rpx !important;\n}\n.u-margin-top-45 {\r\n  margin-top: 45rpx !important;\n}\n.u-padding-top-45 {\r\n  padding-top: 45rpx !important;\n}\n.u-m-r-45 {\r\n  margin-right: 45rpx !important;\n}\n.u-p-r-45 {\r\n  padding-right: 45rpx !important;\n}\n.u-margin-right-45 {\r\n  margin-right: 45rpx !important;\n}\n.u-padding-right-45 {\r\n  padding-right: 45rpx !important;\n}\n.u-m-b-45 {\r\n  margin-bottom: 45rpx !important;\n}\n.u-p-b-45 {\r\n  padding-bottom: 45rpx !important;\n}\n.u-margin-bottom-45 {\r\n  margin-bottom: 45rpx !important;\n}\n.u-padding-bottom-45 {\r\n  padding-bottom: 45rpx !important;\n}\n.u-margin-46, .u-m-46 {\r\n  margin: 46rpx !important;\n}\n.u-padding-46, .u-p-46 {\r\n  padding: 46rpx !important;\n}\n.u-m-l-46 {\r\n  margin-left: 46rpx !important;\n}\n.u-p-l-46 {\r\n  padding-left: 46rpx !important;\n}\n.u-margin-left-46 {\r\n  margin-left: 46rpx !important;\n}\n.u-padding-left-46 {\r\n  padding-left: 46rpx !important;\n}\n.u-m-t-46 {\r\n  margin-top: 46rpx !important;\n}\n.u-p-t-46 {\r\n  padding-top: 46rpx !important;\n}\n.u-margin-top-46 {\r\n  margin-top: 46rpx !important;\n}\n.u-padding-top-46 {\r\n  padding-top: 46rpx !important;\n}\n.u-m-r-46 {\r\n  margin-right: 46rpx !important;\n}\n.u-p-r-46 {\r\n  padding-right: 46rpx !important;\n}\n.u-margin-right-46 {\r\n  margin-right: 46rpx !important;\n}\n.u-padding-right-46 {\r\n  padding-right: 46rpx !important;\n}\n.u-m-b-46 {\r\n  margin-bottom: 46rpx !important;\n}\n.u-p-b-46 {\r\n  padding-bottom: 46rpx !important;\n}\n.u-margin-bottom-46 {\r\n  margin-bottom: 46rpx !important;\n}\n.u-padding-bottom-46 {\r\n  padding-bottom: 46rpx !important;\n}\n.u-margin-48, .u-m-48 {\r\n  margin: 48rpx !important;\n}\n.u-padding-48, .u-p-48 {\r\n  padding: 48rpx !important;\n}\n.u-m-l-48 {\r\n  margin-left: 48rpx !important;\n}\n.u-p-l-48 {\r\n  padding-left: 48rpx !important;\n}\n.u-margin-left-48 {\r\n  margin-left: 48rpx !important;\n}\n.u-padding-left-48 {\r\n  padding-left: 48rpx !important;\n}\n.u-m-t-48 {\r\n  margin-top: 48rpx !important;\n}\n.u-p-t-48 {\r\n  padding-top: 48rpx !important;\n}\n.u-margin-top-48 {\r\n  margin-top: 48rpx !important;\n}\n.u-padding-top-48 {\r\n  padding-top: 48rpx !important;\n}\n.u-m-r-48 {\r\n  margin-right: 48rpx !important;\n}\n.u-p-r-48 {\r\n  padding-right: 48rpx !important;\n}\n.u-margin-right-48 {\r\n  margin-right: 48rpx !important;\n}\n.u-padding-right-48 {\r\n  padding-right: 48rpx !important;\n}\n.u-m-b-48 {\r\n  margin-bottom: 48rpx !important;\n}\n.u-p-b-48 {\r\n  padding-bottom: 48rpx !important;\n}\n.u-margin-bottom-48 {\r\n  margin-bottom: 48rpx !important;\n}\n.u-padding-bottom-48 {\r\n  padding-bottom: 48rpx !important;\n}\n.u-margin-50, .u-m-50 {\r\n  margin: 50rpx !important;\n}\n.u-padding-50, .u-p-50 {\r\n  padding: 50rpx !important;\n}\n.u-m-l-50 {\r\n  margin-left: 50rpx !important;\n}\n.u-p-l-50 {\r\n  padding-left: 50rpx !important;\n}\n.u-margin-left-50 {\r\n  margin-left: 50rpx !important;\n}\n.u-padding-left-50 {\r\n  padding-left: 50rpx !important;\n}\n.u-m-t-50 {\r\n  margin-top: 50rpx !important;\n}\n.u-p-t-50 {\r\n  padding-top: 50rpx !important;\n}\n.u-margin-top-50 {\r\n  margin-top: 50rpx !important;\n}\n.u-padding-top-50 {\r\n  padding-top: 50rpx !important;\n}\n.u-m-r-50 {\r\n  margin-right: 50rpx !important;\n}\n.u-p-r-50 {\r\n  padding-right: 50rpx !important;\n}\n.u-margin-right-50 {\r\n  margin-right: 50rpx !important;\n}\n.u-padding-right-50 {\r\n  padding-right: 50rpx !important;\n}\n.u-m-b-50 {\r\n  margin-bottom: 50rpx !important;\n}\n.u-p-b-50 {\r\n  padding-bottom: 50rpx !important;\n}\n.u-margin-bottom-50 {\r\n  margin-bottom: 50rpx !important;\n}\n.u-padding-bottom-50 {\r\n  padding-bottom: 50rpx !important;\n}\n.u-margin-52, .u-m-52 {\r\n  margin: 52rpx !important;\n}\n.u-padding-52, .u-p-52 {\r\n  padding: 52rpx !important;\n}\n.u-m-l-52 {\r\n  margin-left: 52rpx !important;\n}\n.u-p-l-52 {\r\n  padding-left: 52rpx !important;\n}\n.u-margin-left-52 {\r\n  margin-left: 52rpx !important;\n}\n.u-padding-left-52 {\r\n  padding-left: 52rpx !important;\n}\n.u-m-t-52 {\r\n  margin-top: 52rpx !important;\n}\n.u-p-t-52 {\r\n  padding-top: 52rpx !important;\n}\n.u-margin-top-52 {\r\n  margin-top: 52rpx !important;\n}\n.u-padding-top-52 {\r\n  padding-top: 52rpx !important;\n}\n.u-m-r-52 {\r\n  margin-right: 52rpx !important;\n}\n.u-p-r-52 {\r\n  padding-right: 52rpx !important;\n}\n.u-margin-right-52 {\r\n  margin-right: 52rpx !important;\n}\n.u-padding-right-52 {\r\n  padding-right: 52rpx !important;\n}\n.u-m-b-52 {\r\n  margin-bottom: 52rpx !important;\n}\n.u-p-b-52 {\r\n  padding-bottom: 52rpx !important;\n}\n.u-margin-bottom-52 {\r\n  margin-bottom: 52rpx !important;\n}\n.u-padding-bottom-52 {\r\n  padding-bottom: 52rpx !important;\n}\n.u-margin-54, .u-m-54 {\r\n  margin: 54rpx !important;\n}\n.u-padding-54, .u-p-54 {\r\n  padding: 54rpx !important;\n}\n.u-m-l-54 {\r\n  margin-left: 54rpx !important;\n}\n.u-p-l-54 {\r\n  padding-left: 54rpx !important;\n}\n.u-margin-left-54 {\r\n  margin-left: 54rpx !important;\n}\n.u-padding-left-54 {\r\n  padding-left: 54rpx !important;\n}\n.u-m-t-54 {\r\n  margin-top: 54rpx !important;\n}\n.u-p-t-54 {\r\n  padding-top: 54rpx !important;\n}\n.u-margin-top-54 {\r\n  margin-top: 54rpx !important;\n}\n.u-padding-top-54 {\r\n  padding-top: 54rpx !important;\n}\n.u-m-r-54 {\r\n  margin-right: 54rpx !important;\n}\n.u-p-r-54 {\r\n  padding-right: 54rpx !important;\n}\n.u-margin-right-54 {\r\n  margin-right: 54rpx !important;\n}\n.u-padding-right-54 {\r\n  padding-right: 54rpx !important;\n}\n.u-m-b-54 {\r\n  margin-bottom: 54rpx !important;\n}\n.u-p-b-54 {\r\n  padding-bottom: 54rpx !important;\n}\n.u-margin-bottom-54 {\r\n  margin-bottom: 54rpx !important;\n}\n.u-padding-bottom-54 {\r\n  padding-bottom: 54rpx !important;\n}\n.u-margin-55, .u-m-55 {\r\n  margin: 55rpx !important;\n}\n.u-padding-55, .u-p-55 {\r\n  padding: 55rpx !important;\n}\n.u-m-l-55 {\r\n  margin-left: 55rpx !important;\n}\n.u-p-l-55 {\r\n  padding-left: 55rpx !important;\n}\n.u-margin-left-55 {\r\n  margin-left: 55rpx !important;\n}\n.u-padding-left-55 {\r\n  padding-left: 55rpx !important;\n}\n.u-m-t-55 {\r\n  margin-top: 55rpx !important;\n}\n.u-p-t-55 {\r\n  padding-top: 55rpx !important;\n}\n.u-margin-top-55 {\r\n  margin-top: 55rpx !important;\n}\n.u-padding-top-55 {\r\n  padding-top: 55rpx !important;\n}\n.u-m-r-55 {\r\n  margin-right: 55rpx !important;\n}\n.u-p-r-55 {\r\n  padding-right: 55rpx !important;\n}\n.u-margin-right-55 {\r\n  margin-right: 55rpx !important;\n}\n.u-padding-right-55 {\r\n  padding-right: 55rpx !important;\n}\n.u-m-b-55 {\r\n  margin-bottom: 55rpx !important;\n}\n.u-p-b-55 {\r\n  padding-bottom: 55rpx !important;\n}\n.u-margin-bottom-55 {\r\n  margin-bottom: 55rpx !important;\n}\n.u-padding-bottom-55 {\r\n  padding-bottom: 55rpx !important;\n}\n.u-margin-56, .u-m-56 {\r\n  margin: 56rpx !important;\n}\n.u-padding-56, .u-p-56 {\r\n  padding: 56rpx !important;\n}\n.u-m-l-56 {\r\n  margin-left: 56rpx !important;\n}\n.u-p-l-56 {\r\n  padding-left: 56rpx !important;\n}\n.u-margin-left-56 {\r\n  margin-left: 56rpx !important;\n}\n.u-padding-left-56 {\r\n  padding-left: 56rpx !important;\n}\n.u-m-t-56 {\r\n  margin-top: 56rpx !important;\n}\n.u-p-t-56 {\r\n  padding-top: 56rpx !important;\n}\n.u-margin-top-56 {\r\n  margin-top: 56rpx !important;\n}\n.u-padding-top-56 {\r\n  padding-top: 56rpx !important;\n}\n.u-m-r-56 {\r\n  margin-right: 56rpx !important;\n}\n.u-p-r-56 {\r\n  padding-right: 56rpx !important;\n}\n.u-margin-right-56 {\r\n  margin-right: 56rpx !important;\n}\n.u-padding-right-56 {\r\n  padding-right: 56rpx !important;\n}\n.u-m-b-56 {\r\n  margin-bottom: 56rpx !important;\n}\n.u-p-b-56 {\r\n  padding-bottom: 56rpx !important;\n}\n.u-margin-bottom-56 {\r\n  margin-bottom: 56rpx !important;\n}\n.u-padding-bottom-56 {\r\n  padding-bottom: 56rpx !important;\n}\n.u-margin-58, .u-m-58 {\r\n  margin: 58rpx !important;\n}\n.u-padding-58, .u-p-58 {\r\n  padding: 58rpx !important;\n}\n.u-m-l-58 {\r\n  margin-left: 58rpx !important;\n}\n.u-p-l-58 {\r\n  padding-left: 58rpx !important;\n}\n.u-margin-left-58 {\r\n  margin-left: 58rpx !important;\n}\n.u-padding-left-58 {\r\n  padding-left: 58rpx !important;\n}\n.u-m-t-58 {\r\n  margin-top: 58rpx !important;\n}\n.u-p-t-58 {\r\n  padding-top: 58rpx !important;\n}\n.u-margin-top-58 {\r\n  margin-top: 58rpx !important;\n}\n.u-padding-top-58 {\r\n  padding-top: 58rpx !important;\n}\n.u-m-r-58 {\r\n  margin-right: 58rpx !important;\n}\n.u-p-r-58 {\r\n  padding-right: 58rpx !important;\n}\n.u-margin-right-58 {\r\n  margin-right: 58rpx !important;\n}\n.u-padding-right-58 {\r\n  padding-right: 58rpx !important;\n}\n.u-m-b-58 {\r\n  margin-bottom: 58rpx !important;\n}\n.u-p-b-58 {\r\n  padding-bottom: 58rpx !important;\n}\n.u-margin-bottom-58 {\r\n  margin-bottom: 58rpx !important;\n}\n.u-padding-bottom-58 {\r\n  padding-bottom: 58rpx !important;\n}\n.u-margin-60, .u-m-60 {\r\n  margin: 60rpx !important;\n}\n.u-padding-60, .u-p-60 {\r\n  padding: 60rpx !important;\n}\n.u-m-l-60 {\r\n  margin-left: 60rpx !important;\n}\n.u-p-l-60 {\r\n  padding-left: 60rpx !important;\n}\n.u-margin-left-60 {\r\n  margin-left: 60rpx !important;\n}\n.u-padding-left-60 {\r\n  padding-left: 60rpx !important;\n}\n.u-m-t-60 {\r\n  margin-top: 60rpx !important;\n}\n.u-p-t-60 {\r\n  padding-top: 60rpx !important;\n}\n.u-margin-top-60 {\r\n  margin-top: 60rpx !important;\n}\n.u-padding-top-60 {\r\n  padding-top: 60rpx !important;\n}\n.u-m-r-60 {\r\n  margin-right: 60rpx !important;\n}\n.u-p-r-60 {\r\n  padding-right: 60rpx !important;\n}\n.u-margin-right-60 {\r\n  margin-right: 60rpx !important;\n}\n.u-padding-right-60 {\r\n  padding-right: 60rpx !important;\n}\n.u-m-b-60 {\r\n  margin-bottom: 60rpx !important;\n}\n.u-p-b-60 {\r\n  padding-bottom: 60rpx !important;\n}\n.u-margin-bottom-60 {\r\n  margin-bottom: 60rpx !important;\n}\n.u-padding-bottom-60 {\r\n  padding-bottom: 60rpx !important;\n}\n.u-margin-62, .u-m-62 {\r\n  margin: 62rpx !important;\n}\n.u-padding-62, .u-p-62 {\r\n  padding: 62rpx !important;\n}\n.u-m-l-62 {\r\n  margin-left: 62rpx !important;\n}\n.u-p-l-62 {\r\n  padding-left: 62rpx !important;\n}\n.u-margin-left-62 {\r\n  margin-left: 62rpx !important;\n}\n.u-padding-left-62 {\r\n  padding-left: 62rpx !important;\n}\n.u-m-t-62 {\r\n  margin-top: 62rpx !important;\n}\n.u-p-t-62 {\r\n  padding-top: 62rpx !important;\n}\n.u-margin-top-62 {\r\n  margin-top: 62rpx !important;\n}\n.u-padding-top-62 {\r\n  padding-top: 62rpx !important;\n}\n.u-m-r-62 {\r\n  margin-right: 62rpx !important;\n}\n.u-p-r-62 {\r\n  padding-right: 62rpx !important;\n}\n.u-margin-right-62 {\r\n  margin-right: 62rpx !important;\n}\n.u-padding-right-62 {\r\n  padding-right: 62rpx !important;\n}\n.u-m-b-62 {\r\n  margin-bottom: 62rpx !important;\n}\n.u-p-b-62 {\r\n  padding-bottom: 62rpx !important;\n}\n.u-margin-bottom-62 {\r\n  margin-bottom: 62rpx !important;\n}\n.u-padding-bottom-62 {\r\n  padding-bottom: 62rpx !important;\n}\n.u-margin-64, .u-m-64 {\r\n  margin: 64rpx !important;\n}\n.u-padding-64, .u-p-64 {\r\n  padding: 64rpx !important;\n}\n.u-m-l-64 {\r\n  margin-left: 64rpx !important;\n}\n.u-p-l-64 {\r\n  padding-left: 64rpx !important;\n}\n.u-margin-left-64 {\r\n  margin-left: 64rpx !important;\n}\n.u-padding-left-64 {\r\n  padding-left: 64rpx !important;\n}\n.u-m-t-64 {\r\n  margin-top: 64rpx !important;\n}\n.u-p-t-64 {\r\n  padding-top: 64rpx !important;\n}\n.u-margin-top-64 {\r\n  margin-top: 64rpx !important;\n}\n.u-padding-top-64 {\r\n  padding-top: 64rpx !important;\n}\n.u-m-r-64 {\r\n  margin-right: 64rpx !important;\n}\n.u-p-r-64 {\r\n  padding-right: 64rpx !important;\n}\n.u-margin-right-64 {\r\n  margin-right: 64rpx !important;\n}\n.u-padding-right-64 {\r\n  padding-right: 64rpx !important;\n}\n.u-m-b-64 {\r\n  margin-bottom: 64rpx !important;\n}\n.u-p-b-64 {\r\n  padding-bottom: 64rpx !important;\n}\n.u-margin-bottom-64 {\r\n  margin-bottom: 64rpx !important;\n}\n.u-padding-bottom-64 {\r\n  padding-bottom: 64rpx !important;\n}\n.u-margin-65, .u-m-65 {\r\n  margin: 65rpx !important;\n}\n.u-padding-65, .u-p-65 {\r\n  padding: 65rpx !important;\n}\n.u-m-l-65 {\r\n  margin-left: 65rpx !important;\n}\n.u-p-l-65 {\r\n  padding-left: 65rpx !important;\n}\n.u-margin-left-65 {\r\n  margin-left: 65rpx !important;\n}\n.u-padding-left-65 {\r\n  padding-left: 65rpx !important;\n}\n.u-m-t-65 {\r\n  margin-top: 65rpx !important;\n}\n.u-p-t-65 {\r\n  padding-top: 65rpx !important;\n}\n.u-margin-top-65 {\r\n  margin-top: 65rpx !important;\n}\n.u-padding-top-65 {\r\n  padding-top: 65rpx !important;\n}\n.u-m-r-65 {\r\n  margin-right: 65rpx !important;\n}\n.u-p-r-65 {\r\n  padding-right: 65rpx !important;\n}\n.u-margin-right-65 {\r\n  margin-right: 65rpx !important;\n}\n.u-padding-right-65 {\r\n  padding-right: 65rpx !important;\n}\n.u-m-b-65 {\r\n  margin-bottom: 65rpx !important;\n}\n.u-p-b-65 {\r\n  padding-bottom: 65rpx !important;\n}\n.u-margin-bottom-65 {\r\n  margin-bottom: 65rpx !important;\n}\n.u-padding-bottom-65 {\r\n  padding-bottom: 65rpx !important;\n}\n.u-margin-66, .u-m-66 {\r\n  margin: 66rpx !important;\n}\n.u-padding-66, .u-p-66 {\r\n  padding: 66rpx !important;\n}\n.u-m-l-66 {\r\n  margin-left: 66rpx !important;\n}\n.u-p-l-66 {\r\n  padding-left: 66rpx !important;\n}\n.u-margin-left-66 {\r\n  margin-left: 66rpx !important;\n}\n.u-padding-left-66 {\r\n  padding-left: 66rpx !important;\n}\n.u-m-t-66 {\r\n  margin-top: 66rpx !important;\n}\n.u-p-t-66 {\r\n  padding-top: 66rpx !important;\n}\n.u-margin-top-66 {\r\n  margin-top: 66rpx !important;\n}\n.u-padding-top-66 {\r\n  padding-top: 66rpx !important;\n}\n.u-m-r-66 {\r\n  margin-right: 66rpx !important;\n}\n.u-p-r-66 {\r\n  padding-right: 66rpx !important;\n}\n.u-margin-right-66 {\r\n  margin-right: 66rpx !important;\n}\n.u-padding-right-66 {\r\n  padding-right: 66rpx !important;\n}\n.u-m-b-66 {\r\n  margin-bottom: 66rpx !important;\n}\n.u-p-b-66 {\r\n  padding-bottom: 66rpx !important;\n}\n.u-margin-bottom-66 {\r\n  margin-bottom: 66rpx !important;\n}\n.u-padding-bottom-66 {\r\n  padding-bottom: 66rpx !important;\n}\n.u-margin-68, .u-m-68 {\r\n  margin: 68rpx !important;\n}\n.u-padding-68, .u-p-68 {\r\n  padding: 68rpx !important;\n}\n.u-m-l-68 {\r\n  margin-left: 68rpx !important;\n}\n.u-p-l-68 {\r\n  padding-left: 68rpx !important;\n}\n.u-margin-left-68 {\r\n  margin-left: 68rpx !important;\n}\n.u-padding-left-68 {\r\n  padding-left: 68rpx !important;\n}\n.u-m-t-68 {\r\n  margin-top: 68rpx !important;\n}\n.u-p-t-68 {\r\n  padding-top: 68rpx !important;\n}\n.u-margin-top-68 {\r\n  margin-top: 68rpx !important;\n}\n.u-padding-top-68 {\r\n  padding-top: 68rpx !important;\n}\n.u-m-r-68 {\r\n  margin-right: 68rpx !important;\n}\n.u-p-r-68 {\r\n  padding-right: 68rpx !important;\n}\n.u-margin-right-68 {\r\n  margin-right: 68rpx !important;\n}\n.u-padding-right-68 {\r\n  padding-right: 68rpx !important;\n}\n.u-m-b-68 {\r\n  margin-bottom: 68rpx !important;\n}\n.u-p-b-68 {\r\n  padding-bottom: 68rpx !important;\n}\n.u-margin-bottom-68 {\r\n  margin-bottom: 68rpx !important;\n}\n.u-padding-bottom-68 {\r\n  padding-bottom: 68rpx !important;\n}\n.u-margin-70, .u-m-70 {\r\n  margin: 70rpx !important;\n}\n.u-padding-70, .u-p-70 {\r\n  padding: 70rpx !important;\n}\n.u-m-l-70 {\r\n  margin-left: 70rpx !important;\n}\n.u-p-l-70 {\r\n  padding-left: 70rpx !important;\n}\n.u-margin-left-70 {\r\n  margin-left: 70rpx !important;\n}\n.u-padding-left-70 {\r\n  padding-left: 70rpx !important;\n}\n.u-m-t-70 {\r\n  margin-top: 70rpx !important;\n}\n.u-p-t-70 {\r\n  padding-top: 70rpx !important;\n}\n.u-margin-top-70 {\r\n  margin-top: 70rpx !important;\n}\n.u-padding-top-70 {\r\n  padding-top: 70rpx !important;\n}\n.u-m-r-70 {\r\n  margin-right: 70rpx !important;\n}\n.u-p-r-70 {\r\n  padding-right: 70rpx !important;\n}\n.u-margin-right-70 {\r\n  margin-right: 70rpx !important;\n}\n.u-padding-right-70 {\r\n  padding-right: 70rpx !important;\n}\n.u-m-b-70 {\r\n  margin-bottom: 70rpx !important;\n}\n.u-p-b-70 {\r\n  padding-bottom: 70rpx !important;\n}\n.u-margin-bottom-70 {\r\n  margin-bottom: 70rpx !important;\n}\n.u-padding-bottom-70 {\r\n  padding-bottom: 70rpx !important;\n}\n.u-margin-72, .u-m-72 {\r\n  margin: 72rpx !important;\n}\n.u-padding-72, .u-p-72 {\r\n  padding: 72rpx !important;\n}\n.u-m-l-72 {\r\n  margin-left: 72rpx !important;\n}\n.u-p-l-72 {\r\n  padding-left: 72rpx !important;\n}\n.u-margin-left-72 {\r\n  margin-left: 72rpx !important;\n}\n.u-padding-left-72 {\r\n  padding-left: 72rpx !important;\n}\n.u-m-t-72 {\r\n  margin-top: 72rpx !important;\n}\n.u-p-t-72 {\r\n  padding-top: 72rpx !important;\n}\n.u-margin-top-72 {\r\n  margin-top: 72rpx !important;\n}\n.u-padding-top-72 {\r\n  padding-top: 72rpx !important;\n}\n.u-m-r-72 {\r\n  margin-right: 72rpx !important;\n}\n.u-p-r-72 {\r\n  padding-right: 72rpx !important;\n}\n.u-margin-right-72 {\r\n  margin-right: 72rpx !important;\n}\n.u-padding-right-72 {\r\n  padding-right: 72rpx !important;\n}\n.u-m-b-72 {\r\n  margin-bottom: 72rpx !important;\n}\n.u-p-b-72 {\r\n  padding-bottom: 72rpx !important;\n}\n.u-margin-bottom-72 {\r\n  margin-bottom: 72rpx !important;\n}\n.u-padding-bottom-72 {\r\n  padding-bottom: 72rpx !important;\n}\n.u-margin-74, .u-m-74 {\r\n  margin: 74rpx !important;\n}\n.u-padding-74, .u-p-74 {\r\n  padding: 74rpx !important;\n}\n.u-m-l-74 {\r\n  margin-left: 74rpx !important;\n}\n.u-p-l-74 {\r\n  padding-left: 74rpx !important;\n}\n.u-margin-left-74 {\r\n  margin-left: 74rpx !important;\n}\n.u-padding-left-74 {\r\n  padding-left: 74rpx !important;\n}\n.u-m-t-74 {\r\n  margin-top: 74rpx !important;\n}\n.u-p-t-74 {\r\n  padding-top: 74rpx !important;\n}\n.u-margin-top-74 {\r\n  margin-top: 74rpx !important;\n}\n.u-padding-top-74 {\r\n  padding-top: 74rpx !important;\n}\n.u-m-r-74 {\r\n  margin-right: 74rpx !important;\n}\n.u-p-r-74 {\r\n  padding-right: 74rpx !important;\n}\n.u-margin-right-74 {\r\n  margin-right: 74rpx !important;\n}\n.u-padding-right-74 {\r\n  padding-right: 74rpx !important;\n}\n.u-m-b-74 {\r\n  margin-bottom: 74rpx !important;\n}\n.u-p-b-74 {\r\n  padding-bottom: 74rpx !important;\n}\n.u-margin-bottom-74 {\r\n  margin-bottom: 74rpx !important;\n}\n.u-padding-bottom-74 {\r\n  padding-bottom: 74rpx !important;\n}\n.u-margin-75, .u-m-75 {\r\n  margin: 75rpx !important;\n}\n.u-padding-75, .u-p-75 {\r\n  padding: 75rpx !important;\n}\n.u-m-l-75 {\r\n  margin-left: 75rpx !important;\n}\n.u-p-l-75 {\r\n  padding-left: 75rpx !important;\n}\n.u-margin-left-75 {\r\n  margin-left: 75rpx !important;\n}\n.u-padding-left-75 {\r\n  padding-left: 75rpx !important;\n}\n.u-m-t-75 {\r\n  margin-top: 75rpx !important;\n}\n.u-p-t-75 {\r\n  padding-top: 75rpx !important;\n}\n.u-margin-top-75 {\r\n  margin-top: 75rpx !important;\n}\n.u-padding-top-75 {\r\n  padding-top: 75rpx !important;\n}\n.u-m-r-75 {\r\n  margin-right: 75rpx !important;\n}\n.u-p-r-75 {\r\n  padding-right: 75rpx !important;\n}\n.u-margin-right-75 {\r\n  margin-right: 75rpx !important;\n}\n.u-padding-right-75 {\r\n  padding-right: 75rpx !important;\n}\n.u-m-b-75 {\r\n  margin-bottom: 75rpx !important;\n}\n.u-p-b-75 {\r\n  padding-bottom: 75rpx !important;\n}\n.u-margin-bottom-75 {\r\n  margin-bottom: 75rpx !important;\n}\n.u-padding-bottom-75 {\r\n  padding-bottom: 75rpx !important;\n}\n.u-margin-76, .u-m-76 {\r\n  margin: 76rpx !important;\n}\n.u-padding-76, .u-p-76 {\r\n  padding: 76rpx !important;\n}\n.u-m-l-76 {\r\n  margin-left: 76rpx !important;\n}\n.u-p-l-76 {\r\n  padding-left: 76rpx !important;\n}\n.u-margin-left-76 {\r\n  margin-left: 76rpx !important;\n}\n.u-padding-left-76 {\r\n  padding-left: 76rpx !important;\n}\n.u-m-t-76 {\r\n  margin-top: 76rpx !important;\n}\n.u-p-t-76 {\r\n  padding-top: 76rpx !important;\n}\n.u-margin-top-76 {\r\n  margin-top: 76rpx !important;\n}\n.u-padding-top-76 {\r\n  padding-top: 76rpx !important;\n}\n.u-m-r-76 {\r\n  margin-right: 76rpx !important;\n}\n.u-p-r-76 {\r\n  padding-right: 76rpx !important;\n}\n.u-margin-right-76 {\r\n  margin-right: 76rpx !important;\n}\n.u-padding-right-76 {\r\n  padding-right: 76rpx !important;\n}\n.u-m-b-76 {\r\n  margin-bottom: 76rpx !important;\n}\n.u-p-b-76 {\r\n  padding-bottom: 76rpx !important;\n}\n.u-margin-bottom-76 {\r\n  margin-bottom: 76rpx !important;\n}\n.u-padding-bottom-76 {\r\n  padding-bottom: 76rpx !important;\n}\n.u-margin-78, .u-m-78 {\r\n  margin: 78rpx !important;\n}\n.u-padding-78, .u-p-78 {\r\n  padding: 78rpx !important;\n}\n.u-m-l-78 {\r\n  margin-left: 78rpx !important;\n}\n.u-p-l-78 {\r\n  padding-left: 78rpx !important;\n}\n.u-margin-left-78 {\r\n  margin-left: 78rpx !important;\n}\n.u-padding-left-78 {\r\n  padding-left: 78rpx !important;\n}\n.u-m-t-78 {\r\n  margin-top: 78rpx !important;\n}\n.u-p-t-78 {\r\n  padding-top: 78rpx !important;\n}\n.u-margin-top-78 {\r\n  margin-top: 78rpx !important;\n}\n.u-padding-top-78 {\r\n  padding-top: 78rpx !important;\n}\n.u-m-r-78 {\r\n  margin-right: 78rpx !important;\n}\n.u-p-r-78 {\r\n  padding-right: 78rpx !important;\n}\n.u-margin-right-78 {\r\n  margin-right: 78rpx !important;\n}\n.u-padding-right-78 {\r\n  padding-right: 78rpx !important;\n}\n.u-m-b-78 {\r\n  margin-bottom: 78rpx !important;\n}\n.u-p-b-78 {\r\n  padding-bottom: 78rpx !important;\n}\n.u-margin-bottom-78 {\r\n  margin-bottom: 78rpx !important;\n}\n.u-padding-bottom-78 {\r\n  padding-bottom: 78rpx !important;\n}\n.u-margin-80, .u-m-80 {\r\n  margin: 80rpx !important;\n}\n.u-padding-80, .u-p-80 {\r\n  padding: 80rpx !important;\n}\n.u-m-l-80 {\r\n  margin-left: 80rpx !important;\n}\n.u-p-l-80 {\r\n  padding-left: 80rpx !important;\n}\n.u-margin-left-80 {\r\n  margin-left: 80rpx !important;\n}\n.u-padding-left-80 {\r\n  padding-left: 80rpx !important;\n}\n.u-m-t-80 {\r\n  margin-top: 80rpx !important;\n}\n.u-p-t-80 {\r\n  padding-top: 80rpx !important;\n}\n.u-margin-top-80 {\r\n  margin-top: 80rpx !important;\n}\n.u-padding-top-80 {\r\n  padding-top: 80rpx !important;\n}\n.u-m-r-80 {\r\n  margin-right: 80rpx !important;\n}\n.u-p-r-80 {\r\n  padding-right: 80rpx !important;\n}\n.u-margin-right-80 {\r\n  margin-right: 80rpx !important;\n}\n.u-padding-right-80 {\r\n  padding-right: 80rpx !important;\n}\n.u-m-b-80 {\r\n  margin-bottom: 80rpx !important;\n}\n.u-p-b-80 {\r\n  padding-bottom: 80rpx !important;\n}\n.u-margin-bottom-80 {\r\n  margin-bottom: 80rpx !important;\n}\n.u-padding-bottom-80 {\r\n  padding-bottom: 80rpx !important;\n}\n.u-type-primary-light {\r\n  color: #ecf5ff !important;\n}\n.u-type-warning-light {\r\n  color: #fdf6ec !important;\n}\n.u-type-success-light {\r\n  color: #dbf1e1 !important;\n}\n.u-type-error-light {\r\n  color: #fef0f0 !important;\n}\n.u-type-info-light {\r\n  color: #f4f4f5 !important;\n}\n.u-type-primary-light-bg {\r\n  background-color: #ecf5ff !important;\n}\n.u-type-warning-light-bg {\r\n  background-color: #fdf6ec !important;\n}\n.u-type-success-light-bg {\r\n  background-color: #dbf1e1 !important;\n}\n.u-type-error-light-bg {\r\n  background-color: #fef0f0 !important;\n}\n.u-type-info-light-bg {\r\n  background-color: #f4f4f5 !important;\n}\n.u-type-primary-dark {\r\n  color: #2b85e4 !important;\n}\n.u-type-warning-dark {\r\n  color: #f29100 !important;\n}\n.u-type-success-dark {\r\n  color: #18b566 !important;\n}\n.u-type-error-dark {\r\n  color: #dd6161 !important;\n}\n.u-type-info-dark {\r\n  color: #82848a !important;\n}\n.u-type-primary-dark-bg {\r\n  background-color: #2b85e4 !important;\n}\n.u-type-warning-dark-bg {\r\n  background-color: #f29100 !important;\n}\n.u-type-success-dark-bg {\r\n  background-color: #18b566 !important;\n}\n.u-type-error-dark-bg {\r\n  background-color: #dd6161 !important;\n}\n.u-type-info-dark-bg {\r\n  background-color: #82848a !important;\n}\n.u-type-primary-disabled {\r\n  color: #a0cfff !important;\n}\n.u-type-warning-disabled {\r\n  color: #fcbd71 !important;\n}\n.u-type-success-disabled {\r\n  color: #71d5a1 !important;\n}\n.u-type-error-disabled {\r\n  color: #fab6b6 !important;\n}\n.u-type-info-disabled {\r\n  color: #c8c9cc !important;\n}\n.u-type-primary {\r\n  color: #2979ff !important;\n}\n.u-type-warning {\r\n  color: #ff9900 !important;\n}\n.u-type-success {\r\n  color: #19be6b !important;\n}\n.u-type-error {\r\n  color: #fa3534 !important;\n}\n.u-type-info {\r\n  color: #909399 !important;\n}\n.u-type-primary-bg {\r\n  background-color: #2979ff !important;\n}\n.u-type-warning-bg {\r\n  background-color: #ff9900 !important;\n}\n.u-type-success-bg {\r\n  background-color: #19be6b !important;\n}\n.u-type-error-bg {\r\n  background-color: #fa3534 !important;\n}\n.u-type-info-bg {\r\n  background-color: #909399 !important;\n}\n.u-main-color {\r\n  color: #303133;\n}\n.u-content-color {\r\n  color: #606266;\n}\n.u-tips-color {\r\n  color: #909399;\n}\n.u-light-color {\r\n  color: #c0c4cc;\n}\nbody {\r\n  color: #303133;\r\n  font-size: 28rpx;\n}\nuni-image {\r\n  display: inline-block;\r\n  will-change: transform;\n}\nuni-view,\r\nuni-text {\r\n  box-sizing: border-box;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n          flex-direction: row;\n}\r\n/* start--去除webkit的默认样式--start */\n.u-fix-ios-appearance {\r\n  -webkit-appearance: none;\n}\r\n/* end--去除webkit的默认样式--end */\r\n/* start--icon图标外层套一个view，让其达到更好的垂直居中的效果--start */\n.u-icon-wrap {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\n}\r\n/* end-icon图标外层套一个view，让其达到更好的垂直居中的效果--end */\r\n/* start--微信小程序编译后页面有组件名的元素，特别处理--start */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* end-微信小程序编译后页面有组件名的元素，特别处理--end */\r\n/* start--iPhoneX底部安全区定义--start */\n.safe-area-inset-bottom {\r\n  padding-bottom: 0;\r\n  padding-bottom: constant(safe-area-inset-bottom);\r\n  padding-bottom: env(safe-area-inset-bottom);\n}\r\n/* end-iPhoneX底部安全区定义--end */\r\n/* start--各种hover点击反馈相关的类名-start */\n.u-hover-class {\r\n  opacity: 0.6;\n}\n.u-cell-hover {\r\n  background-color: #f7f8f9 !important;\n}\r\n/* end--各种hover点击反馈相关的类名--end */\r\n/* start--文本行数限制--start */\n.u-line-1 {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\n}\n.u-line-2 {\r\n  -webkit-line-clamp: 2;\n}\n.u-line-3 {\r\n  -webkit-line-clamp: 3;\n}\n.u-line-4 {\r\n  -webkit-line-clamp: 4;\n}\n.u-line-5 {\r\n  -webkit-line-clamp: 5;\n}\n.u-line-2, .u-line-3, .u-line-4, .u-line-5 {\r\n  overflow: hidden;\r\n  word-break: break-all;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\n}\r\n/* end--文本行数限制--end */\r\n/* start--Retina 屏幕下的 1px 边框--start */\n.u-border,\r\n.u-border-bottom,\r\n.u-border-left,\r\n.u-border-right,\r\n.u-border-top,\r\n.u-border-top-bottom {\r\n  position: relative;\n}\n.u-border-bottom:after,\r\n.u-border-left:after,\r\n.u-border-right:after,\r\n.u-border-top-bottom:after,\r\n.u-border-top:after,\r\n.u-border:after {\r\n  content: ' ';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  pointer-events: none;\r\n  box-sizing: border-box;\r\n  -webkit-transform-origin: 0 0;\r\n  transform-origin: 0 0;\r\n  width: 199.8%;\r\n  height: 199.7%;\r\n  -webkit-transform: scale(0.5, 0.5);\r\n          transform: scale(0.5, 0.5);\r\n  border: 0 solid #e4e7ed;\r\n  z-index: 2;\n}\n.u-border-top:after {\r\n  border-top-width: 1px;\n}\n.u-border-left:after {\r\n  border-left-width: 1px;\n}\n.u-border-right:after {\r\n  border-right-width: 1px;\n}\n.u-border-bottom:after {\r\n  border-bottom-width: 1px;\n}\n.u-border-top-bottom:after {\r\n  border-width: 1px 0;\n}\n.u-border:after {\r\n  border-width: 1px;\n}\r\n/* end--Retina 屏幕下的 1px 边框--end */\r\n/* start--clearfix--start */\n.u-clearfix:after,\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\n}\r\n/* end--clearfix--end */\r\n/* start--演示页面使用的统一样式--start */\n.u-demo {\r\n  padding: 50rpx 40rpx;\n}\n.u-demo-wrap {\r\n  border: 1px dashed #ddd;\r\n  background-color: #fafafa;\r\n  padding: 40rpx 20rpx;\r\n  border-radius: 6px;\n}\n.u-demo-area {\r\n  text-align: center;\n}\n.u-no-demo-here {\r\n  color: #909399;\r\n  font-size: 26rpx;\n}\n.u-demo-result-line {\r\n  border: 1px dashed #ddd;\r\n  padding: 10rpx 40rpx;\r\n  margin-top: 30rpx;\r\n  border-radius: 5px;\r\n  background-color: #f0f0f0;\r\n  color: #606266;\r\n  display: inline-block;\r\n  font-size: 32rpx;\r\n  -webkit-transition: all 0.35s;\r\n  transition: all 0.35s;\r\n  word-break: break-word;\r\n  text-align: left;\n}\n.u-demo-title,\r\n.u-config-title {\r\n  text-align: center;\r\n  font-size: 32rpx;\r\n  font-weight: bold;\r\n  margin-bottom: 40rpx;\n}\n.u-config-item {\r\n  margin-top: 50rpx;\n}\n.u-config-title {\r\n  margin-top: 40rpx;\r\n  padding-bottom: 10rpx;\n}\n.u-item-title {\r\n  position: relative;\r\n  font-size: 28rpx;\r\n  padding-left: 8px;\r\n  line-height: 1;\r\n  margin-bottom: 22rpx;\n}\n.u-item-title:after {\r\n  position: absolute;\r\n  width: 4px;\r\n  top: -1px;\r\n  height: 16px;\r\n  content: '';\r\n  left: 0;\r\n  border-radius: 10px;\r\n  background-color: #606266;\n}\r\n/* end--演示页面使用的统一样式--end */\r\n/* start--高斯模糊tabbar底部处理--start */\n.u-blur-effect-inset {\r\n  width: 750rpx;\r\n  height: var(--window-bottom);\r\n  background-color: #FFFFFF;\n}\r\n/* end--高斯模糊tabbar底部处理--end */\nbody::after {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  box-shadow: inset 0 4upx 8upx 0 #f4f4f4;\r\n  z-index: 9;\r\n  width: 750upx;\r\n  height: 8upx;\n}\nbody {\r\n  width: 100%;\n}\n::-webkit-scrollbar {\r\n  display: none;\r\n  width: 0 !important;\r\n  height: 0 !important;\r\n  -webkit-appearance: none;\r\n  color: transparent;\r\n  background: transparent;\n}\nuni-swiper .wx-swiper-dot,\r\nuni-swiper .a-swiper-dot,\r\nuni-swiper .uni-swiper-dot {\r\n  background: #3C3C3C;\r\n  width: 8rpx;\r\n  height: 8rpx;\r\n  border-radius: 50%;\r\n  margin-right: 10rpx !important;\n}\nuni-swiper .wx-swiper-dot.wx-swiper-dot-active,\r\nuni-swiper .a-swiper-dot.a-swiper-dot-active,\r\nuni-swiper .uni-swiper-dot.uni-swiper-dot-active {\r\n  background: #FFFFFF;\n}\n.line-7 {\r\n  width: 100%;\r\n  height: 14rpx;\r\n  background: #F4F4F4;\n}\n.line-3 {\r\n  width: 100%;\r\n  height: 6rpx;\r\n  background: #F4F4F4;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);