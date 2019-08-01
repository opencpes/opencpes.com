// react & router
import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// style
import './App.css';

// routes
import Home from './routes/Home/Home';
import Codex from './routes/Codex';

// components
import Footer from './components/Footer';
import Menu from './components/Menu';
import Mobile from './components/Menu/Mobile';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

// json
import { pagesJSON } from './json/pages';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex'
  }
}));

/********************************************************************************
 * Create the App Hook
 ******************************************************************************* */

const App = props => {
  const classes = useStyles();

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
    };
    animateScroll();
  };

  /********************************************************************************
   * Return App
   ******************************************************************************* */
  return (
    <>
      <div className={classes.root}>
        <Hidden smDown>
          <Menu smoothScroll={smoothScroll} />
        </Hidden>
        <Hidden mdUp>
          <Mobile />
        </Hidden>

        <main id="main">
          <Switch>
            {pagesJSON.map((page, index) => (
              <Route
                key={index}
                path={page.slug}
                render={props => (
                  <page.render
                    markDown={page.md}
                    pagesJSON={pagesJSON}
                    {...props}
                  />
                )}
              />
            ))}

            <Route
              path="/codex"
              exact
              render={props => <Codex pagesJSON={pagesJSON} {...props} />}
            />

            <Route
              path="/"
              exact
              render={props => (
                <Home
                  updateView={updateView}
                  smoothScroll={smoothScroll}
                  pagesJSON={pagesJSON}
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
