// react & router
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// react-markdown
import ReactMarkdown from 'react-markdown';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  },
  menuTitle: {
    padding: '30px 0 10px 10px '
  }
}));

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const Codex = props => {
  const classes = useStyles();

  const [codexJSON, setCodexJSON] = React.useState(null);
  const [markDown, setMarkDown] = React.useState(null);

  useEffect(() => {
    let codexArray = props.pagesJSON.filter(function(page) {
      return page.type === 'codex';
    });
    setCodexJSON(codexArray);
  }, [props.pagesJSON]);

  useEffect(() => {
    fetch(props.markDown)
      .then(response => response.text())
      .then(content => {
        setMarkDown(content);
      });
  }, [props.markDown]);

  console.log(props.markDown);

  return (
    <>
      <Container maxWidth="lg" className={classes.defaultPageCon}>
        <Grid container direction="row" alignItems="flex-start">
          <Grid item xs={12} md={3}>
            <Typography variant="h4" className={classes.menuTitle}>
              Codex Topics
            </Typography>
            {codexJSON ? (
              codexJSON.map(a => (
                <Button
                  className={classes.button}
                  component={AdapterLink}
                  to={a.slug}
                  key={a.id}
                >
                  {a.title}
                </Button>
              ))
            ) : (
              <CircularProgress className={classes.progress} />
            )}
          </Grid>

          <Grid item xs={12} md={9}>
            {props.markDown ? (
              <ReactMarkdown source={markDown} />
            ) : (
              props.history.push('/codex/client-privacy')
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Codex;
