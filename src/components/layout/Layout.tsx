import {Paper, Typography} from '@material-ui/core';
import {Box, CssBaseline} from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Footer, Navbar} from '../shared';
// import {routes as appRoutes} from './routes';

function Layout({children}: any) {
  return (
    <>
      <CssBaseline />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Router>
          <Navbar />
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: 'background.default',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // width: '100%',
              height: 'auto',
              flexDirection: 'column',
              padding: '80px 0 20px',
            }}
          >
            {children}
          </Box>
          <Footer />
        </Router>
      </Box>
    </>
  );
}

export default Layout;
