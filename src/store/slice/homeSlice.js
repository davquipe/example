import { createSlice } from "@reduxjs/toolkit"

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
        closeSession: (state) => {
            state.url = {};
            state.genres = {};
            state.data = null
        },
    }
})

export const { getApiConfiguration, getGenres, closeSession } = homeSlice.actions;

export default homeSlice.reducer;

// export const selectUrl = state => state.home.url;

// export const selectGenres = state => state.home.genres;