"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/sub/HeroContent.tsx":
/*!****************************************!*\
  !*** ./components/sub/HeroContent.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst animationVariants = {\n    hidden: {\n        opacity: 0,\n        x: -100\n    },\n    visible: {\n        opacity: 1,\n        x: 0,\n        transition: {\n            duration: 0.5\n        }\n    }\n};\nconst staggerVariants = {\n    hidden: {\n        opacity: 0\n    },\n    visible: {\n        opacity: 1,\n        transition: {\n            duration: 0.5\n        }\n    }\n};\nconst hoverScaleVariants = {\n    scale: 1.1\n};\nconst HeroContent = ()=>{\n    _s();\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        controls.start(\"visible\");\n    }, [\n        controls\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        className: \"flex flex-row items-center justify-center px-20 w-full z-[20] bg-[#03001417]/20 backdrop-blur-lg h-screen mb-40 ml-5 py-20\",\n        initial: \"hidden\",\n        animate: controls,\n        variants: animationVariants,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full w-full flex flex-col gap-5 justify-center m-auto text-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"Welcome-box rounded-lg py-[8px] px-[7px] opacity-[0.9]\",\n                        variants: staggerVariants\n                    }, void 0, false, {\n                        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"flex flex-col gap-6 mt-5 text-6xl font-bold text-white max-w-[600px] w-auto h-auto\",\n                        variants: staggerVariants,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Hi, I'm Mack. \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 32\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 39\n                                }, undefined),\n                                \"I\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-transparent bg-clip-text bg-gradient-to-r  from-green-400 to-cyan-500\",\n                                    children: [\n                                        \" \",\n                                        \"design & develop \\xa0\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"modern websites.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n                        className: \"text-lg text-white my-5 max-w-[600px]\",\n                        variants: staggerVariants,\n                        children: \"A Freelance Web Developer and Designer. I build websites, mobile apps and software from scratch. Explore my portfolio to discover my projects and expertise.\"\n                    }, void 0, false, {\n                        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.a, {\n                                className: \"py-2 button-primary bg-gradient-to-r bg-gradient-to-r  from-green-400 to-cyan-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full\",\n                                variants: staggerVariants,\n                                whileHover: hoverScaleVariants,\n                                children: \"Get a Quote\"\n                            }, void 0, false, {\n                                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.a, {\n                                className: \"py-2 button-secondary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full bg-[#03001417] backdrop-blur-md\",\n                                variants: staggerVariants,\n                                whileHover: hoverScaleVariants,\n                                children: \"My Projects\"\n                            }, void 0, false, {\n                                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"w-full h-full flex justify-center items-center\",\n                variants: staggerVariants,\n                whileHover: hoverScaleVariants,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/mainIconsdark.svg\",\n                    alt: \"work icons\",\n                    height: 650,\n                    width: 650,\n                    className: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mackgrissom/code/MackGrissom/2024-modern-port/components/sub/HeroContent.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroContent, \"6pZ2lBElA3YLtcQOKE/nS/LmH94=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = HeroContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroContent);\nvar _c;\n$RefreshReg$(_c, \"HeroContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3ViL0hlcm9Db250ZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lDO0FBQ3NCO0FBQ2hDO0FBRS9CLE1BQU1LLG9CQUE4QjtJQUNsQ0MsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUcsQ0FBQztJQUFJO0lBQzlCQyxTQUFTO1FBQ1BGLFNBQVM7UUFDVEMsR0FBRztRQUNIRSxZQUFZO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxrQkFBNEI7SUFDaENOLFFBQVE7UUFBRUMsU0FBUztJQUFFO0lBQ3JCRSxTQUFTO1FBQ1BGLFNBQVM7UUFDVEcsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtBQUNGO0FBRUEsTUFBTUUscUJBQXFCO0lBQ3pCQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNQyxjQUFjOztJQUNsQixNQUFNQyxXQUFXZCwyREFBWUE7SUFFN0JELGdEQUFTQSxDQUFDO1FBQ1JlLFNBQVNDLEtBQUssQ0FBQztJQUNqQixHQUFHO1FBQUNEO0tBQVM7SUFFYixxQkFDRSw4REFBQ2IsaURBQU1BLENBQUNlLEdBQUc7UUFDVEMsV0FBVTtRQUNWQyxTQUFRO1FBQ1JDLFNBQVNMO1FBQ1RNLFVBQVVqQjs7MEJBRVYsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2hCLGlEQUFNQSxDQUFDZSxHQUFHO3dCQUNUQyxXQUFVO3dCQUNWRyxVQUFVVjs7Ozs7O2tDQUdaLDhEQUFDVCxpREFBTUEsQ0FBQ2UsR0FBRzt3QkFDVEMsV0FBVTt3QkFDVkcsVUFBVVY7a0NBRVYsNEVBQUNXOztnQ0FBSzs4Q0FDZSw4REFBQ0M7Ozs7O2dDQUFLOzhDQUFDLDhEQUFDQTs7Ozs7Z0NBQUs7OENBQ2hDLDhEQUFDRDtvQ0FBS0osV0FBVTs7d0NBQ2I7d0NBQUk7Ozs7Ozs7Z0NBRUE7Ozs7Ozs7Ozs7OztrQ0FLWCw4REFBQ2hCLGlEQUFNQSxDQUFDc0IsQ0FBQzt3QkFDUE4sV0FBVTt3QkFDVkcsVUFBVVY7a0NBQ1g7Ozs7OztrQ0FLRCw4REFBQ007d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDaEIsaURBQU1BLENBQUN1QixDQUFDO2dDQUNQUCxXQUFVO2dDQUNWRyxVQUFVVjtnQ0FDVmUsWUFBWWQ7MENBQ2I7Ozs7OzswQ0FHRCw4REFBQ1YsaURBQU1BLENBQUN1QixDQUFDO2dDQUNQUCxXQUFVO2dDQUNWRyxVQUFVVjtnQ0FDVmUsWUFBWWQ7MENBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNTCw4REFBQ1YsaURBQU1BLENBQUNlLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLFVBQVVWO2dCQUNWZSxZQUFZZDswQkFFWiw0RUFBQ1QsbURBQUtBO29CQUNKd0IsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsUUFBUTtvQkFDUkMsT0FBTztvQkFDUFosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0EzRU1KOztRQUNhYix1REFBWUE7OztLQUR6QmE7QUE2RU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWIvSGVyb0NvbnRlbnQudHN4PzI0ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBbmltYXRpb24sIG1vdGlvbiwgVmFyaWFudHMgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IGFuaW1hdGlvblZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeDogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBzdGFnZ2VyVmFyaWFudHM6IFZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICB2aXNpYmxlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBob3ZlclNjYWxlVmFyaWFudHMgPSB7XG4gIHNjYWxlOiAxLjEsXG59O1xuXG5jb25zdCBIZXJvQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnRyb2xzLnN0YXJ0KFwidmlzaWJsZVwiKTtcbiAgfSwgW2NvbnRyb2xzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMjAgdy1mdWxsIHotWzIwXSBiZy1bIzAzMDAxNDE3XS8yMCBiYWNrZHJvcC1ibHVyLWxnIGgtc2NyZWVuIG1iLTQwIG1sLTUgcHktMjBcIlxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgIHZhcmlhbnRzPXthbmltYXRpb25WYXJpYW50c31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNSBqdXN0aWZ5LWNlbnRlciBtLWF1dG8gdGV4dC1zdGFydFwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlbGNvbWUtYm94IHJvdW5kZWQtbGcgcHktWzhweF0gcHgtWzdweF0gb3BhY2l0eS1bMC45XVwiXG4gICAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJWYXJpYW50c31cbiAgICAgICAgPjwvbW90aW9uLmRpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTYgbXQtNSB0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYXgtdy1bNjAwcHhdIHctYXV0byBoLWF1dG9cIlxuICAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyVmFyaWFudHN9XG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIEhpLCBJJmFwb3M7bSBNYWNrLiA8YnIgLz4gPGJyIC8+SVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciAgZnJvbS1ncmVlbi00MDAgdG8tY3lhbi01MDBcIj5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBkZXNpZ24gJiBkZXZlbG9wICZuYnNwO1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgbW9kZXJuIHdlYnNpdGVzLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC13aGl0ZSBteS01IG1heC13LVs2MDBweF1cIlxuICAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyVmFyaWFudHN9XG4gICAgICAgID5cbiAgICAgICAgICBBIEZyZWVsYW5jZSBXZWIgRGV2ZWxvcGVyIGFuZCBEZXNpZ25lci4gSSBidWlsZCB3ZWJzaXRlcywgbW9iaWxlIGFwcHNcbiAgICAgICAgICBhbmQgc29mdHdhcmUgZnJvbSBzY3JhdGNoLiBFeHBsb3JlIG15IHBvcnRmb2xpbyB0byBkaXNjb3ZlciBteVxuICAgICAgICAgIHByb2plY3RzIGFuZCBleHBlcnRpc2UuXG4gICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZ2FwLThcIj5cbiAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgYnV0dG9uLXByaW1hcnkgYmctZ3JhZGllbnQtdG8tciBiZy1ncmFkaWVudC10by1yICBmcm9tLWdyZWVuLTQwMCB0by1jeWFuLTUwMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgbWF4LXctWzIwMHB4XSB3LWZ1bGxcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJWYXJpYW50c31cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e2hvdmVyU2NhbGVWYXJpYW50c31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZXQgYSBRdW90ZVxuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIGJ1dHRvbi1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIG1heC13LVsyMDBweF0gdy1mdWxsIGJnLVsjMDMwMDE0MTddIGJhY2tkcm9wLWJsdXItbWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJWYXJpYW50c31cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e2hvdmVyU2NhbGVWYXJpYW50c31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNeSBQcm9qZWN0c1xuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICB2YXJpYW50cz17c3RhZ2dlclZhcmlhbnRzfVxuICAgICAgICB3aGlsZUhvdmVyPXtob3ZlclNjYWxlVmFyaWFudHN9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9tYWluSWNvbnNkYXJrLnN2Z1wiXG4gICAgICAgICAgYWx0PVwid29yayBpY29uc1wiXG4gICAgICAgICAgaGVpZ2h0PXs2NTB9XG4gICAgICAgICAgd2lkdGg9ezY1MH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9Db250ZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQW5pbWF0aW9uIiwibW90aW9uIiwiSW1hZ2UiLCJhbmltYXRpb25WYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0YWdnZXJWYXJpYW50cyIsImhvdmVyU2NhbGVWYXJpYW50cyIsInNjYWxlIiwiSGVyb0NvbnRlbnQiLCJjb250cm9scyIsInN0YXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsInNwYW4iLCJiciIsInAiLCJhIiwid2hpbGVIb3ZlciIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/sub/HeroContent.tsx\n"));

/***/ })

});