webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/LandingPage.jsx":
/*!*******************************!*\
  !*** ./pages/LandingPage.jsx ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.jsx");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.jsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.jsx");
/* harmony import */ var _components_PostCreatedForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostCreatedForm */ "./components/PostCreatedForm.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\qwe\\nodebird3\\front\\pages\\LandingPage.jsx",
    _this = undefined,
    _s = $RefreshSig$();










var LandingPage = function LandingPage() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"],
            lastId: lastId
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  var onShow = function onShow() {
    setShow(function (prev) {
      return !prev;
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: show,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onShow: onShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostCreatedForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onShow: onShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        position: "relative",
        top: "30px"
      },
      children: mainPosts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(LandingPage, "Wm8zdbYey/qSF7ftSc2FpaZ0UHA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = LandingPage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

$RefreshReg$(_c, "LandingPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTGFuZGluZ1BhZ2UuanN4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJvblNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uU2hvdyIsInByZXYiLCJwb3NpdGlvbiIsInRvcCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixxQkFBc0RDLCtEQUFXLENBQy9ELFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FEK0QsQ0FBakU7QUFBQSxNQUFRQyxTQUFSLGdCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFlBQW5CLGdCQUFtQkEsWUFBbkI7QUFBQSxNQUFpQ0MsZ0JBQWpDLGdCQUFpQ0EsZ0JBQWpDOztBQUdBLGtCQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFVBQ0VDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUE5QyxHQUNBRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBRjFDLEVBR0U7QUFDQSxZQUFJZCxZQUFZLElBQUksQ0FBQ0MsZ0JBQXJCLEVBQXVDO0FBQUE7O0FBQ3JDLGNBQU1jLE1BQU0saUJBQUdoQixTQUFTLENBQUNBLFNBQVMsQ0FBQ2lCLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBWiwrQ0FBRyxXQUFpQ0MsRUFBaEQ7QUFDQVosa0JBQVEsQ0FBQztBQUNQYSxnQkFBSSxFQUFFQyxpRUFEQztBQUVQSixrQkFBTSxFQUFOQTtBQUZPLFdBQUQsQ0FBUjtBQUlEO0FBQ0Y7QUFDRjs7QUFDRE4sVUFBTSxDQUFDVyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1osUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEMsWUFBTSxDQUFDWSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2IsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FuQlEsRUFtQk4sQ0FBQ1IsWUFBRCxFQUFlQyxnQkFBZixFQUFpQ0YsU0FBakMsQ0FuQk0sQ0FBVDs7QUFxQkEsTUFBTXVCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJsQixXQUFPLENBQUMsVUFBQ21CLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLDZEQUFEO0FBQVcsUUFBSSxFQUFFcEIsSUFBakI7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUFVLFlBQU0sRUFBRW1CO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHbkIsSUFBSSxnQkFBRyxxRUFBQyxtRUFBRDtBQUFpQixZQUFNLEVBQUVtQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBeUMsSUFGaEQsZUFHRTtBQUFLLFdBQUssRUFBRTtBQUFFRSxnQkFBUSxFQUFFLFVBQVo7QUFBd0JDLFdBQUcsRUFBRTtBQUE3QixPQUFaO0FBQUEsZ0JBQ0cxQixTQUFTLENBQUMyQixHQUFWLENBQWMsVUFBQzVCLElBQUQ7QUFBQSw0QkFDYixxRUFBQyw0REFBRDtBQUF3QixjQUFJLEVBQUVBO0FBQTlCLFdBQWVBLElBQUksQ0FBQ21CLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0EzQ0Q7O0dBQU10QixXO1VBQ2tEQyx1RCxFQUlyQ1UsdUQ7OztLQUxiWCxXOztBQWlFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmU5Yjc5OTk1ZjM1YWY1ZTYyMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBQb3N0Q3JlYXRlZEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENyZWF0ZWRGb3JtXCI7XHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCBtYWluUG9zdHNdKTtcclxuXHJcbiAgY29uc3Qgb25TaG93ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvdygocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0IHNob3c9e3Nob3d9PlxyXG4gICAgICA8UG9zdEZvcm0gb25TaG93PXtvblNob3d9IC8+XHJcbiAgICAgIHtzaG93ID8gPFBvc3RDcmVhdGVkRm9ybSBvblNob3c9e29uU2hvd30gLz4gOiBudWxsfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICAoc3RvcmUpID0+XHJcbiAgICBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzKTtcclxuICAgICAgY29uc3QgY29va2llID0gcmVxID8gcmVxLmhlYWRlcnMuY29va2llIDogXCJcIjtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBcIlwiO1xyXG4gICAgICBpZiAocmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgICB9XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgICAgfSk7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9