import React, {FC, ReactElement} from 'react';
import {Box, Typography} from '@mui/material';

const Products: FC<any> = (): ReactElement => {
  return (
    <>
      <Typography variant='h3' color='text.primary'>
        Products
      </Typography>
    </>
  );
};

export default Products;
