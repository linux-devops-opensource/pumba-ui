// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// ADI_CHANGED_TAG
import { Text, Button } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import artifactoryImg from '../../images/artifactory.png';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import nexusImg from '../../images/nexus.svg';
import { setRepositorySelection } from '../../store/actions/repositorySelectionActions';

const images = [
	{
		source: nexusImg,
		title: 'nexus',
		host: 'nexus.app.com'
	},
	{
		source: artifactoryImg,
		title: 'artifactory',
		host: 'artifactory.app.az.com'
	}
];

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& > *': {
// 			margin: theme.spacing(1)
// 		}
// 	},
// 	image: {
// 		height: 100,
// 		width: 100,
// 		'&:hover, &$focusVisible': {
// 			zIndex: 1,
// 			'& $imageBackdrop': {
// 				opacity: 0.15
// 			},
// 			'& $imageMarked': {
// 				opacity: 0
// 			}
// 		}
// 	},
// 	text: {
// 		'font-weight': 'bold'
// 	}
// }));

const RepositorySelection = (props) => {
	// const classes = useStyles();

	const updateStore = (repository) => {
		props.setRepositorySelection(repository);
	};

	return (
		<div className="repository-selection">
			{images.map((image) => (
				<Button
					variant="solid"
					colorScheme={props.repositorySelected == image.title ? 'blue' : ''}
					onClick={() => updateStore(image.title)}
				>
					<div>
						<img src={image.source} key={image.title} className={classes.image} />
						<Text fontSize="lg" className={classes.text}>
							{image.host}
						</Text>
					</div>
				</Button>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		repositorySelected: state.repositorySelected
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setRepositorySelection: (repository) => dispatch(setRepositorySelection(repository))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositorySelection);
