webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.jsx":
/*!***************************!*\
  !*** ./pages/profile.jsx ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.jsx");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.jsx");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.jsx");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.jsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\qwe\\nodebird3\\front\\pages\\profile.jsx",
    _this = undefined,
    _s = $RefreshSig$();










 // import useSWR from 'swr';
// const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);




var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWERS_REQUEST"]
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWINGS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return "내 정보 로딩중...";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "\uD504\uB85C\uD544"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
        data: me.Followings
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
        data: me.Followers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), me.Posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_9__["default"], {}, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Profile, "fbnKT8L8lz2gO63V5O/0N0ZqJVA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qc3giXSwibmFtZXMiOlsiUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsImlkIiwiUm91dGVyIiwicHVzaCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJQb3N0cyIsIm1hcCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Q0FHQTtBQUVBOzs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZE4sWUFBUSxDQUFDO0FBQ1BPLFVBQUksRUFBRUMscUVBQXNCQTtBQURyQixLQUFELENBQVI7QUFHQVIsWUFBUSxDQUFDO0FBQ1BPLFVBQUksRUFBRUUsc0VBQXVCQTtBQUR0QixLQUFELENBQVI7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0FILHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksRUFBRUQsRUFBRSxJQUFJQSxFQUFFLENBQUNLLEVBQVgsQ0FBSixFQUFvQjtBQUNsQkMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDUCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0ssRUFBVixDQUpNLENBQVQ7O0FBTUEsTUFBSSxDQUFDTCxFQUFMLEVBQVM7QUFDUCxXQUFPLGFBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFLHNFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxzRUFBQyw2REFBRDtBQUFBLDhCQUNFLHNFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHNFQUFDLDhEQUFEO0FBQVksY0FBTSxFQUFDLGlDQUFuQjtBQUE0QixZQUFJLEVBQUVBLEVBQUUsQ0FBQ1E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0Usc0VBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsaUNBQW5CO0FBQTRCLFlBQUksRUFBRVIsRUFBRSxDQUFDUztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsRUFJR1QsRUFBRSxDQUFDVSxLQUFILENBQVNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1osc0VBQUMsNERBQUQsTUFBZUEsSUFBSSxDQUFDUCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFlRCxDQXJDRDs7R0FBTVgsTztVQUNhRSx1RCxFQUNGQyx1RDs7O0tBRlhILE87O0FBMERTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjdlNmEwZTc2ZjJmNDYzYjE1NjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm1cIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9sbG93TGlzdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcblxyXG4vLyBpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG4vLyBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgaWYgKCFtZSkge1xyXG4gICAgcmV0dXJuIFwi64K0IOygleuztCDroZzrlKnspJEuLi5cIjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7tlITroZztlYQ8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnokg66qp66GdXCIgZGF0YT17bWUuRm9sbG93aW5nc30gLz5cclxuICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17bWUuRm9sbG93ZXJzfSAvPlxyXG4gICAgICAgIHttZS5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICAoc3RvcmUpID0+XHJcbiAgICBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgc3RhcnQnKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVxLmhlYWRlcnMpO1xyXG4gICAgICBjb25zdCBjb29raWUgPSByZXEgPyByZXEuaGVhZGVycy5jb29raWUgOiBcIlwiO1xyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IFwiXCI7XHJcbiAgICAgIGlmIChyZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICAgIH1cclxuICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBlbmQnKTtcclxuICAgICAgYXdhaXQgc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9