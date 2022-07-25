import './sider.css';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons'
const { Sider } = Layout;

const PageSider = ({collapsed}) => {
  return (
  <Sider trigger={null} collapsible collapsed={collapsed} className="site-layout-sider">
    <div className='logo'></div>
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['1']}
      items={[{
        key: '1',
        icon: <UserOutlined />,
        label: 'Dashboard'
      }]}
    />
  </Sider>
  );
}

export default PageSider;