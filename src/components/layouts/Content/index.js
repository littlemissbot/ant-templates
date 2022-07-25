import './content.css';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const PageContent = () => {
  return (
  <Content className='site-layout-content'>
    <Outlet/>
  </Content>
  );
}

export default PageContent;