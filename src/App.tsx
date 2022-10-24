import {Box, CssBaseline} from '@mui/material';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {routes as appRoutes} from './routes';
import './App.css';
import {Footer, Navbar} from './components/shared';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {chooseTheme} from './theme/theme';
import {createContext, useMemo, useState} from "react";

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

export default function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () => createTheme({...chooseTheme(mode)}), [mode],);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <CssBaseline/>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDirection='column'
                    >
                        <Router>
                            <Navbar/>
                            <Routes>
                                {appRoutes.map(route => (
                                    <Route
                                        key={route.key}
                                        path={route.path}
                                        element={<route.component/>}
                                    />
                                ))}
                            </Routes>
                            <Footer/>
                        </Router>
                    </Box>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
