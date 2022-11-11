import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    return (
        <Card sx={{ maxWidth: 200}}>
            <CardMedia
                component="img"
                height="200"
                src={props.src}
                alt={props.className}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.className}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Select {props.className}</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
