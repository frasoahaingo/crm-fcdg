import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
} from 'antd';
import * as authActions from '../../core/auth/actions';

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(authActions.login(values));
      }
    });
  };

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input addonBefore={<Icon type="user"/>} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form__forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form__button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect()(Form.create()(Login));