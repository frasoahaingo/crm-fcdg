import _ from 'lodash/fp';
import { createSelector } from 'reselect';

export const getAllContacts = createSelector(
  // getters
  _.get('byId'),
  _.get('allIds'),

  // callback
  (byId, allIds) => allIds.map(id => byId.get(id))
);

const getContactId = (state, id) => id;

export const getContactById = createSelector(
  // getters
  _.get('byId'),
  getContactId,

  // callback
  (byId, id) => byId.get(id)
);