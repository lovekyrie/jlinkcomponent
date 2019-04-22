### 海天驱动公众号

* 项目地址
>  svn://121.40.57.104/haiTianDrive/src/wx
* * *
* 项目中用到的UI组件（npm packages），参考项目文件里面的package.json
 1. element-ui 在init.js中可以看出是通过全局引入的 [element-ui官网](http://element-cn.eleme.io/#/zh-CN)
```
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI)
```

  2. muse-ui 通过单独页面的引用 在client/repair.js,home/waitOrderDetail.js查看 [muse-ui官网](https://muse-ui.org/#/zh-CN)
 ```
import 'muse-ui/lib/styles/base.less';
import { TextField } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
Vue.use(TextField)
 ```
 3. vue-signature-pad 这是一款利用canvas实现的在线签名插件 [使用教程](https://www.npmjs.com/package/vue-signature-pad)
```
import VueSignature from 'vue-signature-pad';
Vue.use(VueSignature)
```
 4. vue-ydui 在init.js中引入部分组件 [ydui官网](http://vue.ydui.org/docs/#/)
 ```
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline';
import {Radio, RadioGroup} from 'vue-ydui/dist/lib.rem/radio';
import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
import {TextArea} from 'vue-ydui/dist/lib.rem/textarea';

Vue.component(DateTime.name, DateTime);
Vue.component(TimeLine.name, TimeLine);
Vue.component(TimeLineItem.name, TimeLineItem);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
Vue.component(TextArea.name, TextArea);
 ```
***
 5. vconsole 是一个移动端调试小工具 [github地址](https://github.com/Tencent/vConsole) 每个项目中都可以使用
 ```
import 'assets/js/vconsole.js';
 ```
* 项目结构中包含了一个hero文件夹，是通过本地引入组件的方式，实现的公共UI组件库供不同的项目使用，由于没有package.json，后期如果要整合进npm包里面，还需要研究（需要一定时间），使用方式需要在js直接调用this.$hero.msg.show({text:'需要显示的内容'})，具体使用参照项目文件中的heroDemo/msg.html
> 使用方式
```
import {msg,confirm,loading} from 'hero'

Vue.use(msg);
Vue.use(confirm);
Vue.use(loading);
```

### 宁波社区大学老年教育中心
* 项目地址 
> svn://121.40.57.104/nbtvu/agingEducation

***
* 项目中用到的UI组件
 1. bootstrap [官网](https://v3.bootcss.com/)
  ```
import 'bootstrap/dist/css/bootstrap.min.css'
  ```

 2. element-ui 同上
 3. vue-video-player 这个UI组件是用于h5在线播放视频用的，是基于videojs，vue编写的vue可以直接使用的插件 [vue-video-player github地址](https://github.com/surmon-china/vue-video-player) [videojs官网](https://videojs.com/)
 ```
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('videojs-flash/dist/videojs-flash')
 ```
4. wangeditor 一款国人研发的富文本编辑器，可用于vue脚手架构建的项目使用。[官方网站](http://www.wangeditor.com/)
使用方法 
> 参考项目文件 components/Editor.vue
5. 项目中也包括了一些图标的使用，比如用到了阿里图标库 [网站](https://www.iconfont.cn/)
使用方式
> 现在assets/js 中创建一个wconfig.js的文件
```
function configIcon(){
var script = document.createElement("script");
script.type = "text/javascript";
script.src = 'http://at.alicdn.com/t/font_649882_jy3nq870uueopqfr.js';
document.head.appendChild(script);
}
configIcon();
```
然后直接在init.js中通过import引用
```
import 'assets/js/wconfig.js'
```

### 宁波市乐龄老年电视大学
* 项目地址 svn://121.40.57.104/nbtvu/老年教育-电视大学/web_pc1.0
* 项目使用组件介绍
 1. element-ui 同上
 2. 阿里巴巴图标库 同上(直接写在wconfig.js)里面
 3. vue-video-player/videojs-playlist/videojs-playlist-ui （这里一共引用了3个插件）
 ```
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-playlist/dist/videojs-playlist'
import 'videojs-playlist-ui/dist/videojs-playlist-ui'
import 'videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css'
Vue.use(VideoPlayer)
 ```
4. v-distpicker [地址选择器](https://distpicker.pigjian.com/)
```
import VDistpicker from "v-distpicker";
```
5. 其他功能 (利用gulp实现前端自动化部署)
前期是需要全局安装gulp,在文件夹顶层目录新建一个gulpfile.js的文件，
文件全部内容参考项目，现摘录主要配置如下：
```
host: '47.98.169.217', //host ip
username: 'root',  //host username
password: '',      //host password
dest: '/root/project/tvUniversity' //host storage project pwd
```
配置完毕后,输入一下命令就能发布，当然因为电大是通过跳板机才能连接到对应的Linux服务器，所以这边并不适用，而且Windows服务器上也不能发布，因为操作系统内核不一样
```
gulp dev
```

### 二次供水之前期验收（erchigongshui)
* 项目地址 svn://121.40.57.104/huayuan/H5
* 引用组件
 1. iview [官网](https://www.iviewui.com/)
 ```
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)
 ```
 2. vue-signature-pad 同上
3. hero文件夹下的组件 同上

### 二次供水其他h5模块 （ercigongshui2)
* 项目地址 svn://121.40.57.104/huayuan/two/PadH5/ercigongshui2
* 使用UI组件
 1. iview 这个跟ercigongshui一样，对于表单的样式统一使用iview自带的，不做修改。使用方法同上，但时在后期开发过程中碰到了bug，比如：下拉列表控件select只能选择部分数据，所以后面修改成了element-ui的下拉组件。
 2. element-ui 按需引入，因为实际上需要用到该组件的文件不多，map/adminMap.html、map/appMap.html、inspection/search.html等页面，这里举一个例子：
 ```
import {
Table,TableColumn,Dialog,Row,Col,Button,Tooltip,DatePicker
} from 'element-ui'

Vue.use(init);
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(DatePicker)
 ```
 另外还需要在babelrc的文件中增加对应的按需引入的配置
 ```
"plugins": ["transform-runtime", [
    "component", {
        "librarayName": "element-ui",
        "styleLibraryName": "theme-chalk"
    }
]]
 ```
 3. echarts [百度可视化图表官网](https://echarts.baidu.com/) 采用按需引入的方式，因为全部引用的话有点大，本来这个项目就冗余了很多了组件，无特殊情况除了iview外，其他UI组件全部采用按需引入的方式
 ```
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line"); //对应的不同图表引入方式都在网站上可以找到
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
 ```
 4. vconsole 调试 同上
 5. vue-baidu-map 这个插件用于在百度地图的基础上扩展了图层方面的能力 [官方网站](https://dafrok.github.io/vue-baidu-map/#/zh/index) 这边由于在两个页面中用到了该组件，所以使用方式是在每个使用的页面全局引入，省得使用局部引用的时候，每次都要输一遍key
 ```
import BaiduMap from "vue-baidu-map";
import { BmlLushu, BmlMarkerClusterer, BmlCurveLine } from "vue-baidu-map";
Vue.use(BaiduMap, {
    ak: "hKosSsrAcdMkt2lcjYkwLrDA83qfoBvk"
});
 ```
然后再vue的实例的components注册一下注册就可以了
6. vue-signature-pad 签名组件 同上
7. vux 这个插件也是因为一些意外在使用着，因为客户那边觉得iview的日期控件（PC端的效果）不符合他们对操作简便的需求，需要换成在底部弹出那种方式进行年月日的选择。
```
import { Datetime } from "vux";
```
同样也是在components注册一下就可以使用
