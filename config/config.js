import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{  //配置开启antd组件库的使用
    dark: false,
  },
  layout: { //开始项目试图骨架配置
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  mfsu: {},
  routes,
  fastRefresh: {},
});

