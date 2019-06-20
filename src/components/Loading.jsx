import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  location: {
    marginTop: theme.spacing(25),
    display: "flex",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  override: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

const Loading = props => {
  const classes = useStyles();
  return (
    <div className={classes.location}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

export default Loading;
