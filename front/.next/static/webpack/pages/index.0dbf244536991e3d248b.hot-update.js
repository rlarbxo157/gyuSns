webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.jsx":
/*!**********************************!*\
  !*** ./components/AppLayout.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.jsx");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\qwe\\nodebird3\\front\\components\\AppLayout.jsx",
    _this = undefined,
    _s = $RefreshSig$();







 // import { useLayoutEffect } from 'react';



var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children,
      show = _ref.show;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // const {mainPosts} = useSelector((state)=>state.post);
  // if(typeof window !== 'undefined'){
  //   const a = document.querySelector('.applayout');
  //   if(show){
  //     a.classList.add('over');
  //   }else{
  //     a.classList.remove('over');
  //   }
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "applayout",
    style: {
      backgroundColor: "#eff2f5",
      width: "100%",
      height: "100vh",
      margin: 0,
      padding: 0
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "header",
      style: {
        height: "50px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "header_left",
        style: {
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
          className: "fas fa-home fa-2x",
          "aria-hidden": true,
          style: {
            color: "#1a77f2"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
          type: "text",
          className: "user_input",
          placeholder: "\uAC80\uC0C9",
          style: {
            position: "relative",
            left: "10px",
            width: "240px",
            borderRadius: "20px",
            height: "35px",
            outline: "none"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
          "aria-hidden": true,
          className: "fas fa-search",
          style: {
            zIndex: 3,
            position: "relative",
            right: "20px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "header_middle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "home_link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "header_right",
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "user_profile",
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            style: {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px"
            },
            src: "https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p50x50/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BOw0nnArsGsAX-bGGGQ&_nc_ht=scontent.ficn3-2.fna&oh=1e73ccedbcaebec3c06a8cacdf94601d&oe=6144DDA2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            style: {
              fontWeight: 600
            },
            children: me.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "unRead_message",
          style: {
            position: "relative",
            left: "10px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "unRead_message_icon",
            style: {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#e3e6ea",
              position: "relative"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
              viewBox: "0 0 28 28",
              alt: "",
              className: "a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry",
              height: "18px",
              width: "18px",
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                margin: "-9px 0px 0px -9px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
                d: "M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      gutter: 8,
      style: {
        position: "relative"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "userInfo_section",
          style: {
            position: "relative",
            top: "40px",
            padding: "0 0 0 20px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "userProfile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/profile",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                  style: {
                    borderRadius: "34px",
                    width: "40px",
                    height: "40px",
                    marginRight: "10px"
                  },
                  src: "https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p40x40/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=1rdHoPUFiSAAX9dHe3q&tn=BKIHErudAlna7iLo&_nc_ht=scontent.ficn3-2.fna&oh=d0831d5eb00febe5c25774f8980d4636&oe=614557A3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                  style: {
                    fontWeight: "600",
                    fontSize: "13px"
                  },
                  children: me.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "friend",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
              style: {
                width: "40px",
                height: "40px",
                marginRight: "10px"
              },
              src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              style: {
                fontWeight: "600",
                fontSize: "13px"
              },
              children: "\uCE5C\uAD6C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 12,
        style: {
          position: "relative",
          top: "20px"
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(AppLayout, "9V1uf3383/tS6kXOMMR8c8sBgP4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwic2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiekluZGV4IiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJuaWNrbmFtZSIsInRvcCIsImZvbnRTaXplIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOzs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUN4QyxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSLENBRHdDLENBRXhDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0U7QUFDRSxhQUFTLEVBQUMsV0FEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFLFNBRFo7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsWUFBTSxFQUFFLE9BSEg7QUFJTEMsWUFBTSxFQUFFLENBSkg7QUFLTEMsYUFBTyxFQUFFO0FBTEosS0FG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UyxDQUFDQyxJQUFWLENBQWVDO0FBREwsQ0FBdEI7QUFJZTlCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkYmYyNDQ1MzY5OTFlM2QyNDhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2wsIElucHV0LCBNZW51LCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybVwiO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuLy8gaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNob3cgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gY29uc3Qge21haW5Qb3N0c30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuXHJcbiAgLy8gaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gIC8vICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBsYXlvdXQnKTtcclxuICAvLyAgIGlmKHNob3cpe1xyXG4gIC8vICAgICBhLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcclxuICAvLyAgIH1lbHNle1xyXG4gIC8vICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImFwcGxheW91dFwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZmYyZjVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX2xlZnRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZSBmYS0yeFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMxYTc3ZjJcIiB9fVxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJfaW5wdXRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuqygOyDiVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICBsZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIyNDBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1cHhcIixcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAzLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCByaWdodDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfbWlkZGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfbGlua1wiPlxyXG4gICAgICAgICAgICB7LyogPGlcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lIGZhLTJ4XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGNvbG9yOiBcIiMxYTc3ZjJcIiB9fVxyXG4gICAgICAgICAgICA+PC9pPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3JpZ2h0XCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJfcHJvZmlsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDUweDUwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD03MjA2YTgmX25jX29oYz1CT3cwbm5BcnNHc0FYLWJHR0dRJl9uY19odD1zY29udGVudC5maWNuMy0yLmZuYSZvaD0xZTczY2NlZGJjYWViZWMzYzA2YThjYWNkZjk0NjAxZCZvZT02MTQ0RERBMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT57bWUubmlja25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuUmVhZF9tZXNzYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuUmVhZF9tZXNzYWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlM2U2ZWFcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjggMjhcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImE4YzM3eDFqIG1zMDVzaXdzIGh3c3kxY2ZmIGI3aDlvY2Y0IGZ6ZGthanJ5XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIi05cHggMHB4IDBweCAtOXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgMi4wNDJjNi43NiAwIDEyIDQuOTUyIDEyIDExLjY0UzIwLjc2IDI1LjMyMiAxNCAyNS4zMjJhMTMuMDkxIDEzLjA5MSAwIDAgMS0zLjQ3NC0uNDYxLjk1NiAuOTU2IDAgMCAwLS42NDEuMDQ3TDcuNSAyNS45NTlhLjk2MS45NjEgMCAwIDEtMS4zNDgtLjg0OWwtLjA2NS0yLjEzNGEuOTU3Ljk1NyAwIDAgMC0uMzIyLS42ODRBMTEuMzg5IDExLjM4OSAwIDAgMSAyIDEzLjY4MkMyIDYuOTk0IDcuMjQgMi4wNDIgMTQgMi4wNDJaTTYuNzk0IDE3LjA4NmEuNTcuNTcgMCAwIDAgLjgyNy43NThsMy43ODYtMi44NzRhLjcyMi43MjIgMCAwIDEgLjg2OCAwbDIuOCAyLjFhMS44IDEuOCAwIDAgMCAyLjYtLjQ4MWwzLjUyNS01LjU5MmEuNTcuNTcgMCAwIDAtLjgyNy0uNzU4bC0zLjc4NiAyLjg3NGEuNzIyLjcyMiAwIDAgMS0uODY4IDBsLTIuOC0yLjFhMS44IDEuOCAwIDAgMC0yLjYuNDgxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Um93IGd1dHRlcj17OH0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VySW5mb19zZWN0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIHRvcDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDAgMCAyMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGVgfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5maWNuMy0yLmZuYS5mYmNkbi5uZXQvdi90MS4zMDQ5Ny0xL2NwMC9wNDB4NDAvMTQzMDg2OTY4XzI4NTYzNjg5MDQ2MjIxOTJfMTk1OTczMjIxODc5MTE2MjQ1OF9uLnBuZz9fbmNfY2F0PTEmY2NiPTEtNSZfbmNfc2lkPWRiYjllNyZfbmNfb2hjPTFyZEhvUFVGaVNBQVg5ZEhlM3EmdG49QktJSEVydWRBbG5hN2lMbyZfbmNfaHQ9c2NvbnRlbnQuZmljbjMtMi5mbmEmb2g9ZDA4MzFkNWViMDBmZWJlNWMyNTc3NGY4OTgwZDQ2MzYmb2U9NjE0NTU3QTNcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjYwMFwiLCBmb250U2l6ZTogXCIxM3B4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge21lLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQwcHhcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy54eC5mYmNkbi5uZXQvcnNyYy5waHAvdjMveTgvci9TMFU1RUN6WVVTdS5wbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiwgZm9udFNpemU6IFwiMTNweFwiIH19Puy5nOq1rDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfSBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICB7Lyog7Jes6riw64uk6rCA64qUIOutkOuLpOuluOqxuCDrhKPslrTrhpPqs6AgKi99XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=