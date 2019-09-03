import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  someCounter: 0,
};

export const common = handleActions(
  {
    [actions.someAction]: (state, { payload }) => ({
      ...state, // unnecessary in this case
      someCounter: state.someCounter + payload,
    }),
  },
  initialState
);
