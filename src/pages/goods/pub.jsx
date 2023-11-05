import React from 'react';
import { cateGet, goodsAdd, goodsExchange } from '@/api/cake';
import { Form, Input, Button, Spin, Select } from 'antd';
import { useRequest } from 'umi';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import RichEditor from '../../components/RichEditor';
import axios from 'axios';
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

const GoodsPub = () => {
  const [form] = Form.useForm();
  let { data, loading } = useRequest(cateGet);
  const onFinish = (values) => {
    console.log(values);
    // 拿到目标平台的数据包
    let url =
      'http://localhost:3000/cake/api/0434b49d1ac28f9d?cityId=110&page=1&bid=5';
    // let url = 'http://localhost:3000/users'
    axios({
      url,
      method: 'get',
      headers: {
        'access-token': '83571eadee673f9572f4d1fb3d51325b', //如果token失效，可以重新从目标网站接口获取新的token
        version: 'v1.0',
      },
    }).then((res) => {
      console.log(res);
      goodsExchange(res.data.data.list, values);
    });
    // 将拿到的数据包格式进行处理

    // 把处理后的数据包转存至LeanCloud
    // goodsAdd(values).then(res=>{
    //   console.log(res);
    // })
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="cateId"
          label="分类选择"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="请选择商品分类">
            {data?.map((item) => {
              return (
                <Option value={item.objectId} key={item.objectId}>
                  {item.catename}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="detail"
          label="商品详情"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {/* wangEditor5.0 */}
          {/* <div>
            <Toolbar/>
            <Editor/>
          </div> */}

          {/* wangEditor4.0 */}
          <RichEditor />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
          <Button type="dashed" htmlType="submit">
            批量转存
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default GoodsPub;
