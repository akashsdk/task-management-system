import React from "react";
import { LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        height: "65px",
        width: "95%",
        marginTop: "5px",
        marginLeft: "2.5%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2  style={{
        flex:'5',
      }}>Task Management System </h2>
      <Button htmlType="button" style={{
        flex:'.1'
      }}>
        <Link to="/LogIn">
          {" "}
          <LoginOutlined />
        </Link>
      </Button>
      
    </div>
  );
}
