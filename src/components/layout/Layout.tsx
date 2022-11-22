import { Box, CssBaseline, Grid } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer, Navbar } from '.'
// import {routes as appRoutes} from './routes';

function Layout({ children }: any) {
  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="100vh"
      >
        <Router>
          <Navbar />
          <Grid
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            container
            maxWidth="xl"
            sx={{
              flexGrow: '1',
              padding: '80px 0 20px',
              backgroundColor: 'background.default',
            }}
          >
            {children}
          </Grid>

          <Footer />
        </Router>
      </Box>
    </>
  )
}

export default Layout
