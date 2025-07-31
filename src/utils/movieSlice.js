import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: { 
     nowPlayingMovies: null,
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailorVedio: (state, action) => {
            state.addTrailorVedio = action.payload;
        },
    },

});

export const { addNowPlayingMovies, addTrailorVedio } = movieSlice.actions;

export default movieSlice.reducer;