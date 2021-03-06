import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import AppContainer from '../../layouts/AppContainer/AppContainer';
import MemeMaker from '../../tools/MemeMaker/MemeMaker';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './MemeMakerPage.styles';

const MemeMakerPage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <AppContainer>
            <MemeMaker />
        </AppContainer>
        <Divider className={classes.Divider} />
        <AppContainer>
            <Grid container spacing={40}>
                <Grid className={classes.Grid_item} item xs={12}>
                    <Typography variant="h2" gutterBottom>How does it work?</Typography>
                    <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>What does it do?</Typography>
                    <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Why should I use it?</Typography>
                    <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                </Grid>
            </Grid>
        </AppContainer>
    </div>
);
 
MemeMakerPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeMakerPage);