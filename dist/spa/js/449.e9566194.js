"use strict";(self["webpackChunkpr_spacialization"]=self["webpackChunkpr_spacialization"]||[]).push([[449],{607:(t,e,o)=>{o.d(e,{Z:()=>v});o(71);var i=o(3673),n=o(2323);const a={id:"app"},s=(0,i.Uk)(" Let us locate you for better results... "),r={key:0},l={key:1},c=(0,i._)("i",null,"Getting your location...",-1),d=[c],u={key:2};function h(t,e,o,c,h,g){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("p",null,[s,(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>g.locateMe&&g.locateMe(...t))},"Get location")]),t.errorStr?((0,i.wg)(),(0,i.iD)("div",r," Sorry, but the following error occurred: "+(0,n.zw)(t.errorStr),1)):(0,i.kq)("",!0),t.gettingLocation?((0,i.wg)(),(0,i.iD)("div",l,d)):(0,i.kq)("",!0),t.location?((0,i.wg)(),(0,i.iD)("div",u," Your location data is "+(0,n.zw)(t.location.coords.latitude)+", "+(0,n.zw)(t.location.coords.longitude),1)):(0,i.kq)("",!0)])}o(6701);const g={name:"Localisation",data:function(){return{location:null,orientation:null,gettingLocation:!1,errorStr:null}},mounted:()=>{console.log("huhuhuhu")},computed:{dispOrientation(){return this.orientation}},methods:{async getLocation(){return new Promise(((t,e)=>{"geolocation"in navigator||e(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((e=>{t(e)}),(t=>{e(t)}))}))},async getOrientation(){if(!window.DeviceOrientationEvent)throw console.log("Orientation not available"),new Error("Orientation not available on this device");window.addEventListener("deviceorientation",(t=>{console.log("z : "+t.alpha+"\n x : "+t.beta+"\n y : "+t.gamma+"\n abs"+t.absolute),this.orientation=Math.random()}))},async locateMe(){this.gettingLocation=!0;try{this.gettingLocation=!1,this.location=await this.getLocation()}catch(t){this.gettingLocation=!1,this.errorStr=t.message}},async orientateMe(){try{this.orientation=await this.getOrientation(),console.log(this.orientation)}catch(t){this.errorStr=t.message}}}};var p=o(4260);const L=(0,p.Z)(g,[["render",h]]),v=L},9449:(t,e,o)=>{o.r(e),o.d(e,{default:()=>_});var i=o(3673);const n={class:"boombox-body"},a={class:"bb-front"},s=(0,i._)("section",{class:"master-controls"},[(0,i._)("input",{type:"range",id:"volume",class:"control-volume",min:"0",max:"2",value:"1",list:"gain-vals",step:"0.01","data-action":"volume"}),(0,i._)("datalist",{id:"gain-vals"},[(0,i._)("option",{value:"0",label:"min"}),(0,i._)("option",{value:"2",label:"max"})]),(0,i._)("label",{for:"volume"},"Volume")],-1),r={class:"tape"},l={ref:"audioPlayer",src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3",crossorigin:"anonymous"},c=(0,i._)("span",null,"Play/Pause the spacialized experience",-1),d=(0,i._)("div",{id:"show position","aria-labelledby":"move-boombox"},null,-1),u={id:"source-position","aria-labelledby":"set-source-positions"},h=(0,i._)("h3",{id:"set-source-position"},"Set GPS source position",-1),g={class:"row q-col-gutter-sm"},p={class:"column"},L={class:"column"};function v(t,e,o,v,m,w){const f=(0,i.up)("q-btn"),b=(0,i.up)("q-input"),S=(0,i.up)("Localisation"),M=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(M,null,{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i._)("div",a,[s,(0,i._)("section",r,[(0,i._)("audio",l,null,512),(0,i.Wm)(f,{onClick:e[0]||(e[0]=t=>w.playMusic()),color:"white","text-color":"black"},{default:(0,i.w5)((()=>[c])),_:1})])])]),d,(0,i._)("div",u,[h,(0,i._)("div",g,[(0,i._)("div",p,[(0,i.Wm)(b,{standout:"",modelValue:m.gpsSourceLocation.deg.latitude,"onUpdate:modelValue":e[1]||(e[1]=t=>m.gpsSourceLocation.deg.latitude=t),onChange:e[2]||(e[2]=t=>w.updateSourceLocationRad()),label:"Source latitude"},null,8,["modelValue"])]),(0,i._)("div",L,[(0,i.Wm)(b,{standout:"",modelValue:m.gpsSourceLocation.deg.longitude,"onUpdate:modelValue":e[3]||(e[3]=t=>m.gpsSourceLocation.deg.longitude=t),label:"Source longitude"},null,8,["modelValue"])])])]),(0,i.Wm)(S)])),_:1})}o(6701);var m=o(607);const w={name:"Spacialization",data(){return{gpsTracker:null,audioCtx:null,listener:null,track:null,gainNode:null,gpsListenerLocation:{deg:null,rad:null},gpsSourceLocation:{deg:{latitude:0,longitude:0},rad:{latitude:0,longitude:0}},positionListener:{X:0,Y:0,Z:0},position:{X:0,Y:0,Z:0},orientationListener:{forwardX:0,forwardY:1,forwardZ:0,upX:0,upY:0,upZ:1},orientationSourceRad:{X:0,Y:0,Z:-1},pannerSettings:{pannerModel:"HRTF",innerCone:360,outerCone:0,outerGain:0,distanceModel:"inverse",maxDistance:100,refDistance:1,rollOff:1,positionX:0,positionY:0,positionZ:0,orientationX:0,orientationY:0,orientationZ:1},panner:null}},components:{Localisation:m.Z},methods:{error(t){console.warn("ERROR("+t.code+"): "+t.message)},init(){if(console.log("init method"),console.log(this.getDistanceFromGPSinKm(45.7703307,4.880336,45.7867264,4.8726016)),"geolocation"in navigator){const t={enableHighAccuracy:!1,timeout:5e3,maximumAge:0};this.gpsTracker=navigator.geolocation.watchPosition(this.updateCartesianListenerPosition,this.error,t)}else console.log("No Geolocation available");if(!window.DeviceOrientationEvent)throw console.log("Orientation not available"),new Error("Orientation not available on this device");window.addEventListener("deviceorientation",this.updateCartesianListenerOrientation),console.log(this.listener),this.panner=new PannerNode(this.audioCtx,this.pannerSettings),console.log(this.panner),this.track=this.audioCtx.createMediaElementSource(this.$refs.audioPlayer);const t=this.audioCtx.createGain(),e=document.querySelector('[data-action="volume"]');e.addEventListener("input",(function(){t.gain.value=this.value}),!1),this.track.connect(t).connect(this.panner).connect(this.audioCtx.destination)},updateSourceLocationRad(){this.gpsSourceLocation.rad.latitude=this.deg2rad(this.gpsSourceLocation.deg.latitude),this.gpsSourceLocation.rad.longitude=this.deg2rad(this.gpsSourceLocation.deg.longitude)},updateListener(t,e){switch(console.log("updateListener"),console.log(t),console.log(e),t){case"X":this.listener.positionX.value=e;break;case"Y":this.listener.positionY.value=e;break;case"Z":this.listener.positionZ.value=e;break}},async playMusic(){if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;console.log(this.listener),this.audioCtx=new t,this.listener=this.audioCtx.listener,this.init()}"running"===this.audioCtx.state?this.$refs.audioPlayer.paused?this.$refs.audioPlayer.play():this.$refs.audioPlayer.pause():console.error("audio context down"),"suspended"===this.audioCtx.state&&this.audioCtx.resume()},getDistanceFromGPSinKm(t,e,o,i){var n=6371,a=this.deg2rad(o-t),s=this.deg2rad(i-e),r=Math.sin(a/2)*Math.sin(a/2)+Math.cos(this.deg2rad(t))*Math.cos(this.deg2rad(o))*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)),c=n*l;return c},deg2rad(t){return t*(Math.PI/180)},updateListenerGeoloc(t){var e={latitude:t.coords.latitude,longitude:t.coords.longitude},o={latitude:this.deg2rad(e.latitude),longitude:this.deg2rad(e.longitude)};this.gpsListenerLocation.deg=e,this.gpsListenerLocation.rad=o},updateCartesianListenerPosition(t){var e=6371e3;this.updateListenerGeoloc(t);var o=this.gpsSourceLocation.rad.latitude,i=this.gpsSourceLocation.rad.longitude,n=this.gpsListenerLocation.rad.latitude,a=this.gpsListenerLocation.rad.longitude,s={X:e*(Math.cos(o)*Math.sin(i)-Math.cos(n)*Math.sin(a)),Y:e*(Math.sin(o)*Math.sin(i)-Math.sin(n)*Math.sin(a)),Z:e*(Math.cos(o)-Math.cos(n))};console.log("Difference Cartesian : "),console.log(s),this.positionListener.X=s.X,this.updateListener("X",this.positionListener.X),this.positionListener.Y=s.Y,this.updateListener("Y",this.positionListener.Y),this.positionListener.Z=s.Z,this.updateListener("Z",this.positionListener.Z),console.log("Source GPS : "),console.log(this.gpsSourceLocation),console.log("Listener GPS : "),console.log(this.gpsListenerLocation),console.log("Difference Cartesian"),console.log(s),console.log("Position Listener"),console.log(this.positionListener)},updateCartesianListenerOrientation(t){console.log("UpdateCartesianListener");var e=this.deg2rad(t.alpha),o=this.deg2rad(t.gamma);this.orientationListener.forwardX=Math.sin(o)*Math.cos(e),this.listener.forwardX.value=this.orientationListener.forwardX,this.orientationListener.forwardY=Math.sin(o)*Math.sin(e),this.listener.forwardY.value=this.orientationListener.forwardY,this.orientationListener.forwardZ=Math.cos(o),this.listener.forwardZ.value=this.orientationListener.forwardZ}}};var f=o(4260),b=o(4379),S=o(8902),M=o(7435),y=o(8786),C=o(7518),Z=o.n(C);const x=(0,f.Z)(w,[["render",v]]),_=x;Z()(w,"components",{QPage:b.Z,QSlider:S.Z,QBtn:M.Z,QInput:y.Z})}}]);