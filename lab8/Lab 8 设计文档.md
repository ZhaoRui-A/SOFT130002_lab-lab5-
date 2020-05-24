# Lab 8 设计文档

## 全局变量

```
let photos=1,canGo=true;
let buttons=document.getElementsByTagName('span');
let container = document.getElementsByClassName("container")[0];
let wrap = document.getElementsByClassName('wrap')[0];
```

photos为当前照片，canGo用于判断是否进行鼠标轮切；

同时获得了buttons container wrap等值；

## 前三题

大同小异，考察点击事件、图片显示、页码状态转换等基本技巧

如next按钮

```
document.getElementsByClassName("arrow arrow_left")[0].onclick=goLeft;
document.getElementsByClassName("arrow arrow_right")[0].onclick=goRight;
```

直接获取修改即可

## 第四题

本题使用了Jq，属于Jq入门技巧（伪类）

```
$(function(){
//方法定义
    $('table td').click(function(){
        if(!$(this).is('.input')){
            $(this).addClass('input').html('<input type="text" value="'+ $(this).text() +'" />').find('input').focus().blur(function(){
                $(this).parent().removeClass('input').html($(this).val() || 0);
            });
        }
    }).hover(function(){
        //定义伪类
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
        //删除伪类
    });

});
$('td').each(function(index, e) {
	//改变表格宽度
    e.style.width = "100px";
});
```

## 其他

无