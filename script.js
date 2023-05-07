var index = 0;
function changeColor(){
    var color = ["rgb(228, 146, 146)","rgb(163, 163, 245)","rgb(240, 240, 167)","rgb(248, 127, 248)"];
    document.getElementsByTagName('body')[0].style.backgroundColor= color[index++];
    if(index>color.length-1){
        index=0;
    }
}
