import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Processing from '../../common/Processing/Processing';
import SplitManager from '../SplitManager/SplitManager';
import FileUploadManager from '../FileUploadManager/FileUploadManager';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfSplitTool.styles';

class PdfSplitTool extends React.Component {
    state = {
        activeStep: 0,
        files: []
    };

    handleFileSelect = (selectedFiles) => {
        this.setState({ files: selectedFiles });
        this.handleNext();
    }

    handleNext = () => { 
        this.setState({ activeStep: this.state.activeStep + 1 });
    }

    handleBack = () => { 
        this.setState({ activeStep: this.state.activeStep - 1 });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        if (state.activeStep > 0 && props.location.search !== '?edit') {
            props.history.push({ search: '?edit' });
        } else if (state.activeStep === 0 && props.location.search !== '') {
            props.history.push({ search: '' });
        }

        return (
            <div className={classNames(className, classes.root)}>
                {state.activeStep === 0 ? (
                    <FileUploadManager
                        files={state.files}
                        accept="application/pdf"
                        maxFiles={1}
                        labels={{
                            selectFiles: 'Select PDF files',
                            dropFiles: 'or, drop PDF files here'
                        }}
                        onChange={this.handleFileSelect}
                    />
                ) : state.activeStep === 1 ? (
                    <SplitManager className={classes.SplitManager} />
                ) : state.activeStep === 2 ? (
                    <Processing className={classes.Processing}  />
                ) : null}

                <div className={classes.actionsContainer}>
                    {state.activeStep === 1 ? (
                    <Button
                        className={classes.Button_action}
                        variant="contained" 
                        size="large"
                        onClick={this.handleBack}>Back</Button>
                    ) : null}

                    {state.activeStep <= 1 ? (
                    <Button 
                        className={classes.Button_action}
                        disabled={state.files.length < 1}
                        variant="contained" 
                        color="primary" 
                        size="large"
                        onClick={this.handleNext}>
                        Split PDF   
                    </Button>
                    ) : null}
                </div>
            </div>
        );
    }
}

PdfSplitTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(PdfSplitTool));