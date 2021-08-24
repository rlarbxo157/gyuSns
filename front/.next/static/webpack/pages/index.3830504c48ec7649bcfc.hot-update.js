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
    });
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
          lineNumber: 94,
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
          lineNumber: 105,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          style: {
            fontWeight: "600"
          },
          children: me.nickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        encType: "multipart/form-data",
        onFinish: onSubmit,
        style: {
          height: "200px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
          lineNumber: 138,
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
            lineNumber: 150,
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
              lineNumber: 168,
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
                lineNumber: 182,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
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
            lineNumber: 188,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
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
                lineNumber: 205,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  onClick: onRemoveImage(i),
                  children: "\uC81C\uAC70"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, _this)]
            }, v, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q3JlYXRlZEZvcm0uanN4Il0sIm5hbWVzIjpbIlBvc3RDcmVhdGVkRm9ybSIsIm9uU2hvdyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJzaG93Iiwic2V0U2hvdyIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VUZXh0IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvblJlbW92ZUltYWdlIiwiaSIsIlJFTU9WRV9JTUFHRSIsIm9uU3VibWl0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInJpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0IiwiY29s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OGVjNzY0OWJjZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBSRU1PVkVfSU1BR0UsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuY29uc3QgUG9zdENyZWF0ZWRGb3JtID0gKHsgb25TaG93IH0pID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoaSkgPT4gKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICAgIGRhdGE6IGksXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChcIuqyjOyLnOq4gOydhCDsnoXroKXtlbTso7zshLjsmpRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIHApO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCB0ZXh0KTtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbdGV4dCwgaW1hZ2VQYXRoc11cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJwb3N0Q3JlYXRlZEZvcm1cIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMyOHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLDAsMCwwLjM1KSAwcHggNXB4IDE1cHhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInBvc3RDcmVhdGVkRm9ybV90b3BcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNjBweFwiLFxyXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2UzZTZlYVwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIwIDAgMTBweCAwXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg6rKM7Iuc66y8IOunjOuTpOq4sFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblNob3d9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYS1sZ1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHJpZ2h0OiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJwb3N0Q3JlYXRlZEZvcm1fbWlkZGxlXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4IDEwcHggMCAxMHB4XCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5maWNuMy0yLmZuYS5mYmNkbi5uZXQvdi90MS4zMDQ5Ny0xL2NwMC9wNTB4NTAvMTQzMDg2OTY4XzI4NTYzNjg5MDQ2MjIxOTJfMTk1OTczMjIxODc5MTE2MjQ1OF9uLnBuZz9fbmNfY2F0PTEmY2NiPTEtNSZfbmNfc2lkPTcyMDZhOCZfbmNfb2hjPUJPdzBubkFyc0dzQVgtYkdHR1EmX25jX2h0PXNjb250ZW50LmZpY24zLTIuZm5hJm9oPTFlNzNjY2VkYmNhZWJlYzNjMDZhOGNhY2RmOTQ2MDFkJm9lPTYxNDREREEyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjYwMFwiIH19PnttZS5uaWNrbmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XHJcbiAgICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7bWUubmlja25hbWV964uYLCDslrTrlqQg7KaQ6rGw7Jq0IOydvOydtCDsnojsnLzshajrgpjsmpQ/YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM4cHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgbGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOqyjOyLnOusvOyXkCDstpTqsIBcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgcmlnaHQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFyIGZhLWltYWdlcyBmYS0yeFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX1cclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIHRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXt2fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDcmVhdGVkRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==