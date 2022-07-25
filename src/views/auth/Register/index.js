import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
    {/* <Paragraph align="center">Welcome!</Paragraph> */}
    <Title level={3} align="center" style={{ marginTop: 0, marginBottom: 0 }}>Welcome! First thinks first..</Title>
    <Paragraph align="center" style={{ marginBottom: '2rem' }}>Create an account with us to personalize how you'll appear to collaborators</Paragraph>
    <Form
      name="registerForm"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={15} align="middle">
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input size="large"/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input size="large"/>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Email Address"
            name="emailAddress"
            rules={[
              {
                required: true,
                message: 'Please input your email address!',
              },
            ]}
          >
            <Input size="large"/>
          </Form.Item>
        </Col>
        <Col span={18}>
          <Form.Item
            label="Workspace URL"
            name="workspace"
            rules={[
              {
                required: true,
                message: 'Please input your workspace!',
              },
            ]}
          >
            <Input size="large"/>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Paragraph style={{ marginTop: '2rem' }}>.autumn.com</Paragraph>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password size="large"/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Repeat Password"
            name="repeatPassword"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password size="large"/>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
      >
        <Button type="primary" shape="round" size='large' block htmlType="submit">
          Create Workspace
        </Button>
      </Form.Item>
    </Form>
    <Paragraph>Already have an account? <Link to="/">Login</Link></Paragraph>
    </>
  );
}

export default Register;