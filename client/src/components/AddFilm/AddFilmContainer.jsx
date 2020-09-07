import AddFilm from "./AddFilm";
import { connect } from "react-redux";
import { addFilm } from "../../redux/actions/actionsFilmsReducer";

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addFilm })(AddFilm);
