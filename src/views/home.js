import { Text, Button, Flex, Box, Grid } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
// DOCUMENTATION -- THANK GOD FOR THIS GUY https://jeanverster.github.io/chakra-ui-steps-site/

import React from 'react';
import { stepsw } from '../variables/steps';

const Home = (props) => {
	const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
		initialStep: 0
	});

	return (
		<Grid column className="home-component" width="100%" height="100%">
			<Box p="7">
				<Steps activeStep={activeStep} orientation="horizontal">
					{stepsw.map((s, index) => (
						<Step key={index} label={s.Name} p="5" justifyContent="center" description={s.description}>
							{s.Display}
						</Step>
					))}
				</Steps>
			</Box>
			<Box className="classes.actionsContainer" p="6">
				<div>
					{activeStep === stepsw.length ? (
						<Flex p={4}>
							<Button mx="auto" size="sm" onClick={reset}>
								Reset
							</Button>
						</Flex>
					) : (
						<Flex width="100%" justify="flex-end">
							<Button isDisabled={activeStep === 0} mr={4} onClick={prevStep} size="sm" variant="ghost">
								Prev
							</Button>
							<Button size="sm" onClick={nextStep}>
								{activeStep === stepsw.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</Flex>
					)}
				</div>
			</Box>
			{activeStep === stepsw.length && (
				<Box>
					<Text>All steps completed - you&apos;re finished</Text>
					<Button onClick={reset} className="reset-pumba">
						Reset
					</Button>
				</Box>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		technologySelected: state.technologySelected
	};
};

export default Home;
