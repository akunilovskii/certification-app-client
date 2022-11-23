import { Grid, Paper, Typography } from '@mui/material'
import React, {FC, useContext, useEffect} from 'react'
import SideImage from '../../components/SideImage'
import AuthContext from '../../context/auth-context'

export const Logout: FC = () => {
  const { logoutHandler } = useContext(AuthContext)

  useEffect(()=>{
      logoutHandler()
  },[])



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
