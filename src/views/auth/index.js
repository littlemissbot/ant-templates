import { Outlet} from "react-router-dom";
import { Row, Col, Space } from 'antd';

import AuthWallpaper from '../../assets/images/auth-wallpapers.jpg'

const AuthLayout = () => {
  return (
    <>
    <Row justify="space-around" align="middle" style={{ alignItems: 'stretch' }}>
      <Col span={12} style={{ minHeight: '100vh', backgroundImage: `url(${AuthWallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <Space direction="vertical" style={{ display: 'flex' }}></Space> */}
      </Col>
      <Col span={12} style={{ alignSelf: 'center' }}>
        <Space direction="vertical" size="large" style={{ display: 'flex', padding: '4rem' }}>
          <Outlet/>
          {/* <Paragraph align="center">Copyrights &copy; 2022. All rights reserved.</Paragraph> */}
        </Space>
      </Col>
    </Row>
    </>
  );
}

export default AuthLayout;