// react & router
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// react-markdown
import ReactMarkdown from 'react-markdown/with-html';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Components

// TODO: active state on menu buttons
// TODO: mobile dropdown for menu

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
  },
  button: {
    width: '100%',
    justifyContent: 'left',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      justifyContent: 'center',
      display: 'inline'
    }
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
        <Grid container direction="row" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" className={classes.menuTitle} />
            {codexJSON ? (
              codexJSON.map(a => (
                <>
                  <Button
                    className={classes.button}
                    component={AdapterLink}
                    to={a.slug}
                    key={a.id}
                  >
                    {a.title}
                  </Button>
                </>
              ))
            ) : (
              <CircularProgress className={classes.progress} />
            )}
          </Grid>

          <Grid item xs={12} md={9}>
            {props.markDown ? (
              <ReactMarkdown source={markDown} escapeHtml={false} />
            ) : (
              props.history.push('/codex/about-opencpes')
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Codex;
