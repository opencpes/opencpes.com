import React from 'react';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Assets
//import { ReactComponent as Henry } from '../../../assets/img/OpenCPEs_Henry.svg';
//import { ReactComponent as Sally } from '../../../assets/img/OpenCPEs_Sally.svg';
import herobeta from '../../../assets/img/heroecpes.png';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#E2F2FF',
    minHeight: '300px',
    padding: '100px 0',
    backgroundImage: `url(${herobeta})`,
    backgroundPosition: '79% 50%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '89% 50%'
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none'
    }
  },
  title: {
    paddingBottom: '35px'
  },
  subTitle: {
    fontSize: '17px',
    lineHeight: '1.3em'
  }
}));

const Hero = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();

  return (
    <>
      <div id="Hero" className="hero-section  cd-section">
        <div className={classes.root}>
          <section>
            <Container maxWidth="lg" className={classes.gridWrap}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} md={5}>
                  <Typography variant="h1" className={classes.title}>
                    Transforming Knowledge into Currency
                  </Typography>
                  <Typography className={classes.subTitle}>
                    <b>Learn</b> - expand your Cybersecurity educational horizon{' '}
                    <br />
                    <b>Track</b> - put your educational credits in your wallet{' '}
                    <br />
                    <b>Get Rewarded</b> - enjoy the career benefits of verified
                    expertise
                  </Typography>
                  <Typography className={classes.text}>
                    With OpenCPEs, professionals ​are rewarded for real
                    accomplishments, both traditional or non-traditional.
                    Because any learning experience can be tracked and credited,
                    OpenCPEs makes the Cybersecurity industry bigger and better
                    by enhancing its most important​ ​resource - People.
                  </Typography>
                </Grid>
                <Grid item xs={7} />
              </Grid>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
