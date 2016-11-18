import _ from 'lodash/fp';
import { createSelector } from 'reselect';

export const getAllContacts = createSelector(
  // getters
  _.get('byId'),
  _.get('allIds'),

  // callback
  (byId, allIds) => _.map(id => byId[id])(allIds)
);

const getContactId = (state, id) => id;

export const getContactById = createSelector(
  // getters
  _.get('byId'),
  getContactId,

  // callback
  (byId, id) => byId[id]
);