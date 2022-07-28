import './header.css';
import { Layout, Space, Menu, Dropdown, Avatar } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined } from '@ant-design/icons';
import React from 'react';
const { Header } = Layout;

const userMenu = [{
  key: 'dashboard',
  label: 'My Profile'
}, {
  key: 'dashboard',
  label: 'Help'
}, {
  type: 'divider'
}, {
  key: 'users',
  label: 'Logout'
}]

const PageHeader = ({collapsed, setCollapsed}) => {

  return (
  <Header className='site-layout-header'>
    <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed)
      })}

      <Space size='large'>
        {React.createElement(BellOutlined, {
          onClick: () => setCollapsed(!collapsed)
        })}
        <Dropdown overlay={(<Menu items={userMenu}></Menu>)}>
          <Space>
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>SA</Avatar>
            Samita Mondal
          </Space>
        </Dropdown>
      </Space>
    </Space>
  </Header>
  );
}

export default PageHeader;