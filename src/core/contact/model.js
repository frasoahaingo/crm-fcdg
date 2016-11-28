import _ from 'lodash/fp';

const _mapValues = _.mapValues.convert({ cap: false });

class ContactModel {
  fields = {
    firstName: {
      label: 'Prénom',
      rules: [{ required: true, message: 'Champ obligatoire!' }],
    },
    lastName: {
      label: 'Nom',
      rules: [{ required: true, message: 'Champ obligatoire!' }],
    },
  };

  getFieldLabel(fieldName) {
    return this.fields[fieldName].label;
  }

  getFieldDecorator (fieldName) {
    const rules = this.fields[fieldName].rules;
    return [
      fieldName,
      { rules }
    ];
  }

  mapFieldValues (values) {
    const map = _mapValues((field, fieldName) => ({
      value: values && values.get(fieldName)
    }))(this.fields);
    return map;
  }
}

export default new ContactModel;