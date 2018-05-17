##### 1.认识大大前端

本人对于前端的了解就是

1.1.网页主要由文字、图片、输入框、视频、音频、超链接等组成

1.2.web标准

1.3.w3c组织就是我们俗称的万维网联盟

主要组成是以下面几部分组成

html 结构标准 相当于人的身体

css 表现标准 相当于给人化妆 变的更漂亮

js 行为标准 相当于人在唱歌，页面更灵活

##### 2.对于浏览器内核

2.1.浏览器内核：也就是浏览器所采用的渲染引擎，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。

2.2.主要分为以下几大内核ie（trident）、谷歌（blink）、火狐（gecko）、苹果（webkit）

##### 3.浏览器和服务器的交互

3.1.网页通过http协议向web服务器发送报文

3.2.web服务器向网页响应报文

##### 4.Url地址

4.1.浏览器向web服务器进行请求（通过http 协议）

4.2.http协议：超文本传输协议

4.3.url协议：就是我们平时的写的网站就地址

比如下面一个网站里面分别代表的意思：

http：//host.domain:post/path/food

http：代表的是定义的因特网服务类型。host：代表的主机（一般默认www）。domain:代表的是网站的域名（比如baidu.com）。post：定义的端口号（默认是80）。path：网页定义的路径。food（代表的是文件名）

##### 5.html结构标准

5.1主要由几部分组成< ! doctype html>    声明文档类型

<html>           根标签

  <head>           头标签

<title></title>       标题标签

</head>

<body>             主体标签

</body>

</html>

5.2html标签分类

单标签   <! Doctype html>

双标签  <html></html>  <head></head>  <title></title>

5.3关系分类

  包含（嵌套关系） <head><title></title></head>     父子

  并列关系      <head></head><body></body>     兄弟姐妹

##### 6.开发工具

Vscode  方便，本人用的比较多。

Sublime   轻量级    有很多好用的插件。

Webstorm  重量级    太过智能。

##### 7.下面我就介绍一下常用的标签

我们常用的标签大概在30几个左右下面我在进行对一些我们平时比较常用的标签进行介绍

7.1

◆注释标签    ctrl+/

◆换行标签   <br />

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image004.png)

◆水平线标签  <hr />

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image006.png)

7. 2

<p>文本内容<p>

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image002.png)

特点：上下自动生成空白行。<br>换行不会生成空白行。

**标题标签**

**h1-h6**  **取值到h6**

**h1** **在一个页面里只能出现一次。**

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image002.png)

**文本标签**

**<font>****文本内容</font>**

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image004.png)

**文本格式化标签**

 **文本加粗标签  <strong></strong>  <b></b>**  **工作里尽量使用strong**

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image006.png)

 

**文本倾斜标签**

<em></em>     <i></i>     工作里尽量使用em

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image008.png)

 

**删除线标签**

**<del></del>     <s></s>**   **工作里尽量使用del**

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image010.png)

 

◆注意：之所以工作里使用<strong></strong> <em></em> <del></del>

<ins></ins>  是因为更有语义化。

7.3图片标签

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image014.png)

Src    图片的来源   必写属性

Alt    替换文本    图片不显示的时候显示的文字

Title   提示文本    鼠标放到图片上显示的文字

Width  图片宽度

Height  图片高度

◆图片没有定义宽高的时候，图片按照百分之百比例显示，如果只更改图片的宽度或者高度，图片等比例缩放。

##### 8.路径

8.1

相对于文件自身出发，就是相对路径。

◆文件和图片（html文档）在同一个目录(文件夹) ，直接写文件名。

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image016.png)

 

◆图片（html文档）在文件在下一级目录里。文件夹名称+/+图片（html）名称

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image018.png)

◆图片（html）在文件的上一级目录里，..+/+图片（html）名称

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image020.png)

◆图片在文件的上一级的其他目录里，../文件夹名称/图片名称

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image022.png)

★总结：找到下一级目录（文件夹）的图片（文件）用 /

​        跳出当前目录使用../

##### 8.超链接

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image026.png)

href   去往的路径（跳转的页面）必写属性

title    提示文本   鼠标放到链接上显示的文字

target=”_self”    默认值    在自身页面打开（关闭自身页面，打开链接页面）  

Target=”_blank”   打开新页面（自身页面不关闭，打开一个新的链接页面）

##### 9 .锚链接

9.1.先定义一个锚点

​    ![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image028.png)

9.2.超链接到锚点

   ![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image030.png)

##### #10.列表

10.1无序列表

<ul>

<li></li>    列表项

<li></li>

<li></li>

</ul>

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image040.png)

type=”square”      小方块

Type=”disc”       实心小圆圈

Type=”circle”      空心小圆圈

10.2有序列表

<ol>

<li></li>    列表项

<li></li>

<li></li>

 

</ol>

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image042.png)

◆type=”1,a,A,i,I” type的值可以为1,a,A,i,I

start=”3”  决定了开始的位置。

10.3自定义列表

<dl>

 <dt></dt>    小标题

 <dd></dd>   解释标题

 <dd></dd>   解释标题

</dl>

![img](file:////Users/caihuixin/Library/Group%20Containers/UBF8T346G9.Office/msoclip1/01/clip_image044.png)

## 







