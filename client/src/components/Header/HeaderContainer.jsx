import { connect } from "react-redux";
import Header from "./Header";
import {
  setQuery,
  setQueryTitle,
  setQueryStars,
} from "../../redux/actions/actionsFilterReducer";

let mapStateToProps = (state) => {
  return {
    searchQuery: state.filter.searchQuery,
  };
};

export default connect(mapStateToProps, {
  setQuery,
  setQueryTitle,
  setQueryStars,
})(Header);
