import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux';
import { hashedPackages } from './hashedPackagesReducer';
import { dependencyCheck, duplicationCheck } from './servicesFetchingReducers';
import { uploadedPackages } from "./uploadedPackagesReducer";


export default combineReducers({
    hashedPackages: hashedPackages,
    duplicationCheck: duplicationCheck,
    routing: routerReducer,
    uploadedPackages: uploadedPackages,
    dependencyCheck: dependencyCheck,
});