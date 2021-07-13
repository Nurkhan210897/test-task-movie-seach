import React, { useEffect } from "react";

export default function MovieInfo({ match }) {
  const id = match.params.id;

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=4ed03e49`)
     .then((response) => response.json())
     .then((movies) => {
      console.log(movies);
     });
 }, []);

  return <div>page movie: {id} </div>;
}
