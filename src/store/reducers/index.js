import { combineReducers } from 'redux';
import { hashedPackages } from './hashedPackagesReducer'
import { duplicationCheck } from './servicesFetchingReducers'
import { routerReducer, routerMiddleware } from "react-router-redux";


export default combineReducers({
    hashedPackages: hashedPackages,
    duplicationCheck: duplicationCheck,
    routing: routerReducer,
});