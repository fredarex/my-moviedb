import { combineReducers } from "redux";
import { moviesReducer } from "./movies/movies.reducer";

export const reducers = combineReducers({
    movies: moviesReducer
});



export default reducers;