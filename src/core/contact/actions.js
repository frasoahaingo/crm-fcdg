export const addContact = ({ firstName, lastName }) => ({
  type: 'ADD_CONTACT',
  payload: {
    id: parseInt(Math.random() * 10000, 10),
    firstName,
    lastName,
  }
});

export const updateContact = ({ id, firstName, lastName }) => ({
  type: 'UPDATE_CONTACT',
  payload: {
    id, firstName, lastName
  }
});