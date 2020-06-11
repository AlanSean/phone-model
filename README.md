# phone-model

苹果手机型号，以及状态栏和tababr高度 

主要运用场景是webview

### 前置

[先看下这里哦！](https://webkit.org/blog/7929/designing-websites-for-iphone-x/?hmsr=funteas.com&utm_medium=funteas.com&utm_source=funteas.com)

meta viewport 添加`viewport-fit=cover`
例子：
<meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

### getSafeAreaInset 获取刘海屏的安全区域

该方法是获取刘海屏的状态栏和tabbar

竖屏和横屏自行转换下



top(状态栏) = safe-area-inset-top
left = safe-area-inset-left
right = safe-area-inset-right
bottom (tabbar)= safe-area-inset-bottom


### 默认导出

非苹果手机 返回都为0

获取当前苹果机型的状态栏和tabbar
