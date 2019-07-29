// react & router
import React, { useEffect } from 'react';

// react-markdown
import ReactMarkdown from 'react-markdown';

// @material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// Components

// Context API
import { useStateValue } from '../contexts/state';

// Utils
import { arrayFlatten } from '../utils';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1140px',
    margin: '30px auto',
    padding: theme.spacing(3, 2)
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const DefaultPage = props => {
  const [{}, dispatch] = useStateValue(); // context api
  const [markDown, setMarkDown] = React.useState([]);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    let codex = [];
    if (props && props.codex) {
      //console.log(props.codex);
      for (var i = 0; i < props.codex.length; i++) {
        fetch(props.codex[i].md)
          .then(response => response.text())
          .then(content => {
            codex.push({ content });
            setMarkDown(codex);
          });
      }
    }
  }, []);

  console.log(markDown);

  return (
    <>
      <div className={classes.drawerHeader} />
      <Paper className={classes.root}>
        {markDown.map((section, index) => (
          <ReactMarkdown key={index} source={section.content} />
        ))}
      </Paper>
    </>
  );
};

export default DefaultPage;
