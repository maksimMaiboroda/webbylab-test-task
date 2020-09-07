import { filmsAPI } from "../../api/api";
import { SET_FILMS, FILMS_LOADED } from "../types/types";

export const setFilms = (films) => ({ type: SET_FILMS, payload: films });
export const filmsLoaded = (statusLoaded) => ({
  type: FILMS_LOADED,
  payload: statusLoaded,
});

export const getFilmsList = () => {
  return async (dispatch) => {
    dispatch(filmsLoaded(true));
    let data = await filmsAPI.getFilms();
    dispatch(setFilms(data));
    dispatch(filmsLoaded(false));
  };
};

export const addFilm = (film) => {
  return async (dispatch) => {
    await filmsAPI.addFilm(film);
  };
};

export const filmDelete = (id) => {
  return async (dispatch) => {
    await filmsAPI.filmDel(id);
  };
};

// saveFile

/* export const saveTextFile = (fileData) => async (dispatch) => {
  const response = await filmsAPI.saveFile(fileData);
}; */
