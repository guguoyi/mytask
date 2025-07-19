import React from "react";

import { Button, Select, Table, Tag, Space } from "antd";
import "./TaskManagementSystem.css";

class TaskManagementSystem extends React.Component {
  dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  render() {
    return (
      <div className="task-management-system">
        <div className="header">
          <span style={{ fontFamily: "sans-serif" }}>
            Task Management System
          </span>
          <Select
            defaultValue="全部"
            className="search-bar"
            options={[
              { value: "全部", label: <span>全部</span> },
              { value: "已完成", label: <span>已完成</span> },
              { value: "未完成", label: <span>未完成</span> },
            ]}
          />
          <Button className="primary-btn">新增任务</Button>
        </div>

        <div className="task-list">
          <Table dataSource={this.dataSource} columns={this.columns} />;
        </div>
      </div>
    );
  }
}

export default TaskManagementSystem;
