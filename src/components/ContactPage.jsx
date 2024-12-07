import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import './Contact.css';

const Contact = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values) => {
    setIsSubmitting(true);
    setTimeout(() => {
      message.success('Message sent successfully!');
      form.resetFields();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-area">
      <div className="bg-text">Let's Talk</div>
      <div className="circle-img">
        {/* You can place an image here if needed */}
      </div>
      <div className="container">
        <Row gutter={48} align="top">
          {/* Left Side: Contact Information */}
          <Col xs={24} md={12} className="contact-info">
          <div className="contact-meta-info">
  <ul>
    <li>
      <PhoneOutlined className="contact-meta-icon" />
      <span>
        <strong>Phone:</strong>
        <a href="tel:+917449257762" className="contact-info-link">+91 74492 57762</a>
      </span>
    </li>
    <li>
      <EnvironmentOutlined className="contact-meta-icon" />
      <span>
        <strong>Address:</strong> Erode
      </span>
    </li>
    <li>
      <MailOutlined className="contact-meta-icon" />
      <span>
        <strong>Email:</strong>
        <a href="mailto:arulprakashv0107@gmail.com" className="contact-info-link">arulprakashv0107@gmail.com</a>
      </span>
    </li>
  </ul>
</div>

          </Col>

          {/* Right Side: Contact Form */}
          <Col xs={24} md={12} className="contact-form-container">
            <Form
              form={form}
              name="contact_form"
              onFinish={handleSubmit}
              layout="vertical"
              className="contact-form"
            >
              <div className="user-details">
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
                >
                  <Input placeholder="Enter your email address" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                  <Input.TextArea placeholder="Enter your message" rows={4} />
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isSubmitting}
                  block
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
