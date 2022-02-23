import { Heading, HStack, Image, Center, Box } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import errorImg from '../../images/404-yetti.png';

const TechUnsupportedError = (props) => {
	return (
		<div>
			<HStack templateColumns="repeat(2, 1fr)">
				<Box>
					<Image src={errorImg} maxH={400} alt="pumba icon" p="0.5" />
				</Box>
				<Box>
					<Center>
						<Heading fontSize="xl">oh no: {props.technologySelected} is not supported yet :////</Heading>
					</Center>
				</Box>
			</HStack>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected
	};
};

export default connect(mapStateToProps)(TechUnsupportedError);
