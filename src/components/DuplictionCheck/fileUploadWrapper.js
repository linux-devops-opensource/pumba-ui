import React from 'react';
import { Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Stepper from '../Stepper/stepper';
import ResultsError from '../Errors/resultsError';
import { supportedTech } from '../../variables/supportedTechnologies';
import TechUnsupportedError from '../Errors/techUnsupported';
import FileUpload from './fileUpload';

const Wrapper = (props) => {
	if (supportedTech.includes(props.technologySelected)) {
		return <FileUpload />;
	} else {
		return (
			<Center>
				<TechUnsupportedError />
			</Center>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected
	};
};

export default connect(mapStateToProps)(Wrapper);
