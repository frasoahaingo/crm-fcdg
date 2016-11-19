import { FirebaseList } from '../../api/list';
import * as actions from './actions';
import ContactModel from './model';

const contactList = new FirebaseList({
  onAdd: actions.addContactSuccess,
  onLoad: actions.loadContactsSuccess,
  onChange: actions.updateContactSuccess,
}, ContactModel);

contactList.path = 'contacts';

export { contactList };