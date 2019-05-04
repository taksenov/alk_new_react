import { StoreTypes } from '../../../core/reducers/types';

// Status of the fetching data from API
export const getIsFetchingMySites = (store: StoreTypes) => store.mySitesReducer.isFetchingMySites;

// My Sites Full data from API
export const getMySitesData = (store: StoreTypes) => store.mySitesReducer.mySites;
