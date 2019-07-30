// react & router
import React, { useEffect } from 'react';

// react-markdown
import ReactMarkdown from 'react-markdown';

// @material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Components

import Loading from '../components/Loading';

// Context API
import { useStateValue } from '../contexts/state';

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
  const [{}, dispatch] = useStateValue(); // context api
  const [markDown, setMarkDown] = React.useState(null);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    fetch(props.markDown)
      .then(response => response.text())
      .then(content => {
        setMarkDown(content);
      });
  }, []);

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
