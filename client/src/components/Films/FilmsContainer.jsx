import { connect } from "react-redux";
import Films from "./Films";
import { getFilmsList } from "../../redux/actions/actionsFilmsReducer";
import { setFilter } from "../../redux/actions/actionsFilerReducer";
import orderBy from "lodash/orderBy";

const sortBy = (films, filterBy) => {
  switch (filterBy) {
    case "title":
      return orderBy(films, ["title"], ["asc"]);

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
  return sortBy(
    filterFilmsTitle(
      filterFilmsStars(films, searchQueryStars),
      searchQueryTitle
    ),
    filterBy
  );
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
  };
};

export default connect(mapStateToProps, { getFilmsList, setFilter })(Films);
