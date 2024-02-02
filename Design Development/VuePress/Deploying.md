---
---
# 部署
使用`VuePress`开发的个人站预计将发布在`Gitee`。

根据官方指南，要部署VuePress需要如下条件：
* 文档放置在项目的 `docs` 目录中；
* 使用的是默认的构建输出位置；
* `VuePress` 以本地依赖的形式被安装到你的项目中，并且配置了如下的 `npm scripts`:
```js{10}
{
  "name": "docs-vuepress",
  "version": "1.0.0",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.9.10"
  },
  "scripts": {
    "docs:dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs", 
    "docs:build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs" // [!code focus:1]
  }
}
```
## 初始化git
输入命令`git init`，在根目录初始化。创建`.gitignore`文件：
```sh
node_modules
# VuePress 默认临时文件目录
.vuepress/.temp
# VuePress 默认缓存目录
.vuepress/.cache
```

## 项目编译
输入命令对项目进行编译
::: code-group
```sh [npm]
npm run docs:build
```

```sh [yarn]
yarn docs:build
```
:::