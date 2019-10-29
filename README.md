#知识点小结

#### 1，/* 低版本：display：table会影响上面table的展示 */
 解决方案：
 ```
    .fn-clear:before, .fn-clear:after, .clearfix:before, .clearfix:after {
      content: "";
      display: block;
    }
```

会影响安卓4.3手机排版错误，方法无法执行


#### 2，ie10 去掉文本框后面的x
 ```
.new-header-search .hdSch-txt::-ms-clear{display:none;}
 ```
 
 #### 3，ie的hack
  ```
.ie6_7_8{
    width:300px;
    padding:40px;
    background:#f0f3f9;
    color:blue; /*所有浏览器*/
    color:red\9; /*IE8以及以下版本浏览器*/
    *color:green; /*IE7及其以下版本浏览器*/
    _color:purple; /*IE6浏览器*/
}

  ```
  
   
####  4，placehoder设置单独样式
  ```
::-webkit-input-placeholder { font-size: 14px; }
::-moz-placeholder { font-size: 14px; } /* firefox 19+ */
:-ms-input-placeholder { font-size: 14px;} /* ie */
input:-moz-placeholder { font-size: 14px;}

  ```
   
 #### 5，把scope样式提至全局\
vue中scope的样式为局部样式，eg：
  ```
<style scope>
.a{color:red}
:global(.title) {
  color: green;
}
</style>
  ```
想让部分样式提至全局作用域。

CSS Modules 允许使用:global(.className)的语法，声明一个全局规则\
注意：需要处理加载器支持modules模块
  ```
{
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
},

  ```
   
 #### 6，不规则排列
  ```
 .colums-context{
    -moz-column-count:2; 	/* Firefox */
    -webkit-column-count:2; /* Safari 和 Chrome */
    column-count:2;
    -moz-column-gap:40px;		/* Firefox */
    -webkit-column-gap:40px;	/* Safari 和 Chrome */
    column-gap:40px;

    li{
      /*height: 100%;*/
      /*overflow: auto;*/
      /*阻止子元素换行--等同上面两句*/
      -webkit-column-break-inside:avoid;
    }
  }


/*scss写法*/
@mixin waterfall($count: 2, $gap:10px){
  -webkit-column-count: $count;
  -webkit-column-gap: $gap;
  -moz-column-count: $count;
  -moz-column-gap: $gap;
  column-count: $count;
  column-gap: $gap;
}
@mixin waterfall-item(){
  -webkit-column-break-inside: avoid; /*避免在元素内部断行并产生新列*/
  -moz-column-break-inside: avoid;
  column-break-inside: avoid;
  display: inline-block;
  word-wrap: break-word;
  float: left;
}


  ``` 
 #### 7，超过两行省略号
  ```
.off-over { /* 超过两行 省略号 */
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}


// scss写法
@mixin multiellipsis($lineClamp: 2) {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $lineClamp;
  -webkit-box-orient: vertical;
}

  ``` 
 #### 8，滤镜风吹的效果
  ```
.content-blur{
	/*filter: url(blur.svg#blur);*/ /* FireFox, Chrome, Opera */

	-webkit-filter: blur(10px); /* Chrome, Opera */
	-moz-filter: blur(10px);
	-ms-filter: blur(10px);
	filter: blur(10px);

	filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
}

  ``` 
 #### 9，设置滚动条样式
  ```
.email-list-box::-webkit-scrollbar{width:3px;}
.email-list-box::-webkit-scrollbar-track{background-color:#FFFFFF;}
.email-list-box::-webkit-scrollbar-thumb{background-color:#d5d5d5;}
.email-list-box::-webkit-scrollbar-thumb:hover {background-color:#d5d5d5}
.email-list-box::-webkit-scrollbar-thumb:active {background-color:#d5d5d5}





Body {
scrollbar-arrow-color: #f4ae21; /*三角箭头的颜色*/
scrollbar-face-color: #333; /*立体滚动条的颜色*/
scrollbar-3dlight-color: #666; /*立体滚动条亮边的颜色*/
scrollbar-highlight-color: #666; /*滚动条空白部分的颜色*/
scrollbar-shadow-color: #999; /*立体滚动条阴影的颜色*/
scrollbar-darkshadow-color: #666; /*立体滚动条强阴影的颜色*/
scrollbar-track-color: #666; /*立体滚动条背景颜色*/scrollbar-base-color:#f8f8f8; /*滚动条的基本颜色*/
Cursor:url(mouse.cur); /*自定义个性鼠标*/
}
/*以上2项适用与<body>、<div>、<textarea>、<iframe>*/



  ``` 



