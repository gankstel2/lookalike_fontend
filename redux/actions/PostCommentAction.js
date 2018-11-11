// import 'isomorphic-unfetch'

const LoadPost = () => {
  return async dispatch => {
    try {
      const API_URL = "http://localhost:4002";

      const raw = await fetch(`${API_URL}/Post/loadUsers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      let res = await raw.json();

      dispatch({
        type: "LoadPost",
        payload: res
      });

      console.log("res", res);
      //   if (res.status) {
      //     dispatch({
      //       type: actionType.PRODUCT_LOAD_ALL,
      //       payload: res.products
      //     });
      //   } else {
      //     console.log("1error", res.message);
      //   }
    } catch (error) {
      console.log("error :", error);
    }

    // dispatch({
    //     type:'LoadPost',
    //     payload:  [
    //         { id: "1", value: "test01", by_user: "xxxx" },
    //         { id: "2", value: "test02", by_user: "aaaa" },
    //         { id: "3", value: "test03", by_user: "bbbb" }
    //       ]
    //   })
  };
};
const SelectDataUser = (id) => {
  return dispatch =>{
    try {
        
        
    } catch (error) {
        console.log("errorEdit :", error);
    }
  }
}

const EditPost =  (id, data_field) => {
  return async dispatch => {
    try {
      const API_URL = "http://localhost:4002";

      const raw = await fetch(`${API_URL}/Post/updateData?id=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      let res = await raw.json();
      LoadPost();

    } catch (error) {
      console.log("errorEdit :", error);
    }
  };
};

const DelPost = id => {
  return async dispatch => {
    try {
      const API_URL = "http://localhost:4002";

      const raw = await fetch(`${API_URL}/Post/delData?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      let res = await raw.json();
      LoadPost();
    } catch (error) {
      console.log("errordel :", error);
    }

    // dispatch({
    //     type:'LoadPost',
    //     payload:  [
    //         { id: "1", value: "test01", by_user: "xxxx" },
    //         { id: "2", value: "test02", by_user: "aaaa" },
    //         { id: "3", value: "test03", by_user: "bbbb" }
    //       ]
    //   })
  };
};

export { LoadPost, DelPost, EditPost, SelectDataUser };
