import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// components
//import { useStateValue } from "../../../contexts/state";

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#474E5E'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '15px'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    '& a': {
      color: '#fff'
    },
    paddingBottom: '25px'
  },
  gridWrap: {
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'center'
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

const What = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <section id="What" className="what-section  cd-section">
          <Container maxWidth="lg" className={classes.gridWrap}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={9} md={7}>
                <Typography variant="h2" className={classes.title}>
                  What is OpenCPEs?
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  OpenCPEs is a new Blockchain project from Cloud Security
                  Alliance that allows you to create, share, confirm and
                  validate your accomplishments and qualifications, publicly or
                  privately without the need for any third parties to see your
                  data. OpenCPEs will revolutionize how security professionals
                  measure their professional development experiences.
                </Typography>
                <div className={classes.buttonWrap}>
                  <Button
                    variant="contained"
                    href="#Beta"
                    onClick={e => {
                      var isMobile = navigator.userAgent.match(
                        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                      );
                      if (isMobile) {
                        // if we are on mobile device the scroll into view will be managed by the browser
                      } else {
                        e.preventDefault();
                        props.smoothScroll('Beta');
                      }
                    }}
                    className={classes.button}
                  >
                    Join the Beta
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
};

export default What;
