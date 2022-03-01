import { Text, Button, Flex, Box, Grid, Center, Heading } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
// DOCUMENTATION -- THANK GOD FOR THIS GUY https://jeanverster.github.io/chakra-ui-steps-site/

import React from 'react';
import { connect } from 'react-redux';
import { stepsw } from '../variables/steps';

const Home = (props) => {
	const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
		initialStep: 0
	});

	let results = props.processResults['finished'] || false;

	const handleFinish = () => {
		window.location.reload();
	};

	return (
		<Grid column className="home-component" width="100%" height="100%">
			<Box p="7">
				<Steps activeStep={activeStep} orientation="horizontal">
					{stepsw.map(
						(s, index) =>
							index != stepsw.length ? (
								<Step
									key={index}
									label={s.Name}
									p="5"
									justifyContent="center"
									description={s.description}
								>
									{s.Display}
								</Step>
							) : (
								<Step
									key={index}
									label={s.Name}
									p="5"
									justifyContent="center"
									description={s.description}
									// isCompletedStep={results}
								>
									{s.Display}
								</Step>
							)
					)}
				</Steps>
			</Box>
			<Box className="classes.actionsContainer" p="6">
				<div>
					{activeStep === stepsw.length - 1 ? (
						<Flex p={4}>
							{/* <Button mx="auto" size="sm" onClick={handleFinish}>
								Reset
							</Button> */}
						</Flex>
					) : (
						<Flex width="100%" justify="flex-end">
							<Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost">
								Prev
							</Button>
							<Button size="sm" onClick={nextStep}>
								{activeStep === stepsw.length - 2 ? 'Finish' : 'Next'}
							</Button>
						</Flex>
					)}
				</div>
			</Box>
			{activeStep === stepsw.length - 1 &&
			results == true && (
				<Center>
					{/* <Box>
						<Text>All steps completed - you&apos;re finished </Text> {' '}
					</Box> */}
					<Button onClick={handleFinish} className="reset-pumba">
						reset this page
					</Button>
				</Center>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected,
		processResults: state.processResults
	};
};

export default connect(mapStateToProps)(Home);
