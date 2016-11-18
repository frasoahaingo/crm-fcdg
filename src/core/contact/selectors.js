export const getAllContacts = (state) =>
  state.allIds.map(id => state.byId[id]);

export const getContactById = (contactId, state) =>
  state.byId[contactId];