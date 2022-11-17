import {Button, Grid, Paper, TextField, TextFieldProps } from '@mui/material';
import {FC, useState, useRef} from 'react';
import SideImage from '../../components/sideImage/sideImage';

import {useTheme} from '@mui/material/styles';
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
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
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


const LoginForm: FC<{ index: number }> = ({index}) => {

    const login = useRef<TextFieldProps>(null);
    const password = useRef<TextFieldProps>(null);
    const email = useRef<TextFieldProps>(null);
    const newPassword = useRef<TextFieldProps>(null);
    const rePassword = useRef<TextFieldProps>(null);

    const formRows = [
        [
            {
                label: 'Login',
                type: 'text',
                ref: login
            },
            {
                label: 'Password',
                type: 'password',
                ref: password
            }
        ],
        [
            {
                label: 'Email',
                type: 'email',
                ref: email
            },
            {
                label: 'Password',
                type: 'password',
                ref: newPassword
            },
            {
                label: 'Re-enter password',
                type: 'password',
                ref: rePassword
            }
        ]
    ]

    function onClick(index: number) {
        formRows[index].map(el => console.log(el.ref.current?.value));
    }

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            height='100%'
            sx={{gap: '1rem', justifyContent: 'center', padding: '1rem'}}
        >
            {formRows[index].map((el) => <TextField key={el.label} inputRef={el.ref} label={el.label} type={el.type} fullWidth size='small'/>)}

            <Button onClick={() => onClick(index)} variant='contained'>{index?'Register':'Login'}</Button>
        </Grid>
    );
};


export const LoginSignUp: FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);


    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
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
                                sx={{width: '100%'}}
                            >
                                <Tab sx={{width: '100%'}} label="Login" {...a11yProps(0)} />
                                <Tab sx={{width: '100%'}} label="SignUp" {...a11yProps(1)} />
                            </Tabs>

                        </Grid>

                        <Grid sx={{flex: '1 0 auto'}}>
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <LoginForm index={0}/>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <LoginForm index={1}/>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};
