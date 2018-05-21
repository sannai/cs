# stepv

> vue2-stepv

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## API接口管理
http://192.168.0.10:3000

## Git
``` bash
added 添加
update 修改
fixed 修复
```

## 架构

``` bash
vue 渐进式 JavaScript 框架
vuex 状态管理
vue-router 路由
vue-devtools 调试
axios HTTP请求组件
```

## 结构

``` bash
└── src
    ├── api                                     #API接口
    │   └── user.js                                #用户接口
	├── components                              #组件
	│   └── common                                 #公共组件
	├── config                                  #基本配置
	│   └── index.js                              #配置文件
    ├── images                                 	#图片
	├── pages                                   #页面
	│   └── user                                   #用户页面
	│   	├── detail.vue                        #用户详情页
	│       └── index.vue                         #用户主页
    ├── plugins                                 #第三方资源（主要放置jQuery插件，尽可能使用CDN）
    ├── router                                  #路由
    │   └── index.js                               #配置
    ├── store                                   #vuex状态管理
    │	├── modules                         	   #store模块
    │	│	└── user.js							      #用户模块
    │   ├── action.js                              #配置actions 不是必须的
    │   ├── getters.js                             #配置getters
    │   ├── index.js                               #创建store
    │   ├── mutation-types.js                      #定义常量muations名
    │   └── mutations.js                           #配置mutations
    ├── styles                                 	#样式
    └── utils                                	#公共JS
        └── http.js                                #封装axios（使用参数方式调用）
```

## 命名规范
``` bash
引入大写 import Router from './router'
引入获取指定变量 import {apiUrl} from 'config/index'
Vue文件 user-test.vue
变量驼峰 userName = 'kenung'
尽可能不用 var 使用let const
```

## 文件引用
``` bash
'src': resolve('src'),
'api': resolve('src/api'),
'components': resolve('src/components'),
'config': resolve('src/config'),
'images': resolve('src/images'),
'plugins': resolve('src/plugins'),
'styles': resolve('src/styles'),
'utils': resolve('src/utils'),
//使用
import {routerMode} from 'config/index'
```

关于vuex
``` bash
https://www.jianshu.com/p/1d8f535e96ba
https://segmentfault.com/a/1190000009404727
https://segmentfault.com/q/1010000009940950/a-1020000009942755
State
Getter
Mutation
Action
Module
```
