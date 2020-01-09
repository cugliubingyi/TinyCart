import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    productInfo: {},
    count: 1,
    couldSubmit: true
  },
  reducers: {
    changeProductInfoSuccess(state, action) {
      state.productInfo = action.payload;
    },

    changeCountSuccess(state, action) {
      state.count = action.payload;
    },

    changeCouldSubmitSuccess(state, action) {
      state.couldSubmit = action.payload;
    }
  }
});

const getProductInfo = id => {
  return dispatch => {
    axios.get(`/api/detail${id}.json`).then(res => {
      if (res.data && res.data.success) {
        dispatch(changeProductInfoSuccess(res.data.data.detailItem));
      }
    });
  };
};

const changeCount = count => {
  return dispatch => {
    dispatch(changeCountSuccess(count));
  };
};

const changeCouldSubmit = couldSubmit => {
  return dispatch => {
    dispatch(changeCouldSubmitSuccess(couldSubmit));
  }
}

const { actions, reducer } = detailSlice;

export const {
  changeProductInfoSuccess,
  changeCountSuccess,
  changeCouldSubmitSuccess
} = actions;

export {
  getProductInfo,
  changeCount,
  changeCouldSubmit
};

export default reducer;