import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import './index.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  link:{
    textDecoration: 'none',
    color: '#000'
  },
  media: {
    height: 250,
  },
});

export default function MovieCard(props) {
  const classes = useStyles();
  const isHttp  = 'http';

  return (
    <Card className={classes.root}>
      <Link to={`/movie-info/${props.movies.imdbID}`} className={classes.link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.movies.Poster.indexOf('http') == 0 ? props.movies.Poster : './images/no_poster.png'}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.movies.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,
              000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
