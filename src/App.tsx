import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { routes as appRoutes } from './routes'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { chooseTheme } from './theme/theme'
import { useEffect, useMemo, useState } from 'react'
import { ColorModeContext } from './context/theme-context'
import Layout from './components/layout/Layout'

import {useSelector} from "react-redux";
import {RootState} from "./store/store";

export default function App() {
  const user = useSelector(
      (state: RootState) => state.user.userInfo
  )
  const themeMode = localStorage.getItem('themeMode')
  const [mode, setMode] = useState<'light' | 'dark'>(
    themeMode === 'light' ? 'light' : 'dark'
  )

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(() => createTheme({ ...chooseTheme(mode) }), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <Layout>
            <Routes>
              {appRoutes
                .filter((el) =>
                  user.isLoggedIn ? el : el.access !== 'private'
                )
                .map((route) => (
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
  )
}
