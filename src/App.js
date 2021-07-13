import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routesConfig from "./routes/routesConfig";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
