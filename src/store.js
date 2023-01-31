import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "react";

// reducer
const reducer=combineReducers({

})

// middleware
const middleware=[thunk]

// create store
const Store=createStore(reducer,applyMiddleware(...middleware))



export default Store