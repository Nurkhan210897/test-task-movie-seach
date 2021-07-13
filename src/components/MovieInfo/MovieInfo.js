import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./index.css";
import { Container } from "@material-ui/core";


export default function MovieInfo({ match }) {
  const id = match.params.id;
  const [movieInfo, setMovieInfo] = useState(null);
  const [movieTitle, setMovieTitle] = useState(null);
  const [moviePoster, setMoviePoster] = useState(null);
  const [moviePlot, setMoviePlot] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=4ed03e49`)
      .then((response) => response.json())
      .then((response) => {
        setMovieInfo([
          { title: "Actors", data: response.Actors },
          { title: "Rating", data: response.imdbRating },
          { title: "Production", data: response.Production },
          { title: "Box office", data: response.BoxOffice },
          { title: "Year", data: response.Year },
          { title: "Run time", data: response.Runtime },
          { title: "Released", data: response.Released },
        ]);
        setMovieTitle(response.Title);
        setMoviePoster(response.Poster);
        setMoviePlot(response.Plot);
      });
  }, []);

  return (
    <div className="movie_info">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="poster">
              <img src={moviePoster} alt="" />
            </div>
          </Grid>
          <Grid item xs={6} className="movie_description">
            <h2>{movieTitle}</h2>
            <ul>
              {movieInfo?.map((item, index) => {
                return (
                  <li key={index}>
                    <strong>{item.title}</strong>: {item.data}
                  </li>
                );
              })}
            </ul>
            <p>Movie plot: {moviePlot}</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
