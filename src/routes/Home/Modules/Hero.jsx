import React from 'react';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Assets
import { ReactComponent as Henry } from '../../../assets/img/OpenCPEs_Henry.svg';
import { ReactComponent as Sally } from '../../../assets/img/OpenCPEs_Sally.svg';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#E2F2FF',
    minHeight: '300px',
    padding: '100px 0'
  },
  title: {
    textAlign: 'center',
    paddingBottom: '35px'
  }
}));

const Hero = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();

  return (
    <>
      <div id="Hero" className="hero-section  cd-section" />
      <div className={classes.root}>
        <section>
          <Container maxWidth="lg" className={classes.gridWrap}>
            <Typography variant="h2" className={classes.title}>
              Transforming Knowledge into Currency
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Henry className={classes.guys} />
              </Grid>
              <Grid item xs={6}>
                <Sally className={classes.guys} />
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Hero;
