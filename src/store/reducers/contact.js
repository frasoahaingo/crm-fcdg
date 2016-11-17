const contact = (state, action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
    case 'UPDATE_CONTACT':
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

export default contact;