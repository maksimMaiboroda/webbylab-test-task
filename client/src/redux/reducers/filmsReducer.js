import { SET_FILMS, FILMS_LOADED } from "../types/types";

let initialState = {
  films: [],
  filmsLoaded: true,
};
const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS: {
      return { ...state, films: action.payload };
    }

    case FILMS_LOADED: {
      return { ...state, filmsLoaded: action.payload };
    }

    default:
      return state;
  }
};

export default filmsReducer;
