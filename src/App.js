// react & router
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';

// style
import './App.css';

// routes
import Home from './routes/Home/Home';
import Codex from './routes/Codex';
import DefaultPage from './routes/DefaultPage';

// components
import Footer from './components/Footer';
import Menu from './components/Menu';

// @material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// json
import { techJSON } from './json/tech';
import { pagesJSON } from './json/pages';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex'
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  title: {
    flexGrow: 1
  }
}));

/********************************************************************************
 * Create the App Hook
 ******************************************************************************* */

const App = props => {
  const classes = useStyles();
  const theme = useTheme();

  /********************************************************************************
   * Scrolling
   ******************************************************************************* */

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const updateView = () => {
    var contentSections = document.getElementsByClassName('cd-section');
    var navigationItems = document
      .getElementById('cd-vertical-nav')
      .getElementsByTagName('a');

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute('data-number'), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add('is-selected');
      } else {
        navigationItems[activeSection].classList.remove('is-selected');
      }
    }
  };

  const smoothScroll = target => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  };

  /********************************************************************************
   * Return App
   ******************************************************************************* */
  return (
    <>
      <div className={classes.root}>
        <Menu smoothScroll={smoothScroll} />

        <main id="main">
          <Switch>
            {pagesJSON.map((page, index) => (
              <Route
                key={index}
                path={page.slug}
                render={props => <page.render markDown={page.md} {...props} />}
              />
            ))}

            <Route
              path="/"
              exact
              render={props => (
                <Home
                  updateView={updateView}
                  smoothScroll={smoothScroll}
                  techJSON={techJSON}
                  {...props}
                />
              )}
            />
          </Switch>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(App);
