import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import clasess from "./Header.module.scss";

const Header = ({ searchQuery, setQuery, setQueryTitle, setQueryStars }) => {
  const goToFilmsPage = () => {
    setQueryTitle("");
    setQuery("");
  };

  return (
    <div>
      <Navbar className={clasess.headerWrapper} bg="light" expand="lg">
        <Navbar.Brand to="/">WebbyLab test task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className={clasess.headerContent}
          id="basic-navbar-nav"
        >
          <div className={clasess.headerElements}>
            <NavLink
              onClick={goToFilmsPage}
              className={clasess.headerRoute}
              to="/film"
            >
              Films
            </NavLink>

            <NavLink className={clasess.headerRoute} to="/add-film">
              Add film
            </NavLink>
          </div>

          <Form inline>
            <FormControl
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={searchQuery}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button
              onClick={setQueryTitle.bind(this, searchQuery)}
              variant="outline-success"
              className={clasess.btnSearch}
            >
              Search movie by title
            </Button>
            <Button
              onClick={setQueryStars.bind(this, searchQuery)}
              variant="outline-success"
              className={clasess.btnSearch}
            >
              Search movie by actor name
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
