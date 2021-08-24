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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostCreatedForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCreatedForm */ "./components/PostCreatedForm.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
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

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector2.imagePaths,
      addPostDone = _useSelector2.addPostDone;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      text = _useState2[0],
      setText = _useState2[1];

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector3.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
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
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  }, []);
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
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
      type: ADD_POST_REQUEST,
      data: formData
    });
  }, [text, imagePaths]);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (i) {
    return function () {
      dispatch({
        type: REMOVE_IMAGE,
        data: i
      });
    };
  }, []);
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
    }); // console.log(show);
    // console.log('a');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: show,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onShow: onShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostCreatedForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onShow: onShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        position: "relative",
        top: "30px"
      },
      children: mainPosts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          post: post
        }, post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, _this);
};

_s(LandingPage, "vf7HznyezoOzX6ALge0GU3UM8Js=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTGFuZGluZ1BhZ2UuanN4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsInRleHQiLCJzZXRUZXh0IiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VyIiwibWUiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwidGFyZ2V0IiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvbkNoYW5nZVRleHQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpIiwiUkVNT1ZFX0lNQUdFIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiaWQiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uU2hvdyIsInByZXYiLCJwb3NpdGlvbiIsInRvcCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FB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QVg7QUFBQSxLQUFELENBQVAsQ0FEbUIsQ0FFbkI7QUFDQTtBQUNELEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsNkRBQUQ7QUFBVyxRQUFJLEVBQUV2RCxJQUFqQjtBQUFBLDRCQUNFLHFFQUFDLDREQUFEO0FBQVUsWUFBTSxFQUFFc0Q7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUd0RCxJQUFJLGdCQUFHLHFFQUFDLG1FQUFEO0FBQWlCLFlBQU0sRUFBRXNEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxHQUF5QyxJQUZoRCxlQUdFO0FBQUssV0FBSyxFQUFFO0FBQUVFLGdCQUFRLEVBQUUsVUFBWjtBQUF3QkMsV0FBRyxFQUFFO0FBQTdCLE9BQVo7QUFBQSxnQkFDRzdELFNBQVMsQ0FBQzhELEdBQVYsQ0FBYyxVQUFDL0QsSUFBRDtBQUFBLDRCQUNiLHFFQUFDLDREQUFEO0FBQXdCLGNBQUksRUFBRUE7QUFBOUIsV0FBZUEsSUFBSSxDQUFDdUQsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQXZHRDs7R0FBTTFELFc7VUFDa0RDLHVELEVBSWxCQSx1RCxFQUduQmdCLHVELEVBQ0ZoQix1RDs7O0tBVFhELFc7O0FBNkhTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzcwNDAzYTQ3YjdkMTk4NDNlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQb3N0Q3JlYXRlZEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENyZWF0ZWRGb3JtXCI7XHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkUG9zdERvbmUpIHtcclxuICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgIH1cclxuICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoXCLqsozsi5zquIDsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBwKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgdGV4dCk7XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW3RleHQsIGltYWdlUGF0aHNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGkpID0+ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgICBkYXRhOiBpLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZDtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBsYXN0SWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgbWFpblBvc3RzXSk7XHJcblxyXG4gIGNvbnN0IG9uU2hvdyA9ICgpID0+IHtcclxuICAgIHNldFNob3coKHByZXYpID0+ICFwcmV2KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNob3cpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2EnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dCBzaG93PXtzaG93fT5cclxuICAgICAgPFBvc3RGb3JtIG9uU2hvdz17b25TaG93fSAvPlxyXG4gICAgICB7c2hvdyA/IDxQb3N0Q3JlYXRlZEZvcm0gb25TaG93PXtvblNob3d9IC8+IDogbnVsbH1cclxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXHJcbiAgKHN0b3JlKSA9PlxyXG4gICAgYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXEuaGVhZGVycyk7XHJcbiAgICAgIGNvbnN0IGNvb2tpZSA9IHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSA6IFwiXCI7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gXCJcIjtcclxuICAgICAgaWYgKHJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgICAgfVxyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgICAgYXdhaXQgc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==