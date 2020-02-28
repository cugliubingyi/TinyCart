import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    show: false
  },
  reducers: {
    showPopUp(state, action) {
      state.show = true;
    },

    hidePopUp(state, action) {
      state.show = false;
    }
  }
});

const { actions, reducer } = popupSlice;

export const {
  showPopUp,
  hidePopUp
} = actions;

export default reducer;