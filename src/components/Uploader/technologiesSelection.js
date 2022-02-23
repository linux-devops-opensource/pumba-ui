import { Button, Image, Box, Text, Center } from '@chakra-ui/react';
import React from 'react';
import mavenImg from '../../images/maven.png';
import npmImg from '../../images/npm.png';
import pypiImg from '../../images/pypi.png';
import rpmImg from '../../images/rpm.png';
import { setTechlonogySelection } from '../../store/actions/techlonogySelectionActions';
import { connect } from 'react-redux';

const images = [
	{
		source: pypiImg,
		title: 'pypi'
	},
	{
		source: mavenImg,
		title: 'maven'
	},
	{
		source: rpmImg,
		title: 'rpm'
	},
	{
		source: npmImg,
		title: 'npm'
	}
];

const TechnologiesSelection = (props) => {
	const updateStore = (techlonogy) => {
		props.setTechlonogySelection(techlonogy);
	};

	return (
		<Center className="technology-selection">
			{images.map((image) => (
				<Button
					key={image.title}
					variant="solid"
					colorScheme={props.technologySelected == image.title ? 'green' : 'gray'}
					onClick={() => updateStore(image.title)}
					p="4"
					m="4"
					height="80px"
				>
					<Box>
						<Image
							boxSize="70px"
							src={image.source}
							key={image.title}
							className="technology-selection-image"
							p="1"
							m="1"
						/>
					</Box>
					<Text>{image.title}</Text>
				</Button>
			))}
		</Center>
	);
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTechlonogySelection: (techlonogy) => dispatch(setTechlonogySelection(techlonogy))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TechnologiesSelection);
