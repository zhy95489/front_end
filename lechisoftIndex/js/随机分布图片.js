
for (var i = 1; i < 20; i++) {
    //创建div里面放图片
    var divObj = document.createElement("div");
    //创建图片节点
    var imgObj = document.createElement("img");
    //创建文字上层
    var figcaption = document.createElement("figcaption");
    //创建说话的文体
    var imgText = document.createElement("p");
    var textnode = document.createTextNode(i+"这是祝福的话,")
    imgText.appendChild(textnode);
    
    //添加src属性
    imgObj.setAttribute("src", "./images/" + i + ".jpg");
    //添加width属性 getRandom()随机数函数
    var width = rand(100, 300);
    imgObj.setAttribute("width", width);

    var xed = rand(-80, 80);
    var yed = rand(-80, 80);
    //添加层叠样式表属性(style属性  行内样式)
    var x = rand(0, window.innerWidth - 150);
    var y = rand(0, window.innerHeight - 150);
    //设置坐标 x y 为未知数
    var styles = "position:fixed;left:" + x + "px;top:" + y + "px;-webkit-transform: rotate(" + xed + "deg);-moz-transform: rotate(" + yed + "deg);"
    imgObj.setAttribute("style", styles);
    figcaption.setAttribute("style","position:fixed;left:" + x + "px;top:" + y + "px;-webkit-transform: rotate(" + xed + "deg);-moz-transform: rotate(" + yed + "deg);");
    figcaption.setAttribute("width", width);
    
    //添加onclick事件属性
    //this 代表当前对象,this是一个对象,只能在函数内使用
    imgObj.setAttribute("onclick", "removeImg(this)");
    imgObj.setAttribute("onmouseover", 'imgText.setAttribute("style","opacity:1;")');




    divObj.appendChild(imgObj);
    divObj.appendChild(figcaption);
    figcaption.appendChild(imgText);
    //将图片节点,挂载到<body>的父节点下
    document.body.appendChild(divObj);
}

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function onmouseover(over){
    over.setAttribute("style","opacity:1;")
}

