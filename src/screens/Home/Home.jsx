// react & router
import React, { useEffect } from 'react';

// modules
import HeroModule from './Modules/Hero';
import TrustModule from './Modules/Trust';
import DetailsModule from './Modules/Details';
// @material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
// context
import { useStateValue } from '../../contexts/state';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

const LandingPage = props => {
  const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    // use global context state to close drawer if closed
    // TODO: this needs responsive reivew.
    dispatch({
      type: 'setDrawerState',
      drawerState: false
    });
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    if (window.location.href.lastIndexOf('#') > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener('scroll', updateView);
    updateView();
    // Clean up after this effect:
    return function cleanup() {
      // remove event listener
      window.removeEventListener('scroll', updateView);
    };
  }, []);

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

  return (
    <>
      <HeroModule smoothScroll={smoothScroll} />
      <DetailsModule />
      <TrustModule />

      <nav id="cd-vertical-nav">
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
                  smoothScroll('Hero');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Top</span>
            </a>
          </li>
          <li>
            <a
              href="#Details"
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
                  smoothScroll('Details');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Details</span>
            </a>
          </li>
          <li>
            <a
              href="#Trust"
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
                  smoothScroll('Trust');
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Trust</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LandingPage;
