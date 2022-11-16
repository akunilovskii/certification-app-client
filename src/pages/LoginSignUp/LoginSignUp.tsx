import {Button, Grid, Paper, TextField} from '@mui/material';
import {FC, useState} from 'react';
import SideImage from '../../components/sideImage/sideImage';

// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



const LoginForm: FC = () => {
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            height='100%'
            sx={{gap: '1rem', justifyContent: 'center', padding: '1rem'}}
        >
            <TextField
                id='standard-error-helper-text'
                label='Login'
                fullWidth
                size='small'
            />
            <TextField
                id='standard-error-helper-text'
                label='Password'
                fullWidth
                size='small'
            />
            <Button variant='contained'>Login</Button>
        </Grid>
    );
};

export const LoginSignUp: FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [formType, setFormType] = useState('login');

    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };



    return (
        <Paper sx={{height: '100%', width: '50%'}}>
            <Grid
                container
                sx={{
                    width: '100%',
                }}
            >
                <Grid
                    item
                    md={4}
                    sx={{
                        height: '25vmax',
                        opacity: '40%',
                        display: {xs: 'none', md: 'flex'},
                    }}
                >
                    <SideImage/>
                </Grid>
                <Grid container item md={8} xs={12}>
                    <Grid item container direction='column'>
                        <Grid sx={{flex: '0 0 auto'}} container>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="inherit"
                                variant="fullWidth"
                                aria-label="login signup bar"
                                sx={{width:'100%'}}
                            >
                                <Tab sx={{width: '100%'}} label="Login" {...a11yProps(0)} />
                                <Tab sx={{width: '100%'}} label="SignUp" {...a11yProps(1)} />
                            </Tabs>

                            {/*<Button*/}
                            {/*    variant='outlined'*/}
                            {/*    sx={{*/}
                            {/*        flex: '1 0 auto',*/}
                            {/*        backgroundColor: 'lightgray',*/}
                            {/*        color: 'darkgray',*/}
                            {/*        borderBottom: 'none',*/}
                            {/*        borderRadius: '0',*/}
                            {/*    }}*/}
                            {/*    onClick={() => setFormType('login')}*/}
                            {/*>*/}
                            {/*    Login*/}
                            {/*</Button>*/}
                            {/*<Button*/}
                            {/*    variant='outlined'*/}
                            {/*    sx={{*/}
                            {/*        flex: '1 0 auto',*/}
                            {/*        backgroundColor: 'lightgray',*/}
                            {/*        color: 'darkgray',*/}
                            {/*        borderBottom: 'none',*/}
                            {/*        borderRadius: '0',*/}
                            {/*    }}*/}
                            {/*    onClick={() => setFormType('signUp')}*/}
                            {/*>*/}
                            {/*    SignUp*/}
                            {/*</Button>*/}
                        </Grid>

                        <Grid sx={{flex: '1 0 auto'}}>
                            {/*<SwipeableViews*/}
                            {/*    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}*/}
                            {/*    index={value}*/}
                            {/*    onChangeIndex={handleChangeIndex}*/}
                            {/*>*/}
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    Item One
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    Item Two
                                </TabPanel>
                            {/*</SwipeableViews>*/}
                            {/*<LoginForm/>*/}
                            {/*{formType}*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};
