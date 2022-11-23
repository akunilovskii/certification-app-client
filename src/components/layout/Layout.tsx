import { Box, CssBaseline, Grid } from '@mui/material'
import { Footer, Navbar } from '.'

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
      </Box>
    </>
  )
}

export default Layout
