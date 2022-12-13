import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
 
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
   );

export default store;