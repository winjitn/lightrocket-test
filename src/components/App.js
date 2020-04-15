import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, matchPath } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import fetchUser from "../utils/fetchUser";

function App() {
  const [user, setUser] = useState({});

  //get user with params
  let userName = matchPath(window.location.pathname, {
    path: "/:user",
    strict: false,
  });

  useEffect(() => {
    //condition to not crash at base URL
    if (userName !== null) fetchUser(userName.params.user, setUser);
  }, []);

  //render user or error
  switch (user.statusCode) {
    case 200: {
      return (
        <div>
          <BrowserRouter>
            <Nav user={user} userName={userName.params.user} />
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
    default: {
      return (
        //check to not show empty bracket
        <div className="center">
          {Object.values(user).length === 0 ? null : JSON.stringify(user)}
        </div>
      );
    }
  }
}

export default App;
