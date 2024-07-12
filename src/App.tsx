import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import { CssBaseline, Grid } from '@mui/material';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Grid container>
          <Grid item>
            <Sidebar />
          </Grid>
          <Grid container direction="column" item xs>
            <Grid item >

              <Header />
            </Grid>
            <Grid item>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inbox" element={<ComingSoon />} />
                <Route path="/starred" element={<ComingSoon />} />
                <Route path="/send-email" element={<ComingSoon />} />
                <Route path="/drafts" element={<ComingSoon />} />
              </Routes>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
