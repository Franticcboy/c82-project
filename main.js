var mouse_event="empty";
var lastposistionofx,lastposistionofy;

canvas=document.getElementById("bababoi");
ctx=canvas.getContext("2d");
color="aqua";
widthofline=4;
 canvas.addEventListener("mousedown",shangchi);
function shangchi(e){
    mouse_event="mousedown";
color=document.getElementById("color").value ;
widthofline=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup",sus);
function sus(e){
    mouse_event="mouseup";
    
}
canvas.addEventListener("mouseleave",ender_dragon);
function ender_dragon(e){
    mouse_event="mouseleave";
    
}
canvas.addEventListener("mousemove",technoblade);
function technoblade(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
   
        

    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStlye=color;
        ctx.lineWidth=widthofline;
        console.log("last position of x and y coordinates= ");
        console.log("x="+lastposistionofx+"y="+lastposistionofy);
        ctx.moveTo(lastposistionofx,lastposistionofy);

        console.log("current position of x and y coordinates= ");
        console.log("x="+currentpositionofmousex+"y="+currentpositionofmousey);
circle(currentpositionofmousex,currentpositionofmousey)
    

        ctx.stroke();
}
lastposistionofx=currentpositionofmousex;
lastposistionofy=currentpositionofmousey;


}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
 
function circle(mousex,mousey){
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}
