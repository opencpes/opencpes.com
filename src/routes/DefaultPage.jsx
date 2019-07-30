// react & router
import React, { useEffect } from 'react';

// react-markdown
import ReactMarkdown from 'react-markdown';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Components

import Loading from '../components/Loading';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1140px',
    margin: '30px auto',
    padding: theme.spacing(3, 2)
  },
  defaultPageCon: {
    paddingTop: '60px',
    paddingBottom: '80px'
  }
}));

const DefaultPage = props => {
  const [markDown, setMarkDown] = React.useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch(props.markDown)
      .then(response => response.text())
      .then(content => {
        setMarkDown(content);
      });
  }, [props.markDown]);

  return (
    <>
      <Container maxWidth="lg" className={classes.defaultPageCon}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12}>
            {markDown ? (
              // show Content
              <ReactMarkdown source={markDown} />
            ) : (
              // not authenticated: Show login button
              <Loading />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DefaultPage;
