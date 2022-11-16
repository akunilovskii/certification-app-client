import {CssBaseline} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import {routes as appRoutes} from './routes';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {chooseTheme} from './theme/theme';
import {useMemo, useState} from 'react';
import {ColorModeContext} from './context/theme-context';
import Layout from './components/layout/Layout';

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme({...chooseTheme(mode)}), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <CssBaseline />
          <Layout>
            <Routes>
              {appRoutes.map(route => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
