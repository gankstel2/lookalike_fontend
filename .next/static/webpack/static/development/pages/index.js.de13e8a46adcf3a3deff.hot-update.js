webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/contents/PostList/InsPost.js":
/*!*************************************************!*\
  !*** ./components/contents/PostList/InsPost.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_PostCommentAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/PostCommentAction */ "./redux/actions/PostCommentAction.js");
/* harmony import */ var _ListPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListPost */ "./components/contents/PostList/ListPost.js");

var _jsxFileName = "D:\\Project\\looklikepost\\components\\contents\\PostList\\InsPost.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var InsPost =
/*#__PURE__*/
function (_Component) {
  _inherits(InsPost, _Component);

  function InsPost(props) {
    var _this;

    _classCallCheck(this, InsPost);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InsPost).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHandleTextarea", function (evt) {
      var value = evt.target.value;

      _this.setState({
        data: value,
        btnLock: value.length > 0 ? false : true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTweet",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data, API_URL, raw, res, _LoadPost;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _this.state.data;
              _context.prev = 1;
              API_URL = "http://localhost:4002";
              _context.next = 5;
              return fetch("".concat(API_URL, "/Post/PostData"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "data_field=".concat(data)
              });

            case 5:
              raw = _context.sent;
              _context.next = 8;
              return raw.json();

            case 8:
              res = _context.sent;
              _LoadPost = _this.props.LoadPost;

              _LoadPost();

              _this.setState({
                data: ""
              }); // dispatch({
              //   type:'LoadPost',
              //   payload: res
              // })
              // console.log('res',res)
              //   if (res.status) {
              //     dispatch({
              //       type: actionType.PRODUCT_LOAD_ALL,
              //       payload: res.products
              //     });
              //   } else {
              //     console.log("1error", res.message);
              //   }


              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              console.log("2error :", _context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 14]]);
    })));

    _this.state = {
      data: "",
      btnLock: true
    };
    return _this;
  }

  _createClass(InsPost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount");
      var LoadPost = this.props.LoadPost;
      LoadPost();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.props.allState)
      var PostDataAll = this.props.PostDataAll; // console.log("send success",PostDataAll);
      // console.log(PostDataAll.length);

      var datalist = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");

      if (PostDataAll && PostDataAll.length > 0) {
        datalist = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListPost__WEBPACK_IMPORTED_MODULE_5__["default"], {
          massage: PostDataAll,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: "1px solid red"
        },
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: "1px solid red",
          width: "290px"
        },
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
        top: true,
        width: "100%",
        src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Card title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Card subtitle"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Some quick example text to build on the card title and make up the bulk of the card's content.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: "1px solid red",
          width: "590px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        style: {
          background: "#71c9f8"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        placeholder: "What happening?",
        style: {
          width: "100%",
          height: "100px"
        },
        value: this.state.data,
        onChange: function onChange(e) {
          return _this2.onHandleTextarea(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        disabled: this.state.btnLock,
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this2.onTweet();
        },
        style: {
          marginTop: "2px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Tweet")))), datalist)));
    }
  }]);

  return InsPost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    PostDataAll: state.PostCommentReducer.postAll
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  LoadPost: _redux_actions_PostCommentAction__WEBPACK_IMPORTED_MODULE_4__["LoadPost"]
})(InsPost));

/***/ })

})
//# sourceMappingURL=index.js.de13e8a46adcf3a3deff.hot-update.js.map