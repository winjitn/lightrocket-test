import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, matchPath } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import fetchUser from "../utils/fetchUser";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  let userName = matchPath(window.location.pathname, {
    path: "/:user",
    strict: false,
  }).params.user;

  useEffect(() => {
    fetchUser(userName, setError, setUser);
  }, []);

  if (error) {
    return <div className="center">{JSON.stringify(error)}</div>;
  }

  switch (user.statusCode) {
    case 200: {
      return (
        <div>
          <BrowserRouter>
            <Nav user={user} userName={userName} />
            <Switch>
              <Route
                exact
                path="/:user"
                render={(props) => <Home {...props} user={user} />}
              />
              <Route
                exact
                path="/:user/about"
                render={(props) => <About {...props} user={user} />}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    case 404: {
      return <div className="center">User not found</div>;
    }
    default: {
      return null;
    }
  }
}

export default App;
