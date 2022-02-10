import { Fade, CircularProgress } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRepositoryUpload } from '../../services/fetch-repository-upload';
import { fetchDependencyCheck } from '../../services/fetch-dependency-check';
import { fetchUploadToStorage } from '../../services/upload-pkgs-to-storage';
import { fetchDuplicationCheck } from '../../services/fetch-duplication-check';
import { setSessionId } from '../../store/actions/sessionIdAction';

const Stepper = (props) => {
	const [ loading, setLoading ] = React.useState(false);

	let sid = props.sessionId;
	let tech = props.technologySelected;

	// step 0 -- trigger session id created
	React.useEffect(() => {
		setLoading(true);
		props.setSessionId();
	}, []);

	// step 1 -- trigger the checker
	React.useEffect(
		() => {
			if (sid !== '') {
				props.fetchDuplicationCheck(props.hashedPackages, tech, sid);
			}
		},
		[ props.sessionId ]
	);

	// step 2 -- upload each of the packages to the storage manager
	React.useEffect(
		() => {
			if (props.duplicationCheck['finished'] == true) {
				props.uploadedPackages.forEach((singlePackage) => {
					props.fetchUploadToStorage(singlePackage, sid);
				});
			}
		},
		[ props.duplicationCheck ]
	);

	// step 3 -- fetch the validator
	React.useEffect(
		() => {
			if (props.uploadToStorageManager['finished'] == true) {
				props.fetchDependencyCheck(props.hashedPackages, tech, sid);
			}
		},
		[ props.uploadToStorageManager ]
	);

	// step 4 -- fetch the repository upload
	React.useEffect(
		() => {
			if (props.dependencyCheck['finished'] == true) {
				props.fetchRepositoryUpload(props.uploadedPackages.map((a) => a.name), sid);
			}
		},
		[ props.dependencyCheck ]
	);

	// step 5 -- finish loading and show results
	React.useEffect(
		() => {
			if (props.repositoryUpload['finished'] == true) {
				setLoading(false);
			}
		},
		[ props.repositoryUpload ]
	);

	return (
		<div>
			<div>
				<Fade
					in={loading}
					style={{
						transitionDelay: loading ? '800ms' : '0ms'
					}}
					unmountOnExit
				>
					<CircularProgress isIndeterminate color="blue.300" />
				</Fade>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected,
		hashedPackages: state.hashedPackages,
		uploadedPackages: state.uploadedPackages,
		dependencyCheck: state.dependencyCheck,
		duplicationCheck: state.duplicationCheck,
		uploadToStorageManager: state.uploadToStorageManager,
		repositoryUpload: state.repositoryUpload,
		sessionId: state.sessionId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDuplicationCheck: (hashedPackages, tech, sid) =>
			dispatch(fetchDuplicationCheck(hashedPackages, tech, sid)),
		fetchDependencyCheck: (packages, tech, sessionId) => dispatch(fetchDependencyCheck(packages, tech, sessionId)),
		fetchRepositoryUpload: (uploadedPackages, sid) => dispatch(fetchRepositoryUpload(uploadedPackages, sid)),
		fetchUploadToStorage: (uploadedPackages, sid) => dispatch(fetchUploadToStorage(uploadedPackages, sid)),
		setSessionId: () => dispatch(setSessionId())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
