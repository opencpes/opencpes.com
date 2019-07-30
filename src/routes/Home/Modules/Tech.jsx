import React from 'react';

import { Link } from 'react-router-dom';

// stack grid
import StackGrid from 'react-stack-grid';

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
  topTitle: {
    textAlign: 'center',
    color: '#BCBCBC',
    paddingBottom: '25px',
    textTransform: 'uppercase'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '35px'
  },
  text: {
    color: '#fff',
    textAlign: 'justify',
    '& a': {
      color: '#fff'
    },
    paddingBottom: '65px'
  },
  artifactWrap: {
    padding: '50px 30px 45px 30px',
    backgroundColor: '#fff'
  },
  gridWrap: {
    paddingTop: '80px',
    paddingBottom: '100px'
  },
  artifactTitle: {
    textAlign: 'center',
    lineHeight: '1.4em',
    paddingBottom: '25px'
  },
  artifactDesc: {
    textAlign: 'center',
    fontSize: '13px',
    paddingBottom: '35px'
  },
  asset: {
    textAlign: 'center',
    color: '#3787FF',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  artifactLink: {
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
      backgroundColor: '#ccc'
    }
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    background: '#23B3C8',
    color: '#fff',
    width: '100%',
    boxShadow: 'none',
    '&:hover': {
      cursor: 'pointer',
      background: '#474E5E'
    }
  }
}));

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const Tech = props => {
  const classes = useStyles();

  return (
    <>
      <div id="Tech" className="tech-section  cd-section" />
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
                  Technology
                </Typography>
                <Typography variant="h2" className={classes.title}>
                  Documents &amp; Articles about OpenCPEs and Centsi
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  The OpenCPEs platform is rapidly evolving and we're committed
                  to providing maximum transparency through quality
                  documentation. Below are a collection of articles we think
                  you'll find particularly interesting, but please find a full
                  list of resources in the{' '}
                  <Link to="/codex" className={classes.menuBottomLink}>
                    OpenCPEs Codex.
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <StackGrid columnWidth={295} gutterWidth={10} gutterHeight={10}>
              {props.techJSON.map(a => (
                <div className={classes.artifactWrap} key={a.id}>
                  <Typography variant="h4" className={classes.artifactTitle}>
                    {a.title}
                  </Typography>
                  <Typography className={classes.artifactDesc}>
                    {a.desc}
                  </Typography>
                  <div className={classes.buttonWrap}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      component={AdapterLink}
                      to={`/${a.slug}`}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </StackGrid>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Tech;
