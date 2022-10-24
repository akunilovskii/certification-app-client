import {PaletteMode} from '@mui/material';

export const chooseTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            light: '#63b8ff',
            main: '#0989e3',
            dark: '#005db0',
            contrastText: '#000',
        },
        secondary: {
            ...(mode === 'dark' ? {
                    main: '#4db6ac',
                    light: '#82e9de',
                    dark: '#00867d',
                    contrastText: '#000',
                } :
                {
                    main: '#ffb6ff',
                    light: '#ff00ff',
                    dark: '#ff0000',
                    contrastText: '#000',
                }),
        },
    },
});
