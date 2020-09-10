import {
  SET_QUERY,
  SET_FILTER,
  SET_QUERY_TITLE,
  SET_QUERY_STARS,
} from "../types/types";

export const setFilter = (type) => ({ type: SET_FILTER, payload: type });
export const setQuery = (value) => ({ type: SET_QUERY, payload: value });
export const setQueryTitle = (value) => ({
  type: SET_QUERY_TITLE,
  payload: value,
});
export const setQueryStars = (value) => ({
  type: SET_QUERY_STARS,
  payload: value,
});
