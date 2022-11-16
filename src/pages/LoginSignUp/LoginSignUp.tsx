import {Button, Grid, Paper, TextField} from '@mui/material';
import {FC, useState} from 'react';
import SideImage from '../../components/sideImage/sideImage';

const LoginForm: FC = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      height='100%'
      sx={{gap: '1rem', justifyContent: 'center', padding: '1rem'}}
    >
      <TextField
        id='standard-error-helper-text'
        label='Login'
        fullWidth
        size='small'
      />
      <TextField
        id='standard-error-helper-text'
        label='Password'
        fullWidth
        size='small'
      />
      <Button variant='contained'>Login</Button>
    </Grid>
  );
};

export const LoginSignUp: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Paper sx={{height: '100%', width: '50%'}}>
      <Grid
        container
        sx={{
          width: '100%',
        }}
      >
        <Grid
          item
          sm={4}
          md={4}
          sx={{
            height: '40vh',
            opacity: '40%',
            display: {xs: 'none', md: 'flex'},
          }}
        >
          <SideImage />
        </Grid>
        <Grid container item sm={8} md={8} sx={{}}>
          <Grid item container direction='column'>
            <Grid sx={{flex: '0 0 auto', padding: '0 1rem'}} container>
              <Button variant='contained' sx={{flex: '1 0 auto'}}>
                Login
              </Button>
              <Button variant='contained' sx={{flex: '1 0 auto'}}>
                SignUp
              </Button>
            </Grid>
            <Grid sx={{flex: '1 0 auto'}}>
              <LoginForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
