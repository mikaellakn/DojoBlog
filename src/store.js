import { configureStore } from "@redux/toolkit";
import nameReducer from "./reducers/reducers";

function configureStore(state = {name: ''}) {
  return createStore(nameReducer,state);
}

export default configureStore;