import { DropzoneArea } from 'material-ui-dropzone';
import { Button, Box, Center, Container } from '@chakra-ui/react';

import CryptoJS from 'crypto-js';
import React from 'react';
import { connect } from 'react-redux';
import { setHashedPackages } from '../../store/actions/hashedPackagesActions';

import { fetchDependencyCheck } from '../../services/fetch-dependency-check';
import { fetchUploadToStorage } from '../../services/upload-pkgs-to-storage';
import { fetchDuplicationCheck } from '../../services/fetch-duplication-check';

import { setUploadedPackages } from '../../store/actions/uploadedPackagesAction';
import { setPackageDetails } from '../../store/actions/packagesDetailsActions';

const FileUpload = (props) => {
	//  const [files, setFiles] = React.useState([])
	// const classes = useStyles();

	const [ open, setOpen ] = React.useState(false);
	const [ files, setFiles ] = React.useState([]);
	const [ proccessedPackages, setProccessedPackages ] = React.useState([]);

	// const handleOpen = () => {
	// 	setOpen((open) => true);
	// };

	const handleClose = () => {
		setOpen((open) => false);
	};

	let packages = [];

	const exctractFileDetails = (packageName) => {
		let name = packageName.substring(0, packageName.lastIndexOf('.'));
		let lastIndexOfHyper = name.lastIndexOf('-');
		return {
			name: name.substring(0, lastIndexOfHyper),
			version: name.substring(lastIndexOfHyper + 1)
		};
	};

	// const handleSave = (files, event) => {
	// 	// props.fetchDuplicationCheck(props.hashedPackages);
	// };

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

				let pkgInfo = {
					packageName: newPackage.packageName,
					sha1: finalSha,
					info: 'proccessing~~~',
					...exctractFileDetails(newPackage.packageName)
				};
				props.setPackageDetails(pkgInfo, props.packagesInfo);
			};
			reader.readAsArrayBuffer(item);
			props.setUploadedPackages(item, props.uploadedPackages);
		});
	};

	return (
		<Box>
			{/* TODO in the future
			make this dark mode too 
			its by mui themes and i kinda dont wanna study those rn lmao
			https://yuvaleros.github.io/material-ui-dropzone/#section-theme 
			*/}
			<Center>
				<Container>
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
				</Container>
			</Center>
		</Box>
	);
};

const mapStateToProps = (state) => {
	return {
		hashedPackages: state.hashedPackages,
		uploadedPackages: state.uploadedPackages,
		packagesInfo: state.packagesInfo
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUploadedPackages: (newPackage, packagesArray) => dispatch(setUploadedPackages(newPackage, packagesArray)),
		setHashedPackages: (newPackage, packagesArray) => dispatch(setHashedPackages(newPackage, packagesArray)),
		fetchDuplicationCheck: (uploadedPackages, sid) => dispatch(fetchDuplicationCheck(uploadedPackages, sid)),
		fetchDependencyCheck: (sid) => dispatch(fetchDependencyCheck(sid)),
		fetchUploadToStorage: (uploadedPackages, sid) => dispatch(fetchUploadToStorage(uploadedPackages, sid)),
		setPackageDetails: (newPkg, packagesInfo) => dispatch(setPackageDetails(newPkg, packagesInfo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
