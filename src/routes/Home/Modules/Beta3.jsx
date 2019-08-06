import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// components
//import { useStateValue } from "../../../contexts/state";

// Assets
import b31 from '../../../assets/img/b31.png';
import b32 from '../../../assets/img/b32.png';
import b33 from '../../../assets/img/b33.png';
import wallet from '../../../assets/img/OpenCPEs-Wallet.png';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#EFEFEF',
    paddingTop: '100px',
    paddingBottom: '100px'
  },
  paper: {
    boxShadow: 'none',
    borderRadius: '0px',
    padding: '55px 55px 45px 55px'
  },
  title: {
    textAlign: 'center',
    paddingBottom: '25px'
  },
  text: {
    textAlign: 'center',
    paddingBottom: '15px'
  },
  b3img: {
    display: 'block',
    margin: '0px auto 40px auto',
    maxWidth: '100%'
  },
  walletImg: {
    display: 'block',
    maxWidth: '80%',
    margin: '0px auto 10px auto'
  }
}));

const Beta3 = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <section id="~Beta3">
          <Container maxWidth="lg">
            <Grid container direction="row" spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <img
                    src={b32}
                    alt="Create a Claim"
                    className={classes.b3img}
                  />
                  <Typography variant="h3" className={classes.title}>
                    How to create a Self Claim
                  </Typography>
                  <Typography className={classes.text}>
                    Simply open the OpenCPEs Wallet, enter the amount of the
                    credit (e.g. “1”) and the description (e.g. “1 hour of CPE
                    activity X”) and hit the plus key.
                  </Typography>
                  <img
                    src={wallet}
                    alt="OpenCPEs Wallet"
                    className={classes.walletImg}
                  />
                  <Typography className={classes.text}>That’s it.</Typography>
                  <Typography className={classes.text}>
                    We’ll be adding support so you can add the evidence you
                    need, whether it’s a photo of the receipt for the book you
                    read, a video of you doing the activity or a longer text
                    description of what you did.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <img
                    src={b33}
                    alt="Accepting a one-time use OpenCPE Claim"
                    className={classes.b3img}
                  />
                  <Typography variant="h3" className={classes.title}>
                    Accepting a One-Time Use OpenCPE Claim
                  </Typography>
                  <Typography className={classes.text}>
                    The OpenCPEs Wallet uses a custom URL scheme to accept data
                    for claims and register them, this allows simple text
                    strings to be used to pass data which makes it much easier
                    to secure and audit.
                  </Typography>
                  <Typography className={classes.text}>
                    We currently have a webpage at{' '}
                    <a href="https://demo.opencpes.com">
                      https://demo.opencpes.com
                    </a>{' '}
                    that shows a one-time use QR code (click the blank page to
                    generate it). Simply take a picture of it using your camera
                    app (or QR code scanner of your choice) which will prompt
                    you to open the URL in the OpenCPEs Wallet. Once opened it
                    will accept and register the claim. The first OpenCPEs
                    wallet to register the QR code “wins”, and no further
                    instances of that QR code can be registered.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <img
                    src={b31}
                    alt="Validate a Claim"
                    className={classes.b3img}
                  />
                  <Typography variant="h3" className={classes.title}>
                    How to Validate an OpenCPEs Claim
                  </Typography>
                  <Typography className={classes.text}>
                    Currently, you can validate a claim using the{' '}
                    <a href="https://demo-search.opencpes.com/">
                      https://demo-search.opencpes.com/
                    </a>{' '}
                    web page, simply cut and paste the hash value in and it will
                    confirm if that exists in the chain or not. This web page
                    uses JavaScript and simply walks through the chain to find
                    the value you’re searching for, you can easily download all
                    the data and the JavaScript and run it locally if you want.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Beta3;
