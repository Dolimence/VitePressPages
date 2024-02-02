---
---

# VuePress Started
从头搭建一个简单的 VuePress 文档，需要 `node` 环境和包管理工具，`npm` 或 `yarn`。

## 初始化
创建并进入一个新目录，使用包管理工具进行初始化：
::: code-group
```sh [npm]
npm init
```

```sh [yarn]
yarn init
```
:::

## 添加依赖
将 VuePress 安装为本地依赖
::: code-group
```sh [npm]
npm install -D vuepress
```

```sh [yarn]
yarn add -D vuepress
```
:::

## 创建文档
在根目录中创建文件夹`docs`，在`docs`文件夹里面创建`README.md`
```md
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## 修改package.json
在`package.json`中添加命令：
```md{9-10}
{
  "name": "docs-vuepress",
  "version": "1.0.0",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.9.10"
  },
  "scripts": {
    "docs:dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs", // [!code focus:2]
    "docs:build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs"
  }
}
```
## 启动服务器
输入命令 VuePress 会在 `http://localhost:8080` (opens new window)启动一个热重载的开发服务器。
::: code-group
```sh [npm]
npm run docs:dev
```

```sh [yarn]
yarn docs:dev
```
:::