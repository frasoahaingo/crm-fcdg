import { FirebaseList } from '../../api/list';
import * as actions from './actions';

const contactList = new FirebaseList({
  onAdd: actions.addContactSuccess,
  onLoad: actions.loadContactsSuccess,
  onChange: actions.updateContactSuccess,
  onRemove: actions.removeContactSuccess,
});

contactList.path = 'contacts';

export { contactList };