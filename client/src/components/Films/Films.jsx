import React, { useEffect } from "react";
import FilmContainer from "../Film/FilmContainer";

import clasess from "./Film.module.scss";
import { Accordion } from "react-bootstrap";
import Preloader from "../common/Preloader/Preloader";
import UploadFileContainer from "../common/UploadFileComponent/UploadFileContainer";

const Films = ({ films, getFilmsList, filmsLoaded, setFilter, filterType }) => {
  useEffect(() => {
    getFilmsList();
  }, []);

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
        <UploadFileContainer/>
      </div>

      <Accordion defaultActiveKey="0" className={clasess.listFilms}>
        {films.map((film) => (
          <FilmContainer film={film} key={film._id} />
        ))}
      </Accordion>
    </div>
  );
};

export default Films;
