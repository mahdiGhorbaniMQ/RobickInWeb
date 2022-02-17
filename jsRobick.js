class Cordinate {
    static r=200;
    static xOrigin=500;
    static yOrigin=300;
    static zOrigin=300;
    static x1=0;
    static y1=0;
    static z1=0;

    static x2=0;
    static y2=0;
    static z2=0;

    static x3=0;
    static y3=0;
    static z3=0;

    static x4=0;
    static y4=0;
    static z4=0;
}
class Rotate {
    static xDeg1=45;
    static yDeg1=45;
    static zDeg1=45;

    static xDeg2=45;
    static yDeg2=135;
    static zDeg2=45;
}
function rotate(deg,type) {

    if (type=='x') {
        Rotate.xDeg1=deg;
        Cordinate.z1 = Cordinate.zOrigin+(Cordinate.r*Math.cos(Rotate.xDeg1 * Math.PI / 180)*Math.sin(Rotate.yDeg1 * Math.PI / 180));
        Cordinate.y1 = Cordinate.yOrigin+(Cordinate.r*Math.sin(Rotate.zDeg1* Math.PI / 180)*Math.sin(Rotate.xDeg1 * Math.PI / 180));
        Rotate.xDeg2=deg;
        Cordinate.z2 = Cordinate.zOrigin+(Cordinate.r*Math.cos(Rotate.xDeg2 * Math.PI / 180)*Math.sin(Rotate.yDeg2 * Math.PI / 180));
        Cordinate.y2 = Cordinate.yOrigin+(Cordinate.r*Math.sin(Rotate.zDeg2 * Math.PI / 180)*Math.sin(Rotate.xDeg2 * Math.PI / 180));

        document.getElementById("x").innerText = "X-deg: "+deg;

        document.getElementById("x2").innerText = "Z-deg: "+deg;

    }else   if (type=='y') {
        Rotate.yDeg=deg;
        Cordinate.z1 = Cordinate.zOrigin+(Cordinate.r*Math.cos(Rotate.xDeg1 * Math.PI / 180)*Math.sin(Rotate.yDeg1 * Math.PI / 180));
        Cordinate.x1 = Cordinate.xOrigin+(Cordinate.r*Math.cos(Rotate.zDeg1 * Math.PI / 180)*Math.cos(Rotate.yDeg1 * Math.PI / 180));
        Rotate.YDeg1=parseInt(deg)+90;
        Cordinate.z2 = Cordinate.zOrigin+(Cordinate.r*Math.cos(Rotate.xDeg2 * Math.PI / 180)*Math.sin(Rotate.yDeg2 * Math.PI / 180));
        Cordinate.x2 = Cordinate.xOrigin+(Cordinate.r*Math.cos(Rotate.zDeg2 * Math.PI / 180)*Math.cos(Rotate.yDeg2 * Math.PI / 180));

        document.getElementById("y").innerText = "Y-deg: "+deg;

        document.getElementById("y2").innerText = "Y-deg: "+(parseInt(deg)+90);

    }else   if (type=='z') {
        Rotate.zDeg=deg;
        Cordinate.y1 = Cordinate.yOrigin+(Cordinate.r*Math.sin(Rotate.xDeg * Math.PI / 180)*Math.sin(Rotate.zDeg * Math.PI / 180));
        Cordinate.x1 = Cordinate.xOrigin+(Cordinate.r*Math.cos(Rotate.zDeg * Math.PI / 180)*Math.cos(Rotate.yDeg * Math.PI / 180));
        Rotate.zDeg1=deg;
        Cordinate.y2 = Cordinate.yOrigin+(Cordinate.r*Math.sin(Rotate.xDeg2 * Math.PI / 180)*Math.sin(Rotate.zDeg2 * Math.PI / 180));
        Cordinate.x2 = Cordinate.xOrigin+(Cordinate.r*Math.cos(Rotate.zDeg2 * Math.PI / 180)*Math.cos(Rotate.yDeg2 * Math.PI / 180));

        document.getElementById("z").innerText = "Z-deg: "+deg;

        document.getElementById("z2").innerText = "Z-deg: "+deg;

    }
    document.getElementById("cordinate").innerHTML="x: "+Cordinate.x1+" y: "+Cordinate.y1+" z: "+Cordinate.z1;

    document.getElementById("tst1").style.bottom=Cordinate.y1+"px";
    document.getElementById("tst1").style.left=Cordinate.x1+"px";
    document.getElementById("tst1").style.opacity=(Cordinate.z1-100)/4+"%";

    document.getElementById("tst2").style.bottom=Cordinate.y2+"px";
    document.getElementById("tst2").style.left=Cordinate.x2+"px";
    document.getElementById("tst2").style.opacity=(Cordinate.z2-100)/4+"%";
}