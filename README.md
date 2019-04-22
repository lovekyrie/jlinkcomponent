## 使用前注意事项

1、直接使用 `cnpm`可能会导致依赖不正确。强烈建议给 `npm` 设置 taobao 的 registry。

`npm install --registry=https://registry.npm.taobao.org`

2、如果你遇到 `$t` 报错问题，先删除 `node_modules`文件夹后再重装依赖。

3、新建页面，需重新`npm run dev`才可以正常访问新建的页面。

4、`npm run dev`将会自动在浏览器打开页面，如未正常打开，请访问完整的路径`http:// localhost:8091/views/home/list.html`


## 前言
这个项目是利用github上一个开源的[多页面脚手架工具](https://github.com/lovekyrie/vue-cli-multi-page),然后整理出之前聚联
公司用过的独立组件，就是除了实现表单功能的全局引入的组件外(如iview,element-ui)，需要部分引入的内容。现例出如下功能：
* hero文件夹的下面的直接在JavaScript中使用的组件方式
* wangEditor 富文本控件
* vue-video-player/videojs-playlist/videojs-playlist-ui
* vue-signature-pad  