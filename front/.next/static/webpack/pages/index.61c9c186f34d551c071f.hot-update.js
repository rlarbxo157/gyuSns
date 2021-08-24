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
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
          className: "fas fa-search",
          style: {
            zIndex: 3,
            position: "relative",
            right: "20px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "header_middle",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "home_link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
            className: "fas fa-home fa-2x",
            style: {
              width: "100%",
              height: "100%",
              color: "#1a77f2"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            style: {
              fontWeight: 600
            },
            children: me.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
              class: "a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry",
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
                lineNumber: 118,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        md: 5,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "userProfile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            style: {
              borderRadius: "34px",
              width: "50px",
              height: "50px"
            },
            src: "https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p40x40/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=1rdHoPUFiSAAX9dHe3q&tn=BKIHErudAlna7iLo&_nc_ht=scontent.ficn3-2.fna&oh=d0831d5eb00febe5c25774f8980d4636&oe=614557A3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "friend",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            style: {
              width: "50px",
              height: "50px"
            },
            src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            children: "\uCE5C\uAD6C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 14,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwic2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiekluZGV4IiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJuaWNrbmFtZSIsInRvcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDeEMscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUixDQUR3QyxDQUV4QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxTQURaO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLFlBQU0sRUFBRSxDQUhIO0FBSUxDLGFBQU8sRUFBRTtBQUpKLEtBRlQ7QUFBQSw0QkFTRTtBQUNFLGVBQVMsRUFBQyxRQURa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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWlCRSxxRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQUEsa0JBQ0dWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRixlQW9CRSxxRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0hELENBNUlEOztHQUFNRCxTO1VBQ1dHLHVEOzs7S0FEWEgsUztBQThJTkEsU0FBUyxDQUFDMEIsU0FBVixHQUFzQjtBQUNwQnpCLFVBQVEsRUFBRTBCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QjtBQUllN0Isd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFjOWMxODZmMzRkNTUxYzA3MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IENvbCwgSW5wdXQsIE1lbnUsIFJvdyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNob3cgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gY29uc3Qge21haW5Qb3N0c30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuXHJcbiAgLy8gaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gIC8vICAgY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBsYXlvdXQnKTtcclxuICAvLyAgIGlmKHNob3cpe1xyXG4gIC8vICAgICBhLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcclxuICAvLyAgIH1lbHNle1xyXG4gIC8vICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImFwcGxheW91dFwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZmYyZjVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX2xlZnRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZSBmYS0yeFwiIHN0eWxlPXt7IGNvbG9yOiBcIiMxYTc3ZjJcIiB9fT48L2k+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyX2lucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgbGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMywgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgcmlnaHQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX21pZGRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX2xpbmtcIj5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZSBmYS0yeFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBjb2xvcjogXCIjMWE3N2YyXCIgfX1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3JpZ2h0XCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJfcHJvZmlsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDUweDUwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD03MjA2YTgmX25jX29oYz1CT3cwbm5BcnNHc0FYLWJHR0dRJl9uY19odD1zY29udGVudC5maWNuMy0yLmZuYSZvaD0xZTczY2NlZGJjYWViZWMzYzA2YThjYWNkZjk0NjAxZCZvZT02MTQ0RERBMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT57bWUubmlja25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuUmVhZF9tZXNzYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuUmVhZF9tZXNzYWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlM2U2ZWFcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjggMjhcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYThjMzd4MWogbXMwNXNpd3MgaHdzeTFjZmYgYjdoOW9jZjQgZnpka2FqcnlcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMThweFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiLTlweCAwcHggMHB4IC05cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNCAyLjA0MmM2Ljc2IDAgMTIgNC45NTIgMTIgMTEuNjRTMjAuNzYgMjUuMzIyIDE0IDI1LjMyMmExMy4wOTEgMTMuMDkxIDAgMCAxLTMuNDc0LS40NjEuOTU2IC45NTYgMCAwIDAtLjY0MS4wNDdMNy41IDI1Ljk1OWEuOTYxLjk2MSAwIDAgMS0xLjM0OC0uODQ5bC0uMDY1LTIuMTM0YS45NTcuOTU3IDAgMCAwLS4zMjItLjY4NEExMS4zODkgMTEuMzg5IDAgMCAxIDIgMTMuNjgyQzIgNi45OTQgNy4yNCAyLjA0MiAxNCAyLjA0MlpNNi43OTQgMTcuMDg2YS41Ny41NyAwIDAgMCAuODI3Ljc1OGwzLjc4Ni0yLjg3NGEuNzIyLjcyMiAwIDAgMSAuODY4IDBsMi44IDIuMWExLjggMS44IDAgMCAwIDIuNi0uNDgxbDMuNTI1LTUuNTkyYS41Ny41NyAwIDAgMC0uODI3LS43NThsLTMuNzg2IDIuODc0YS43MjIuNzIyIDAgMCAxLS44NjggMGwtMi44LTIuMWExLjggMS44IDAgMCAwLTIuNi40ODFaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs4fSBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17NX0+XHJcbiAgICAgICAgICB7Lyog7Jes6riw64uk6rCAIOunge2BrOulvCDsmrDshKAg66eM65Ok7Ja065GQ6rOgICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyUHJvZmlsZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjM0cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5maWNuMy0yLmZuYS5mYmNkbi5uZXQvdi90MS4zMDQ5Ny0xL2NwMC9wNDB4NDAvMTQzMDg2OTY4XzI4NTYzNjg5MDQ2MjIxOTJfMTk1OTczMjIxODc5MTE2MjQ1OF9uLnBuZz9fbmNfY2F0PTEmY2NiPTEtNSZfbmNfc2lkPWRiYjllNyZfbmNfb2hjPTFyZEhvUFVGaVNBQVg5ZEhlM3EmdG49QktJSEVydWRBbG5hN2lMbyZfbmNfaHQ9c2NvbnRlbnQuZmljbjMtMi5mbmEmb2g9ZDA4MzFkNWViMDBmZWJlNWMyNTc3NGY4OTgwZDQ2MzYmb2U9NjE0NTU3QTNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMueHguZmJjZG4ubmV0L3JzcmMucGhwL3YzL3k4L3IvUzBVNUVDellVU3UucG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4+7Lmc6rWsPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxNH0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs1fT5cclxuICAgICAgICAgIHsvKiDsl6zquLDri6TqsIDripQg662Q64uk66W46rG4IOuEo+yWtOuGk+qzoCAqL31cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==