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
          className: "home_link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
            "aria-hidden": true,
            className: "fas fa-home fa-2x",
            style: {
              width: "100%",
              height: "100%",
              color: "#1a77f2"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
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
        md: 5,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "userInfo_section",
          style: {
            position: "relative",
            top: "20px"
          },
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
              lineNumber: 138,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
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
              lineNumber: 145,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              children: "\uCE5C\uAD6C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
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
        md: 14,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwic2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiekluZGV4IiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJuaWNrbmFtZSIsInRvcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDeEMscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUixDQUR3QyxDQUV4QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxTQURaO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLFlBQU0sRUFBRSxDQUhIO0FBSUxDLGFBQU8sRUFBRTtBQUpKLEtBRlQ7QUFBQSw0QkFTRTtBQUNFLGVBQVMsRUFBQyxRQURa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QSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFBRUgscUJBQUssRUFBRSxNQUFUO0FBQWlCRyxzQkFBTSxFQUFFO0FBQXpCLGVBRFQ7QUFFRSxpQkFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzQkUscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxFQUFqQjtBQUFBLGtCQUNHVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUF5QkUscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBJRCxDQXZKRDs7R0FBTUQsUztVQUNXRyx1RDs7O0tBRFhILFM7QUF5Sk5BLFNBQVMsQ0FBQzBCLFNBQVYsR0FBc0I7QUFDcEJ6QixVQUFRLEVBQUUwQixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREwsQ0FBdEI7QUFJZTdCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0OTQ0OWI2NDJhMTJlN2Q4NmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2wsIElucHV0LCBNZW51LCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybVwiO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuXHJcbi8vIGltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuLCBzaG93IH0pID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIC8vIGNvbnN0IHttYWluUG9zdHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucG9zdCk7XHJcblxyXG4gIC8vIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAvLyAgIGNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwbGF5b3V0Jyk7XHJcbiAgLy8gICBpZihzaG93KXtcclxuICAvLyAgICAgYS5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XHJcbiAgLy8gICB9ZWxzZXtcclxuICAvLyAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJhcHBsYXlvdXRcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWZmMmY1XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9sZWZ0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWUgZmEtMnhcIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMWE3N2YyXCIgfX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyX2lucHV0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLqsoDsg4lcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgbGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMywgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgcmlnaHQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX21pZGRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX2xpbmtcIj5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lIGZhLTJ4XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIGNvbG9yOiBcIiMxYTc3ZjJcIiB9fVxyXG4gICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfcmlnaHRcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlcl9wcm9maWxlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5maWNuMy0yLmZuYS5mYmNkbi5uZXQvdi90MS4zMDQ5Ny0xL2NwMC9wNTB4NTAvMTQzMDg2OTY4XzI4NTYzNjg5MDQ2MjIxOTJfMTk1OTczMjIxODc5MTE2MjQ1OF9uLnBuZz9fbmNfY2F0PTEmY2NiPTEtNSZfbmNfc2lkPTcyMDZhOCZfbmNfb2hjPUJPdzBubkFyc0dzQVgtYkdHR1EmX25jX2h0PXNjb250ZW50LmZpY24zLTIuZm5hJm9oPTFlNzNjY2VkYmNhZWJlYzNjMDZhOGNhY2RmOTQ2MDFkJm9lPTYxNDREREEyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19PnttZS5uaWNrbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5SZWFkX21lc3NhZ2VcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBsZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5SZWFkX21lc3NhZ2VfaWNvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2UzZTZlYVwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyOCAyOFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYThjMzd4MWogbXMwNXNpd3MgaHdzeTFjZmYgYjdoOW9jZjQgZnpka2FqcnlcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMThweFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiLTlweCAwcHggMHB4IC05cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNCAyLjA0MmM2Ljc2IDAgMTIgNC45NTIgMTIgMTEuNjRTMjAuNzYgMjUuMzIyIDE0IDI1LjMyMmExMy4wOTEgMTMuMDkxIDAgMCAxLTMuNDc0LS40NjEuOTU2IC45NTYgMCAwIDAtLjY0MS4wNDdMNy41IDI1Ljk1OWEuOTYxLjk2MSAwIDAgMS0xLjM0OC0uODQ5bC0uMDY1LTIuMTM0YS45NTcuOTU3IDAgMCAwLS4zMjItLjY4NEExMS4zODkgMTEuMzg5IDAgMCAxIDIgMTMuNjgyQzIgNi45OTQgNy4yNCAyLjA0MiAxNCAyLjA0MlpNNi43OTQgMTcuMDg2YS41Ny41NyAwIDAgMCAuODI3Ljc1OGwzLjc4Ni0yLjg3NGEuNzIyLjcyMiAwIDAgMSAuODY4IDBsMi44IDIuMWExLjggMS44IDAgMCAwIDIuNi0uNDgxbDMuNTI1LTUuNTkyYS41Ny41NyAwIDAgMC0uODI3LS43NThsLTMuNzg2IDIuODc0YS43MjIuNzIyIDAgMCAxLS44NjggMGwtMi44LTIuMWExLjggMS44IDAgMCAwLTIuNi40ODFaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs4fSBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17NX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJJbmZvX3NlY3Rpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMzRweFwiLCB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDQweDQwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD1kYmI5ZTcmX25jX29oYz0xcmRIb1BVRmlTQUFYOWRIZTNxJnRuPUJLSUhFcnVkQWxuYTdpTG8mX25jX2h0PXNjb250ZW50LmZpY24zLTIuZm5hJm9oPWQwODMxZDVlYjAwZmViZTVjMjU3NzRmODk4MGQ0NjM2Jm9lPTYxNDU1N0EzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJpZW5kXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy54eC5mYmNkbi5uZXQvcnNyYy5waHAvdjMveTgvci9TMFU1RUN6WVVTdS5wbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+7Lmc6rWsPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTR9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17NX0+XHJcbiAgICAgICAgICB7Lyog7Jes6riw64uk6rCA64qUIOutkOuLpOuluOqxuCDrhKPslrTrhpPqs6AgKi99XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=