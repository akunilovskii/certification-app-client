import React from 'react';
import LoginForm from './LoginForm';
import {useTheme} from '@mui/material/styles';
import {Box, Grid, Tab, Tabs} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface TabbedContainerProps {
  tabIndex: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function TabbedContainer({tabIndex, onChange}: TabbedContainerProps) {
  const theme = useTheme();

  return (
    <>
      <Grid sx={{flex: '0 0 auto'}} container>
        <Tabs
          value={tabIndex}
          onChange={onChange}
          indicatorColor='primary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='login signup bar'
          sx={{width: '100%'}}
        >
          <Tab sx={{width: '100%'}} label='Login' {...a11yProps(0)} />
          <Tab sx={{width: '100%'}} label='SignUp' {...a11yProps(1)} />
        </Tabs>
      </Grid>

      <Grid sx={{flex: '1 0 auto'}}>
        <TabPanel value={tabIndex} index={0} dir={theme.direction}>
          <LoginForm index={0} />
        </TabPanel>
        <TabPanel value={tabIndex} index={1} dir={theme.direction}>
          <LoginForm index={1} />
        </TabPanel>
      </Grid>
    </>
  );
}

export default TabbedContainer;
