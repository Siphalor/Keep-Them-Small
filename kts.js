function kts(){
kts.version="B 1.2 P 2";
var d=window.document;d.write(". ");d.title="Keep Them Small "+String.fromCharCode(8211)+" "+kts.version;var b=d.body;b.innerHTML="";var a=b.appendChild(d.createElement("canvas"));a.style.position="fixed";a.style.left="0";a.style.top="0";d.addEventListener("resize",resize);
var o=a.getContext("2d");
var renderer={};
renderer.circle=function(x,y,r,color,filled){
o.strokeStyle=(o.fillStyle=color);
o.beginPath();
o.arc(x,y,r,0,Math.PI*2,true);
o.closePath();filled?o.fill():o.stroke();
};
renderer.fillCircle=function(x,y,r,color){renderer.circle(x,y,r,color,true);};
renderer.circleButton=function(text,x,y,r,color,isFilled){
if(!color)color="white";
renderer.circle(x,y,r,color,isFilled);
o.strokeStyle=(o.fillStyle=isFilled?"black":color);o.font="bold "+r/3*2+"px Arial";o.textAlign="center";o.textBaseline="middle";
o.save();
o.translate(x,y);
if(text.includes("$r"))o.rotate(Math.PI/2);
if(text.includes("$d"))o.rotate(Math.PI);
if(text.includes("$l"))o.rotate(Math.PI*1.5);
text=text.split("$")[0];
switch(text){
case "€X":
o.lineWidth=r*0.12;
o.beginPath();
o.moveTo(-r/2,-r/2);
o.lineTo(r/2,r/2);
o.moveTo(-r/2,r/2);
o.lineTo(r/2,-r/2);
o.closePath();
o.stroke();
break;
case "€A":
o.fillRect(-r*0.25,-r*0.25,r*0.5,r*0.85);
o.beginPath();
o.moveTo(-r*0.55,-r*0.15);o.lineTo(r*0.55,-r*0.15);o.lineTo(0,-r*0.6);
o.closePath();o.fill();
break;
default:
o.fillText(text,0,0);
}o.restore();};
var data={debug:true,maxtps:15,ticking:false,sm:0,x:3,y:4,s:0,ms:0,rs:-1,c:[],
lose:function(i){data.s=1.5;data.f=0.05;if(i!==undefined)data.c[i].s=3;},
init:function(){for(i=0;i<data.x*data.y;i++){data.c[i]={s:0,p:0,iid:-1};}data.q=15;data.su=0;data.v=1.1;data.score=0;data.f=0}};
Object.defineProperty(data,"sc",{
get: function(){return data.score;},
set: function(n){data.score=n;
if(modes[data.sm].su!=-1&&data.sc>=modes[data.sm].su*(data.su+1)){data.su=Math.floor(data.sc/modes[data.sm].su);data.v+=0.1*data.su;}}});

var rb=Item.apply({c:333,color:"#8f3",onreachmax:function(i){data.c[i].s=2;return false;},onreachmin:function(i){data.c[i].iid=-1;},ontapclose:function(i){data.lose(i);return 0;},ontapreopen:function(i){data.lose(i)}});
var ci=Item.apply({color:"ff3",c:75,ontapclose:function(i){for(j=0;j<data.x*data.y;j++){if(data.c[j].p!=0){data.c[j].s=2;data.c[j].iid=-1;}}},ontapopen:function(i){data.c[i].s=0}});
var fi=Item.apply({color:"#5ff",c:35,ontapclose:function(i){var id=data.c[i].iid;data.c[i].iid=-1;for(j in data.c){data.c[j].s=0;if((data.c[j].iid==-1||data.c[j].iid==id)&&data.c[j].p!=0)data.c[j].iid=id;}},ontapreopen:function(i){data.c[i].iid=-1;},ontapopen:function(i){if(data.c[i].p!=0){data.c[i].iid=-1;}else{data.c[i].s=0;}},onopen:function(i){if(data.c[i].p!=0){if(rand(0,data.q*8)==0){data.c[i].s=2;}else{data.c[i].s=0;}};},onchoose:function(i){if(data.c[i].s==0&&data.c[i].p==0){return true}return false},onreachmin:function(i){data.c[i].iid=-1;},
render:function(c){
renderer.fillCircle(c.x,c.y,p2r(c.p),(c.s==1||(c.s==0&&c.p==0)?this.color:"#9ff"));
o.strokeStyle="#f61";
o.lineWidth=innerHeight*0.0071;
if(c.s==3)o.stroke();
}});
var li=Item.apply({color:"#888",c:100,
onchoose:function(i){
if(data.c[i].p!=0||data.c[i].iid!=-1)return false;
data.c[i].logic=!rand(0,1);
return true;
},
onreachmin:function(i){
data.c[i].iid=-1;
delete data.c[i].logic;
},
ontapclose:function(i){
if((data.sc%2==1)^data.c[i].logic){
data.lose(i);
return 0;
}
data.c[i].s=2;
},
ontapreopen:function(i){
data.c[i].logic=!data.c[i].logic;
},
render:function(c){
renderer.fillCircle(c.x,c.y,p2r(c.p),this.color);
o.fillStyle="white";o.font="bold "+p2r(c.p)+"px Arial";o.textAlign="center";o.textBaseline="middle";
if(c.s==3)o.fillStyle="#f61";
o.fillText(c.logic?"X":"O",c.x,c.y);
}});

var me=new Mode("Experimental");me.setmaxp(35);me.additem(rb);me.additem(ci);me.additem(fi);me.additem(li);me.ci=0.95;
me.su=75;
me.share="I experimented a little bit with '\%n' and got a score of \%p.";
var mati=new Mode("All The Items");mati.additem(rb);mati.ci=0.5;mati.additem(ci);mati.additem(fi);
mati.su=100;
mati.share="I tried to use all the items and won '\%n' with \%p points!";
var mt=new Mode("Think!");mt.additem(ci,3);mt.additem(li,95);mt.additem(rb,2);mt.ci=1;mt.su=15;mt.share="I thought I were intelligent but I failed with a score of \%p playing \%n";
var mc=new Mode("Classic");mc.su=100;
var modes=[mc,mati,mt,me];

resize();
a.addEventListener("touchstart",touch);
var ti=20;
var ticks=[(new Date()).getTime()];
setInterval(function(){
if(ticks[ticks.length-1]+1000/data.maxtps<=(new Date()).getTime()&&ticks.length<data.maxtps&&!data.ticking)tick();
},ti);
setInterval(chooseTick,200);
setInterval(function(){if(a.width!=innerWidth||a.height!=innerHeight)resize();},2000);

function tick(){
data.ticking=true;
var i=0;
while(ticks[i]<(new Date()).getTime()-1000){i++}ticks.splice(0,i);
ticks.push((new Date()).getTime());if(data.s==1){
for(i in data.c){
modes[data.sm].oncircletick(i);
}}
render();
data.ticking=false;
}
function render(){
if(data.rs!=data.s){console.log("stateChange");
resize();
data.rs=data.s;}
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
renderer.circleButton("€X",w/2,h*0.8,h*0.12,0,true);
break;

case 0:
default:
o.fillStyle="black";o.fillRect(0,0,w,h);
o.fillStyle="white";o.font="bold "+h*0.1+"px Arial";o.textAlign="center";o.textBaseline="middle";
o.fillText(modes[data.sm].name,w/2,h*0.3);
renderer.circleButton("€A",w/2,h*0.15,h*0.07,0,1);
renderer.circleButton("€A$d",w/2,h*0.45,h*0.07,0,1);
renderer.circleButton("Play",w/2,h*0.75,h*0.15,0,true);
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
if(data.s!=2){
o.textAlign="center";o.textBaseline="middle";o.font="bold "+h*0.27+"px Arial";
o.fillStyle="#444";
o.fillText(data.sc.toString(),w/2,h/2);
}
for(x=0;x<data.x;x++){
for(y=0;y<data.y;y++){
var c=data.c[x+y*data.x];
renderer.fillCircle(c.x,c.y,p2r(c.p),(c.s==3?"#f61":"white"));
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
o.fillText(String.fromCharCode(8594),w/2,innerHeight*0.84);
o.fillText("WhatsApp",w/2,innerHeight*0.95);
}
o.fillStyle="rgba(255,90,90,"+(data.f).toString()+")";
o.fillRect(0,0,innerWidth,innerHeight);
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
o.font="20px Arial";
o.fillText(ticks.length,30,30);}
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
if(Math.random()<modes[data.sm].ci&&rand(0,data.q+(data.sc<=220?data.sc/20:11))==0){
var r=rand(0,data.x*data.y-1);
var ri=rand(0,modes[data.sm].getWholeItemC());
var c=0;
for(var i in modes[data.sm].items){
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
function touch(evt){
if(data.s==0){
switch(data.ms){
case 1:
var t=evt.changedTouches;
for(var i in t){
if(Math.sqrt(Math.pow(t[i].pageX-window.innerWidth/2,2)+Math.pow(t[i].pageY-window.innerHeight*0.80,2))<=window.innerHeight*0.12){
data.ms=0;
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
data.s=1;data.init();
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
modes[data.sm].ontouchcircle(x+y*data.x);
}
}
if(data.s==2){
if(t[i].pageY>=window.innerHeight*0.9){window.location.href="whatsapp://send?text=" +encodeURIComponent(modes[data.sm].share.replace("\%n","Keep Them Small").replace("\%p",data.sc.toString()));b=false;
}else if(t[i].pageY>=window.innerHeight*0.8){
data.s=0;
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
return Math.floor(Math.random()*(max-min+1))+min;
}
function p2r(p){
return data.r*0.2+data.r*0.8*p/30;
}
function Item(){
if(this.color==undefined)this.color="#d00";
if(this.c==undefined)this.c=0.1;
if(this.render==undefined)this.render=function(c){
o.strokeStyle="#f61";
renderer.fillCircle(c.x,c.y,p2r(c.p),this.color);
o.lineWidth=innerHeight*0.0071;if(c.s==3)o.stroke();
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
case 1:data.c[i].p+=data.v*1/ticks.length*10;break;
case 2:data.c[i].p-=data.v*3*1/ticks.length*10;break;
default: break;
}
if(data.c[i].p>=this.maxp){this.onreachmax(i);}
if(data.c[i].p<0){data.c[i].s=0;data.c[i].p=0;if(data.c[i].iid!=-1)this.items[data.c[i].iid].onreachmin(i);}
};
Mode.prototype.ontouchcircle=function(i){
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
