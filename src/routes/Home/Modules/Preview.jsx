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
    background: '#e2f2ff',
    paddingTop: '90px',
    paddingBottom: '100px'
  },
  title: {
    textAlign: 'center',
    paddingBottom: '25px'
  },
  text: {
    textAlign: 'center',
    paddingBottom: '25px',
    '& a': {
      color: '#54585A'
    }
  },
  video: {
    border: '20px solid #7CCFDD',
    margin: '20px auto 0 auto',
    display: 'block',
    maxWidth: '60%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  }
}));

const Preview = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <section id="Preview" name="Preview">
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={9} md={5}>
                <Typography variant="h2" className={classes.title}>
                  centsayWallet Technology Preview
                </Typography>
                <Typography className={classes.text}>
                  Watch as centsay are created using the OpenCPEs centsayWallet,
                  currently in technical beta for Apple iOS devices.
                </Typography>
                <Typography className={classes.text}>
                  If you want to be informed when the OpenCPEs centsayWallet
                  becomes generally available please signup to our announcement
                  list at:{' '}
                  <a href="mailto:announcements+subscribe@opencpes.com">
                    announcements+subscribe@opencpes.com
                  </a>{' '}
                  (a low volume announcement list for centsayWallet
                  announcements).
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
                src="https://blocks-blockchain-demo-opencpes-com.s3.us-east-2.amazonaws.com/video/ChainInteractionDemo.mp4"
                type="video/mp4"
              />
            </Video>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Preview;
