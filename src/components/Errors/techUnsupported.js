import { Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { RiEmotionSadLine } from 'react-icons/ri';

const TechUnsupportedError = (props) => {
	return (
		<div>
			<Icon as={RiEmotionSadLine} />
			<Text fontSize="lg">oh no: {props.technologySelected} is not supported yet :////</Text>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected
	};
};

export default connect(mapStateToProps)(TechUnsupportedError);
