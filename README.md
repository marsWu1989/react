## 启动项目
```
npm i / yarn install
npm run start
// http://0.0.0.0:9527

npm run wds
// http://0.0.0.0:9527/webpack-dev-server/

ps: 更多请查阅 package.json -> scripts
```
## 其他
> 默认监控 9527 端口

## 目录结构

```
.
├── README.md               // 项目说明文件
├── assets                  // 打包后静态文件
│   ├── images
│   ├── scripts
│   └── styles
├── bin                     // 项目入口
├── build                   // 项目编译配置
├── client                  // 客户端/服务端同构模版（同构）
│   ├── actions             // Redux Action
│   ├── client.jsx          // 客户端入口文件
│   ├── components          // 状态组件
│   │   ├── weather         // 首页入口文件
│   │   ├── alert           // 预警
│   │   │   ├── index       // 预警入口文件
│   │   │   ├── AletTop     // 预警头部
│   │   │   ├── AletDesc    // 预警描述
│   │   │   ├── AletGuide   // 预警防御指南
│   │   │   ├── AletAd      // 预警广告
│   │   │   ├── AletBtn     // 预警按钮         
│   │   ├── aqi             // aqi
│   │   ├── condition       // 首页状态
│   │   │   ├── index       // 状态入口文件
│   │   │   ├── AletGrid    // 预警状态
│   │   │   ├── Search      // 搜索栏
│   │   │   ├── IndexGrid   // 湿度，风速状态
│   │   │   ├── Temperature // 温度状态
│   │   ├── nav             // 导航
│   │   ├── indexforliving  // 生活指数
│   │   ├── forecastdays    // 15天预报
│   │   ├── forecasthours   // 24小时预报
│   │   ├── todayandtomorrow// 今天，明天天气
│   │   ├── location        // 地址定位
│   │   ├── dailyrecommendation// 今日推荐
│   ├── constants           // Redux Action Type
│   ├── containers          // 静态组件
│   ├── images              // 图片组件
│   ├── reducers            // Redux Reducer
│   ├── routes              // 路由文件
│   └── scss                // 样式组件
├── index.html              // 热更新预览文件
├── libs                    // 自定义通用组件
├── logs                    // 项目日志（error，http)
├── mock                    // 测试脚本
├── package.json            // 项目配置
└── server                  // 服务端
    ├── ProtocolBuffers     // Proto配置文件
    ├── controllers         // 中间层
    ├── models              // 数据层
    ├── routes              // 服务端路由
    └── views               // 模版
```
