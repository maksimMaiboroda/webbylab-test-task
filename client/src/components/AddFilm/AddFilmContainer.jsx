import AddFilm from "./AddFilm";
import { connect } from "react-redux";
import { addFilm, getFilmsList } from "../../redux/actions/actionsFilmsReducer";

let mapStateToProps = ({filmsPage}) => {
  return {
    films: filmsPage.films
  };
};

export default connect(mapStateToProps, { addFilm , getFilmsList})(AddFilm);
