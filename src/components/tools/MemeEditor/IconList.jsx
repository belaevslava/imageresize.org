import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './IconList.styles';
// DEMO DATA
import DEMO_ICONS_DATA from '../../../assets/demo/data/icons.json';

class IconList extends React.Component {
    state = {
        selectedIcon: '',
        icons: DEMO_ICONS_DATA || []
    };

    changeSelectedIcon = ({ target }) => {
        const iconIndex = target.value;
        const selectedIcon = this.state.icons[iconIndex];
        this.setState({ selectedIcon: selectedIcon });
    }

    render() {
        const { className, classes } = this.props;
        const { selectedIcon, icons } = this.state;
        
        return (
            <Typography component="div" className={`${className || ''} ${classes.root}`}>
                <Grid container spacing={24}>

                    {icons.map((icon, index) => (
                        <Grid item xs={2} key={index}>
                            <FormControlLabel 
                                aria-selected={selectedIcon === icon}
                                checked={selectedIcon === icon}
                                className={classes.FormControlLabel}
                                onChange={this.changeSelectedIcon}
                                name="icon"
                                value={String(index)}
                                control={
                                    <Radio className={classes.Radio}/>
                                }
                                label={
                                    <img 
                                        src={icon.url} 
                                        className={classes.image}
                                        alt=""
                                    />
                                }
                            />
                        </Grid>
                    ))}

                </Grid>
            </Typography>
        )
    };
}

IconList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconList);