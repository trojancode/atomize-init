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
      buttomText: "14px",
      titleCaption:"55px",
      subtitle:"30px",
      para:"24px"
    },
    height: {
      buttomText: "0px",
      titleCaption:"55px",
      subtitle:"30px",
      para:"24px"
    }
  },
  fontFamily: {
    primary: 'Poppins, sans-serif',
  },
  colors: {
    black900: "#1d1d1e",
    disabled: "#000000",
    lightblue:"#E0F2FF",
    lightGreen:"#ECF8E8",
    mainBg:"linear-gradient(0deg, rgba(224,242,255,1) 0%, rgba(255,255,255,1) 100%)"
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