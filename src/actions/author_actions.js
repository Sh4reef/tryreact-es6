import AuthorApi from '../api/mockAuthorApi';
import {
  LOAD_AUTHORS_SUCCESS,
} from './action_types';

export const loadAuthorsSuccess = (authors) => {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  }
}

export const loadAuthors = () => {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(error => {
      throw (error);
    })
  }
}

export const getAuthorById = author => {
  return {
    type: GET_AUTHOR_BY_ID,
    author
  }
}