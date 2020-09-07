import {
  SET_FILTER,
  SET_QUERY,
  SET_QUERY_TITLE,
  SET_QUERY_STARS,
} from "../types/types";

let initialState = {
  filterBy: null,
  searchQuery: "",
  searchQueryTitle: "",
  searchQueryStars: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return { ...state, searchQuery: action.payload };
    }

    case SET_QUERY_TITLE: {
      return { ...state, searchQueryTitle: action.payload };
    }

    case SET_QUERY_STARS: {
      return { ...state, searchQueryStars: action.payload };
    }

    case SET_FILTER: {
      return { ...state, filterBy: action.payload };
    }

    default:
      return state;
  }
};

export default filterReducer;
