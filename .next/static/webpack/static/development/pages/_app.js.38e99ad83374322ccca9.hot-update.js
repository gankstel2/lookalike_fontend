webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/PostCommentReducer.js":
/*!**********************************************!*\
  !*** ./redux/reducers/PostCommentReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import actionType from "../actions/PostCommentAction";
var init = {
  postAll: []
};

var ProductsReducer = function ProductsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newStage = Object.assign({}, state); //shadow Copy ==> newStage จะมี state ทั้งที่ถูก assign และ ค่าเดิม

  switch (action.type) {
    case "LoadPost":
      newStage.postAll = action.payload;
      return newStage;

    case "AddPost":
      newStage = action.payload;
      return newStage;

    case "SelectDataUser":
      newStage = action.payload;
      return newStage;

    case "EditPost":
      newStage = action.payload;
      return newStage;

    case "DelPost":
      newStage = action.payload;
      return newStage;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsReducer);

/***/ })

})
//# sourceMappingURL=_app.js.38e99ad83374322ccca9.hot-update.js.map