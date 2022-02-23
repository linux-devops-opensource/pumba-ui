// import Typography from '@material-ui/core/Typography';
import { Text } from '@chakra-ui/react';
// import ErrorIcon from '@material-ui/icons/Error';
import { CloseIcon } from '@chakra-ui/icons';
// ADI_CHANGED_TAG
import React from 'react';
import { connect } from 'react-redux';

const ResultsError = (props) => {
	return (
		<div>
			{/* <ErrorIcon color="secondary" /> */}
			<CloseIcon color="red.500" />
			<Text fontSize="lg">{props.processResults['failed']['service']} failed</Text>
			<Text fontSize="lg">Error message: {props.processResults['failed']['results']['error']['message']}</Text>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		processResults: state.processResults
	};
};

export default connect(mapStateToProps)(ResultsError);
