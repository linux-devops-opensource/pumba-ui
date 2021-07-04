import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import React from 'react';
import { connect } from "react-redux";

const ResultsError = (props) => {
    return (
        <div>
            <ErrorIcon color="secondary"/>
            <Typography variant="h6" >
               {props.processResults['failed']['service']} failed
            </Typography>
            <Typography variant="h6" >
                Error message: {props.processResults['failed']['results']['error']['message']}
            </Typography>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        processResults: state.processResults
    };
};


export default connect(mapStateToProps)(ResultsError)