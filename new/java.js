var vals = {
    x:500,
    y:300,
    z:0,
    rotatex:0,
    rotatey:0,
    rotatez:0,
    p:0,

    test1_left:100,
    test2_left:200,

}

function setbars() {

    document.getElementById("front").style.left=(vals.x-50)+"px";
    document.getElementById("front").style.top=(vals.y-50)+"px";
    document.getElementById("front").style.transformOrigin="50% 50% "+(vals.z-50)+"px";
    document.getElementById("front").style.transform="rotate(0deg) rotateX(0deg) rotateY(0deg)";

    document.getElementById("back").style.left=(vals.x-50)+"px";
    document.getElementById("back").style.top=(vals.y-50)+"px";
    document.getElementById("back").style.transformOrigin="50% 50% "+(vals.z-50)+"px";
    document.getElementById("back").style.transform="rotate(0deg) rotateX(0deg) rotateY(180deg)";

    document.getElementById("right").style.left=(vals.x-50)+"px";
    document.getElementById("right").style.top=(vals.y-50)+"px";
    document.getElementById("right").style.transformOrigin="50% 50% "+(vals.z-50)+"px";
    document.getElementById("right").style.transform="rotate(0deg) rotateX(0deg) rotateY(90deg)";

    document.getElementById("left").style.left=(vals.x-50)+"px";
    document.getElementById("left").style.top=(vals.y-50)+"px";
    document.getElementById("left").style.transformOrigin="50% 50% "+(vals.z-50)+"px";
    document.getElementById("left").style.transform="rotate(0deg) rotateX(0deg) rotateY(-90deg)";

    document.getElementById("up").style.left=(vals.x-50)+"px";
    document.getElementById("up").style.top=(vals.y-50)+"px";
    document.getElementById("up").style.transformOrigin="50% 50% "+(vals.z-50)+"px";
    document.getElementById("up").style.transform="rotate(0deg) rotateX(90deg) rotateY(0deg)";

    document.getElementById("down").style.left=(vals.x-50)+"px";
    document.getElementById("down").style.top=(vals.y-50)+"px";
    document.getElementById("down").style.transformOrigin="50% 50% "+(vals.z-50)+"px";
    document.getElementById("down").style.transform="rotate(45deg) rotateX(45deg) rotateY(0deg)";

}

//
function salam() {
    document.getElementById("front").style.display="block";
    document.getElementById("back").style.display="none";

    document.getElementById("front").style.transform="rotate(0deg) rotateY(90deg) rotateX(0deg)";
    document.getElementById("back").style.transform="rotate(0deg) rotateY(270deg) rotateX(0deg)";
    document.getElementById("right").style.transform="rotate(0deg) rotateY(180deg) rotateX(0deg)";
    document.getElementById("left").style.transform="rotate(0deg) rotateY(0deg) rotateX(0deg)";


    setTimeout(salam2,3000);


}
function salam2() {
    document.getElementById("front").style.display="none";
    document.getElementById("back").style.display="block";
    document.getElementById("front").style.transform="rotate(0deg) rotateY(180deg) rotateX(0deg)";
    document.getElementById("back").style.transform="rotate(0deg) rotateY(0deg) rotateX(0deg)";
    document.getElementById("right").style.transform="rotate(0deg) rotateY(270deg) rotateX(0deg)";
    document.getElementById("left").style.transform="rotate(0deg) rotateY(90deg) rotateX(0deg)";

    setTimeout(salam3,3000);

}
// function salam3() {
//
//     document.getElementById("test1").style.transform="rotate(0deg) rotateY(90deg) rotateX(0deg) skewY(0deg) skewX(0deg)";
//     document.getElementById("test2").style.transform="rotate(0deg) rotateY(0deg) rotateX(0deg) skewY(0deg) skewX(0deg)";
//     document.getElementById("test3").style.transform="rotate(0deg) rotateY(0deg) rotateX(90deg) skewY(0deg) skewX(0deg)";
//
//     setTimeout(salam4,3000);
//
// }
// function salam4() {
//     document.getElementById("test1").style.transform="rotate(0deg) rotateY(44.5deg) rotateX(0deg) skewY(20deg) skewX(0deg)";
//     document.getElementById("test2").style.transform="rotate(0deg) rotateY(44.5deg) rotateX(0deg) skewY(-20.5deg) skewX(0deg)";
//     document.getElementById("test3").style.transform="rotate(-27deg) rotateY(37.5deg) rotateX(50deg) skewY(0deg) skewX(0deg)";
//
//     setTimeout(salam,3000);
// }
//
//
//
//
//
//
//
//
//
function mahdi() {
    // document.getElementById("test"+document.getElementById("noe").value).style.transform= "rotate("+document.getElementById("mma1").value+
    //     "deg)  rotateY("+document.getElementById("mma2").value +
    //     "deg) rotateX("+document.getElementById("mma3").value+
    //     "deg)  skewY("+document.getElementById("mma4").value +
    //     "deg) skewX("+document.getElementById("mma5").value+
        // "deg)";

    document.getElementById("down").style.transform="rotate("+document.getElementById("mma1").value+
        "deg) rotateX("+document.getElementById("mma3").value+
        "deg) rotateY("+document.getElementById("mma2").value+
        "deg)";


    document.getElementById("p1").innerHTML="z  "+document.getElementById("mma1").value;
    document.getElementById("p2").innerHTML="y  "+document.getElementById("mma2").value;
    document.getElementById("p3").innerHTML="x  "+document.getElementById("mma3").value;
//     document.getElementById("p4").innerHTML="skewY  "+document.getElementById("mma4").value;
//     document.getElementById("p5").innerHTML="skewX  "+document.getElementById("mma5").value;
}
//
//
//
//
//
//
//





