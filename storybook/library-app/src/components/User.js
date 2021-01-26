import React from "react";
import "./style.css";

import { Table } from "antd";

const User = (props) => {
  const columns = [
    { title: "Number", dataIndex: "number", key: "number" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Information",
      dataIndex: "information",
      key: "information",
      render: () => <a href="#2">View</a>,
    },
  ];

  const dataSource = props.users.map((user, index) => {
    return {
      key: index,
      name: user.name,
      number: index + 1,
    };
  });

  return (
    <div className="User">
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default User;
