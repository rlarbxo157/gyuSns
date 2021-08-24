webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.jsx":
/*!*********************************!*\
  !*** ./components/PostForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\qwe\\nodebird3\\front\\components\\PostForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm(_ref) {
  _s();

  var onShow = _ref.onShow;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    onClick: onShow,
    className: "comment_form",
    style: {
      opacity: "1",
      position: "relative",
      top: "20px",
      height: "123px",
      backgroundColor: "white",
      padding: "15px 36px 0px 36px",
      borderRadius: "20px",
      marginBottom: "30px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "user_comment_form",
      style: {
        display: "flex",
        borderBottom: "1px solid black",
        borderColor: "#e3e6ea",
        padding: "0 0 10px 0"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        style: {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "10px"
        },
        src: "https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p50x50/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BOw0nnArsGsAX-bGGGQ&_nc_ht=scontent.ficn3-2.fna&oh=1e73ccedbcaebec3c06a8cacdf94601d&oe=6144DDA2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        placeholder: "".concat(me.nickname, " \uB2D8, \uBB34\uC2A8 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"),
        className: "comment_input",
        style: {
          width: "100%",
          borderRadius: "20px",
          height: "40px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "user_comment_emotion",
      style: {
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
        top: "10px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "user_comment_image",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
          className: "far fa-images fa-2x",
          style: {
            color: "green"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          style: {
            fontWeight: "600"
          },
          children: "\uC0AC\uC9C4/\uB3D9\uC601\uC0C1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "user_comment_emotion",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
          className: "far fa-smile-beam fa-2x",
          style: {
            color: "#f8b828"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          style: {
            fontWeight: "600"
          },
          children: "\uAE30\uBD84/\uD65C\uB3D9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(PostForm, "9V1uf3383/tS6kXOMMR8c8sBgP4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qc3giXSwibmFtZXMiOlsiUG9zdEZvcm0iLCJvblNob3ciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwib3BhY2l0eSIsInBvc2l0aW9uIiwidG9wIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJuaWNrbmFtZSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQy9CLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBRUEsc0JBQ0U7QUFDRSxXQUFPLEVBQUVKLE1BRFg7QUFFRSxhQUFTLEVBQUMsY0FGWjtBQUdFLFNBQUssRUFBRTtBQUNMSyxhQUFPLEVBQUUsR0FESjtBQUVMQyxjQUFRLEVBQUUsVUFGTDtBQUdMQyxTQUFHLEVBQUUsTUFIQTtBQUlMQyxZQUFNLEVBQUUsT0FKSDtBQUtMQyxxQkFBZSxFQUFFLE9BTFo7QUFNTEMsYUFBTyxFQUFFLG9CQU5KO0FBT0xDLGtCQUFZLEVBQUUsTUFQVDtBQVFMQyxrQkFBWSxFQUFFO0FBUlQsS0FIVDtBQUFBLDRCQWNFO0FBQ0UsZUFBUyxFQUFDLG1CQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxNQURKO0FBRUxDLG9CQUFZLEVBQUUsaUJBRlQ7QUFHTEMsbUJBQVcsRUFBRSxTQUhSO0FBSUxMLGVBQU8sRUFBRTtBQUpKLE9BRlQ7QUFBQSw4QkFTRTtBQUNFLGFBQUssRUFBRTtBQUNMTSxlQUFLLEVBQUUsTUFERjtBQUVMUixnQkFBTSxFQUFFLE1BRkg7QUFHTEcsc0JBQVksRUFBRSxLQUhUO0FBSUxNLHFCQUFXLEVBQUU7QUFKUixTQURUO0FBT0UsV0FBRyxFQUFDO0FBUE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBa0JFO0FBQ0UsbUJBQVcsWUFBS2IsRUFBRSxDQUFDYyxRQUFSLGlFQURiO0FBRUUsaUJBQVMsRUFBQyxlQUZaO0FBR0UsYUFBSyxFQUFFO0FBQUVGLGVBQUssRUFBRSxNQUFUO0FBQWlCTCxzQkFBWSxFQUFFLE1BQS9CO0FBQXVDSCxnQkFBTSxFQUFFO0FBQS9DO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRixlQXNDRTtBQUNFLGVBQVMsRUFBQyxzQkFEWjtBQUVFLFdBQUssRUFBRTtBQUNMSyxlQUFPLEVBQUUsTUFESjtBQUVMTSxzQkFBYyxFQUFFLGNBRlg7QUFHTGIsZ0JBQVEsRUFBRSxVQUhMO0FBSUxDLFdBQUcsRUFBRTtBQUpBLE9BRlQ7QUFBQSw4QkFTRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMscUJBQWI7QUFBbUMsZUFBSyxFQUFFO0FBQUVhLGlCQUFLLEVBQUU7QUFBVDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxlQUFLLEVBQUU7QUFBRUMsc0JBQVUsRUFBRTtBQUFkLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUFhRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMseUJBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRUQsaUJBQUssRUFBRTtBQUFUO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQU0sZUFBSyxFQUFFO0FBQUVDLHNCQUFVLEVBQUU7QUFBZCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQWpFRDs7R0FBTXRCLFE7VUFDV0UsdUQ7OztLQURYRixRO0FBbUVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTgyNTQ1MDAzNjM4ZTAwMmNhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0lNQUdFLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKHsgb25TaG93IH0pID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbkNsaWNrPXtvblNob3d9XHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbW1lbnRfZm9ybVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB0b3A6IFwiMjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMjNweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTVweCAzNnB4IDBweCAzNnB4XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidXNlcl9jb21tZW50X2Zvcm1cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlM2U2ZWFcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMCAwIDEwcHggMFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDUweDUwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD03MjA2YTgmX25jX29oYz1CT3cwbm5BcnNHc0FYLWJHR0dRJl9uY19odD1zY29udGVudC5maWNuMy0yLmZuYSZvaD0xZTczY2NlZGJjYWViZWMzYzA2YThjYWNkZjk0NjAxZCZvZT02MTQ0RERBMlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHttZS5uaWNrbmFtZX0g64uYLCDrrLTsiqgg7J287J20IOyeiOyXiOuCmOyalD9gfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWVudF9pbnB1dFwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlclJhZGl1czogXCIyMHB4XCIsIGhlaWdodDogXCI0MHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInVzZXJfY29tbWVudF9lbW90aW9uXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB0b3A6IFwiMTBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfY29tbWVudF9pbWFnZVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWltYWdlcyBmYS0yeFwiIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiB9fT7sgqzsp4Qv64+Z7JiB7IOBPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9jb21tZW50X2Vtb3Rpb25cIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhciBmYS1zbWlsZS1iZWFtIGZhLTJ4XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2Y4YjgyOFwiIH19XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiB9fT7quLDrtoQv7Zmc64+ZPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==