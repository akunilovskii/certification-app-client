import React, {FC, ReactElement} from 'react';
import {Box, Typography} from '@mui/material';

const About: FC<any> = (): ReactElement => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 'auto',
                flexDirection: 'column',
                padding: '80px 0 20px',
            }}
        >
            <Typography variant='h3' color='text.primary'>About</Typography>
        </Box>
    );
};

export default About;
