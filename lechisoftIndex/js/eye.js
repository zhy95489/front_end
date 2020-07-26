
document.onmousemove=moveHandle;
var tempx=new Array;
var tempy=new Array;
function moveHandle(evt){
    console.log(evt);
      if(!evt)
        evt=window.event;

    
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.scrollHeight
    console.log("moveHandle"+evt.clientX+":"+evt.clientY+"clientWidth"+clientWidth+":clientHeight"+clientHeight)
    makeMouseMove(clientWidth - evt.clientX,clientHeight - evt.clientY);

}
function makeMouseMove(xPos,yPos){
    console.log("makeMouseMove"+xPos+":"+yPos);
   eyeMove(xPos,yPos);
}
function eyeMove(xPos,yPos){
    var leftBall=document.getElementById("leftBall").style;
    var rightBall=document.getElementById("rightBall").style;
    leftBall.right=eyeFoll(xPos,150);
    leftBall.bottom=eyeFoll(yPos,20);
    rightBall.right=eyeFoll(xPos,65);
    rightBall.bottom=eyeFoll(yPos,20);
    function eyeFoll(currPos,eyePos){
        var returrr = Math.min(Math.max(currPos,eyePos-3),eyePos+60)+"px";
        console.log(returrr);
        return returrr
    }
}
