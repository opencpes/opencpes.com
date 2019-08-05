import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// components
//import { useStateValue } from "../../../contexts/state";

// Assets
import qr from '../../../assets/img/qr.png';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  backgroundSkewWrap: {
    maxWidth: '100%',
    overflow: 'hidden',
    paddingTop: '60px',
    paddingBottom: '60px'
  },
  backgroundSkew1: {
    background: '#23B3C8',
    transform: 'rotate(2deg)'
  },
  backgroundSkew2: {
    background: '#23B3C8',
    transform: 'rotate(-4deg)'
  },
  root: {
    background: '#474E5E',
    paddingTop: '30px',
    paddingBottom: '30px',
    transform: 'rotate(2deg)'
  },
  topTitle: {
    textAlign: 'center',
    color: '#BCBCBC',
    paddingBottom: '25px'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '55px'
  },
  text: {
    color: '#fff',
    paddingBottom: '25px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  gridWrap: {
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  qr: {
    maxWidth: '70%',
    border: '20px solid #7CCFDD',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: '0 auto 30px auto'
    }
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  button: {
    color: '#fff',
    background: '#E64C39',
    '&:hover': {
      cursor: 'pointer',
      background: '#A03027'
    }
  }
}));

const Beta = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.backgroundSkewWrap}>
        <div className={classes.backgroundSkew1}>
          <div className={classes.backgroundSkew2}>
            <div className={classes.root}>
              <section>
                <Container maxWidth="lg" className={classes.gridWrap}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={9} md={7}>
                      <Typography variant="h4" className={classes.topTitle}>
                        OpenCPEs BASICS
                      </Typography>
                      <Typography variant="h2" className={classes.title}>
                        Getting Started with OpenCPE
                      </Typography>

                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item xs={12} md={5}>
                          <img src={qr} alt="QR" className={classes.qr} />
                        </Grid>

                        <Grid item xs={12} md={7}>
                          <Typography variant="body1" className={classes.text}>
                            Use the QR code to the left, or the button below to
                            access the beta ¢entsiWallet.
                          </Typography>
                          <Typography variant="body1" className={classes.text}>
                            <i>
                              *At this time only a Native iOS app is available.
                              OpenCPEs will be releasing a native Android
                              application later.
                            </i>
                          </Typography>
                          <div className={classes.buttonWrap}>
                            <Button
                              variant="contained"
                              onClick={() => {
                                window.location.href =
                                  'https://www.google.com/';
                              }}
                              className={classes.button}
                            >
                              Install the ¢entsiWallet
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beta;
