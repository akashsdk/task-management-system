import React, { useState } from "react";
import MainHeader from "../component/Header";
import Dashboard from "../component/Dashboard";
import Assignment from "../component/Assignment";
import TaskFiltering from "../component/TaskFiltering";
import Comments from "../component/Comments";

import {
  PieChartOutlined,
  FileProtectOutlined,
  CommentOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
const { Header, Content, Sider, Footer } = Layout;
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
      <FileProtectOutlined
        onClick={() => {
          setPage(2);
        }}
      />
    ),
    getItem(
      "Comments",
      "3",
      <CommentOutlined
        onClick={() => {
          setPage(3);
        }}
      />
    ),
    getItem(
      "Task Filtering",
      "4",
      <SortAscendingOutlined
        onClick={() => {
          setPage(4);
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
                marginTop: "-64px",
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
                  <div style={{ marginTop: "-13px" }}>
                    {page === 1 ? (
                      <p>Dashboard </p>
                    ) : page === 2 ? (
                      <p>Task Creation and Assignment </p>
                    ) : page === 3 ? (
                      <p>Task Details and Comments</p>
                    ) : page === 4 ? (
                      <p>Task Filtering and Sorting</p>
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
                    <Dashboard />
                  </div>
                ) : page === 2 ? (
                  <div>
                    <Assignment />
                  </div>
                ) : page === 3 ? (
                  <div>
                    <Comments />
                  </div>
                ) : page === 4 ? (
                  <div>
                    <TaskFiltering />
                  </div>
                ) : (
                  <p>Page Error</p>
                )}
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              <Button type="link" href="https://twitter.com/tasnimSakash">
                Task Management System ©2023 Created by Akash
              </Button>
            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
