import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';

export default function MyCardTwo({ item }) {
    const theme = useTheme();

    return (
        <Card sx={{
            display: 'flex'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <img src={item.image} width="100" />
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="body1" variant="body1" color="primary">
                        {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="secondary" component="div">
                        {item.price}$
                    </Typography>
                </CardContent>
            </Box>


        </Card >
    );
}