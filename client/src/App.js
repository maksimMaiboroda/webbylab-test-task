import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import { Container } from "react-bootstrap";

import FilmsContainer from "./components/Films/FilmsContainer";
import AddFilmContainer from "./components/AddFilm/AddFilmContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Container fluid="md">
        <Switch>
          <Route path="/" component={FilmsContainer} exact />
          <Route path="/films" component={FilmsContainer} />
          <Route path="/add-film" component={AddFilmContainer} />
          <Redirect to="/films" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
