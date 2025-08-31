import { createStore } from "redux";
import reducers from "../views/reducers"

const combilneReducerStore = createStore(reducers);

export default combilneReducerStore;