// function maahdi() {
//     // alert("");
//     // if (vals.p===0){
//     //     document.getElementById("test").style.transform="rotateX(80deg)";
//     // }
//     // else if (vals.p===1){
//     //     document.getElementById("test").style="top: 200px;left: 100px;background-color: white;transform-origin: center;";
//     //     document.getElementById("test").style.transform+="rotate(50deg)";
//     // }
//     // vals.p=1-vals.p;
//     vals.rotatey=15;
//     setbars();
//
// }
// function setbars() {
//
//     var right_right=vals.right+50;
//     var right_left=vals.right-50;
//     var right_down=vals.right;
//     var right_up=vals.right;
//     var right_front=vals.right;
//     var right_back=vals.right;
//
//     var top_right=vals.top;
//     var top_left=vals.top;
//     var top_down=vals.top-50;
//     var top_up=vals.top+50;
//     var top_front=vals.top;
//     var top_back=vals.top;
//
//     var zIndex_right;
//     var zIndex_left;
//     var zIndex_down;
//     var zIndex_up;
//     var zIndex_front;
//     var zIndex_back;
//
//     // var rotatex_right=vals.rotatex;
//     var rotatey_right=vals.rotatey+90;
//     var rotatez_right=vals.rotatez+90;
//
//     // var rotatex_left;
//     var rotatey_left=vals.rotatey+90;
//     var rotatez_left=vals.rotatez+270;
//
//     // var rotatex_up;
//     var rotatey_up=vals.rotatey;
//     var rotatez_up=vals.rotatez;
//
//     // var rotatex_down;
//     var rotatey_down=vals.rotatey;
//     var rotatez_down=vals.rotatez+180;
//
//     // var rotatex_back;
//     var rotatey_back=vals.rotatey+360;
//     var rotatez_back=vals.rotatez;
//
//     // var rotatex_front;
//     var rotatey_front=vals.rotatey;
//     var rotatez_front=vals.rotatez;
//
//     document.getElementById("right").style.right=right_right+"px";
//     document.getElementById("left").style.right=right_left+"px";
//     document.getElementById("down").style.right=right_down+"px";
//     document.getElementById("up").style.right=right_up+"px";
//     document.getElementById("front").style.right=right_front+"px";
//     document.getElementById("back").style.right=right_back+"px";
//     document.getElementById("right").style.top=top_right+"px";
//     document.getElementById("left").style.top=top_left+"px";
//     document.getElementById("down").style.top=top_down+"px";
//     document.getElementById("up").style.top=top_up+"px";
//     document.getElementById("front").style.top=top_front+"px";
//     document.getElementById("back").style.top=top_back+"px";
//     // document.getElementById("right").style.zIndex=zIndex_right;
//     // document.getElementById("left").style.zIndex=zIndex_left;
//     // document.getElementById("down").style.zIndex=zIndex_down;
//     // document.getElementById("up").style.zIndex=zIndex_up;
//     // document.getElementById("front").style.zIndex=zIndex_front;
//     // document.getElementById("back").style.zIndex=zIndex_back;
//
//     document.getElementById("right").style.transform="rotateY("+rotatey_right+"deg)";
//
//     document.getElementById("left").style.transform="rotateY("+rotatey_left+"deg)";
//
//     document.getElementById("down").style.transform="rotateY("+rotatey_down+"deg)";
//
//     document.getElementById("up").style.transform="rotateY("+rotatey_up+"deg)";
//
//     document.getElementById("front").style.transform="rotateY("+rotatey_front+"deg)";
//
//     document.getElementById("back").style.transform="rotateY("+rotatey_back+"deg)";
//
//     document.getElementById("right").style.transform="rotateY("+rotatey_right+"deg);rotate("+rotatez_right+"deg)";
//
//     document.getElementById("left").style.transform="rotateY("+rotatey_left+"deg);rotate("+rotatez_left+"deg)";
//
//     document.getElementById("down").style.transform="rotateY("+rotatey_down+"deg);rotate("+rotatez_down+"deg)";
//
//     document.getElementById("up").style.transform="rotateY("+rotatey_up+"deg);rotate("+rotatez_up+"deg)";
//
//     document.getElementById("front").style.transform="rotateY("+rotatey_front+"deg);rotate("+rotatez_front+"deg)";
//
//     document.getElementById("back").style.transform="rotateY("+rotatey_back+"deg);rotate("+rotatez_back+"deg)";
// }
