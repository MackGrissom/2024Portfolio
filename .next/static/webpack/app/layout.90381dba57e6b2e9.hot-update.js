"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"782cba771292\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzBlN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3ODJjYmE3NzEyOTJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/sub/CustomCursor.tsx":
/*!*****************************************!*\
  !*** ./components/sub/CustomCursor.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// CustomCursor.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// CustomCursor.tsx\n\nconst CustomCursor = ()=>{\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const onMouseMove = (e)=>{\n        setPosition({\n            x: e.clientX,\n            y: e.clientY\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Hide the default cursor\n        document.body.style.cursor = \"none\";\n        window.addEventListener(\"mousemove\", onMouseMove);\n        return ()=>{\n            // Restore the default cursor when the component unmounts\n            document.body.style.cursor = \"auto\";\n            window.removeEventListener(\"mousemove\", onMouseMove);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-10 h-10 border-2 border-purple-500 rounded-full bg-transparent fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2\",\n        style: {\n            left: position.x,\n            top: position.y\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-4 h-4 bg-purple-500 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 animate-ripple\"\n        }, void 0, false, {\n            fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/CustomCursor.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/CustomCursor.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomCursor, \"jv34aNIyPo+g3wMR9igNqlVW3h8=\");\n_c = CustomCursor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomCursor);\nvar _c;\n$RefreshReg$(_c, \"CustomCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3ViL0N1c3RvbUN1cnNvci50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1CQUFtQjs7O0FBRW5CLG1CQUFtQjtBQUVnQztBQUVuRCxNQUFNRyxlQUF5Qjs7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUVLLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBRXRELE1BQU1DLGNBQWMsQ0FBQ0M7UUFDbkJKLFlBQVk7WUFBRUMsR0FBR0csRUFBRUMsT0FBTztZQUFFSCxHQUFHRSxFQUFFRSxPQUFPO1FBQUM7SUFDM0M7SUFFQVQsZ0RBQVNBLENBQUM7UUFDUiwwQkFBMEI7UUFDMUJVLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUc7UUFFN0JDLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFUO1FBRXJDLE9BQU87WUFDTCx5REFBeUQ7WUFDekRJLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEdBQUc7WUFDN0JDLE9BQU9FLG1CQUFtQixDQUFDLGFBQWFWO1FBQzFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNXO1FBQ0NDLFdBQVU7UUFDVk4sT0FBTztZQUFFTyxNQUFNakIsU0FBU0UsQ0FBQztZQUFFZ0IsS0FBS2xCLFNBQVNHLENBQUM7UUFBQztrQkFFM0MsNEVBQUNZO1lBQUlDLFdBQVU7Ozs7Ozs7Ozs7O0FBR3JCO0dBNUJNakI7S0FBQUE7QUE4Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWIvQ3VzdG9tQ3Vyc29yLnRzeD8zZDg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbUN1cnNvci50c3hcblwidXNlIGNsaWVudFwiO1xuLy8gQ3VzdG9tQ3Vyc29yLnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ3VzdG9tQ3Vyc29yOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG5cbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBIaWRlIHRoZSBkZWZhdWx0IGN1cnNvclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBkZWZhdWx0IGN1cnNvciB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ2F1dG8nO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS01MDAgcm91bmRlZC1mdWxsIGJnLXRyYW5zcGFyZW50IGZpeGVkIHBvaW50ZXItZXZlbnRzLW5vbmUgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiXG4gICAgICBzdHlsZT17eyBsZWZ0OiBwb3NpdGlvbi54LCB0b3A6IHBvc2l0aW9uLnkgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNCBoLTQgYmctcHVycGxlLTUwMCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBhbmltYXRlLXJpcHBsZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tQ3Vyc29yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDdXN0b21DdXJzb3IiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwieCIsInkiLCJvbk1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJsZWZ0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sub/CustomCursor.tsx\n"));

/***/ })

});