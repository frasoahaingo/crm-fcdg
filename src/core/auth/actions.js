export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = ({ email, uid }) => ({
  type: SET_CURRENT_USER,
  payload: { email, uid },
});

export const LOGIN = 'LOGIN';

export const login = credentials => ({
  type: LOGIN,
  payload: credentials,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = ({ email, uid }) => ({
  type: LOGIN_SUCCESS,
  payload: { email, uid },
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT
});