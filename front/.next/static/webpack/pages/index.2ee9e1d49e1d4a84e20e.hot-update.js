webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCreatedForm.jsx":
/*!****************************************!*\
  !*** ./components/PostCreatedForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\qwe\\nodebird3\\front\\components\\PostCreatedForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var PostCreatedForm = function PostCreatedForm(_ref) {
  _s();

  var onShow = _ref.onShow;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      text = _useState[0],
      setText = _useState[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector3.imagePaths,
      addPostDone = _useSelector3.addPostDone;

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    // console.log('images', e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append("image", f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (i) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_IMAGE"],
        data: i
      });
    };
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (!text || !text.trim()) {
      return alert("게시글을 입력해주세요");
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append("image", p);
    });
    formData.append("content", text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: formData
    }); // dispatch(addPost(text));
  }, [text, imagePaths]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "postCreatedForm",
    style: {
      width: "400px",
      height: "328px",
      backgroundColor: "white",
      borderRadius: "15px",
      boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "postCreatedForm_top",
      style: {
        height: "60px",
        borderBottom: "1px solid black",
        borderColor: "#e3e6ea",
        padding: "0 0 10px 0"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        style: {
          position: "relative",
          top: "50%",
          display: "flex",
          alignItems: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            fontSize: "16px",
            fontWeight: "600",
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto"
          },
          children: "\uAC8C\uC2DC\uBB3C \uB9CC\uB4E4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
          onClick: onShow,
          className: "fas fa-times fa-lg",
          style: {
            position: "relative",
            right: "20px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "postCreatedForm_middle",
      style: {
        padding: "20px 10px 0 10px",
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
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
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          style: {
            fontWeight: "600"
          },
          children: me.nickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        encType: "multipart/form-data",
        onFinish: onSubmit,
        style: {
          height: "200px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
          value: text,
          onChange: onChangeText,
          maxLength: 140,
          placeholder: "".concat(me.nickname, "\uB2D8, \uC5B4\uB5A4 \uC990\uAC70\uC6B4 \uC77C\uC774 \uC788\uC73C\uC168\uB098\uC694?"),
          style: {
            borderRadius: "20px",
            marginBottom: "10px",
            height: "80px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            marginBottom: "10px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "file",
            name: "image",
            multiple: true,
            hidden: true,
            ref: imageInput,
            onChange: onChangeImages
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              border: "1px solid black",
              borderRadius: "10px",
              height: "38px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
              style: {
                fontSize: "12px",
                fontWeight: "600",
                position: "relative",
                left: "10px"
              },
              children: "\uAC8C\uC2DC\uBB3C\uC5D0 \uCD94\uAC00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: onClickImageUpload,
              style: {
                position: "relative",
                border: "none",
                right: "10px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                className: "far fa-images fa-2x",
                style: {
                  color: "green"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "primary",
            style: {
              float: "right",
              position: "relative",
              width: "100%",
              top: "10px",
              borderRadius: "10px"
            },
            htmlType: "submit",
            children: "\uAC8C\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: imagePaths.map(function (v, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              style: {
                display: "inline-block"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                src: "http://localhost:3065/".concat(v),
                style: {
                  width: "100%"
                },
                alt: v
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  onClick: onRemoveImage(i),
                  children: "\uC81C\uAC70"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, _this)]
            }, v, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s(PostCreatedForm, "S+rZ5f2GglXVxOgzuKXKqt+HWyU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = PostCreatedForm;
/* harmony default export */ __webpack_exports__["default"] = (PostCreatedForm);

var _c;

$RefreshReg$(_c, "PostCreatedForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q3JlYXRlZEZvcm0uanN4Il0sIm5hbWVzIjpbIlBvc3RDcmVhdGVkRm9ybSIsIm9uU2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJzaG93Iiwic2V0U2hvdyIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VUZXh0IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvblJlbW92ZUltYWdlIiwiaSIsIlJFTU9WRV9JTUFHRSIsIm9uU3VibWl0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInJpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0IiwiY29s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eC4yZWU5ZTFkNDllMWQ0YTg0ZTIwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFJFTU9WRV9JTUFHRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5jb25zdCBQb3N0Q3JlYXRlZEZvcm0gPSAoeyBvblNob3cgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChpKSA9PiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgZGF0YTogaSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwi6rKM7Iuc6riA7J2EIOyeheugpe2VtOyjvOyEuOyalFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgcCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb250ZW50XCIsIHRleHQpO1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gZGlzcGF0Y2goYWRkUG9zdCh0ZXh0KSk7XHJcbiAgICB9LFxyXG4gICAgW3RleHQsIGltYWdlUGF0aHNdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicG9zdENyZWF0ZWRGb3JtXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIzMjhweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcInJnYmEoMCwwLDAsMC4zNSkgMHB4IDVweCAxNXB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0Q3JlYXRlZEZvcm1fdG9wXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcclxuICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlM2U2ZWFcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMCAwIDEwcHggMFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOqyjOyLnOusvCDrp4zrk6TquLBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgb25DbGljaz17b25TaG93fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmEtbGdcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCByaWdodDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9zdENyZWF0ZWRGb3JtX21pZGRsZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMjBweCAxMHB4IDAgMTBweFwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZmljbjMtMi5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jcDAvcDUweDUwLzE0MzA4Njk2OF8yODU2MzY4OTA0NjIyMTkyXzE5NTk3MzIyMTg3OTExNjI0NThfbi5wbmc/X25jX2NhdD0xJmNjYj0xLTUmX25jX3NpZD03MjA2YTgmX25jX29oYz1CT3cwbm5BcnNHc0FYLWJHR0dRJl9uY19odD1zY29udGVudC5maWNuMy0yLmZuYSZvaD0xZTczY2NlZGJjYWViZWMzYzA2YThjYWNkZjk0NjAxZCZvZT02MTQ0RERBMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiB9fT57bWUubmlja25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake21lLm5pY2tuYW1lfeuLmCwg7Ja065akIOymkOqxsOyatCDsnbzsnbQg7J6I7Jy87IWo64KY7JqUP2B9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCI4MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDqsozsi5zrrLzsl5Ag7LaU6rCAXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGJvcmRlcjogXCJub25lXCIsIHJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhciBmYS1pbWFnZXMgZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOqyjOyLnFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17dn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q3JlYXRlZEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=