import {FC, ReactElement} from 'react';
import {Typography} from '@mui/material';

const About: FC<any> = (): ReactElement => {
  return (
    <>
      <Typography variant='h3' color='text.primary'>
        About
      </Typography>
    </>
  );
};

export default About;
