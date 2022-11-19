import {CardMedia} from '@mui/material';
import React from 'react';

function SideImage() {
  return (
    <CardMedia
      component='img'
      height='100%'
      alt='table with a laptop'
      image={require('../assets/study-exam-table.jpg')}
      sx={{objectFit: 'cover', objectPosition: 'left top'}}
    />
  );
}

export default SideImage;
