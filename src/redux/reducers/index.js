import { combineReducers } from "redux";
import hotelsReducer from "./hotels";
import stylesReducer from "./styles";

const rootReducer = combineReducers({
  styles: stylesReducer,
  hotels: hotelsReducer,
});

export default rootReducer;
