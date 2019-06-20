/********************************************************************************
 * This function exists to provide a shared 'parent' Provider
 * for the login context api.
 ******************************************************************************* */

import React from "react";
import App from "../App";
import { StateProvider } from "./state";

const GlobalState = () => {
  let initialState = {
    drawerState: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setDrawerState":
        return {
          ...state,
          drawerState: action.drawerState
        };

      default:
        return state;
    }
  };

  return (
    <div className="GlobalState">
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </div>
  );
};

export default GlobalState;
