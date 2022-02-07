import { Text, Button, Flex, Box, Grid } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
// DOCUMENTATION -- THANK GOD FOR THIS GUY https://jeanverster.github.io/chakra-ui-steps-site/

import React from 'react';
import FileUpload from '../components/DuplictionCheck/fileUpload';
import Results from '../components/Results/results';
import TechnologiesSelection from '../components/Uploader/technologiesSelection';

let stepsw = [
	{
		Name: 'select technology',
		description: 'pick the type of package',
		After_Display: '',
		Display: <TechnologiesSelection />,
		Verifier: verify1
	},
	// {
	//     Name: 'Select Repository Manager',
	//     After_Display: '',
	//     description: '',
	//     Display: <RepositorySelection/>,
	//     Verifier: verify1
	// },
	{
		Name: 'upload packages',
		description: 'upload the files u want',
		After_Display: '',
		Display: <FileUpload />,
		Verifier: verify1
	},
	{
		Name: 'results',
		description: 'try to upload and pray! 🙌',
		After_Display: '',
		Display: <Results />,
		Verifier: verify1
	}
];

function getSteps() {
	return stepsw;
}

// whats the point of this tho ?? TODO
function verify1() {
	return true;
}

const Home = (props) => {
	const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
		initialStep: 0
	});
	stepsw = getSteps();

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

export default Home;
