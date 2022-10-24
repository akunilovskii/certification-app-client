import React, {FC, ReactElement} from 'react';
import {Box, Typography} from '@mui/material';

const Products: FC<any> = (): ReactElement => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 'auto',
            }}
        >
            <Typography variant='h3' color='secondary.dark'>Products</Typography>
        </Box>
    );
};

export default Products;
