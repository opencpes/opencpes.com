import React from 'react';
import { Link } from 'react-router-dom';

// Components
import StayConnected from '../StayConnected';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Assets

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
    lineHeight: '1.7'
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
      fontWeight: '700',
      paddingLeft: '15px'
    }
  }
}));

const Footer = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();

  return (
    <>
      <StayConnected />
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
                <Link
                  to="/privacy-policy"
                  className={classes.footerBodyMenuLink}
                >
                  About OpenCPEs
                </Link>
                <br />
                <Link
                  to="/privacy-policy"
                  className={classes.footerBodyMenuLink}
                >
                  What is Centsi?
                </Link>
                <br />
                <Link
                  to="/privacy-policy"
                  className={classes.footerBodyMenuLink}
                >
                  Leadership
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography className={classes.footerBodyMenu}>
                <Link
                  to="/privacy-policy"
                  className={classes.footerBodyMenuLink}
                >
                  Link Here
                </Link>
                <br />
                <Link
                  to="/privacy-policy"
                  className={classes.footerBodyMenuLink}
                >
                  Link Here
                </Link>
                <br />
                <Link
                  to="/privacy-policy"
                  className={classes.footerBodyMenuLink}
                >
                  Link Here
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={false} sm={false} md={4} />
            <Grid item xs={6} sm={3} md={2}>
              <Typography className={classes.address}>
                <b>CONTACT US</b> <br />
                CPE Corporate Office
                <br />
                123 Main St
                <br />
                Bellingham, WA 98225
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography className={classes.address}>
                <br />
                <br />
                (555) 555-5555
                <br />
                support@CPE.com
              </Typography>
            </Grid>
          </Grid>

          <div className={classes.footerBase}>
            <div className={classes.logoWrap}>
              <span className="ph">CPE LOGO HERE</span>
            </div>

            <Typography className={classes.footerBaseText}>
              <Link to="/privacy-policy" className={classes.footerBaseMenuLink}>
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className={classes.footerBaseMenuLink}
              >
                Terms Of Service
              </Link>
              <span>&copy; 2019 OpenCPEs&trade;. All rights reserved.</span>
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
