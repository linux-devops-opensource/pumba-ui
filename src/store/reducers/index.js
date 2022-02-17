import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { hashedPackages } from './hashedPackagesReducer';
import { repositorySelected } from './repositorySelectionReducer';
import {
	dependencyCheck,
	duplicationCheck,
	processResults,
	repositoryUpload,
	uploadToStorageManager,
	storageBucketCreation
} from './servicesFetchingReducers';
import { technologySelected } from './technologySelectedReducer';
import { uploadedPackages } from './uploadedPackagesReducer';
import { sessionId } from './sessionIdReducer';

export default combineReducers({
	hashedPackages: hashedPackages,
	duplicationCheck: duplicationCheck,
	routing: routerReducer,
	uploadedPackages: uploadedPackages,
	dependencyCheck: dependencyCheck,
	uploadToStorageManager: uploadToStorageManager,
	repositoryUpload: repositoryUpload,
	technologySelected: technologySelected,
	repositorySelected: repositorySelected,
	processResults: processResults,
	sessionId: sessionId,
	storageBucketCreation: storageBucketCreation
});
