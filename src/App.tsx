import './index.css';

import React from 'react';
import { only } from 'styled-breakpoints';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { BaseGrid } from './Components/Basegrid';
import { CallForSpeakers } from './Components/CallForSpeakers';
import { Hero } from './Components/Hero';
import { Navigation } from './Components/Navigation';
import { themeConfig } from './themeConfig';

const GlobalStyles = createGlobalStyle`
html {
  font-size: 12pt;

  ${only('phone')} {
    font-size: 9pt;
  }
}

body {
  font-family: 'JetBrainsMono', monospace;
  font-weight: 100;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
`;

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <BaseGrid hasInitialMargin={true}>
        <Navigation />
        <GlobalStyles />
        <Hero />
        <CallForSpeakers />
      </BaseGrid>
    </ThemeProvider>
  );
}

export default App;
