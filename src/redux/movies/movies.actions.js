import axios from "axios";
import { moviesTypes } from "./movies.types";
export const fetchByCategorySeries = (cat) => async (dispatch) => {
    try {
        dispatch({
            type:moviesTypes.FETCH_BY_CATEGORY_SERIES
        });
        const {data} = await axios(
            `https://www.omdbapi.com/?s=series&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const getSeries = data.Search.map((item,index) => 
         {
            if(item.Type == cat){
                return item;
            }
        })
        if(getSeries) {
            dispatch({
                type: moviesTypes.SET_BY_CATEGORY_SERIES,
                payload:getSeries
            });
        }else {
            dispatch({
                type:moviesTypes.FETCH_BY_CATEGORY_SERIES_NO_DATA
            })
        }
    }catch(err) {
            dispatch({
                type:moviesTypes.FETCH_BY_CATEGORY_MOVIE_ERROR
            })
    }
};

export const fetchByCategoryMovie = (cat) => async (dispatch) => {
    try {
        dispatch({
            type:moviesTypes.FETCH_BY_CATEGORY_MOVIE
        });
        const {data} = await axios(
            `https://www.omdbapi.com/?s=series&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const getSeries = data.Search.map((item,index) => 
         {
            if(item.Type == cat){
                return item;
            }
        })
        if(getSeries) {
            dispatch({
                type: moviesTypes.SET_BY_CATEGORY_MOVIE,
                payload:getSeries
            });
        }else {
            dispatch({
                type:moviesTypes.FETCH_BY_CATEGORY_MOVIE_NO_DATA
            })
        }
    }catch(err) {
            dispatch({
                type:moviesTypes.FETCH_BY_CATEGORY_MOVIE_ERROR
            })
    }
};


export const searchByTitle = (input) => async (dispatch) => {
    try {
        dispatch({
            type:moviesTypes.SEARCH_BY_TITLE
        });
        const {data} = await axios(
            `https://www.omdbapi.com/?s=${input}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        if(data) {
            dispatch({
                type: moviesTypes.SET_BY_TITLE,
                payload:data
            });
        }else {
            dispatch({
                type:moviesTypes.FETCH_BY_TITLE_NO_DATA
            })
        }
    }catch(err) {
            dispatch({
                type:moviesTypes.FETCH_BY_TITLE_ERROR
            })
    }
        
}