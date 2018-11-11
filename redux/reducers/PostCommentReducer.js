// import actionType from "../actions/PostCommentAction";

const init = {
  postAll: [],
  dataOnEdit:''
};

const ProductsReducer = (state = [], action) => {
  let newStage = Object.assign({}, state); //shadow Copy ==> newStage จะมี state ทั้งที่ถูก assign และ ค่าเดิม

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

export default ProductsReducer;
