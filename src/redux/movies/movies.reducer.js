import { moviesTypes } from "./movies.types";

const initialState = {
    categories:{
        series:{
            data:[],
            error:false
        },
        episodes:{
            data:[],
            error:false
        },
        movie:{
            data:[],
            error:false
        }
    },
    search:{
        data:[],
        error:false
    }
    

}
export const moviesReducer = (state=initialState,action) => {
    switch (action.type) {
        case moviesTypes.SET_BY_CATEGORY_SERIES:
            return {
                ...state,
                categories:{
                   ...state.categories,
                    series: {
                        ...state.categories.series,
                        data: action.payload
                    } 
                }
            }
        case moviesTypes.SET_BY_CATEGORY_MOVIE:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    movie:{
                        ...state.categories.movie,
                        data:action.payload
                    }
                }
            }
        case moviesTypes.FETCH_BY_CATEGORY_SERIES_ERROR:
            return {
                ...state,
                categories:{
                    ...state.categories,
                    series:{
                        ...state.categories.series,
                        error:true
                    }
                }
            }
        case moviesTypes.FETCH_BY_CATEGORY_MOVIE_ERROR:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    movie: {
                        ...state.categories.movie,
                        error:true
                    }
                }
                
            }
        case moviesTypes.FETCH_BY_TITLE_ERROR:
            return {
                ...state,
                search:{
                    ...state.search,
                    error:true
                }
            }
        case moviesTypes.FETCH_BY_CATEGORY_SERIES_NO_DATA:
            return {
                ...state,
                categories:{
                    ...state.categories,
                    series:{
                        data:[],
                        error:false
                    }
                }
            }
        case moviesTypes.FETCH_BY_CATEGORY_MOVIE_NO_DATA:
            return {
                ...state,
                categories:{
                    ...state.categories,
                    movie: {
                        data:[],
                        error:false
                    }
                }
            }
        case moviesTypes.FETCH_BY_TITLE_NO_DATA:
            return {
                ...state,
                search:{
                    data:[],
                    error:false
                }
            }
    
        default:
            return state;
    }
}