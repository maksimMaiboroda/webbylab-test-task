import { connect } from "react-redux";
import Films from "./Films";
import {
  getFilmsList,
  filmDelete,
} from "../../redux/actions/actionsFilmsReducer";
import {
  setFilter,
  setQuery,
  setQueryTitle,
} from "../../redux/actions/actionsFilterReducer";
import orderBy from "lodash/orderBy";
import FilmsPagination from "./FilmsPagination";

const sortBy = (films, filterBy) => {
  films.forEach(
    (film) =>
      (film.sortTitle = film.title.replace(/\s+/g, "").trim().toLowerCase())
  );

  switch (filterBy) {
    case "title":
      return orderBy(films, ["sortTitle"], ["asc"]);

    case "releaseYear":
      return orderBy(films, ["releaseYear"], ["asc"]);

    default:
      return films;
  }
};

const filterFilmsTitle = (films, searchQueryTitle) => {
  return films.filter((film) =>
    film.title.toLowerCase().includes(searchQueryTitle.toLowerCase())
  );
};

const filterFilmsStars = (films, searchQueryStars) => {
  return films.filter((film) =>
    film.stars.toLowerCase().includes(searchQueryStars.toLowerCase())
  );
};

const searchFilms = (films, filterBy, searchQueryTitle, searchQueryStars) => {
  const filterFilms = sortBy(
    filterFilmsTitle(
      filterFilmsStars(films, searchQueryStars),
      searchQueryTitle
    ),
    filterBy
  );
  if (filterFilms.length === 0) {
    return [];
  }

  return filterFilms;
};

let mapStateToProps = ({ filmsPage, filter }) => {
  return {
    films:
      filmsPage.films &&
      searchFilms(
        filmsPage.films,
        filter.filterBy,
        filter.searchQueryTitle,
        filter.searchQueryStars
      ),
    filmsLoaded: filmsPage.filmsLoaded,
    filterType: filter.filterType,
    searchQuery: filter.searchQuery,
    countFilmsList: filmsPage.countFilmsList,
  };
};

export default connect(mapStateToProps, {
  getFilmsList,
  setFilter,
  filmDelete,
  setQuery,
  setQueryTitle,
})(FilmsPagination);
