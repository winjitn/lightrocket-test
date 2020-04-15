import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  const userState = {
    user: user,
    setUser: setUser,
    error: error,
    setError: setError,
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/:user"
            render={(props) => <Home {...props} {...userState} />}
          />
          <Route
            exact
            path="/:user/about"
            render={(props) => <About {...props} {...userState} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
