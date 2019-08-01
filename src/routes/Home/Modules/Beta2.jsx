import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// components
//import { useStateValue } from "../../../contexts/state";

// Assets

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    paddingTop: '60px',
    paddingBottom: '100px'
  },
  title: {
    textAlign: 'center',
    paddingBottom: '25px'
  },
  text: {
    textAlign: 'center',
    paddingBottom: '45px'
  },
  video: {
    border: '20px solid #7CCFDD',
    margin: '0px auto',
    display: 'block'
  }
}));

const Beta2 = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <section id="~Beta2">
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={9} md={5}>
                <Typography variant="h2" className={classes.title}>
                  Watch this Video and Create ¢entsi
                </Typography>
                <Typography className={classes.text}>
                  Create your first ¢entsi by watching the video below (a
                  pre-valued CPE) to learn about how to get started with
                  OpenCPEs. Intructions for submiting your self-claim are
                  included in the video and detailed in the next section.
                </Typography>
              </Grid>
            </Grid>

            <iframe
              src="https://player.vimeo.com/video/243244233"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className={classes.video}
              title="Learn about OpenCPEs"
            />
          </Container>
        </section>
      </div>
    </>
  );
};

export default Beta2;
