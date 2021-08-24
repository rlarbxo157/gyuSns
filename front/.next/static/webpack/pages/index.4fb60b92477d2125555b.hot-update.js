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
        className: "K-1uj Z7p_S",
        style: {
          margin: "10px 40px 18px",
          display: "flex"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "s311c",
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
          className: "_0tv-g",
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
          className: "s311c",
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
        className: "sqdOP yWX7d y3zKF",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsInBvc2l0aW9uIiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwidG9wIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLHFCQUFxQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBaEQ7QUFBQSxNQUFRQyxZQUFSLGdCQUFRQSxZQUFSO0FBQUEsTUFBc0JDLFVBQXRCLGdCQUFzQkEsVUFBdEI7O0FBQ0Esa0JBQStCQywrREFBUSxDQUFDLEVBQUQsQ0FBdkM7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxhQUFkOztBQUNBLG1CQUFxQ0YsK0RBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUE7QUFB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Q0FISDtBQUlMVix5QkFBZSxFQUFFO0FBSlosU0FIVDtBQUFBLGdDQVVFO0FBQUcsZUFBSyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQVdFO0FBQU0sbUJBQVMsRUFBQyxPQUFoQjtBQUF3QixlQUFLLEVBQUU7QUFBRU0saUJBQUssRUFBRSxTQUFUO0FBQW9CRyxzQkFBVSxFQUFFO0FBQWhDLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5HRixlQWtIRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEhGLGVBbUhFO0FBQUssYUFBSyxFQUFFO0FBQUVqQixlQUFLLEVBQUU7QUFBVCxTQUFaO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UscUVBQUMsMkNBQUQ7QUFBUSxtQkFBSyxFQUFFO0FBQUVBLHFCQUFLLEVBQUUsTUFBVDtBQUFpQkMsc0JBQU0sRUFBRTtBQUF6QixlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlJRCxDQTlKRDs7R0FBTW5CLFM7VUFDaUNDLHVELEVBQ05LLHVELEVBQ01BLHVELEVBQ3BCTSx1RDs7O0tBSmJaLFM7QUFnS1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmYjYwYjkyNDc3ZDIxMjU1NTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2dJbkVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBsb2dpblJlcXVlc3RBY3Rpb24oe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvbkZpbmlzaD17b25TdWJtaXRGb3JtfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidG90YWxGb3JtXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbwg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPiAqL31cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFmYWZhXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgbG9hZGluZz17bG9nSW5Mb2FkaW5nfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIzNnB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJLLTF1aiBaN3BfU1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCA0MHB4IDE4cHhcIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInMzMTFjXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2RiZGJkYlwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgICAgZmxleFNocmluazogMSxcclxuICAgICAgICAgICAgICB0b3A6IFwiLjQ1ZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXzB0di1nXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjOGU4ZThlXCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIDE4cHhcIixcclxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgT1JcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzMzExY1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkYmRiZGJcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICAgIGZsZXhTaHJpbms6IDEsXHJcbiAgICAgICAgICAgICAgdG9wOiBcIi40NWVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3FkT1AgeVdYN2QgeTN6S0ZcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmVcIj48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJLUG5HMFwiIHN0eWxlPXt7IGNvbG9yOiBcIiMzODUxODVcIiwgZm9udFdlaWdodDogNjAwIH19PlxyXG4gICAgICAgICAgICBGYWNlYm9va+ycvOuhnCDroZzqt7jsnbhcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMzZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==