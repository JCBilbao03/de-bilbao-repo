import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

export default function MenuCard(props) {
  return (
    <Card className="card_container" onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.gif}
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
  );
}
