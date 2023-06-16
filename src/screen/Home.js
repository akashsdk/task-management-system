import React, { useState } from "react";
import MainHeader from "../component/Header";
import Dashboard from "../component/Dashboard";

import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function Home() {
  const [page, setPage] = useState(1);
  const items = [
    getItem(
      "Dashboard ",
      "1",
      <PieChartOutlined
        onClick={() => {
          setPage(1);
        }}
      />
    ),
    getItem(
      "Assignment",
      "2",
      <DesktopOutlined
        onClick={() => {
          setPage(2);
        }}
      />
    ),
    getItem(
      "Comments",
      "3",
      <DesktopOutlined
        onClick={() => {
          setPage(3);
        }}
      />
    ),
    getItem(
      "Task Filtering",
      "4",
      <DesktopOutlined
        onClick={() => {
          setPage(4);
        }}
      />
    ),
    getItem(
      "Responsive Design",
      "5",
      <DesktopOutlined
        onClick={() => {
          setPage(5);
        }}
      />
    ),
  ];
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <MainHeader />
      <div>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                marginTop:'-64px'
              }}
            />
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>
                <div style={{marginTop:'-13px'}}>

                {page === 1 ? (
                    <p >Dashboard </p>
                ) : page === 2 ? (
                    <p>Task Creation and Assignment </p>
                ) : page === 3 ? (
                    <p>Task Details and Comments</p>
                ) :  page === 4 ? (
                    <p>Task Filtering and Sorting</p>
                ) :  page === 5 ? (
                    <p>Responsive Design</p>
                ) : (
                  <p>Page Error</p>
                )}
                </div>
                </Breadcrumb.Item>

              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                {page === 1 ? (
                  <div>
                    <p>Page 1 </p>
                  </div>
                ) : page === 2 ? (
                  <div>
                    <p>Page 2 </p>
                  </div>
                ) : page === 3 ? (
                  <div>
                    <p>Page 3</p>
                  </div>
                ) :  page === 4 ? (
                  <div>
                    <p>Page 4</p>
                  </div>
                ) : page === 5 ? (
                  <div>
                    <p>Page 5</p>
                  </div>
                ) : (
                  <p>Page Error</p>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
