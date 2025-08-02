import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: { 
     nowPlayingMovies: null,
     popularMovies: null,
     trailerVedio: null,
     topRatedMovie: null,
     upcomingMovie: null,
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrailerVedio: (state, action) => {
            state.trailerVedio = action.payload;
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload;
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload;
        },
    },

});

export const { addNowPlayingMovies, addTrailerVedio, addPopularMovies , addTopRatedMovie, addUpcomingMovie } = movieSlice.actions;

export default movieSlice.reducer;