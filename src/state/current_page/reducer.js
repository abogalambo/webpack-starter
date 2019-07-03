import {
  UPDATE_CURRENT_PAGE
} from './constants';

export const initialState = 0;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CURRENT_PAGE:
      return payload.page;
    default:
      return state;
  }
};

export default reducer;
