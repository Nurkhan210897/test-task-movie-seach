import "./App.css";
import MovieList from "./components/MovieList";
import Container from "@material-ui/core/Container";

function App() {

  return (
    <div className="App">
      <Container maxWidth="md">
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
