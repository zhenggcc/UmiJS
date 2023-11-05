import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.welcome}>
      <h1>欢迎访问MCAKE蛋糕管理平台</h1>
      <img
        src="https://file2107.h5project.cn/JKA7zY00QuACIPeKAIlp0xFWxvKRz8eh/undraw_Birthday_cake_re_bsw5.png"
        alt=""
      />
      <h2>
        本项目为蛋糕配送用户端配套开发的管理平台，采用全新UmiJS3框架进行开发，实现了产品轮播管理、分类管理、产品发布、用户系统、角色管理、路由权限控制等功能。项目中采用第三方的地图、图表、富文本等模块，实现了项目中的数据可视化、配送区域绘制、商品详情录入等功能。为蛋糕配送用户端提供完善的后端数据支撑。
      </h2>
      <h3>
        技术点 1. UmiJS3项目搭建、Yarn包管理工具 2.
        AntDesign组件库、ProComponent高级组件 3.
        React-Router理论、约定式路由、配置式路由 4.
        MockJS提供前后端分离开发所需mock接口 5.
        umi-request基本异步请求、ahooks库拓展异步数据处理能力 6.
        采用LeanCloud提供ServerLess云服务接口 7. 接口测试工具使用ApiPost统一联调
        8. Dva实现跨组件数据的集中式管理 9. immer实现不可变数据控制 10.
        高德地图开放API，实现配送区域动态绘制 11. Echarts图表实现数据可视化 12.
        WangEditor完成富文本编辑器的集成与相关功能开发
      </h3>
    </div>
  );
}
