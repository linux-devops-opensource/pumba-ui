// import Results from '../components/Results/results';
import TechnologiesSelection from '../components/Uploader/technologiesSelection';
import Wrapper from '../components/DuplictionCheck/fileUploadWrapper';
import Status from '../components/Results/status';

// whats the point of this tho ?? TODO
function verify1() {
	return true;
}

export const stepsw = [
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
		// Display: <FileUpload />,
		Display: <Wrapper />,
		Verifier: verify1
	},
	{
		Name: 'results',
		description: 'try to upload and pray! 🙌',
		After_Display: '',
		Display: <Status />,
		Verifier: verify1
	}
];
