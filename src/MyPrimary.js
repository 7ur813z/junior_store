import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MyCard from "./MyCard";
import MyTab from "./MyTab";


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

export default function MyPrimary({ total, item, getPreviousItem, getNextItem, boughtItems, ignoredItems, totalItems }) {

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ bgcolor: "#d2a24c" }}>
                        <img src={require('./junior.png')} height="30" width="30" />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="#6f5643">
                        <Grid container>
                            <Grid item>
                                <Box sx={{ m: 1 }}>JUNIOR</Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{ fontWeight: 'bold', m: 1 }}>STORE</Box>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Box>
                        <MyCard item={item} getPreviousItem={getPreviousItem} getNextItem={getNextItem} />
                    </Box>
                    <Box marginTop={5}>
                        <Typography component="h1" variant="h5" color="secondary">
                            Total {total}$
                        </Typography>
                    </Box>

                    <Box marginTop={5}>
                        <MyTab boughtItems={boughtItems} ignoredItems={ignoredItems} totalItems={totalItems} />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}