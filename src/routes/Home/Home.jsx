// react & router
import React, { useEffect } from 'react';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';

// modules
import HeroModule from './Modules/Hero';
import DetailsModule from './Modules/Details';
import TechModule from './Modules/Tech';
import WhatModule from './Modules/What';
import BetaModule from './Modules/Beta';
import Beta2Module from './Modules/Beta2';
import Beta3Module from './Modules/Beta3';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    //background: '#474E5E'
  },
  cdVerticalNav: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const LandingPage = props => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    if (window.location.href.lastIndexOf('#') > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener('scroll', props.updateView);
    props.updateView();
    // Clean up after this effect:
    return function cleanup() {
      // remove event listener
      window.removeEventListener('scroll', props.updateView);
    };
  }, [props]);

  return (
    <>
      <HeroModule smoothScroll={props.smoothScroll} />
      <WhatModule smoothScroll={props.smoothScroll} />
      <DetailsModule />
      <div name="Beta" id="Beta" className="beta-section  cd-section">
        <BetaModule />
        <Beta2Module />
        <Beta3Module />
      </div>
      <TechModule pagesJSON={props.pagesJSON} />

      <nav id="cd-vertical-nav" className={classes.cdVerticalNav}>
        <ul>
          <li>
            <a
              href="#Hero"
              data-number="1"
              className="is-selected"
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  props.smoothScroll('Hero');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Top</span>
            </a>
          </li>
          <li>
            <a
              href="#What"
              data-number="2"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  props.smoothScroll('What');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">About</span>
            </a>
          </li>
          <li>
            <a
              href="#Details"
              data-number="3"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  props.smoothScroll('Details');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Details</span>
            </a>
          </li>
          <li>
            <a
              href="#Beta"
              data-number="4"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  props.smoothScroll('Beta');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Beta</span>
            </a>
          </li>
          <li>
            <a
              href="#Tech"
              data-number="5"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  props.smoothScroll('Tech');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Tech</span>
            </a>
          </li>
          <li>
            <a
              href="#StayConnected"
              data-number="6"
              className=""
              onClick={e => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  props.smoothScroll('StayConnected');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Connect</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LandingPage;
