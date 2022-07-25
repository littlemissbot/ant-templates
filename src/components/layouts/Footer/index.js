import './footer.css';
import { Layout, Typography } from 'antd';
const { Footer } = Layout;
const { Paragraph } = Typography;

const PageFooter = () => {
  const year = new Date().getFullYear();

  return (
  <Footer className='site-layout-footer'>
    <Paragraph className='footer-copyrights'>Copyrights &copy; Autumn {year}. All right reserved.</Paragraph>
  </Footer>
  );
}

export default PageFooter;