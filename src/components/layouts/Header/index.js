import './header.css';
import { Layout, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React from 'react';
const { Header } = Layout;

const PageHeader = ({collapsed, setCollapsed}) => {

  return (
  <Header className='site-layout-header'>
    <Space>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed)
      })}
    </Space>
  </Header>
  );
}

export default PageHeader;