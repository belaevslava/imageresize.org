import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
// Styles
import styles from './ImageResizeTool.styles';
// DEMO DATA
import DEMO_DATA from '../../../demo/data/images.json';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class ImageResizeTool extends React.Component {
    state = {
        activeTabIndex: 0,
        completed: 0,
        buffer: 80,
        images: DEMO_DATA.images
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleChangeActiveTabIndex = index => {
        this.setState({ activeTabIndex: index });
    };

    handleUploadCancel = () => {};

    render() {
        const { className, classes } = this.props;
        const { activeTabIndex } = this.state;
        
        return (
            <Typography component="div" className={`${className || ''} ${classes.root}`}>
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label="Choose Meme" />
                    <Tab 
                        className={classes.Tab} 
                        label="Upload Image" />
                </Tabs>
                <SwipeableViews
                    animateHeight
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.handleChangeActiveTabIndex}>
                    <TabContainer className={classes.TabContainer}>
                        <Toolbar className={classes.Toolbar}>
                            <TextField
                                id="search"
                                placeholder="Search memes"
                                type="text"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                className={classes.TextField}
                                InputProps={{
                                    startAdornment: <SearchIcon className={classes.Icon} />,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Clear Search String"
                                                onClick={this.handleClearSearch}>
                                                <ClearIcon fontSize="small" />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                        </Toolbar>
                        <div className={classes.gridContainer}>
                            <Grid container spacing={24}>
                                {this.state.images.map((image, index) => 
                                    <Grid item xs={2} key={index}>
                                        <Card className={classes.Card} elevation={0}>
                                            <CardHeader 
                                                className={classes.CardHeader}
                                                title={
                                                    <Typography className={classes.CardHeader_title}>{image.title}</Typography>
                                                } />
                                            <CardMedia image={image.image} className={classes.CardMedia} />
                                            <CardActions>
                                                <Button className={classes.Button_addCaption} variant="outlined" fullWidth size="small">Add Caption</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )}
                            </Grid>
                            <div className={classes.progressContainer}>
                                <CircularProgress />
                            </div>
                        </div>
                    </TabContainer>
                    <TabContainer className={classes.TabContainer}>
                        <Typography className={classes.uploadFileContainer} component="div">
                            <input
                                accept="image/*"
                                className={classes.input_uploadFile}
                                id="upload-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="upload-file">
                                <Button 
                                    variant="contained"
                                    size="large" 
                                    color="secondary" 
                                    component="span" 
                                    className={classes.Button}>
                                    <AddPhotoAlternateIcon className={classes.Icon} /> 
                                    Choose Image
                                </Button>
                            </label>
                            <Typography className={classes.Typography_uploadFile} variant="subtitle1">or, drop here</Typography>
                            <TextField
                                className={classes.TextField}
                                id="file-url"
                                variant="outlined"
                                fullWidth
                                placeholder="http://"
                                type="url"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color="secondary">Go</Button>
                                        </InputAdornment>
                                    )
                                }} />
                            <Typography className={classes.uploadingContainer} component="div">
                                <LinearProgress 
                                    className={classes.LinearProgress}
                                    color="secondary" 
                                    variant="buffer" 
                                    value={this.state.completed} 
                                    valueBuffer={this.state.buffer} />
                                <IconButton
                                    aria-label="Remove uploading"
                                    onClick={this.handleUploadCancel}>
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                        </Typography>
                    </TabContainer>
                </SwipeableViews>
            </Typography>
        );
    }
}

ImageResizeTool.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageResizeTool);