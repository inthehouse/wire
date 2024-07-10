import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;