import React, { useState, useEffect } from 'react';

import { Link, withRouter } from 'react-router-dom';

// Detection
import { isMobile, isSafari } from 'react-device-detect';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// components

// Assets
//import { ReactComponent as CentsayMark } from '../../assets/img/centsay.svg';
import { ReactComponent as OpenCPEsMark } from '../../assets/img/openCPEs_logo_22.svg';

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
    background: '#fff',
    padding: '12px 0 4px 0'
  },
  menuTopCon: {
    display: 'flex'
  },
  logoWrap: {
    flexGrow: '1'
  },
  logoLink: {
    textDecoration: 'none'
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
  centsayMark: {
    height: '30px',
    width: '30px',
    marginRight: '10px',
    marginBottom: '-4px'
  },
  menuBottomButton: {
    color: '#fff',
    background: '#e64c39',
    '&:hover': {
      cursor: 'pointer',
      background: '#b13728'
    }
  },
  OpenCPEsMark: {
    maxWidth: '200px'
  }
}));

const Menu = props => {
  const classes = useStyles();

  const [actionButton, setActionButton] = useState(null);

  useEffect(() => {
    if (props.location.pathname === '/') {
      setActionButton('Sign Up for Beta');
    } else {
      setActionButton('Sign Up for Beta');
    }
  }, [props.location.pathname]);

  return (
    <>
      <div className={classes.menuTop}>
        <Container maxWidth="lg" className={classes.menuTopCon}>
          <div className={classes.logoWrap}>
            <Link to="/" className={classes.logoLink}>
              <OpenCPEsMark className={classes.OpenCPEsMark} />
            </Link>
          </div>
        </Container>
      </div>
      <header className={`stickyrow ${classes.menuBottom}`}>
        <Container maxWidth="lg" className={classes.menuBottomCon}>
          <div className={classes.menuBottomWrap}>
            <Link to="/codex/about-opencpes" className={classes.menuBottomLink}>
              About OpenCPEs
            </Link>
            <Link to="/codex/contact" className={classes.menuBottomLink}>
              Contact
            </Link>
            {/*<Link to="/roadmap" className={classes.menuBottomLink}>
              Roadmap
            </Link>*/}
          </div>

          <Button
            variant="contained"
            href="#StayConnected"
            onClick={e => {
              if (isMobile || isSafari) {
                e.preventDefault();
                // if on safari or a mobile device, push directly to /codex/contact
                props.history.push('/codex/contact');
              } else {
                e.preventDefault();
                //if (props.location.pathname === '/') {
                props.smoothScroll('StayConnected');
                //} else {
                //props.smoothScroll('StayConnected');
                //props.history.push('/codex/getting-started');
                //}
              }
            }}
            className={classes.menuBottomButton}
          >
            {/** frags required so as not to have a missing child error */}
            <>{actionButton}</>
          </Button>
        </Container>
      </header>
    </>
  );
};

export default withRouter(Menu);
