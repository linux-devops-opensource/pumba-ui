import { Center, Container, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { connect } from 'react-redux';

const ResultsError = (props) => {
	return (
		<div>
			<Container>
				{/* <Center> */}
				<CloseIcon color="red.500" />
				<Text fontSize="lg">{props.processResults['failed']['service']} failed</Text>
				<Text fontSize="lg">
					Error message: {props.processResults['failed']['results']['error']['message']}
				</Text>
				{/* </Center> */}
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		processResults: state.processResults
	};
};

export default connect(mapStateToProps)(ResultsError);
