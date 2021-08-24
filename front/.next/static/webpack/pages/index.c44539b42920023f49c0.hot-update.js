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
      // height: "100%",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwic2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiekluZGV4IiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJuaWNrbmFtZSIsInRvcCIsImZvbnRTaXplIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOzs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBd0I7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUN4QyxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSLENBRHdDLENBRXhDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0U7QUFDRSxhQUFTLEVBQUMsV0FEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFLFNBRFo7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTDtBQUNBQyxZQUFNLEVBQUUsQ0FKSDtBQUtMQyxhQUFPLEVBQUU7QUFMSixLQUZUO0FBQUEsNEJBVUU7QUFD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ZUM7QUFETCxDQUF0QjtBQUllOUIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQ0NTM5YjQyOTIwMDIzZjQ5YzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IENvbCwgSW5wdXQsIE1lbnUsIFJvdyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG4vLyBpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgc2hvdyB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAvLyBjb25zdCB7bWFpblBvc3RzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3QpO1xyXG5cclxuICAvLyBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgLy8gICBjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGxheW91dCcpO1xyXG4gIC8vICAgaWYoc2hvdyl7XHJcbiAgLy8gICAgIGEuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xyXG4gIC8vICAgfWVsc2V7XHJcbiAgLy8gICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYXBwbGF5b3V0XCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VmZjJmNVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAvLyBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9sZWZ0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWUgZmEtMnhcIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMWE3N2YyXCIgfX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyX2lucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgbGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMywgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgcmlnaHQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX21pZGRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX2xpbmtcIj5cclxuICAgICAgICAgICAgey8qIDxpXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZSBmYS0yeFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBjb2xvcjogXCIjMWE3N2YyXCIgfX1cclxuICAgICAgICAgICAgPjwvaT4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9yaWdodFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyX3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZpY24zLTIuZm5hLmZiY2RuLm5ldC92L3QxLjMwNDk3LTEvY3AwL3A1MHg1MC8xNDMwODY5NjhfMjg1NjM2ODkwNDYyMjE5Ml8xOTU5NzMyMjE4NzkxMTYyNDU4X24ucG5nP19uY19jYXQ9MSZjY2I9MS01Jl9uY19zaWQ9NzIwNmE4Jl9uY19vaGM9Qk93MG5uQXJzR3NBWC1iR0dHUSZfbmNfaHQ9c2NvbnRlbnQuZmljbjMtMi5mbmEmb2g9MWU3M2NjZWRiY2FlYmVjM2MwNmE4Y2FjZGY5NDYwMWQmb2U9NjE0NEREQTJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+e21lLm5pY2tuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1blJlYWRfbWVzc2FnZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1blJlYWRfbWVzc2FnZV9pY29uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZTNlNmVhXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI4IDI4XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhOGMzN3gxaiBtczA1c2l3cyBod3N5MWNmZiBiN2g5b2NmNCBmemRrYWpyeVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMThweFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCItOXB4IDBweCAwcHggLTlweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDIuMDQyYzYuNzYgMCAxMiA0Ljk1MiAxMiAxMS42NFMyMC43NiAyNS4zMjIgMTQgMjUuMzIyYTEzLjA5MSAxMy4wOTEgMCAwIDEtMy40NzQtLjQ2MS45NTYgLjk1NiAwIDAgMC0uNjQxLjA0N0w3LjUgMjUuOTU5YS45NjEuOTYxIDAgMCAxLTEuMzQ4LS44NDlsLS4wNjUtMi4xMzRhLjk1Ny45NTcgMCAwIDAtLjMyMi0uNjg0QTExLjM4OSAxMS4zODkgMCAwIDEgMiAxMy42ODJDMiA2Ljk5NCA3LjI0IDIuMDQyIDE0IDIuMDQyWk02Ljc5NCAxNy4wODZhLjU3LjU3IDAgMCAwIC44MjcuNzU4bDMuNzg2LTIuODc0YS43MjIuNzIyIDAgMCAxIC44NjggMGwyLjggMi4xYTEuOCAxLjggMCAwIDAgMi42LS40ODFsMy41MjUtNS41OTJhLjU3LjU3IDAgMCAwLS44MjctLjc1OGwtMy43ODYgMi44NzRhLjcyMi43MjIgMCAwIDEtLjg2OCAwbC0yLjgtMi4xYTEuOCAxLjggMCAwIDAtMi42LjQ4MVpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFJvdyBndXR0ZXI9ezh9IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlckluZm9fc2VjdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICB0b3A6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwIDAgMjBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlYH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDQweDQwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD1kYmI5ZTcmX25jX29oYz0xcmRIb1BVRmlTQUFYOWRIZTNxJnRuPUJLSUhFcnVkQWxuYTdpTG8mX25jX2h0PXNjb250ZW50LmZpY24zLTIuZm5hJm9oPWQwODMxZDVlYjAwZmViZTVjMjU3NzRmODk4MGQ0NjM2Jm9lPTYxNDU1N0EzXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiwgZm9udFNpemU6IFwiMTNweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0MHB4XCIsIGhlaWdodDogXCI0MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMueHguZmJjZG4ubmV0L3JzcmMucGhwL3YzL3k4L3IvUzBVNUVDellVU3UucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNjAwXCIsIGZvbnRTaXplOiBcIjEzcHhcIiB9fT7suZzqtaw8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgey8qIOyXrOq4sOuLpOqwgOuKlCDrrZDri6Trpbjqsbgg64Sj7Ja064aT6rOgICovfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9