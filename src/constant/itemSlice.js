import { createSlice } from "@reduxjs/toolkit";

const itemStore = createSlice({
  name: "shoe",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state) => {
      state.item.pop();
    },
    clearItem: (state) => {
      state.item.splice(-1, 1);
    },
  },
});

export const { addItem, removeItem, clearItem } = itemStore.actions;

export default itemStore.reducer;
