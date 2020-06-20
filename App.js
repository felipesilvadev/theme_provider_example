import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import themes from './src/themes';

import Home from './src/pages/Home';

export default function App() {
  // dark, light ou null
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.light;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
