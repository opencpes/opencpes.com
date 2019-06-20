// react & router
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import { MemoryRouter as Router } from 'react-router';
// style
import './App.css';
// screens
import Home from './screens/Home/Home';
import Codex from './screens/Codex';
import DefaultPage from './screens/DefaultPage';
// components

// @material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// context
import { useStateValue } from './contexts/state';
// clsx
import clsx from 'clsx';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  title: {
    flexGrow: 1
  },
  menu_item: {
    marginRight: '20px',
    color: '#fff',
    fontWeight: '600',
    textDecoration: 'none'
  }
}));

/********************************************************************************
 * Create the App Hook
 ******************************************************************************* */

const App = props => {
  const [
    {
      isLogin,
      userData,
      drawerState,
      isDefaultPipeline,
      skipNum,
      customPipelineID,
      andOr
    },
    dispatch
  ] = useStateValue(); // global state context api

  const [anchorEl, setAnchorEl] = React.useState(null); // component state for profile menu
  const [openDrawer, setOpen] = React.useState(false); // component state for drawer
  const [subMenu, subMenuSetOpen] = React.useState(false); // component state for submenu

  const classes = useStyles();
  const theme = useTheme();

  const pages = [
    {
      slug: '/privacy-guarantees',
      md: process.env.REACT_APP_MD_SRC + 'pages/privacy-guarantees.md',
      render: DefaultPage
    },
    {
      slug: '/validating-opencpes',
      md: process.env.REACT_APP_MD_SRC + 'pages/validating-opencpes.md',
      render: DefaultPage
    },
    {
      slug: '/getting-started',
      md: process.env.REACT_APP_MD_SRC + 'pages/getting-started.md',
      render: DefaultPage
    },
    {
      slug: '/cpe-providers',
      md: process.env.REACT_APP_MD_SRC + 'pages/cpe-providers.md',
      render: DefaultPage
    },
    {
      slug: '/certification-providers',
      md: process.env.REACT_APP_MD_SRC + 'pages/certification-providers.md',
      render: DefaultPage
    },
    {
      slug: '/faq',
      md: process.env.REACT_APP_MD_SRC + 'pages/faq.md',
      render: DefaultPage
    }
  ];

  const codex = [
    {
      slug: '/codex/source-code',
      md: process.env.REACT_APP_MD_SRC + 'codex/source-code.md',
      render: DefaultPage
    },
    {
      slug: '/codex/technical-details',
      md: process.env.REACT_APP_MD_SRC + 'codex/technical-details.md',
      render: DefaultPage
    }
  ];

  //console.log(pages);
  //console.log(process.env);

  /********************************************************************************
   * Profile Menu
   ******************************************************************************* */
  const openProfileMenu = Boolean(anchorEl);
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleProfileMenuClose() {
    setAnchorEl(null);
  }

  /********************************************************************************
   * Drawer functions
   ******************************************************************************* */
  useEffect(() => {
    setOpen(drawerState);
  }, [drawerState]);
  function handleDrawerOpen() {
    setOpen(true);
  }
  function handleDrawerClose() {
    setOpen(false);
  }

  /********************************************************************************
   * SubMenu
   ******************************************************************************* */

  function handleSubMenuClick() {
    subMenuSetOpen(!subMenu);
  }

  /********************************************************************************
   * Return App
   ******************************************************************************* */
  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openDrawer
          })}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              OpenCPEs
            </Typography>

            <Link
              to="/getting-started"
              variant="body2"
              className={classes.menu_item}
            >
              Get Started
            </Link>

            <Link
              to="/validating-opencpes"
              variant="body2"
              className={classes.menu_item}
            >
              Validating OpenCPEs
            </Link>

            <Link to="/faq" variant="body2" className={classes.menu_item}>
              FAQ
            </Link>

            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, openDrawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.toolbar} />
          <Divider />
          <List dense={true}>
            <ListItem button key="Home" component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button
              key="Getting Started"
              component={Link}
              to="/getting-started"
            >
              <ListItemText primary="Getting Started" />
            </ListItem>

            <ListItem
              button
              key="Validating OpenCPEs"
              component={Link}
              to="/validating-opencpes"
            >
              <ListItemText primary="Validating OpenCPEs" />
            </ListItem>

            <ListItem button key="FAQ" component={Link} to="/faq">
              <ListItemText primary="FAQ" />
            </ListItem>

            <ListItem
              button
              key="Privacy Guarantees"
              component={Link}
              to="/privacy-guarantees"
            >
              <ListItemText primary="Privacy Guarantees" />
            </ListItem>

            <ListItem
              button
              key="CPE Providers"
              component={Link}
              to="/cpe-providers"
            >
              <ListItemText primary="CPE Providers" />
            </ListItem>

            <ListItem
              button
              key="Certification Providers"
              component={Link}
              to="/certification-providers"
            >
              <ListItemText primary="Certification Providers" />
            </ListItem>

            <ListItem button key="Codex" component={Link} to="/codex">
              <ListItemText primary="Codex" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <main
          id="main"
          className={clsx(classes.content, {
            [classes.contentShift]: openDrawer
          })}
        >
          <Switch>
            {pages.map((page, index) => (
              <Route
                key={index}
                path={page.slug}
                render={props => <page.render markDown={page.md} {...props} />}
              />
            ))}
            {codex.map((article, index) => (
              <Route
                key={index}
                path={article.slug}
                render={props => (
                  <article.render markDown={article.md} {...props} />
                )}
              />
            ))}
            <Route
              path="/codex"
              exact
              render={props => <Codex codex={codex} {...props} />}
            />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </div>
      <footer />
    </>
  );
};

export default withRouter(App);
