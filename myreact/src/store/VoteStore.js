import { createStore } from "redux";

const initState = {
  supNum: 0,
  oppNum: 0,
};

const reducer = function reducer(state = initState, action) {
  switch (action.type) {
    case "O_SUP":
      return { ...state, supNum: state.supNum + 1 };
    case "O_OPP":
      return { ...state, oppNum: state.oppNum + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;