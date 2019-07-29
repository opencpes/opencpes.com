import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

// stack grid
import StackGrid from 'react-stack-grid';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const Details = props => {
  const classes = useStyles();
  const theme = useTheme();

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
                    Create, share and validate your accomplishments and
                    qualifications, publicly or privately via OpenCPEs without
                    the need for any third parties to see your data. See what
                    end-to-end privacy and control of your data looks like with
                    OpenCPEs.
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
                    currency it cannot be spent, once ¢entsi is entered into a
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
                    we needed, so rather than add our layer on top of something
                    complex we simply created a proof of concept chain that can
                    be used to validate data and prove it’s veracity.
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
                    Designed from the ground up with Secure Proofs to be
                    insanely private! We don’t store your data. We do not
                    transfer your data to third parties.
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
