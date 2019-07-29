import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

// stack grid
import StackGrid from 'react-stack-grid';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// components
//import { useStateValue } from "../../../contexts/state";

// Assets
import b31 from '../../../assets/img/b31.png';
import b32 from '../../../assets/img/b32.png';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    background: '#EFEFEF',
    paddingTop: '100px',
    paddingBottom: '100px'
  },
  paper: {
    boxShadow: 'none',
    borderRadius: '0px',
    padding: '55px 55px 45px 55px'
  },
  title: {
    textAlign: 'center',
    paddingBottom: '25px'
  },
  text: {
    textAlign: 'center',
    paddingBottom: '15px'
  },
  b3img: {
    display: 'block',
    margin: '0px auto 40px auto'
  }
}));

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const Beta3 = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.root}>
        <section id="~Beta3">
          <Container maxWidth="lg">
            <Grid container direction="row" spacing={4}>
              <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                  <img
                    src={b32}
                    alt="Create a Claim"
                    className={classes.b3img}
                  />
                  <Typography variant="h3" className={classes.title}>
                    How to Create a Claim
                  </Typography>
                  <Typography className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation.
                  </Typography>
                  <Typography className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={9} md={6}>
                <Paper className={classes.paper}>
                  <img
                    src={b31}
                    alt="Validate a Claim"
                    className={classes.b3img}
                  />
                  <Typography variant="h3" className={classes.title}>
                    How to Validate a Claim
                  </Typography>
                  <Typography className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation.
                  </Typography>
                  <Typography className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Beta3;
