import React, {FC, ReactElement} from 'react';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from '@mui/material';
import themeDesignImage from '../../img/themeDesign.png';

const DCD: FC<any> = (): ReactElement => {
  return (
    <>
      <Typography variant='h3' color='text.primary'>
        Color design for developers
      </Typography>

      <ImageList sx={{width: 400, height: 400}} cols={1}>
        <ImageListItem>
          <img src={themeDesignImage} alt='theme design' loading='lazy' />
        </ImageListItem>
      </ImageList>

      <Paper elevation={8}>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '10px',
          }}
        >
          <Typography variant='body1' color='text.primary'>
            1. Background (0dp elevation surface overlay)
          </Typography>
          <Typography variant='body1' color='text.primary'>
            2. Surface (with 1dp elevation surface overlay)
          </Typography>
          <Typography variant='body1' color='text.primary'>
            3. Primary
          </Typography>
          <Typography variant='body1' color='text.primary'>
            4. Secondary
          </Typography>
          <Typography variant='body1' color='text.primary'>
            5. On background
          </Typography>
          <Typography variant='body1' color='text.primary'>
            6. On Surface
          </Typography>
          <Typography variant='body1' color='text.primary'>
            7. On Primary
          </Typography>
          <Typography variant='body1' color='text.primary'>
            8. On Secondary
          </Typography>
        </Box>
      </Paper>

      <Paper
        elevation={8}
        sx={{
          display: 'flex',

          margin: '10px',
        }}
      >
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10px',
          }}
        >
          (default color)
          <Button variant='text'>Text</Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
        </Box>

        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10px',
          }}
        >
          (secondary color)
          <Button variant='text' color='secondary'>
            Text
          </Button>
          <Button variant='contained' color='secondary'>
            Contained
          </Button>
          <Button variant='outlined' color='secondary'>
            Outlined
          </Button>
        </Box>

        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10px',
          }}
        >
          (both colors)
          <Button variant='text' disabled>
            Text disabled
          </Button>
          <Button variant='contained' disabled>
            Contained disabled
          </Button>
          <Button variant='outlined' disabled>
            Outlined disabled
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default DCD;
