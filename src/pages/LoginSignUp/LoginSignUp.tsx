import {Box, Button, Grid, Paper} from '@mui/material';
import {FC, ReactElement, useState} from 'react';
import SideImage from '../../components/sideImage/sideImage';

export const LoginSignUp: FC<any> = (): ReactElement => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Box
      sx={{
        width: '70vw',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={4} columns={32}>
        <Grid item xs={16}>
          <SideImage />
        </Grid>
        <Paper>
          <Grid item xs={16}>
            <Grid container>
              <Grid item xs={8}>
                <Button variant='contained'>Login</Button>
              </Grid>
              <Grid item xs={8}>
                <Button variant='contained'>SignUp</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};
