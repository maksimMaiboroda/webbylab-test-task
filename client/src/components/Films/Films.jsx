import React, { useEffect, useState } from "react";
import FilmContainer from "../Film/FilmContainer";

import clasess from "./Films.module.scss";
import { Accordion, Modal, Button } from "react-bootstrap";
import Preloader from "../common/Preloader/Preloader";
import UploadFileContainer from "../common/UploadFileComponent/UploadFileContainer";

const Films = ({
  films,
  getFilmsList,
  filmsLoaded,
  setFilter,
  setQueryTitle,
  setQuery,
  filmDelete,
}) => {
  useEffect(() => {
    if (films.length === 0) {
      return setModalNoFilm(false);
    } else if (films.length > 0) {
      setModalNoFilm(true);
    }
  }, [films.length]);

  const [deleteFilm, setDeleteFilm] = useState(false);
  const [deleteFilmId, setDeleteFilmId] = useState(null);
  const [modalNoFilm, setModalNoFilm] = useState(false);

  const setModalDeleteFilm = (id) => {
    setDeleteFilmId(id);
    setDeleteFilm(true);
  };

  const deletePermanently = () => {
    filmDelete(deleteFilmId);
    getFilmsList();
    setDeleteFilm(false);
  };

  const noMoviesFound = (strQuery) => {
    setQuery(strQuery);
    setQueryTitle(strQuery);
    setModalNoFilm(true);
  };

  if (filmsLoaded) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  return (
    <div className={clasess.filmsWrapp}>
      <h1 className={clasess.titleListFilms}>LIST OF ALL FILMS</h1>
      <div className={clasess.filmsListHeader}>
        <button
          onClick={setFilter.bind(this, "title")}
          className={clasess.btnSotr}
        >
          Sort movies by title
        </button>
        <UploadFileContainer />
      </div>

      <Accordion defaultActiveKey="0" className={clasess.listFilms}>
        {films.map((film) => (
          <FilmContainer
            film={film}
            key={film._id}
            deleteFilm={deleteFilm}
            setModalDeleteFilm={setModalDeleteFilm}
          />
        ))}
      </Accordion>
      {!deleteFilm ? null : (
        <div className={clasess.modalWindow}>
          <Modal.Dialog id="modalContent" className={clasess.modalContent}>
            <Modal.Header>
              <Modal.Title>Delete movie</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Do you really want to delete this movie?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={setDeleteFilm.bind(this, false)}
                variant="secondary"
              >
                No
              </Button>
              <Button onClick={deletePermanently} variant="primary">
                Yes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}

      {modalNoFilm ? null : (
        <div className={clasess.modalWindow}>
          <Modal.Dialog id="modalContent" className={clasess.modalContent}>
            <Modal.Body>
              <p>No movies found!</p>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={noMoviesFound.bind(this, "")} variant="primary">
                Ok
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  );
};

export default Films;
