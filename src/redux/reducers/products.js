import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    curPage: 1,
    totalPage: 1
  },
  reducers: {
    getProductListSuccess(state, action) {
      const productList = action.payload.productList;
      state.productList = productList;
      state.totalPage = Math.ceil(productList.length / 4);
    },

    changePage(state, action) {
      state.curPage = action.payload;
    }
  }
});

const getProductList = () => {
  return dispatch => {
    axios.get("/api/productList.json").then(res => {
      if (res.data && res.data.success) {
        const result = res.data.data;
        dispatch(getProductListSuccess(result));
      }
    });
  };
};

const { actions, reducer } = productsSlice;

export const { getProductListSuccess, changePage } = actions;

export { getProductList };

export default reducer;
