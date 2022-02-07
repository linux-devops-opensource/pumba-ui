import { DropzoneArea } from 'material-ui-dropzone';
// ADI_TO_CHANGE_TAG
import { Button } from '@chakra-ui/react';

import CryptoJS from 'crypto-js';
import React from 'react';
import { connect } from 'react-redux';
import { setHashedPackages } from '../../store/actions/hashedPackagesActions';
import {
	fetchDependencyCheck,
	fetchDuplicationCheck,
	fetchUploadToStorage
} from '../../store/actions/servicesFetchingActions';
import { setUploadedPackages } from '../../store/actions/uploadedPackagesAction';

const FileUpload = (props) => {
	//  const [files, setFiles] = React.useState([])
	// const classes = useStyles();

	const [ open, setOpen ] = React.useState(false);
	const [ files, setFiles ] = React.useState([]);
	const [ proccessedPackages, setProccessedPackages ] = React.useState([]);

	const handleOpen = () => {
		setOpen((open) => true);
	};

	const handleClose = () => {
		setOpen((open) => false);
	};

	let packages = [];

	const handleSave = (files, event) => {
		props.fetchDuplicationCheck(props.hashedPackages);
	};

	const handleDrop = (files, event) => {
		files.forEach(function(item) {
			var reader = new FileReader();
			reader.onload = (e) => {
				console.log(e.target.result);
				var file_result = e.target.result; // this == reader, get the loaded file "result"
				var file_wordArr = CryptoJS.lib.WordArray.create(file_result); //convert blob to WordArray , see https://code.google.com/p/crypto-js/issues/detail?id=67
				var sha1_hash = CryptoJS.SHA1(file_wordArr); //calculate SHA1 hash
				var finalSha = sha1_hash.toString();
				// lmao hi aron 😭😭😭
				console.log('Hi there adi!', finalSha);
				var newPackagesArr = proccessedPackages;
				let newPackage = { packageName: item.name, sha1: finalSha };
				newPackagesArr.push({ packageName: item.name, sha1: finalSha });
				setProccessedPackages(newPackagesArr);
				props.setHashedPackages(newPackage, props.hashedPackages);
				setOpen((open) => false);
			};
			reader.readAsArrayBuffer(item);
			props.setUploadedPackages(item, props.uploadedPackages);
		});
	};

	// const testApi = () => {
	// 	var date = new Date();
	// 	var sid = date.getMilliseconds().toString();
	// 	sid.concat(date.getMilliseconds().toString());
	// 	props.fetchDuplicationCheck(props.hashedPackages, sid);
	// 	props.fetchUploadToStorage(props.uploadedPackages[0], sid);
	// 	props.fetchDependencyCheck(sid);
	// };
	return (
		<div>
			{/* <Button onClick={testApi}>check</Button> */}

			<DropzoneArea
				open={open}
				onDrop={handleDrop}
				showPreviews={false}
				maxFileSize={5000000}
				onClose={handleClose}
				cancelButtonText={'Cancel'}
				submitButtonText={'Submit'}
				showFileNamesInPreview={true}
				dialogTitle={'Duplicate checker'}
				dropzoneText={'Upload your packages'}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		hashedPackages: state.hashedPackages,
		uploadedPackages: state.uploadedPackages
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUploadedPackages: (newPackage, packagesArray) => dispatch(setUploadedPackages(newPackage, packagesArray)),
		setHashedPackages: (newPackage, packagesArray) => dispatch(setHashedPackages(newPackage, packagesArray)),
		fetchDuplicationCheck: (uploadedPackages, sid) => dispatch(fetchDuplicationCheck(uploadedPackages, sid)),
		fetchDependencyCheck: (sid) => dispatch(fetchDependencyCheck(sid)),
		fetchUploadToStorage: (uploadedPackages, sid) => dispatch(fetchUploadToStorage(uploadedPackages, sid))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
