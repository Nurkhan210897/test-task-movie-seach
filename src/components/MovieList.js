import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";
import PaginationList from "./Paginations/PaginationList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import SearchMovies from "./SearchMovies/SearchMovies";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MovieList() {
  const classes = useStyles();
  const [movies, setMovies] = React.useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=marvel&apikey=4ed03e49&page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.Search);
      });
  }, [page]);

  function currentPage(e) {
    setValue("");
    setPage(e);
  }

  function getSearchData(e) {
    setValue(e);
  }

  const filteredMovies = movies.filter((mov) => {
    return mov.Title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="movies_wrapper">
      <Container>
        <SearchMovies setSearchData={getSearchData} />
        <div className={classes.root}>
          <Grid container spacing={2}>
            {filteredMovies.length ? filteredMovies.map((item, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <MovieCard movies={item} />
                </Grid>
              );
            }) : (<h2>No movie</h2>)}
          </Grid>
        </div>

        <PaginationList currentPage={currentPage} />
      </Container>
    </div>
  );
}
