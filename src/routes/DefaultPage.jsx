// react & router
import React, { useEffect } from "react";

// react-markdown
import ReactMarkdown from "react-markdown";

// @material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// Components

import Loading from "../components/Loading";

// Context API
import { useStateValue } from "../contexts/state";

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "1140px",
    margin: "30px auto",
    padding: theme.spacing(3, 2)
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
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
      <div className={classes.drawerHeader} />
      <Paper className={classes.root}>
        {markDown ? (
          // show Content
          <ReactMarkdown source={markDown} />
        ) : (
          // not authenticated: Show login button
          <Loading />
        )}
      </Paper>
    </>
  );
};

export default DefaultPage;
