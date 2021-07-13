import React, {useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import PaginationList from "./PaginationList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
      .then((movies) => {
        setMovies(movies.Search);
      });
  }, [page]);

  const filteredMovies = movies.filter((mov) => {
    return mov.Title.toLowerCase().includes(value.toLowerCase());
  });

  function currentPage(e){
    setPage(e)
  }

  return (
    <div className="movies_wrapper">
      <form action="">
        <input
          type="text"
          placeholder="search movies"
          value={value}
          onInput={(event) => setValue(event.target.value)}
        />
      </form>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {filteredMovies.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <MovieCard movies={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <PaginationList currentPage={currentPage}/>
    </div>
  );
}
