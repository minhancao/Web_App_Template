import React from "react";
import { Layout } from "antd";
import CustomNavbar from "./CustomNavbar";

const { Content, Footer } = Layout;

const CustomLayout = props => {
  return (
    <Layout className="layout">
      <CustomNavbar></CustomNavbar>
      <Content style={{ padding: "0 0px" }}>
        
        <div style={{ background: "#fff", padding: 0, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Web App Template ©2019 Created by minhancao
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
