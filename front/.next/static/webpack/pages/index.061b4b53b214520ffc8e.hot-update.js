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
            top: "40px",
            left: "50%"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
              lineNumber: 141,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
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
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
              children: "\uCE5C\uAD6C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
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
        lineNumber: 159,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkFwcExheW91dCIsImNoaWxkcmVuIiwic2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJib3JkZXJSYWRpdXMiLCJvdXRsaW5lIiwiekluZGV4IiwicmlnaHQiLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJuaWNrbmFtZSIsInRvcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDeEMscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUixDQUR3QyxDQUV4QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxTQURaO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLFlBQU0sRUFBRSxDQUhIO0FBSUxDLGFBQU8sRUFBRTtBQUpKLEtBRlQ7QUFBQSw0QkFTRTtBQUNFLGVBQVMsRUFBQyxRQURa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O0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkYsZUFpQkU7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFBRUgscUJBQUssRUFBRSxNQUFUO0FBQWlCRyxzQkFBTSxFQUFFO0FBQXpCLGVBRFQ7QUFFRSxpQkFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNEJFLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBQSxrQkFDR1Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGLGVBK0JFLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnSkQsQ0E3SkQ7O0dBQU1ELFM7VUFDV0csdUQ7OztLQURYSCxTO0FBK0pOQSxTQUFTLENBQUMwQixTQUFWLEdBQXNCO0FBQ3BCekIsVUFBUSxFQUFFMEIsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURMLENBQXRCO0FBSWU3Qix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjFiNGI1M2IyMTQ1MjBmZmM4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sLCBJbnB1dCwgTWVudSwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgc2hvdyB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAvLyBjb25zdCB7bWFpblBvc3RzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3QpO1xyXG5cclxuICAvLyBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgLy8gICBjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGxheW91dCcpO1xyXG4gIC8vICAgaWYoc2hvdyl7XHJcbiAgLy8gICAgIGEuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xyXG4gIC8vICAgfWVsc2V7XHJcbiAgLy8gICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYXBwbGF5b3V0XCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VmZjJmNVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfbGVmdFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lIGZhLTJ4XCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW5cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzFhNzdmMlwiIH19XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlcl9pbnB1dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6rKA7IOJXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVweFwiLFxyXG4gICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDMsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHJpZ2h0OiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9taWRkbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9saW5rXCI+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZSBmYS0yeFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBjb2xvcjogXCIjMWE3N2YyXCIgfX1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3JpZ2h0XCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJfcHJvZmlsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDUweDUwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD03MjA2YTgmX25jX29oYz1CT3cwbm5BcnNHc0FYLWJHR0dRJl9uY19odD1zY29udGVudC5maWNuMy0yLmZuYSZvaD0xZTczY2NlZGJjYWViZWMzYzA2YThjYWNkZjk0NjAxZCZvZT02MTQ0RERBMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT57bWUubmlja25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuUmVhZF9tZXNzYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuUmVhZF9tZXNzYWdlX2ljb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlM2U2ZWFcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjggMjhcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImE4YzM3eDFqIG1zMDVzaXdzIGh3c3kxY2ZmIGI3aDlvY2Y0IGZ6ZGthanJ5XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxOHB4XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIi05cHggMHB4IDBweCAtOXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgMi4wNDJjNi43NiAwIDEyIDQuOTUyIDEyIDExLjY0UzIwLjc2IDI1LjMyMiAxNCAyNS4zMjJhMTMuMDkxIDEzLjA5MSAwIDAgMS0zLjQ3NC0uNDYxLjk1NiAuOTU2IDAgMCAwLS42NDEuMDQ3TDcuNSAyNS45NTlhLjk2MS45NjEgMCAwIDEtMS4zNDgtLjg0OWwtLjA2NS0yLjEzNGEuOTU3Ljk1NyAwIDAgMC0uMzIyLS42ODRBMTEuMzg5IDExLjM4OSAwIDAgMSAyIDEzLjY4MkMyIDYuOTk0IDcuMjQgMi4wNDIgMTQgMi4wNDJaTTYuNzk0IDE3LjA4NmEuNTcuNTcgMCAwIDAgLjgyNy43NThsMy43ODYtMi44NzRhLjcyMi43MjIgMCAwIDEgLjg2OCAwbDIuOCAyLjFhMS44IDEuOCAwIDAgMCAyLjYtLjQ4MWwzLjUyNS01LjU5MmEuNTcuNTcgMCAwIDAtLjgyNy0uNzU4bC0zLjc4NiAyLjg3NGEuNzIyLjcyMiAwIDAgMS0uODY4IDBsLTIuOC0yLjFhMS44IDEuOCAwIDAgMC0yLjYuNDgxWlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Um93IGd1dHRlcj17OH0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezV9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VySW5mb19zZWN0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiBcIjQwcHhcIiwgbGVmdDogXCI1MCVcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjM0cHhcIiwgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZpY24zLTIuZm5hLmZiY2RuLm5ldC92L3QxLjMwNDk3LTEvY3AwL3A0MHg0MC8xNDMwODY5NjhfMjg1NjM2ODkwNDYyMjE5Ml8xOTU5NzMyMjE4NzkxMTYyNDU4X24ucG5nP19uY19jYXQ9MSZjY2I9MS01Jl9uY19zaWQ9ZGJiOWU3Jl9uY19vaGM9MXJkSG9QVUZpU0FBWDlkSGUzcSZ0bj1CS0lIRXJ1ZEFsbmE3aUxvJl9uY19odD1zY29udGVudC5maWNuMy0yLmZuYSZvaD1kMDgzMWQ1ZWIwMGZlYmU1YzI1Nzc0Zjg5ODBkNDYzNiZvZT02MTQ1NTdBM1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMueHguZmJjZG4ubmV0L3JzcmMucGhwL3YzL3k4L3IvUzBVNUVDellVU3UucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuy5nOq1rDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezE0fT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezV9PlxyXG4gICAgICAgICAgey8qIOyXrOq4sOuLpOqwgOuKlCDrrZDri6Trpbjqsbgg64Sj7Ja064aT6rOgICovfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9