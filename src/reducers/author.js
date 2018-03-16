import { LOAD_AUTHORS_SUCCESS } from '../actions/action_types';

const authorReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors
    default:
      return state;
  }
}

export default authorReducer;