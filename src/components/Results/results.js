import React from 'react';
import { Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Stepper from '../Stepper/stepper';
import ResultsError from './resultsError';

const Results = (props) => {
	if (props.processResults['finished']) {
		return 'finished';
	} else if (Object.keys(props.processResults['failed']).length != 0) {
		return <ResultsError />;
	} else {
		return (
			<Center>
				<Stepper />
			</Center>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		processResults: state.processResults
	};
};

export default connect(mapStateToProps)(Results);
