import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton';
import AppContainer from '../AppContainer/AppContainer';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../../common/AppIcon/AppIcon';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './AppFooter.styles';

const LogoSection = ({ className, classes }) => (
    <Grid item xs={12} md={3} lg={4} className={className}>
        <AppLogo className={classes.AppLogo}></AppLogo>
        <Grid className={classes.Grid_socials} container>
            <Grid item xs={4}>
                <IconButton 
                    component="a" 
                    target="_blank" 
                    href="https://twitter.com/"
                >
                    <AppIcon 
                        className={classes.AppIcon} 
                        icon="twitter_dark" 
                        size="small"></AppIcon>
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <IconButton 
                    component="a" 
                    target="_blank" 
                    href="https://www.facebook.com/"
                >
                    <AppIcon 
                        className={classes.AppIcon} 
                        icon="facebook_dark" 
                        size="small"></AppIcon>
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <IconButton 
                    component="a" 
                    target="_blank" 
                    href="https://plus.google.com/"
                >
                    <AppIcon 
                        className={classes.AppIcon} 
                        icon="google-plus_dark" 
                        size="small"></AppIcon>
                </IconButton>
            </Grid>
        </Grid>
        <Typography component="div">© 2013 - 2018 Imageresize.org</Typography>
    </Grid>
);

const AppFooter = ({ className, classes }) => (
    <footer className={classNames(className, classes.root)}>
        <Divider className={classes.Divider} />
        <AppContainer>
            <Grid container>
                <Hidden only={['xs', 'sm']}>
                    <LogoSection classes={classes} />
                </Hidden>
                <Grid item xs={12} md={9} lg={8}>
                    {/* Menus */}
                    <Grid container>
                        <Grid item xs={6} md={3}>
                            <List disablePadding component="nav">
                                <ListItem dense={true}>
                                    <ListItemText className={classes.ListItemText_title} primary="Image Tools" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/image/resize">
                                    <ListItemText className={classes.ListItemText} primary="Image Resize" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/image/bulk-resize">
                                    <ListItemText className={classes.ListItemText} primary="Bulk Image Resize" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/image/compress">
                                    <ListItemText className={classes.ListItemText} primary="Image Compressor" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <List disablePadding component="nav">
                                <ListItem dense={true}>
                                    <ListItemText className={classes.ListItemText_title} primary="Features" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/feature/cropping">
                                    <ListItemText className={classes.ListItemText} primary="Crop Images" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/feature/editing">
                                    <ListItemText className={classes.ListItemText} primary="Photo Filters" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/feature/compressing">
                                    <ListItemText className={classes.ListItemText} primary="Photo Adjust" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <List disablePadding component="nav">
                                <ListItem dense={true}>
                                    <ListItemText className={classes.ListItemText_title} primary="About" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/contact">
                                    <ListItemText className={classes.ListItemText} primary="Contact" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/help">
                                    <ListItemText className={classes.ListItemText} primary="Help" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/feedback">
                                    <ListItemText className={classes.ListItemText} primary="Feedback" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <List disablePadding component="nav">
                                <ListItem dense={true}>
                                    <ListItemText className={classes.ListItemText_title} primary="Legal" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/privacy">
                                    <ListItemText className={classes.ListItemText} primary="Privacy" />
                                </ListItem>
                                <ListItem button dense={true} component={Link} to="/terms-of-service">
                                    <ListItemText className={classes.ListItemText} primary="Terms of Service" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    {/* /Menus */}
                </Grid>
                <Hidden only={['md', 'lg', 'xl']}>
                    <Grid item xs={12}> 
                        <Divider className={classes.Divider_bottom} />
                    </Grid>
                    <LogoSection className={classes.LogoSection} classes={classes} />
                </Hidden>
            </Grid>
        </AppContainer>
    </footer>
);

AppFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);