webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/PostCommentAction.js":
/*!********************************************!*\
  !*** ./redux/actions/PostCommentAction.js ***!
  \********************************************/
/*! exports provided: LoadPost, DelPost, EditPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPost", function() { return LoadPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelPost", function() { return DelPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPost", function() { return EditPost; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import 'isomorphic-unfetch'
var LoadPost = function LoadPost() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var API_URL, raw, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                API_URL = "http://localhost:4002";
                _context.next = 4;
                return fetch("".concat(API_URL, "/Post/loadUsers"), {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                });

              case 4:
                raw = _context.sent;
                _context.next = 7;
                return raw.json();

              case 7:
                res = _context.sent;
                dispatch({
                  type: "LoadPost",
                  payload: res
                });
                console.log("res", res); //   if (res.status) {
                //     dispatch({
                //       type: actionType.PRODUCT_LOAD_ALL,
                //       payload: res.products
                //     });
                //   } else {
                //     console.log("1error", res.message);
                //   }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.log("error :", _context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var EditPost = function EditPost(id, data_field) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var API_URL, raw, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                API_URL = "http://localhost:4002";
                _context2.next = 4;
                return fetch("".concat(API_URL, "/Post/delData?id=").concat(id), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                });

              case 4:
                raw = _context2.sent;
                _context2.next = 7;
                return raw.json();

              case 7:
                res = _context2.sent;
                LoadPost();
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log("errorEdit :", _context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var DelPost = function DelPost(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var API_URL, raw, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                API_URL = "http://localhost:4002";
                _context3.next = 4;
                return fetch("".concat(API_URL, "/Post/delData?id=").concat(id), {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                });

              case 4:
                raw = _context3.sent;
                _context3.next = 7;
                return raw.json();

              case 7:
                res = _context3.sent;
                LoadPost();
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                console.log("errordel :", _context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};



/***/ })

})
//# sourceMappingURL=index.js.af0df1f456a19f895da5.hot-update.js.map