import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Table,
  Button,
} from 'antd';
import ContactModel from '../../core/contact/model';
import * as selectors from '../../store/selectors';
import * as contactActions from '../../core/contact/actions';

class ContactList extends React.Component {

  componentDidMount () {
    if(this.props.contacts.size === 0) {
      this.props.dispatch(contactActions.loadContacts());
    }
  }

  removeContact (id, e) {
    e.preventDefault();
    this.props.dispatch(contactActions.removeContact(id));
  }

  render () {
    const { contacts } = this.props;
    const data = contacts.toJS();

    const actions = {
      title: 'Action',
      key: 'action',
      className: 'table__col table__col--align-right',
      render: (text, record) => (
        <span>
          <Link to={`/contacts/show/${record.id}`}>
            <Button type="primary" icon="file-text" className="btn--action">fiche</Button>
          </Link>
          <Link to={`/contacts/edit/${record.id}`}>
            <Button type="primary" icon="edit" className="btn--action">éditer</Button>
          </Link>
          <a onClick={this.removeContact.bind(this, record.id)}>
            <Button type="ghost" icon="delete" className="btn--action">supprimer</Button>
          </a>
        </span>
      ),
    };

    const pagination = {
      total: data.length,
      showSizeChanger: true,
    };

    const columns = [
      ContactModel.getFieldColumn('firstName'),
      ContactModel.getFieldColumn('lastName'),
      ContactModel.getFieldColumn('address'),
      actions,
    ];

    return (
      <div>
        <div style={{ margin: '20px 0', textAlign: 'right' }}>
          <Link to="/contacts/add">
            <Button type="ghost" icon="plus-circle-o">Ajouter un contact</Button>
          </Link>
        </div>
        <Table columns={columns} dataSource={data} pagination={pagination} scroll={{ y: 240 }}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    contacts: selectors.getAllContacts(state)
  })
)(ContactList);