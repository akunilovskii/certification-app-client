import { PaletteMode } from '@mui/material'

export const chooseTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          nav: {
            main: '#292929',
            text: '#fff',
          },
          testButton: {
            main: '#fff',
          },
          footer: {
            main: '#202020',
            text: '#fff',
          },
          primary: {
            main: '#bb86fc',
            variant: '#3700b3',
          },
          secondary: {
            main: '#00dac6',
            variant: '#00dac6',
          },
          background: {
            default: '#121212',
            paper: '#121212',
          },
          text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
          },
          action: {
            active: '#fff',
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
          },
          warn: '#cf6679',
        }
      : {
          nav: {
            main: '#3700b3',
            text: '#fff',
          },
          testButton: {
            main: 'rgba(0, 0, 0, 0.87)',
          },
          footer: {
            main: 'rgb(200, 210, 255)',
            text: '#fff',
          },
          primary: {
            main: '#6200ee',
            variant: '#3700b3',
          },
          secondary: {
            main: '#00dac6',
            variant: '#018786',
          },
          background: {
            default: '#ffffff',
            paper: '#ffffff',
          },
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
          },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
          },
          warn: '#b00020',
        }),
  },
})
