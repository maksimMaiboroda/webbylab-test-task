import { filmsAPI } from "../../api/api";
import { SET_FILMS, FILMS_LOADED } from "../types/types";

export const setFilms = (films) => ({ type: SET_FILMS, payload: films });

export const filmsLoaded = (statusLoaded) => ({
  type: FILMS_LOADED,
  payload: statusLoaded,
});

export const getFilmsList = (state) => {
  try {
    return async (dispatch) => {
      dispatch(filmsLoaded(true));
      let data = await filmsAPI.getFilms();
      dispatch(setFilms(data));
      dispatch(filmsLoaded(false));
    };
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

export const addFilm = (film) => {
  try {
    return async (dispatch) => {
      await filmsAPI.addFilm(film);
    };
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

export const filmDelete = (id) => {
  try {
    return async (dispatch) => {
      await filmsAPI.filmDel(id);
    };
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

// saveFile

/* export const saveTextFile = (formElem) => async (dispatch) => {
  const response = await filmsAPI.saveFile(formElem);
}; */
