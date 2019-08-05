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
                    How to Create a Claim
                  </Typography>
                  <Typography className={classes.text}>
                    Creating a claim with OpenCPEs is simple. You open the
                    OpenCPEs mobile client in landscape mode and click the
                    “Credit is issued”
                  </Typography>
                  <Typography className={classes.text}>
                    Enter an amount of ¢entsi, in this case we’ll use 0.1
                    centsi, click ok and then enter a description of the
                    activity. We’ll save this one as “blackhat OpenCPEs demo”
                  </Typography>
                  <Typography className={classes.text}>
                    This generates a QR code that describes the Continuing
                    Professional Education (CPE) Claim.
                  </Typography>
                  <Typography className={classes.text}>
                    The person wanting to claim the CPE activity then simply
                    takes a picture of the claim QR code with their mobile
                    device using the camera app or QR code reader of their
                    choosing, which will prompt the user to open the URL in the
                    OpenCPEs mobile app and accept the claim if they want.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <img
                    src={b33}
                    alt="How to Accept a Claim"
                    className={classes.b3img}
                  />
                  <Typography variant="h3" className={classes.title}>
                    How to Accept a Claim
                  </Typography>
                  <Typography className={classes.text}>
                    To accept a CPE claim you simply take a picture of a claim
                    QR code with the camera app or QR code reader of your
                    choice, this will prompt you to open the URL in the OpenCPEs
                    mobile client if you want.
                  </Typography>
                  <Typography className={classes.text}>
                    Opening the URL in the OpenCPEs mobile client results in it
                    being accepted, and a registered claim QR code being
                    generated which can then be used to validate if the token is
                    properly registered or not.
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
                    How to Validate a Claim
                  </Typography>
                  <Typography className={classes.text}>
                    Validating an OpenCPE claim is simple, in the OpenCPEs
                    wallet where the claim was accepted you just open the claim
                    up by tapping on it which shows a validation QR code.
                  </Typography>
                  <Typography className={classes.text}>
                    Using another device with the OpenCPEs mobile app installed
                    simply take a picture of a validation QR code with the
                    camera app or QR code reader of your choice, this will
                    prompt you to open the URL in the OpenCPEs mobile client.
                  </Typography>
                  <Typography className={classes.text}>
                    Click the “Token is valid” and you’ll get a thumbs up if it
                    finds it in the OCLs blockchain, and a thumbs down if it
                    fails to find it.
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
