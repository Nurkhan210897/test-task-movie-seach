import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";
import PaginationList from "./Paginations/PaginationList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import SearchMovies from "./SearchMovies/SearchMovies";
import Loader from "./Loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function MovieList() {
  const classes = useStyles();
  const [movies, setMovies] = React.useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  const URLPARAMS = new URLSearchParams(window.location.search);

  let currentPageNum = URLPARAMS.get("page")
    ? Number(URLPARAMS.get("page"))
    : 1;

  const [page, setPage] = React.useState(currentPageNum);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=marvel&apikey=4ed03e49&page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.Search);
        setLoading(false);
        window.scrollTo(0, 0);
      });
  }, [page]);

  function currentPage(e) {
    setValue("");
    setPage(e);
  }

  function getSearchData(e) {
    setValue(e);
    console.log(e.length);
  }

  const filteredMovies = movies.filter((mov) => {
    return mov.Title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="movies_wrapper">
      {loading && <Loader />}
      {!loading && (
        <Container>
          <SearchMovies setSearchData={getSearchData} />
          <div className={classes.root}>
            <Grid container spacing={3}>
              
              {filteredMovies.length ? (
                filteredMovies.map((item, index) => {
                  return (
                    <Grid item xs={3} key={index}>
                      <MovieCard movies={item} />
                    </Grid>
                  );
                })
              ) : (
                <div className="mo_movie">
                  <h2> No movie </h2>
                </div>
              )}
            </Grid>
          </div>
          <PaginationList currentPage={currentPage} />
        </Container>
      )}
    </div>
  );
}
