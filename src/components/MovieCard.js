import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function MovieCard(props) {
  const classes = useStyles();

  return (
      <Router>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.movies.Poster}
              title="Contemplative Reptile"
            />
            <Link to="/Nurhan">Home</Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.movies.Title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Router>
  );
}
