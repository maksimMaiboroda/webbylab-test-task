import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./AddFilm.module.scss";
import { Button, Card, Modal } from "react-bootstrap";

import isEqual from "lodash/isEqual";

const AddFilm = ({ addFilm, films, getFilmsList }) => {
  useEffect(() => {
    getFilmsList();
  }, []);

  const [isFilmAdd, setFilmAdd] = useState(false);
  const [actorsRepeat, setActorsRepeat] = useState(false);
  const [filmRepeat, setFilmRepeat] = useState(false);

  if (isFilmAdd) {
    return <Redirect to={"/films"} />;
  }

  const normalizeText = (text) => {
    return String(text)
      .replace(/\s+/g, "")
      .trim()
      .split(",")
      .filter((el) => el != "");
  };

  return (
    <div>
      <Card className={classes.containerAddFilmComponent}>
        <Card.Header as="h5">New film</Card.Header>
        <Card.Body>
          <Formik
            initialValues={{
              title: "",
              releaseYear: "",
              format: "",
              stars: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .max(50, "Must be 50 characters or less")
                .required("Required"),
              releaseYear: Yup.number()
                .min(1888, "Enter the correct release date of the film!")
                .max(2030, "Enter the correct release date of the film!")
                .required("Required"),
              format: Yup.string().required("Required"),
              stars: Yup.string()
                .max(100, "Must be 100 characters or less")
                .required("Required"),
            })}
            onSubmit={(values) => {
              const addMovie = () => {
                addFilm(values);
                setFilmAdd(true);
              };

              const actorName = normalizeText(values.stars);

              /* console.log(actorName);

              const count = actorName.reduce(
                (count, actor) =>
                  actorName.includes(actor) ? (count += 1) : null,
                0
              );
              console.log(count);
              if (count >= 2) {
                return setActorsRepeat(true);
              } */

              for (let i = 0; i < actorName.length; i++) {
                for (let j = i + 1; j < actorName.length; j++) {
                  if (actorName[i] == actorName[j])
                    return setActorsRepeat(true);
                }
              }

              const copyObjFilm = films.map((film) => ({
                format: film.format,
                releaseYear: String(film.releaseYear),
                stars: film.stars,
                title: film.title,
              }));

              let filmRepeats = null;
              copyObjFilm.map((film) => {
                if (isEqual(film, values) === true) {
                  return (filmRepeats = true);
                }
              });

              if (filmRepeats === true) {
                return setFilmRepeat(true);
              }

              addMovie();
            }}
          >
            <Form className={classes.form}>
              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />

              <label htmlFor="releaseYear">Release Year</label>
              <Field name="releaseYear" type="text" />
              <ErrorMessage name="releaseYear" />

              <label htmlFor="format">Format</label>
              <Field name="format" as="select" className="my-select">
                <option value="" disabled selected hidden>
                  Choose Format...
                </option>
                <option value="DVD">DVD</option>
                <option value="VHS">VHS</option>
                <option value="Blu-Ray">Blu-Ray</option>
              </Field>
              <ErrorMessage name="format" />

              <label htmlFor="stars">Stars</label>
              <Field name="stars" as="textarea" className="form-input" />
              <ErrorMessage name="stars" />

              <Button type="submit" variant="success">
                Add film to list
              </Button>
              {/* <button type="submit">Submit</button> */}
            </Form>
          </Formik>
        </Card.Body>
      </Card>

      {!actorsRepeat ? null : (
        <div className={classes.repeatWindow}>
          <Modal.Dialog
            id="modalContent"
            className={classes.repeatWindowContent}
          >
            <Modal.Body>
              <p>Actors on the list should not be repeated!</p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={setActorsRepeat.bind(this, false)}
                variant="primary"
              >
                Ok
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}

      {!filmRepeat ? null : (
        <div className={classes.repeatWindow}>
          <Modal.Dialog
            id="modalContent"
            className={classes.repeatWindowContent}
          >
            <Modal.Body>
              <p>This movie is already on the list!</p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={setFilmRepeat.bind(this, false)}
                variant="primary"
              >
                Ok
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  );
};

export default AddFilm;
