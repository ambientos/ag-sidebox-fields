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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/document-setting-panels.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/document-setting-panels.js":
/*!**********************************************!*\
  !*** ./assets/js/document-setting-panels.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerPlugin = wp.plugins.registerPlugin;\nvar PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    TextareaControl = _wp$components.TextareaControl;\nvar _wp$data = wp.data,\n    withSelect = _wp$data.withSelect,\n    withDispatch = _wp$data.withDispatch;\n/**\n * Title\n */\n\nvar TitleController = function TitleController(props) {\n  return wp.element.createElement(TextControl, {\n    value: props.title_meta,\n    onChange: function onChange(value) {\n      return props.onMetaFieldChange(value);\n    }\n  });\n};\n\nTitleController = withSelect(function (select) {\n  return {\n    title_meta: select('core/editor').getEditedPostAttribute('meta')['_title_meta']\n  };\n})(TitleController);\nTitleController = withDispatch(function (dispatch) {\n  return {\n    onMetaFieldChange: function onMetaFieldChange(value) {\n      dispatch('core/editor').editPost({\n        meta: {\n          _title_meta: value\n        }\n      });\n    }\n  };\n})(TitleController);\n/**\n * Description\n */\n\nvar Description = function Description(props) {\n  return wp.element.createElement(TextareaControl, {\n    value: props.descr_meta,\n    onChange: function onChange(value) {\n      return props.onMetaFieldChange(value);\n    }\n  });\n};\n\nDescription = withSelect(function (select) {\n  return {\n    descr_meta: select('core/editor').getEditedPostAttribute('meta')['_descr_meta']\n  };\n})(Description);\nDescription = withDispatch(function (dispatch) {\n  return {\n    onMetaFieldChange: function onMetaFieldChange(value) {\n      dispatch('core/editor').editPost({\n        meta: {\n          _descr_meta: value\n        }\n      });\n    }\n  };\n})(Description);\n/**\n * Source\n */\n\nvar Source = function Source(props) {\n  return wp.element.createElement(TextControl, {\n    value: props.source_meta,\n    onChange: function onChange(value) {\n      return props.onMetaFieldChange(value);\n    }\n  });\n};\n\nSource = withSelect(function (select) {\n  return {\n    source_meta: select('core/editor').getEditedPostAttribute('meta')['_source_meta']\n  };\n})(Source);\nSource = withDispatch(function (dispatch) {\n  return {\n    onMetaFieldChange: function onMetaFieldChange(value) {\n      dispatch('core/editor').editPost({\n        meta: {\n          _source_meta: value\n        }\n      });\n    }\n  };\n})(Source);\n/**\n * Source\n */\n\nvar Intro = function Intro(props) {\n  return wp.element.createElement(TextareaControl, {\n    value: props.intro_meta,\n    onChange: function onChange(value) {\n      return props.onMetaFieldChange(value);\n    }\n  });\n};\n\nIntro = withSelect(function (select) {\n  return {\n    intro_meta: select('core/editor').getEditedPostAttribute('meta')['_intro_meta']\n  };\n})(Intro);\nIntro = withDispatch(function (dispatch) {\n  return {\n    onMetaFieldChange: function onMetaFieldChange(value) {\n      dispatch('core/editor').editPost({\n        meta: {\n          _intro_meta: value\n        }\n      });\n    }\n  };\n})(Intro);\n/**\n * Register Plugin\n */\n\nregisterPlugin('ag-title-panel', {\n  render: function render() {\n    return wp.element.createElement(\"div\", null, wp.element.createElement(PluginDocumentSettingPanel, {\n      name: 'ag-title-panel',\n      title: 'Title'\n    }, wp.element.createElement(TitleController, null)), wp.element.createElement(PluginDocumentSettingPanel, {\n      name: 'ag-description-panel',\n      title: 'Description'\n    }, wp.element.createElement(Description, null)), wp.element.createElement(PluginDocumentSettingPanel, {\n      name: 'ag-source-panel',\n      title: 'Source'\n    }, wp.element.createElement(Source, null)), wp.element.createElement(PluginDocumentSettingPanel, {\n      name: 'ag-intro-panel',\n      title: 'Introduction'\n    }, wp.element.createElement(Intro, null)));\n  },\n  icon: ''\n});\n\n//# sourceURL=webpack:///./assets/js/document-setting-panels.js?");

/***/ })

/******/ });