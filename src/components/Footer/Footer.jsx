import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Components
import StayConnected from '../StayConnected';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Assets
import { ReactComponent as OpenCPEsMark } from '../../assets/img/openCPEs_logo_22.svg';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    margin: '0px auto',
    padding: '40px 0 0 0'
  },
  footerBody: {
    padding: '0 0 15px 0'
  },
  footerBodyMenu: {
    paddingBottom: '30px',
    lineHeight: '1.7'
  },
  footerBodyMenuLink: {
    textDecoration: 'none',
    fontSize: '19px',
    color: '#54585A',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  address: {
    fontSize: '16px',
    lineHeight: '1.7',
    textAlign: 'right',
    '& a': {
      color: '#54585A'
    }
  },
  footerBase: {
    padding: '20px 0 0',
    borderTop: '2px solid #54585A',
    display: 'flex'
  },
  logoWrap: {
    flexGrow: '1'
  },
  footerBaseMenuLink: {
    fontSize: '16px',
    color: '#54585A',
    textDecoration: 'none',
    paddingRight: '15px',
    '&:hover, &.active:hover': {
      textDecoration: 'underline'
    }
  },
  footerBaseText: {
    '& span': {
      fontWeight: '400',
      paddingLeft: '15px'
    }
  },
  OpenCPEsMark: {
    maxWidth: '150px',
    marginTop: '3px'
  }
}));

const Footer = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();

  const [isHome, setIsHome] = React.useState(false);

  useEffect(() => {
    if (props.location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [props.location.pathname]);

  return (
    <>
      {isHome ? <></> : <StayConnected />}

      <div id="Footer" name="Footer" className={classes.root}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            //justify="space-between"
            alignItems="flex-start"
            className={classes.footerBody}
          >
            <Grid item xs={6} sm={3} md={2}>
              <Typography className={classes.footerBodyMenu}>
                <Link to="/" className={classes.footerBodyMenuLink}>
                  OpenCPEs
                </Link>
                <br />
                <Link
                  to="/codex/about-opencpes"
                  className={classes.footerBodyMenuLink}
                >
                  About OpenCPEs
                </Link>
                {/*<br />
                <Link
                  to="/codex/getting-started"
                  className={classes.footerBodyMenuLink}
                >
                  Get Started
                </Link>*/}
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography className={classes.footerBodyMenu}>
                {/*<Link to="/codex/codex" className={classes.footerBodyMenuLink}>
                  Codex
                </Link>
                <br />
                <Link to="/codex/faq" className={classes.footerBodyMenuLink}>
                  FAQ
                </Link>
                <br />*/}
                <Link
                  to="/codex/source-code"
                  className={classes.footerBodyMenuLink}
                >
                  Source Code
                </Link>
                <br />
                <Link
                  to="/codex/contact"
                  className={classes.footerBodyMenuLink}
                >
                  Contact
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={false} sm={false} md={4} />
            <Grid item xs={6} sm={3} md={4}>
              <Typography className={classes.address}>
                <b>CONTACT US</b> <br />
                {/*  CPE Corporate Office
                <br />
                123 Main St
                <br />
                Bellingham, WA 98225*/}
                <a href="mailto:contact@opencpes.com">contact@opencpes.com</a>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              {/*  <Typography className={classes.address}>
                <br />
                <br />
                (555) 555-5555
                <br />
                support@CPE.com
  </Typography> */}
            </Grid>
          </Grid>

          <div className={classes.footerBase}>
            <div className={classes.logoWrap}>
              <OpenCPEsMark className={classes.OpenCPEsMark} />
            </div>

            <Typography className={classes.footerBaseText}>
              {/*<Link to="/privacy-policy" className={classes.footerBaseMenuLink}>
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className={classes.footerBaseMenuLink}
              >
                Terms Of Service
</Link>*/}
              <span>&copy; 2019 OpenCPEs&trade;. All rights reserved.</span>
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};

export default withRouter(Footer);
