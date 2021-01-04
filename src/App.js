import React from 'react'
import { StyleReset, ThemeProvider, Icon, Button } from "atomize";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import Routes from './Routes';

// const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const debug = new DebugEngine();
const engine = new Styletron();

const theme = {
  textSize: {
    size: {
      buttomText: "14px"
    },
    height: {
      buttomText: "0px"
    }
  },
  fontFamily: {
    primary: 'Poppins, sans-serif',
  },
  colors: {
    black900: "#1d1d1e",
    disabled: "#000000"
  }
};

const App = () => {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <Routes></Routes>
      </ThemeProvider>
    </StyletronProvider>
  )
}

export default App