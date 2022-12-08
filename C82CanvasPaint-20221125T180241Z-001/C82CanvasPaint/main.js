canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseevent = "empty";
var lastpositionx, lastpositiony;
color = "black";
widthline = 1;
canvas.addEventListener("mousedown",mmd);
function mmd(e) {
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",mmu);
function mmu(e) {
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mml);
function mml(e) {
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mmm);
function mmm(e) {
    atualPositionx = e.clientX - canvas.offsetLeft;
    atualPositiony = e.clientY - canvas.offsetTop;
    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidht=widthline;
        ctx.moveTo(lastPositionx,lastpositiony);
        ctx.lineTo(atualPositionx,atualPositiony);
        ctx.stroke();
    }
    lastPositionx=atualPositionx;
    lastpositiony=atualPositiony;
    
}
var lastpositionXtouch, lastpositionYtouch;
var width=screen.width;
newwidth = screen.width - 70;
newheight = screen.height - 300;
if (width<992){
    document.getElementById("myCanvas").width=mewwidth;
    document.getElementById("myCanvas").height=mewheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",ts);
function ts(e){
    lastpositionXtouch=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionYtouch=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e) {
    atualPositiontouchx = e.touches[0].clientX - canvas.offsetLeft;
    atualPositiontouchy = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidht=widthline;
        ctx.moveTo(lastpositionXtouch,lastpositionYtouch);
        ctx.lineTo(atualPositiontouchx,atualPositiontouchy);
        ctx.stroke();
        lastpositionXtouch=atualPositiontouchx;
        lastpositionYtouch=atualPositiontouchy;
}
