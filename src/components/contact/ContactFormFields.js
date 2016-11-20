import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 14,
    offset: 6,
  },
};

class ContactFormFields extends React.Component {

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render () {
    const { form: { getFieldDecorator }, contact } = this.props;
    const buttonLabel = !!contact ? 'Mettre à jour' : 'Ajouter';

    return (
      <Form horizontal onSubmit={this.handleOnSubmit}>
        <Row>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Nom">
              {getFieldDecorator(
                'firstName',
                {
                  rules: [{ required: true, message: 'Champ obligatoire!' }]
                }
              )(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Prénom">
              {getFieldDecorator(
                'lastName',
                {
                  rules: [{ required: true, message: 'Champ obligatoire!' }]
                }
              )(<Input />)}
            </FormItem>
          </Col>
        </Row>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">{buttonLabel}</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create({
  mapPropsToFields: ({ contact }) => ({
    firstName: {
      value: contact && contact.get('firstName')
    },
    lastName: {
      value: contact && contact.get('lastName')
    }
  }),
})(ContactFormFields);