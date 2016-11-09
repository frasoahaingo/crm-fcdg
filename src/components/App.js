import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, DatePicker } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class App extends React.Component {

  render () {
    const { getFieldDecorator } = this.props.form;
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <div className="form-bloc">
          <Row>
            <Col span={12} style={{ textAlign: 'right' }}>
              <FormItem
                {...formItemLayout}
                label="Nom"
                hasFeedback
              >
                <Input />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Prénom"
                hasFeedback
              >

                <Input />

              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Adresse"
                hasFeedback
              >

                <Input />

              </FormItem>
              <FormItem
                {...formItemLayout}
                label="code postal"
                hasFeedback
              >

                <Input />

              </FormItem>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <FormItem
                {...formItemLayout}
                label="Ville"
                hasFeedback
              >

                <Input />

              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Pays"
                hasFeedback
              >

                <Input />

              </FormItem>
              <FormItem
                {...formItemLayout}
                label="E-mail"
                hasFeedback
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="DatePicker"
              >
                {getFieldDecorator('date-picker', config)(
                  <DatePicker format="YYYY-MM-DD HH:mm:ss"/>
                )}
              </FormItem>
            </Col>
          </Row>
        </div>
        <FormItem
          {...formItemLayout}
          label="Habitual Residence"
        >
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
          })(
            <Cascader options={residences}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector}/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Commentaires"
        >
          <Input type="textarea" rows={4}/>
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I had read the <a>agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Register</Button>
        </FormItem>

      </Form>
    );
  }
}

export default Form.create()(App);
