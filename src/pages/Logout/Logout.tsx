import { Grid, Paper, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SideImage from '../../components/SideImage'
import { logout } from '../../store/reducers/authSlice'

export const Logout: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logout())
    const timeout1 = setTimeout(() => {
      navigate('/')
    }, 2000)
    return () => clearTimeout(timeout1)
  }, [])

  return (
    <Paper sx={{ height: '100%', width: '50%' }}>
      <Grid
        container
        sx={{
          width: '100%',
        }}
      >
        <Grid
          item
          md={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <SideImage />
        </Grid>
        <Grid
          container
          item
          md={8}
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" color="text.primary">
            We're sad to see you go...
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
