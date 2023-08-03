import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
