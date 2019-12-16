import React from 'react';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// html5 video
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

// components
//import { useStateValue } from "../../../contexts/state";

// Assets
import leaf from '../../../assets/img/leaf.png';

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
    display: 'block',
    maxWidth: '60%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
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
                  Watch this Video and Create ¢entsay
                </Typography>
                <Typography className={classes.text}>
                  Create your first ¢entsay by watching the video below to learn
                  about getting started with the OpenCPEs mobile client.
                  Instructions for submitting your self-claims are included in
                  the video and detailed in the next section.
                </Typography>
              </Grid>
            </Grid>

            <Video
              autoPlay={false}
              loop={false}
              muted={false}
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              poster={leaf}
              onCanPlayThrough={() => {
                // Do stuff
              }}
              className={classes.video}
            >
              <source
                src="http://blocks-blockchain-demo-opencpes-com.s3.amazonaws.com/video/BlackHatDemoII.mp4"
                type="video/mp4"
              />
            </Video>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Beta2;
