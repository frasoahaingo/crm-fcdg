import { firebaseAuth } from '../../api/firebase';

class Auth {

  api = null;

  constructor () {
    this.api = firebaseAuth;
  }

  async login (email, password) {
    const user = await this.api.signInWithEmailAndPassword(email, password);
    return user;
  }

  async logout () {
    return await this.api.signOut();
  }

}

export default new Auth();