BODY {SCROLLBAR-FACE-COLOR: #f892cc;
SCROLLBAR-HIGHLIGHT-COLOR: #f256c6;
SCROLLBAR-SHADOW-COLOR: #fd76c2;
SCROLLBAR-3DLIGHT-COLOR: #fd76c2;
SCROLLBAR-ARROW-COLOR: #fd76c2;
SCROLLBAR-TRACK-COLOR: #fd76c2;
SCROLLBAR-DARKSHADOW-COLOR: #f629b9;
SCROLLBAR-BASE-COLOR: #e9cfe0}</STYLE>SCROLLBAR-FACE-COLOR: 滚动条凸出部分的颜色
SCROLLBAR-HIGHLIGHT-COLOR: 滚动条空白部分的颜色
SCROLLBAR-SHADOW-COLOR: 立体滚动条阴影的颜色
SCROLLBAR-3DLIGHT-COLOR: 滚动条亮边的颜色
SCROLLBAR-ARROW-COLOR: 上下按钮上三角箭头的颜色
SCROLLBAR-TRACK-COLOR: 滚动条的背景颜色
SCROLLBAR-DARKSHADOW-COLOR: 滚动条强阴影的颜色
SCROLLBAR-BASE-COLOR: 滚动条的基本颜色自己定义滚动条的颜色。

 #### 10，文字做渐变
  ```
.h1 {
			font-size: 4.8rem;
			background: -moz-linear-gradient(top, rgba(177, 92, 253, 1) 0%, rgba(137, 65, 251, 1) 100%);
			background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(177, 92, 253, 1)), color-stop(100%, rgba(137, 65, 251, 1)));
			background: -webkit-linear-gradient(top, rgba(177, 92, 253, 1) 0%, rgba(137, 65, 251, 1) 100%);
			background: -o-linear-gradient(top, rgba(177, 92, 253, 1) 0%, rgba(137, 65, 251, 1) 100%);
			background: -ms-linear-gradient(top, rgba(177, 92, 253, 1) 0%, rgba(137, 65, 251, 1) 100%);
			background: linear-gradient(to bottom, rgba(177, 92, 253, 1) 0%, rgba(137, 65, 251, 1) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b15cfd', endColorstr='#8941fb', GradientType=0);
			-webkit-background-clip: text; /*只有webkit内核支持text的剪切模式*/
			-webkit-text-fill-color: transparent;
			color: transparent;
			line-height: 55px;
		}

  ```
   
#### 11，右排版页面中绝对定位元素在谷歌下闪烁
 
一：bug重现\
1，页面右排版的情况下 对html 设置了样式\
html, .goods-tlt span,
.itemTlt span,em,div,dl,dt,dd,ul,li,p{direction: rtl !important; unicode-bidi: embed;}

2，页面元素又决定定位\
使用了    position: absolute;

3，在谷歌浏览器下 会闪烁

具体事例：http://ar.jollychic.com/special-appDown20151215-index.html\
重现bug时把页面的\
html, .goods-tlt span, .itemTlt span {\
		direction: ltr !important;\
		unicode-bidi: embed;\
	}\
去掉


二，解决方案\
设置左排版

   
#### ，圆角的outline效果
  ```
outline 没有圆角。用box-shadow来模拟，代码如下：

border-radius: 10px;box-shadow: 0 0 0 7.5px #00c3ff;

/*outline:#00c3ff groove 7.5px;
-moz-outline-radius: 7.5px;//火狐私有属性
-webkit-outline-radius: 7.5px;//无效*/

  ```
   
 
  