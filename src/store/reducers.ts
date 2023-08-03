import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from './types';

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
