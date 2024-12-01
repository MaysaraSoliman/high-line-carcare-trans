import DesktopTopHeader from "@/components/header/mainHeader/desktopHeader/topHeader/DesktopTopHeader";
import MainHeader from "@/components/header/mainHeader/MainHeader";
import MainFooter from "@/components/MainFooter/MainFooter";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import WhatsappBtn from "@/components/whatsappBtn/WhatsappBtn";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Layout>
      <DesktopTopHeader />
      <Header>
        <MainHeader />
      </Header>
      <Content>
        {children}
        <ScrollToTop />
        <WhatsappBtn />
      </Content>
      <Footer>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
