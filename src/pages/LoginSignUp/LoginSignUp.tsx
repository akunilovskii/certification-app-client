import {Button, Grid} from '@mui/material';
import {FC, ReactElement, useState} from 'react';

export const LoginSignUp: FC<any> = (): ReactElement => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Grid container spacing={4} columns={32}>
        <Grid xs={16}>
          <Button variant='contained' >Login</Button>
        </Grid>
        <Grid xs={16}>
          <Button variant='outlined' >SignUp </Button>
        </Grid>
      </Grid>
    </>
  );
};
