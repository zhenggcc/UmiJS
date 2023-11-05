import React from 'react';
import { roleGet, userReg } from '@/api/user';
import { Form, Input, Button, Spin, Select } from 'antd';
import { useRequest } from 'umi';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const UserManager = () => {
  const [form] = Form.useForm();
  let { data: roleList, loading: roleLoading } = useRequest(roleGet);
  let { data, loading, run } = useRequest(
    (value) => {
      //表单提交请求
      return userReg(value);
    },
    { manual: true },
  ); //开启手动执行
  const onFinish = (values) => {
    run(values); //手动执行useRequest
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="username"
          label="账号"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Spin spinning={roleLoading}>
          <Form.Item
            name="role"
            label="角色"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="请选择账号角色">
              {roleList?.map((item) => {
                return (
                  <Option value={item.rolecode} key={item.objectId}>
                    {item.rolename}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Spin>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default UserManager;
