// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import { Button, Image, Box, Text, Center } from '@chakra-ui/react';
// ADI_CHANGED_TAG
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

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& > *': {
// 			margin: theme.spacing(1)
// 		}
// 	},
// 	selectedOption: {
// 		backgroundColor: '#4287f5'
// 	},
// 	image: {
// 		position: 'relative',
// 		height: 60,
// 		width: 60,
// 		'&:hover, &$focusVisible': {
// 			zIndex: 1,
// 			'& $imageBackdrop': {
// 				opacity: 0.15
// 			},
// 			'& $imageMarked': {
// 				opacity: 0
// 			}
// 		}
// 	}
// }));

const TechnologiesSelection = (props) => {
	// const classes = useStyles();

	const updateStore = (techlonogy) => {
		props.setTechlonogySelection(techlonogy);
	};
	return (
		<Center className="technology-selection">
			{images.map((image) => (
				<Button
					key={image.title}
					// colorScheme=''
					variant="solid"
					colorScheme={props.technologySelected == image.title ? 'green' : 'gray'}
					onClick={() => updateStore(image.title)}
					p="4"
					m="4"
					height="80px"
					border="2px"
					borderColor={props.technologySelected == image.title ? 'green' : 'gray'}
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
