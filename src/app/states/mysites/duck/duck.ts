import { combineReducers } from 'redux';
import { createAction, handleAction, handleActions } from 'redux-actions';
import { IMySitesReducer } from '../types';

// Actions =================================================================

const MY_SITES = 'MY_SITES';

export const getMySitesRequest = createAction(`${MY_SITES}/GET_REQUEST`);
export const getMySitesSuccess = createAction(`${MY_SITES}/GET_SUCCESS`);
export const getMySitesFailure = createAction(`${MY_SITES}/GET_FAILURE`);

// Reducers =================================================================

const isFetchingMySites = handleActions<any, any>(
  {
    [getMySitesRequest.toString()]: () => true,
    [getMySitesSuccess.toString()]: () => false,
    [getMySitesFailure.toString()]: () => false,
  },
  false,
);

const mySites = handleAction<any, any>(getMySitesSuccess.toString(), (_state, action) => action.payload, []);

const reducer = combineReducers<IMySitesReducer>({
  isFetchingMySites,
  mySites,
});

export default reducer;
