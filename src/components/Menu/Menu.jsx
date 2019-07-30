import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Link, withRouter } from 'react-router-dom';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// components

// Assets
import { ReactComponent as CentsiMark } from '../../assets/img/Centsi_mark_2.svg';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    zIndex: '999'
  },
  menuTop: {
    background: '#fff'
  },
  menuTopCon: {
    display: 'flex'
  },
  logoWrap: {
    flexGrow: '1'
  },
  menuBottom: {
    position: '-webkit-sticky',
    position: 'sticky',
    top: '0',
    padding: '10px 0',
    background: '#F5F5F5',
    boxShadow: '0px 7px 14px -9px rgba(0,0,0,0.75)',
    zIndex: '999'
  },
  menuBottomCon: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  menuBottomWrap: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  menuBottomLink: {
    color: '#54585A',
    fontSize: '15px',
    marginRight: '25px',
    fontWeight: '500',
    textDecoration: 'none',
    '&:hover, &.active:hover': {
      textDecoration: 'underline'
    }
  },
  centsiMark: {
    height: '30px',
    width: '30px',
    marginRight: '10px',
    marginBottom: '-4px'
  },
  menuBottomButton: {
    color: '#fff',
    background: '#23B3C8',
    '&:hover': {
      cursor: 'pointer',
      background: '#474E5E'
    }
  }
}));

const Menu = props => {
  const classes = useStyles();

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  });

  return (
    <>
      <div className={classes.menuTop} ref={ref}>
        <Container maxWidth="lg" className={classes.menuTopCon}>
          <div className={classes.logoWrap}>
            <span className="ph">CPE LOGO HERE</span>
          </div>
        </Container>
      </div>
      <header className={`stickyrow ${classes.menuBottom}`}>
        <Container maxWidth="lg" className={classes.menuBottomCon}>
          <div className={classes.menuBottomWrap}>
            <Link to="/" className={`hide-small-logo-${inView}`}>
              <CentsiMark className={classes.centsiMark} />
            </Link>
            <Link to="/getting-started" className={classes.menuBottomLink}>
              Get Started
            </Link>
            <Link to="/faq" className={classes.menuBottomLink}>
              FAQ
            </Link>
            <Link to="/codex" className={classes.menuBottomLink}>
              Codex
            </Link>
            <Link to="/codex/source-code" className={classes.menuBottomLink}>
              Source Code
            </Link>
          </div>

          <Button
            variant="contained"
            href="#Beta"
            onClick={e => {
              var isMobile = navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
              );
              if (isMobile) {
                // if we are on mobile device the scroll into view will be managed by the browser
              } else {
                e.preventDefault();
                if (props.location.pathname === '/') {
                  props.smoothScroll('Beta');
                } else {
                  props.history.push('/getting-started');
                }
              }
            }}
            className={classes.menuBottomButton}
          >
            Join the Beta
          </Button>
        </Container>
      </header>
    </>
  );
};

export default withRouter(Menu);
