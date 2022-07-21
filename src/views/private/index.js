import { Layout } from 'antd';

import PageSider from '../../components/layouts/Sider';
import PageHeader from '../../components/layouts/Header';
import PageContent from '../../components/layouts/Content';
import PageFooter from '../../components/layouts/Footer';

const PrivateLayout = ({children}) => {
  return (
    <>
      <Layout>
        <PageSider/>
        <Layout>
          <PageHeader/>
          <PageContent/>
          <PageFooter/>
        </Layout>
      </Layout>
    </>
  );
}

export default PrivateLayout;