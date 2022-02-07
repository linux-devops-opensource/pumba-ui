import { Text, Button, Flex, Box, Spacer, Center, Grid } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';

import React from 'react';
import FileUpload from '../components/DuplactionCheck/fileUpload';
import Results from '../components/Results/results';
import TechnologiesSelection from '../components/Uploader/technologiesSelection';

let stepsw = [
	{
		Name: 'Select Technology',
		After_Display: '',
		// Display: <Text>tech </Text>,
		Display: <TechnologiesSelection />,
		Verifier: verify1
	},
	// {
	//     Name: 'Select Repository Manager',
	//     After_Display: '',
	//     Display: <RepositorySelection/>,
	//     Verifier: verify1
	// },
	{
		Name: 'Upload packages',
		After_Display: '',
		// Display: <Text>upload </Text>,
		Display: <FileUpload />,
		Verifier: verify1
	},
	{
		Name: 'Results',
		After_Display: '',
		// Display: <Text>results </Text>,
		Display: <Results />,
		Verifier: verify1
	}
];

function getSteps() {
	return stepsw;
}

function verify1() {
	return true;
}

const Home = (props) => {
	const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
		initialStep: 0
	});
	// const [ activeStep, setActiveStep ] = React.useState(0);
	stepsw = getSteps();

	// const handleNext = () => {
	// 	if (stepsw[activeStep].Verifier()) {
	// 		// setActiveStep((prevActiveStep) => prevActiveStep + 1);
	// 		setStep((prevActiveStep) => prevActiveStep + 1);
	// 	}
	// };

	// const handleBack = () => {
	// 	setStep((prevActiveStep) => prevActiveStep - 1);
	// 	// setActiveStep((prevActiveStep) => prevActiveStep - 1);
	// };

	// const handleReset = () => {
	// 	setActiveStep(0);
	// };

	// const handleFinish = () => {
	// 	window.location.reload();
	// };

	return (
		<Grid column className="home-component" width="100%" height="100%">
			<Box p="7">
				<Steps activeStep={activeStep} orientation="horizontal">
					{stepsw.map((s, index) => (
						<Step key={index} label={s.Name} p="5" justifyContent="center">
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

export default Home;
