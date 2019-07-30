import React from 'react';
import { useInView } from 'react-intersection-observer';
import { withRouter } from 'react-router-dom';

// Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  menuBottomButton: {
    color: '#fff',
    background: '#23B3C8',
    '&:hover': {
      cursor: 'pointer',
      background: '#474E5E'
    }
  }
}));

const BetaButton = props => {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        href="#Beta"
        onClick={e => {
          var isMobile = navigator.userAgent.match(
            /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
          );
          if (isMobile) {
            // if we are on mobile device the scroll into view will be managed by the browser
          } else {
            e.preventDefault();
            if (props.location.pathname === '/') {
              props.smoothScroll('Beta');
            } else {
              props.history.push('/getting-started');
            }
          }
        }}
        className={classes.menuBottomButton}
      >
        Join the Beta
      </Button>
    </>
  );
};

export default withRouter(BetaButton);
