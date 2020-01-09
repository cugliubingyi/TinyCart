import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    show: false
  },
  reducers: {
    showPopUpSuccess(state, action) {
      state.show = true;
    },

    hidePopUpSuccess(state, action) {
      state.show = false;
    }
  }
});

const showPopUp = () => {
  return dispatch => {
    dispatch(showPopUpSuccess());
  };
};

const hidePopUp = () => {
  return dispatch => {
    dispatch(hidePopUpSuccess());
  };
};

const { actions, reducer } = popupSlice;

export const {
  showPopUpSuccess,
  hidePopUpSuccess
} = actions;

export {
  showPopUp,
  hidePopUp
};

export default reducer;