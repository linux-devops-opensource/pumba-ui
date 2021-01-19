import { combineReducers } from 'redux';
import { hashedPackages } from './hashedPackagesReducer'
import { routerReducer, routerMiddleware } from "react-router-redux";


export default combineReducers({
    hashedPackages: hashedPackages,
    routing: routerReducer,
});