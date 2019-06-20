import React, { useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

/********************************************************************************
 * Some Styling
 ******************************************************************************* */

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

const Hero = props => {
  //const [{}, dispatch] = useStateValue(); // context api
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <section id="Hero" className="intro-section cd-section">
        <h1 style={{ width: "100%", textAlign: "center" }}>Hero</h1>
        <a
          className="btn-down anchor-link "
          href="#Details"
          onClick={e => {
            var isMobile = navigator.userAgent.match(
              /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
            );
            if (isMobile) {
              // if we are on mobile device the scroll into view will be managed by the browser
            } else {
              e.preventDefault();
              props.smoothScroll("Details");
            }
          }}
        >
          <KeyboardArrowDown />
        </a>
      </section>
    </>
  );
};

export default Hero;
