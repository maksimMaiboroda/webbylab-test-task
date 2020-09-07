import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import classes from "./AddFilm.module.scss";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

const AddFilm = ({ addFilm }) => {
  const [isFilmAdd, setFilmAdd] = useState(false);


  if (isFilmAdd) {
    return <Redirect to={"/films"} />;
  }

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
              format: Yup.string()
                .max(10, "Must be 10 characters or less")
                .required("Required"),
              stars: Yup.string()
                .max(100, "Must be 100 characters or less")
                .required("Required"),
            })}
            onSubmit={(values) => {
              addFilm(values);
              setFilmAdd(true);
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
              <Field name="format" type="text" />
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
    </div>
  );
};

export default AddFilm;
