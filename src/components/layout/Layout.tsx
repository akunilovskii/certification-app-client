import { Box, CssBaseline, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Footer, Navbar } from '.'
import { setAuthError } from '../../store/reducers/authSlice'
import { RootState } from '../../store/store'

function Layout({ children }: any) {
  const { authError, userInfo } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (authError && !userInfo.isLoggedIn) {
      dispatch(setAuthError(false))
      navigate('/login-sign-up', { replace: true })
    }
  }, [authError, dispatch, navigate, userInfo.isLoggedIn])

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
