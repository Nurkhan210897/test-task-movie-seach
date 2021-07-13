import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routesConfig from "./routes/routesConfig";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container maxWidth="md">
          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
