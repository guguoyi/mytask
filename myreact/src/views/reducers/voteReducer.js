import  TYPES from "../actions/action-types"

const initState = {
    supNum : 0,
    oppNum : 0
}

const voteReduer = function voteReduer(state=initState, action) {
    switch (action.type) {
        case TYPES.VOTE_SUP:
            return { ...state, supNum: state.supNum + 1 };
        case TYPES.VOTE_OPP:
            return { ...state, oppNum: state.oppNum + 1 };
        default:
            return state;
    }
}

export default voteReduer