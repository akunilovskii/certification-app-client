import React, {FC, ReactElement} from 'react';
import {Box, Typography} from '@mui/material';

const About: FC<any> = (): ReactElement => {
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
            <Typography variant='h3' color='secondary.dark'>About</Typography>
        </Box>
    );
};

export default About;
