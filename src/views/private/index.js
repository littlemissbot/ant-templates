import { Layout } from 'antd';
import { useState } from 'react';

import PageSider from '../../components/layouts/Sider';
import PageHeader from '../../components/layouts/Header';
import PageContent from '../../components/layouts/Content';
import PageFooter from '../../components/layouts/Footer';

const PrivateLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <PageSider collapsed={collapsed}/>
        <Layout>
          <PageHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
          <PageContent/>
          <PageFooter/>
        </Layout>
      </Layout>
    </>
  );
}

export default PrivateLayout;