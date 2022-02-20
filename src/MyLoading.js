import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Hourglass } from 'react95';

const theme = createTheme({
    palette: {
        background: {
            default: "#ece6c2"
        },
        error: {
            //red
            main: "#cc6b49",
            contrastText: "#ece6c2",
        },
        success: {
            //green
            main: "#32a956",
            contrastText: "#ece6c2",
        },
        primary: {
            //brown
            main: "#6f5643",
        },
        secondary: {
            //yellow
            main: '#d2a24c',
        },
    },
    typography: {
        fontFamily: [
            "Courier New",
            "Courier",
            "monospace"
        ].join(",")
    }
});

export default function MyLoading() {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: "80%",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography component="h5" variant="h5" color="#6f5643">
                        <Hourglass /> loading data from API...
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider >
    );
}