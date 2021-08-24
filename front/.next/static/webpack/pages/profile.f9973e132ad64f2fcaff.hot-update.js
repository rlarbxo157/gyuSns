webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.jsx":
/*!*****************************************!*\
  !*** ./components/NicknameEditForm.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\qwe\\nodebird3\\front\\components\\NicknameEditForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var NicknameEditForm = function NicknameEditForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]); // const onSubmit = useCallback(()=>{
  //   dispatch(changeNicknameRequestAction({
  //     type:CHANGE_NICKNAME_REQUEST,
  //     data:nickname
  //   }))
  // },[nickname])

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
      backgroundColor: "white"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815",
      onChange: onChangeNickname,
      value: nickname,
      onSearch: onSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(NicknameEditForm, "N7qq+s3xxzry3hENaoydffT6TQU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = NicknameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzeCJdLCJuYW1lcyI6WyJOaWNrbmFtZUVkaXRGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUlucHV0Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM3QixxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLGtCQUFxQ0MsK0RBQVEsQ0FBQyxDQUFBRCxFQUFFLFNBQUYsSUFBQUEsRUFBRSxXQUFGLFlBQUFBLEVBQUUsQ0FBRUUsUUFBSixLQUFnQixFQUFqQixDQUE3QztBQUFBO0FBQUEsTUFBT0EsUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDSCxZQUFRLENBQUM7QUFDUEksVUFBSSxFQUFFQyxzRUFEQztBQUVQQyxVQUFJLEVBQUVSO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMMkIsRUFLekIsQ0FBQ0EsUUFBRCxDQUx5QixDQUE1QixDQUw2QixDQVk3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0UscUVBQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTFMsa0JBQVksRUFBRSxNQURUO0FBRUxDLFlBQU0sRUFBRSxtQkFGSDtBQUdMQyxhQUFPLEVBQUUsTUFISjtBQUlMQyxxQkFBZSxFQUFFO0FBSlosS0FEVDtBQUFBLDJCQVFFLHFFQUFDLDBDQUFELENBQU8sTUFBUDtBQUNFLGlCQUFXLEVBQUMsb0JBRGQ7QUFFRSxpQkFBVyxFQUFDLGNBRmQ7QUFHRSxjQUFRLEVBQUVYLGdCQUhaO0FBSUUsV0FBSyxFQUFFRCxRQUpUO0FBS0UsY0FBUSxFQUFFSTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0FyQ0Q7O0dBQU1WLGdCO1VBQ1dDLHVELEVBQ3NCSSx1RCxFQUNwQkksdUQ7OztLQUhiVCxnQjtBQXVDU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mOTk3M2UxMzJhZDY0ZjJmY2FmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VOaWNrbmFtZVJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgTmlja25hbWVFZGl0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChtZT8ubmlja25hbWUgfHwgXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IG5pY2tuYW1lLFxyXG4gICAgfSk7XHJcbiAgfSwgW25pY2tuYW1lXSk7XHJcblxyXG4gIC8vIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAvLyAgIGRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbih7XHJcbiAgLy8gICAgIHR5cGU6Q0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgLy8gICAgIGRhdGE6bmlja25hbWVcclxuICAvLyAgIH0pKVxyXG4gIC8vIH0sW25pY2tuYW1lXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkOWQ5ZDlcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPElucHV0LlNlYXJjaFxyXG4gICAgICAgIGFkZG9uQmVmb3JlPVwi64uJ64Sk7J6EXCJcclxuICAgICAgICBlbnRlckJ1dHRvbj1cIuyImOyglVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgIG9uU2VhcmNoPXtvblN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlja25hbWVFZGl0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==