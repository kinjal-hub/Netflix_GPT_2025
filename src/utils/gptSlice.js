import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSerch: false,
    },
    reducers: {
      toggleGptSerchView: (state) => {
          state.showGptSerch = !state.showGptSerch;
      },
    },
});
export const { toggleGptSerchView } = gptSlice.actions;
export default gptSlice.reducer;

