import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import React from 'react';
import { connect } from "react-redux";
import { fetchDependencyCheck, fetchDuplicationCheck, fetchRepositoryUpload, fetchUploadToStorage } from '../../store/actions/servicesFetchingActions';

const Stepper = (props) => {
    const [loading, setLoading] = React.useState(false);

    var sid = Math.random().toString(36).substring(7)
    // step 1
    React.useEffect(() => {
        setLoading(true)
        props.fetchDuplicationCheck(props.hashedPackages, sid)
    }, []);
    // step 2
    React.useEffect(() => {
        if (props.duplicationCheck['finished'] == true) {
            props.fetchUploadToStorage(props.uploadedPackages[0], sid)
        }
    }, [props.duplicationCheck]);
    // step 3
    React.useEffect(() => {
        if (props.uploadToStorageManager['finished']) {
            props.fetchDependencyCheck(sid)
        }
    }, [props.uploadToStorageManager]);
    // step 4
    React.useEffect(() => {
        if (props.dependencyCheck['finished']) {
            props.fetchRepositoryUpload(props.uploadedPackages.map(a => a.name),sid)
        }
    }, [props.dependencyCheck]);

    // step 5
    React.useEffect(() => {
        if (props.repositoryUpload['finished']) {
            setLoading(false)
        }
    }, [props.repositoryUpload]);
    

    return (
        <div>
            <div>
                <Fade
                    in={loading}
                    style={{
                        transitionDelay: loading ? '800ms' : '0ms',
                    }}
                    unmountOnExit
                >
                    <CircularProgress />
                </Fade>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hashedPackages: state.hashedPackages,
        uploadedPackages: state.uploadedPackages,
        dependencyCheck: state.dependencyCheck,
        duplicationCheck: state.duplicationCheck,
        uploadToStorageManager: state.uploadToStorageManager,
        repositoryUpload: state.repositoryUpload

    };
};

const mapDispatchToProps = (dispatch) => {
    return {        
        fetchDuplicationCheck: (uploadedPackages, sid) => dispatch(fetchDuplicationCheck(uploadedPackages, sid)),
        fetchDependencyCheck: (sid) => dispatch(fetchDependencyCheck(sid)),
        fetchRepositoryUpload: (uploadedPackages, sid) => dispatch(fetchRepositoryUpload(uploadedPackages, sid)),
        fetchUploadToStorage: (uploadedPackages, sid) => dispatch(fetchUploadToStorage(uploadedPackages, sid)),
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Stepper)