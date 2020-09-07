import { connect } from "react-redux";
import UploadFileComponent from "./UploadFileComponent";
import { getFilmsList } from "../../../redux/actions/actionsFilmsReducer";

let mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getFilmsList })(UploadFileComponent);
