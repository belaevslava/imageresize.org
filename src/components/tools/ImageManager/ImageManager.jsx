import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
import { withStyles } from '@material-ui/core/styles';
import styles from './ImageManager.styles';
// DEMO DATA
import DEMO_IMAGES_DATA from '../../../assets/demo/data/images.json';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class ImageManager extends React.Component {
    state = {
        labels: this.props.labels || {},
        images: DEMO_IMAGES_DATA || [],
        selectedImageUrl: null,
        activeTabIndex: 0,
        searchQuery: ''
    };

    componentDidUpdate() {
        this.swipeableActions.updateHeight();
    }
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabSwipe = (activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleSelect = (imageUrl) => {
        this.setState({ selectedImageUrl: imageUrl });
    }

    handleSelectFromDevice = () => {}

    handleSelectFromUrl = () => {}

    handleUpload = () => {}
    
    handleUploadCancel = () => {}

    handleSearchQueryChange = (event) => {
        const searchQuery = event.target.value;
        const filteredImages = DEMO_IMAGES_DATA.filter(image => image.title.indexOf(searchQuery) > -1);
        const images = searchQuery.length > 0 ? filteredImages : DEMO_IMAGES_DATA;

        this.setState({ images });
        this.setState({ searchQuery });
    }

    handleSearchQueryClear = () => {
        this.setState({ searchQuery: '' });
        this.setState({ images: DEMO_IMAGES_DATA });
    }

    render() {
        const { state, props } = this;
        const { className, classes } = props;
        const { labels, activeTabIndex, searchQuery } = state;

        return (
            <div className={classNames(className, classes.root)}>
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label={labels.chooseTab || 'Choose Image'} />
                    <Tab 
                        className={classes.Tab} 
                        label={labels.uploadTab || 'Upload Image'} />
                </Tabs>
                <SwipeableViews
                    className={classes.SwipeableViews} 
                    animateHeight
                    action={(actions) => {this.swipeableActions = actions}}
                    index={activeTabIndex}
                    onChangeIndex={this.handleTabSwipe}>
                    <TabContainer className={classes.TabContainer}>
                        <Toolbar className={classes.Toolbar}>
                            <TextField
                                id="search"
                                placeholder={labels.search || 'Search'}
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
                                                onClick={this.handleSearchQueryClear}>
                                                <ClearIcon fontSize="small" />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                value={searchQuery}
                                onChange={this.handleSearchQueryChange}
                            />
                        </Toolbar>
                        <div className={classes.gridContainer}>
                            <Grid container spacing={16}>
                                {state.images.map((image, index) => 
                                    <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                                        <Card 
                                            className={classNames(classes.Card, (state.selectedImageUrl === image.url) ? classes.Card_selected : null)}
                                            onClick={() => this.handleSelect(image.url)}
                                        >
                                            <CardHeader 
                                                className={classes.CardHeader}
                                                title={
                                                    <Typography component="h3" className={classes.CardHeader_title}>{image.title}</Typography>
                                                } />
                                            <CardMedia image={image.url} className={classes.CardMedia} />
                                            <CardActions className={classes.CardActions}>
                                                <Button 
                                                    className={classes.Button_addCaption} 
                                                    variant="outlined" 
                                                    fullWidth 
                                                    size="small"
                                                >{labels.selectButton || 'Select'}</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )}
                                {state.images.length === 0 ? (
                                    <Typography 
                                        className={classes.Typography_emptyMessage}
                                        variant="body1">No memes found</Typography>
                                ) : null}
                            </Grid>
                            {state.images.length > 0 ? (
                                <div className={classes.progressContainer}>
                                    <CircularProgress />
                                </div>
                            ) : null}
                        </div>
                    </TabContainer>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.tabContent}>
                            <input
                                accept="image/*"
                                className={classes.input_uploadFile}
                                id="upload-file"
                                multiple
                                type="file"
                                onChange={this.handleSelectFromDevice}
                            />
                            <label htmlFor="upload-file">
                                <Button 
                                    variant="contained"
                                    size="large" 
                                    color="secondary" 
                                    component="span" 
                                    className={classes.Button}
                                >
                                    <AddPhotoAlternateIcon className={classes.Icon} /> 
                                    Choose Image
                                </Button>
                            </label>
                            <Typography className={classes.Typography_uploadFile} variant="body1">or, drop Image here</Typography>
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
                                                color="secondary"
                                                onClick={this.handleSelectFromUrl}
                                            >Go</Button>
                                        </InputAdornment>
                                    )
                                }} />
                            <div className={classes.uploadingContainer}>
                                <LinearProgress 
                                    className={classes.LinearProgress}
                                    color="secondary" 
                                    variant="determinate" 
                                    value={80} />
                                <IconButton
                                    aria-label="Remove uploading"
                                    onClick={this.handleUploadCancel}>
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            </div>
                        </div>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

ImageManager.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageManager);