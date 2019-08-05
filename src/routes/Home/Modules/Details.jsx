import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// components
//import { useStateValue } from "../../../contexts/state";

// Assets
import d1 from '../../../assets/img/d1.png';
import d2 from '../../../assets/img/d2.png';
import d3 from '../../../assets/img/d3.png';
import d4 from '../../../assets/img/d4.png';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    paddingTop: '100px',
    paddingBottom: '60px'
  },
  dimg: {
    display: 'block',
    margin: '0px auto 20px auto'
  },
  detailsWrap: {
    padding: '0 60px'
  },
  title: {
    textAlign: 'center',
    paddingBottom: '15px'
  },
  text: {
    textAlign: 'center'
  }
}));

const Details = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <section id="Details" className="details-section  cd-section">
          <Container maxWidth="lg" className={classes.gridWrap}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              spacing={10}
            >
              <Grid item xs={12} md={6}>
                <img src={d4} alt="Something" className={classes.dimg} />
                <div className={classes.detailsWrap}>
                  <Typography variant="h2" className={classes.title}>
                    About OpenCPEs
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    OpenCPEs is a project from Cloud Security Alliance Labs,
                    which is affiliated with the Cloud Security Alliance, The
                    Cloud Security Alliance and Cloud Security Alliance Labs
                    work together to create and build innovative security and
                    privacy solutions for the future.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={d3} alt="Something" className={classes.dimg} />
                <div className={classes.detailsWrap}>
                  <Typography variant="h2" className={classes.title}>
                    What is ¢entsi
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    ¢entsi is not a cryptocurrency. ¢entsi is a pseudo
                    cryptocurrency, it can be used to measure value but unlike a
                    currency, it cannot be spent, once ¢entsi is entered into a
                    users wallet it cannot leave. The main goal of ¢entsi is to
                    provide an abstraction and make it easier for users to
                    express the value of their CPE history.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={d2} alt="Something" className={classes.dimg} />
                <div className={classes.detailsWrap}>
                  <Typography variant="h2" className={classes.title}>
                    Harnessing Blockchain Technology
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    None of the existing Blockchains had the privacy technology
                    we needed, so rather than add another layer on top of
                    something complex we created a proof of concept chain that
                    can be used to validate data and prove it’s veracity. We
                    also took care to ensure that our data and data processing
                    is blockchain agnostic, let’s face it, the blockchain
                    technology we have today will be eclipsed in a few years by
                    much better technologies.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={d1} alt="Something" className={classes.dimg} />
                <div className={classes.detailsWrap}>
                  <Typography variant="h2" className={classes.title}>
                    Privacy by Default
                  </Typography>
                  <Typography variant="body1" className={classes.text}>
                    Designed from the ground up to be insanely private! We don’t
                    need access to your camera, microphone or location. We don’t
                    store client data directly in our OpenCPEs OCL blockchain.
                    We do not transfer client data to third parties unless they
                    already have it (for confirmation purposes). We give you
                    explicit end-to-end control of your data.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Details;
