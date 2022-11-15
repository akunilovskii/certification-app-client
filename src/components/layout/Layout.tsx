import {Paper, Typography} from '@material-ui/core';
import {Box, Container, CssBaseline, Grid} from '@mui/material';
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
        minHeight='100vh'
      >
        <Router>
          <Navbar />
          <Grid
            container
            maxWidth='xl'
            direction='column'
            sx={{
              flexGrow: '1',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 0 20px',
              border: '1px grey solid',
              backgroundColor: 'background.default',
            }}
          >
            {children}
          </Grid>

          <Footer />
        </Router>
      </Box>
    </>
  );
}

export default Layout;
