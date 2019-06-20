import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
// components
//import { useStateValue } from "../../../contexts/state";

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

const Details = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <section id="Details" className="details-section  cd-section">
        <h1 style={{ width: '100%', textAlign: 'center' }}>Details</h1>
      </section>
    </>
  );
};

export default Details;
