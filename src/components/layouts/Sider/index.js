import './sider.css';
import LogoText from '../../../assets/images/logo-text.png';
import LogoIcon from '../../../assets/images/logo-icon.png';
import { Layout, Menu } from 'antd';
import { HomeFilled, ContactsOutlined, UserOutlined, CustomerServiceFilled, SettingFilled } from '@ant-design/icons'
import { Link, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const menuHeaders = [{
  key: 'dashboard',
  to: '',
  icon: <HomeFilled />,
  label: 'Dashboard'
}, {
  key: 'contacts',
  to: 'contacts',
  icon: <ContactsOutlined />,
  label: 'Contacts'
}, {
  key: 'users',
  to: 'users',
  icon: <UserOutlined />,
  label: 'Users'
}, {
  key: 'help',
  to: 'help',
  icon: <CustomerServiceFilled />,
  label: 'Help'
}, {
  key: 'settings',
  to: 'settings',
  icon: <SettingFilled />,
  label: 'Settings'
}]

const PageSider = ({collapsed}) => {
  const navigate = useNavigate();

  const onClickHeaderMenu = ({ keyPath }) => {
    let path = menuHeaders
    keyPath.reverse().forEach((e, i) => {
      if (i === (keyPath.length - 1)) {
        path = path.find(f => f.key === e)
      } else {
        path = path.find(f => f.key === e) ? path.find(f => f.key === e).children : path
      }
    })
    navigate(path.to)
  }

  return (
  <Sider trigger={null} collapsible collapsed={collapsed} className="site-layout-sider">
    <Link to='/'>
      <div className='logo'>{ collapsed ? 
        <img src={LogoIcon} alt="admin."/> :
        <img src={LogoText} alt="admin."/> 
      }</div>
    </Link>
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['dashboard']}
      onClick={onClickHeaderMenu}
      items={menuHeaders}
    />
  </Sider>
  );
}

export default PageSider;