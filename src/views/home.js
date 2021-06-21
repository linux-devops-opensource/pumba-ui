import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TechnologiesSelection from '../components/Uploader/technologiesSelection'
import RepositorySelection from '../components/Uploader/repositorySelection'
import FileUpload from '../components/DuplactionCheck/fileUpload'

let stepsw = [
    {
        Name: "Select Technology",
        After_Display: "",
        Display: <TechnologiesSelection/>,
        Verifier: verify1
    },
    {
        Name: 'Select Repository Manager',
        After_Display: '',
        Display: <RepositorySelection/>,        
        Verifier: verify1
    },
    {
        Name: 'Upload packages',
        After_Display: '',
        Display: <FileUpload/>,        
        Verifier: verify1
    },
    {
        Name: 'Verify',
        After_Display: '',
        Display: TechnologiesSelection,        
        Verifier: verify1
    }

]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return stepsw
}

function verify1() {
    return true
}



const Home = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  stepsw = getSteps()

  const handleNext = () => {
    if (stepsw[activeStep].Verifier()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }   
  };

  const handleBack = () => {    
   
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
   
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {stepsw.map((label, index) => (
          <Step key={label.Name}>
            <StepLabel>
                <div>
                {label.Name}
                {index < activeStep ? label.After_Display : ''}
                </div>
            </StepLabel>
            
            <StepContent>              
            {label.Display}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === stepsw.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === stepsw.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default Home