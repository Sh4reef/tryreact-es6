import {
  BEGIN_AJAX_CALL
} from '../actions/action_types';

const actionTypeEndsInSuccess = (actionType) => {
  return actionType.slice(actionType.length - 8) === '_SUCCESS';
}

const ajaxCallReducer = (state = 0, action) => {
  if (action.type === BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}

export default ajaxCallReducer;