import {Button, Container, CssBaseline, FormGroup, Grid} from '@mui/material';
import {FC, ReactElement, useState} from 'react';
import SideImage from '../../components/sideImage/sideImage';

export const LoginSignUp: FC<any> = (): ReactElement => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    // <Container maxWidth={false}>
    <Grid
      container
      sx={{
        width: '90%',
      }}
    >
      <Grid
        item
        sm={4}
        sx={{
          border: '1px solid grey',
          height: '40vh',
          opacity: '40%',
          display: {xs: 'none', md: 'flex'},
        }}
      >
        <SideImage />
      </Grid>
      <Grid container item sm={8} md={8} sx={{border: '1px solid grey'}}>
        <Grid item container direction='column'>
          <Grid sx={{border: '1px solid black'}}>
            <Button variant='contained'>Login</Button>
            <Button variant='contained'>SignUp</Button>
          </Grid>
          <FormGroup>Login Form</FormGroup>
        </Grid>
      </Grid>
    </Grid>
    // </Container>
  );
};
