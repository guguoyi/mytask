import { combineReducers } from "redux";
import voteReduer from "./voteReducer";


const reducers = combineReducers({
    "vote" : voteReduer
})

export default reducers