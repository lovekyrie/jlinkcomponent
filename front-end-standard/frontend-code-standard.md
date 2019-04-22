[通过分析GitHub工程师的代码习惯总结出前端编码规范](http://alloyteam.github.io/CodeGuide/)
### 1 框架/vue
#### 1.1 组件名
组件名为多个单词，并且用连接线（-）连接，避免与 HTML 标签冲突，并且结构更加清晰。
示例：

```
// 反例
export default {
    name: 'item'
}
```

```
// 正例
export default {
    name: 'page-article-item'
 }
 
```

#### 1.2 组件文件
组件的名字应该始终是以连接线（-）连接的单词，一方面可与组件名一致，使项目更加清晰，另一方面这样的写法对编辑器引入也很友好。
示例：
// 反例

├── index.html
├── main.js
└── components
    ├── pageheader
    ├── pagearticle
    └── pageheader
    
// 正例

├── index.html
├── main.js
└── components
    ├── page-header
    ├── page-article
    └── page-header
    
对于例如按钮、下拉框或表格这样的基础组件应该始终以一个特定的前缀开头，区别与其他业务组件。

示例：

// 反例
├── index.html
├── main.js
└── components
    ├── page-header
    ├── page-article
    ├── page-header
    ├── mazey-button
    ├── mazey-select
    └── mazey-table

// 正例
├── index.html
├── main.js
└── components
|   ├── page-header
|   ├── page-article
|   └── page-header
└── base
    ├── mazey-button
    ├── mazey-select
    └── mazey-table
#### 1.3 Prop
定义 Prop 的时候应该始终以驼峰格式（camelCase）命名，在父组件赋值的时候使用连接线（-）。这里遵循每个语言的特性，因为在 HTML 标记中对大小写是不敏感的，使用连接线更加友好；而在 JavaScript 中更自然的是驼峰命名。

示例：
```
// 反例

// vue
props: {
    article-status: Boolean
}

// HTML
<article-item :articleStatus="true"></article-item>
```
```
// 正例

// Vue
props: {
    articleStatus: Boolean
}

// HTML
<article-item :article-status="true"></article-item>
```
Prop 的定义应该尽量详细的指定其类型、默认值和验证。

示例：
```
// 反例
props: ['attrM', 'attrA', 'attrZ']
```
```
// 正例
props: {
    attrM: Number,
    attrA: {
        type: String,
        required: true
    },
    attrZ: {
        type: Object,
        // 数组/对象的默认值应该由一个工厂函数返回
        default: function () {
            return {
                msg: '成就你我'
            }
        }
    },
    attrE: {
        type: String,
        validator: function (v) {
            return !(['success', 'fail'].indexOf(v) === -1) 
        }
    }
}
```
#### 1.4 v-for
在执行 v-for 遍历的时候，总是应该带上 key 值使更新 DOM 时渲染效率更高。
**为啥会更高，这个要基于vue的dom渲染原理去理解**
示例：
```
// 反例
<ul>
    <li v-for="item in list">
        {{ item.title }}
    </li>
</ul>
```
```
// 正例
<ul>
    <li v-for="item in list" :key="item.id">
        {{ item.title }}
    </li>
</ul>
```
v-for 应该避免与 v-if 在同一个元素（例如：<li>）上使用，因为 v-for 的优先级比 v-if 更高，为了避免无效计算和渲染，应该尽量将 v-if 放到容器的父元素之上。

示例：

```
// 反例
<ul>
    <li v-for="item in list" :key="item.id" v-if="showList">
        {{ item.title }}
    </li>
</ul>
```
```
// 正例
<ul v-if="showList">
    <li v-for="item in list" :key="item.id">
        {{ item.title }}
    </li>
</ul>
```

#### 1.5 v-if/v-else-if/v-else
若同一组 v-if 逻辑控制中的元素逻辑相同，Vue 为了更高效的元素切换，会复用相同的部分，例如：value。为了避免复用带来的不合理效果，应该在同种元素上加上 key 做标识。

示例：
```
// 反例
<div v-if="hasData">
    <span>{{ mazeyData }}</span>
</div>
<div v-else>
    <span>无数据</span>
</div>
```
```
<div v-if="hasData" key="mazey-data">
    <span>{{ mazeyData }}</span>
</div>
<div v-else key="mazey-data">
    <span>无数据</span>
</div>
```
#### 1.6 指令缩写
为了统一规范始终使用指令缩写，使用v-bind，v-on并没有什么不好，这里仅为了统一规范。

示例：
```
<input :value="mazeyUser" @click="verifyUser">
```
#### 1.7 样式
为了避免样式冲突，整个项目要么全都使用 scoped 特性，要么使用 BEM 约定。

示例：
```
// 反例
<template>
    <button class="btnbtn-sure">确认</button>
</template>
<style>
.btn{
    border: 1px solid #F1F1F1;
}
.btn-sure{
    background-color: blue;
}
</style>
```
```
// 正例
<!-- 使用 scoped 特性 -->
<template>
    <button class="btnbtn-sure">确认</button>
</template>
<style scoped>
    .btn{
        border: 1px solid #F1F1F1;
    }
    .btn-sure{
        background-color: blue;
    }
</style>
```
```
<!-- 使用 BEM（Block Element Modifier） 特性 -->
<template>
    <button class="menu-btn menu-btn-sure">确认</button>
</template>
<style>
    .menu-btn{
        border: 1px solid #F1F1F1;
    }
    .menu-btn-sure{
        background-color: blue;
    }
</style>
```
**注意**

不建议使用类似于 font-size-20，color-666，margin-top-20这样的类，此时如果想把全局的color-666颜色改成 #ccc，不管是直接把 .color-666{color: #666;} 改成 .color-666{color: 
#ccc;}，还是 全局搜索修改 class 名都很麻烦。本质上我认为 color-666 和直接写 
style="color: #666;" 并没有区别。
#### 1.8 单文件组件的顶级元素顺序
为了统一和便于阅读，应该按 <template>、<script>、<style>的顺序放置。

示例：
```
// 反例
<style>
/* CSS */
</style>
<script>
/* JavaScript */
</script>
<template>
<!-- HTML -->
</template>
```
```
// 正例
<template>
<!-- HTML -->
</template>
<script>
/* JavaScript */
</script>
<style>
/* CSS */
</style>
```
### 2 JavaScript
#### 2.1 var/let/const
建议不再使用var,而使用let/const,优先使用const。任何一个变量的使用都要提前声明，除了function定义的函数可以随便放在任何位置。

#### 2.2 引号
建议不再使用双引号，静态字符串用单引号，动态字符串使用反引号衔接

示例：
```
// 反例

const foo = "后除"
const bar = foo + "，前端工程师"
```
```
// 正例
const foo = '后除'
const bar = `${foo},前端工程师`
```

#### 2.3 函数
匿名函数统一使用箭头函数，多个参数/返回值时优先使用对象的结构赋值。

示例：
```
// 反例
functiongetPersonInfo (name, sex) {
    // ...
    return [name, gender]
}
```
```
// 正例
functiongetPersonInfo ({name, sex}) {
    // ...
    return {name, gender}
}
```
  **函数名统一使用驼峰命名，以大写字母开头申明的都是构造函数，使用小写字母开头的都是普通函数，也不该使用 new 操作符去操作普通函数。**

#### 2.4 对象
建议使用扩展运算符拷贝对象而不是 Object.assign(target, ...sources)。

示例：
```
// 错误

const foo = {a: 0, b: 1}
const bar = Object.assign(foo, {c: 2})
因为此时foo跟bar的引用地址一样，如果bar的属性值修改了，那么foo也会跟着变
```
```
// 反例

const foo = {a: 0, b: 1}
const bar = Object.assign({}, foo)
```
```
// 正例

const foo = {a: 0, b: 1}
const bar = JSON.parse(JSON.stringify(foo))
```
```
// 极好

const foo = {a: 0, b: 1}
const bar = {...foo, c: 2}
```
对象尽量静态化，添加新属性使用Object.assign(target,...source)。
示例：
```
// 反例

const foo = {a: 3}
foo.b = 4
```
```
// 正例

const foo = {a: 3}
Object.assign(foo, {b: 4})
```
若有遍历对象的需求，优先使用 Map 结构。

示例：
```
// 反例
constmyMap = {
    foo: 0,
    bar: 1
}
for (let key in myMap) {
    // ...
}
```
```
// 正例
constmyMap = new Map([])
for (let [key, value] of myMap.entries()) {
    // ...
}
```

#### 2.5 模块
统一使用 import / export 的方式管理项目的模块。

示例：
```
// lib.js
export default {}

// app.js
import app from './lib'
```
import 统一放在文件顶部
**如果模块只有一个输出值，使用export default,否则不用**
#### 2.6 循环
for (vari = 0; i<arr.length; i++) {} 这样的方式遍历不是很好，尤其当 arr 是 Dom 对象的时候，这样就会一直在访问 Dom 层，访问 Dom 层的代价是很大的。for (vari = 0, j=arr.length; i< j; 
i++) {} 这样的方式去用循环是比较好的，只会访问一次 Dom 层（不适用于 Dom 节点会动态更新的场景）。

#### 2.7 eval
避免使用 eval，如要进行字符串转化为对象，最好使用浏览器的内置方法来解析 JSON 数据，以确保代码的安全性和数据的合法性。如果浏览器不支持 JSON.parse()，你可以使用 
JSON.org 所提供的库。如果不得不使用 eval()，可以尝试用 new Function() 来代替，在 new 
Function() 中运行的代码会在一个局部函数作用域内执行，因此源码中定义的变量不会自动变成全局变量。

#### 2.8 单行长度
不要超过80，但如果编辑器开启了word wrap 可以不考虑单行长度
#### 2.9 分号
以下几种情况后需加分号
 * 变量声明
 * 表达式
 * return
 * throw
 * break
 * continue
 * do-while
```
/* var declaration */
var x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);
```
#### 2.10 空格
以下几种情况不需要空格
* 对象的属性名后
* 前缀一元运算符后
* 后缀一元运算符前
* 函数调用括号前
* 无论是函数声明还是函数表达式，'('前不要空格
* 数组的'['后和']'前
* 对象的'{'后和'}'前
* 运算符'('后和')'前

以下几种情况需要空格
* 二元运算符前后
* 三元运算符'?:'前后
* 代码块'{'前
* 下列关键字前： **else**, **while**, **catch**, **finally**
* 下列关键字后：**if**, **else**, **for**, **while**, **do**, **switch**, **case**, **try**, **catch**, **finally**, **with**, **return**, **typeof**
* 单行注释 '//'后(若单行注释和代码同行，则'//'前也需要)，多行注释'*'后
* 对象的属性值前
* for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
* 无论是函数声明还是函数表达式，'{'前一定要有空格
* 函数的参数之间
```
// not good
var a = {
    b :1
};

// good
var a = {
    b: 1
};

// not good
++ x;
y ++;
z = x?1:2;

// good
++x;
y++;
z = x ? 1 : 2;

// not good
var a = [ 1, 2 ];

// good
var a = [1, 2];

// not good
var a = ( 1+2 )*3;

// good
var a = (1 + 2) * 3;

// no space before '(', one space before '{', one space between function parametersvar doSomething = function(a, b, c) {
    // do something
};

// no space before '('
doSomething(item);

// not good
for(i=0;i<6;i++){
    x++;
}

// good
for (i = 0; i < 6; i++) {
    x++;
}
```
#### 2.11 空行
以下几种情况需要空行：
 * 变量声明后 （当变量声明在代码块的最后一行，则无须空行）
 * 注释前 （当注释在代码块的第一行时，则无须空行）
 * 代码块后 （在函数调用、数组、对象中则无须空行）
 * 文件最后保留一个空行 
```

// need blank line after variable declaration
var x = 1;

// not need blank line when variable declaration is last expression in the current block
if (x >= 1) {
    var y = x + 1;
}

var a = 2;

// need blank line before line comment
a++;

function b() {
    // not need blank line when comment is first line of block
    return a;
}

// need blank line after blocks
for (var i = 0; i < 2; i++) {
    if (true) {
        return false;
    }

    continue;
}

var obj = {
    foo: function() {
        return 1;
    },

    bar: function() {
        return 2;
    }
};

// not need blank line when in argument list, array, object
func(
    2,
    function() {
        a++;
    },
    3
);

var foo = [
    2,
    function() {
        a++;
    },
    3
];


var foo = {
    a: 2,
    b: function() {
        a++;
    },
    c: 3
};
    
```
#### 2.12 换行
换行的地方，行末必须有','或者运算符

### 3 HTML
#### 3.1 标签
在引用外部 CSS 或 JavaScript 时不写 type 属性。HTML5 默认 type 为 text/css 和 
text/javascript 属性，所以没必要指定。

示例：
```
// 反例
<link rel="stylesheet"href="//www.test.com/css/test.css" type="text/css">
<scriptsrc="//www.test.com/js/test.js"type="text/javascript"></script>
```
```
// 正例
<link rel="stylesheet"href="//www.test.com/css/test.css">
<scriptsrc="//www.test.com/js/test.js"></script>
```
#### 3.2 文档类型
应该总是使用HTML5标准

示例：
```
<!DOCTYPE html>
```

#### 3.3 table
应该避免使用 table 做页面布局，因为同样的布局使用 table 要多几倍的渲染时间；当然使用 
table 做表格是完全正确的。

#### 3.4 注释
应该给一个模块文件写一个区块注释：

示例：
```
/**
* @modulemazey/api
* @authorMazey<mazey@mazey.net>
* @description test.
* */
```
### 4 CSS/SCSS
#### 4.1 引号(协议)
省略协议头部声明，例如：http:、https:，且不加引号
* 最外层统一使用双引号
* URL的内容要用引号
* 属性选择器中的属性值需要用引号
示例：
```
// 反例

background: url(//www.test.com/img/test.png);
```
```
// 正例

background: url("www.test.com/img/test.png");
```
```
.element:after {
    content: "";
    background-image: url("logo.png");
}

li[data-type="single"] {
    ...
}
```
#### 4.2 选择器
选择器尽可能简单，能使用 .test 别使用 div.test。


示例：
```
// 反例
p.test{
    color: #000;
}
```
```
// 正例
.test{
    color: #000;
}
```
#### 4.3 分号
每个声明最后都要加分号，即使是最后一个。
示例：
```
// 反例

h3{
    font-size: 12px;
    color: #666
}
```
```
// 正例

h3{
    font-size: 12px;
    color: #666;
}
```
#### 4.4 空格
以下几种方式不需要空格：
 * 属性名后
 * 多个规则的分隔符','前
 * !important '!'后
 * 属性值中'('后和')'前
 * 行末不要有多余的空格

 以下几种方式需要空格：
 * 属性值前
 * 选择器'>', '+', '~'前后
 * '{'前
 * !important '!'前
 * @else 前后
 * 属性值中的','后
 * 注释/**/后前

 ```
/* not good */
.element {
    color :red! important;
    background-color: rgba(0,0,0,.5);
}

/* good */
.element {
    color: red !important;
    background-color: rgba(0, 0, 0, .5);
}

/* not good */
.element ,
.dialog{
    ...
}

/* good */
.element,
.dialog {

}

/* not good */
.element>.dialog{
    ...
}

/* good */
.element > .dialog{
    ...
}

/* not good */
.element{
    ...
}

/* good */
.element {
    ...
}

/* not good */
@if{
    ...
}@else{
    ...
}

/* good */
@if {
    ...
} @else {
    ...
 }
 ```

 #### 4.5 空行
 以下几种情况需要空行：
  * 文件最后保留一个空行
  * '}'后最好跟一个空行，包括scss中嵌套的规则
  * 属性之间需要适当的空行，具体见[属性声明顺序](http://alloyteam.github.io/CodeGuide/#css-declaration-order)

  ```
/* not good */
.element {
    ...
}
.dialog {
    color: red;
    &:after {
        ...
    }
}

/* good */
.element {
    ...
}

.dialog {
    color: red;

    &:after {
        ...
    }
}
  ```

#### 4.6 换行
以下几种情况不需要换行
* '{'前

以下几种情况需要换行
* '{'后和'}'前
* 每个属性独占一行
* 多个规则的分隔符','后
```
/* not good */
.element
{color: red; background-color: black;}

/* good */
.element {
    color: red;
    background-color: black;
}

/* not good */
.element, .dialog {
    ...
}

/* good */
.element,
.dialog {
    ...
}
```
#### 4.7命名
class 和 ID的命名应该语义化，通过看名字就知道是干嘛的，多个单词用连接线-链接。
alloyteam 推荐：类名使用小写字母，以中划线分割。id采用驼峰式命名
示例：
```
// 反例

.testheader{
    font-size: 20px;
}
```
```
// 正例

.test-header{
    font-size: 20px;
}
```

#### 4.8属性简写
CSS 属性尽量使用缩写，提高代码的效率和方便理解。
这个要慎重使用，因为有一些简写的效果不佳。
because: 属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中
包含的所有值，所以建议尽量分开声明会更加清晰。
当然有一些属性例外，我们经常使用简写：
* margin & padding

常见的属性简写包括：
* font
* background
* transition
* animation
示例：
```
// 反例

border-width: 1px;
border-style: solid;
border-color: #ccc;
```
```
// 正例

border: 1px solid #ccc;
```
```
/* not good */
.element {
    transition: opacity 1s linear 2s;
}

/* good */
.element {
    transition-delay: 2s;
    transition-timing-function: linear;
    transition-duration: 1s;
    transition-property: opacity;
}
```
#### 4.9 注释
* 注释统一用'/* */'（scss中也不要用'//'），具体参照下边的写法
* 缩进与下一行代码保持一致
* 可位于一个代码行的末尾，与代码间隔一个空格。
```
/* Modal header */
.modal-header {
    ...
}

/* * Modal header */
.modal-header {
    ...
}

.modal-header {
    /* 50px */
    width: 50px;

    color: red; /* color red */
}
```

#### 4.10 颜色
* 颜色16进制用小写字母
* 颜色16进制尽量用简写
```
/* not good */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```
#### 4.10 媒体查询
尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的文件，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。
```

.element {
    ...
 }

.element-avatar{
    ...
}

@media (min-width: 480px) {
    .element {
        ...
    }

    .element-avatar {
        ...
    }
}
```
#### 4.11 SCSS相关
提交的代码中不要有@debug
声明顺序：
 * @extend
 * 不包含@content的@include
 * 包含@content的@include
 * 自身属性
 * 嵌套规则
 @import 引入的文件不需要开头的'_'和结尾的'.scss'；
嵌套最多不能超过5层
@extend中使用placeholder选择器
去掉不必要的父级引用符号'&'
```
/* not good */
@import "_dialog.scss";

/* good */
@import "dialog";

/* not good */
.fatal {
    @extend .error;
}

/* good */
.fatal {
    @extend %error;
}

/* not good */
.element {
    & > .dialog {
        ...
    }
}

/* good */
.element {
    > .dialog {
        ...
    }
}
```
#### 4.12 杂项
* 不允许有空的规则出现
* 元素选择器用小写字母
* 去掉小数点前面的0
* 去掉数字中不必要的小数点和末尾的0
* 属性值'0'后不要加单位
* 同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照下边的写法
* 无前缀的标准属性应该写在有前缀的属性后面
* 不要再同个规则里面出现重复的属性，如果重复的属性是连续的则没有关系
* 不要在一个文件里出现两个相同的规则
* 用 **border:0;** 代替 **border:none;**
* 选择器不要超过4层(在SCSS中如果超过4层应该考虑用嵌套的方式来写)
* 发布的代码中不要有@import
* 尽量少用 '*'选择器
```

/* not good */
.element {
}

/* not good */
LI {
    ...
}

/* good */
li {
    ...
}

/* not good */
.element {
    color: rgba(0, 0, 0, 0.5);
}

/* good */
.element {
    color: rgba(0, 0, 0, .5);
}

/* not good */
.element {
    width: 50.0px;
}

/* good */
.element {
    width: 50px;
}

/* not good */
.element {
    width: 0px;
}

/* good */
.element {
    width: 0;
}

/* not good */
.element {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;

    background: linear-gradient(to bottom, #fff 0, #eee 100%);
    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background: -moz-linear-gradient(top, #fff 0, #eee 100%);
}

/* good */
.element {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
               border-radius: 3px;

    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
    background:         linear-gradient(to bottom, #fff 0, #eee 100%);
}

/* not good */
.element {
    color: rgb(0, 0, 0);
    width: 50px;
    color: rgba(0, 0, 0, .5);
}

/* good */
.element {
    color: rgb(0, 0, 0);
    color: rgba(0, 0, 0, .5);
}
```



