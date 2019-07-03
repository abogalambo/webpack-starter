import {
  UPDATE_CURRENT_PAGE
} from './constants';

export const updateCurrentPage = (payload) => (
  { type: UPDATE_CURRENT_PAGE, payload }
);
