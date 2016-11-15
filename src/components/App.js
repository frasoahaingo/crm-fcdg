import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, DatePicker,Upload } from 'antd';
const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const FormItem = Form.Item;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

const residences = [{
  value: 'Club d\'entreprise',
  label: 'Club d\'entreprise',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
},
  {
    value: 'Dons ponctuels',
    label: 'Dons ponctuels',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  },{
  value: 'Legs',
  label: 'Legs',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
  },
    {
      value: 'Donations en ligne',
      label: 'Donations en ligne',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
}];
const options = [{

    value: 'abonnement 1 an ',
    label: 'abonnement 1 an',


  },
    {
      value: 'abonnement 3 ans ',
      label: 'abonnement 3 ans',

    }
];

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
                label="Phone Number"
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: false, message: 'Please input your phone number!' }],
                })(
                  <Input addonBefore={prefixSelector}/>
                )}
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
                label="Date d'enregistrement"
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
        label="Mécénat"
      >
        <Cascader options={residences}/>

      </FormItem>
        <FormItem
          {...formItemLayout}
          label="Revue espoir"
        >
          <Cascader options={options}/>

        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>

          <Checkbox>Personnel de la Fondation</Checkbox>

        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>

          <Checkbox>Membre de la convention</Checkbox>

        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>

          <Checkbox>Conseil Scientifique</Checkbox>

        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>

          <Checkbox>Amis</Checkbox>

        </FormItem>


        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          <Upload {...props}>
            <Button type="ghost">
              <Icon type="upload" /> Cliquer pour télécharger un document
            </Button>
          </Upload>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Commentaires"
        >
          <Input type="textarea" rows={4}/>
        </FormItem>


        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Enregistrer</Button>
        </FormItem>

      </Form>

    );

  }
}

export default Form.create()(App);
