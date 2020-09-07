import { connect } from "react-redux";
import Film from "./Film";
import { filmDelete, getFilmsList } from "../../redux/actions/actionsFilmsReducer";

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { filmDelete, getFilmsList })(Film);
