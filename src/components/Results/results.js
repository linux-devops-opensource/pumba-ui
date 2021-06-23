import React from 'react';
import { connect } from "react-redux";
import Stepper from '../Stepper/stepper';
import ResultsError from './resultsError';

const Results = (props) => {
    if (props.processResults['finished']) {
        return (
            "finished"
        )
    }  
    else if (Object.keys(props.processResults['failed']).length != 0 ) {
        return (
            <ResultsError/>
        )
    }
    else {
        return (
            <div>
                <Stepper/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        processResults: state.processResults
    };
};


export default connect(mapStateToProps)(Results)