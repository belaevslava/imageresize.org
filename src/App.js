import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppFooter from './components/layouts/AppFooter/AppFooter';
import AppRouter from './components/layouts/AppRouter/AppRouter';
// Theme
import theme from './App.theme';
// Styles
import styles from './App.styles';

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className={classes.root}>
      <AppHeader />
      <main className={classes.main}>
        <AppRouter />
      </main>
      <AppFooter />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
