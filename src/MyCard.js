import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard({ item, getPreviousItem, getNextItem }) {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <Grid container justifyContent="center" marginTop="20px">
                <Grid item>
                    <img src={item.image} width="200" />
                </Grid>
            </Grid>

            <CardContent>
                <Typography gutterBottom variant="h6" component="h6" color="primary">
                    <Box sx={{ fontWeight: 'bold', m: 1 }}>{item.title} | {item.price}$</Box>
                </Typography>
                <Typography variant="body1" color="error">
                    {item.description}
                </Typography>
                <Grid container style={{ justifyContent: 'space-between' }} marginTop="20px">
                    <Grid item container xs={8}>
                        <Grid item>
                            <Rating name="read-only" value={item.rating.rate} readOnly />
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" color="secondary">{item.rating.rate}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" color="secondary">
                            {item.rating.count} ratings
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button variant="contained" size="small" color="success" onClick={() => getPreviousItem(item)}>Buy</Button>
                <Button variant="contained" size="small" color="error" onClick={() => getNextItem(item)}>Ignore</Button>
            </CardActions>
        </Card>
    );
}
