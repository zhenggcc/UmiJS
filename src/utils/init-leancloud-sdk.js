// 初始化leancloud的文件上传SDK
import Cloud from 'leancloud-storage';
Cloud.init({
  appId: 'g714zadwGPIkznWAUEuOern4-gzGzoHsz', //务必写自己的id,真实项目中不要往线上仓库提交
  appKey: 'WH8zrwITydd9pkxcPFBU5vOj', //务必写自己的key,真实项目中不要往线上仓库提交
  serverURL: 'https://api2107.h5project.cn', //自己配置的域名
});
