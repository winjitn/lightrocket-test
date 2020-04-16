import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, matchPath } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import About from "./About";
import Nav from "./Nav";

function App() {
  const [user, setUser] = useState({});

  //get user with params
  let userName = matchPath(window.location.pathname, {
    path: "/:user",
    strict: false,
  });

  useEffect(() => {
    (async () => {
      //condition to not crash at base URL
      if (userName !== null) {
        try {
          const res = await axios.get(`/prod?user=${userName.params.user}`);
          setUser(res.data);
        } catch (err) {
          setUser(err);
        }
      }
    })();
  }, []);

  //render user or error
  return (
    <>
      {user.data ? (
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
      ) : (
        <div className="center">
          {Object.values(user).length === 0 ? null : JSON.stringify(user)}
        </div>
      )}
    </>
  );
}

export default App;
