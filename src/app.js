//在这个文件中做项目的运行时配置
import { message } from 'antd';
import './utils/init-leancloud-sdk'; //初始化leancloud的sdk
import { history } from 'umi';
import HeaderDropMenu from './components/HeaderDropMenu';
// 异步请求相关运行时配置

export const request = {
  // timeout:1000,
  requestInterceptors: [
    //请求拦截
    (url, options) => {
      console.log('请求拦截器', url, options);
      options.url = 'https://api2107.h5project.cn/1.1' + url;
      options.headers = {
        'X-LC-Id': 'g714zadwGPIkznWAUEuOern4-gzGzoHsz', //务必改为自己的Id
        'X-LC-Key': 'WH8zrwITydd9pkxcPFBU5vOj', //务必改为自己的Key
        'Content-Type': 'application/json',
      };
      return options; //此处return的内容就是自定义请求配置
    },
  ],
  responseInterceptors: [
    //响应拦截器
    async (response, options) => {
      let res = await response.json();
      // console.log(res);
      if (res.objectId) {
        let method = options.method.toLowerCase();
        if (method == 'post' && res.sessionToken) {
          let msg =
            options.url.indexOf('/login') == -1 ? '账号分配成功' : '登录成功';
          message.success(msg);
        } else {
          let msg = method == 'post' ? '新增成功' : '更新成功';
          message.success(msg);
        }
      }
      console.log('响应拦截器', res, options);
      let { results } = res;
      let data = results ? results : res;
      return { data }; //此处return的内容可以协助处理useRquest的格式需求
    },
  ],
};

// 初始化某些全局数据的运行时配置
export async function getInitialState() {
  let userState = {
    isLogin: false,
    userInfo: null,
  };
  let info =
    localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
  if (info) {
    userState = {
      isLogin: true,
      userInfo: JSON.parse(info),
    };
  }
  console.log('getInitialState运行时配置', userState);
  return userState;
}

//layout的运行时配置，自定义控制layout的渲染逻辑
export const layout = ({ initialState }) => {
  return {
    onPageChange: () => {
      // 此处可以根据用户的登录状态，引导用户进行指定的路由访问
      let { location } = history;
      if (!initialState.isLogin && location.pathname !== '/login') {
        console.log('onPageChange', initialState, location);
        history.push('/login');
      }
    },
    rightContentRender: () => <HeaderDropMenu />,
  };
};
