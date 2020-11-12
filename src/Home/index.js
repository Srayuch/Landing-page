import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Components/Header";
import Helloword from "../Helloword/index";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Helloword />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default HomePage;
