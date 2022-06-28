import React from 'react'
import { Card, CardActionArea, CardMedia, Typography, CardContent, Button, CardActions } from '@mui/material';

export default function MenuCard(props) {
  return (
    <Card className='card_container' onClick={props.onClick}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://pbs.twimg.com/profile_images/1400001673532116997/8qEpv4Ca_400x400.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
