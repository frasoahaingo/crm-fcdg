import { firebaseAuth } from '../../api/firebase';
import * as authActions from './actions';

class Auth {

  api = null;

  constructor () {
    this.api = firebaseAuth;
  }

  subscribe (emit) {
    this.api.onAuthStateChanged(function(user) {
      if (user) {
        emit(authActions.setCurrentUser(user));
      } else {
        emit(authActions.logout());
      }
    });

    return () => this.api.off();
  }

  async login (email, password) {
    return await this.api.signInWithEmailAndPassword(email, password);
  }

  async logout () {
    return await this.api.signOut();
  }

}

export default new Auth();