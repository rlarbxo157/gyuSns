webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.jsx":
/*!**********************************!*\
  !*** ./components/LoginForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\qwe\\nodebird3\\front\\components\\LoginForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var LoginForm = function LoginForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      logInLoading = _useSelector.logInLoading,
      logInError = _useSelector.logInError;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["loginRequestAction"])({
      email: email,
      password: password
    }));
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitForm,
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "totalForm",
      style: {
        padding: "10px",
        margin: "0",
        display: "flex",
        width: "80%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "user-id",
          placeholder: "\uC774\uBA54\uC77C \uC785\uB825\uD574\uC8FC\uC138\uC694",
          style: {
            width: "100%",
            height: "36px",
            backgroundColor: "#fafafa"
          },
          value: email,
          onChange: onChangeEmail,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "user-password",
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          style: {
            width: "100%",
            height: "36px",
            backgroundColor: "#fafafa"
          },
          value: password,
          onChange: onChangePassword,
          type: "password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          marginTop: "10px",
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: logInLoading,
          style: {
            width: "100%",
            height: "36px"
          },
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        class: "K-1uj Z7p_S",
        style: {
          margin: "10px 40px 18px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          class: "s311c",
          style: {
            backgroundColor: "#dbdbdb",
            height: "1px",
            width: "100px",
            position: "relative",
            flexGrow: 1,
            flexShrink: 1,
            top: ".45em"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          class: "_0tv-g",
          style: {
            color: "#8e8e8e",
            fontSize: "13px",
            margin: "0 18px",
            textTransform: "uppercase",
            fontWeight: 600
          },
          children: "OR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          class: "s311c",
          style: {
            backgroundColor: "#dbdbdb",
            height: "1px",
            width: "100px",
            position: "relative",
            flexGrow: 1,
            flexShrink: 1,
            top: ".45em"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        class: "sqdOP yWX7d y3zKF",
        type: "button",
        style: {
          display: "inline",
          position: "relative",
          border: 0,
          backgroundColor: "white"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
          class: "fab fa-facebook-square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
          className: "KPnG0",
          style: {
            color: "#385185",
            fontWeight: 600
          },
          children: "Facebook\uC73C\uB85C \uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              style: {
                width: "100%",
                height: "36px"
              },
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "9Z1e1axYSPfiVffbZOpHGQg9BEk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsInBvc2l0aW9uIiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwidG9wIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLHFCQUFxQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBaEQ7QUFBQSxNQUFRQyxZQUFSLGdCQUFRQSxZQUFSO0FBQUEsTUFBc0JDLFVBQXRCLGdCQUFzQkEsVUFBdEI7O0FBQ0Esa0JBQStCQywrREFBUSxDQUFDLEVBQUQsQ0FBdkM7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxhQUFkOztBQUNBLG1CQUFxQ0YsK0RBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUE7QUFB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QUFJTFYseUJBQWUsRUFBRTtBQUpaLFNBSFQ7QUFBQSxnQ0FVRTtBQUFHLGVBQUssRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRTtBQUFNLG1CQUFTLEVBQUMsT0FBaEI7QUFBd0IsZUFBSyxFQUFFO0FBQUVNLGlCQUFLLEVBQUUsU0FBVDtBQUFvQkcsc0JBQVUsRUFBRTtBQUFoQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuR0YsZUFrSEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxIRixlQW1IRTtBQUFLLGFBQUssRUFBRTtBQUFFakIsZUFBSyxFQUFFO0FBQVQsU0FBWjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFLHFFQUFDLDJDQUFEO0FBQVEsbUJBQUssRUFBRTtBQUFFQSxxQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLHNCQUFNLEVBQUU7QUFBekIsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5IRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5SUQsQ0E5SkQ7O0dBQU1uQixTO1VBQ2lDQyx1RCxFQUNOSyx1RCxFQUNNQSx1RCxFQUNwQk0sdUQ7OztLQUpiWixTO0FBZ0tTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MGU0NzU0NWZjZTZiNTA4OTcxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgbG9naW5SZXF1ZXN0QWN0aW9uKHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgb25GaW5pc2g9e29uU3VibWl0Rm9ybX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRvdGFsRm9ybVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J28IOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzNnB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD4gKi99XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvZ0luTG9hZGluZ31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMzZweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJLLTF1aiBaN3BfU1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCA0MHB4IDE4cHhcIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiczMxMWNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZGJkYmRiXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjFweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAxLFxyXG4gICAgICAgICAgICAgIHRvcDogXCIuNDVlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cIl8wdHYtZ1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzhlOGU4ZVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxOHB4XCIsXHJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE9SXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJzMzExY1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDEsXHJcbiAgICAgICAgICAgICAgdG9wOiBcIi40NWVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJzcWRPUCB5V1g3ZCB5M3pLRlwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIktQbkcwXCIgc3R5bGU9e3sgY29sb3I6IFwiIzM4NTE4NVwiLCBmb250V2VpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAgICAgIEZhY2Vib29r7Jy866GcIOuhnOq3uOyduFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIzNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9