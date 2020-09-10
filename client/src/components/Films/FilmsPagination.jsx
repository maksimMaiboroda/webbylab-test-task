import React, { useState, useEffect, useCallback } from "react";

import Films from "./Films";

import Pagination from "../common/Pagination/Pagination";
import classes from "./Films.module.scss";

const FilmsPagination = ({filmsLoaded, searchQuery, getFilmsList, films, ...props }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(10);

  useEffect(() => {
    getFilmsList();
  }, []);

  
  // Get current page
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  // Change page
  const paginate = useCallback((pageNumber) => setCurrentPage(pageNumber), [
    films,
  ]);

  return (
    <>
      <Films  className={classes.filmsContent} {...props} films={currentFilms} getFilmsList={getFilmsList} />
      <div  className={classes.paginationWrap}>
      {!filmsLoaded ? (
          <Pagination 
            filmsPerPage={filmsPerPage}
            totalFilms={films.length}
            paginate={paginate}
          />
        ) : null}
      </div>
      
    </>
  );
};

export default FilmsPagination;
