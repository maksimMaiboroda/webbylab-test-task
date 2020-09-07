import { combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  filmsPage: filmsReducer,
  filter: filterReducer,
});
