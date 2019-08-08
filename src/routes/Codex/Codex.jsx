// react & router
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Detection
import { isMobile, isSafari } from 'react-device-detect';

// react-markdown
import ReactMarkdown from 'react-markdown/with-html';

// @material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

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
  },
  mobileMenu: {
    margin: '20px auto 0 auto',
    width: '100%'
  },
  mobileMenuIcon: {
    marginLeft: '30px'
  }
}));

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const Codex = props => {
  const classes = useStyles();

  const [codexJSON, setCodexJSON] = React.useState(null);
  const [markDown, setMarkDown] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  console.log(props);

  useEffect(() => {
    let codexArray = props.pagesJSON.filter(function(page) {
      return page.codex === true;
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

  return (
    <>
      <Container maxWidth="lg" className={classes.defaultPageCon}>
        <Grid container direction="row" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} md={3}>
            <Hidden mdUp>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="contained"
                className={classes.mobileMenu}
              >
                {props.pageTitle}{' '}
                <MenuIcon className={classes.mobileMenuIcon} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {codexJSON ? (
                  codexJSON.map(a => (
                    <MenuItem key={a.id} component={Link} to={a.slug}>
                      {a.title}
                    </MenuItem>
                  ))
                ) : (
                  <CircularProgress className={classes.progress} />
                )}
              </Menu>
            </Hidden>
            <Hidden smDown>
              <Typography variant="h4" className={classes.menuTitle} />
              {codexJSON ? (
                codexJSON.map(a => (
                  <React.Fragment key={a.id}>
                    <Button
                      className={classes.button}
                      component={AdapterLink}
                      to={a.slug}
                    >
                      {a.title}
                    </Button>
                  </React.Fragment>
                ))
              ) : (
                <CircularProgress className={classes.progress} />
              )}
            </Hidden>
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
