import React from 'react';

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
    background: '#059AAF',
    margin: '0px auto',
    padding: '50px 0 40px 0'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '25px'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    '& a': {
      color: '#fff'
    }
  }
}));

const StayConnected = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();

  return (
    <>
      <div
        id="StayConnected"
        name="StayConnected"
        className="tech-section  cd-section"
      >
        <div className={classes.root}>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={9} md={7}>
                <Typography variant="h2" className={classes.title}>
                  Join the Beta Announcement List
                </Typography>
                {/*<Typography variant="body1" className={classes.text}>
                  OpenCPEs is committed to protecting your privacy and providing
                  you with full control over any communications you choose to
                  receive from us. For this reason, we've created several Google
                  Groups allowing you to join us in the OpenCPEs revolution.
                  </Typography>*/}
                <Typography variant="body1" className={classes.text}>
                  The OpenCPEs centsiWallet is a mobile client, currently
                  available for Apple iOS in technical beta and in development
                  for Google Android. If you want to be informed when it becomes
                  generally available, please sign up to our announcement list
                  at{' '}
                  <a href="mailto:announcements+subscribe@opencpes.com">
                    announcements+subscribe@opencpes.com
                  </a>{' '}
                  (a low volume list for centsiWallet announcements).
                </Typography>
                {/*<Typography variant="body1" className={classes.text}>
                  To get <b>technical notifications</b> about the OpenCPEs
                  platform please join the development group by sending an email
                  to:{' '}
                  <a href="mailto:devlist+subscribe@opencpes.com">
                    devlist+subscribe@opencpes.com
                  </a>
                </Typography>*/}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default StayConnected;
