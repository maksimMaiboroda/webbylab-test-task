import React from "react";

import clasess from "./Film.module.scss";
import { Accordion, Card, Button } from "react-bootstrap";

const Films = ({
  film,
  filmDelete,
  getFilmsList,
  deleteFilm,
  setModalDeleteFilm,
}) => {
  const setDelFilm = (id) => {
    filmDelete(id);
    getFilmsList();
  };

  return (
    <>
      <Card className={clasess.filmItem}>
        <Accordion.Toggle
          className={clasess.blockTitle}
          as={Card.Header}
          eventKey={film._id}
        >
          {film.title}
          <Button
            onClick={setModalDeleteFilm.bind(this,  film._id)}
            variant="outline-danger"
          >
            Delete
          </Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={film._id}>
          <Card.Body>
            <p>
              <b>Release Year: </b>
              {film.releaseYear}
            </p>
            <p>
              <b>Format: </b>
              {film.format}
            </p>
            <p>
              <b>Stars: </b>
              {film.stars}
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default Films;
