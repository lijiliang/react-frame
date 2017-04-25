# React React开发SPA脚手架

React开发SPA脚手架。 Webapck / ES6 + Babel / Redux / React Router


> ### 更新
> 2017/4/24 &nbsp; 引入 `cross-env` 解决跨平台问题

## 安装
```shell
$ git clone https://github.com/lijiliang/react-frame.git
$ cd react-frame
$ npm install
```

## 开发模式
```shell
npm start
```
无意外，默认浏览器就会自动打开 `localhost:9090`，您立即可以看到效果

若浏览器没有自动弹出，则请自行手动访问  

## 构建模式
```shell
npm run build
```

## 目录结构
```
.
├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ assets/         # 放置需要经由 Webpack 处理的静态文件
│   ├─ components/     # 组件（COMPONENT）
│   ├─ redux/          # Redux 一箩筐
│   │   ├─ actions/      # （ACTION）
│   │   ├─ reducers/     # （REDUCER）
│   │   ├─ store/        # （STORE）
│   ├── routes/        # 路由（ROUTE）
│   ├── services/      # 服务（SERVICE，用于统一管理 XHR 请求，这是从 Vue Demo 中直接复制过来的）
│   ├── utils/         # 工具库（UTIL）
│   │   ├─ HoC/          # 高阶组件（HOC，全称 Higher Order Component）
│   │   ├─ mixins/       # 混合（MIXIN）
│   ├── views/         # 路由视图基页（VIEW）
│   │   ├─ layout/       # 全局布局
│   ├── app.js         # 启动文件
│   ├── index.html     # 静态基页
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     #  npm包配置文件
```
## 快速开始
在开始前，希望您已通读如下资料

* [React 文档][react-doc]
* [Redux 文档][redux-doc]
* [React Router 文档][react-router-doc]

## 技术栈
> 详情可参阅 `package.json`

* React 15.5.4
* Redux
* React Router
* Ajax 请求库（Superagent / jQuery-Ajax / ...）
* Webpack
* ES6 + Babel
* jQuery + BootStrap (UI)

***
## 部署
在 `react-frame` 的命令窗口下，敲下 `npm run build`，将会在项目根目录下生成 `dist/`  
> 您可以使用命令行静态资源服务器 [serve](https://github.com/tj/serve) ( `npm i serve -g` )，敲下 `serve dist/ -p [端口]` 来快速查看 build 后的项目  
> 还可以自己配置一个`nginx`服务器进行快速便捷地实现静态资源服务器
>
> 关于生产环境下的部署与优化，后续加上。
***

## 参考
* [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
* [探讨 React 项目目录结构](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)

[react-doc]: http://reactjs.cn/react/docs/getting-started-zh-CN.html
[redux-doc]: http://camsong.github.io/redux-in-chinese/index.html
[react-router-doc]: http://react-guide.github.io/react-router-cn/
[hot-loader]: https://github.com/gaearon/react-hot-loader
