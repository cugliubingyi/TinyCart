import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homeList: [],
    page: 1,
    totalPage: 1
  },
  reducers: {
    changeHomeInfoSuccess(state, action) {
      const homeList = action.payload.homeList;
      state.homeList = homeList;
      state.totalPage = Math.ceil(homeList.length / 4);
    },

    changePageSuccess(state, action) {
      state.page = action.payload;
    }
  }
});

const getHomeList = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      if (res.data && res.data.success) {
        const result = res.data.data;
        dispatch(changeHomeInfoSuccess(result));
      }
    });
  };
};

const changePage = (page) => {
	return dispatch => {
		dispatch(changePageSuccess(page));
	}
}

const { actions, reducer } = homeSlice;

export const {
	changeHomeInfoSuccess,
	changePageSuccess
} = actions;

export {
	getHomeList,
	changePage
}

export default reducer;
