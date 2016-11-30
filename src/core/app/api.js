import { firebaseDb } from '../../api/firebase';
import * as appActions from './actions';

class App {

  api = null;
  connectedRef = null;

  constructor () {
    this.api = firebaseDb;
    this.connectedRef = this.api.ref('.info/connected');
  }

  subscribe (emit) {

    this.connectedRef.on("value", snapshot => {
      emit(appActions.setConnectedStatus(snapshot.val()))
    });

    return () => this.api.off();
  }

}

export default new App();