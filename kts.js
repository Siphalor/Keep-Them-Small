function kts(){
kts.version="B 1.3 P 1";
/* Check mobile/desktop */
desktop=!(function isMobile(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true;return false})(navigator.userAgent||navigator.vendor||window.opera);

var $get={};
window.location.href.replace(/[?&]([^=&]+)=?([^&]*)/gi,function(m,name,value,p,s){$get[name]=value;return m;});
var d=window.document;d.write(". ");d.title="Keep Them Small - "+kts.version;var b=d.body;b.innerHTML="";var a=b.appendChild(d.createElement("canvas"));a.innerHTML="Please try to use a modern browser."; a.style.position="absolute";a.style.left="0";a.style.top="0";d.addEventListener("resize",resize);
var o=a.getContext("2d");
var renderer={};
renderer.font=function(size){
o.font="bold "+size+"px Arial, sans-serif";
}
renderer.circle=function(x,y,r,color,filled){
o.strokeStyle=(o.fillStyle=color);
o.beginPath();
o.arc(x,y,r,0,Math.PI*2,true);
o.closePath();filled?o.fill():o.stroke();
};
renderer.fillCircle=function(x,y,r,color){renderer.circle(x,y,r,color,true);};
renderer.circleButton=function(text,x,y,r,isFilled,color,color2){
if(!color)color="white";
o.lineWidth=r*0.15;
renderer.circle(x,y,r,color,isFilled);
o.strokeStyle=(o.fillStyle=(isFilled?(color2?color2:data.bg):(color2?color2:color)));
renderer.font(r/3*2);
o.textAlign="center";o.textBaseline="middle";
o.save();
o.translate(x,y);
if(text.includes("$r"))o.rotate(Math.PI/2);
if(text.includes("$d"))o.rotate(Math.PI);
if(text.includes("$l"))o.rotate(Math.PI*1.5);
if(text.includes("$b"))renderer.font(r*1.25);
if(text.includes("$b-"))renderer.font(r);
if(text.includes("$b--"))renderer.font(r*0.8);
text=text.split("$")[0];
switch(text){
case "~X":
o.lineWidth=r*0.12;
o.beginPath();
o.moveTo(-r/2,-r/2);
o.lineTo(r/2,r/2);
o.moveTo(-r/2,r/2);
o.lineTo(r/2,-r/2);
o.closePath();
o.stroke();
break;
case "~A":
o.fillRect(-r*0.25,-r*0.25,r*0.5,r*0.85);
o.beginPath();
o.moveTo(-r*0.55,-r*0.15);o.lineTo(r*0.55,-r*0.15);o.lineTo(0,-r*0.6);
o.closePath();o.fill();
break;
case "~G":
renderer.circle(0,0,r*0.8,0,true);
o.fillRect(-r*0.2,-r,r*0.4,r*2);
o.save();
o.rotate(Math.PI/4);
o.fillRect(-r*0.2,-r,r*0.4,r*2);
o.rotate(Math.PI/4);
o.fillRect(-r*0.2,-r,r*0.4,r*2);
o.rotate(Math.PI/4);
o.fillRect(-r*0.2,-r,r*0.4,r*2);
o.restore();
renderer.circle(0,0,r*0.5,data.bg,1);
break;
default:
o.fillText(text,0,0);
}o.restore();};
var data={debug:true,bg:"black",maxtps:30,ticking:false,sm:0,x:3,y:4,s:0,ms:0,rs:-1,c:[],
lose:function(i){data.s=1.5;data.f=0.05;if(i!==undefined)data.c[i].s=3;},
init:function(){let l=desktop?10:data.x*data.y;data.y=desktop?3:data.y;data.x=desktop?4:data.x;data.c=new Array(l);for(let i=0;i<l;i++){data.c[i]={s:0,p:0,iid:desktop?0:-1};if(desktop)modes[data.sm].items[0].onchoose(i);switch(i){case 0:data.c[i].val='E';break;case 1:data.c[i].val='R';break;case 2:data.c[i].val='T';break;case 3:data.c[i].val='S';break;case 4:data.c[i].val='D';break;case 5:data.c[i].val='F';break;case 6:data.c[i].val='G';break;case 7:data.c[i].val='X';break;case 8:data.c[i].val='C';break;case 9:data.c[i].val='V';break;}}data.q=15;data.su=0;data.v=1.1;data.score=0;data.f=0}};
Object.defineProperty(window,"cw",{get:function(){return a.width;},set:function(v){a.width=v;}});
Object.defineProperty(window,"ch",{get:function(){return a.height;},set:function(v){a.height=v;}});
Object.defineProperty(data,"sc",{
get: function(){return data.score;},
set: function(n){data.score=n;if(n<=-100){alert('You\'re so bad. I have to stop you!');data.lose();}
if(modes[data.sm].su!=-1&&data.sc>=modes[data.sm].su*(data.su+1)){data.su=Math.floor(data.sc/modes[data.sm].su);data.v+=0.1*data.su;data.bg="rgb("+(data.su*28).toString()+",0,0)";}}});

var rb=Item.apply({c:333,color:"#8f3",onreachmax:function(i){data.c[i].s=2;return false;},onreachmin:function(i){data.c[i].iid=-1;},ontapclose:function(i){data.lose(i);return 0;},ontapreopen:function(i){data.lose(i)}});
var ci=Item.apply({color:"#ff3",c:75,ontapclose:function(i){let c=0;for(j=0;j<data.c.length;j++){if(data.c[j].p!=0){data.c[j].s=2;data.c[j].iid=-1;c++;}}data.sc+=Math.floor(c/3);},ontapopen:function(i){data.c[i].s=0}});
var fi=Item.apply({c:35,ontapclose:function(i){var id=data.c[i].iid;data.c[i].iid=-1;let c=0;for(let j=0,c=data.c.length;j<c;j++){data.c[j].s=0;if((data.c[j].iid==-1||data.c[j].iid==id)&&data.c[j].p!=0){data.c[j].iid=id;c++}}data.sc+=Math.floor(c*0.6);},ontapreopen:function(i){data.c[i].iid=-1;},ontapopen:function(i){if(data.c[i].p!=0){data.c[i].iid=-1;}else{data.c[i].s=0;}},onopen:function(i){if(data.c[i].p!=0){if(rand(0,data.q*8)==0){data.c[i].s=2;}else{data.c[i].s=0;}};},onchoose:function(i){if(data.c[i].s==0&&data.c[i].p==0){return true}return false},onreachmin:function(i){data.c[i].iid=-1;},
getColor:function(c){
return(c.s==1||(c.s==0&&c.p==0)?"#5ff":"#9ff");
}});
var li=Item.apply({color:"#888",c:100,
onchoose:function(i){if(data.c[i].p!=0||data.c[i].iid!=-1)return false;data.c[i].logic=!rand(0,1);return true;},
onreachmin:function(i){data.c[i].iid=-1;delete data.c[i].logic;},
ontapclose:function(i){if((data.sc%2==1)^data.c[i].logic){data.lose(i);return 0;}data.c[i].s=2;},
ontapreopen:function(i){data.c[i].logic=!data.c[i].logic;},
render:function(c){renderer.fillCircle(c.x,c.y,p2r(c.p),this.color);o.fillStyle="white";renderer.font(p2r(c.p));o.textAlign="center";o.textBaseline="middle";if(c.s==3)o.fillStyle="#f61";o.fillText(c.logic?"X":"O",c.x,c.y);
}});
var tuti=Item.apply({color:"#B3286A",c:0,
onchoose:function(i){data.c[i].iid=0;return false},
onreachmin:function(i){data.c[i].iid=-1;delete data.c[i].val;},
render:function(c){renderer.fillCircle(c.x,c.y,p2r(c.p),this.color);o.fillStyle="white";renderer.font(p2r(c.p));o.textAlign="center";o.textBaseline="middle";if(c.s==3)o.fillStyle="#f61";o.fillText(c.val,c.x,c.y);
}});

var me=new Mode("Experimental");me.setmaxp(35);me.additem(tuti);me.additem(rb);me.additem(ci);me.additem(fi);me.additem(li);me.ci=0.95;
me.su=75;
me.share="I experimented a little bit with '%n' and got a score of %p.";
var mati=new Mode("All The Items");mati.additem(tuti);mati.additem(rb);mati.ci=0.5;mati.additem(ci);mati.additem(fi);
mati.su=100;
mati.share="I tried to use all the items and won '%n' with %p points!";
var mt=new Mode("Think!");mt.additem(tuti);mt.additem(ci,3);mt.additem(li,95);mt.additem(rb,2);mt.ci=1;mt.su=15;mt.share="I thought I were intelligent but I failed with a score of %p playing %n";
var mc=new Mode("Classic");mc.additem(tuti);mc.su=100;
var modes=[mc,mati,mt,me];
data.init();
resize();
if(desktop){a.addEventListener("mousedown",function(e){touch([{pageX:e.pageX,pageY:e.pageY}])});
d.addEventListener('keydown',key);}
else{a.addEventListener("touchstart",function(e){touch(e.changedTouches)});}
var ti=20;
var ticks=[(new Date()).getTime()];
intervals = [];
function start(){
console.log("start");
intervals[0]=setInterval(function(){
if(ticks[ticks.length-1]+1000/data.maxtps<=(new Date()).getTime()&&ticks.length<data.maxtps&&!data.ticking)tick();
},ti);
intervals[1]=setInterval(chooseTick,200);
intervals[2]=setInterval(function(){if(a.style.width!=innerWidth+"px"||a.style.height!=innerHeight+"px")resize();if(document.body.scrollTop!=0)document.body.scrollTop=0;if(document.body.scrollLeft!=0)document.body.scrollLeft=0;},1000);
}
function stop(){
console.log('blur');
for(let i=0; i<intervals.length; i++){
clearInterval(intervals[i]);}
}
/* addEventListener('blur',stop);
addEventListener('focus',start); */
start();

function tick(){
data.ticking=true;
var i=0;
while(ticks[i]<(new Date()).getTime()-1000){i++}
ticks.splice(0,i);
ticks.push((new Date()).getTime());
if(data.s==1){
for(let i=0,c=data.c.length;i<c;i++){
modes[data.sm].oncircletick(i);
}}
render();
data.ticking=false;
}
function render(){
if(data.rs!=data.s){console.log("stateChange");
if(data.s<1||data.s>2)data.bg="black";
resize();
data.rs=data.s;}
o.fillStyle=data.bg;
o.fillRect(0,0,cw,ch);
if(data.s==0){
switch(data.ms){
case 1:
o.fillStyle="white";renderer.font(ch*0.1);o.textAlign="center";o.textBaseline="middle";
o.fillText("KTS "+kts.version,cw/2,ch*0.12);
renderer.font(ch*0.06);
o.fillText("Siphalor",cw/2,ch*0.29);
o.fillText("iPhone 5C",cw/2,ch*0.43);
o.fillText("GitHub.com/Siphalor",cw/2,ch*0.57);
renderer.font(ch*0.04);
o.fillText("Designed and coded by",cw/2,ch*0.23);
o.fillText("with an",cw/2,ch*0.37);
o.fillText("Feedback and bug report to",cw/2,ch*0.51);
renderer.circleButton("~X",cw/2,ch*0.8,ch*0.12,1);
break;
case 2:

renderer.circleButton("i$b",cw-ch*0.06,ch*0.06,ch*0.04);
renderer.circleButton("~X",ch*0.06,ch*0.06,ch*0.04);
break;
case 0:
default:
o.fillStyle="white";
renderer.font(ch*0.1);
o.textAlign="center";o.textBaseline="middle";
o.fillText(modes[data.sm].name,cw/2,ch*0.3);
renderer.circleButton("~A",cw/2,ch*0.15,ch*0.07);
renderer.circleButton("~A$d",cw/2,ch*0.45,ch*0.07);
renderer.circleButton("Play",cw/2,ch*0.75,ch*0.15,1);
renderer.circleButton("~G",cw-ch*0.06,ch*0.94,ch*0.04,0,"black","white");
renderer.circleButton("?$b",ch*0.06,ch*0.94,ch*0.04);
break;
}
}else{
if(data.s!=2){
o.textAlign="center";o.textBaseline="middle";
renderer.font(ch*0.27);
o.fillStyle="#444";
o.fillText(data.sc.toString(),cw/2,ch/2);
}
for(i=0;i<data.c.length;i++){
var c=data.c[i];
if(c.iid==-1){
renderer.fillCircle(c.x,c.y,p2r(c.p),(c.s==3?"#f61":"white"));}
else{
modes[data.sm].items[c.iid].render(c);}
}
if(data.s==2){
renderer.circleButton(data.sc.toString()+"$b-",cw/2,ch*0.85,ch*0.12,1);
let d=(cw/2-ch*0.12)/2;
renderer.circleButton("WA$b--",d,ch*0.85,d*0.6,0,"#6c6","white");
renderer.circleButton("~A$r",cw-d,ch*0.85,d*0.6);
}
o.fillStyle="rgba(255,90,90,"+(data.f).toString()+")";
o.fillRect(0,0,cw,ch);
if(data.f!=0){
data.f+=(data.s==1.5?0.05:-0.05);
if(data.f>1){
data.s=2;data.f=1;
}
if(data.f<0)data.f=0;
}
}
if(data.debug){
o.fillStyle="red";
renderer.font(20);
o.fillText(ticks.length,30,30);}
}

function resize(){
if($get["pixelated"]!==undefined){
cw=100;
ch=innerHeight*cw/innerWidth;
}else{
cw=innerWidth;ch=innerHeight;}
var h=ch;
a.style.width=innerWidth+"px";
a.style.height=innerHeight+"px";
if((ch>cw)!=(data.y>data.x)&&!desktop){
data.x=(ch>cw?Math.min(data.x,data.y):Math.max(data.x,data.y));
data.y=data.c.length/data.x;
}
/*(innerWidth>=innerHeight&&navigator.standalone===false)*/
if(data.s==2){h-=h*0.3;}
if(data.s==0){
}else{
if(cw/data.x<=h/data.y){
data.m=0.20*cw/(data.x+1);
data.r=(cw-(data.x+1)*data.m)/data.x/2;}
else{
data.m=0.20*h/(data.y+1);
data.r=(h-(data.y+1)*data.m)/data.y/2;}
var rx=cw-data.x*(data.m+data.r*2)-data.m;
var ry=h-data.y*(data.m+data.r*2)-data.m;
if(desktop){
for(i=0;i<data.c.length;i++){
let y=i<=2?0:(i<=6?1:2);
let width=y==1?4:3;
let x=i-(y==1?3:(y==2?7:0));
data.c[i].x=data.m+x*data.m+x*data.r*2+data.r+rx/2+(y==1?0:data.m/2+data.r);
data.c[i].y=data.m+y*data.m+y*data.r*2+data.r+ry/2;
}
} else {
for(i=0;i<data.c.length;i++){
let y=Math.floor(i/data.x);
let x=i-y*data.x;
data.c[i].x=data.m+x*data.m+x*data.r*2+data.r+rx/2;
data.c[i].y=data.m+y*data.m+y*data.r*2+data.r+ry/2;
}
}
}
}
function chooseTick(){
if(data.s==1){
var r=rand(0,data.c.length-1);
if(data.c[r].s==0&&rand(0,data.q)==0){data.c[r].s=1;
if(data.c[r].iid!=-1)modes[data.sm].items[data.c[r].iid].onopen(r);}
if(Math.random()<modes[data.sm].ci&&rand(0,data.q+(data.sc<=220?data.sc/20:11))==0){
var r=rand(0,data.c.length-1);
var ri=rand(0,modes[data.sm].getWholeItemC());
var c=0;
for(let i=0,l=modes[data.sm].items.length;i<l;i++){
c+=modes[data.sm].items[i].c;
if(ri<c){
if(modes[data.sm].items[i].onchoose(r))
data.c[r].iid=i;
break;
}
}
}
}
}
function touch(t){
let h=innerHeight;let w=innerWidth;
switch(data.s){
case 0:
switch(data.ms){
case 1:
for(let i=0, l=t.length; i<l; i++){
if(pInC(w/2,h*0.8,h*0.12,t[i].pageX,t[i].pageY)){
data.ms=2;
}
if(t[i].pageY>=h*0.53&&t[i].pageY<=h*0.61) location.href="http://www.github.com/Siphalor/Keep-Them-Small";
}
break;
case 2:
for(let i=0, l=t.length; i<l; i++){
let x=t[i].pageX;let y=t[i].pageY;
if(pInC(w-h*0.06,h*0.06,h*0.04,x,y)) data.ms=1;
if(pInC(h*0.06,h*0.06,h*0.04,x,y)) data.ms=0;
}
break;
case 0:
default:
for(let i=0, l=t.length; i<l; i++){
let x=t[i].pageX;let y=t[i].pageY;
if(pInC(w/2,h*0.15,h*0.07,x,y)) data.sm-=(data.sm?1:-modes.length+1);
if(pInC(w/2,h*0.45,h*0.07,x,y)) data.sm+=(data.sm!=modes.length-1?1:-modes.length+1);
if(pInC(w/2,h*0.75,h*0.15,x,y)){
data.s=1;data.init();
}
if(pInC(w-h*0.06,h*0.94,h*0.04,x,y)) data.ms=2;
if(pInC(h*0.06,h*0.94,h*0.04,x,y)) data.ms=3;
}
break;
}
break;
case 1:
var b=true;
for(let i=0,l=t.length; i<l; i++){
for(let j=0,c=data.c.length; j<c; j++){
if(pInC(data.c[j].x,data.c[j].y,p2r(data.c[j].p),t[i].pageX/innerWidth*cw,t[i].pageY/innerHeight*ch)){
b=false;
modes[data.sm].ontouchcircle(j);
}
}
if(b) chooseTick();
}
break;
case 2:
for(let i in t){
let x=t[i].pageX;let y=t[i].pageY;
let d=(w/2-h*0.12)/2;
if(pInC(d,h*0.85,d*0.6,x,y)){window.location.href="whatsapp://send?text=" +encodeURIComponent(modes[data.sm].share.replace("%n","Keep Them Small").replace("%p",data.sc.toString()));b=false;
}
if(pInC(w-d,h*0.85,d*0.6,x,y)) data.s=0;
}
break;
default: break;
}
}
function key(e){
let c=e.charCode||e.keyCode;
switch(c){
case 69:
modes[data.sm].ontouchcircle(0);
break;
case 82:
modes[data.sm].ontouchcircle(1);
break;
case 84:
modes[data.sm].ontouchcircle(2);
break;
case 83:
modes[data.sm].ontouchcircle(3);
break;
case 68:
modes[data.sm].ontouchcircle(4);
break;
case 70:
modes[data.sm].ontouchcircle(5);
break;
case 71:
modes[data.sm].ontouchcircle(6);
break;
case 88:
modes[data.sm].ontouchcircle(7);
break;
case 67:
modes[data.sm].ontouchcircle(8);
break;
case 86:
modes[data.sm].ontouchcircle(9);
break;
case  38:
if(data.s==0&&data.ms==0)data.sm-=(data.sm?1:-modes.length+1);
break;
case  40:
if(data.s==0&&data.ms==0)data.sm+=(data.sm!=modes.length-1?1:-modes.length+1);
break;
case 13:
if(data.s==0&&data.ms==0){
data.init();
data.s=1;}
else if(data.s==2){
data.s=0;}
break;
default:
chooseTick();
}
}
function encode(s){
var r="";
for(k=0;k<s.length;k++){
var a=Math.floor(s.charCodeAt(k)/16);
r+="%"+a.toString()+(s.charCodeAt(k)-16*a).toString();
}
return r;
}
function rand(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}
function p2r(p){
return data.r*0.2+data.r*0.8*p/30;
}
function pInC(cx,cy,r,x,y){
return Math.sqrt((cx-x)*(cx-x)+(cy-y)*(cy-y))<=r;
}
function Item(){
if(this.color==undefined)this.color="#d00";
if(this.getColor==undefined)this.getColor=function(c){
return this.color;
};
if(this.c==undefined)this.c=0.1;
if(this.render==undefined)this.render=function(c){
renderer.fillCircle(c.x,c.y,p2r(c.p),this.getColor(c));
o.lineWidth=ch*0.0071;if(c.s==3)renderer.circle(c.x,c.y,p2r(c.p),"#f61");
};
if(this.ontapclose==undefined)this.ontapclose=function(i){
data.c[i].iid=-1;
};
if(this.onreachmax==undefined)this.onreachmax=function(i){
return true;
};
if(this.onchoose==undefined)this.onchoose=function(r){
if(data.c[r].s==0)
return true;
return false;
};
if(this.ontapopen==undefined)this.ontapopen=function(i){};
if(this.onopen==undefined)this.onopen=function(i){};
if(this.ontapreopen==undefined)this.ontapreopen=function(i){};
if(this.onreachmin==undefined)this.onreachmin=function(i){};
return this;
}
function Mode(nam){
this.name=nam;
this.maxp=30;
this.ci=0;
this.items=[];
this.su=-1;
this.share="I reached a score of \%p at '\%n'!";
this.wholeItemC=0;

Mode.prototype.additem=function(item,c){
var i=Object.create(item);
if(c!==undefined)i.c=c;
this.items[this.items.length]=i;
this.wholeItemC+=i.c;
};
Mode.prototype.getWholeItemC=function(){
return this.wholeItemC;
};
Mode.prototype.setmaxp=function(v){this.maxp=v;};
Mode.prototype.onreachmax=function(i){
if(data.c[i].iid!=-1){if(!this.items[data.c[i].iid].onreachmax(i)){
return false;
}}
data.lose(i);
};
Mode.prototype.onclosecircle=function(i){
data.c[i].s=2;data.q-=data.q/10;
};

Mode.prototype.oncircletick=function(i){
switch(data.c[i].s){
case 1:data.c[i].p+=data.v*((new Date()).getTime()-ticks[ticks.length-2])/92;break;
case 2:data.c[i].p-=data.v*3*((new Date()).getTime()-ticks[ticks.length-2])/92;break;
default: break;
}
if(data.c[i].p>=this.maxp){this.onreachmax(i);}
if(data.c[i].p<0){data.c[i].s=0;data.c[i].p=0;if(data.c[i].iid!=-1)this.items[data.c[i].iid].onreachmin(i);}
if(isNaN(data.c[i].p)){
data.c[i].p=0;
data.sc--;
}
};
Mode.prototype.ontouchcircle=function(i){
if(data.s!=1)return;
var c=data.c[i];
switch(c.s){
case 0:c.s=1;if(c.iid!=-1)this.items[c.iid].ontapopen(i);break;
case 1: this.onclosecircle(i);if(c.iid!=-1){
let s=this.items[c.iid].ontapclose(i);
if(s)data.sc+=s;
if(s===undefined)data.sc++;}else{
data.sc++;
}
break;
case 2: c.s=1;if(c.iid!=-1)this.items[c.iid].ontapreopen(i);break;
default: break;
}
data.c[i]=c;
};
}
}
