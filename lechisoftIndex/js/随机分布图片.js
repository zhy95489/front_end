$(function () { 
	$("[data-toggle='popover']").popover();
});


for (var i = 1; i < 20; i++) {
    var StringTitles = ["富强民主文明和谐","爱国敬业诚信友善","会当凌绝顶，一览众山小","这一辈子，你哟没有为别人拼过命","这一路你可以哭，但不能怂"]
    //创建div里面放图片
    var divObj = document.createElement("div");
    //创建图片节点
    var imgObj = document.createElement("img");
    //创建文字上层
    var figcaption = document.createElement("figcaption");
    //创建说话的文体
    var imgText = document.createElement("p");

    
    //添加src属性
    imgObj.setAttribute("src", "./images/" + i + ".jpg");
  

    var xed = rand(-80, 80);
    var yed = rand(-80, 80);
    //添加层叠样式表属性(style属性  行内样式)
    var x = rand(0, window.innerWidth - 150);
    var y = rand(0, window.innerHeight - 150);


    var apple = p.circleArray[i]
    x = apple.x;
    y = apple.y;
    width = apple.r + 50;
    //添加width属性 getRandom()随机数函数
    // var width = rand(100, 300);
   
    imgObj.setAttribute("width", width);
    //设置坐标 x y 为未知数
    var styles = "position:fixed;left:" + x + "px;top:" + y + "px;-webkit-transform: rotate(" + xed + "deg);-moz-transform: rotate(" + yed + "deg);"
    imgObj.setAttribute("style", styles);
    figcaption.setAttribute("style","position:fixed;left:" + x + "px;top:" + y + "px;-webkit-transform: rotate(" + xed + "deg);-moz-transform: rotate(" + yed + "deg);");
    figcaption.setAttribute("width", width);

    //添加title文字
    var indexs = rand(0, 4);
    var StringTitle = StringTitles[indexs];
    imgObj.setAttribute('title','这是来自这位作者的寄语。。。')
    imgObj.setAttribute('data-toggle',"popover");
    if(window.innerWidth - x < 300){
        imgObj.setAttribute('data-placement','left');
    }
    imgObj.setAttribute('data-content',StringTitle);




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

 