import React from "react";

import {
  Button,
  DatePicker,
  Select,
  Table,
  Space,
  Modal,
  Popconfirm,
  Input,
  Form,
} from "antd";
import {
  getTaskByFilter,
  add,
  remove,
  finish,
  getNextId,
} from "./utils/TaskDataProcess";
import "./TaskManagementSystem.css";
import { flushSync } from "react-dom";

class TaskManagementSystem extends React.Component {
  // 需要将更新属性定义在 state 中
  state = {
    dataSource: getTaskByFilter("全部"),
    isModalOpen: false,
    selectedStatus: "全部",
  };

  formIns = {};

  columns = [
    {
      title: "任务编号",
      dataIndex: "taskId",
      key: "taskId",
      align: "center",
    },
    {
      title: "任务名称",
      ellipsis: true,
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "任务描述",
      ellipsis: true,
      dataIndex: "taskDescription",
      key: "taskDescription",
    },
    {
      title: "任务状态",
      dataIndex: "taskStatus",
      key: "taskStatus",
      align: "center",
    },
    {
      title: "完成时间",
      key: "completionTime",
      dataIndex: "completionTime",
      align: "center",
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Popconfirm
              title="完成任务"
              description="你确定将该任务标记为完成吗?"
              onConfirm={() => this.confirmComplete(record)}
              okText="确定"
              cancelText="取消"
            >
              <Button className="primary-btn">完成</Button>
            </Popconfirm>
            <Popconfirm
              title="删除任务"
              description="你确定将该任务从列表中删除吗?"
              onConfirm={() => this.confirmDelete(record)}
              okText="确定"
              cancelText="取消"
            >
              <Button className="primary-btn">删除</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  addTask = () => {
    this.setState({ isModalOpen: true });
  };

  handleOk = () => {
    let fieldsValue = this.formIns.current.getFieldsValue();
    let taskNew = {
      ...fieldsValue,
      taskId: getNextId(),
    };

    taskNew.completionTime = taskNew.completionTime
      ? taskNew.completionTime.format("YYYY-MM-DD HH:mm:ss")
      : "";
    console.log(taskNew);

    add(taskNew);

    this.setState({
      ...this.state,
      dataSource: getTaskByFilter(this.state.selectedStatus),
    });

    this.formIns.current.resetFields();
    flushSync();

    this.setState({
      ...this.state,
      isModalOpen: false,
    });
  };

  handleCancel = () => {
    this.setState({ isModalOpen: false });
  };

  searchSelect = (value) => {
    // 由于 setState 异步执行，所以需要等状态更新后再更新列表
    this.setState({ selectedStatus: value }, function () {
      this.setState({
        ...this.state,
        dataSource: getTaskByFilter(this.state.selectedStatus),
      });
    });
    console.log(`selected ${value}`);
  };

  confirmComplete = (record) => {
    console.log("Task completed:", record);
    finish(record.taskId);

    this.setState({
      ...this.state,
      dataSource: getTaskByFilter(this.state.selectedStatus),
    });
  };

  confirmDelete = (record) => {
    console.log("Task deleted:", record);
    remove(record.taskId);
    this.setState({
      ...this.state,
      dataSource: getTaskByFilter(this.state.selectedStatus),
    });
  };

  pickTime = (time) => {
    // dayjs 对象转字符串
    const timeStr = time ? time.format("YYYY-MM-DD HH:mm:ss") : "";
    console.log("check time", timeStr);
  };

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
            onSelect={(value) => this.searchSelect(value)}
            options={[
              { value: "全部", label: <span>全部</span> },
              { value: "已完成", label: <span>已完成</span> },
              { value: "未完成", label: <span>未完成</span> },
            ]}
          />
          <Button className="primary-btn" onClick={this.addTask}>
            新增任务
          </Button>
        </div>

        <div className="modal-container">
          <Modal
            title="新增任务"
            closable={{ "aria-label": "Custom Close Button" }}
            open={this.state.isModalOpen}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            keyboard={false}
            maskClosable={false}
            destroyOnHidden={true}
            getContainer={false}
          >
            <Form
              layout="vertical"
              name="创建任务"
              style={{ maxWidth: 600 }}
              initialValues={{
                taskName: "",
                taskStatus: "",
                completionTime: "",
              }}
              autoComplete="off"
              ref={this.formIns}
            >
              <Form.Item
                label="任务名称"
                name="taskName"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "请输入任务名称" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="任务描述"
                name="taskDescription"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "请输入任务描述" }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item
                label="任务状态"
                name="taskStatus"
                validateTrigger="onChange"
                rules={[{ required: true, message: "请选择任务状态" }]}
              >
                <Select
                  options={[
                    { value: "已完成", label: "已完成" },
                    { value: "未完成", label: "未完成" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="完成时间"
                name="completionTime"
                rules={[{ required: true, message: "请选择任务结束时间" }]}
              >
                <DatePicker showTime onOk={this.pickTime} />
              </Form.Item>
            </Form>
          </Modal>
        </div>

        <div className="task-list">
          <Table
            loading={false}
            dataSource={this.state.dataSource}
            columns={this.columns}
          />
          ;
        </div>
      </div>
    );
  }
}

export default TaskManagementSystem;
