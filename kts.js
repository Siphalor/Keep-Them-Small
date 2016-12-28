function kts(){
kts.version="Beta 1.1";
var d=window.document;d.write(". ");d.title="Keep Them Small – "+kts.version;var b=d.body;b.innerHTML="";var a=b.appendChild(d.createElement("canvas"));a.style.position="fixed";a.style.left="0";a.style.top="0";d.addEventListener("resize",resize);
var o=a.getContext("2d");
var data={sm:0,x:3,y:4,s:0,ms:0,rs:-1,c:[],init:function(){for(i=0;i<data.x*data.y;i++){data.c[i]={s:0,p:0,iid:-1};}data.q=15;data.su=0;data.v=1;data.sc=0;data.f=0}};
var rb=Item.apply({c:0.0333,color:"#0b0",onreachmax:function(i){data.c[i].s=2;return false;},onreachmin:function(i){data.c[i].iid=-1;},ontapclose:function(i){data.s=2},ontapreopen:function(i){data.s=2},render:function(c){
o.fillStyle=this.color;
o.beginPath();
o.arc(c.x,c.y,p2r(c.p),0,Math.PI*2,true);
o.closePath();o.fill();
}});
var ci=Item.apply({color:"ff0",c:0.0075,ontapclose:function(i){var id=data.c[i].iid;data.c[i].iid=-1;for(j=0;j<data.x*data.y;j++){data.c[j].s=2;if(data.c[j].iid!=id)data.c[j].iid=-1;}},ontapopen:function(i){data.c[i].s=0},
onreachmax:function(i){data.c[i].s=2;data.c[i].iid=-1;return false;}});
var fi=Item.apply({color:"#0ee",c:0.0025,ontapclose:function(i){var id=data.c[i].iid;data.c[i].iid=-1;for(j in data.c){data.c[j].s=0;if((data.c[j].iid==-1||data.c[j].iid==id)&&data.c[j].p!=0)data.c[j].iid=id;}},ontapreopen:function(i){data.c[i].iid=-1;},ontapopen:function(i){if(data.c[i].p!=0){data.c[i].iid=-1;}else{data.c[i].s=0;}},onopen:function(i){if(data.c[i].p!=0){if(rand(0,data.q*4)==0){data.c[i].s=2;}else{data.c[i].s=0;}};},onchoose:function(i){if(data.c[i].s==0&&data.c[i].p==0){return true}return false},onreachmin:function(i){data.c[i].iid=-1;},
render:function(c){
o.fillStyle=(c.s==1||(c.s==0&&c.p==0)?this.color:"#9ee");
o.beginPath();
o.arc(c.x,c.y,p2r(c.p),0,Math.PI*2,true);
o.closePath();o.fill();
}});
var me=new Mode("Experimental");me.setmaxp(35);me.additem(rb);me.additem(ci);me.additem(fi);me.ci=0.5;
me.su=75;
me.share="I experimented a little bit with '\%n' and got a score of \%p.";
var mati=new Mode("All The Items");mati.additem(rb);mati.ci=0.5;mati.additem(ci);mati.additem(fi);
mati.su=100;
mati.share="I tried to use all the items and won '\%n' with \%p points!";
var mc=new Mode("Classic");mc.su=100;
var modes=[mc,mati,me];
resize();
a.addEventListener("touchstart",touch);
setInterval(tick,100);
setInterval(chooseTick,200);
setInterval(resize,2000);

function tick(){
if(data.s==1){
for(i in data.c){
modes[data.sm].oncircletick(i);
}}
render();
}
function render(){
if(data.rs!=data.s){console.log("stateChange");
if(data.s==2&&data.f==0){data.s=1.5;data.f=0.05;}
resize();data.rs=data.s;}
var w=innerWidth;
var h=innerHeight;
if(data.s==0){
switch(data.ms){
case 1:
o.fillStyle="black";o.fillRect(0,0,w,h);
o.fillStyle="white";o.font="bold "+h*0.1+"px Arial";o.textAlign="center";o.textBaseline="middle";
o.fillText("KTS "+kts.version,w/2,h*0.12);
o.font="bold "+h*0.06+"px Arial";
o.fillText("Siphalor",w/2,h*0.29);
o.fillText("iPhone 5C",w/2,h*0.43);
o.fillText("GitHub.com/Siphalor",w/2,h*0.57);
o.font="bold "+h*0.04+"px Arial";
o.fillText("Designed and coded by",w/2,h*0.23);
o.fillText("with an",w/2,h*0.37);
o.fillText("Feedback and bug report to",w/2,h*0.51);
o.beginPath();o.arc(w/2,h*0.80,h*0.12,0,2*Math.PI,true);o.closePath();o.fill();
o.strokeStyle="black";
o.lineWidth=h*0.0142;
o.beginPath();
o.moveTo(w/2-h*0.06,h*0.74);
o.lineTo(w/2+h*0.06,h*0.86);
o.moveTo(w/2-h*0.06,h*0.86);
o.lineTo(w/2+h*0.06,h*0.74);
o.closePath();
o.stroke();
break;

case 0:
default:
o.fillStyle="black";o.fillRect(0,0,w,h);
o.fillStyle="white";o.font="bold "+h*0.1+"px Arial";o.textAlign="center";o.textBaseline="middle";
o.fillText(modes[data.sm].name,w/2,h*0.3);
o.fillText("⬆️",w/2,h*0.15);
o.fillText("⬇️",w/2,h*0.45);
o.beginPath();o.arc(w/2,h*0.75,h*0.15,0,2*Math.PI,true);o.closePath();o.fill();
o.fillStyle="black";
o.fillText("Play",w/2,h*0.75);
o.fillStyle="white";
o.font="bold "+h*0.05+"px Arial";
o.fillText("i",w-h*0.06,h*0.94);
o.strokeStyle="white";
o.lineWidth=h*0.0071;
o.beginPath();o.arc(w-h*0.06,h*0.94,h*0.04,0,2*Math.PI,true);o.closePath();o.stroke();
break;
}
}else{
if(data.s==2){h-=h*0.2}o.fillStyle="rgb("+(data.su*28).toString()+",0,0)";
o.fillRect(0,0,w,innerHeight);
for(x=0;x<data.x;x++){
for(y=0;y<data.y;y++){
o.fillStyle="white";
var c=data.c[x+y*data.x];
if(c.s==3)o.fillStyle="#f11";
o.beginPath();
o.arc(c.x,c.y,p2r(c.p),0,Math.PI*2,true);
o.closePath();o.fill();
if(c.iid!=-1){
modes[data.sm].items[c.iid].render(c);}
}
}
if(data.s==2){
o.strokeStyle="#333";
o.lineWidth=15;
o.font="bold "+h*0.27+"px Arial";o.textAlign="center";o.textBaseline="middle";
o.fillStyle="rgba(255,255,255,0.4)";
o.fillText(data.sc.toString(),w/2,h/2);
o.strokeText(data.sc.toString(),w/2,h/2);
o.fillStyle="#555";
o.fillRect(0,innerHeight*0.8,w,innerHeight*0.9);
o.fillStyle="#4c4";
o.fillRect(0,innerHeight*0.9,w,innerHeight);
o.strokeStyle="white";
o.lineWidth=h*0.0021;
o.beginPath();o.moveTo(0,innerHeight*0.8);o.lineTo(w,innerHeight*0.8);o.moveTo(0,innerHeight*0.9);o.lineTo(w,innerHeight*0.9);o.stroke();
o.fillStyle="white";
o.font="bold "+innerHeight*0.07+"px Arial";
o.fillText("→",w/2,innerHeight*0.84);
o.fillText("WhatsApp",w/2,innerHeight*0.95);
}
o.fillStyle="rgba(255,51,51,"+(data.f).toString()+")";
o.fillRect(0,0,innerWidth,innerHeight);
if(data.f!=0){
data.f+=(data.s==1.5?0.05:-0.05);
if(data.f>1){
data.s=2;data.f=1;
}
}
}
}
function resize(){
var w=window.innerWidth;var h=window.innerHeight;
a.width=w;a.height=h;
/*if(w>h){data.x=data.y;data.y=data.c.length/data.x}*/
if(data.s==2){h-=h*0.2;}
if(data.s==0){

}else{
if(w/data.x<=h/data.y){
data.m=0.20*w/(data.x+1);
data.r=(w-(data.x+1)*data.m)/data.x/2;}
else{
data.m=0.20*h/(data.y+1);
data.r=(h-(data.y+1)*data.m)/data.y/2;}
var rx=w-data.x*(data.m+data.r*2)-data.m;
var ry=h-data.y*(data.m+data.r*2)-data.m;
for(i in data.c){
var y=Math.floor(i/data.x);
var x=i-y*data.x;
data.c[i].x=data.m+x*data.m+x*data.r*2+data.r+rx/2;
data.c[i].y=data.m+y*data.m+y*data.r*2+data.r+ry/2;
}
}
}
function chooseTick(){
if(data.s==1){
var r=rand(0,data.x*data.y-1);
if(data.c[r].s==0&&rand(0,data.q)==0){data.c[r].s=1;
if(data.c[r].iid!=-1)modes[data.sm].items[data.c[r].iid].onopen(r);}
if(Math.random()<modes[data.sm].ci+0.1*(15-data.q)){
r=rand(0,data.x*data.y-1);
for(i in modes[data.sm].items){
if(Math.random()<modes[data.sm].items[i].c){
if(modes[data.sm].items[i].onchoose(r))
data.c[r].iid=i;
}
}
}
}
}
function touch(evt){
if(data.s==0){
switch(data.ms){
case 1:
var t=evt.changedTouches;
for(i in t){
if(Math.sqrt(Math.pow(t[i].pageX-window.innerWidth/2,2)+Math.pow(t[i].pageY-window.innerHeight*0.80,2))<=window.innerHeight*0.12){
data.ms=0;resize();
}
if(t[i].pageY>=window.innerHeight*0.53&&t[i].pageY<=window.innerHeight*0.61){
window.location.href="http://www.github.com/Siphalor/Keep-Them-Small";
}
}
break;
case 0:
default:
var t=evt.changedTouches;
for(i in t){
var y=t[i].pageY/window.innerHeight;
if(y>=0.1&&y<=0.3){
data.sm=(data.sm==0?modes.length-1:data.sm-1);
}
if(y>=0.3&&y<=0.5){
data.sm=(data.sm==modes.length-1?0:data.sm+1);
}
if(Math.sqrt(Math.pow(t[i].pageX-window.innerWidth/2,2)+Math.pow(t[i].pageY-window.innerHeight*0.75,2))<=window.innerHeight*0.15){
data.s=1;data.init();resize();
}
if(t[i].pageX>=window.innerWidth*0.82&&t[i].pageY>=window.innerHeight*0.84){
data.ms=1;
}
}
break;
}
}else{
var t=evt.changedTouches;
var b=true;
for(i in t){
for(x=0;x<data.x;x++){
for(y=0;y<data.y;y++){
if(data.s==1&&Math.sqrt(Math.pow(t[i].pageX-data.c[x+y*data.x].x,2)+Math.pow(t[i].pageY-data.c[x+y*data.x].y,2))<=p2r(data.c[x+y*data.x].p)){
b=false;
data.c[x+y*data.x]=modes[data.sm].ontouchcircle(x,y);
}
}
if(data.s==2){
if(t[i].pageY>=window.innerHeight*0.9){window.location.href="whatsapp://send?text=" +encodeURIComponent(modes[data.sm].share.replace("\%n","Keep Them Small").replace("\%p",data.sc.toString()));b=false;
}else if(t[i].pageY>=window.innerHeight*0.8){
data.s=0;resize();
}
}
}
if(b){
chooseTick();
}
}
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
return Math.floor(Math.random()*(max-min))+min;
}
function p2r(p){
return data.r*0.2+data.r*0.8*p/30;
}
function Item(){
if(this.color==undefined)this.color="#d00";
if(this.c==undefined)this.c=0.1;
if(this.render==undefined)this.render=function(c){
o.fillStyle=this.color;
o.beginPath();
o.arc(c.x,c.y,p2r(c.p)/*<=0.6*data.r?p2r(c.p):data.r*0.6*/,0,Math.PI*2,true);o.closePath();o.fill();
};
if(this.ontapclose==undefined)this.ontapclose=function(i){
c.iid=-1;
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

Mode.prototype.additem=function(item){
this.items[this.items.length]=item;
};
Mode.prototype.setmaxp=function(v){this.maxp=v;};
Mode.prototype.onreachmax=function(i){
if(data.c[i].iid!=-1){if(!this.items[data.c[i].iid].onreachmax(i)){
return false;
}}
data.s=2;data.c[i].s=3;
};
Mode.prototype.onclosecircle=function(x,y){
data.c[x+y*data.x].s=2;data.q-=data.q/10;data.sc++;if(modes[data.sm].su!=-1&&data.sc>=modes[data.sm].su*(data.su+1)){data.su=Math.floor(data.sc/modes[data.sm].su);data.v+=0.1*data.su;}};
Mode.prototype.oncircletick=function(i){
switch(data.c[i].s){
case 1:data.c[i].p+=data.v;break;
case 2:data.c[i].p-=data.v*3;break;
default: break;
}
if(data.c[i].p>=this.maxp){this.onreachmax(i);}
if(data.c[i].p<0){data.c[i].s=0;data.c[i].p=0;if(data.c[i].iid!=-1)this.items[data.c[i].iid].onreachmin(i);}
};
Mode.prototype.ontouchcircle=function(x,y){
var c=data.c[x+y*data.x];
switch(c.s){
case 0:c.s=1;if(c.iid!=-1)this.items[c.iid].ontapopen(x+y*data.x);break;
case 1: this.onclosecircle(x,y);if(c.iid!=-1)
this.items[c.iid].ontapclose(x+y*data.x);
break;
case 2: c.s=1;if(c.iid!=-1)this.items[c.iid].ontapreopen(x+y*data.x);break;
default: break;
}
return c;
};
}
}
