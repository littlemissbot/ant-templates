import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
    <Paragraph align="center" style={{ marginBottom: 0 }}>Welcome back!</Paragraph>
    <Title level={2} align="center" style={{ marginTop: 0, marginBottom: '2rem' }}>Access your account</Title>
    <Form
      name="loginForm"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input size="large"/>
      </Form.Item>

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

      <Form.Item
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
      >
        <Button type="primary" shape="round" size='large' block htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    <Paragraph>Don't have an account with us? <Link to="/register">Register</Link></Paragraph>
    </>
  );
}

export default Login;