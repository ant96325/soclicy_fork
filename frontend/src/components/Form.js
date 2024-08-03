import React from 'react';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useEffect } from 'react';



const AntForm = () => {

  const [form] = Form.useForm()
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const values = form.getFieldsValue();
    console.log('values : ', values)
    const allFilled =
      values.firstname &&
      values.lastname &&
      values.email &&
      values.message &&
      values.checkboxe1;

    console.log(allFilled)
    setIsFormValid(allFilled);
  }, [form]);

  // const areAllFieldsFilled = () => {
  //   const values = form.getFieldsValue();
  //   console.log(values)
  //   const allFilled =
  //     values.firstname &&
  //     values.lastname &&
  //     values.email &&
  //     values.message &&
  //     values.checkboxes;

  //   setIsFormValid(allFilled);
  //   // return false;
  // };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      style={{
        maxWidth: 466,
        minWidth: 466,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      autoComplete="off"
      onValuesChange={() => {
        // Trigger the effect on value change
        setIsFormValid(false); // Reset the form validity
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label={<span className="quicksand-formLabel">First name</span>}
            name="firstname"
            
            rules={[
              {
                required: true,
                message: 'Please input your firstname',
              },
              // {
              //   pattern: /^[A-Za-z]+$/,
              //   message: 'Please input letters only',
              // },
              {
                validator: (_, value) => {
                  // Skip validation if the input is empty
                  if (value === undefined || value === '') {
                    console.log("1")
                    return Promise.resolve(); // No validation needed
                  }
                  // Additional validation can go here
                  if (!/^[A-Za-z]+$/.test(value)) {
                    console.log("ff")
                    return Promise.reject(new Error('Please input letters only'));
                  }
                  console.log("here")
                  return Promise.resolve();
                },
              },
            ]}
            required={false}
          >
            <Input className='contactUsForm-formInput' placeholder="First name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={<span className="quicksand-formLabel">Last name</span>}
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your last name',
              },
              {
                pattern: /^[A-Za-z]+$/,
                message: 'Please input letters only',
              },
            ]}
            required={false}
          >
            <Input className='contactUsForm-formInput' placeholder="Last name" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={<span className="quicksand-formLabel">Email address</span>}
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address',
          },
          {
            type: 'email',
            message: 'Please enter a valid Email',
          },
        ]}
        required={false}
      >
        <Input className='contactUsForm-formInput' placeholder="Email" />
      </Form.Item>

      <Form.Item
        label={<span className="quicksand-formLabel">Message</span>}
        name="message"
        rules={[
          {
            required: true,
            message: 'Please ensure your message contains text and does not comprise emojis, solely punctuation marks, and numbers.',
          },
          {
            validator: (_, value) => {
              // Skip validation if the input is empty
              if (!value) {
                return Promise.resolve(); // No validation needed
              }

              const regex = /^[a-zA-Z\s]+$/;
              if (!regex.test(value.trim())) {
                return Promise.reject(new Error('Please ensure your message contains text and does not comprise emojis, solely punctuation marks, and numbers.'));
              }

              return Promise.resolve();
            },
          },
        ]}
        required={false}
      >
        <Input.TextArea className='contactUsForm-formInput' placeholder="Message" style={{ resize: "none", minHeight: "200px" }} />
      </Form.Item>

      <Form.Item
        label={<span className="quicksand-formLabel">Please choose your interest</span>} style={{ paddingTop: "20px" }}
        name="checkbox">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="checkbox1" valuePropName="checked">
              <Checkbox className='contactUsForm-formCheckbox'>Software Development</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="checkbox2" valuePropName="checked">
              <Checkbox className='contactUsForm-formCheckbox'>Hire Remote Developer</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="checkbox3" valuePropName="checked">
              <Checkbox className='contactUsForm-formCheckbox'>Job Opportunity</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="checkbox4" valuePropName="checked">
              <Checkbox className='contactUsForm-formCheckbox'>Marketing Collaboration</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="checkbox5" valuePropName="checked">
              <Checkbox className='contactUsForm-formCheckbox'>Blockchain Development</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="checkbox6" valuePropName="checked">
              <Checkbox className='contactUsForm-formCheckbox'>Other
              </Checkbox>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>



      <ReCAPTCHA
        sitekey="6LeIdRcqAAAAAIdxUC4qDXdVw1Y9gkvqz2jHgtXy"
        style={{ marginBottom: '15px' }}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit"
          className='contactUsForm-submit'

          disabled={!isFormValid}>
          Submit
        </Button>
      </Form.Item>
    </Form >
  );

}

export default AntForm;
