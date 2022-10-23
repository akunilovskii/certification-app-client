import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routes as appRoutes} from './routes';
import './App.css';
import {Navbar, Footer} from './components/shared';
import {theme} from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <CssBaseline />
        <Box
          height='100vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Router>
            <Navbar />
            <Routes>
              {appRoutes.map(route => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
            <Footer />
          </Router>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
