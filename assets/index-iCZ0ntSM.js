var ku=i=>{throw TypeError(i)};var Es=(i,e,t)=>e.has(i)?ku("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function zu(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="170",Bu=0,Ic=1,Vu=2,eh=1,th=2,Nn=3,li=0,Ft=1,Tn=2,si=0,Ai=1,Os=2,Lc=3,Dc=4,Gu=5,bi=100,Hu=101,Wu=102,Xu=103,Yu=104,qu=200,$u=201,ju=202,Ku=203,Qo=204,ea=205,Ju=206,Zu=207,Qu=208,ed=209,td=210,nd=211,id=212,sd=213,rd=214,ta=0,na=1,ia=2,ls=3,sa=4,ra=5,oa=6,aa=7,nh=0,od=1,ad=2,ri=0,cd=1,ld=2,hd=3,ih=4,ud=5,dd=6,fd=7,sh=300,hs=301,us=302,ca=303,la=304,no=306,ds=1e3,Bn=1001,ha=1002,yn=1003,pd=1004,sr=1005,sn=1006,lo=1007,ni=1008,Xn=1009,rh=1010,oh=1011,Ws=1012,rc=1013,Ii=1014,Vn=1015,Js=1016,oc=1017,ac=1018,fs=1020,ah=35902,ch=1021,lh=1022,xn=1023,hh=1024,uh=1025,os=1026,ps=1027,dh=1028,cc=1029,fh=1030,lc=1031,hc=1033,Nr=33776,Fr=33777,Or=33778,kr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,va=37808,xa=37809,ya=37810,Sa=37811,Ma=37812,ba=37813,Ta=37814,Ea=37815,wa=37816,Ca=37817,Aa=37818,Ra=37819,Pa=37820,Ia=37821,zr=36492,La=36494,Da=36495,ph=36283,Ua=36284,Na=36285,Fa=36286,md=3200,gd=3201,mh=0,_d=1,kn="",zt="srgb",vs="srgb-linear",io="linear",ct="srgb",Hi=7680,Uc=519,vd=512,xd=513,yd=514,gh=515,Sd=516,Md=517,bd=518,Td=519,Nc=35044,Fc="300 es",Gn=2e3,qr=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,Oa=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Ed(i,e){return(i%e+e)%e}function uo(i,e,t){return(1-t)*i+t*e}function ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],y=s[4],_=s[7],L=s[2],E=s[5],P=s[8];return r[0]=o*v+a*S+c*L,r[3]=o*m+a*y+c*E,r[6]=o*p+a*_+c*P,r[1]=l*v+h*S+u*L,r[4]=l*m+h*y+u*E,r[7]=l*p+h*_+u*P,r[2]=d*v+f*S+g*L,r[5]=d*m+f*y+g*E,r[8]=d*p+f*_+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Ze;function _h(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){const i=$r("canvas");return i.style.display="block",i}const Oc={};function Ds(i){i in Oc||(Oc[i]=!0,console.warn(i))}function Cd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ad(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const kc=[.64,.33,.3,.6,.15,.06],zc=[.2126,.7152,.0722],Bc=[.3127,.329],Vc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[vs]:{primaries:kc,whitePoint:Bc,transfer:io,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:zc,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:kc,whitePoint:Bc,transfer:ct,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:zc,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Wi;class Pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=$r("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(po(s[o].image)):r.push(po(s[o]))}else r=po(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;class Wt extends xs{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Bn,s=Bn,r=sn,o=ni,a=xn,c=Xn,l=Wt.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ys(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=sh;Wt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(f+1)/2,L=(p+1)/2,E=(h+d)/4,P=(u+v)/4,I=(g+m)/4;return y>_&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=P/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=P/r,s=I/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends xs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xh extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),E=Math.atan2(L,p*S);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}const _=a*S;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new R,Hc=new Zs;class Ss{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),or.subVectors(this.max,Cs),Xi.subVectors(e.a,Cs),Yi.subVectors(e.b,Cs),qi.subVectors(e.c,Cs),Kn.subVectors(Yi,Xi),Jn.subVectors(qi,Yi),fi.subVectors(Xi,qi);let t=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!go(t,Xi,Yi,qi,or)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Xi,Yi,qi,or))?!1:(ar.crossVectors(Kn,Jn),t=[ar.x,ar.y,ar.z],go(t,Xi,Yi,qi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new R,new R,new R,new R,new R,new R,new R,new R],mn=new R,rr=new Ss,Xi=new R,Yi=new R,qi=new R,Kn=new R,Jn=new R,fi=new R,Cs=new R,or=new R,ar=new R,pi=new R;function go(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=e.dot(pi),l=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Nd=new Ss,As=new R,_o=new R;class uc{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(_o)),this.expandByPoint(As.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new R,vo=new R,cr=new R,Zn=new R,xo=new R,lr=new R,yo=new R;class yh{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vo.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(vo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=Zn.dot(this.direction),c=-Zn.dot(cr),l=Zn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vo).addScaledVector(cr,d),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){xo.subVectors(t,e),lr.subVectors(n,e),yo.crossVectors(xo,lr);let o=this.direction.dot(yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const c=a*this.direction.dot(lr.crossVectors(Zn,lr));if(c<0)return null;const l=a*this.direction.dot(xo.cross(Zn));if(l<0||c+l>o)return null;const h=-a*Zn.dot(yo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Qn.crossVectors(n,tn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Qn.crossVectors(n,tn)),Qn.normalize(),hr.crossVectors(tn,Qn),s[0]=Qn.x,s[4]=hr.x,s[8]=tn.x,s[1]=Qn.y,s[5]=hr.y,s[9]=tn.y,s[2]=Qn.z,s[6]=hr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],y=n[7],_=n[11],L=n[15],E=s[0],P=s[4],I=s[8],b=s[12],x=s[1],C=s[5],D=s[9],U=s[13],F=s[2],X=s[6],z=s[10],K=s[14],W=s[3],ne=s[7],de=s[11],J=s[15];return r[0]=o*E+a*x+c*F+l*W,r[4]=o*P+a*C+c*X+l*ne,r[8]=o*I+a*D+c*z+l*de,r[12]=o*b+a*U+c*K+l*J,r[1]=h*E+u*x+d*F+f*W,r[5]=h*P+u*C+d*X+f*ne,r[9]=h*I+u*D+d*z+f*de,r[13]=h*b+u*U+d*K+f*J,r[2]=g*E+v*x+m*F+p*W,r[6]=g*P+v*C+m*X+p*ne,r[10]=g*I+v*D+m*z+p*de,r[14]=g*b+v*U+m*K+p*J,r[3]=S*E+y*x+_*F+L*W,r[7]=S*P+y*C+_*X+L*ne,r[11]=S*I+y*D+_*z+L*de,r[15]=S*b+y*U+_*K+L*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,L=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,E=t*S+n*y+s*_+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=S*P,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*P,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*P,e[4]=y*P,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=_*P,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*P,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*P,e[12]=L*P,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,S=c*l,y=c*h,_=c*u,L=n.x,E=n.y,P=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+_)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+y)*P,s[9]=(m-S)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Gn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===Gn)g=(o+r)*u,v=-2*u;else if(a===qr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new R,gn=new yt,Fd=new R(0,0,0),Od=new R(1,1,1),Qn=new R,hr=new R,tn=new R,Wc=new yt,Xc=new Zs;class wn{constructor(e=0,t=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kd=0;const Yc=new R,ji=new Zs,Ln=new yt,ur=new R,Rs=new R,zd=new R,Bd=new Zs,qc=new R(1,0,0),$c=new R(0,1,0),jc=new R(0,0,1),Kc={type:"added"},Vd={type:"removed"},Ki={type:"childadded",child:null},So={type:"childremoved",child:null};class At extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new R,t=new wn,n=new Zs,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Rs,ur,this.up):Ln.lookAt(ur,Rs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Ln),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new R(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new R,Dn=new R,Mo=new R,Un=new R,Ji=new R,Zi=new R,Jc=new R,bo=new R,To=new R,Eo=new R,wo=new bt,Co=new bt,Ao=new bt;class vn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Dn.subVectors(n,t),Mo.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Dn),c=_n.dot(Mo),l=Dn.dot(Dn),h=Dn.dot(Mo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wo.setScalar(0),Co.setScalar(0),Ao.setScalar(0),wo.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wo,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Dn.subVectors(e,t),_n.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),_n.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),Zi.subVectors(r,n),bo.subVectors(e,n);const c=Ji.dot(bo),l=Zi.dot(bo);if(c<=0&&l<=0)return t.copy(n);To.subVectors(e,s);const h=Ji.dot(To),u=Zi.dot(To);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ji,o);Eo.subVectors(e,r);const f=Ji.dot(Eo),g=Zi.dot(Eo);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Jc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Ji,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Ed(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ro(o,r,e+1/3),this.g=Ro(o,r,e),this.b=Ro(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return nt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ut(kt.r*255,0,255))*65536+Math.round(Ut(kt.g*255,0,255))*256+Math.round(Ut(kt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=zt){nt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(dr);const n=uo(ei.h,dr.h,t),s=uo(ei.s,dr.s,t),r=uo(ei.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new et;et.NAMES=Sh;let Gd=0;class Qs extends xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ys(),this.name="",this.blending=Ai,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ea,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Qs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new R,fr=new ye;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}}class Mh extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hd=0;const an=new yt,Po=new At,Qi=new R,nn=new Ss,Ps=new Ss,It=new R;class Zt extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?bh:Mh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(nn.min,Ps.min),nn.expandByPoint(It),It.addVectors(nn.max,Ps.max),nn.expandByPoint(It)):(nn.expandByPoint(Ps.min),nn.expandByPoint(Ps.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)It.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(e,l),It.add(Qi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;const l=new R,h=new R,u=new R,d=new ye,f=new ye,g=new ye,v=new R,m=new R;function p(I,b,x){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[I].add(v),a[b].add(v),a[x].add(v),c[I].add(m),c[b].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,b=S.length;I<b;++I){const x=S[I],C=x.start,D=x.count;for(let U=C,F=C+D;U<F;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new R,_=new R,L=new R,E=new R;function P(I){L.fromBufferAttribute(s,I),E.copy(L);const b=a[I];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(E,b);const C=_.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,b=S.length;I<b;++I){const x=S[I],C=x.start,D=x.count;for(let U=C,F=C+D;U<F;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new En(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new yt,mi=new yh,pr=new uc,Qc=new R,mr=new R,gr=new R,_r=new R,Io=new R,vr=new R,el=new R,xr=new R;class V extends At{constructor(e=new Zt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Io.fromBufferAttribute(u,e),o?vr.addScaledVector(Io,h):vr.addScaledVector(Io.sub(t),h))}t.add(vr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(pr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(pr,Qc)===null||mi.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Zc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,L=y;_<L;_+=3){const E=a.getX(_),P=a.getX(_+1),I=a.getX(_+2);s=yr(this,p,e,n,l,h,u,E,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=yr(this,o,e,n,l,h,u,S,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,L=y;_<L;_+=3){const E=_,P=_+1,I=_+2;s=yr(this,p,e,n,l,h,u,E,P,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,y=m+1,_=m+2;s=yr(this,o,e,n,l,h,u,S,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wd(i,e,t,n,s,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===li,a),c===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:i}}function yr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,mr),i.getVertexPosition(c,gr),i.getVertexPosition(l,_r);const h=Wd(i,e,t,n,mr,gr,_r,el);if(h){const u=new R;vn.getBarycoord(el,mr,gr,_r,u),s&&(h.uv=vn.getInterpolatedAttribute(s,a,c,l,u,new ye)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,c,l,u,new ye)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};vn.getNormal(mr,gr,_r,d.normal),h.face=d,h.barycoord=u}return h}class Je extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(v,m,p,S,y,_,L,E,P,I,b){const x=_/P,C=L/I,D=_/2,U=L/2,F=E/2,X=P+1,z=I+1;let K=0,W=0;const ne=new R;for(let de=0;de<z;de++){const J=de*C-U;for(let he=0;he<X;he++){const Ie=he*x-D;ne[v]=Ie*S,ne[m]=J*y,ne[p]=F,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(he/P),u.push(1-de/I),K+=1}}for(let de=0;de<I;de++)for(let J=0;J<P;J++){const he=d+J+X*de,Ie=d+J+X*(de+1),H=d+(J+1)+X*(de+1),Y=d+(J+1)+X*de;c.push(he,Ie,Y),c.push(Ie,H,Y),W+=6}a.addGroup(f,W,b),f+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=ms(i[t]);for(const s in n)e[s]=n[s]}return e}function Xd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Yd={clone:ms,merge:Ht};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Qs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eh extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new R,tl=new ye,nl=new ye;class hn extends Eh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class jd extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(es,ts,e,t);s.layers=this.layers,this.add(s);const r=new hn(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new hn(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new hn(es,ts,e,t);a.layers=this.layers,this.add(a);const c=new hn(es,ts,e,t);c.layers=this.layers,this.add(c);const l=new hn(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wh extends Wt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kd extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Je(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:si});r.uniforms.tEquirect.value=t;const o=new V(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=sn),new jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Lo=new R,Jd=new R,Zd=new Ze;class Si{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Lo.subVectors(n,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zd.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new uc,Sr=new R;class fc{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+S).normalize(),n[3].setComponents(c-o,d-h,m-g,_-S).normalize(),n[4].setComponents(c-a,d-u,m-v,_-y).normalize(),t===Gn)n[5].setComponents(c+a,d+u,m+v,_+y).normalize();else if(t===qr)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Sr.x=s.normal.x>0?e.max.x:e.min.x,Sr.y=s.normal.y>0?e.max.y:e.min.y,Sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qd(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Di extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let y=0;y<l;y++){const _=y*u-r;g.push(_,-S,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,_=S+l*(p+1),L=S+1+l*(p+1),E=S+1+l*p;f.push(y,_,E),f.push(_,L,E)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:cf,batching_pars_vertex:lf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:vf,clipping_planes_vertex:xf,color_fragment:yf,color_pars_fragment:Sf,color_pars_vertex:Mf,color_vertex:bf,common:Tf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Pf,colorspace_fragment:If,colorspace_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Nf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:qf,envmap_vertex:Of,fog_vertex:kf,fog_pars_vertex:zf,fog_fragment:Bf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:$f,lights_toon_pars_fragment:jf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Qf,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:vp,normal_fragment_maps:xp,normal_pars_fragment:yp,normal_pars_vertex:Sp,normal_vertex:Mp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Cp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Pp,project_vertex:Ip,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:kp,shadowmask_pars_fragment:zp,skinbase_vertex:Bp,skinning_pars_vertex:Vp,skinning_vertex:Gp,skinnormal_vertex:Hp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:Yp,tonemapping_pars_fragment:qp,transmission_fragment:$p,transmission_pars_fragment:jp,uv_pars_fragment:Kp,uv_pars_vertex:Jp,uv_vertex:Zp,worldpos_vertex:Qp,background_vert:e0,background_frag:t0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:o0,depth_frag:a0,distanceRGBA_vert:c0,distanceRGBA_frag:l0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:v0,meshmatcap_frag:x0,meshnormal_vert:y0,meshnormal_frag:S0,meshphong_vert:M0,meshphong_frag:b0,meshphysical_vert:T0,meshphysical_frag:E0,meshtoon_vert:w0,meshtoon_frag:C0,points_vert:A0,points_frag:R0,shadow_vert:P0,shadow_frag:I0,sprite_vert:L0,sprite_frag:D0},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},bn={basic:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Ht([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Ht([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Ht([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Ht([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Ht([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Ht([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Ht([Me.common,Me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Ht([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};bn.physical={uniforms:Ht([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Mr={r:0,b:0,g:0},_i=new wn,U0=new yt;function N0(i,e,t,n,s,r,o){const a=new et(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function v(S){let y=!1;const _=g(S);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===no)?(h===void 0&&(h=new V(new Je(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ms(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(y.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(_i)),h.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new V(new Di(2,2),new hi({name:"BackgroundMaterial",uniforms:ms(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Mr,Th(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m}}function F0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,C,D,U,F){let X=!1;const z=u(U,D,C);r!==z&&(r=z,l(r.object)),X=f(x,U,D,F),X&&g(x,U,D,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(x,C,D,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,D){const U=D.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let X=F[C.id];X===void 0&&(X={},F[C.id]=X);let z=X[U];return z===void 0&&(z=d(c()),X[U]=z),z}function d(x){const C=[],D=[],U=[];for(let F=0;F<t;F++)C[F]=0,D[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,C,D,U){const F=r.attributes,X=C.attributes;let z=0;const K=D.getAttributes();for(const W in K)if(K[W].location>=0){const de=F[W];let J=X[W];if(J===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),de===void 0||de.attribute!==J||J&&de.data!==J.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(x,C,D,U){const F={},X=C.attributes;let z=0;const K=D.getAttributes();for(const W in K)if(K[W].location>=0){let de=X[W];de===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));const J={};J.attribute=de,de&&de.data&&(J.data=de.data),F[W]=J,z++}r.attributes=F,r.attributesNum=z,r.index=U}function v(){const x=r.newAttributes;for(let C=0,D=x.length;C<D;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const D=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;D[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),F[x]!==C&&(i.vertexAttribDivisor(x,C),F[x]=C)}function S(){const x=r.newAttributes,C=r.enabledAttributes;for(let D=0,U=C.length;D<U;D++)C[D]!==x[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function y(x,C,D,U,F,X,z){z===!0?i.vertexAttribIPointer(x,C,D,F,X):i.vertexAttribPointer(x,C,D,U,F,X)}function _(x,C,D,U){v();const F=U.attributes,X=D.getAttributes(),z=C.defaultAttributeValues;for(const K in X){const W=X[K];if(W.location>=0){let ne=F[K];if(ne===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const de=ne.normalized,J=ne.itemSize,he=e.get(ne);if(he===void 0)continue;const Ie=he.buffer,H=he.type,Y=he.bytesPerElement,fe=H===i.INT||H===i.UNSIGNED_INT||ne.gpuType===rc;if(ne.isInterleavedBufferAttribute){const ie=ne.data,ce=ie.stride,G=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let ue=0;ue<W.locationSize;ue++)p(W.location+ue,ie.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ue=0;ue<W.locationSize;ue++)y(W.location+ue,J/W.locationSize,H,de,ce*Y,(G+J/W.locationSize*ue)*Y,fe)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)p(W.location+ie,ne.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<W.locationSize;ie++)m(W.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ie=0;ie<W.locationSize;ie++)y(W.location+ie,J/W.locationSize,H,de,J*Y,J/W.locationSize*ie*Y,fe)}}else if(z!==void 0){const de=z[K];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(W.location,de);break;case 3:i.vertexAttrib3fv(W.location,de);break;case 4:i.vertexAttrib4fv(W.location,de);break;default:i.vertexAttrib1fv(W.location,de)}}}}S()}function L(){I();for(const x in n){const C=n[x];for(const D in C){const U=C[D];for(const F in U)h(U[F].object),delete U[F];delete C[D]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const D in C){const U=C[D];for(const F in U)h(U[F].object),delete U[F];delete C[D]}delete n[x.id]}function P(x){for(const C in n){const D=n[C];if(D[x.id]===void 0)continue;const U=D[x.id];for(const F in U)h(U[F].object),delete U[F];delete D[x.id]}}function I(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function O0(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function k0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==xn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Xn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vn&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:E}}function z0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Si,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,y=S*4;let _=p.clippingState||null;c.value=_,_=h(g,d,y,f);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function B0(i){let e=new WeakMap;function t(o,a){return a===ca?o.mapping=hs:a===la&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===la)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Kd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ah extends Eh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,il=[.125,.215,.35,.446,.526,.582],Ti=20,Do=new Ah,sl=new et;let Uo=null,No=0,Fo=0,Oo=!1;const Mi=(1+Math.sqrt(5))/2,ns=1/Mi,rl=[new R(-Mi,ns,0),new R(Mi,ns,0),new R(-ns,0,Mi),new R(ns,0,Mi),new R(0,Mi,-ns),new R(0,Mi,ns),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,No,Fo),this._renderer.xr.enabled=Oo,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Js,format:xn,colorSpace:vs,depthBuffer:!1},s=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(r)),this._blurMaterial=G0(r,e,t)}return s}_compileMaterial(e){const t=new V(this._lodPlanes[0],e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,s){const a=new hn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sl),h.toneMapping=ri,h.autoClear=!1;const f=new Vt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new V(new Je,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(sl),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;br(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hs||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Do)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rl[(s-r-1)%rl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new V(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let S=0;for(let P=0;P<Ti;++P){const I=P/v,b=Math.exp(-I*I/2);p.push(b),P===0?S+=b:P<m&&(S+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[s],L=3*_*(s>y-ss?s-y+ss:0),E=4*(this._cubeSize-_);br(t,L,E,3*_,2*_),c.setRenderTarget(t),c.render(u,Do)}}function V0(i){const e=[],t=[],n=[];let s=i;const r=i-ss+1+il.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ss?c=il[o-i+ss-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const P=E%3*2/3-1,I=E>2?0:-1,b=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];S.set(b,v*g*E),y.set(d,m*g*E);const x=[E,E,E,E,E,E];_.set(x,p*g*E)}const L=new Zt;L.setAttribute("position",new En(S,v)),L.setAttribute("uv",new En(y,m)),L.setAttribute("faceIndex",new En(_,p)),e.push(L),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(i,e,t){const n=new Li(i,e,t);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function G0(i,e,t){const n=new Float32Array(Ti),s=new R(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function al(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function cl(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ca||c===la,h=c===hs||c===us;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ka(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ka(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function W0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let y=0,_=S.length;y<_;y+=3){const L=S[y+0],E=S[y+1],P=S[y+2];d.push(L,E,E,P,P,L)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const L=y+0,E=y+1,P=y+2;d.push(L,E,E,P,P,L)}}else return;const m=new(_h(d)?bh:Mh)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Y0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*v[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function q0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,e,t){const n=new WeakMap,s=new bt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,E=1;L>e.maxTextureSize&&(E=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*E*4*u),I=new xh(P,L,E,u);I.type=Vn,I.needsUpdate=!0;const b=_*4;for(let C=0;C<u;C++){const D=p[C],U=S[C],F=y[C],X=L*E*4*C;for(let z=0;z<D.count;z++){const K=z*b;g===!0&&(s.fromBufferAttribute(D,z),P[X+K+0]=s.x,P[X+K+1]=s.y,P[X+K+2]=s.z,P[X+K+3]=0),v===!0&&(s.fromBufferAttribute(U,z),P[X+K+4]=s.x,P[X+K+5]=s.y,P[X+K+6]=s.z,P[X+K+7]=0),m===!0&&(s.fromBufferAttribute(F,z),P[X+K+8]=s.x,P[X+K+9]=s.y,P[X+K+10]=s.z,P[X+K+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ye(L,E)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function j0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Rh extends Wt{constructor(e,t,n,s,r,o,a,c,l,h=os){if(h!==os&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Ii),n===void 0&&h===ps&&(n=fs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ph=new Wt,ll=new Rh(1,1),Ih=new xh,Lh=new Ud,Dh=new wh,hl=[],ul=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hl[s];if(r===void 0&&(r=new Float32Array(s),hl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function so(i,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),Pt(t,n)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),Pt(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),Pt(t,n)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ll.compareFunction=gh,r=ll):r=Ph,t.setTexture2D(e||r,s)}function dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lh,s)}function fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dh,s)}function pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ih,s)}function mm(i){switch(i){case 5126:return K0;case 35664:return J0;case 35665:return Z0;case 35666:return Q0;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return am;case 36294:return cm;case 36295:return lm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(i,e){i.uniform1fv(this.addr,e)}function _m(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function vm(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function xm(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function ym(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sm(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mm(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bm(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function Em(i,e){i.uniform3iv(this.addr,e)}function wm(i,e){i.uniform4iv(this.addr,e)}function Cm(i,e){i.uniform1uiv(this.addr,e)}function Am(i,e){i.uniform2uiv(this.addr,e)}function Rm(i,e){i.uniform3uiv(this.addr,e)}function Pm(i,e){i.uniform4uiv(this.addr,e)}function Im(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ph,r[o])}function Lm(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lh,r[o])}function Dm(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dh,r[o])}function Um(i,e,t){const n=this.cache,s=e.length,r=so(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ih,r[o])}function Nm(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return xm;case 35674:return ym;case 35675:return Sm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return wm;case 5125:return Cm;case 36294:return Am;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function ml(i,e){i.seq.push(e),i.map[e.id]=e}function zm(i,e,t){const n=i.name,s=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),o=ko.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ml(t,l===void 0?new Fm(a,i,e):new Om(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new km(a),ml(t,u)),t=u}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bm=37297;let Vm=0;function Gm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _l=new Ze;function Hm(i){nt._getMatrix(_l,nt.workingColorSpace,i);const e=`mat3( ${_l.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case io:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gm(i.getShaderSource(e),o)}else return s}function Wm(i,e){const t=Hm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xm(i,e){let t;switch(e){case cd:t="Linear";break;case ld:t="Reinhard";break;case hd:t="Cineon";break;case ih:t="ACESFilmic";break;case dd:t="AgX";break;case fd:t="Neutral";break;case ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new R;function Ym(){nt.getLuminanceCoefficients(Tr);const i=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function $m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Us(i){return i!==""}function xl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(Km,Zm)}const Jm=new Map;function Zm(i,e){let t=Qe[e];if(t===void 0){const n=Jm.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(Qm,eg)}function eg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nh:e="ENVMAP_BLENDING_MULTIPLY";break;case od:e="ENVMAP_BLENDING_MIX";break;case ad:e="ENVMAP_BLENDING_ADD";break}return e}function rg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function og(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tg(t),l=ng(t),h=ig(t),u=sg(t),d=rg(t),f=qm(t),g=$m(r),v=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ri?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),Ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=za(o),o=xl(o,t),o=yl(o,t),a=za(a),a=xl(a,t),a=yl(a,t),o=Sl(o),a=Sl(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,_=S+p+a,L=gl(s,s.VERTEX_SHADER,y),E=gl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,L),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(L).trim(),F=s.getShaderInfoLog(E).trim();let X=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,E);else{const K=vl(s,L,"vertex"),W=vl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+K+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||F==="")&&(z=!1);z&&(C.diagnostics={runnable:X,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(L),s.deleteShader(E),I=new Br(s,v),b=jm(s,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Bm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=E,this}let ag=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lg(e),t.set(e,n)),n}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function hg(i,e,t,n,s,r,o){const a=new dc,c=new cg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,C,D,U){const F=D.fog,X=U.geometry,z=b.isMeshStandardMaterial?D.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),W=K&&K.mapping===no?K.image.height:null,ne=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=de!==void 0?de.length:0;let he=0;X.morphAttributes.position!==void 0&&(he=1),X.morphAttributes.normal!==void 0&&(he=2),X.morphAttributes.color!==void 0&&(he=3);let Ie,H,Y,fe;if(ne){const tt=bn[ne];Ie=tt.vertexShader,H=tt.fragmentShader}else Ie=b.vertexShader,H=b.fragmentShader,c.update(b),Y=c.getVertexShaderID(b),fe=c.getFragmentShaderID(b);const ie=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),G=U.isInstancedMesh===!0,ue=U.isBatchedMesh===!0,Ue=!!b.map,te=!!b.matcap,q=!!K,A=!!b.aoMap,xe=!!b.lightMap,oe=!!b.bumpMap,pe=!!b.normalMap,ae=!!b.displacementMap,Se=!!b.emissiveMap,ge=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,Q=b.dispersion>0,re=b.iridescence>0,ee=b.sheen>0,Pe=b.transmission>0,ve=M&&!!b.anisotropyMap,Te=B&&!!b.clearcoatMap,qe=B&&!!b.clearcoatNormalMap,le=B&&!!b.clearcoatRoughnessMap,_e=re&&!!b.iridescenceMap,Re=re&&!!b.iridescenceThicknessMap,Le=ee&&!!b.sheenColorMap,Ce=ee&&!!b.sheenRoughnessMap,$e=!!b.specularMap,We=!!b.specularColorMap,rt=!!b.specularIntensityMap,N=Pe&&!!b.transmissionMap,be=Pe&&!!b.thicknessMap,Z=!!b.gradientMap,se=!!b.alphaMap,we=b.alphaTest>0,Ee=!!b.alphaHash,He=!!b.extensions;let ht=ri;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Tt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:H,defines:b.defines,customVertexShaderID:Y,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ue,batchingColor:ue&&U._colorsTexture!==null,instancing:G,instancingColor:G&&U.instanceColor!==null,instancingMorph:G&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:vs,alphaToCoverage:!!b.alphaToCoverage,map:Ue,matcap:te,envMap:q,envMapMode:q&&K.mapping,envMapCubeUVHeight:W,aoMap:A,lightMap:xe,bumpMap:oe,normalMap:pe,displacementMap:d&&ae,emissiveMap:Se,normalMapObjectSpace:pe&&b.normalMapType===_d,normalMapTangentSpace:pe&&b.normalMapType===mh,metalnessMap:ge,roughnessMap:w,anisotropy:M,anisotropyMap:ve,clearcoat:B,clearcoatMap:Te,clearcoatNormalMap:qe,clearcoatRoughnessMap:le,dispersion:Q,iridescence:re,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:ee,sheenColorMap:Le,sheenRoughnessMap:Ce,specularMap:$e,specularColorMap:We,specularIntensityMap:rt,transmission:Pe,transmissionMap:N,thicknessMap:be,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:we,alphaHash:Ee,combine:b.combine,mapUv:Ue&&v(b.map.channel),aoMapUv:A&&v(b.aoMap.channel),lightMapUv:xe&&v(b.lightMap.channel),bumpMapUv:oe&&v(b.bumpMap.channel),normalMapUv:pe&&v(b.normalMap.channel),displacementMapUv:ae&&v(b.displacementMap.channel),emissiveMapUv:Se&&v(b.emissiveMap.channel),metalnessMapUv:ge&&v(b.metalnessMap.channel),roughnessMapUv:w&&v(b.roughnessMap.channel),anisotropyMapUv:ve&&v(b.anisotropyMap.channel),clearcoatMapUv:Te&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(b.sheenRoughnessMap.channel),specularMapUv:$e&&v(b.specularMap.channel),specularColorMapUv:We&&v(b.specularColorMap.channel),specularIntensityMapUv:rt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:be&&v(b.thicknessMap.channel),alphaMapUv:se&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(pe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Ue||se),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ce,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:he,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ue&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tn,flipSided:b.side===Ft,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)x.push(C),x.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(S(x,b),y(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function S(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function y(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const x=g[b.type];let C;if(x){const D=bn[x];C=Yd.clone(D.uniforms)}else C=b.uniforms;return C}function L(b,x){let C;for(let D=0,U=h.length;D<U;D++){const F=h[D];if(F.cacheKey===x){C=F,++C.usedTimes;break}}return C===void 0&&(C=new og(i,x,b,r),h.push(C)),C}function E(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:I}}function ug(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||dg),n.length>1&&n.sort(d||bl),s.length>1&&s.sort(d||bl)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function fg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Tl,i.set(n,[o])):s>=r.length?(o=new Tl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new et};break;case"SpotLight":t={position:new R,direction:new R,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vg(i){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new yt,o=new yt;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,y=0,_=0,L=0,E=0,P=0;l.sort(_g);for(let b=0,x=l.length;b<x;b++){const C=l[b],D=C.color,U=C.intensity,F=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],U);P++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(D).multiplyScalar(U),z.distance=F,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const K=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,K.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[v]=K.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=X,_++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(D).multiplyScalar(U),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const K=C.shadow,W=t.get(C);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(U),z.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==L||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=L,I.numLightProbes=P,n.version=gg++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function El(i){const e=new vg(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new El(i),e.set(s,[a])):r>=o.length?(a=new El(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class yg extends Qs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends Qs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tg(i,e,t){let n=new fc;const s=new ye,r=new ye,o=new bt,a=new yg({depthPacking:gd}),c=new Sg,l={},h=t.maxTextureSize,u={[li]:Ft,[Ft]:li,[Tn]:Tn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Mg,fragmentShader:bg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new V(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let p=this.type;this.render=function(E,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(si),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=p!==Nn&&this.type===Nn,F=p===Nn&&this.type!==Nn;for(let X=0,z=E.length;X<z;X++){const K=E[X],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ne=W.getFrameExtents();if(s.multiply(ne),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,W.mapSize.y=r.y)),W.map===null||U===!0||F===!0){const J=this.type!==Nn?{minFilter:yn,magFilter:yn}:{};W.map!==null&&W.map.dispose(),W.map=new Li(s.x,s.y,J),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const de=W.getViewportCount();for(let J=0;J<de;J++){const he=W.getViewport(J);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),D.viewport(o),W.updateMatrices(K,J),n=W.getFrustum(),_(P,I,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Nn&&S(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,C)};function S(E,P){const I=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Li(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,I,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,I,f,v,null)}function y(E,P,I,b){let x=null;const C=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)x=C;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const D=x.uuid,U=P.uuid;let F=l[D];F===void 0&&(F={},l[D]=F);let X=F[U];X===void 0&&(X=x.clone(),F[U]=X,P.addEventListener("dispose",L)),x=X}if(x.visible=P.visible,x.wireframe=P.wireframe,b===Nn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=I}return x}function _(E,P,I,b,x){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const U=e.update(E),F=E.material;if(Array.isArray(F)){const X=U.groups;for(let z=0,K=X.length;z<K;z++){const W=X[z],ne=F[W.materialIndex];if(ne&&ne.visible){const de=y(E,ne,b,x);E.onBeforeShadow(i,E,P,I,U,de,W),i.renderBufferDirect(I,null,U,de,E,W),E.onAfterShadow(i,E,P,I,U,de,W)}}}else if(F.visible){const X=y(E,F,b,x);E.onBeforeShadow(i,E,P,I,U,X,null),i.renderBufferDirect(I,null,U,X,E,null),E.onAfterShadow(i,E,P,I,U,X,null)}}const D=E.children;for(let U=0,F=D.length;U<F;U++)_(D[U],P,I,b,x)}function L(E){E.target.removeEventListener("dispose",L);for(const I in l){const b=l[I],x=E.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const Eg={[ta]:na,[ia]:oa,[sa]:aa,[ls]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:ls};function wg(i,e){function t(){let N=!1;const be=new bt;let Z=null;const se=new bt(0,0,0,0);return{setMask:function(we){Z!==we&&!N&&(i.colorMask(we,we,we,we),Z=we)},setLocked:function(we){N=we},setClear:function(we,Ee,He,ht,Tt){Tt===!0&&(we*=ht,Ee*=ht,He*=ht),be.set(we,Ee,He,ht),se.equals(be)===!1&&(i.clearColor(we,Ee,He,ht),se.copy(be))},reset:function(){N=!1,Z=null,se.set(-1,0,0,0)}}}function n(){let N=!1,be=!1,Z=null,se=null,we=null;return{setReversed:function(Ee){if(be!==Ee){const He=e.get("EXT_clip_control");be?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const ht=we;we=null,this.setClear(ht)}be=Ee},getReversed:function(){return be},setTest:function(Ee){Ee?ie(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Ee){Z!==Ee&&!N&&(i.depthMask(Ee),Z=Ee)},setFunc:function(Ee){if(be&&(Ee=Eg[Ee]),se!==Ee){switch(Ee){case ta:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){we!==Ee&&(be&&(Ee=1-Ee),i.clearDepth(Ee),we=Ee)},reset:function(){N=!1,Z=null,se=null,we=null,be=!1}}}function s(){let N=!1,be=null,Z=null,se=null,we=null,Ee=null,He=null,ht=null,Tt=null;return{setTest:function(tt){N||(tt?ie(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(tt){be!==tt&&!N&&(i.stencilMask(tt),be=tt)},setFunc:function(tt,Qt,Lt){(Z!==tt||se!==Qt||we!==Lt)&&(i.stencilFunc(tt,Qt,Lt),Z=tt,se=Qt,we=Lt)},setOp:function(tt,Qt,Lt){(Ee!==tt||He!==Qt||ht!==Lt)&&(i.stencilOp(tt,Qt,Lt),Ee=tt,He=Qt,ht=Lt)},setLocked:function(tt){N=tt},setClear:function(tt){Tt!==tt&&(i.clearStencil(tt),Tt=tt)},reset:function(){N=!1,be=null,Z=null,se=null,we=null,Ee=null,He=null,ht=null,Tt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,y=null,_=null,L=null,E=null,P=new et(0,0,0),I=0,b=!1,x=null,C=null,D=null,U=null,F=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=K>=2);let ne=null,de={};const J=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Ie=new bt().fromArray(J),H=new bt().fromArray(he);function Y(N,be,Z,se){const we=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(N,Ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Z;He++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(be+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ee}const fe={};fe[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(ls),oe(!1),pe(Ic),ie(i.CULL_FACE),A(si);function ie(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ce(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function G(N,be){return u[N]!==be?(i.bindFramebuffer(N,be),u[N]=be,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=be),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ue(N,be){let Z=f,se=!1;if(N){Z=d.get(be),Z===void 0&&(Z=[],d.set(be,Z));const we=N.textures;if(Z.length!==we.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,He=we.length;Ee<He;Ee++)Z[Ee]=i.COLOR_ATTACHMENT0+Ee;Z.length=we.length,se=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,se=!0);se&&i.drawBuffers(Z)}function Ue(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const te={[bi]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[Wu]:i.FUNC_REVERSE_SUBTRACT};te[Xu]=i.MIN,te[Yu]=i.MAX;const q={[qu]:i.ZERO,[$u]:i.ONE,[ju]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[td]:i.SRC_ALPHA_SATURATE,[Qu]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function A(N,be,Z,se,we,Ee,He,ht,Tt,tt){if(N===si){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),N!==Gu){if(N!==m||tt!==b){if((p!==bi||_!==bi)&&(i.blendEquation(i.FUNC_ADD),p=bi,_=bi),tt)switch(N){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,y=null,L=null,E=null,P.set(0,0,0),I=0,m=N,b=tt}return}we=we||be,Ee=Ee||Z,He=He||se,(be!==p||we!==_)&&(i.blendEquationSeparate(te[be],te[we]),p=be,_=we),(Z!==S||se!==y||Ee!==L||He!==E)&&(i.blendFuncSeparate(q[Z],q[se],q[Ee],q[He]),S=Z,y=se,L=Ee,E=He),(ht.equals(P)===!1||Tt!==I)&&(i.blendColor(ht.r,ht.g,ht.b,Tt),P.copy(ht),I=Tt),m=N,b=!1}function xe(N,be){N.side===Tn?ce(i.CULL_FACE):ie(i.CULL_FACE);let Z=N.side===Ft;be&&(Z=!Z),oe(Z),N.blending===Ai&&N.transparent===!1?A(si):A(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const se=N.stencilWrite;a.setTest(se),se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function pe(N){N!==Bu?(ie(i.CULL_FACE),N!==C&&(N===Ic?i.cullFace(i.BACK):N===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),C=N}function ae(N){N!==D&&(z&&i.lineWidth(N),D=N)}function Se(N,be,Z){N?(ie(i.POLYGON_OFFSET_FILL),(U!==be||F!==Z)&&(i.polygonOffset(be,Z),U=be,F=Z)):ce(i.POLYGON_OFFSET_FILL)}function ge(N){N?ie(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+X-1),ne!==N&&(i.activeTexture(N),ne=N)}function M(N,be,Z){Z===void 0&&(ne===null?Z=i.TEXTURE0+X-1:Z=ne);let se=de[Z];se===void 0&&(se={type:void 0,texture:void 0},de[Z]=se),(se.type!==N||se.texture!==be)&&(ne!==Z&&(i.activeTexture(Z),ne=Z),i.bindTexture(N,be||fe[N]),se.type=N,se.texture=be)}function B(){const N=de[ne];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){Ie.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ie.copy(N))}function Ce(N){H.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function $e(N,be){let Z=l.get(be);Z===void 0&&(Z=new WeakMap,l.set(be,Z));let se=Z.get(N);se===void 0&&(se=i.getUniformBlockIndex(be,N.name),Z.set(N,se))}function We(N,be){const se=l.get(be).get(N);c.get(be)!==se&&(i.uniformBlockBinding(be,se,N.__bindingPointIndex),c.set(be,se))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,de={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,y=null,_=null,L=null,E=null,P=new et(0,0,0),I=0,b=!1,x=null,C=null,D=null,U=null,F=null,Ie.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:ce,bindFramebuffer:G,drawBuffers:ue,useProgram:Ue,setBlending:A,setMaterial:xe,setFlipSided:oe,setCullFace:pe,setLineWidth:ae,setPolygonOffset:Se,setScissorTest:ge,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:re,texImage2D:_e,texImage3D:Re,updateUBOMapping:$e,uniformBlockBinding:We,texStorage2D:qe,texStorage3D:le,texSubImage2D:ee,texSubImage3D:Pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:Le,viewport:Ce,reset:rt}}function wl(i,e,t,n){const s=Cg(n);switch(t){case ch:return i*e;case hh:return i*e;case uh:return i*e*2;case dh:return i*e/s.components*s.byteLength;case cc:return i*e/s.components*s.byteLength;case fh:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case lh:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case hc:return i*e*4/s.components*s.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(e,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zr:case La:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ph:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Na:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cg(i){switch(i){case Xn:case rh:return{byteLength:1,components:1};case Ws:case oh:case Js:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Ii:case rc:case Vn:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ag(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):$r("canvas")}function v(w,M,B){let Q=1;const re=ge(w);if((re.width>B||re.height>B)&&(Q=B/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ee=Math.floor(Q*re.width),Pe=Math.floor(Q*re.height);u===void 0&&(u=g(ee,Pe));const ve=M?g(ee,Pe):u;return ve.width=ee,ve.height=Pe,ve.getContext("2d").drawImage(w,0,0,ee,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Pe+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,B,Q,re=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=M;if(M===i.RED&&(B===i.FLOAT&&(ee=i.R32F),B===i.HALF_FLOAT&&(ee=i.R16F),B===i.UNSIGNED_BYTE&&(ee=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.R8UI),B===i.UNSIGNED_SHORT&&(ee=i.R16UI),B===i.UNSIGNED_INT&&(ee=i.R32UI),B===i.BYTE&&(ee=i.R8I),B===i.SHORT&&(ee=i.R16I),B===i.INT&&(ee=i.R32I)),M===i.RG&&(B===i.FLOAT&&(ee=i.RG32F),B===i.HALF_FLOAT&&(ee=i.RG16F),B===i.UNSIGNED_BYTE&&(ee=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.RG8UI),B===i.UNSIGNED_SHORT&&(ee=i.RG16UI),B===i.UNSIGNED_INT&&(ee=i.RG32UI),B===i.BYTE&&(ee=i.RG8I),B===i.SHORT&&(ee=i.RG16I),B===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),B===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),B===i.UNSIGNED_INT&&(ee=i.RGB32UI),B===i.BYTE&&(ee=i.RGB8I),B===i.SHORT&&(ee=i.RGB16I),B===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),B===i.UNSIGNED_INT&&(ee=i.RGBA32UI),B===i.BYTE&&(ee=i.RGBA8I),B===i.SHORT&&(ee=i.RGBA16I),B===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),M===i.RGBA){const Pe=re?io:nt.getTransfer(Q);B===i.FLOAT&&(ee=i.RGBA32F),B===i.HALF_FLOAT&&(ee=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ee=Pe===ct?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(w,M){let B;return w?M===null||M===Ii||M===fs?B=i.DEPTH24_STENCIL8:M===Vn?B=i.DEPTH32F_STENCIL8:M===Ws&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ii||M===fs?B=i.DEPTH_COMPONENT24:M===Vn?B=i.DEPTH_COMPONENT32F:M===Ws&&(B=i.DEPTH_COMPONENT16),B}function L(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==yn&&w.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){const M=w.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&h.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),x(M)}function I(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,Q=d.get(B);if(Q){const re=Q[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(w),Object.keys(Q).length===0&&d.delete(B)}n.remove(w)}function b(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const B=w.source,Q=d.get(B);delete Q[M.__cacheKey],o.memory.textures--}function x(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let re=0;re<M.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(M.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let Q=0,re=B.length;Q<re;Q++){const ee=n.get(B[Q]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(B[Q])}n.remove(w)}let C=0;function D(){C=0}function U(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function F(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function X(w,M){const B=n.get(w);if(w.isVideoTexture&&ae(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(B,w,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function z(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){H(B,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function K(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){H(B,w,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function W(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){Y(B,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const ne={[ds]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},de={[yn]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},J={[vd]:i.NEVER,[Td]:i.ALWAYS,[xd]:i.LESS,[gh]:i.LEQUAL,[yd]:i.EQUAL,[bd]:i.GEQUAL,[Sd]:i.GREATER,[Md]:i.NOTEQUAL};function he(w,M){if(M.type===Vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===lo||M.magFilter===sr||M.magFilter===ni||M.minFilter===sn||M.minFilter===lo||M.minFilter===sr||M.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ne[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ne[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ne[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,de[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==sr&&M.minFilter!==ni||M.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",E));const Q=M.source;let re=d.get(Q);re===void 0&&(re={},d.set(Q,re));const ee=F(M);if(ee!==w.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),re[ee].usedTimes++;const Pe=re[w.__cacheKey];Pe!==void 0&&(re[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(M)),w.__cacheKey=ee,w.__webglTexture=re[ee].texture}return B}function H(w,M,B){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const re=Ie(w,M),ee=M.source;t.bindTexture(Q,w.__webglTexture,i.TEXTURE0+B);const Pe=n.get(ee);if(ee.version!==Pe.__version||re===!0){t.activeTexture(i.TEXTURE0+B);const ve=nt.getPrimaries(nt.workingColorSpace),Te=M.colorSpace===kn?null:nt.getPrimaries(M.colorSpace),qe=M.colorSpace===kn||ve===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=v(M.image,!1,s.maxTextureSize);le=Se(M,le);const _e=r.convert(M.format,M.colorSpace),Re=r.convert(M.type);let Le=y(M.internalFormat,_e,Re,M.colorSpace,M.isVideoTexture);he(Q,M);let Ce;const $e=M.mipmaps,We=M.isVideoTexture!==!0,rt=Pe.__version===void 0||re===!0,N=ee.dataReady,be=L(M,le);if(M.isDepthTexture)Le=_(M.format===ps,M.type),rt&&(We?t.texStorage2D(i.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,_e,Re,null));else if(M.isDataTexture)if($e.length>0){We&&rt&&t.texStorage2D(i.TEXTURE_2D,be,Le,$e[0].width,$e[0].height);for(let Z=0,se=$e.length;Z<se;Z++)Ce=$e[Z],We?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,_e,Re,Ce.data):t.texImage2D(i.TEXTURE_2D,Z,Le,Ce.width,Ce.height,0,_e,Re,Ce.data);M.generateMipmaps=!1}else We?(rt&&t.texStorage2D(i.TEXTURE_2D,be,Le,le.width,le.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,_e,Re,le.data)):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,_e,Re,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Le,$e[0].width,$e[0].height,le.depth);for(let Z=0,se=$e.length;Z<se;Z++)if(Ce=$e[Z],M.format!==xn)if(_e!==null)if(We){if(N)if(M.layerUpdates.size>0){const we=wl(Ce.width,Ce.height,M.format,M.type);for(const Ee of M.layerUpdates){const He=Ce.data.subarray(Ee*we/Ce.data.BYTES_PER_ELEMENT,(Ee+1)*we/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ee,Ce.width,Ce.height,1,_e,He)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,le.depth,_e,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Le,Ce.width,Ce.height,le.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,le.depth,_e,Re,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Le,Ce.width,Ce.height,le.depth,0,_e,Re,Ce.data)}else{We&&rt&&t.texStorage2D(i.TEXTURE_2D,be,Le,$e[0].width,$e[0].height);for(let Z=0,se=$e.length;Z<se;Z++)Ce=$e[Z],M.format!==xn?_e!==null?We?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,_e,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,_e,Re,Ce.data):t.texImage2D(i.TEXTURE_2D,Z,Le,Ce.width,Ce.height,0,_e,Re,Ce.data)}else if(M.isDataArrayTexture)if(We){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Le,le.width,le.height,le.depth),N)if(M.layerUpdates.size>0){const Z=wl(le.width,le.height,M.format,M.type);for(const se of M.layerUpdates){const we=le.data.subarray(se*Z/le.data.BYTES_PER_ELEMENT,(se+1)*Z/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,_e,Re,we)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Re,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,_e,Re,le.data);else if(M.isData3DTexture)We?(rt&&t.texStorage3D(i.TEXTURE_3D,be,Le,le.width,le.height,le.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Re,le.data)):t.texImage3D(i.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,_e,Re,le.data);else if(M.isFramebufferTexture){if(rt)if(We)t.texStorage2D(i.TEXTURE_2D,be,Le,le.width,le.height);else{let Z=le.width,se=le.height;for(let we=0;we<be;we++)t.texImage2D(i.TEXTURE_2D,we,Le,Z,se,0,_e,Re,null),Z>>=1,se>>=1}}else if($e.length>0){if(We&&rt){const Z=ge($e[0]);t.texStorage2D(i.TEXTURE_2D,be,Le,Z.width,Z.height)}for(let Z=0,se=$e.length;Z<se;Z++)Ce=$e[Z],We?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,_e,Re,Ce):t.texImage2D(i.TEXTURE_2D,Z,Le,_e,Re,Ce);M.generateMipmaps=!1}else if(We){if(rt){const Z=ge(le);t.texStorage2D(i.TEXTURE_2D,be,Le,Z.width,Z.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Re,le)}else t.texImage2D(i.TEXTURE_2D,0,Le,_e,Re,le);m(M)&&p(Q),Pe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Y(w,M,B){if(M.image.length!==6)return;const Q=Ie(w,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const ee=n.get(re);if(re.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const Pe=nt.getPrimaries(nt.workingColorSpace),ve=M.colorSpace===kn?null:nt.getPrimaries(M.colorSpace),Te=M.colorSpace===kn||Pe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!qe&&!le?_e[se]=v(M.image[se],!0,s.maxCubemapSize):_e[se]=le?M.image[se].image:M.image[se],_e[se]=Se(M,_e[se]);const Re=_e[0],Le=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),$e=y(M.internalFormat,Le,Ce,M.colorSpace),We=M.isVideoTexture!==!0,rt=ee.__version===void 0||Q===!0,N=re.dataReady;let be=L(M,Re);he(i.TEXTURE_CUBE_MAP,M);let Z;if(qe){We&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,$e,Re.width,Re.height);for(let se=0;se<6;se++){Z=_e[se].mipmaps;for(let we=0;we<Z.length;we++){const Ee=Z[we];M.format!==xn?Le!==null?We?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,$e,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Ee.width,Ee.height,Le,Ce,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,$e,Ee.width,Ee.height,0,Le,Ce,Ee.data)}}}else{if(Z=M.mipmaps,We&&rt){Z.length>0&&be++;const se=ge(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,$e,se.width,se.height)}for(let se=0;se<6;se++)if(le){We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,Le,Ce,_e[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,_e[se].width,_e[se].height,0,Le,Ce,_e[se].data);for(let we=0;we<Z.length;we++){const He=Z[we].image[se].image;We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,He.width,He.height,Le,Ce,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,$e,He.width,He.height,0,Le,Ce,He.data)}}else{We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Ce,_e[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Le,Ce,_e[se]);for(let we=0;we<Z.length;we++){const Ee=Z[we];We?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Le,Ce,Ee.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,$e,Le,Ce,Ee.image[se])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),ee.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function fe(w,M,B,Q,re,ee){const Pe=r.convert(B.format,B.colorSpace),ve=r.convert(B.type),Te=y(B.internalFormat,Pe,ve,B.colorSpace),qe=n.get(M),le=n.get(B);if(le.__renderTarget=M,!qe.__hasExternalTextures){const _e=Math.max(1,M.width>>ee),Re=Math.max(1,M.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Te,_e,Re,M.depth,0,Pe,ve,null):t.texImage2D(re,ee,Te,_e,Re,0,Pe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,re,le.__webglTexture,0,oe(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,re,le.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const Q=M.depthTexture,re=Q&&Q.isDepthTexture?Q.type:null,ee=_(M.stencilBuffer,re),Pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=oe(M);pe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ee,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ee,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,w)}else{const Q=M.textures;for(let re=0;re<Q.length;re++){const ee=Q[re],Pe=r.convert(ee.format,ee.colorSpace),ve=r.convert(ee.type),Te=y(ee.internalFormat,Pe,ve,ee.colorSpace),qe=oe(M);B&&pe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Te,M.width,M.height):pe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Te,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const re=Q.__webglTexture,ee=oe(M);if(M.depthTexture.format===os)pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(M.depthTexture.format===ps)pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function G(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",re)};Q.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=Q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),ie(M.__webglDepthbuffer[Q],w,!1);else{const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ie(M.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(w,M,B){const Q=n.get(w);M!==void 0&&fe(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&G(w)}function Ue(w){const M=w.texture,B=n.get(w),Q=n.get(M);w.addEventListener("dispose",P);const re=w.textures,ee=w.isWebGLCubeRenderTarget===!0,Pe=re.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++),ee){B.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ve]=[];for(let Te=0;Te<M.mipmaps.length;Te++)B.__webglFramebuffer[ve][Te]=i.createFramebuffer()}else B.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)B.__webglFramebuffer[ve]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ve=0,Te=re.length;ve<Te;ve++){const qe=n.get(re[ve]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&pe(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<re.length;ve++){const Te=re[ve];B.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);const qe=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),_e=y(Te.internalFormat,qe,le,Te.colorSpace,w.isXRRenderTarget===!0),Re=oe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,_e,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),he(i.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)fe(B.__webglFramebuffer[ve][Te],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else fe(B.__webglFramebuffer[ve],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,Te=re.length;ve<Te;ve++){const qe=re[ve],le=n.get(qe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),he(i.TEXTURE_2D,qe),fe(B.__webglFramebuffer,w,qe,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),m(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Q.__webglTexture),he(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)fe(B.__webglFramebuffer[Te],w,M,i.COLOR_ATTACHMENT0,ve,Te);else fe(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ve,0);m(M)&&p(ve),t.unbindTexture()}w.depthBuffer&&G(w)}function te(w){const M=w.textures;for(let B=0,Q=M.length;B<Q;B++){const re=M[B];if(m(re)){const ee=S(w),Pe=n.get(re).__webglTexture;t.bindTexture(ee,Pe),p(ee),t.unbindTexture()}}}const q=[],A=[];function xe(w){if(w.samples>0){if(pe(w)===!1){const M=w.textures,B=w.width,Q=w.height;let re=i.COLOR_BUFFER_BIT;const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(w),ve=M.length>1;if(ve)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Te]);const qe=n.get(M[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,re,i.NEAREST),c===!0&&(q.length=0,A.length=0,q.push(i.COLOR_ATTACHMENT0+Te),w.depthBuffer&&w.resolveDepthBuffer===!1&&(q.push(ee),A.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Te]);const qe=n.get(M[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function oe(w){return Math.min(s.maxSamples,w.samples)}function pe(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Se(w,M){const B=w.colorSpace,Q=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==vs&&B!==kn&&(nt.getTransfer(B)===ct?(Q!==xn||re!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function ge(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=ue,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=pe}function Rg(i,e){function t(n,s=kn){let r;const o=nt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.BYTE;if(n===oh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Js)return i.HALF_FLOAT;if(n===ch)return i.ALPHA;if(n===lh)return i.RGB;if(n===xn)return i.RGBA;if(n===hh)return i.LUMINANCE;if(n===uh)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===fh)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Or||n===kr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===xa||n===ya||n===Sa||n===Ma||n===ba||n===Ta||n===Ea||n===wa||n===Ca||n===Aa||n===Ra||n===Pa||n===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zr||n===La||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zr)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Ua||n===Na||n===Fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Pg extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends xs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Ug,m=t.getContextAttributes();let p=null,S=null;const y=[],_=[],L=new ye;let E=null;const P=new hn;P.viewport=new bt;const I=new hn;I.viewport=new bt;const b=[P,I],x=new Pg;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=y[H];return Y===void 0&&(Y=new zo,y[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=y[H];return Y===void 0&&(Y=new zo,y[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=y[H];return Y===void 0&&(Y=new zo,y[H]=Y),Y.getHandSpace()};function U(H){const Y=_.indexOf(H.inputSource);if(Y===-1)return;const fe=y[Y];fe!==void 0&&(fe.update(H.inputSource,H.frame,l||o),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let H=0;H<y.length;H++){const Y=_[H];Y!==null&&(_[H]=null,y[H].disconnect(Y))}C=null,D=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Li(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,fe=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?ps:os,fe=m.stencil?fs:Ii);const ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Li(d.textureWidth,d.textureHeight,{format:xn,type:Xn,depthTexture:new Rh(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(H){for(let Y=0;Y<H.removed.length;Y++){const fe=H.removed[Y],ie=_.indexOf(fe);ie>=0&&(_[ie]=null,y[ie].disconnect(fe))}for(let Y=0;Y<H.added.length;Y++){const fe=H.added[Y];let ie=_.indexOf(fe);if(ie===-1){for(let G=0;G<y.length;G++)if(G>=_.length){_.push(fe),ie=G;break}else if(_[G]===null){_[G]=fe,ie=G;break}if(ie===-1)break}const ce=y[ie];ce&&ce.connect(fe)}}const z=new R,K=new R;function W(H,Y,fe){z.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const ie=z.distanceTo(K),ce=Y.projectionMatrix.elements,G=fe.projectionMatrix.elements,ue=ce[14]/(ce[10]-1),Ue=ce[14]/(ce[10]+1),te=(ce[9]+1)/ce[5],q=(ce[9]-1)/ce[5],A=(ce[8]-1)/ce[0],xe=(G[8]+1)/G[0],oe=ue*A,pe=ue*xe,ae=ie/(-A+xe),Se=ae*-A;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Se),H.translateZ(ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ce[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ge=ue+ae,w=Ue+ae,M=oe-Se,B=pe+(ie-Se),Q=te*Ue/w*ge,re=q*Ue/w*ge;H.projectionMatrix.makePerspective(M,B,Q,re,ge,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ne(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Y=H.near,fe=H.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),x.near=I.near=P.near=Y,x.far=I.far=P.far=fe,(C!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,D=x.far),P.layers.mask=H.layers.mask|2,I.layers.mask=H.layers.mask|4,x.layers.mask=P.layers.mask|I.layers.mask;const ie=H.parent,ce=x.cameras;ne(x,ie);for(let G=0;G<ce.length;G++)ne(ce[G],ie);ce.length===2?W(x,P,I):x.projectionMatrix.copy(P.projectionMatrix),de(H,x,ie)};function de(H,Y,fe){fe===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Oa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let J=null;function he(H,Y){if(h=Y.getViewerPose(l||o),g=Y,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ie=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let G=0;G<fe.length;G++){const ue=fe[G];let Ue=null;if(f!==null)Ue=f.getViewport(ue);else{const q=u.getViewSubImage(d,ue);Ue=q.viewport,G===0&&(e.setRenderTargetTextures(S,q.colorTexture,d.ignoreDepthValues?void 0:q.depthStencilTexture),e.setRenderTarget(S))}let te=b[G];te===void 0&&(te=new hn,te.layers.enable(G),te.viewport=new bt,b[G]=te),te.matrix.fromArray(ue.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ue.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),G===0&&(x.matrix.copy(te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(te)}const ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const G=u.getDepthInformation(fe[0]);G&&G.isValid&&G.texture&&v.init(e,G,s.renderState)}}for(let fe=0;fe<y.length;fe++){const ie=_[fe],ce=y[fe];ie!==null&&ce!==void 0&&ce.update(ie,Y,l||o)}J&&J(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Ie=new Ch;Ie.setAnimationLoop(he),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}const vi=new wn,Fg=new yt;function Og(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const _=y.program;n.uniformBlockBinding(S,_)}function l(S,y){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(S,L);const E=e.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){const y=u();S.__bindingPointIndex=y;const _=i.createBuffer(),L=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],_=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,P=_.length;E<P;E++){const I=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,x=I.length;b<x;b++){const C=I[b];if(f(C,E,b,L)===!0){const D=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let X=0;X<U.length;X++){const z=U[X],K=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+F,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,_,L){const E=S.value,P=y+"_"+_;if(L[P]===void 0)return typeof E=="number"||typeof E=="boolean"?L[P]=E:L[P]=E.clone(),!0;{const I=L[P];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return L[P]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(S){const y=S.uniforms;let _=0;const L=16;for(let P=0,I=y.length;P<I;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,C=b.length;x<C;x++){const D=b[x],U=Array.isArray(D.value)?D.value:[D.value];for(let F=0,X=U.length;F<X;F++){const z=U[F],K=v(z),W=_%L,ne=W%K.boundary,de=W+ne;_+=ne,de!==0&&L-de<K.storage&&(_+=L-de),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=K.storage}}}const E=_%L;return E>0&&(_+=L-E),S.__size=_,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class zg{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=ri,this.toneMappingExposure=1;const _=this;let L=!1,E=0,P=0,I=null,b=-1,x=null;const C=new bt,D=new bt;let U=null;const F=new et(0);let X=0,z=t.width,K=t.height,W=1,ne=null,de=null;const J=new bt(0,0,z,K),he=new bt(0,0,z,K);let Ie=!1;const H=new fc;let Y=!1,fe=!1;const ie=new yt,ce=new yt,G=new R,ue=new bt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function q(){return I===null?W:1}let A=n;function xe(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),A===null){const O="webgl2";if(A=xe(O,T),A===null)throw xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let oe,pe,ae,Se,ge,w,M,B,Q,re,ee,Pe,ve,Te,qe,le,_e,Re,Le,Ce,$e,We,rt,N;function be(){oe=new W0(A),oe.init(),We=new Rg(A,oe),pe=new k0(A,oe,e,We),ae=new wg(A,oe),pe.reverseDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),Se=new q0(A),ge=new ug,w=new Ag(A,oe,ae,ge,pe,We,Se),M=new B0(_),B=new H0(_),Q=new Qd(A),rt=new F0(A,Q),re=new X0(A,Q,Se,rt),ee=new j0(A,re,Q,Se),Le=new $0(A,pe,w),le=new z0(ge),Pe=new hg(_,M,B,oe,pe,rt,le),ve=new Og(_,ge),Te=new fg,qe=new xg(oe),Re=new N0(_,M,B,ae,ee,f,c),_e=new Tg(_,ee,pe),N=new kg(A,Se,pe,ae),Ce=new O0(A,oe,Se),$e=new Y0(A,oe,Se),Se.programs=Pe.programs,_.capabilities=pe,_.extensions=oe,_.properties=ge,_.renderLists=Te,_.shadowMap=_e,_.state=ae,_.info=Se}be();const Z=new Ng(_,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(z,K,!1))},this.getSize=function(T){return T.set(z,K)},this.setSize=function(T,O,$=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,K=O,t.width=Math.floor(T*W),t.height=Math.floor(O*W),$===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(z*W,K*W).floor()},this.setDrawingBufferSize=function(T,O,$){z=T,K=O,W=$,t.width=Math.floor(T*$),t.height=Math.floor(O*$),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,O,$,j){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,O,$,j),ae.viewport(C.copy(J).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(he)},this.setScissor=function(T,O,$,j){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,O,$,j),ae.scissor(D.copy(he).multiplyScalar(W).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){ae.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,O=!0,$=!0){let j=0;if(T){let k=!1;if(I!==null){const me=I.texture.format;k=me===hc||me===lc||me===cc}if(k){const me=I.texture.type,Ae=me===Xn||me===Ii||me===Ws||me===fs||me===oc||me===ac,Oe=Re.getClearColor(),ke=Re.getClearAlpha(),Ye=Oe.r,Ke=Oe.g,ze=Oe.b;Ae?(g[0]=Ye,g[1]=Ke,g[2]=ze,g[3]=ke,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Ye,v[1]=Ke,v[2]=ze,v[3]=ke,A.clearBufferiv(A.COLOR,0,v))}else j|=A.COLOR_BUFFER_BIT}O&&(j|=A.DEPTH_BUFFER_BIT),$&&(j|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Te.dispose(),qe.dispose(),ge.dispose(),M.dispose(),B.dispose(),ee.dispose(),rt.dispose(),N.dispose(),Pe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",tr),Z.removeEventListener("sessionend",di),je.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=Se.autoReset,O=_e.enabled,$=_e.autoUpdate,j=_e.needsUpdate,k=_e.type;be(),Se.autoReset=T,_e.enabled=O,_e.autoUpdate=$,_e.needsUpdate=j,_e.type=k}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){const O=T.target;O.removeEventListener("dispose",He),ht(O)}function ht(T){Tt(T),ge.remove(T)}function Tt(T){const O=ge.get(T).programs;O!==void 0&&(O.forEach(function($){Pe.releaseProgram($)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,$,j,k,me){O===null&&(O=Ue);const Ae=k.isMesh&&k.matrixWorld.determinant()<0,Oe=Nu(T,O,$,j,k);ae.setMaterial(j,Ae);let ke=$.index,Ye=1;if(j.wireframe===!0){if(ke=re.getWireframeAttribute($),ke===void 0)return;Ye=2}const Ke=$.drawRange,ze=$.attributes.position;let st=Ke.start*Ye,ft=(Ke.start+Ke.count)*Ye;me!==null&&(st=Math.max(st,me.start*Ye),ft=Math.min(ft,(me.start+me.count)*Ye)),ke!==null?(st=Math.max(st,0),ft=Math.min(ft,ke.count)):ze!=null&&(st=Math.max(st,0),ft=Math.min(ft,ze.count));const _t=ft-st;if(_t<0||_t===1/0)return;rt.setup(k,j,Oe,$,ke);let $t,ot=Ce;if(ke!==null&&($t=Q.get(ke),ot=$e,ot.setIndex($t)),k.isMesh)j.wireframe===!0?(ae.setLineWidth(j.wireframeLinewidth*q()),ot.setMode(A.LINES)):ot.setMode(A.TRIANGLES);else if(k.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),ae.setLineWidth(Ve*q()),k.isLineSegments?ot.setMode(A.LINES):k.isLineLoop?ot.setMode(A.LINE_LOOP):ot.setMode(A.LINE_STRIP)}else k.isPoints?ot.setMode(A.POINTS):k.isSprite&&ot.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ve=k._multiDrawStarts,Rn=k._multiDrawCounts,at=k._multiDrawCount,pn=ke?Q.get(ke).bytesPerElement:1,Gi=ge.get(j).currentProgram.getUniforms();for(let en=0;en<at;en++)Gi.setValue(A,"_gl_DrawID",en),ot.render(Ve[en]/pn,Rn[en])}else if(k.isInstancedMesh)ot.renderInstances(st,_t,k.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rn=Math.min($.instanceCount,Ve);ot.renderInstances(st,_t,Rn)}else ot.render(st,_t)};function tt(T,O,$){T.transparent===!0&&T.side===Tn&&T.forceSinglePass===!1?(T.side=Ft,T.needsUpdate=!0,ir(T,O,$),T.side=li,T.needsUpdate=!0,ir(T,O,$),T.side=Tn):ir(T,O,$)}this.compile=function(T,O,$=null){$===null&&($=T),p=qe.get($),p.init(O),y.push(p),$.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const Oe=me[Ae];tt(Oe,$,k),j.add(Oe)}else tt(me,$,k),j.add(me)}),y.pop(),p=null,j},this.compileAsync=function(T,O,$=null){const j=this.compile(T,O,$);return new Promise(k=>{function me(){if(j.forEach(function(Ae){ge.get(Ae).currentProgram.isReady()&&j.delete(Ae)}),j.size===0){k(T);return}setTimeout(me,10)}oe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Qt=null;function Lt(T){Qt&&Qt(T)}function tr(){je.stop()}function di(){je.start()}const je=new Ch;je.setAnimationLoop(Lt),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(T){Qt=T,Z.setAnimationLoop(T),T===null?je.stop():je.start()},Z.addEventListener("sessionstart",tr),Z.addEventListener("sessionend",di),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,I),p=qe.get(T,y.length),p.init(O),y.push(p),ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(ce),fe=this.localClippingEnabled,Y=le.init(this.clippingPlanes,fe),m=Te.get(T,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){const me=_.xr.getDepthSensingMesh();me!==null&&it(me,O,-1/0,_.sortObjects)}it(T,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,de),te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,te&&Re.addToRenderList(m,T),this.info.render.frame++,Y===!0&&le.beginShadows();const $=p.state.shadowsArray;_e.render($,T,O),Y===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const me=O.cameras;if(k.length>0)for(let Ae=0,Oe=me.length;Ae<Oe;Ae++){const ke=me[Ae];Vi(j,k,T,ke)}te&&Re.render(T);for(let Ae=0,Oe=me.length;Ae<Oe;Ae++){const ke=me[Ae];fn(m,T,ke,ke.viewport)}}else k.length>0&&Vi(j,k,T,O),te&&Re.render(T),fn(m,T,O);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(_,T,O),rt.resetDefaultState(),b=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&le.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function it(T,O,$,j){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){j&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Ae=ee.update(T),Oe=T.material;Oe.visible&&m.push(T,Ae,Oe,$,ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||H.intersectsObject(T))){const Ae=ee.update(T),Oe=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ue.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ue.copy(Ae.boundingSphere.center)),ue.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(Oe)){const ke=Ae.groups;for(let Ye=0,Ke=ke.length;Ye<Ke;Ye++){const ze=ke[Ye],st=Oe[ze.materialIndex];st&&st.visible&&m.push(T,Ae,st,$,ue.z,ze)}}else Oe.visible&&m.push(T,Ae,Oe,$,ue.z,null)}}const me=T.children;for(let Ae=0,Oe=me.length;Ae<Oe;Ae++)it(me[Ae],O,$,j)}function fn(T,O,$,j){const k=T.opaque,me=T.transmissive,Ae=T.transparent;p.setupLightsView($),Y===!0&&le.setGlobalState(_.clippingPlanes,$),j&&ae.viewport(C.copy(j)),k.length>0&&nr(k,O,$),me.length>0&&nr(me,O,$),Ae.length>0&&nr(Ae,O,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Vi(T,O,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Li(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Js:Xn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const me=p.state.transmissionRenderTarget[j.id],Ae=j.viewport||C;me.setSize(Ae.z,Ae.w);const Oe=_.getRenderTarget();_.setRenderTarget(me),_.getClearColor(F),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),te&&Re.render($);const ke=_.toneMapping;_.toneMapping=ri;const Ye=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Y===!0&&le.setGlobalState(_.clippingPlanes,j),nr(T,$,j),w.updateMultisampleRenderTarget(me),w.updateRenderTargetMipmap(me),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ze=0,st=O.length;ze<st;ze++){const ft=O[ze],_t=ft.object,$t=ft.geometry,ot=ft.material,Ve=ft.group;if(ot.side===Tn&&_t.layers.test(j.layers)){const Rn=ot.side;ot.side=Ft,ot.needsUpdate=!0,Cc(_t,$,j,$t,ot,Ve),ot.side=Rn,ot.needsUpdate=!0,Ke=!0}}Ke===!0&&(w.updateMultisampleRenderTarget(me),w.updateRenderTargetMipmap(me))}_.setRenderTarget(Oe),_.setClearColor(F,X),Ye!==void 0&&(j.viewport=Ye),_.toneMapping=ke}function nr(T,O,$){const j=O.isScene===!0?O.overrideMaterial:null;for(let k=0,me=T.length;k<me;k++){const Ae=T[k],Oe=Ae.object,ke=Ae.geometry,Ye=j===null?Ae.material:j,Ke=Ae.group;Oe.layers.test($.layers)&&Cc(Oe,O,$,ke,Ye,Ke)}}function Cc(T,O,$,j,k,me){T.onBeforeRender(_,O,$,j,k,me),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,O,$,j,T,me),k.transparent===!0&&k.side===Tn&&k.forceSinglePass===!1?(k.side=Ft,k.needsUpdate=!0,_.renderBufferDirect($,O,j,k,T,me),k.side=li,k.needsUpdate=!0,_.renderBufferDirect($,O,j,k,T,me),k.side=Tn):_.renderBufferDirect($,O,j,k,T,me),T.onAfterRender(_,O,$,j,k,me)}function ir(T,O,$){O.isScene!==!0&&(O=Ue);const j=ge.get(T),k=p.state.lights,me=p.state.shadowsArray,Ae=k.state.version,Oe=Pe.getParameters(T,k.state,me,O,$),ke=Pe.getProgramCacheKey(Oe);let Ye=j.programs;j.environment=T.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(T.isMeshStandardMaterial?B:M).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",He),Ye=new Map,j.programs=Ye);let Ke=Ye.get(ke);if(Ke!==void 0){if(j.currentProgram===Ke&&j.lightsStateVersion===Ae)return Rc(T,Oe),Ke}else Oe.uniforms=Pe.getUniforms(T),T.onBeforeCompile(Oe,_),Ke=Pe.acquireProgram(Oe,ke),Ye.set(ke,Ke),j.uniforms=Oe.uniforms;const ze=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=le.uniform),Rc(T,Oe),j.needsLights=Ou(T),j.lightsStateVersion=Ae,j.needsLights&&(ze.ambientLightColor.value=k.state.ambient,ze.lightProbe.value=k.state.probe,ze.directionalLights.value=k.state.directional,ze.directionalLightShadows.value=k.state.directionalShadow,ze.spotLights.value=k.state.spot,ze.spotLightShadows.value=k.state.spotShadow,ze.rectAreaLights.value=k.state.rectArea,ze.ltc_1.value=k.state.rectAreaLTC1,ze.ltc_2.value=k.state.rectAreaLTC2,ze.pointLights.value=k.state.point,ze.pointLightShadows.value=k.state.pointShadow,ze.hemisphereLights.value=k.state.hemi,ze.directionalShadowMap.value=k.state.directionalShadowMap,ze.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ze.spotShadowMap.value=k.state.spotShadowMap,ze.spotLightMatrix.value=k.state.spotLightMatrix,ze.spotLightMap.value=k.state.spotLightMap,ze.pointShadowMap.value=k.state.pointShadowMap,ze.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ke,j.uniformsList=null,Ke}function Ac(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Br.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Rc(T,O){const $=ge.get(T);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Nu(T,O,$,j,k){O.isScene!==!0&&(O=Ue),w.resetTextureUnits();const me=O.fog,Ae=j.isMeshStandardMaterial?O.environment:null,Oe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vs,ke=(j.isMeshStandardMaterial?B:M).get(j.envMap||Ae),Ye=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!$.morphAttributes.position,st=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let _t=ri;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_t=_.toneMapping);const $t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ot=$t!==void 0?$t.length:0,Ve=ge.get(j),Rn=p.state.lights;if(Y===!0&&(fe===!0||T!==x)){const on=T===x&&j.id===b;le.setState(j,T,on)}let at=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Rn.state.version||Ve.outputColorSpace!==Oe||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==ke||j.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==le.numPlanes||Ve.numIntersection!==le.numIntersection)||Ve.vertexAlphas!==Ye||Ve.vertexTangents!==Ke||Ve.morphTargets!==ze||Ve.morphNormals!==st||Ve.morphColors!==ft||Ve.toneMapping!==_t||Ve.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ve.__version=j.version);let pn=Ve.currentProgram;at===!0&&(pn=ir(j,O,k));let Gi=!1,en=!1,bs=!1;const vt=pn.getUniforms(),Mn=Ve.uniforms;if(ae.useProgram(pn.program)&&(Gi=!0,en=!0,bs=!0),j.id!==b&&(b=j.id,en=!0),Gi||x!==T){ae.buffers.depth.getReversed()?(ie.copy(T.projectionMatrix),Ad(ie),Rd(ie),vt.setValue(A,"projectionMatrix",ie)):vt.setValue(A,"projectionMatrix",T.projectionMatrix),vt.setValue(A,"viewMatrix",T.matrixWorldInverse);const $n=vt.map.cameraPosition;$n!==void 0&&$n.setValue(A,G.setFromMatrixPosition(T.matrixWorld)),pe.logarithmicDepthBuffer&&vt.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,en=!0,bs=!0)}if(k.isSkinnedMesh){vt.setOptional(A,k,"bindMatrix"),vt.setOptional(A,k,"bindMatrixInverse");const on=k.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),vt.setValue(A,"boneTexture",on.boneTexture,w))}k.isBatchedMesh&&(vt.setOptional(A,k,"batchingTexture"),vt.setValue(A,"batchingTexture",k._matricesTexture,w),vt.setOptional(A,k,"batchingIdTexture"),vt.setValue(A,"batchingIdTexture",k._indirectTexture,w),vt.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(A,"batchingColorTexture",k._colorsTexture,w));const Ts=$.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Le.update(k,$,pn),(en||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,vt.setValue(A,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Mn.envMap.value=ke,Mn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(Mn.envMapIntensity.value=O.environmentIntensity),en&&(vt.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Fu(Mn,bs),me&&j.fog===!0&&ve.refreshFogUniforms(Mn,me),ve.refreshMaterialUniforms(Mn,j,W,K,p.state.transmissionRenderTarget[T.id]),Br.upload(A,Ac(Ve),Mn,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Br.upload(A,Ac(Ve),Mn,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(A,"center",k.center),vt.setValue(A,"modelViewMatrix",k.modelViewMatrix),vt.setValue(A,"normalMatrix",k.normalMatrix),vt.setValue(A,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const on=j.uniformsGroups;for(let $n=0,jn=on.length;$n<jn;$n++){const Pc=on[$n];N.update(Pc,pn),N.bind(Pc,pn)}}return pn}function Fu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,O,$){ge.get(T.texture).__webglTexture=O,ge.get(T.depthTexture).__webglTexture=$;const j=ge.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const $=ge.get(T);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,$=0){I=T,E=O,P=$;let j=!0,k=null,me=!1,Ae=!1;if(T){const ke=ge.get(T);if(ke.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(A.FRAMEBUFFER,null),j=!1;else if(ke.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(ke.__hasExternalTextures)w.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&ge.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);const Ke=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[O])?k=Ke[O][$]:k=Ke[O],me=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?k=ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?k=Ke[$]:k=Ke,C.copy(T.viewport),D.copy(T.scissor),U=T.scissorTest}else C.copy(J).multiplyScalar(W).floor(),D.copy(he).multiplyScalar(W).floor(),U=Ie;if(ae.bindFramebuffer(A.FRAMEBUFFER,k)&&j&&ae.drawBuffers(T,k),ae.viewport(C),ae.scissor(D),ae.setScissorTest(U),me){const ke=ge.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,ke.__webglTexture,$)}else if(Ae){const ke=ge.get(T.texture),Ye=O||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ke.__webglTexture,$||0,Ye)}b=-1},this.readRenderTargetPixels=function(T,O,$,j,k,me,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){ae.bindFramebuffer(A.FRAMEBUFFER,Oe);try{const ke=T.texture,Ye=ke.format,Ke=ke.type;if(!pe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-j&&$>=0&&$<=T.height-k&&A.readPixels(O,$,j,k,We.convert(Ye),We.convert(Ke),me)}finally{const ke=I!==null?ge.get(I).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,O,$,j,k,me,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){const ke=T.texture,Ye=ke.format,Ke=ke.type;if(!pe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-j&&$>=0&&$<=T.height-k){ae.bindFramebuffer(A.FRAMEBUFFER,Oe);const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,me.byteLength,A.STREAM_READ),A.readPixels(O,$,j,k,We.convert(Ye),We.convert(Ke),0);const st=I!==null?ge.get(I).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,st);const ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Cd(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,me),A.deleteBuffer(ze),A.deleteSync(ft),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,$=0){T.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-$),k=Math.floor(T.image.width*j),me=Math.floor(T.image.height*j),Ae=O!==null?O.x:0,Oe=O!==null?O.y:0;w.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,$,0,0,Ae,Oe,k,me),ae.unbindTexture()},this.copyTextureToTexture=function(T,O,$=null,j=null,k=0){T.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],O=arguments[2],k=arguments[3]||0,$=null);let me,Ae,Oe,ke,Ye,Ke,ze,st,ft;const _t=T.isCompressedTexture?T.mipmaps[k]:T.image;$!==null?(me=$.max.x-$.min.x,Ae=$.max.y-$.min.y,Oe=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,Ye=$.min.y,Ke=$.isBox3?$.min.z:0):(me=_t.width,Ae=_t.height,Oe=_t.depth||1,ke=0,Ye=0,Ke=0),j!==null?(ze=j.x,st=j.y,ft=j.z):(ze=0,st=0,ft=0);const $t=We.convert(O.format),ot=We.convert(O.type);let Ve;O.isData3DTexture?(w.setTexture3D(O,0),Ve=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Ve=A.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Ve=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);const Rn=A.getParameter(A.UNPACK_ROW_LENGTH),at=A.getParameter(A.UNPACK_IMAGE_HEIGHT),pn=A.getParameter(A.UNPACK_SKIP_PIXELS),Gi=A.getParameter(A.UNPACK_SKIP_ROWS),en=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,_t.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,_t.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ye),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ke);const bs=T.isDataArrayTexture||T.isData3DTexture,vt=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Mn=ge.get(T),Ts=ge.get(O),on=ge.get(Mn.__renderTarget),$n=ge.get(Ts.__renderTarget);ae.bindFramebuffer(A.READ_FRAMEBUFFER,on.__webglFramebuffer),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let jn=0;jn<Oe;jn++)bs&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(T).__webglTexture,k,Ke+jn),T.isDepthTexture?(vt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(O).__webglTexture,k,ft+jn),A.blitFramebuffer(ke,Ye,me,Ae,ze,st,me,Ae,A.DEPTH_BUFFER_BIT,A.NEAREST)):vt?A.copyTexSubImage3D(Ve,k,ze,st,ft+jn,ke,Ye,me,Ae):A.copyTexSubImage2D(Ve,k,ze,st,ft+jn,ke,Ye,me,Ae);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else vt?T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Ve,k,ze,st,ft,me,Ae,Oe,$t,ot,_t.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(Ve,k,ze,st,ft,me,Ae,Oe,$t,_t.data):A.texSubImage3D(Ve,k,ze,st,ft,me,Ae,Oe,$t,ot,_t):T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,k,ze,st,me,Ae,$t,ot,_t.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,k,ze,st,_t.width,_t.height,$t,_t.data):A.texSubImage2D(A.TEXTURE_2D,k,ze,st,me,Ae,$t,ot,_t);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(A.UNPACK_SKIP_PIXELS,pn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Gi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,en),k===0&&O.generateMipmaps&&A.generateMipmap(Ve),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,O,$=null,j=null,k=0){return T.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,T=arguments[2],O=arguments[3],k=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,$,j,k)},this.initRenderTarget=function(T){ge.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){E=0,P=0,I=null,ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class mc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uh extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ro extends Wt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],o=[],a=new R,c=new yt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gc extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bg extends gc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _c(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Er=new R,Bo=new _c,Vo=new _c,Go=new _c;class Vg extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),l=Er);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Bo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Vo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Go.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Vo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Go.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Bo.calc(c),Vo.calc(c),Go.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Gg(i,e){const t=1-i;return t*t*e}function Hg(i,e){return 2*(1-i)*i*e}function Wg(i,e){return i*i*e}function ks(i,e,t,n){return Gg(i,e)+Hg(i,t)+Wg(i,n)}function Xg(i,e){const t=1-i;return t*t*t*e}function Yg(i,e){const t=1-i;return 3*t*t*i*e}function qg(i,e){return 3*(1-i)*i*i*e}function $g(i,e){return i*i*i*e}function zs(i,e,t,n,s){return Xg(i,e)+Yg(i,t)+qg(i,n)+$g(i,s)}class Nh extends An{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jg extends An{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y),zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fh extends An{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kg extends An{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends An{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(e,s.x,r.x,o.x),ks(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jg extends An{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(e,s.x,r.x,o.x),ks(e,s.y,r.y,o.y),ks(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Cl(a,c.x,l.x,h.x,u.x),Cl(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var Ba=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:Vg,CubicBezierCurve:Nh,CubicBezierCurve3:jg,EllipseCurve:gc,LineCurve:Fh,LineCurve3:Kg,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:Jg,SplineCurve:kh});class Zg extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ba[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ba[s.type]().fromJSON(s))}return this}}class jr extends Zg{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fh(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Oh(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Nh(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new gc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vc extends Zt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ut(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new R,d=new ye,f=new R,g=new R,v=new R;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let S=0;S<=t;S++){const y=n+S*h*s,_=Math.sin(y),L=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*L,o.push(u.x,u.y,u.z),d.x=S/t,d.y=E/(e.length-1),a.push(d.x,d.y);const P=c[3*E+0]*_,I=c[3*E+1],b=c[3*E+0]*L;l.push(P,I,b)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){const _=y+S*e.length,L=_,E=_+e.length,P=_+e.length+1,I=_+1;r.push(L,E,I),r.push(P,I,E)}this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.points,e.segments,e.phiStart,e.phiLength)}}class lt extends vc{constructor(e=1,t=1,n=4,s=8){const r=new jr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new lt(e.radius,e.length,e.capSegments,e.radialSegments)}}class oi extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xe extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function S(){const _=new R,L=new R;let E=0;const P=(t-e)/n;for(let I=0;I<=r;I++){const b=[],x=I/r,C=x*(t-e)+e;for(let D=0;D<=s;D++){const U=D/s,F=U*c+a,X=Math.sin(F),z=Math.cos(F);L.x=C*X,L.y=-x*n+m,L.z=C*z,u.push(L.x,L.y,L.z),_.set(X,P,z).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-x),b.push(g++)}v.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const x=v[b][I],C=v[b+1][I],D=v[b+1][I+1],U=v[b][I+1];(e>0||b!==0)&&(h.push(x,C,U),E+=3),(t>0||b!==r-1)&&(h.push(C,D,U),E+=3)}l.addGroup(p,E,0),p+=E}function y(_){const L=g,E=new ye,P=new R;let I=0;const b=_===!0?e:t,x=_===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let D=0;D<=s;D++){const F=D/s*c+a,X=Math.cos(F),z=Math.sin(F);P.x=b*z,P.y=m*x,P.z=b*X,u.push(P.x,P.y,P.z),d.push(0,x,0),E.x=X*.5+.5,E.y=z*.5*x+.5,f.push(E.x,E.y),g++}for(let D=0;D<s;D++){const U=L+D,F=C+D;_===!0?h.push(F,F+1,U):h.push(F+1,F,U),I+=3}l.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends Zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new R,_=new R,L=new R;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],_),f(t[E+2],L),c(y,_,L,S)}function c(S,y,_,L){const E=L+1,P=[];for(let I=0;I<=E;I++){P[I]=[];const b=S.clone().lerp(_,I/E),x=y.clone().lerp(_,I/E),C=E-I;for(let D=0;D<=C;D++)D===0&&I===E?P[I][D]=b:P[I][D]=b.clone().lerp(x,D/C)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){const x=Math.floor(b/2);b%2===0?(d(P[I][x+1]),d(P[I+1][x]),d(P[I][x])):(d(P[I][x+1]),d(P[I+1][x+1]),d(P[I+1][x]))}}function l(S){const y=new R;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(S),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const S=new R;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const _=m(S)/2/Math.PI+.5,L=p(S)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const y=o[S+0],_=o[S+2],L=o[S+4],E=Math.max(y,_,L),P=Math.min(y,_,L);E>.9&&P<.1&&(y<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){const _=S*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const S=new R,y=new R,_=new R,L=new R,E=new ye,P=new ye,I=new ye;for(let b=0,x=0;b<r.length;b+=9,x+=6){S.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),L.copy(S).add(y).add(_).divideScalar(3);const C=m(L);v(E,x+0,S,C),v(P,x+2,y,C),v(I,x+4,_,C)}}function v(S,y,_,L){L<0&&S.x===1&&(o[y]=S.x-1),_.x===0&&_.z===0&&(o[y]=L/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.vertices,e.indices,e.radius,e.details)}}class Ci extends jr{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new jr().fromJSON(s))}return this}}const Qg={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=zh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=s_(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Xs(r,o,t,a,c,f,0),o}};function zh(i,e,t,n,s){let r,o;if(s===m_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Al(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Al(r,i[r],i[r+1],o);return o&&oo(o,o.next)&&(qs(o),o=o.next),o}function Ui(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oo(t,t.next)||Mt(t.prev,t,t.next)===0)){if(qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&l_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?t_(i,n,s,r):e_(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),qs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=n_(Ui(i),e,t),Xs(i,e,t,n,s,r,2)):o===2&&i_(i,e,t,n,s,r):Xs(Ui(i),e,t,n,s,r,1);break}}}function e_(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&rs(s,a,r,c,o,l,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function t_(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Mt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Va(f,g,e,t,n),S=Va(v,m,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rs(a,h,c,u,l,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&rs(a,h,c,u,l,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rs(a,h,c,u,l,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&rs(a,h,c,u,l,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function n_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!oo(s,r)&&Bh(s,n,n.next,r)&&Ys(s,r)&&Ys(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),qs(n),qs(n.next),n=i=r),n=n.next}while(n!==i);return Ui(n)}function i_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d_(o,a)){let c=Vh(o,a);o=Ui(o,o.next),c=Ui(c,c.next),Xs(o,e,t,n,s,r,0),Xs(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function s_(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=zh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(u_(l));for(s.sort(r_),r=0;r<s.length;r++)t=o_(s[r],t);return t}function r_(i,e){return i.x-e.x}function o_(i,e){const t=a_(i,e);if(!t)return e;const n=Vh(t,i);return Ui(n,n.next),Ui(t,t.next)}function a_(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&rs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ys(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&c_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function c_(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function l_(i,e,t,n){let s=i;do s.z===0&&(s.z=Va(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,h_(s)}function h_(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Va(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function u_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function d_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!f_(i,e)&&(Ys(i,e)&&Ys(e,i)&&p_(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||oo(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oo(i,e){return i.x===e.x&&i.y===e.y}function Bh(i,e,t,n){const s=Cr(Mt(i,e,t)),r=Cr(Mt(i,e,n)),o=Cr(Mt(t,n,i)),a=Cr(Mt(t,n,e));return!!(s!==r&&o!==a||s===0&&wr(i,t,e)||r===0&&wr(i,n,e)||o===0&&wr(t,i,n)||a===0&&wr(t,e,n))}function wr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cr(i){return i>0?1:i<0?-1:0}function f_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ys(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function p_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vh(i,e){const t=new Ga(i.i,i.x,i.y),n=new Ga(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Al(i,e,t,n){const s=new Ga(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ga(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Bs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Bs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Rl(e),Pl(n,e);let o=e.length;t.forEach(Rl);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Pl(n,t[c]);const a=Qg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Rl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ao extends Zt{constructor(e=new Ci([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:g_;let y,_=!1,L,E,P,I;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),E=new R,P=new R,I=new R),d||(m=0,f=0,g=0,v=0);const b=a.extractPoints(l);let x=b.shape;const C=b.holes;if(!Bs.isClockWise(x)){x=x.reverse();for(let te=0,q=C.length;te<q;te++){const A=C[te];Bs.isClockWise(A)&&(C[te]=A.reverse())}}const U=Bs.triangulateShape(x,C),F=x;for(let te=0,q=C.length;te<q;te++){const A=C[te];x=x.concat(A)}function X(te,q,A){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(q,A)}const z=x.length,K=U.length;function W(te,q,A){let xe,oe,pe;const ae=te.x-q.x,Se=te.y-q.y,ge=A.x-te.x,w=A.y-te.y,M=ae*ae+Se*Se,B=ae*w-Se*ge;if(Math.abs(B)>Number.EPSILON){const Q=Math.sqrt(M),re=Math.sqrt(ge*ge+w*w),ee=q.x-Se/Q,Pe=q.y+ae/Q,ve=A.x-w/re,Te=A.y+ge/re,qe=((ve-ee)*w-(Te-Pe)*ge)/(ae*w-Se*ge);xe=ee+ae*qe-te.x,oe=Pe+Se*qe-te.y;const le=xe*xe+oe*oe;if(le<=2)return new ye(xe,oe);pe=Math.sqrt(le/2)}else{let Q=!1;ae>Number.EPSILON?ge>Number.EPSILON&&(Q=!0):ae<-Number.EPSILON?ge<-Number.EPSILON&&(Q=!0):Math.sign(Se)===Math.sign(w)&&(Q=!0),Q?(xe=-Se,oe=ae,pe=Math.sqrt(M)):(xe=ae,oe=Se,pe=Math.sqrt(M/2))}return new ye(xe/pe,oe/pe)}const ne=[];for(let te=0,q=F.length,A=q-1,xe=te+1;te<q;te++,A++,xe++)A===q&&(A=0),xe===q&&(xe=0),ne[te]=W(F[te],F[A],F[xe]);const de=[];let J,he=ne.concat();for(let te=0,q=C.length;te<q;te++){const A=C[te];J=[];for(let xe=0,oe=A.length,pe=oe-1,ae=xe+1;xe<oe;xe++,pe++,ae++)pe===oe&&(pe=0),ae===oe&&(ae=0),J[xe]=W(A[xe],A[pe],A[ae]);de.push(J),he=he.concat(J)}for(let te=0;te<m;te++){const q=te/m,A=f*Math.cos(q*Math.PI/2),xe=g*Math.sin(q*Math.PI/2)+v;for(let oe=0,pe=F.length;oe<pe;oe++){const ae=X(F[oe],ne[oe],xe);ie(ae.x,ae.y,-A)}for(let oe=0,pe=C.length;oe<pe;oe++){const ae=C[oe];J=de[oe];for(let Se=0,ge=ae.length;Se<ge;Se++){const w=X(ae[Se],J[Se],xe);ie(w.x,w.y,-A)}}}const Ie=g+v;for(let te=0;te<z;te++){const q=d?X(x[te],he[te],Ie):x[te];_?(P.copy(L.normals[0]).multiplyScalar(q.x),E.copy(L.binormals[0]).multiplyScalar(q.y),I.copy(y[0]).add(P).add(E),ie(I.x,I.y,I.z)):ie(q.x,q.y,0)}for(let te=1;te<=h;te++)for(let q=0;q<z;q++){const A=d?X(x[q],he[q],Ie):x[q];_?(P.copy(L.normals[te]).multiplyScalar(A.x),E.copy(L.binormals[te]).multiplyScalar(A.y),I.copy(y[te]).add(P).add(E),ie(I.x,I.y,I.z)):ie(A.x,A.y,u/h*te)}for(let te=m-1;te>=0;te--){const q=te/m,A=f*Math.cos(q*Math.PI/2),xe=g*Math.sin(q*Math.PI/2)+v;for(let oe=0,pe=F.length;oe<pe;oe++){const ae=X(F[oe],ne[oe],xe);ie(ae.x,ae.y,u+A)}for(let oe=0,pe=C.length;oe<pe;oe++){const ae=C[oe];J=de[oe];for(let Se=0,ge=ae.length;Se<ge;Se++){const w=X(ae[Se],J[Se],xe);_?ie(w.x,w.y+y[h-1].y,y[h-1].x+A):ie(w.x,w.y,u+A)}}}H(),Y();function H(){const te=s.length/3;if(d){let q=0,A=z*q;for(let xe=0;xe<K;xe++){const oe=U[xe];ce(oe[2]+A,oe[1]+A,oe[0]+A)}q=h+m*2,A=z*q;for(let xe=0;xe<K;xe++){const oe=U[xe];ce(oe[0]+A,oe[1]+A,oe[2]+A)}}else{for(let q=0;q<K;q++){const A=U[q];ce(A[2],A[1],A[0])}for(let q=0;q<K;q++){const A=U[q];ce(A[0]+z*h,A[1]+z*h,A[2]+z*h)}}n.addGroup(te,s.length/3-te,0)}function Y(){const te=s.length/3;let q=0;fe(F,q),q+=F.length;for(let A=0,xe=C.length;A<xe;A++){const oe=C[A];fe(oe,q),q+=oe.length}n.addGroup(te,s.length/3-te,1)}function fe(te,q){let A=te.length;for(;--A>=0;){const xe=A;let oe=A-1;oe<0&&(oe=te.length-1);for(let pe=0,ae=h+m*2;pe<ae;pe++){const Se=z*pe,ge=z*(pe+1),w=q+xe+Se,M=q+oe+Se,B=q+oe+ge,Q=q+xe+ge;G(w,M,B,Q)}}}function ie(te,q,A){c.push(te),c.push(q),c.push(A)}function ce(te,q,A){ue(te),ue(q),ue(A);const xe=s.length/3,oe=S.generateTopUV(n,s,xe-3,xe-2,xe-1);Ue(oe[0]),Ue(oe[1]),Ue(oe[2])}function G(te,q,A,xe){ue(te),ue(q),ue(xe),ue(q),ue(A),ue(xe);const oe=s.length/3,pe=S.generateSideWallUV(n,s,oe-6,oe-3,oe-2,oe-1);Ue(pe[0]),Ue(pe[1]),Ue(pe[3]),Ue(pe[1]),Ue(pe[2]),Ue(pe[3])}function ue(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Ue(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return __(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ba[s.type]().fromJSON(s)),new ao(n,e.options)}}const g_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-u),new ye(d,1-g),new ye(v,1-p)]:[new ye(a,1-c),new ye(h,1-u),new ye(f,1-g),new ye(m,1-p)]}};function __(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kr extends xc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kr(e.radius,e.detail)}}class Ct extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){const E=L/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-y),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const y=h[p][S+1],_=h[p][S],L=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&f.push(y,_,E),(p!==n-1||c<Math.PI)&&f.push(_,L,E)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fn extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(v,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fe extends Qs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class v_ extends yc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ho=new yt,Il=new R,Ll=new R;class x_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y_ extends x_{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new y_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S_ extends yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ul=new yt;class Gh{constructor(e,t,n=0,s=1/0){this.ray=new yh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ul.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ul),this}intersectObject(e,t=!0,n=[]){return Ha(e,this,n,t),n.sort(Nl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ha(e[s],this,n,t);return n.sort(Nl),n}}function Nl(i,e){return i.distance-e.distance}function Ha(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ha(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);const Fl="fps1v1-",cn=Object.freeze({STATE:"state",SHOOT:"shoot",HIT:"hit",RESPAWN:"respawn"}),Ni=Object.freeze({STATE_SEND_RATE_HZ:30,STATE_SEND_INTERVAL_MS:1e3/30,ROOM_CODE_LENGTH:6,ROOM_CODE_CHARS:"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"}),mt=Object.freeze({MAX_HP:100,EYE_HEIGHT:1.62,CROUCH_EYE_HEIGHT:1.12,HEIGHT:1.8,CROUCH_HEIGHT:1.3,CROUCH_FEET_LIFT:.42,RADIUS:.38,PITCH_LIMIT:1.5,RESPAWN_DELAY_SEC:2,INTERP_SPEED:16}),pt=Object.freeze({UNIT_SCALE:36.7647,RUN_SPEED:6.8,CROUCH_SPEED:2.4,ADS_SPEED_MULT:.72,GROUND_ACCEL:5.6,GROUND_FRICTION:5.4,STOP_SPEED:2.7,AIR_ACCEL:9.5,AIR_WISH_SPEED:.78,JUMP_VELOCITY:7.65,GRAVITY:20.5,JUMP_BUFFER_SEC:.09,BHOP_SOFT_CAP:7.75,BHOP_CAP_DAMPING:.82,BHOP_SPEED_HIGHLIGHT_UNITS:255,COUNTER_STRAFE_SPEED_THRESHOLD:1.2,CROUCH_LERP_SPEED:14}),Ar=Object.freeze({BODY:Object.freeze({width:.68,height:1.24,depth:.42,centerY:.68,crouchHeight:.86,crouchCenterY:.46}),HEAD:Object.freeze({width:.44,height:.44,depth:.44,centerY:1.54,crouchCenterY:1.1})}),Be=Object.freeze({AR:"ar",SNIPER:"sniper",KNIFE:"knife"});Object.freeze([Be.AR,Be.SNIPER,Be.KNIFE]);const St=Object.freeze({[Be.AR]:Object.freeze({id:Be.AR,name:"ASSAULT RIFLE",shortName:"AR",isMelee:!1,automatic:!0,speedMult:.88,fireCooldownMs:105,magSize:30,reloadTimeMs:1450,bodyDamage:24,headDamage:48,maxRange:90,adsFovMult:.78,adsSpeed:14,hasScope:!1,recoilPitch:.016,recoilYawSpread:.002,recoilRecovery:9.5,recoilResetDelayMs:180,recoilDecayRate:11,viewpunchRatio:.55,sprayPattern:Object.freeze([[0,0],[.009,.001],[.021,-.002],[.036,.003],[.052,.005],[.068,.002],[.082,-.006],[.094,-.015],[.102,-.024],[.106,-.028],[.108,-.018],[.11,-.004],[.111,.012],[.112,.025],[.112,.033],[.113,.036],[.113,.028],[.112,.014],[.111,-.002],[.11,-.016],[.11,-.026],[.111,-.03],[.112,-.022],[.113,-.008],[.114,.008],[.114,.022],[.113,.028],[.112,.018],[.111,.004],[.111,-.01]]),spreadBase:.0022,spreadAds:7e-4,spreadMove:.024,spreadAir:.052,spreadCrouchMult:.6,tracerColor:16765286,tracerRadius:.011,tracerDurationMs:95,muzzleFlashMs:42}),[Be.SNIPER]:Object.freeze({id:Be.SNIPER,name:"SNIPER",shortName:"SNIPER",isMelee:!1,automatic:!1,speedMult:.8,fireCooldownMs:950,magSize:3,reloadTimeMs:1850,bodyDamage:75,headDamage:100,maxRange:120,adsFovMult:.42,adsSpeed:12,hasScope:!0,recoilPitch:.068,recoilYawSpread:.004,recoilRecovery:9,spreadBase:.022,spreadAds:2e-4,spreadMove:.048,spreadAir:.078,spreadCrouchMult:.6,tracerColor:8255999,tracerRadius:.02,tracerDurationMs:165,muzzleFlashMs:65}),[Be.KNIFE]:Object.freeze({id:Be.KNIFE,name:"BIÇAK",shortName:"BIÇAK",isMelee:!0,automatic:!1,speedMult:1,fireCooldownMs:420,heavyCooldownMs:760,magSize:0,reloadTimeMs:0,bodyDamage:55,headDamage:100,heavyDamage:100,maxRange:2.6,adsFovMult:1,adsSpeed:14,hasScope:!1,recoilPitch:0,recoilYawSpread:0,recoilRecovery:16,spreadBase:0,spreadAds:0,spreadMove:0,spreadAir:0,spreadCrouchMult:1,tracerColor:16777215,tracerRadius:0,tracerDurationMs:0,muzzleFlashMs:0})}),M_=Object.freeze({WIDTH:26,LENGTH:40,WALL_HEIGHT:7}),Dt=Object.freeze({color:"#00ff66",size:8,thickness:2,gap:4,outline:!0,dot:!1,dynamic:!0,alpha:.95}),zn=Object.freeze({sensitivity:1,adsSensitivity:.6,fov:85,volume:.7,showFps:!1,crosshair:Dt});class b_{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return T_(e).buffer}}function T_(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Hh(i){return new E_(i).unpack()}function Wh(i){const e=new w_,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class E_{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class w_{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new b_,this._textEncoder=new TextEncoder}}let Xh=!0,Yh=!0;function Ns(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Oi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Sc("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function C_(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Xh=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function A_(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Yh=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Sc(){if(typeof window=="object"){if(Xh)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Mc(i,e){Yh&&console.warn(i+" is deprecated, please use "+e+" instead.")}function R_(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Ns(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Ns(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Ns(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Ns(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Ol(i){return Object.prototype.toString.call(i)==="[object Object]"}function qh(i){return Ol(i)?Object.keys(i).reduce(function(e,t){const n=Ol(i[t]),s=n?qh(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Wa(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Wa(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Wa(i,i.get(s),t)})}))}function kl(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Wa(i,a,s)})}),s}const zl=Sc;function $h(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let f=d.find(g=>u.some(v=>g.label.toLowerCase().includes(v)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),zl("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return zl("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function jh(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Kh(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Oi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Jh(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Zh(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>kl(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),Oi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>kl(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Qh(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function eu(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Qh(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(v=>v===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new i.MediaStream([h]);this._streams[u.id]=v,this._reverseStreams[v.id]=u,this.addStream(v)}return this.getSenders().find(v=>v.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const v=r(this,g);d[0].apply(null,[v])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=u[l]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(v=>h.track===v)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Xa(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function tu(i,e){e.version>102||Oi(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Bl=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:tu,shimAddTrackRemoveTrack:eu,shimAddTrackRemoveTrackWithNative:Qh,shimGetSendersWithDtmf:Jh,shimGetUserMedia:$h,shimMediaStream:jh,shimOnTrack:Kh,shimPeerConnection:Xa,shimSenderReceiverGetStats:Zh},Symbol.toStringTag,{value:"Module"}));function nu(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){Mc("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function P_(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function iu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Ya(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function su(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function ru(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function ou(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Oi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function au(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){Mc("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function cu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function lu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function hu(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function uu(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function du(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Vl=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:lu,shimCreateAnswer:du,shimCreateOffer:uu,shimGetDisplayMedia:P_,shimGetParameters:hu,shimGetStats:su,shimGetUserMedia:nu,shimOnTrack:iu,shimPeerConnection:Ya,shimRTCDataChannel:cu,shimReceiverGetStats:ou,shimRemoveStream:au,shimSenderGetStats:ru},Symbol.toStringTag,{value:"Module"}));function fu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function pu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function mu(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function gu(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(_u(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function _u(i){return i&&i.video!==void 0?Object.assign({},i,{video:qh(i.video)}):i}function vu(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Mc("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function xu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function yu(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Su(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Gl=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Su,shimCallbacksAPI:mu,shimConstraints:_u,shimCreateOfferLegacy:yu,shimGetUserMedia:gu,shimLocalStreamsAPI:fu,shimRTCIceServerUrls:vu,shimRemoteStreamsAPI:pu,shimTrackEventTransceiver:xu},Symbol.toStringTag,{value:"Module"}));function I_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Wo={exports:{}},Hl;function L_(){return Hl||(Hl=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={},s=t.substring(t.indexOf(" ")+1).split(";");for(let r=0;r<s.length;r++){const[o,...a]=s[r].trim().split("=");n[o.trim()]=a.length?a.join("="):void 0}return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(Wo)),Wo.exports}var Mu=L_();const cs=I_(Mu),D_=zu({__proto__:null,default:cs},[Mu]);function Vr(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=cs.parseCandidate(n.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Oi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function qa(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Oi(i,"icecandidate",e=>{if(e.candidate){const t=cs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Gr(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=cs.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=cs.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=cs.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Hr(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const o=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Oi(i,"datachannel",s=>(t(s.channel,s.target),s))}function $a(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function ja(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Wr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Xr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const U_=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:ja,shimAddIceCandidateNullOrEmpty:Wr,shimConnectionState:$a,shimMaxMessageSize:Gr,shimParameterlessSetLocalDescription:Xr,shimRTCIceCandidate:Vr,shimRTCIceCandidateRelayProtocol:qa,shimSendThrowTypeError:Hr},Symbol.toStringTag,{value:"Module"}));function N_({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Sc,n=R_(i),s={browserDetails:n,commonShim:U_,extractVersion:Ns,disableLog:C_,disableWarnings:A_,sdp:D_};switch(n.browser){case"chrome":if(!Bl||!Xa||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Bl,Wr(i,n),Xr(i),$h(i,n),jh(i),Xa(i,n),Kh(i,n),eu(i,n),Jh(i),Zh(i,n),tu(i,n),Vr(i),qa(i),$a(i),Gr(i,n),Hr(i,n),ja(i,n);break;case"firefox":if(!Vl||!Ya||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=Vl,Wr(i,n),Xr(i),nu(i,n),Ya(i,n),su(i,n),iu(i),au(i),ru(i),ou(i),cu(i),lu(i,n),hu(i,n),uu(i,n),du(i,n),Vr(i),$a(i),Gr(i,n),Hr(i,n);break;case"safari":if(!Gl||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Gl,Wr(i,n),Xr(i),vu(i),yu(i),mu(i),fu(i),pu(i),xu(i),gu(i),Su(i),Vr(i),qa(i),Gr(i,n),Hr(i,n),ja(i,n);break;default:t("Unsupported browser!");break}return s}const Wl=N_({window:typeof window>"u"?void 0:window});function ki(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class bu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}}function F_(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const Xo=Wl.default||Wl,Is=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Xo.browserDetails.browser}getVersion(){return Xo.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Xo.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},O_=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Tu=()=>Math.random().toString(36).slice(2),Xl={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class k_ extends bu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Xl,this.browser=Is.getBrowser(),this.browserVersion=Is.getVersion(),this.pack=Wh,this.unpack=Hh,this.supports=(function(){const t={browser:Is.isBrowserSupported(),webRTC:Is.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Xl),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!Is.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=O_,this.randomToken=Tu}}const Kt=new k_,z_="PeerJS: ";class B_{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[z_,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var De=new B_,bc={},V_=Object.prototype.hasOwnProperty,Xt="~";function $s(){}Object.create&&($s.prototype=Object.create(null),new $s().__proto__||(Xt=!1));function G_(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Eu(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new G_(t,n||i,s),o=Xt?Xt+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function Yr(i,e){--i._eventsCount===0?i._events=new $s:delete i._events[e]}function Gt(){this._events=new $s,this._eventsCount=0}Gt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)V_.call(t,n)&&e.push(Xt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Gt.prototype.listeners=function(e){var t=Xt?Xt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};Gt.prototype.listenerCount=function(e){var t=Xt?Xt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Gt.prototype.emit=function(e,t,n,s,r,o){var a=Xt?Xt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};Gt.prototype.on=function(e,t,n){return Eu(this,e,t,n,!1)};Gt.prototype.once=function(e,t,n){return Eu(this,e,t,n,!0)};Gt.prototype.removeListener=function(e,t,n,s){var r=Xt?Xt+e:e;if(!this._events[r])return this;if(!t)return Yr(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&Yr(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:Yr(this,r)}return this};Gt.prototype.removeAllListeners=function(e){var t;return e?(t=Xt?Xt+e:e,this._events[t]&&Yr(this,t)):(this._events=new $s,this._eventsCount=0),this};Gt.prototype.off=Gt.prototype.removeListener;Gt.prototype.addListener=Gt.prototype.on;Gt.prefixed=Xt;Gt.EventEmitter=Gt;bc=Gt;var zi={};ki(zi,"ConnectionType",()=>ai);ki(zi,"PeerErrorType",()=>wt);ki(zi,"BaseConnectionErrorType",()=>Ka);ki(zi,"DataConnectionErrorType",()=>Tc);ki(zi,"SerializationType",()=>co);ki(zi,"SocketEventType",()=>ii);ki(zi,"ServerMessageType",()=>Bt);var ai=(function(i){return i.Data="data",i.Media="media",i})({}),wt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Ka=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),Tc=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),co=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),ii=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Bt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const wu="1.5.5";class H_ extends bc.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+wu),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),De.log("Server message received:",r)}catch{De.log("Invalid server message",s.data);return}this.emit(ii.Message,r)},this._socket.onclose=s=>{this._disconnected||(De.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(ii.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),De.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){De.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Bt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(ii.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Cu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===ai.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){De.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;De.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(De.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:Bt.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":De.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Ka.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":De.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Ka.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":De.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},De.log("Listening for data channel"),e.ondatachannel=o=>{De.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},De.log("Listening for remote stream"),e.ontrack=o=>{De.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===ai.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){De.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);De.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),De.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ai.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Bt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(wt.WebRTC,s),De.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(wt.WebRTC,n),De.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();De.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),De.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Bt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(wt.WebRTC,s),De.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(wt.WebRTC,n),De.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;De.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),De.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(wt.WebRTC,o),De.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){De.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),De.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(wt.WebRTC,t),De.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(De.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return De.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){De.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Au extends bc.EventEmitter{emitError(e,t){De.error("Error:",t),this.emit("error",new W_(`${e}`,t))}}class W_ extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Ru extends Au{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var ec;const Gs=class Gs extends Ru{get type(){return ai.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Gs.ID_PREFIX+Kt.randomToken(),this._negotiator=new Cu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{De.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{De.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){De.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Bt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Bt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:De.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){De.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};ec=new WeakMap,Es(Gs,ec,Gs.ID_PREFIX="mc_");let Jr=Gs;class X_{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",wu),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){De.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Kt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Kt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw De.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var tc,nc;const wi=class wi extends Ru{get type(){return ai.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||wi.ID_PREFIX+Tu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Cu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{De.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{De.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{De.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Tc.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Bt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Bt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:De.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};tc=new WeakMap,nc=new WeakMap,Es(wi,tc,wi.ID_PREFIX="dc_"),Es(wi,nc,wi.MAX_BUFFERED_AMOUNT=8388608);let Zr=wi;class Ec extends Zr{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Zr.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return De.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Yo extends Ec{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new bu,this.serialization=co.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Hh(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=F_(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Wh(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);De.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Y_ extends Ec{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=co.None}}class q_ extends Ec{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Kt.chunkedMTU){this.emitError(Tc.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=co.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var ic;const Hs=class Hs extends Au{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Y_,json:q_,binary:Yo,"binary-utf8":Yo,default:Yo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Kt.CLOUD_HOST,port:Kt.CLOUD_PORT,path:"/",key:Hs.DEFAULT_KEY,token:Kt.randomToken(),config:Kt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Kt.CLOUD_HOST?this._options.secure=Kt.isSecure():this._options.host==Kt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&De.setLogFunction(this._options.logFunction),De.logLevel=this._options.debug||0,this._api=new X_(t),this._socket=this._createServerConnection(),!Kt.supports.audioVideo&&!Kt.supports.data){this._delayedAbort(wt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Kt.validateId(n)){this._delayedAbort(wt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(wt.ServerError,s))}_createServerConnection(){const e=new H_(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(ii.Message,t=>{this._handleMessage(t)}),e.on(ii.Error,t=>{this._abort(wt.SocketError,t)}),e.on(ii.Disconnected,()=>{this.disconnected||(this.emitError(wt.Network,"Lost connection to server."),this.disconnect())}),e.on(ii.Close,()=>{this.disconnected||this._abort(wt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Bt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Bt.Error:this._abort(wt.ServerError,n.msg);break;case Bt.IdTaken:this._abort(wt.UnavailableID,`ID "${this.id}" is taken`);break;case Bt.InvalidKey:this._abort(wt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Bt.Leave:De.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Bt.Expire:this.emitError(wt.PeerUnavailable,`Could not connect to peer ${s}`);break;case Bt.Offer:{const r=n.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),De.warn(`Offer received for existing Connection ID:${r}`)),n.type===ai.Media){const c=new Jr(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===ai.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{De.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){De.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):De.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){De.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(wt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){De.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(wt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){De.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Jr(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){De.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){De.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(De.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;De.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)De.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)De.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(wt.ServerError,t))}};ic=new WeakMap,Es(Hs,ic,Hs.DEFAULT_KEY="peerjs");let Qr=Hs;const Yl=15e3;function On(i){return typeof i=="number"&&Number.isFinite(i)}function Rr(i){return i===Be.AR||i===Be.SNIPER||i===Be.KNIFE}function Pr(i){return Array.isArray(i)&&i.length===3&&On(i[0])&&On(i[1])&&On(i[2])}function $_(){const i=Ni.ROOM_CODE_CHARS,e=Ni.ROOM_CODE_LENGTH;let t="";if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const n=new Uint32Array(e);crypto.getRandomValues(n);for(let s=0;s<e;s++)t+=i[n[s]%i.length]}else for(let n=0;n<e;n++)t+=i[Math.floor(Math.random()*i.length)];return t}class j_{constructor(){this._peer=null,this._conn=null,this._isHost=!1,this._connected=!1,this._roomCode=null,this._listeners=new Map}on(e,t){if(typeof e!="string"||typeof t!="function")return()=>{};let n=this._listeners.get(e);return n||(n=new Set,this._listeners.set(e,n)),n.add(t),()=>{n.delete(t),n.size===0&&this._listeners.delete(e)}}_emit(e,t){const n=this._listeners.get(e);if(!(!n||n.size===0))for(const s of Array.from(n))try{s(t)}catch(r){console.error(`[NetworkManager] Error in "${e}" listener:`,r)}}createRoom(){this._cleanup(!1),this._isHost=!0;const e=$_(),t=Fl+e;return new Promise((n,s)=>{let r=!1;const o=new Qr(t);this._peer=o;const a=setTimeout(()=>{r||(r=!0,this._cleanup(!1),s(new Error("Timed out while creating room")))},Yl);o.on("open",()=>{r||this._peer!==o||(r=!0,clearTimeout(a),this._roomCode=e,o.on("connection",c=>{if(this._peer!==o){try{c.close()}catch{}return}if(this._conn){c.on("open",()=>{try{c.close()}catch{}});try{c.close()}catch{}return}this._setupConnection(c)}),n(e))}),o.on("error",c=>{if(!r){r=!0,clearTimeout(a),this._cleanup(!1),s(c);return}this._emit("error",c)}),o.on("close",()=>{this._peer===o&&this._cleanup(!0)})})}joinRoom(e){const t=typeof e=="string"?e.trim().toUpperCase():"";return t.length!==Ni.ROOM_CODE_LENGTH?Promise.reject(new Error(`Invalid room code: must be ${Ni.ROOM_CODE_LENGTH} characters`)):(this._cleanup(!1),this._isHost=!1,this._roomCode=t,new Promise((n,s)=>{let r=!1;const o=new Qr;this._peer=o;const a=h=>{r||(r=!0,clearTimeout(l),this._cleanup(!1),s(h instanceof Error?h:new Error(String(h))))},c=()=>{r||(r=!0,clearTimeout(l),n())},l=setTimeout(()=>{a(new Error("Connection timed out after 15 seconds"))},Yl);o.on("open",()=>{if(r||this._peer!==o)return;const h=o.connect(Fl+t,{reliable:!0,serialization:"json"});if(!h){a(new Error("Failed to initiate peer connection"));return}this._setupConnection(h,c,a)}),o.on("error",h=>{if(!r){a(h);return}this._emit("error",h)}),o.on("close",()=>{if(!r){a(new Error("Peer closed before connection opened"));return}this._peer===o&&this._cleanup(!0)})}))}_setupConnection(e,t,n){this._conn=e;let s=!1;const r=()=>{s||this._conn!==e||(s=!0,this._connected=!0,this._emit("connected",{peerId:e.peer,isHost:this._isHost,roomCode:this._roomCode}),typeof t=="function"&&t())};e.on("open",r),e.on("data",o=>{this._conn===e&&this._handleIncomingData(o)}),e.on("close",()=>{if(this._conn!==e)return;const o=this._connected;this._connected=!1,this._conn=null,!s&&typeof n=="function"&&n(new Error("Connection closed before opening")),o&&this._emit("disconnected")}),e.on("error",o=>{this._conn===e&&(!s&&typeof n=="function"&&n(o),this._emit("error",o))}),e.open&&r()}_handleIncomingData(e){if(!e||typeof e!="object"||Array.isArray(e))return;const t=On(e.t)?e.t:Date.now();switch(e.type){case cn.STATE:{if(!Pr(e.pos)||!On(e.yaw)||!On(e.pitch))return;this._emit("state",{type:cn.STATE,t,pos:[e.pos[0],e.pos[1],e.pos[2]],yaw:e.yaw,pitch:e.pitch,isCrouching:typeof e.isCrouching=="boolean"?e.isCrouching:!1,weaponId:Rr(e.weaponId)?e.weaponId:Be.AR,isADS:typeof e.isADS=="boolean"?e.isADS:!1});break}case cn.SHOOT:{if(!Pr(e.origin)||!Pr(e.dir))return;this._emit("shoot",{type:cn.SHOOT,t,origin:[e.origin[0],e.origin[1],e.origin[2]],dir:[e.dir[0],e.dir[1],e.dir[2]],weaponId:Rr(e.weaponId)?e.weaponId:Be.AR});break}case cn.HIT:{if(!On(e.damage)||e.damage<0||typeof e.isHeadshot!="boolean")return;this._emit("hit",{type:cn.HIT,t,target:typeof e.target=="string"?e.target:"remote",damage:e.damage,isHeadshot:e.isHeadshot,isMidAir:typeof e.isMidAir=="boolean"?e.isMidAir:!1});break}case cn.RESPAWN:{if(!Pr(e.pos)||!On(e.yaw)||!On(e.hp)||e.killerScored!==void 0&&typeof e.killerScored!="boolean")return;this._emit("respawn",{type:cn.RESPAWN,t,pos:[e.pos[0],e.pos[1],e.pos[2]],yaw:e.yaw,hp:e.hp,killerScored:!!e.killerScored});break}}}_send(e){if(this.isConnected())try{this._conn.send(e)}catch(t){this._emit("error",t)}}sendState(e,t,n,s=!1,r=Be.AR,o=!1){this.isConnected()&&this._send({type:cn.STATE,t:Date.now(),pos:e,yaw:t,pitch:n,isCrouching:!!s,weaponId:Rr(r)?r:Be.AR,isADS:!!o})}sendShoot(e,t,n=Be.AR){this.isConnected()&&this._send({type:cn.SHOOT,t:Date.now(),origin:e,dir:t,weaponId:Rr(n)?n:Be.AR})}sendHit(e,t,n=!1){this.isConnected()&&this._send({type:cn.HIT,t:Date.now(),target:"remote",damage:e,isHeadshot:!!t,isMidAir:!!n})}sendRespawn(e,t,n=100,s=!1){this.isConnected()&&this._send({type:cn.RESPAWN,t:Date.now(),pos:e,yaw:t,hp:n,killerScored:!!s})}isConnected(){return!!(this._connected&&this._conn&&this._conn.open)}isHost(){return this._isHost}disconnect(){this._cleanup(!0)}_cleanup(e){const t=this._connected,n=this._conn,s=this._peer;if(this._connected=!1,this._conn=null,this._peer=null,this._isHost=!1,this._roomCode=null,n)try{n.close()}catch{}if(s)try{s.destroy()}catch{}t&&e&&this._emit("disconnected")}}function Bi(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Jt(i,e){const t=Bi(e),n=new Float32Array(i*i);for(let s=0;s<n.length;s++)n[s]=t();return function(r,o){const a=(r%1+1)%1*i,c=(o%1+1)%1*i,l=Math.floor(a)%i,h=Math.floor(c)%i,u=(l+1)%i,d=(h+1)%i,f=a-Math.floor(a),g=c-Math.floor(c),v=f*f*(3-2*f),m=g*g*(3-2*g),p=n[h*i+l],S=n[h*i+u],y=n[d*i+l],_=n[d*i+u],L=p+(S-p)*v,E=y+(_-y)*v;return L+(E-L)*m}}function rn(i,{repeatX:e=1,repeatY:t=1,clampY:n=!1,isColor:s=!0}={}){const r=new ro(i);return r.wrapS=ds,r.wrapT=n?Bn:ds,r.repeat.set(e,t),r.magFilter=sn,r.minFilter=ni,r.generateMipmaps=!0,r.anisotropy=8,r.colorSpace=s?zt:kn,r.needsUpdate=!0,r}function xt(i){return i<0?0:i>255?255:i|0}function K_(i,e){const s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d"),o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d"),c=document.createElement("canvas");c.width=512,c.height=512;const l=c.getContext("2d"),h=r.createImageData(512,512),u=a.createImageData(512,512),d=l.createImageData(512,512),f=h.data,g=u.data,v=d.data,m=Jt(8,101),p=Jt(24,202),S=Jt(10,303),y=Jt(16,405),_=Bi(404),L=[[5,3,0],[-4,-3,-2],[-2,-2,-4],[3,2,-1]];for(let x=0;x<512;x++){const C=x/512,D=x<256?0:1,U=Math.min(x,Math.abs(x-256),512-x);for(let F=0;F<512;F++){const X=F/512,z=F<256?0:1,K=L[D*2+z],W=Math.min(F,Math.abs(F-256),512-F),ne=Math.min(W,U),de=m(X,C)-.5,J=p(X,C)-.5,he=S(X,C),Ie=y(X,C),H=(_()-.5)*13,Y=he>.64?(he-.64)/.36:0,fe=ne<22?Math.pow(1-ne/22,1.8)*(.55+Ie*.45):0,ie=de*16+J*10+H+Y*9;let ce=204+K[0]+ie,G=190+K[1]+ie*.94,ue=165+K[2]+ie*.85;if(fe>0){const A=fe*.42;ce=ce*(1-A)+174*A,G=G*(1-A)+152*A,ue=ue*(1-A)+118*A}const Ue=(x*512+F)*4;f[Ue]=xt(ce),f[Ue+1]=xt(G),f[Ue+2]=xt(ue),f[Ue+3]=255;const te=xt(132+J*26+H*2.1-fe*14);g[Ue]=te,g[Ue+1]=te,g[Ue+2]=te,g[Ue+3]=255;const q=xt(220-Y*36+fe*26-de*18+(_()-.5)*8);v[Ue]=q,v[Ue+1]=q,v[Ue+2]=q,v[Ue+3]=255}}r.putImageData(h,0,0),a.putImageData(u,0,0),l.putImageData(d,0,0);for(let x=0;x<850;x++){const C=_()*512,D=_()*512,U=.6+_()*1.5;r.fillStyle=_()>.35?"rgba(116, 102, 82, 0.19)":"rgba(236, 224, 200, 0.18)",r.fillRect(C,D,U,U)}r.save();for(let x=0;x<22;x++){const C=_()*512,D=_()*512,U=18+_()*44,F=(_()-.5)*Math.PI;r.translate(C,D),r.rotate(F),r.fillStyle=_()>.5?"rgba(130, 118, 98, 0.08)":"rgba(232, 221, 202, 0.09)",r.fillRect(-U*.5,-2.5,U,4+_()*4),r.setTransform(1,0,0,1,0,0)}r.restore(),r.save(),r.strokeStyle="rgba(104, 92, 74, 0.38)",r.lineWidth=1.2,a.strokeStyle="rgb(72, 72, 72)",a.lineWidth=1.4,r.beginPath(),a.beginPath();let E=64,P=178;r.moveTo(E,P),a.moveTo(E,P);const I=[[82,171],[104,176],[122,165],[144,169],[164,158]];for(const[x,C]of I)r.lineTo(x,C),a.lineTo(x,C);r.stroke(),a.stroke(),r.restore();const b=(x,C,D,U,F)=>{const X=[0,256];for(const z of X)x.fillStyle=D,x.fillRect(0,z-2.5,512,F+5),x.fillRect(z-2.5,0,F+5,512),x.fillStyle=C,x.fillRect(0,z,512,F),x.fillRect(z,0,F,512),x.fillStyle=U,x.fillRect(0,z+F,512,1.5),x.fillRect(z+F,0,1.5,512)};return b(r,"rgba(104, 90, 70, 0.86)","rgba(154, 134, 104, 0.32)","rgba(236, 224, 202, 0.48)",2.5),b(a,"rgb(34, 34, 34)","rgb(96, 96, 96)","rgb(172, 172, 172)",3),b(l,"rgb(248, 248, 248)","rgb(238, 238, 238)","rgb(202, 202, 202)",3),{map:rn(s,{repeatX:i,repeatY:e,clampY:!1,isColor:!0}),bumpMap:rn(o,{repeatX:i,repeatY:e,clampY:!1,isColor:!1}),roughnessMap:rn(c,{repeatX:i,repeatY:e,clampY:!1,isColor:!1})}}function ql(i,e){const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d"),o=r.createImageData(256,64),a=o.data,c=Jt(14,e),l=Jt(32,e+17),h=Bi(e+31);for(let d=0;d<64;d++){const f=d/64,g=Math.min(1,Math.min(f*7,(1-f)*7));for(let v=0;v<256;v++){const m=v/256,p=c(m*2,f),S=l(m*4,f*2),y=p*.65+S*.35,_=y>.24?Math.min(1,(y-.22)*1.45)*g:0,L=(h()-.5)*16,E=(d*256+v)*4;a[E]=xt(i[0]+L),a[E+1]=xt(i[1]+L),a[E+2]=xt(i[2]+L),a[E+3]=xt(_*255)}}r.putImageData(o,0,0);const u=new ro(s);return u.wrapS=ds,u.wrapT=Bn,u.repeat.set(6,1),u.anisotropy=8,u.colorSpace=zt,u.needsUpdate=!0,u}function Ir(i,e){const n=document.createElement("canvas");n.width=512,n.height=512;const s=n.getContext("2d"),r=document.createElement("canvas");r.width=512,r.height=512;const o=r.getContext("2d"),a=document.createElement("canvas");a.width=512,a.height=512;const c=a.getContext("2d"),l=s.createImageData(512,512),h=o.createImageData(512,512),u=c.createImageData(512,512),d=l.data,f=h.data,g=u.data,v=Jt(8,505),m=Jt(28,606),p=Jt(36,655),S=Bi(707);for(let C=0;C<512;C++){const D=C/512,U=D>.72?Math.pow((D-.72)/.28,1.55)*34:0,F=D>.05&&D<.14?Math.pow(1-(D-.05)/.09,1.8)*26:0;for(let X=0;X<512;X++){const z=X/512,K=v(z,D)-.5,W=m(z,D)-.5,ne=p(z*2.5,D*.18)-.5,de=D<.45?(.45-D)*.9:.15,J=(S()-.5)*11,Ie=(X<512/2?2.5:-2.5)+K*18+W*11+ne*12*de+J-U-F,H=(C*512+X)*4;d[H]=xt(214+Ie),d[H+1]=xt(198+Ie*.94),d[H+2]=xt(172+Ie*.85),d[H+3]=255;const Y=xt(130+W*30+K*14+J*1.9);f[H]=Y,f[H+1]=Y,f[H+2]=Y,f[H+3]=255;const fe=xt(226-K*18+U*.5+(S()-.5)*8);g[H]=fe,g[H+1]=fe,g[H+2]=fe,g[H+3]=255}}s.putImageData(l,0,0),o.putImageData(h,0,0),c.putImageData(u,0,0);for(let C=0;C<14;C++){const D=S()*512,U=54+S()*352,F=14+S()*34,X=8+S()*20,z=s.createRadialGradient(D,U,2,D,U,Math.max(F,X));z.addColorStop(0,"rgba(164, 146, 120, 0.22)"),z.addColorStop(1,"rgba(164, 146, 120, 0)"),s.fillStyle=z,s.beginPath(),s.ellipse(D,U,F,X,(S()-.5)*.5,0,Math.PI*2),s.fill()}const y=[138,272,398];for(const C of y)s.fillStyle="rgba(116, 102, 84, 0.34)",s.fillRect(0,C,512,1.5),s.fillStyle="rgba(242, 232, 214, 0.26)",s.fillRect(0,C+1.5,512,1),o.fillStyle="rgb(84, 84, 84)",o.fillRect(0,C,512,2);const _=[0,512/2];for(const C of _)s.fillStyle="rgba(98, 88, 74, 0.72)",s.fillRect(C,26,3,486),s.fillStyle="rgba(242, 232, 214, 0.35)",s.fillRect(C+3,26,1.5,486),o.fillStyle="rgb(34, 34, 34)",o.fillRect(C,26,3,486),o.fillStyle="rgb(166, 166, 166)",o.fillRect(C+3,26,1.5,486);const L=[64,192,320,448],E=[82,206,336];for(const C of E)for(const D of L){const U=s.createLinearGradient(D,C+4,D,C+38);U.addColorStop(0,"rgba(102, 88, 70, 0.24)"),U.addColorStop(1,"rgba(102, 88, 70, 0)"),s.fillStyle=U,s.fillRect(D-2.5,C+4,5,34),s.beginPath(),s.arc(D,C,4,0,Math.PI*2),s.fillStyle="rgba(84, 76, 66, 0.8)",s.fill(),o.beginPath(),o.arc(D,C,4,0,Math.PI*2),o.fillStyle="rgb(44, 44, 44)",o.fill()}const P=434;s.fillStyle="rgba(102, 96, 86, 0.42)",s.fillRect(0,P,512,78);const I=s.createLinearGradient(0,484,0,512);I.addColorStop(0,"rgba(150, 132, 104, 0)"),I.addColorStop(1,"rgba(128, 112, 88, 0.48)"),s.fillStyle=I,s.fillRect(0,484,512,28),s.fillStyle="rgba(70, 66, 60, 0.72)",s.fillRect(0,P,512,3),s.fillStyle="rgba(232, 222, 204, 0.42)",s.fillRect(0,P+3,512,2),o.fillStyle="rgb(62, 62, 62)",o.fillRect(0,P,512,3),o.fillStyle="rgb(168, 168, 168)",o.fillRect(0,P+3,512,2),s.fillStyle="#aba08e",s.fillRect(0,0,512,22),s.fillStyle="rgba(244, 236, 222, 0.48)",s.fillRect(0,2,512,3),s.fillStyle="#7d7466",s.fillRect(0,19,512,4),s.fillStyle="rgba(54, 48, 40, 0.62)",s.fillRect(0,23,512,5),o.fillStyle="rgb(196, 196, 196)",o.fillRect(0,0,512,22),o.fillStyle="rgb(44, 44, 44)",o.fillRect(0,22,512,5),c.fillStyle="rgb(218, 218, 218)",c.fillRect(0,0,512,22);const b=266,x=34;s.fillStyle="rgba(48, 46, 44, 0.68)",s.fillRect(0,b-4,512,3),s.fillRect(0,b+x+1,512,3),s.save(),s.globalAlpha=.78,s.fillStyle=i,s.fillRect(0,b,512,x),s.restore();for(let C=0;C<420;C++){const D=S()*512,U=b-3+S()*(x+6),F=1.5+S()*5,X=1+S()*2.5;s.fillStyle="rgba(212, 197, 173, 0.32)",s.fillRect(D,U,F,X)}s.save(),s.fillStyle="rgba(238, 232, 220, 0.42)";for(const C of[118,374])s.fillRect(C,b+11,18,3),s.fillRect(C+22,b+11,6,3),s.fillRect(C,b+18,12,2.5);s.restore();for(const C of _)s.fillStyle="rgba(52, 48, 42, 0.65)",s.fillRect(C,b-4,3,x+8);return s.save(),s.globalAlpha=.7,s.fillStyle=i,s.fillRect(0,497,512,5),s.restore(),{map:rn(n,{repeatX:e,repeatY:1,clampY:!0,isColor:!0}),bumpMap:rn(r,{repeatX:e,repeatY:1,clampY:!0,isColor:!1}),roughnessMap:rn(a,{repeatX:e,repeatY:1,clampY:!0,isColor:!1})}}function $l(i="timber"){const e=i==="olive",t=512,n=34,s=document.createElement("canvas");s.width=t,s.height=t;const r=s.getContext("2d"),o=document.createElement("canvas");o.width=t,o.height=t;const a=o.getContext("2d"),c=document.createElement("canvas");c.width=t,c.height=t;const l=c.getContext("2d"),h=document.createElement("canvas");h.width=t,h.height=t;const u=h.getContext("2d"),d=r.createImageData(t,t),f=a.createImageData(t,t),g=l.createImageData(t,t),v=d.data,m=f.data,p=g.data,S=e?2400:0,y=Jt(32,808+S),_=Jt(10,909+S),L=Jt(12,955+S),E=Bi(1010+S),P=e?4:5,I=t-n*2,b=I/P,x=e?[[94,102,74],[86,94,67],[99,107,79],[89,97,70]]:[[178,141,96],[165,129,85],[185,148,103],[170,134,90],[174,138,94]];for(let J=0;J<t;J++){const he=J/t,Ie=Math.max(0,Math.min(I-1,J-n)),H=Math.min(P-1,Math.floor(Ie/b)),Y=x[H],fe=H*.29;for(let ie=0;ie<t;ie++){const ce=ie/t,G=_(ce*.8+fe,he*1.6)*.14,ue=y(ce*.35+fe,(he+G)*7.5),Ue=y(ce*1.2,he*16),te=Math.sin((he*26+G*14+H*1.7)*Math.PI)*.5+.5,q=L(ce,he),A=(E()-.5)*8,xe=q>.65?(q-.65)*28:0,oe=e?.68:1,pe=((ue-.5)*28+(Ue-.5)*14+(te-.5)*13+A)*oe-xe,ae=(J*t+ie)*4;v[ae]=xt(Y[0]+pe),v[ae+1]=xt(Y[1]+pe*(e?.96:.87)),v[ae+2]=xt(Y[2]+pe*(e?.82:.71)),v[ae+3]=255;const Se=xt(126+(ue-.5)*44+(Ue-.5)*24+A*1.5);m[ae]=Se,m[ae+1]=Se,m[ae+2]=Se,m[ae+3]=255;const ge=xt(218+(.5-ue)*24+xe*.4+(E()-.5)*8);p[ae]=ge,p[ae+1]=ge,p[ae+2]=ge,p[ae+3]=255}}r.putImageData(d,0,0),a.putImageData(f,0,0),l.putImageData(g,0,0),u.fillStyle="rgb(0, 0, 0)",u.fillRect(0,0,t,t);for(let J=1;J<P;J++){const he=Math.round(n+J*b);r.fillStyle=e?"rgba(24, 28, 18, 0.82)":"rgba(42, 27, 14, 0.8)",r.fillRect(n,he-1,I,3),r.fillStyle=e?"rgba(136, 146, 112, 0.24)":"rgba(222, 188, 144, 0.28)",r.fillRect(n,he+2,I,1.5),a.fillStyle="rgb(26, 26, 26)",a.fillRect(n,he-1,I,3),l.fillStyle="rgb(246, 246, 246)",l.fillRect(n,he-1,I,3)}e||(r.save(),r.strokeStyle="rgba(72, 50, 28, 0.22)",r.lineWidth=28,r.beginPath(),r.moveTo(n+14,t-n-14),r.lineTo(t-n-14,n+14),r.stroke(),r.fillStyle="rgba(76, 86, 62, 0.72)",r.fillRect(n,n+b*.98,I,b*.62),r.restore()),r.strokeStyle="rgba(22, 17, 12, 0.45)",r.lineWidth=8,r.strokeRect(n+4,n+4,I-8,I-8),r.save(),r.fillStyle=e?"rgba(236, 232, 218, 0.76)":"rgba(242, 238, 228, 0.78)",r.font="bold 42px monospace",r.fillText("7.62",n+28,n+132),r.font="bold 16px monospace",r.fillText(e?"NATO BALL // 200 RDS":"MIL-SPEC // AMMO",n+28,n+156);const C=t-n-86,D=n+26;r.strokeStyle="rgba(240, 236, 224, 0.72)",r.lineWidth=3,r.strokeRect(C,D,56,56),r.font="bold 38px monospace",r.fillText("A",C+16,D+42);const U=t-n-134,F=t-n-44;for(let J=0;J<6;J++)r.beginPath(),r.moveTo(U+J*18,F+18),r.lineTo(U+J*18+9,F),r.lineTo(U+J*18+16,F),r.lineTo(U+J*18+7,F+18),r.closePath(),r.fill();r.font="bold 13px monospace",r.fillText("HANDLE WITH CARE",U-8,F-8),r.restore();for(let J=0;J<160;J++){const he=n+20+E()*(I-40),Ie=n+20+E()*(I-40);r.fillStyle=e?"rgba(88, 96, 68, 0.35)":"rgba(168, 134, 92, 0.32)",r.fillRect(he,Ie,2+E()*5,1.5)}const X=[152,t-166],z=16;for(const J of X){r.fillStyle="#2d3238",r.fillRect(J,n,z,I),r.fillStyle="rgba(168, 180, 192, 0.28)",r.fillRect(J+2,n,2,I),r.fillStyle="rgba(14, 16, 18, 0.55)",r.fillRect(J-2,n,2,I),r.fillRect(J+z,n,2,I),a.fillStyle="rgb(202, 202, 202)",a.fillRect(J,n,z,I),l.fillStyle="rgb(96, 96, 96)",l.fillRect(J,n,z,I),u.fillStyle="rgb(218, 218, 218)",u.fillRect(J,n,z,I);for(let he=0;he<P;he++){const Ie=Math.round(n+(he+.5)*b),H=J+z/2;r.beginPath(),r.arc(H,Ie,3.6,0,Math.PI*2),r.fillStyle="#181b1f",r.fill(),r.beginPath(),r.arc(H-.6,Ie-.6,2.3,0,Math.PI*2),r.fillStyle="#606a74",r.fill(),a.beginPath(),a.arc(H,Ie,3.6,0,Math.PI*2),a.fillStyle="rgb(245, 245, 245)",a.fill()}}const K=(J,he)=>{J.fillStyle=he,J.fillRect(0,0,t,n),J.fillRect(0,t-n,t,n),J.fillRect(0,0,n,t),J.fillRect(t-n,0,n,t)};K(r,"#353b42"),K(a,"rgb(190, 190, 190)"),K(l,"rgb(104, 104, 104)"),K(u,"rgb(212, 212, 212)");for(let J=0;J<420;J++){const he=E()>.5,Ie=he?E()*t:E()>.5?E()*n:t-n+E()*n,H=he?E()>.5?E()*n:t-n+E()*n:E()*t;r.fillStyle=E()>.5?"rgba(150, 162, 174, 0.16)":"rgba(18, 20, 24, 0.18)",r.fillRect(Ie,H,2+E()*5,1.5)}r.strokeStyle="#1f2328",r.lineWidth=4,r.strokeRect(2,2,t-4,t-4),r.strokeStyle="rgba(164, 176, 188, 0.45)",r.lineWidth=2,r.strokeRect(6,6,t-12,t-12),r.strokeStyle="#1b1f24",r.lineWidth=3,r.strokeRect(n,n,I,I),a.strokeStyle="rgb(228, 228, 228)",a.lineWidth=3,a.strokeRect(5,5,t-10,t-10),a.strokeStyle="rgb(38, 38, 38)",a.lineWidth=3,a.strokeRect(n,n,I,I);const W=90,ne=42,de=[[0,0,1,1],[t,0,-1,1],[0,t,1,-1],[t,t,-1,-1]];for(const[J,he,Ie,H]of de){const Y=(ie,ce)=>{ie.fillStyle=ce,ie.fillRect(Ie>0?J:J-W,H>0?he:he-ne,W,ne),ie.fillRect(Ie>0?J:J-ne,H>0?he:he-W,ne,W)};Y(r,"#282d33"),Y(a,"rgb(218, 218, 218)"),Y(l,"rgb(88, 88, 88)"),Y(u,"rgb(232, 232, 232)"),r.strokeStyle="rgba(170, 182, 194, 0.38)",r.lineWidth=1.5,r.strokeRect((Ie>0?J:J-W)+1.5,(H>0?he:he-ne)+1.5,W-3,ne-3);const fe=[[19,19],[66,19],[19,66]];for(const[ie,ce]of fe){const G=J+Ie*ie,ue=he+H*ce;r.beginPath(),r.arc(G,ue,5.5,0,Math.PI*2),r.fillStyle="#171a1e",r.fill(),r.beginPath(),r.arc(G-.8,ue-.8,3.6,0,Math.PI*2),r.fillStyle="#5c6670",r.fill(),a.beginPath(),a.arc(G,ue,5.5,0,Math.PI*2),a.fillStyle="rgb(248, 248, 248)",a.fill()}}return{map:rn(s,{repeatX:1,repeatY:1,clampY:!1,isColor:!0}),bumpMap:rn(o,{repeatX:1,repeatY:1,clampY:!1,isColor:!1}),roughnessMap:rn(c,{repeatX:1,repeatY:1,clampY:!1,isColor:!1}),metalnessMap:rn(h,{repeatX:1,repeatY:1,clampY:!1,isColor:!1})}}function qo(i=null){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d"),o=document.createElement("canvas");o.width=512,o.height=512;const a=o.getContext("2d"),c=n.createImageData(512,512),l=r.createImageData(512,512),h=a.createImageData(512,512),u=c.data,d=l.data,f=h.data,g=Jt(8,1111),v=Jt(28,1212),m=Bi(1313);for(let y=0;y<512;y++){const _=y/512,L=_>.76?Math.pow((_-.76)/.24,1.55)*28:0;for(let E=0;E<512;E++){const P=E/512,I=g(P,_)-.5,b=v(P,_)-.5,x=(m()-.5)*12,C=I*15+b*11+x-L,D=(y*512+E)*4;u[D]=xt(199+C),u[D+1]=xt(193+C*.96),u[D+2]=xt(183+C*.92),u[D+3]=255;const U=xt(130+b*28+x*2.1);d[D]=U,d[D+1]=U,d[D+2]=U,d[D+3]=255;const F=xt(222-I*20+L*.5+(m()-.5)*8);f[D]=F,f[D+1]=F,f[D+2]=F,f[D+3]=255}}n.putImageData(c,0,0),r.putImageData(l,0,0),a.putImageData(h,0,0);for(let y=0;y<600;y++)n.fillStyle=m()>.3?"rgba(94, 90, 84, 0.2)":"rgba(232, 226, 216, 0.16)",n.fillRect(m()*512,m()*512,1+m()*1.5,1+m()*1.5);const p=512/2;n.fillStyle="rgba(130, 124, 114, 0.35)",n.fillRect(0,p-4,512,9),n.fillRect(p-4,0,9,512),n.fillStyle="rgba(76, 72, 66, 0.82)",n.fillRect(0,p-1,512,3),n.fillRect(p-1,0,3,512),n.fillStyle="rgba(238, 232, 222, 0.48)",n.fillRect(0,p+2,512,2),n.fillRect(p+2,0,2,512),r.fillStyle="rgb(30, 30, 30)",r.fillRect(0,p-1,512,3),r.fillRect(p-1,0,3,512),r.fillStyle="rgb(176, 176, 176)",r.fillRect(0,p+2,512,2),r.fillRect(p+2,0,2,512);const S=[[128,128],[384,128],[128,384],[384,384]];for(const[y,_]of S){const L=n.createLinearGradient(y,_+4,y,_+28);L.addColorStop(0,"rgba(96, 90, 82, 0.2)"),L.addColorStop(1,"rgba(96, 90, 82, 0)"),n.fillStyle=L,n.fillRect(y-2,_+4,4,24),n.beginPath(),n.arc(y,_,4.5,0,Math.PI*2),n.fillStyle="rgba(78, 76, 72, 0.78)",n.fill(),r.beginPath(),r.arc(y,_,4.5,0,Math.PI*2),r.fillStyle="rgb(42, 42, 42)",r.fill()}if(i){n.fillStyle="rgba(42, 44, 46, 0.72)",n.fillRect(0,100,512,3.5),n.fillRect(0,142+.5,512,3.5),n.save(),n.globalAlpha=.78,n.fillStyle=i,n.fillRect(0,104,512,38),n.restore();for(let L=0;L<260;L++){const E=m()*512,P=102+m()*42;n.fillStyle="rgba(198, 192, 182, 0.34)",n.fillRect(E,P,1.5+m()*4,1.2+m()*2)}n.fillStyle="rgba(42, 40, 38, 0.68)",n.fillRect(p-1,100,3,46)}return n.fillStyle="#343a42",n.fillRect(0,0,512,24),n.fillStyle="rgba(180, 190, 200, 0.34)",n.fillRect(0,2,512,2),n.fillStyle="#1e2228",n.fillRect(0,24,512,3),r.fillStyle="rgb(190, 190, 190)",r.fillRect(0,0,512,24),r.fillStyle="rgb(42, 42, 42)",r.fillRect(0,24,512,3),a.fillStyle="rgb(112, 112, 112)",a.fillRect(0,0,512,24),n.fillStyle="rgba(64, 58, 50, 0.52)",n.fillRect(0,498,512,14),{map:rn(t,{repeatX:1,repeatY:1,clampY:!0,isColor:!0}),bumpMap:rn(s,{repeatX:1,repeatY:1,clampY:!0,isColor:!1}),roughnessMap:rn(o,{repeatX:1,repeatY:1,clampY:!0,isColor:!1})}}function Pu(i=1024,e=512){const t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#8cbce0"),s.addColorStop(.24,"#a7cde8"),s.addColorStop(.44,"#c7dfef"),s.addColorStop(.51,"#d8e7f2"),s.addColorStop(.56,"#e3ded2"),s.addColorStop(.66,"#d0c2ab"),s.addColorStop(1,"#baa78b"),n.fillStyle=s,n.fillRect(0,0,i,e);const r=i*.384,o=e*.205,a=n.createRadialGradient(r,e*.48,i*.02,r,e*.48,i*.34);a.addColorStop(0,"rgba(255, 232, 194, 0.32)"),a.addColorStop(.5,"rgba(252, 234, 206, 0.14)"),a.addColorStop(1,"rgba(252, 234, 206, 0)"),n.fillStyle=a,n.fillRect(0,0,i,e);const c=Bi(9191);for(let u=0;u<24;u++){const d=c()*i,f=e*(.14+c()*.3),g=i*(.04+c()*.09),v=e*(.008+c()*.018),m=.05+c()*.08,p=n.createRadialGradient(d,f,2,d,f,g);p.addColorStop(0,`rgba(255, 250, 240, ${m.toFixed(3)})`),p.addColorStop(1,"rgba(255, 250, 240, 0)"),n.save(),n.translate(d,f),n.scale(1,v/g),n.fillStyle=p,n.beginPath(),n.arc(0,0,g,0,Math.PI*2),n.fill(),n.restore()}const l=n.createRadialGradient(r,o,4,r,o,i*.18);l.addColorStop(0,"rgba(255, 252, 240, 0.92)"),l.addColorStop(.12,"rgba(255, 244, 218, 0.56)"),l.addColorStop(.36,"rgba(255, 236, 200, 0.2)"),l.addColorStop(1,"rgba(255, 236, 200, 0)"),n.fillStyle=l,n.fillRect(0,0,i,e);const h=new ro(t);return h.colorSpace=zt,h.magFilter=sn,h.minFilter=sn,h.needsUpdate=!0,h}function J_(i){const e=new ka(i),t=new Uh,n=Pu(512,256),s=new Ct(50,24,16),r=new Vt({map:n,side:Ft});t.add(new V(s,r));const o=new R(18,32,16).normalize(),a=new Ct(3.2,16,12),c=new Vt({color:new et(4.5,4,3.1)}),l=new V(a,c);l.position.copy(o).multiplyScalar(42),t.add(l);const h=new Ct(7.2,16,12),u=new Vt({color:new et(1.7,1.5,1.2),transparent:!0,opacity:.45}),d=new V(h,u);d.position.copy(o).multiplyScalar(43),t.add(d);const f=new oi(48,24),g=new Vt({color:13153427}),v=new V(f,g);v.rotation.x=-Math.PI/2,v.position.y=-4,t.add(v);const m=new Xe(36,36,10,24,1,!0),p=new Vt({color:13812132,side:Ft}),S=new V(m,p);S.position.y=.5,t.add(S);const y=e.fromScene(t,.035);return n.dispose(),s.dispose(),r.dispose(),a.dispose(),c.dispose(),h.dispose(),u.dispose(),f.dispose(),g.dispose(),m.dispose(),p.dispose(),e.dispose(),y.texture}function Z_(i,e=null){const{WIDTH:t,LENGTH:n,WALL_HEIGHT:s}=M_,r=t/2,o=n/2;e&&(i.environment=J_(e)),i.background=new et(13359072),i.fog=new mc(13359072,.0068);const a=new V(new Ct(140,28,18),new Vt({map:Pu(1024,512),side:Ft,fog:!1,depthWrite:!1}));a.raycast=()=>{},i.add(a);const c=new S_(15130580,.16);i.add(c);const l=new v_(13362168,13086086,.86);l.position.set(0,26,0),i.add(l);const h=new Dl(16773332,2.4);h.position.set(18,32,16),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=2,h.shadow.camera.far=90,h.shadow.camera.left=-24,h.shadow.camera.right=24,h.shadow.camera.top=28,h.shadow.camera.bottom=-28,h.shadow.bias=-4e-4,h.shadow.normalBias=.022,h.shadow.radius=2.4,i.add(h);const u=new Dl(11718892,.34);u.position.set(-18,16,-20),u.castShadow=!1,i.add(u);const d=[],f=[];function g(q,A,xe,oe,pe,ae,Se){const ge=new Je(q,A,xe),w=new V(ge,Se);return w.position.set(oe,pe,ae),w.castShadow=!0,w.receiveShadow=!0,w.updateMatrixWorld(!0),i.add(w),f.push(w),d.push(new Ss().setFromObject(w)),w}const v=new Fe({color:3752008,roughness:.36,metalness:.78});function m(q,A,xe,oe,pe,ae,Se){const ge=g(q,A,xe,oe,pe,ae,Se),w=.06,M=new Je(q+.04,w,xe+.04),B=new V(M,v);return B.position.set(oe,pe+A/2-w/2+.002,ae),B.castShadow=!0,B.receiveShadow=!0,B.updateMatrixWorld(!0),i.add(B),f.push(B),ge}const p=K_(t/4,n/4),S=new Fe({map:p.map,bumpMap:p.bumpMap,bumpScale:.018,roughnessMap:p.roughnessMap,roughness:1,metalness:.02}),y=new Je(t,.5,n),_=new V(y,S);_.position.set(0,-.25,0),_.receiveShadow=!0,_.updateMatrixWorld(!0),i.add(_),f.push(_);const L=new Fe({map:ql([74,70,64],1501),roughness:.9,metalness:.02,transparent:!0,opacity:.62,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),E=new V(new Di(t-.6,.14),L);E.rotation.x=-Math.PI/2,E.position.set(0,.003,0),E.receiveShadow=!0,i.add(E);const P=ql([234,224,204],1601);P.repeat.set(9,1);const I=new Fe({map:P,roughness:.88,metalness:.02,transparent:!0,opacity:.48,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(const q of[-1,1]){const A=new V(new Di(.1,n-2.4),I);A.rotation.x=-Math.PI/2,A.position.set(q*8.8,.003,0),A.receiveShadow=!0,i.add(A)}const b="#a8322d",x="#2c5b8c",C=1,D=Ir(b,t/4),U=Ir(x,t/4),F=Ir(b,o/4),X=Ir(x,o/4),z=new Fe({map:D.map,bumpMap:D.bumpMap,bumpScale:.022,roughnessMap:D.roughnessMap,roughness:1,metalness:.02}),K=new Fe({map:U.map,bumpMap:U.bumpMap,bumpScale:.022,roughnessMap:U.roughnessMap,roughness:1,metalness:.02}),W=new Fe({map:F.map,bumpMap:F.bumpMap,bumpScale:.022,roughnessMap:F.roughnessMap,roughness:1,metalness:.02}),ne=new Fe({map:X.map,bumpMap:X.bumpMap,bumpScale:.022,roughnessMap:X.roughnessMap,roughness:1,metalness:.02});g(t+C*2,s,C,0,s/2,o+C/2,z),g(t+C*2,s,C,0,s/2,-(o+C/2),K);for(const q of[-1,1]){const A=q*(r+C/2);g(C,s,o,A,s/2,o/2,W),g(C,s,o,A,s/2,-o/2,ne)}const de=$l("timber"),J=new Fe({map:de.map,bumpMap:de.bumpMap,bumpScale:.024,roughnessMap:de.roughnessMap,roughness:1,metalnessMap:de.metalnessMap,metalness:1}),he=$l("olive"),Ie=new Fe({map:he.map,bumpMap:he.bumpMap,bumpScale:.024,roughnessMap:he.roughnessMap,roughness:1,metalnessMap:he.metalnessMap,metalness:1}),H=qo(),Y=qo(b),fe=qo(x),ie=new Fe({map:H.map,bumpMap:H.bumpMap,bumpScale:.02,roughnessMap:H.roughnessMap,roughness:1,metalness:.04}),ce=new Fe({map:Y.map,bumpMap:Y.bumpMap,bumpScale:.02,roughnessMap:Y.roughnessMap,roughness:1,metalness:.04}),G=new Fe({map:fe.map,bumpMap:fe.bumpMap,bumpScale:.02,roughnessMap:fe.roughnessMap,roughness:1,metalness:.04});m(2.6,3.2,2.6,0,1.6,0,ie);for(const q of[-1,1])g(1.5,1.55,1.5,q*2.05,.775,0,J);for(const q of[-1,1])m(1.6,2.6,2.2,q*7.6,1.3,0,ie);for(const q of[-1,1]){const A=q>0?ce:G;for(const xe of[-1,1])g(1.6,1.55,1.6,xe*5.5,.775,q*5.5,J),g(1.6,1.55,1.6,xe*6.5,.775,q*12.5,J),g(1.5,1,1.5,xe*3.8,.5,q*9.5,Ie),m(3.2,2.4,.9,xe*4.2,1.2,q*14.2,A)}const Ue=[[0,0,17.5],[0,0,-17.5],[-10.5,0,16.5],[10.5,0,16.5],[-10.5,0,-16.5],[10.5,0,-16.5]].map(([q,A,xe])=>({pos:[q,A,xe],yaw:Math.atan2(q,xe)}));function te(q){if(!q){const Se=Ue[Math.floor(Math.random()*Ue.length)];return{pos:[...Se.pos],yaw:Se.yaw}}const A=Array.isArray(q)?q[0]:q.x,xe=Array.isArray(q)?q[1]??0:q.y??0,oe=Array.isArray(q)?q[2]:q.z;let pe=Ue[0],ae=-1;for(const Se of Ue){const ge=Se.pos[0]-A,w=Se.pos[1]-xe,M=Se.pos[2]-oe,B=ge*ge+w*w+M*M;B>ae&&(ae=B,pe=Se)}return{pos:[...pe.pos],yaw:pe.yaw}}return{colliders:d,mapMeshes:f,spawnPoints:Ue,getFarthestSpawn:te}}const xi=1e-4,Lr=.001,Q_=.05;class ev{constructor(){this.pos={x:0,y:0,z:0},this.vel={x:0,y:0,z:0},this.grounded=!1,this.isCrouching=!1,this.jumpBufferTimer=0,this.eyeHeight=mt.EYE_HEIGHT,this.feetOffset=0,this._justLandedPrevTick=!1}reset(e){Array.isArray(e)?(this.pos.x=e[0]??0,this.pos.y=e[1]??0,this.pos.z=e[2]??0):e&&typeof e=="object"?(this.pos.x=e.x??0,this.pos.y=e.y??0,this.pos.z=e.z??0):(this.pos.x=0,this.pos.y=0,this.pos.z=0),this.vel.x=0,this.vel.y=0,this.vel.z=0,this.grounded=!1,this.isCrouching=!1,this.jumpBufferTimer=0,this.eyeHeight=mt.EYE_HEIGHT,this.feetOffset=0,this._justLandedPrevTick=!1}queueJump(){this.jumpBufferTimer=pt.JUMP_BUFFER_SEC}step(e,t={},n=[]){const s=Math.min(Math.max(e||0,0),Q_);if(s<=0)return this._buildResult(!1,!1,!1);const r=t.forward??0,o=t.right??0,a=t.yaw??0,c=!!t.crouch,l=t.adsMult??1,h=this.grounded;let u=!1,d=!1,f=!1;this._updateCrouchState(c,n);const g=-Math.sin(a),v=-Math.cos(a),m=Math.cos(a),p=-Math.sin(a);let S=g*r+m*o,y=v*r+p*o;const _=Math.hypot(S,y);_>1e-6?(S/=_,y/=_):(S=0,y=0);const L=this.isCrouching?pt.CROUCH_SPEED:pt.RUN_SPEED,E=typeof t.weaponSpeedMult=="number"&&Number.isFinite(t.weaponSpeedMult)?t.weaponSpeedMult:1,P=L*E*l;if(this.grounded&&this.jumpBufferTimer>0){const D=Math.hypot(this.vel.x,this.vel.z),U=pt.BHOP_SOFT_CAP*E;if(D>U){const F=D-U,z=(U+F*(1-pt.BHOP_CAP_DAMPING))/D;this.vel.x*=z,this.vel.z*=z}this.vel.y=pt.JUMP_VELOCITY,this.grounded=!1,this.jumpBufferTimer=0,u=!0,d=this._justLandedPrevTick||D>pt.RUN_SPEED*E*1.02,this.isCrouching&&this._tryApplyAirFeetLift(n)}else this.jumpBufferTimer>0&&(this.jumpBufferTimer=Math.max(0,this.jumpBufferTimer-s));this.grounded?(this._applyGroundFriction(s),_>1e-6&&this._accelerateGround(S,y,P,s)):_>1e-6&&this._accelerateAir(S,y,P,s);const I=this.isCrouching?mt.CROUCH_HEIGHT:mt.HEIGHT;this._moveAxisX(s,I,n),this._moveAxisZ(s,I,n);const b=this._moveAxisY(s,I,n);if(f=!h&&this.grounded,this.grounded&&this.feetOffset>0){const D=this.feetOffset;this.pos.y=b,this.feetOffset=0,this.eyeHeight=Math.max(.4,this.eyeHeight-D)}const x=this.isCrouching?mt.CROUCH_EYE_HEIGHT+(this.grounded?0:this.feetOffset):mt.EYE_HEIGHT,C=1-Math.exp(-pt.CROUCH_LERP_SPEED*s);return this.eyeHeight+=(x-this.eyeHeight)*C,this._justLandedPrevTick=f,this._buildResult(u,d,f)}_updateCrouchState(e,t){e?(this.isCrouching=!0,this.grounded?this.feetOffset=0:this._tryApplyAirFeetLift(t)):this.isCrouching&&(this._canUncrouch(t)?(this.isCrouching=!1,this.feetOffset=0):this.grounded||this._tryApplyAirFeetLift(t))}_tryApplyAirFeetLift(e){const t=mt.CROUCH_FEET_LIFT;if(this.feetOffset>=t)return;const n=this.pos.y+t,s=n+mt.CROUCH_HEIGHT;this._intersectsAny(this.pos.x,this.pos.z,n,s,e)||(this.feetOffset=t)}_canUncrouch(e){if(this.pos.y<-xi)return!1;const t=this.pos.y,n=this.pos.y+mt.HEIGHT;return!this._intersectsAny(this.pos.x,this.pos.z,t,n,e)}_intersectsAny(e,t,n,s,r){const o=mt.RADIUS-xi,a=e-o,c=e+o,l=t-o,h=t+o;for(let u=0;u<r.length;u++){const d=r[u];if(a<d.max.x&&c>d.min.x&&n<d.max.y&&s>d.min.y&&l<d.max.z&&h>d.min.z)return!0}return!1}_applyGroundFriction(e){const t=Math.hypot(this.vel.x,this.vel.z);if(t<=1e-6){this.vel.x=0,this.vel.z=0;return}const s=Math.max(t,pt.STOP_SPEED)*pt.GROUND_FRICTION*e,o=Math.max(0,t-s)/t;this.vel.x*=o,this.vel.z*=o}_accelerateGround(e,t,n,s){const r=this.vel.x*e+this.vel.z*t,o=n-r;if(o<=0)return;let a=pt.GROUND_ACCEL*s*n;a>o&&(a=o),this.vel.x+=a*e,this.vel.z+=a*t}_accelerateAir(e,t,n,s){const r=Math.min(n,pt.AIR_WISH_SPEED),o=this.vel.x*e+this.vel.z*t,a=r-o;if(a<=0)return;let c=pt.AIR_ACCEL*s*pt.RUN_SPEED;c>a&&(c=a),this.vel.x+=c*e,this.vel.z+=c*t}_moveAxisX(e,t,n){const s=this.vel.x*e;if(s===0)return;this.pos.x+=s;const r=mt.RADIUS,o=this.pos.y+this.feetOffset+Lr,a=this.pos.y+this.feetOffset+t-Lr,c=this.pos.z-r,l=this.pos.z+r;for(let h=0;h<n.length;h++){const u=n[h];this.pos.x-r<u.max.x&&this.pos.x+r>u.min.x&&o<u.max.y&&a>u.min.y&&c<u.max.z&&l>u.min.z&&(s>0?this.pos.x=u.min.x-r-xi:this.pos.x=u.max.x+r+xi,this.vel.x=0)}}_moveAxisZ(e,t,n){const s=this.vel.z*e;if(s===0)return;this.pos.z+=s;const r=mt.RADIUS,o=this.pos.x-r,a=this.pos.x+r,c=this.pos.y+this.feetOffset+Lr,l=this.pos.y+this.feetOffset+t-Lr;for(let h=0;h<n.length;h++){const u=n[h];o<u.max.x&&a>u.min.x&&c<u.max.y&&l>u.min.y&&this.pos.z-r<u.max.z&&this.pos.z+r>u.min.z&&(s>0?this.pos.z=u.min.z-r-xi:this.pos.z=u.max.z+r+xi,this.vel.z=0)}}_moveAxisY(e,t,n){if(this.grounded)this.vel.y=-pt.GRAVITY*e,this.pos.y+=this.vel.y*e;else{const u=this.vel.y*e-.5*pt.GRAVITY*e*e;this.vel.y-=pt.GRAVITY*e,this.pos.y+=u}const s=mt.RADIUS,r=this.pos.x-s,o=this.pos.x+s,a=this.pos.z-s,c=this.pos.z+s;let l=!1,h=-1/0;for(let u=0;u<n.length;u++){const d=n[u],f=this.pos.y+this.feetOffset,g=f+t;r<d.max.x&&o>d.min.x&&f<d.max.y&&g>d.min.y&&a<d.max.z&&c>d.min.z&&(this.vel.y<=0?(this.pos.y=d.max.y-this.feetOffset,this.vel.y=0,l=!0,d.max.y>h&&(h=d.max.y)):(this.pos.y=d.min.y-t-this.feetOffset-xi,this.vel.y=0))}return this.pos.y+this.feetOffset<=0&&(this.pos.y=-this.feetOffset,this.vel.y<=0&&(this.vel.y=0,l=!0,0>h&&(h=0))),this.grounded=l,h}_buildResult(e,t,n){const s=Math.hypot(this.vel.x,this.vel.z);return{pos:{x:this.pos.x,y:this.pos.y,z:this.pos.z},vel:{x:this.vel.x,y:this.vel.y,z:this.vel.z},eyeHeight:this.eyeHeight,grounded:this.grounded,isCrouching:this.isCrouching,horizSpeed:s,speedUnits:Math.round(s*pt.UNIT_SCALE),isCounterStrafed:this.grounded&&s<pt.COUNTER_STRAFE_SPEED_THRESHOLD,justJumped:e,justBhopped:t,justLanded:n}}}const eo=new R(0,1,0),tv=new ye(0,0),jl=new Set(["KeyW","KeyA","KeyS","KeyD","Space","ControlLeft","ControlRight","KeyC"]),Dr=new R(.26,-.22,-.45),$o=new R(0,-.14,-.34);function is(i,e=new R){return Array.isArray(i)?e.set(i[0]??0,i[1]??0,i[2]??0):e.set(i.x??0,i.y??0,i.z??0)}function nv(i){let e=i;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Ei(i,e,t){return Math.max(e,Math.min(t,i))}function Ne(i,e,t){return i+(e-i)*t}function yi(i){const e=Ei(i,0,1);return e*e*(3-2*e)}function Fs(i,e,t=.003,n=.0025,s=2){const r=new ao(i,{depth:e,bevelEnabled:t>0&&n>0,bevelThickness:t,bevelSize:n,bevelSegments:s,curveSegments:10});return r.translate(0,0,-e/2),r.rotateY(Math.PI/2),r}function Iu(i=1){const e=new Ci;return e.moveTo(.048*i,.021*i),e.lineTo(.194*i,.021*i),e.quadraticCurveTo(.242*i,.009*i,.302*i,.015*i),e.bezierCurveTo(.272*i,-.024*i,.205*i,-.037*i,.122*i,-.032*i),e.lineTo(.068*i,-.027*i),e.lineTo(.06*i,-.016*i),e.lineTo(.048*i,-.016*i),e.closePath(),Fs(e,.0036*i,.0028*i,.0024*i,3)}function iv(i,e,t){const n=i*.5,s=e*.5,r=i*.22,o=new Ci;o.moveTo(-n+r,s),o.lineTo(n-r,s),o.lineTo(n,s-r*.9),o.lineTo(n,-s),o.lineTo(-n,-s),o.lineTo(-n,s-r*.9),o.closePath();const a=new ao(o,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:2});return a.translate(0,0,-t/2),a}const sv=new R(0,0,1);function rv(){return{sleeveMat:new Fe({color:3225648,roughness:.87,metalness:.05}),cuffMat:new Fe({color:2369827,roughness:.9,metalness:.04}),strapMat:new Fe({color:1513757,roughness:.86,metalness:.1}),buckleMat:new Fe({color:5397094,roughness:.34,metalness:.78}),watchCaseMat:new Fe({color:1579808,roughness:.36,metalness:.68}),watchFaceMat:new Fe({color:726560,emissive:664880,emissiveIntensity:.45,roughness:.12,metalness:.85}),watchDialMat:new Vt({color:8118467}),gloveMat:new Fe({color:1711394,roughness:.72,metalness:.14}),glovePalmMat:new Fe({color:2237739,roughness:.78,metalness:.1}),knuckleMat:new Fe({color:2896444,roughness:.36,metalness:.54}),skinMat:new Fe({color:13211250,roughness:.66,metalness:.02})}}function to(i,e,t,n,s,r=14){const o=new R().subVectors(e,i),a=o.length();if(a<1e-5)return new gt;const c=new V(new Xe(n,t,a,r),s);return c.position.copy(i).add(e).multiplyScalar(.5),c.quaternion.setFromUnitVectors(eo,o.normalize()),c}function jo(i,e,t,n,s,r=8,o=16){const a=new V(new Fn(t,n,r,o),s);return a.position.copy(i),a.quaternion.setFromUnitVectors(sv,e.clone().normalize()),a}function js(i,e,t,n={}){const s=new gt,r=new R().subVectors(e,i),o=r.length(),a=r.clone().normalize(),c=n.wristRadius??.03,l=n.elbowRadius??.047,h=n.sleeveStartFrac??.2,u=n.strapFrac??.08,d=i.clone().addScaledVector(a,o*h),f=i.clone().addScaledVector(a,o*u),g=i.clone().addScaledVector(a,o*(h+.03));s.add(to(i,g,c*.96,c*1.04,t.skinMat,12)),s.add(jo(f,a,c*1.02,.0052,t.strapMat,8,16));const v=(n.watchUp??eo).clone().normalize(),m=new R().crossVectors(a,v);m.lengthSq()<1e-4&&m.set(1,0,0),m.normalize();const p=new R().crossVectors(m,a).normalize(),S=new V(new Je(.014,.005,.018),t.buckleMat);if(S.position.copy(f).addScaledVector(p,c*1.06),S.lookAt(S.position.clone().add(a)),s.add(S),n.hasWatch){const _=i.clone().addScaledVector(a,o*(u+.075)),L=jo(_,a,c*1.04,.0042,t.strapMat,8,16);s.add(L);const E=new gt;E.position.copy(_).addScaledVector(p,c*1.07),E.quaternion.setFromUnitVectors(eo,p);const P=new V(new Xe(.0165,.0175,.0075,16),t.watchCaseMat);E.add(P);const I=new V(new oi(.0135,16),t.watchFaceMat);I.rotation.x=-Math.PI/2,I.position.y=.004,E.add(I);const b=new V(new Je(.0018,8e-4,.0085),t.watchDialMat);b.position.set(.0015,.0044,-.0025),b.rotation.y=.45,E.add(b);const x=new V(new Je(.0015,8e-4,.0062),t.watchDialMat);x.position.set(-.0022,.0044,.0012),x.rotation.y=-1.15,E.add(x),s.add(E)}const y=Ne(c,l,h)*1.08;return s.add(jo(d,a,y,.0085,t.cuffMat,8,16)),s.add(to(d,e,y*.98,l,t.sleeveMat,14)),s}function un(i,e,t,n,s){const r=new gt,o=new V(new Ct(n*1.08,8,8),s.knuckleMat);o.position.copy(i),r.add(o),r.add(to(i,e,n*1.02,n*.94,s.gloveMat,10));const a=new V(new Ct(n*.92,8,8),s.gloveMat);a.position.copy(e),r.add(a),r.add(to(e,t,n*.88,n*.76,s.skinMat,10));const c=new V(new Ct(n*.78,8,8),s.skinMat);return c.position.copy(t),r.add(c),r}function ov(i){const e=new gt;e.add(js(new R(.038,-.088,.172),new R(.155,-.225,.445),i,{wristRadius:.029,elbowRadius:.046,hasWatch:!1}));const t=new V(new lt(.026,.042,8,12),i.gloveMat);t.scale.set(.86,1.02,1.12),t.position.set(.024,-.074,.128),t.rotation.set(.42,-.22,-.18),e.add(t);const n=new V(new lt(.0085,.04,6,10),i.knuckleMat);n.position.set(.032,-.068,.106),n.rotation.set(-.34,.08,-.08),e.add(n),e.add(un(new R(.026,-.048,.106),new R(.024,-.041,.074),new R(.01,-.036,.049),.0076,i));const s=[[new R(.025,-.068,.108),new R(.011,-.068,.088),new R(-.014,-.069,.095),.0078],[new R(.025,-.084,.114),new R(.011,-.084,.094),new R(-.014,-.085,.101),.0074],[new R(.024,-.1,.12),new R(.01,-.1,.102),new R(-.013,-.1,.108),.0068]];for(const[a,c,l,h]of s)e.add(un(a,c,l,h,i));e.add(un(new R(.012,-.05,.14),new R(-.016,-.044,.13),new R(-.023,-.048,.104),.0086,i)),e.add(js(new R(-.062,-.082,-.178),new R(-.285,-.245,.135),i,{wristRadius:.029,elbowRadius:.047,hasWatch:!0,watchUp:new R(-.32,.9,-.2)}));const r=new V(new lt(.027,.044,8,12),i.glovePalmMat);r.scale.set(.92,.88,1.15),r.position.set(-.024,-.048,-.236),r.rotation.set(Math.PI/2-.12,.34,.38),e.add(r);const o=new V(new lt(.0085,.042,6,10),i.knuckleMat);o.position.set(-.036,-.056,-.242),o.rotation.set(Math.PI/2,.18,.25),e.add(o);for(let a=0;a<4;a++){const c=-.214-a*.0165,l=a===3?.0068:.0076;e.add(un(new R(-.016,-.06,c),new R(.016,-.048,c-.004),new R(.026,-.02,c-.006),l,i))}return e.add(un(new R(-.034,-.032,-.21),new R(-.036,-.008,-.238),new R(-.032,.004,-.27),.0086,i)),e}function av(i){const e=new gt;e.add(js(new R(.044,-.09,.182),new R(.165,-.23,.455),i,{wristRadius:.029,elbowRadius:.047,hasWatch:!1}));const t=new V(new lt(.027,.042,8,12),i.gloveMat);t.scale.set(.88,1.02,1.12),t.position.set(.027,-.074,.136),t.rotation.set(.38,-.2,-.15),e.add(t);const n=new V(new lt(.0085,.04,6,10),i.knuckleMat);n.position.set(.036,-.068,.116),n.rotation.set(-.28,.08,-.08),e.add(n),e.add(un(new R(.028,-.052,.114),new R(.026,-.044,.084),new R(.015,-.04,.058),.0076,i));const s=[[new R(.028,-.068,.116),new R(.014,-.068,.096),new R(-.014,-.069,.1),.0078],[new R(.028,-.085,.12),new R(.014,-.085,.1),new R(-.014,-.086,.104),.0074],[new R(.026,-.101,.125),new R(.013,-.101,.106),new R(-.013,-.101,.11),.0068]];for(const[a,c,l,h]of s)e.add(un(a,c,l,h,i));e.add(un(new R(.016,-.048,.152),new R(-.01,-.044,.156),new R(-.024,-.046,.134),.0086,i)),e.add(js(new R(-.064,-.08,-.16),new R(-.285,-.245,.15),i,{wristRadius:.029,elbowRadius:.047,hasWatch:!0,watchUp:new R(-.32,.9,-.2)}));const r=new V(new lt(.027,.044,8,12),i.glovePalmMat);r.scale.set(.94,.86,1.15),r.position.set(-.022,-.046,-.222),r.rotation.set(Math.PI/2-.1,.32,.36),e.add(r);const o=new V(new lt(.0085,.042,6,10),i.knuckleMat);o.position.set(-.035,-.052,-.226),o.rotation.set(Math.PI/2,.18,.24),e.add(o);for(let a=0;a<4;a++){const c=-.195-a*.0165,l=a===3?.0068:.0076;e.add(un(new R(-.014,-.056,c),new R(.019,-.044,c-.004),new R(.028,-.016,c-.006),l,i))}return e.add(un(new R(-.032,-.028,-.196),new R(-.034,-.008,-.224),new R(-.03,.002,-.256),.0086,i)),e}function cv(i){const e=new gt;e.add(js(new R(.03,-.044,.072),new R(.132,-.128,.305),i,{wristRadius:.031,elbowRadius:.047,sleeveStartFrac:.24,strapFrac:.07,hasWatch:!0,watchUp:new R(-.22,.92,-.18)}));const t=new V(new lt(.03,.042,8,14),i.gloveMat);t.scale.set(1.06,.9,1.15),t.rotation.set(Math.PI/2+.08,-.18,.15),t.position.set(.015,-.032,.034),e.add(t);const n=new V(new lt(.01,.046,6,10),i.knuckleMat);n.rotation.set(.05,.18,Math.PI/2),n.position.set(.006,-.008,.022),e.add(n);for(let s=0;s<4;s++){const r=.005+s*.0165,o=-.032-s*.0032,a=s===3?.0072:.008;e.add(un(new R(.004,o+.016,r+.004),new R(-.014,o-.002,r),new R(-.026,o-.012,r-.006),a,i))}return e.add(un(new R(.002,-.012,.036),new R(-.014,-.005,.02),new R(-.026,-.001,-.002),.0092,i)),e}const lv=60;function hv(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=128*.5,s=128*.5;t.clearRect(0,0,128,128);const r=t.createRadialGradient(n,s,8,n,s,56);r.addColorStop(0,"rgba(12, 10, 8, 0.85)"),r.addColorStop(.32,"rgba(24, 20, 16, 0.55)"),r.addColorStop(.62,"rgba(38, 34, 28, 0.22)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=r,t.beginPath(),t.arc(n,s,56,0,Math.PI*2),t.fill();const o=11;for(let h=0;h<o;h++){const u=h/o*Math.PI*2+Math.sin(h*3.7)*.22,d=30+h*19%24,f=4;t.strokeStyle="rgba(175, 166, 152, 0.32)",t.lineWidth=2,t.beginPath();let g=n+Math.cos(u)*11,v=s+Math.sin(u)*11;t.moveTo(g+.8,v+.8);const m=[[g,v]];for(let p=1;p<=f;p++){const S=11+(d-11)*p/f,y=Math.sin(h*5.3+p*2.9)*.16;g=n+Math.cos(u+y)*S,v=s+Math.sin(u+y)*S,m.push([g,v]),t.lineTo(g+.8,v+.8)}t.stroke(),t.strokeStyle="rgba(14, 12, 10, 0.82)",t.lineWidth=1.35,t.beginPath(),t.moveTo(m[0][0],m[0][1]);for(let p=1;p<m.length;p++)t.lineTo(m[p][0],m[p][1]);t.stroke()}t.fillStyle="rgba(148, 138, 124, 0.58)",t.beginPath();const a=18;for(let h=0;h<=a;h++){const u=h/a*Math.PI*2,d=16.5+Math.sin(h*2.7)*2.8+Math.cos(h*4.3)*1.6,f=n+Math.cos(u)*d,g=s+Math.sin(u)*d;h===0?t.moveTo(f,g):t.lineTo(f,g)}t.closePath(),t.fill(),t.fillStyle="rgba(12, 11, 10, 0.96)",t.beginPath();for(let h=0;h<=a;h++){const u=h/a*Math.PI*2,d=11.2+Math.cos(h*3.1)*1.9+Math.sin(h*5.2)*1.1,f=n+Math.cos(u)*d,g=s+Math.sin(u)*d;h===0?t.moveTo(f,g):t.lineTo(f,g)}t.closePath(),t.fill();const c=t.createRadialGradient(n,s,1,n,s,10);c.addColorStop(0,"rgba(0, 0, 0, 1.0)"),c.addColorStop(.65,"rgba(8, 7, 7, 0.95)"),c.addColorStop(1,"rgba(20, 18, 16, 0.0)"),t.fillStyle=c,t.beginPath(),t.arc(n,s,10,0,Math.PI*2),t.fill();const l=new ro(e);return l.colorSpace=zt,l.needsUpdate=!0,l}class uv{constructor(e,t){this.camera=e,this.scene=t,this.camera.rotation.order="YXZ",this.camera.parent||this.scene.add(this.camera),this.physics=new ev,this.position=new R(0,0,0),this.velocity=new R(0,0,0),this.eyeHeight=mt.EYE_HEIGHT,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.sprayShotIndex=0,this.sprayRecoilPitch=0,this.sprayRecoilYaw=0,this.grounded=!1,this.isCrouching=!1,this.horizSpeed=0,this.speedUnits=0,this.isCounterStrafed=!0,this.inputEnabled=!0,this.keys=new Set,this.weaponId=Be.AR,this.ammo={[Be.AR]:St[Be.AR].magSize,[Be.SNIPER]:St[Be.SNIPER].magSize,[Be.KNIFE]:0},this.isReloading=!1,this.reloadElapsedMs=0,this.isADS=!1,this.adsProgress=0,this.baseFov=zn.fov,this.knifeSwingTimer=0,this.knifeSwingDuration=220,this.knifeSwingHeavy=!1,this._weaponChangedFlag=!1,this._reloadStartedFlag=!1,this.lastFireTime=-1/0,this.raycaster=new Gh,this.tracers=[],this.bulletHoles=[],this.impactParticles=[],this._bulletHoleTexture=hv(),this._bulletHoleGeo=new Di(.14,.14),this._bulletHoleMat=new Vt({map:this._bulletHoleTexture,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this._impactParticleGeo=new Kr(.016,0),this._camRight=new R,this._camUp=new R,this._camForward=new R,this.weaponKickZ=0,this.weaponKickPitch=0,this.bobTime=0,this.bobAmount=0,this.muzzleFlashTimer=0,this.isInspecting=!1,this.inspectElapsed=0,this.inspectDuration=2.8,this.viewmodels={},this.muzzleAnchors={},this.muzzleFlashes={},this._buildViewmodels(),this._onKeyDown=n=>{if(this.inputEnabled&&!(n.target&&(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA"))){if(jl.has(n.code)){this.keys.add(n.code),n.code==="Space"&&(n.preventDefault(),n.repeat||this.physics.queueJump());return}n.repeat||(n.code==="Digit1"?this.switchWeapon(Be.AR):n.code==="Digit2"?this.switchWeapon(Be.SNIPER):n.code==="Digit3"?this.switchWeapon(Be.KNIFE):n.code==="KeyR"?this.startReload():n.code==="KeyF"&&this.startInspect())}},this._onKeyUp=n=>{jl.has(n.code)&&this.keys.delete(n.code)},this._onBlur=()=>{this.keys.clear(),this.isADS=!1,this.cancelInspect()},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur),this._syncCamera()}_createMuzzleFlash(e,t=1){const n=new gt,s=new Vt({color:e,transparent:!0,opacity:.92,blending:Os,depthWrite:!1}),r=new V(new Kr(.042*t,0),s);r.scale.set(1,1,1.8);const o=new V(new Je(.14*t,.022*t,.022*t),s),a=new V(new Je(.022*t,.14*t,.022*t),s);return n.add(r,o,a),n.visible=!1,n}_buildViewmodels(){this.weaponGroup=new gt,this.weaponGroup.position.copy(Dr);const e=rv(),t=new gt,n=new Fe({color:2830392,roughness:.34,metalness:.78}),s=new Fe({color:1777446,roughness:.42,metalness:.68}),r=new Fe({color:1974308,roughness:.78,metalness:.12}),o=new Fe({color:2303790,roughness:.28,metalness:.86}),a=new Fe({color:10134704,roughness:.22,metalness:.92}),c=new Fe({color:1717581,emissive:728883,emissiveIntensity:.35,roughness:.08,metalness:.9,transparent:!0,opacity:.42}),l=new Vt({color:16722719}),h=new Ci;h.moveTo(-.155,-.022),h.lineTo(-.155,.044),h.lineTo(.145,.044),h.lineTo(.145,-.008),h.lineTo(.095,-.012),h.lineTo(.088,-.046),h.lineTo(.012,-.044),h.lineTo(-.004,-.022),h.lineTo(-.088,-.022),h.lineTo(-.105,-.036),h.lineTo(-.142,-.034),h.closePath();const u=new V(Fs(h,.048,.0045,.004,2),n);t.add(u);const d=new V(new Xe(.024,.026,.295,14),n);d.rotation.x=Math.PI/2,d.position.set(0,.028,.005),t.add(d);const f=new V(new Je(.006,.018,.068),a);f.position.set(.026,.024,-.02),t.add(f);const g=new V(new Xe(.006,.008,.032,10),s);g.rotation.x=Math.PI/2,g.rotation.z=-.35,g.position.set(.028,.014,.082),t.add(g);const v=new V(new Je(.036,.01,.022),s);v.position.set(0,.04,.158),t.add(v);const m=new V(new Xe(.016,.016,.18,12),s);m.rotation.x=Math.PI/2,m.position.set(0,.02,.24),t.add(m);const p=new V(new Je(.042,.095,.14),r);p.position.set(0,-.008,.29),t.add(p);const S=new V(new Xe(.029,.031,.235,8),s);S.rotation.x=Math.PI/2,S.rotation.y=Math.PI/8,S.position.set(0,.012,-.26),t.add(S);for(let je=0;je<4;je++){const it=-.18-je*.048;for(const fn of[-1,1]){const Vi=new V(new lt(.0042,.022,4,6),r);Vi.rotation.x=Math.PI/2,Vi.position.set(fn*.028,.012,it),t.add(Vi)}}const y=new V(new Je(.022,.034,.028),o);y.position.set(0,.018,-.382),t.add(y);const _=new V(new Xe(.0105,.012,.26,16),o);_.rotation.x=Math.PI/2,_.position.set(0,.012,-.4),t.add(_);const L=new V(new Xe(.0145,.0135,.056,14),s);L.rotation.x=Math.PI/2,L.position.set(0,.012,-.525),t.add(L);for(let je=0;je<2;je++){const it=new V(new Fn(.0145,.0022,6,14),o);it.position.set(0,.012,-.512-je*.022),t.add(it)}const E=new V(new Je(.026,.009,.46),s);E.position.set(0,.052,-.11),t.add(E);for(let je=0;je<16;je++){const it=new V(new Je(.028,.004,.012),n);it.position.set(0,.058,.1-je*.028),t.add(it)}const P=new V(new Je(.028,.022,.052),s);P.position.set(0,.068,.01),t.add(P);const I=new V(new Xe(.0235,.0235,.032,16),n);I.rotation.x=Math.PI/2,I.position.set(0,.094,.01),t.add(I);const b=new V(new Xe(.021,.021,.096,18,1,!0),s);b.material=s.clone(),b.material.side=Tn,b.rotation.x=Math.PI/2,b.position.set(0,.094,.01),t.add(b);const x=new V(new Fn(.021,.0032,8,18),n);x.position.set(0,.094,-.038),t.add(x);const C=new V(new Fn(.021,.0032,8,18),n);C.position.set(0,.094,.058),t.add(C);const D=new V(new Xe(.0065,.0065,.012,10),n);D.position.set(0,.118,.01),t.add(D);const U=new V(new Xe(.0065,.0065,.012,10),n);U.rotation.z=Math.PI/2,U.position.set(.024,.094,.01),t.add(U);const F=new V(new oi(.019,18),c);F.position.set(0,.094,-.022),t.add(F);const X=new V(new Ct(.0022,8,8),l);X.position.set(0,.094,.005),t.add(X);const z=new Ci;z.moveTo(.018,-.028),z.lineTo(.082,-.028),z.quadraticCurveTo(.09,-.102,.115,-.172),z.lineTo(.052,-.186),z.quadraticCurveTo(.028,-.112,.018,-.028),z.closePath();const K=new V(Fs(z,.03,.003,.0025,2),r);t.add(K);for(let je=0;je<3;je++){const it=new V(new Je(.038,.008,.068),s);it.position.set(0,-.072-je*.036,-.056-je*.011),it.rotation.x=.24,t.add(it)}const W=new V(new Je(.04,.012,.072),s);W.position.set(0,-.18,-.086),W.rotation.x=.26,t.add(W);const ne=new V(new lt(.02,.078,6,12),r);ne.scale.set(.88,1,1.15),ne.position.set(0,-.078,.118),ne.rotation.x=-.34,t.add(ne);const de=new V(new Je(.014,.006,.068),s);de.position.set(0,-.048,.042),t.add(de);const J=new V(new lt(.003,.018,4,6),a);J.position.set(0,-.034,.048),J.rotation.x=.35,t.add(J);const he=new V(new lt(.013,.048,6,10),r);he.position.set(0,-.042,-.25),he.rotation.x=.18,t.add(he);const Ie=new At;Ie.position.set(0,.012,-.56),t.add(Ie);const H=this._createMuzzleFlash(16763989,1);H.position.copy(Ie.position),t.add(H),t.add(ov(e)),this.viewmodels[Be.AR]=t,this.muzzleAnchors[Be.AR]=Ie,this.muzzleFlashes[Be.AR]=H,this.weaponGroup.add(t);const Y=new gt,fe=new Fe({color:3885620,roughness:.76,metalness:.08}),ie=new Fe({color:1974824,roughness:.36,metalness:.8}),ce=new Fe({color:1777445,roughness:.28,metalness:.86}),G=new Fe({color:1448222,roughness:.38,metalness:.72}),ue=new Fe({color:1316377,roughness:.9,metalness:.05}),Ue=new Fe({color:11187134,roughness:.22,metalness:.92}),te=new Fe({color:862279,emissive:666445,emissiveIntensity:.42,roughness:.08,metalness:.92}),q=new Ci;q.moveTo(-.28,.026),q.lineTo(-.15,.032),q.lineTo(-.085,.012),q.lineTo(.14,.018),q.lineTo(.36,.015),q.lineTo(.36,-.026),q.lineTo(.15,-.036),q.lineTo(.02,-.04),q.lineTo(-.068,-.044),q.lineTo(-.105,-.114),q.lineTo(-.145,-.108),q.lineTo(-.28,-.086),q.closePath();const A=new jr;A.moveTo(-.23,-.014),A.lineTo(-.145,-.014),A.lineTo(-.135,-.072),A.lineTo(-.23,-.06),A.closePath(),q.holes.push(A);const xe=new V(Fs(q,.048,.005,.0045,2),fe);Y.add(xe);const oe=new V(new Je(.052,.116,.022),ue);oe.position.set(0,-.03,.29),Y.add(oe);const pe=new V(new lt(.025,.072,6,10),ue);pe.rotation.x=Math.PI/2,pe.scale.set(1.05,1,.65),pe.position.set(0,.03,.205),Y.add(pe);const ae=new V(new Xe(.024,.025,.25,14),ie);ae.rotation.x=Math.PI/2,ae.position.set(0,.024,-.01),Y.add(ae);const Se=new V(new Je(.024,.01,.23),G);Se.position.set(0,.048,-.015),Y.add(Se);const ge=new V(new Xe(.0125,.0165,.54,16),ce);ge.rotation.x=Math.PI/2,ge.position.set(0,.022,-.4),Y.add(ge);for(let je=0;je<4;je++){const it=je*Math.PI/2+Math.PI/4,fn=new V(new Xe(.0022,.0022,.36,6),G);fn.rotation.x=Math.PI/2,fn.position.set(Math.cos(it)*.0135,.022+Math.sin(it)*.0135,-.44),Y.add(fn)}const w=new V(new Xe(.016,.015,.082,12),ie);w.rotation.x=Math.PI/2,w.position.set(0,.022,-.705),Y.add(w);for(let je=0;je<3;je++){const it=new V(new Je(.042,.032,.012),ce);it.position.set(0,.022,-.678-je*.025),Y.add(it)}for(const je of[.035,-.105]){const it=new V(new Je(.026,.026,.026),G);it.position.set(0,.062,je),Y.add(it);const fn=new V(new Fn(.021,.0045,8,16),G);fn.position.set(0,.088,je),Y.add(fn)}const M=new V(new Xe(.0195,.0195,.24,16),G);M.rotation.x=Math.PI/2,M.position.set(0,.088,-.04),Y.add(M);const B=new V(new Xe(.029,.0195,.068,18),G);B.rotation.x=Math.PI/2,B.position.set(0,.088,-.19),Y.add(B);const Q=new V(new Xe(.03,.029,.045,18),ie);Q.rotation.x=Math.PI/2,Q.position.set(0,.088,-.245),Y.add(Q);const re=new V(new oi(.027,18),te);re.rotation.y=Math.PI,re.position.set(0,.088,-.268),Y.add(re);const ee=new V(new Xe(.02,.0245,.068,18),G);ee.rotation.x=Math.PI/2,ee.position.set(0,.088,.112),Y.add(ee);const Pe=new V(new Fn(.0245,.0038,8,18),ue);Pe.position.set(0,.088,.146),Y.add(Pe);const ve=new V(new oi(.022,18),te);ve.position.set(0,.088,.145),Y.add(ve);const Te=new V(new Je(.044,.044,.044),G);Te.position.set(0,.088,-.035),Y.add(Te);const qe=new V(new Xe(.011,.012,.022,14),ie);qe.position.set(0,.118,-.035),Y.add(qe);const le=new V(new Xe(.01,.011,.02,14),ie);le.rotation.z=Math.PI/2,le.position.set(.028,.088,-.035),Y.add(le);const _e=new V(new Xe(.01,.011,.018,14),ie);_e.rotation.z=Math.PI/2,_e.position.set(-.027,.088,-.035),Y.add(_e);const Re=new V(new Xe(.012,.012,.1,12),Ue);Re.rotation.x=Math.PI/2,Re.position.set(.008,.024,.072),Y.add(Re);const Le=new V(new Xe(.0045,.0055,.056,10),Ue);Le.rotation.z=-1.18,Le.rotation.y=-.22,Le.position.set(.04,.014,.074),Y.add(Le);const Ce=new V(new Ct(.0115,14,12),Ue);Ce.position.set(.066,.002,.08),Y.add(Ce);const $e=new V(new Je(.036,.078,.082),G);$e.position.set(0,-.066,-.065),Y.add($e);for(const je of[-1,1]){const it=new V(new Xe(.0055,.0055,.19,8),G);it.rotation.x=Math.PI/2,it.position.set(je*.028,-.03,-.27),Y.add(it)}const We=new At;We.position.set(0,.022,-.76),Y.add(We);const rt=this._createMuzzleFlash(8255999,1.35);rt.position.copy(We.position),Y.add(rt),Y.add(av(e)),Y.visible=!1,this.viewmodels[Be.SNIPER]=Y,this.muzzleAnchors[Be.SNIPER]=We,this.muzzleFlashes[Be.SNIPER]=rt,this.weaponGroup.add(Y);const N=new gt,be=new Fe({color:2629400,roughness:.84,metalness:.1}),Z=new Fe({color:4535592,roughness:.88,metalness:.08}),se=new Fe({color:2435634,roughness:.38,metalness:.82}),we=new Fe({color:7766671,roughness:.26,metalness:.88}),Ee=new Fe({color:14937333,roughness:.14,metalness:.96});N.add(cv(e));const He=new gt;He.position.set(-.015,-.018,.01),He.rotation.set(.28,.92,.68);const ht=new V(new Xe(.016,.0175,.128,14),be);ht.rotation.x=Math.PI/2,ht.scale.set(.78,1,1.18),ht.position.set(0,0,.026),He.add(ht);for(let je=0;je<4;je++){const it=new V(new Fn(.0165,.0032,7,14),Z);it.scale.set(.8,1.18,1),it.position.set(0,0,-.02+je*.028),He.add(it)}const Tt=new V(new Xe(.0185,.015,.024,14),se);Tt.rotation.x=Math.PI/2,Tt.scale.set(.82,1,1.2),Tt.position.set(0,0,.098),He.add(Tt);const tt=new V(new lt(.011,.056,6,12),se);tt.scale.set(1.25,1,.85),tt.position.set(0,-.003,-.044),He.add(tt);const Qt=new V(Iu(1),we);He.add(Qt);const Lt=new Ci;Lt.moveTo(.072,-.025),Lt.lineTo(.124,-.03),Lt.bezierCurveTo(.204,-.035,.27,-.022,.3,.014),Lt.bezierCurveTo(.268,-.015,.2,-.026,.124,-.022),Lt.lineTo(.072,-.019),Lt.closePath();const tr=new V(Fs(Lt,.0022,.0014,.0012,2),Ee);He.add(tr);const di=new V(new lt(.0032,.105,4,8),se);di.rotation.x=Math.PI/2,di.scale.set(1.55,1,1),di.position.set(0,.008,-.125),He.add(di),N.add(He),N.position.set(.02,-.015,.02),N.visible=!1,this.viewmodels[Be.KNIFE]=N,this.weaponGroup.add(N),this.camera.add(this.weaponGroup)}setInputEnabled(e){this.inputEnabled=!!e,this.inputEnabled||(this.keys.clear(),this.isADS=!1,this.cancelInspect())}queueJump(){this.inputEnabled&&this.physics.queueJump()}startInspect(){if(this.isReloading||this.isADS||this.knifeSwingTimer>0)return;const e=St[this.weaponId].isMelee?2.4:2.8;if(this.isInspecting){this.inspectElapsed>=this.inspectDuration*.78&&(this.inspectElapsed=0,this.inspectDuration=e);return}this.isInspecting=!0,this.inspectElapsed=0,this.inspectDuration=e}cancelInspect(){this.isInspecting=!1,this.inspectElapsed=0}setADS(e){const t=!!e;t&&(this.isReloading||St[this.weaponId].isMelee)||(t&&this.cancelInspect(),this.isADS=t)}switchWeapon(e){if(!St[e]||e===this.weaponId)return;this.cancelInspect();const t=this.muzzleFlashes[this.weaponId];t&&(t.visible=!1),this.muzzleFlashTimer=0,this.weaponId=e,this.isReloading=!1,this.reloadElapsedMs=0,this.isADS=!1,this.adsProgress=0,this.sprayShotIndex=0,this.sprayRecoilPitch=0,this.sprayRecoilYaw=0,this.weaponKickZ=.04,this.weaponKickPitch=-.14;for(const n of Object.keys(this.viewmodels))this.viewmodels[n].visible=n===this.weaponId;this.weaponGroup.visible=!0,this._weaponChangedFlag=!0}startReload(){const e=St[this.weaponId];e.isMelee||this.isReloading||this.ammo[this.weaponId]>=e.magSize||(this.cancelInspect(),this.isReloading=!0,this.reloadElapsedMs=0,this.isADS=!1,this.sprayShotIndex=0,this.sprayRecoilPitch=0,this.sprayRecoilYaw=0,this._reloadStartedFlag=!0)}setBaseFov(e){if(typeof e=="number"&&Number.isFinite(e)){this.baseFov=e;const t=St[this.weaponId],n=this.baseFov*Ne(1,t.adsFovMult,this.adsProgress);Math.abs(this.camera.fov-n)>.01&&(this.camera.fov=n,this.camera.updateProjectionMatrix())}}isScoped(){return!!(St[this.weaponId].hasScope&&this.adsProgress>.85)}isAutomaticWeapon(){return!!St[this.weaponId].automatic}isMeleeWeapon(){return!!St[this.weaponId].isMelee}handleMouseMove(e,t,n=zn.sensitivity,s=zn.adsSensitivity){const r=Ne(1,s,this.adsProgress),o=n*r;this.yaw-=e*.0022*o,this.pitch-=t*.0022*o,this.pitch=Ei(this.pitch,-mt.PITCH_LIMIT,mt.PITCH_LIMIT)}_computeCurrentSpread(){const e=St[this.weaponId],t=Ne(e.spreadBase,e.spreadAds,this.adsProgress);let n;if(!this.grounded)n=e.spreadAir;else if(this.isCounterStrafed||this.adsProgress>=.95)n=t;else{const s=pt.COUNTER_STRAFE_SPEED_THRESHOLD,o=Ei((this.horizSpeed-s)/Math.max(.01,pt.RUN_SPEED-s),0,1)*(1-this.adsProgress);n=Ne(t,Math.max(t,e.spreadMove),o)}return this.isCrouching&&(n*=e.spreadCrouchMult),n}update(e,t=[]){const n=Math.min(e,.05),s=n*1e3,r=St[this.weaponId],o=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),a=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),c=this.keys.has("ControlLeft")||this.keys.has("ControlRight")||this.keys.has("KeyC"),l=Ne(1,pt.ADS_SPEED_MULT,this.adsProgress),h=this.physics.step(n,{forward:o,right:a,yaw:this.yaw,crouch:c,adsMult:l,weaponSpeedMult:r.speedMult??1},t);this.position.set(h.pos.x,h.pos.y,h.pos.z),this.velocity.set(h.vel.x,h.vel.y,h.vel.z),this.eyeHeight=h.eyeHeight,this.grounded=h.grounded,this.isCrouching=h.isCrouching,this.horizSpeed=h.horizSpeed,this.speedUnits=h.speedUnits,this.isCounterStrafed=h.isCounterStrafed;let u=!1;this.isReloading&&(this.reloadElapsedMs+=s,this.reloadElapsedMs>=r.reloadTimeMs&&(this.ammo[this.weaponId]=r.magSize,this.isReloading=!1,this.reloadElapsedMs=0,u=!0));const d=this.isADS&&!this.isReloading?1:0,f=1-Math.exp(-r.adsSpeed*n);this.adsProgress+=(d-this.adsProgress)*f,Math.abs(d-this.adsProgress)<.002&&(this.adsProgress=d);const g=this.baseFov*Ne(1,r.adsFovMult,this.adsProgress);Math.abs(this.camera.fov-g)>.01&&(this.camera.fov=g,this.camera.updateProjectionMatrix());const v=Math.exp(-r.recoilRecovery*n);this.recoilPitch*=v,this.recoilYaw*=v;const m=r.recoilResetDelayMs||180;if(performance.now()-this.lastFireTime>m){if(this.sprayShotIndex>0){const ce=r.recoilDecayRate??11;this.sprayShotIndex=Math.max(0,this.sprayShotIndex-ce*n)}this.sprayRecoilPitch*=v,this.sprayRecoilYaw*=v,Math.abs(this.sprayRecoilPitch)<1e-4&&(this.sprayRecoilPitch=0),Math.abs(this.sprayRecoilYaw)<1e-4&&(this.sprayRecoilYaw=0)}const p=Math.exp(-16*n);this.weaponKickZ*=p,this.weaponKickPitch*=p;const S=this.grounded&&this.horizSpeed>.25?Math.min(this.horizSpeed/pt.RUN_SPEED,1):0;this.bobAmount+=(S-this.bobAmount)*Math.min(1,12*n),this.bobAmount>.001&&(this.bobTime+=n*11);const y=1-this.adsProgress*.85,_=Math.cos(this.bobTime)*.008*this.bobAmount*y,L=Math.abs(Math.sin(this.bobTime))*.009*this.bobAmount*y,E=this.isReloading?Ei(this.reloadElapsedMs/r.reloadTimeMs,0,1):0,P=this.isReloading?Math.sin(E*Math.PI):0;let I=0,b=0,x=0,C=0,D=0,U=0;if(this.knifeSwingTimer>0){this.knifeSwingTimer=Math.max(0,this.knifeSwingTimer-s);const ce=1-this.knifeSwingTimer/this.knifeSwingDuration,G=Math.sin(ce*Math.PI);this.knifeSwingHeavy?(I=-.16*G,b=-.08*G,x=-.22*G,C=-.52*G,D=.28*G,U=.32*G):(I=-.28*G,b=.02*G,x=-.12*G,D=.78*G,U=.42*G)}let F=0,X=0,z=0,K=0,W=0,ne=0;if(this.isInspecting)if(this.isReloading||this.isADS||this.knifeSwingTimer>0)this.cancelInspect();else if(this.inspectElapsed+=n,this.inspectElapsed>=this.inspectDuration)this.cancelInspect();else{const ce=Ei(this.inspectElapsed/this.inspectDuration,0,1);if(r.isMelee)if(ce<.2){const G=yi(ce/.2);F=Ne(0,-.075,G),X=Ne(0,.052,G),z=Ne(0,.075,G),K=Ne(0,.32,G),W=Ne(0,.38,G),ne=Ne(0,-.52,G)}else if(ce<.52){const G=yi((ce-.2)/.32);F=Ne(-.075,-.088,G),X=Ne(.052,.06,G),z=Ne(.075,.082,G),K=Ne(.32,.38,G),W=Ne(.38,.5,G),ne=Ne(-.52,-.84,G)}else if(ce<.82){const G=yi((ce-.52)/.3),ue=Math.sin(G*Math.PI);F=Ne(-.088,-.052,G),X=Ne(.06,.04,G)+ue*.016,z=Ne(.082,.064,G),K=Ne(.38,.16,G),W=Ne(.5,-.46,G),ne=Ne(-.84,.72,G)}else{const G=yi((ce-.82)/.18);F=Ne(-.052,0,G),X=Ne(.04,0,G),z=Ne(.064,0,G),K=Ne(.16,0,G),W=Ne(-.46,0,G),ne=Ne(.72,0,G)}else if(ce<.22){const G=yi(ce/.22);F=Ne(0,-.12,G),X=Ne(0,.046,G),z=Ne(0,.04,G),K=Ne(0,.14,G),W=Ne(0,.62,G),ne=Ne(0,-.34,G)}else if(ce<.55){const G=(ce-.22)/.33,ue=Math.sin(G*Math.PI);F=-.12-.014*ue,X=.046+.008*ue,z=.04+.012*ue,K=.14+.055*ue,W=.62+.095*ue,ne=-.34-.11*ue}else if(ce<.82){const G=yi((ce-.55)/.27),ue=Math.sin(G*Math.PI);F=Ne(-.12,-.04,G),X=Ne(.046,.032,G)+ue*.014,z=Ne(.04,.025,G),K=Ne(.14,.1,G),W=Ne(.62,-.34,G),ne=Ne(-.34,.58,G)}else{const G=yi((ce-.82)/.18);F=Ne(-.04,0,G),X=Ne(.032,0,G),z=Ne(.025,0,G),K=Ne(.1,0,G),W=Ne(-.34,0,G),ne=Ne(.58,0,G)}}const de=Ne(Dr.x,$o.x,this.adsProgress),J=Ne(Dr.y,$o.y,this.adsProgress),he=Ne(Dr.z,$o.z,this.adsProgress);this.weaponGroup.position.set(de+_+I+F,J-L-P*.11+b+X,he+this.weaponKickZ+x+z),this.weaponGroup.rotation.set(this.weaponKickPitch-P*.36+C+K,D+W,P*.42+U+ne);const Ie=this.isScoped();if(this.weaponGroup.visible=!Ie,this.muzzleFlashTimer>0&&(this.muzzleFlashTimer-=s,this.muzzleFlashTimer<=0)){this.muzzleFlashTimer=0;const ce=this.muzzleFlashes[this.weaponId];ce&&(ce.visible=!1)}for(let ce=this.tracers.length-1;ce>=0;ce--){const G=this.tracers[ce];G.ageMs+=s,G.ageMs>=G.durationMs?(this.scene.remove(G.mesh),G.mesh.geometry.dispose(),G.mesh.material.dispose(),this.tracers.splice(ce,1)):G.mesh.material.opacity=.9*(1-G.ageMs/G.durationMs)}for(let ce=this.impactParticles.length-1;ce>=0;ce--){const G=this.impactParticles[ce];if(G.ageMs+=s,G.ageMs>=G.durationMs)this.scene.remove(G.mesh),G.mesh.material.dispose(),this.impactParticles.splice(ce,1);else{G.vel.y-=9.8*n,G.mesh.position.addScaledVector(G.vel,n);const ue=1-G.ageMs/G.durationMs;G.mesh.material.opacity=ue*(G.isSpark?.95:.72),G.mesh.scale.setScalar(G.initialScale*(.2+.8*ue))}}this._syncCamera();const H=this._computeCurrentSpread(),Y=Ei(H/Math.max(r.spreadAir,.001),0,1),fe=this._weaponChangedFlag,ie=this._reloadStartedFlag;return this._weaponChangedFlag=!1,this._reloadStartedFlag=!1,{speedUnits:h.speedUnits,isBhopSpeed:h.speedUnits>=pt.BHOP_SPEED_HIGHLIGHT_UNITS,grounded:h.grounded,isCrouching:h.isCrouching,justJumped:h.justJumped,justBhopped:h.justBhopped,justLanded:h.justLanded,weaponChanged:fe,reloadStarted:ie,reloadFinished:u,spreadNormalized:Y,isScoped:Ie,weaponHUD:{weaponId:this.weaponId,weaponName:r.name,ammo:this.ammo[this.weaponId],magSize:r.magSize,isReloading:this.isReloading,reloadProgress:E}}}_syncCamera(){this.camera.position.set(this.position.x,this.position.y+this.eyeHeight,this.position.z),this.camera.rotation.set(this.pitch+this.recoilPitch,this.yaw+this.recoilYaw,0,"YXZ")}tryShoot(e=[],t=[],n=!1){this.cancelInspect();const s=St[this.weaponId],r=!!s.isMelee;if(!r&&this.isReloading)return null;if(!r&&this.ammo[this.weaponId]<=0)return this.startReload(),null;const o=performance.now(),a=r&&n&&s.heavyCooldownMs?s.heavyCooldownMs:s.fireCooldownMs;if(o-this.lastFireTime<a)return null;this.lastFireTime=o,this._syncCamera(),this.camera.updateMatrixWorld(!0),this.raycaster.setFromCamera(tv,this.camera);const c=!r&&Array.isArray(s.sprayPattern)&&s.sprayPattern.length>0;if(c){const S=s.sprayPattern,y=Math.min(Math.floor(this.sprayShotIndex),S.length-1),[_,L]=S[y],E=this.isCrouching?.78:1;this.sprayRecoilPitch=_*E,this.sprayRecoilYaw=L*E}else this.sprayRecoilPitch=0,this.sprayRecoilYaw=0;const l=r?0:this._computeCurrentSpread();if(l>0||this.sprayRecoilPitch!==0||this.sprayRecoilYaw!==0){if(this.camera.matrixWorld.extractBasis(this._camRight,this._camUp,this._camForward),(this.sprayRecoilPitch!==0||this.sprayRecoilYaw!==0)&&this.raycaster.ray.direction.addScaledVector(this._camUp,this.sprayRecoilPitch).addScaledVector(this._camRight,this.sprayRecoilYaw),l>0){const S=Math.random()*Math.PI*2,y=Math.sqrt(Math.random())*l;this.raycaster.ray.direction.addScaledVector(this._camRight,Math.cos(S)*y).addScaledVector(this._camUp,Math.sin(S)*y)}this.raycaster.ray.direction.normalize()}this.raycaster.near=0,this.raycaster.far=s.maxRange;const h=e&&e.length>0?this.raycaster.intersectObjects(e,!0):[],u=h.length>0?h[0].distance:s.maxRange,d=t&&t.length>0?this.raycaster.intersectObjects(t,!1):[],f=!this.grounded;let g=null,v;if(d.length>0&&d[0].distance<u){const S=d[0],y=S.object.userData.hitbox==="head";g={damage:r&&n?s.heavyDamage:y?s.headDamage:s.bodyDamage,isHeadshot:y,isMidAir:f},v=S.point.clone()}else if(h.length>0){if(v=h[0].point.clone(),!r&&h[0].face){const S=h[0].face.normal.clone().transformDirection(h[0].object.matrixWorld).normalize();this.spawnBulletImpact(h[0].point,S)}}else v=this.raycaster.ray.origin.clone().addScaledVector(this.raycaster.ray.direction,s.maxRange);if(r)this.knifeSwingHeavy=!!n,this.knifeSwingDuration=n?280:210,this.knifeSwingTimer=this.knifeSwingDuration;else{this.ammo[this.weaponId]=Math.max(0,this.ammo[this.weaponId]-1),this.ammo[this.weaponId]===0&&this.startReload();const S=new R,y=this.muzzleAnchors[this.weaponId];if(y&&(y.getWorldPosition(S),this.spawnTracer([S.x,S.y,S.z],[v.x,v.y,v.z],this.weaponId)),c){const E=s.viewpunchRatio??.55;this.recoilPitch=Math.max(this.recoilPitch+s.recoilPitch*E,this.sprayRecoilPitch*E),this.recoilYaw=-this.sprayRecoilYaw*E+(Math.random()*2-1)*s.recoilYawSpread,this.isReloading||(this.sprayShotIndex=Math.min(this.sprayShotIndex+1,s.sprayPattern.length-1))}else this.recoilPitch+=s.recoilPitch,this.recoilYaw+=(Math.random()*2-1)*s.recoilYawSpread;const _=this.weaponId===Be.SNIPER;this.weaponKickZ=_?.11:.055,this.weaponKickPitch=_?.14:.075;const L=this.muzzleFlashes[this.weaponId];L&&!this.isScoped()&&(L.visible=!0,L.rotation.z=Math.random()*Math.PI*2,this.muzzleFlashTimer=s.muzzleFlashMs)}const{origin:m,direction:p}=this.raycaster.ray;return{origin:[m.x,m.y,m.z],dir:[p.x,p.y,p.z],hitPoint:[v.x,v.y,v.z],weaponId:this.weaponId,isMidAir:f,hit:g}}spawnTracer(e,t,n=Be.AR){const s=St[n]||St[Be.AR],r=is(e),o=is(t),a=o.clone().sub(r),c=a.length();if(c<.01)return;const l=new Xe(s.tracerRadius,s.tracerRadius,c,6,1,!0),h=new Vt({color:s.tracerColor,transparent:!0,opacity:.9,blending:Os,depthWrite:!1}),u=new V(l,h);u.position.copy(r).add(o).multiplyScalar(.5),u.quaternion.setFromUnitVectors(eo,a.normalize()),this.scene.add(u),this.tracers.push({mesh:u,ageMs:0,durationMs:s.tracerDurationMs})}spawnBulletImpact(e,t){const n=is(e),s=is(t);s.lengthSq()<1e-6?s.set(0,1,0):s.normalize();const r=new V(this._bulletHoleGeo,this._bulletHoleMat);if(r.position.copy(n).addScaledVector(s,.006),r.lookAt(n.x+s.x,n.y+s.y,n.z+s.z),r.rotateZ(Math.random()*Math.PI*2),this.bulletHoles.length>=lv){const l=this.bulletHoles.shift();this.scene.remove(l),l.geometry&&l.geometry!==this._bulletHoleGeo&&l.geometry.dispose(),l.material&&l.material!==this._bulletHoleMat&&l.material.dispose()}this.scene.add(r),this.bulletHoles.push(r);const o=new R;Math.abs(s.y)<.9?o.set(0,1,0).cross(s).normalize():o.set(1,0,0).cross(s).normalize();const a=new R().crossVectors(s,o).normalize(),c=3+Math.floor(Math.random()*3);for(let l=0;l<c;l++){const h=l<2,u=h?Math.random()<.5?16765562:16752440:Math.random()<.5?13156272:10261639,d=new Vt({color:u,transparent:!0,opacity:h?.95:.72,blending:h?Os:Ai,depthWrite:!1}),f=new V(this._impactParticleGeo,d),g=h?.55+Math.random()*.45:.9+Math.random()*.7;f.scale.setScalar(g),f.position.copy(n).addScaledVector(s,.015);const v=Math.random()*Math.PI*2,m=(h?1.4:.9)+Math.random()*1.4,p=(h?2.2:1.1)+Math.random()*1.8,S=new R().addScaledVector(s,p).addScaledVector(o,Math.cos(v)*m).addScaledVector(a,Math.sin(v)*m);h&&(S.y+=.7),this.scene.add(f),this.impactParticles.push({mesh:f,vel:S,ageMs:0,durationMs:150+Math.random()*60,initialScale:g,isSpark:h})}}respawnAt(e,t=0){is(e,this.position),this.physics.reset({x:this.position.x,y:this.position.y,z:this.position.z}),this.velocity.set(0,0,0),this.eyeHeight=mt.EYE_HEIGHT,this.grounded=!1,this.isCrouching=!1,this.horizSpeed=0,this.speedUnits=0,this.isCounterStrafed=!0,this.ammo[Be.AR]=St[Be.AR].magSize,this.ammo[Be.SNIPER]=St[Be.SNIPER].magSize,this.isReloading=!1,this.reloadElapsedMs=0,this.isADS=!1,this.adsProgress=0,this.cancelInspect(),this.lastFireTime=-1/0,this.recoilPitch=0,this.recoilYaw=0,this.sprayShotIndex=0,this.sprayRecoilPitch=0,this.sprayRecoilYaw=0,this.weaponKickZ=0,this.weaponKickPitch=0,this.muzzleFlashTimer=0;for(const n of Object.keys(this.muzzleFlashes))this.muzzleFlashes[n].visible=!1;this.weaponGroup.visible=!0,this.yaw=t,this.pitch=0,Math.abs(this.camera.fov-this.baseFov)>.01&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix()),this._syncCamera()}getState(){return{pos:[this.position.x,this.position.y,this.position.z],yaw:this.yaw,pitch:this.pitch,isCrouching:this.isCrouching,weaponId:this.weaponId,isADS:this.isADS}}getPosition(){return[this.position.x,this.position.y,this.position.z]}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),this.keys.clear();for(let e=0;e<this.tracers.length;e++){const t=this.tracers[e];this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose()}this.tracers.length=0;for(let e=0;e<this.bulletHoles.length;e++)this.scene.remove(this.bulletHoles[e]);this.bulletHoles.length=0,this._bulletHoleGeo&&this._bulletHoleGeo.dispose(),this._bulletHoleMat&&this._bulletHoleMat.dispose(),this._bulletHoleTexture&&this._bulletHoleTexture.dispose();for(let e=0;e<this.impactParticles.length;e++){const t=this.impactParticles[e];this.scene.remove(t.mesh),t.mesh.material.dispose()}if(this.impactParticles.length=0,this._impactParticleGeo&&this._impactParticleGeo.dispose(),this.weaponGroup){this.camera.remove(this.weaponGroup);const e=new Set;this.weaponGroup.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material&&!e.has(t.material)&&(e.add(t.material),t.material.dispose()))})}}}class dv{constructor(e){this.scene=e,this.group=new gt,this.scene.add(this.group),this.currentPos=new R,this.targetPos=new R,this.prevPos=new R,this.currentYaw=0,this.targetYaw=0,this.currentPitch=0,this.targetPitch=0,this.crouchFactor=0,this.targetCrouch=0,this.adsFactor=0,this.targetADS=0,this.weaponId=Be.AR,this.walkPhase=0,this.walkAmount=0,this.hasState=!1,this.weaponMeshes={},this._buildCharacter()}_buildCharacter(){const e=Ar.BODY,t=Ar.HEAD,n=new Vt({transparent:!0,opacity:0,depthWrite:!1}),s=new Fe({color:9382185,emissive:2361095,emissiveIntensity:.22,roughness:.78,metalness:.06}),r=new Fe({color:2237998,roughness:.72,metalness:.16}),o=new Fe({color:1711396,roughness:.52,metalness:.32}),a=new Fe({color:2961979,roughness:.82,metalness:.1}),c=new Fe({color:14235198,emissive:5049616,emissiveIntensity:.35,roughness:.45,metalness:.12}),l=new Fe({color:2567220,roughness:.84,metalness:.06}),h=new Fe({color:1448223,roughness:.45,metalness:.28}),u=new Fe({color:1578774,roughness:.76,metalness:.14}),d=new Fe({color:2106154,roughness:.85,metalness:.05}),f=new Fe({color:2764600,roughness:.48,metalness:.26}),g=new Fe({color:725016,emissive:1706252,emissiveIntensity:.28,roughness:.1,metalness:.9}),v=new Vt({color:16729677}),m=new Fe({color:1645344,roughness:.78,metalness:.12});this.bodyMesh=new V(new Je(e.width,e.height,e.depth),n),this.bodyMesh.position.set(0,e.centerY,0),this.bodyMesh.castShadow=!1,this.bodyMesh.receiveShadow=!1,this.bodyMesh.userData.hitbox="body";const p=new V(new Xe(.24,.195,.54,14),s);p.scale.set(1.16,1,.76),p.position.set(0,.27,0),p.castShadow=!0,p.receiveShadow=!0,this.bodyMesh.add(p);const S=new V(new Xe(.115,.145,.09,12),d);S.position.set(0,.56,0),S.castShadow=!0,this.bodyMesh.add(S);const y=iv(.38,.42,.045),_=new V(y,o);_.position.set(0,.3,-.175),_.castShadow=!0,_.receiveShadow=!0,this.bodyMesh.add(_);const L=new V(y,o);L.position.set(0,.3,.175),L.castShadow=!0,L.receiveShadow=!0,this.bodyMesh.add(L);const E=new V(new Xe(.255,.235,.28,14),r);E.scale.set(1.14,1,.8),E.position.set(0,.24,0),E.castShadow=!0,this.bodyMesh.add(E);for(const _e of[-1,1]){const Re=new V(new lt(.042,.16,5,8),r);Re.rotation.x=Math.PI/2,Re.position.set(_e*.145,.51,0),Re.castShadow=!0,this.bodyMesh.add(Re);const Le=new V(new Ct(.125,12,10),o);Le.scale.set(.85,1.05,1),Le.position.set(_e*.295,.44,0),Le.castShadow=!0,this.bodyMesh.add(Le)}for(let _e=-1;_e<=1;_e++){const Re=new V(new Je(.092,.14,.06),a);Re.position.set(_e*.105,.18,-.222),Re.castShadow=!0,this.bodyMesh.add(Re)}const P=new V(new Je(.15,.052,.014),c);P.position.set(0,.41,-.212),this.bodyMesh.add(P);const I=new V(new Je(.17,.055,.014),c);I.position.set(0,.41,.212),this.bodyMesh.add(I);const b=new V(new Xe(.235,.235,.075,14),h);b.scale.set(1.16,1,.8),b.position.set(0,.03,0),b.castShadow=!0,this.bodyMesh.add(b);const x=new V(new Xe(.225,.2,.15,14),l);x.scale.set(1.15,1,.78),x.position.set(0,-.055,0),x.castShadow=!0,this.bodyMesh.add(x),this.group.add(this.bodyMesh),this.headMesh=new V(new Ct(t.width*.48,18,14),d),this.headMesh.scale.set(.95,1.05,1),this.headMesh.position.set(0,t.centerY,0),this.headMesh.castShadow=!0,this.headMesh.receiveShadow=!0,this.headMesh.userData.hitbox="head";const C=new V(new Ct(t.width*.545,20,14,0,Math.PI*2,0,Math.PI*.58),f);C.position.set(0,.015,.006),C.castShadow=!0,this.headMesh.add(C);const D=new V(new Je(.06,.02,.22),c);D.position.set(0,t.height*.54,.02),this.headMesh.add(D);const U=new V(new Je(.072,.064,.036),o);U.position.set(0,.12,-t.depth*.52),U.rotation.x=-.25,this.headMesh.add(U);for(const _e of[-1,1]){const Re=new V(new Je(.022,.038,.16),o);Re.position.set(_e*(t.width*.52),.055,.01),this.headMesh.add(Re);const Le=new V(new Xe(.058,.058,.042,12),h);Le.rotation.z=Math.PI/2,Le.position.set(_e*(t.width*.49),-.025,.01),this.headMesh.add(Le)}const F=new V(new Xe(t.width*.515,t.width*.515,.115,16,1,!0,Math.PI*.74,Math.PI*.52),g);F.position.set(0,.018,.008),this.headMesh.add(F);const X=new V(new Xe(t.width*.522,t.width*.522,.016,14,1,!0,Math.PI*.82,Math.PI*.36),v);X.position.set(0,.022,.008),this.headMesh.add(X),this.group.add(this.headMesh);const z=()=>{const _e=new gt,Re=new V(new lt(.095,.2,6,12),l);Re.position.set(0,.01,0),Re.castShadow=!0,_e.add(Re);const Le=new V(new Ct(.072,10,8),h);Le.scale.set(.95,1.15,.65),Le.position.set(0,-.145,-.075),Le.castShadow=!0,_e.add(Le);const Ce=new V(new Xe(.078,.066,.24,12),l);Ce.position.set(0,-.27,.01),Ce.castShadow=!0,_e.add(Ce);const $e=new V(new Xe(.07,.074,.1,12),u);$e.position.set(0,-.39,.01),$e.castShadow=!0,_e.add($e);const We=new V(new lt(.062,.13,6,10),u);return We.rotation.x=Math.PI/2,We.scale.set(1.08,1,.78),We.position.set(0,-.415,-.045),We.castShadow=!0,_e.add(We),_e};this.leftLegPivot=new gt,this.leftLegPivot.position.set(-.165,.46,0),this.leftLegPivot.add(z()),this.group.add(this.leftLegPivot),this.rightLegPivot=new gt,this.rightLegPivot.position.set(.165,.46,0),this.rightLegPivot.add(z()),this.group.add(this.rightLegPivot),this.leftArmPivot=new gt,this.leftArmPivot.position.set(-(e.width*.5+.06),1.18,0);const K=new V(new lt(.07,.17,6,10),s);K.position.set(0,-.1,0),K.castShadow=!0,this.leftArmPivot.add(K);const W=new V(new Ct(.056,8,8),h);W.position.set(0,-.23,.03),this.leftArmPivot.add(W);const ne=new V(new lt(.058,.17,6,10),s);ne.position.set(0,-.35,-.03),ne.rotation.x=.22,ne.castShadow=!0,this.leftArmPivot.add(ne);const de=new V(new Ct(.056,10,8),m);de.position.set(0,-.47,-.06),this.leftArmPivot.add(de),this.group.add(this.leftArmPivot),this.gunPivot=new gt,this.gunPivot.position.set(e.width*.5+.1,1.14,-.06);const J=new V(new lt(.068,.18,6,10),s);J.rotation.x=Math.PI/2-.25,J.position.set(-.02,-.04,-.06),J.castShadow=!0,this.gunPivot.add(J);const he=new V(new lt(.056,.18,6,10),s);he.rotation.x=Math.PI/2,he.position.set(-.01,-.04,-.22),he.castShadow=!0,this.gunPivot.add(he);const Ie=new V(new Ct(.054,10,8),m);Ie.position.set(0,-.035,-.33),this.gunPivot.add(Ie);const H=new Fe({color:2633013,roughness:.36,metalness:.78}),Y=new Fe({color:1514016,roughness:.42,metalness:.7}),fe=new Fe({color:1908516,roughness:.8,metalness:.12}),ie=new Fe({color:3885620,roughness:.76,metalness:.08}),ce=new Fe({color:10135220,roughness:.22,metalness:.9}),G=new Fe({color:928330,emissive:731725,emissiveIntensity:.4,roughness:.1,metalness:.9}),ue=new gt,Ue=new V(new Je(.068,.088,.32),H);Ue.position.set(0,.02,-.36),ue.add(Ue);const te=new V(new Je(.052,.105,.18),fe);te.position.set(0,.005,-.14),ue.add(te);const q=new V(new Xe(.036,.038,.26,8),Y);q.rotation.x=Math.PI/2,q.position.set(0,.028,-.62),ue.add(q);const A=new V(new Xe(.015,.016,.24,12),Y);A.rotation.x=Math.PI/2,A.position.set(0,.03,-.82),ue.add(A);const xe=new V(new Xe(.02,.019,.065,10),H);xe.rotation.x=Math.PI/2,xe.position.set(0,.03,-.95),ue.add(xe);const oe=new V(new Xe(.024,.024,.11,12),Y);oe.rotation.x=Math.PI/2,oe.position.set(0,.092,-.36),ue.add(oe);const pe=new V(new Je(.044,.16,.075),fe);pe.position.set(0,-.095,-.43),pe.rotation.x=.22,ue.add(pe);const ae=new V(new lt(.024,.075,4,8),fe);ae.position.set(0,-.065,-.26),ae.rotation.x=-.3,ue.add(ae),this.weaponMeshes[Be.AR]=ue,this.gunPivot.add(ue);const Se=new gt,ge=new V(new Je(.064,.09,.68),ie);ge.position.set(0,.01,-.38),Se.add(ge);const w=new V(new Xe(.028,.03,.3,12),H);w.rotation.x=Math.PI/2,w.position.set(0,.045,-.38),Se.add(w);const M=new V(new Xe(.016,.02,.56,12),Y);M.rotation.x=Math.PI/2,M.position.set(0,.045,-.82),Se.add(M);const B=new V(new Je(.048,.038,.085),H);B.position.set(0,.045,-1.12),Se.add(B);const Q=new V(new Xe(.024,.024,.3,12),Y);Q.rotation.x=Math.PI/2,Q.position.set(0,.115,-.4),Se.add(Q);const re=new V(new Xe(.034,.024,.09,12),Y);re.rotation.x=Math.PI/2,re.position.set(0,.115,-.58),Se.add(re);const ee=new V(new oi(.031,12),G);ee.rotation.y=Math.PI,ee.position.set(0,.115,-.626),Se.add(ee);const Pe=new V(new Ct(.016,10,8),ce);Pe.position.set(.06,.038,-.28),Se.add(Pe),Se.visible=!1,this.weaponMeshes[Be.SNIPER]=Se,this.gunPivot.add(Se);const ve=new gt,Te=new V(new Xe(.02,.022,.15,10),fe);Te.rotation.x=Math.PI/2,Te.position.set(0,-.02,-.32),ve.add(Te);const qe=new V(new lt(.014,.07,4,8),Y);qe.position.set(0,-.02,-.4),ve.add(qe);const le=new V(Iu(1.18),ce);le.position.set(0,-.02,-.35),ve.add(le),ve.visible=!1,this.weaponMeshes[Be.KNIFE]=ve,this.gunPivot.add(ve),this.group.add(this.gunPivot)}pushState(e,t,n,s=!1,r=Be.AR,o=!1){is(e,this.targetPos),this.targetYaw=t,this.targetPitch=n,this.targetCrouch=s?1:0,this.targetADS=o?1:0;const a=St[r]?r:Be.AR;if(a!==this.weaponId){this.weaponId=a;for(const c of Object.keys(this.weaponMeshes))this.weaponMeshes[c].visible=c===this.weaponId}(!this.hasState||this.currentPos.distanceTo(this.targetPos)>6)&&(this.currentPos.copy(this.targetPos),this.prevPos.copy(this.targetPos),this.currentYaw=this.targetYaw,this.currentPitch=this.targetPitch,this.crouchFactor=this.targetCrouch,this.adsFactor=this.targetADS,this.hasState=!0,this._applyTransform())}update(e){if(!this.hasState)return;const t=Math.min(e,.05),n=1-Math.exp(-mt.INTERP_SPEED*t);this.prevPos.copy(this.currentPos),this.currentPos.lerp(this.targetPos,n),this.currentYaw+=nv(this.targetYaw-this.currentYaw)*n,this.currentPitch+=(this.targetPitch-this.currentPitch)*n;const s=1-Math.exp(-pt.CROUCH_LERP_SPEED*t);this.crouchFactor+=(this.targetCrouch-this.crouchFactor)*s,this.adsFactor+=(this.targetADS-this.adsFactor)*n;const r=Math.hypot(this.currentPos.x-this.prevPos.x,this.currentPos.z-this.prevPos.z),o=t>1e-4?r/t:0,a=Ei(o/pt.RUN_SPEED,0,1);this.walkAmount+=(a-this.walkAmount)*Math.min(1,14*t),this.walkAmount>.02&&(this.walkPhase+=t*(9+o*.6)),this._applyTransform()}_applyTransform(){const e=Ar.BODY,t=Ar.HEAD;this.group.position.copy(this.currentPos),this.group.rotation.y=this.currentYaw;const n=Ne(e.height,e.crouchHeight,this.crouchFactor),s=Ne(e.centerY,e.crouchCenterY,this.crouchFactor);this.bodyMesh.scale.y=n/e.height,this.bodyMesh.position.y=s;const r=Ne(t.centerY,t.crouchCenterY,this.crouchFactor);this.headMesh.position.y=r,this.headMesh.rotation.x=this.currentPitch;const o=Ne(1,.66,this.crouchFactor),a=Ne(.46,.3,this.crouchFactor),c=Math.sin(this.walkPhase)*.55*this.walkAmount;this.leftLegPivot.position.y=a,this.leftLegPivot.scale.y=o,this.leftLegPivot.rotation.x=c,this.rightLegPivot.position.y=a,this.rightLegPivot.scale.y=o,this.rightLegPivot.rotation.x=-c;const l=Ne(1.18,.8,this.crouchFactor);this.leftArmPivot.position.y=l,this.leftArmPivot.rotation.x=-c*.65;const h=e.width*.5+.1,u=Ne(1.14,.78,this.crouchFactor);this.gunPivot.position.set(h-.1*this.adsFactor,u+.1*this.adsFactor,-.06-.04*this.adsFactor),this.gunPivot.rotation.x=this.currentPitch}getHitboxes(){return this.group.visible?[this.headMesh,this.bodyMesh]:[]}setVisible(e){this.group.visible=!!e}getPosition(){return[this.currentPos.x,this.currentPos.y,this.currentPos.z]}}class fv{constructor(){this.ctx=null,this.masterGain=null,this.noiseBuffer=null,this.volume=.7}_initContext(){if(this.ctx)return!0;try{const e=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!e)return!1;const t=new e,n=t.createGain();n.gain.setValueAtTime(this.volume,t.currentTime),n.connect(t.destination);const s=t.sampleRate||44100,r=t.createBuffer(1,s,s),o=r.getChannelData(0);for(let a=0;a<o.length;a++)o[a]=Math.random()*2-1;return this.ctx=t,this.masterGain=n,this.noiseBuffer=r,!0}catch{return!1}}_isReady(){return!!(this.ctx&&this.masterGain&&this.ctx.state==="running")}unlock(){try{if(!this._initContext())return;if(this.ctx.state==="suspended"){const e=this.ctx.resume();e&&typeof e.catch=="function"&&e.catch(()=>{})}}catch{}}setVolume(e){try{const t=Number(e);if(!Number.isFinite(t))return;const n=Math.max(0,Math.min(1,t));if(this.volume=n,this.ctx&&this.masterGain){const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setTargetAtTime(n,s,.015)}}catch{}}playShoot(e="ar"){try{if(!this._isReady()||!this.noiseBuffer)return;const t=this.ctx,n=t.currentTime;if(e==="knife"){const h=t.createBufferSource();h.buffer=this.noiseBuffer;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1900,n),u.frequency.exponentialRampToValueAtTime(520,n+.11),u.Q.setValueAtTime(1.4,n);const d=t.createGain();d.gain.setValueAtTime(.001,n),d.gain.linearRampToValueAtTime(.45,n+.015),d.gain.exponentialRampToValueAtTime(.001,n+.12),h.connect(u),u.connect(d),d.connect(this.masterGain),h.start(n),h.stop(n+.13);const f=t.createOscillator();f.type="triangle",f.frequency.setValueAtTime(2600,n),f.frequency.exponentialRampToValueAtTime(1400,n+.065);const g=t.createGain();g.gain.setValueAtTime(.001,n),g.gain.linearRampToValueAtTime(.11,n+.008),g.gain.exponentialRampToValueAtTime(.001,n+.07),f.connect(g),g.connect(this.masterGain),f.start(n),f.stop(n+.075);return}if(e==="sniper"){const h=t.createBufferSource();h.buffer=this.noiseBuffer;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1150,n),u.frequency.exponentialRampToValueAtTime(420,n+.19),u.Q.setValueAtTime(.55,n);const d=t.createGain();d.gain.setValueAtTime(.001,n),d.gain.linearRampToValueAtTime(.72,n+.002),d.gain.exponentialRampToValueAtTime(.001,n+.195),h.connect(u),u.connect(d),d.connect(this.masterGain),h.start(n),h.stop(n+.2);const f=t.createBufferSource();f.buffer=this.noiseBuffer;const g=t.createBiquadFilter();g.type="highpass",g.frequency.setValueAtTime(2200,n);const v=t.createGain();v.gain.setValueAtTime(.001,n),v.gain.linearRampToValueAtTime(.42,n+.0015),v.gain.exponentialRampToValueAtTime(.001,n+.04),f.connect(g),g.connect(v),v.connect(this.masterGain),f.start(n),f.stop(n+.045);const m=t.createOscillator();m.type="sine",m.frequency.setValueAtTime(140,n),m.frequency.exponentialRampToValueAtTime(32,n+.22);const p=t.createGain();p.gain.setValueAtTime(.001,n),p.gain.linearRampToValueAtTime(.68,n+.003),p.gain.exponentialRampToValueAtTime(.001,n+.23),m.connect(p),p.connect(this.masterGain),m.start(n),m.stop(n+.24);const S=n+.125,y=t.createBufferSource();y.buffer=this.noiseBuffer;const _=t.createBiquadFilter();_.type="bandpass",_.frequency.setValueAtTime(3200,S),_.Q.setValueAtTime(3.8,S);const L=t.createGain();L.gain.setValueAtTime(.001,S),L.gain.linearRampToValueAtTime(.18,S+.008),L.gain.exponentialRampToValueAtTime(.001,n+.26),y.connect(_),_.connect(L),L.connect(this.masterGain),y.start(S),y.stop(n+.265);const E=t.createOscillator();E.type="triangle",E.frequency.setValueAtTime(1950,S),E.frequency.exponentialRampToValueAtTime(1250,n+.255);const P=t.createGain();P.gain.setValueAtTime(.001,S),P.gain.linearRampToValueAtTime(.11,S+.004),P.gain.exponentialRampToValueAtTime(.001,n+.26),E.connect(P),P.connect(this.masterGain),E.start(S),E.stop(n+.265);return}const s=.97+Math.random()*.06,r=t.createBufferSource();r.buffer=this.noiseBuffer;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1600*s,n),o.Q.setValueAtTime(1.4,n);const a=t.createGain();a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.56,n+.0025),a.gain.exponentialRampToValueAtTime(.001,n+.065),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(n),r.stop(n+.07);const c=t.createOscillator();c.type="sine",c.frequency.setValueAtTime(200*s,n),c.frequency.exponentialRampToValueAtTime(55,n+.072);const l=t.createGain();l.gain.setValueAtTime(.001,n),l.gain.linearRampToValueAtTime(.52,n+.002),l.gain.exponentialRampToValueAtTime(.001,n+.075),c.connect(l),l.connect(this.masterGain),c.start(n),c.stop(n+.08)}catch{}}playRemoteShoot(e=10,t="ar"){try{if(!this._isReady()||!this.noiseBuffer)return;const s=1/(1+Math.max(0,Number.isFinite(e)?e:10)*.075);if(s<.015)return;const r=this.ctx,o=r.currentTime,a=r.createBiquadFilter();if(a.type="lowpass",a.frequency.setValueAtTime(420+2100*s,o),a.Q.setValueAtTime(.8,o),a.connect(this.masterGain),t==="knife"){const d=r.createBufferSource();d.buffer=this.noiseBuffer;const f=r.createGain();f.gain.setValueAtTime(.001,o),f.gain.linearRampToValueAtTime(.28*s,o+.014),f.gain.exponentialRampToValueAtTime(.001,o+.1),d.connect(f),f.connect(a),d.start(o),d.stop(o+.11);return}if(t==="sniper"){const d=r.createBufferSource();d.buffer=this.noiseBuffer;const f=r.createGain();f.gain.setValueAtTime(.001,o),f.gain.linearRampToValueAtTime(.6*s,o+.003),f.gain.exponentialRampToValueAtTime(.001,o+.17),d.connect(f),f.connect(a),d.start(o),d.stop(o+.18);const g=r.createOscillator();g.type="sine",g.frequency.setValueAtTime(135,o),g.frequency.exponentialRampToValueAtTime(34,o+.2);const v=r.createGain();v.gain.setValueAtTime(.001,o),v.gain.linearRampToValueAtTime(.52*s,o+.004),v.gain.exponentialRampToValueAtTime(.001,o+.21),g.connect(v),v.connect(a),g.start(o),g.stop(o+.22);return}const c=r.createBufferSource();c.buffer=this.noiseBuffer;const l=r.createGain();l.gain.setValueAtTime(.001,o),l.gain.linearRampToValueAtTime(.45*s,o+.004),l.gain.exponentialRampToValueAtTime(.001,o+.068),c.connect(l),l.connect(a),c.start(o),c.stop(o+.072);const h=r.createOscillator();h.type="sine",h.frequency.setValueAtTime(185,o),h.frequency.exponentialRampToValueAtTime(50,o+.075);const u=r.createGain();u.gain.setValueAtTime(.001,o),u.gain.linearRampToValueAtTime(.36*s,o+.003),u.gain.exponentialRampToValueAtTime(.001,o+.078),h.connect(u),u.connect(a),h.start(o),h.stop(o+.082)}catch{}}playHitmarker(e=!1){try{if(!this._isReady())return;const t=this.ctx,n=t.currentTime;if(e){const s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(2400,n);const r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(3600,n);const o=t.createGain();o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.34,n+.0015),o.gain.exponentialRampToValueAtTime(.001,n+.11);const a=t.createGain();if(a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.26,n+.0015),a.gain.exponentialRampToValueAtTime(.001,n+.11),s.connect(o),o.connect(this.masterGain),r.connect(a),a.connect(this.masterGain),s.start(n),r.start(n),s.stop(n+.115),r.stop(n+.115),this.noiseBuffer){const c=t.createBufferSource();c.buffer=this.noiseBuffer;const l=t.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(3200,n);const h=t.createGain();h.gain.setValueAtTime(.001,n),h.gain.linearRampToValueAtTime(.16,n+.001),h.gain.exponentialRampToValueAtTime(.001,n+.016),c.connect(l),l.connect(h),h.connect(this.masterGain),c.start(n),c.stop(n+.02)}}else{const s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(1550,n),s.frequency.exponentialRampToValueAtTime(900,n+.038);const r=t.createGain();if(r.gain.setValueAtTime(.001,n),r.gain.linearRampToValueAtTime(.38,n+.0015),r.gain.exponentialRampToValueAtTime(.001,n+.038),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.042),this.noiseBuffer){const o=t.createBufferSource();o.buffer=this.noiseBuffer;const a=t.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(2400,n);const c=t.createGain();c.gain.setValueAtTime(.001,n),c.gain.linearRampToValueAtTime(.14,n+.001),c.gain.exponentialRampToValueAtTime(.001,n+.018),o.connect(a),a.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.022)}}}catch{}}playReload(){try{if(!this._isReady())return;const e=this.ctx,t=e.currentTime,n=[{start:t,startFreq:620,endFreq:340,noiseFreq:2100,dur:.032,peak:.2},{start:t+.21,startFreq:480,endFreq:880,noiseFreq:3e3,dur:.038,peak:.24}];for(const s of n){const r=e.createOscillator();r.type="triangle",r.frequency.setValueAtTime(s.startFreq,s.start),r.frequency.exponentialRampToValueAtTime(s.endFreq,s.start+s.dur);const o=e.createGain();if(o.gain.setValueAtTime(.001,s.start),o.gain.linearRampToValueAtTime(s.peak,s.start+.002),o.gain.exponentialRampToValueAtTime(.001,s.start+s.dur),r.connect(o),o.connect(this.masterGain),r.start(s.start),r.stop(s.start+s.dur+.005),this.noiseBuffer){const a=e.createBufferSource();a.buffer=this.noiseBuffer;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(s.noiseFreq,s.start),c.Q.setValueAtTime(3.2,s.start);const l=e.createGain();l.gain.setValueAtTime(.001,s.start),l.gain.linearRampToValueAtTime(s.peak*.9,s.start+.002),l.gain.exponentialRampToValueAtTime(.001,s.start+s.dur),a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(s.start),a.stop(s.start+s.dur+.005)}}}catch{}}playWeaponSwitch(){try{if(!this._isReady())return;const e=this.ctx,t=e.currentTime;if(this.noiseBuffer){const o=e.createBufferSource();o.buffer=this.noiseBuffer;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(850,t),a.frequency.exponentialRampToValueAtTime(2400,t+.055),a.Q.setValueAtTime(1.6,t);const c=e.createGain();c.gain.setValueAtTime(.001,t),c.gain.linearRampToValueAtTime(.16,t+.014),c.gain.exponentialRampToValueAtTime(.001,t+.055),o.connect(a),a.connect(c),c.connect(this.masterGain),o.start(t),o.stop(t+.06)}const n=t+.022,s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(1150,n),s.frequency.exponentialRampToValueAtTime(680,n+.025);const r=e.createGain();r.gain.setValueAtTime(.001,n),r.gain.linearRampToValueAtTime(.13,n+.002),r.gain.exponentialRampToValueAtTime(.001,n+.028),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.032)}catch{}}playJump(e=!1){try{if(!this._isReady())return;const t=this.ctx,n=t.currentTime;if(this.noiseBuffer){const o=t.createBufferSource();o.buffer=this.noiseBuffer;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(450,n),a.frequency.exponentialRampToValueAtTime(1400,n+.065),a.Q.setValueAtTime(1.4,n);const c=t.createGain();c.gain.setValueAtTime(.001,n),c.gain.linearRampToValueAtTime(.14,n+.012),c.gain.exponentialRampToValueAtTime(.001,n+.065),o.connect(a),a.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.07)}const s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(160,n),s.frequency.exponentialRampToValueAtTime(320,n+.052);const r=t.createGain();if(r.gain.setValueAtTime(.001,n),r.gain.linearRampToValueAtTime(.12,n+.005),r.gain.exponentialRampToValueAtTime(.001,n+.055),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.06),e){const o=t.createOscillator();o.type="triangle",o.frequency.setValueAtTime(1850,n),o.frequency.exponentialRampToValueAtTime(2450,n+.042);const a=t.createGain();a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.15,n+.002),a.gain.exponentialRampToValueAtTime(.001,n+.045),o.connect(a),a.connect(this.masterGain),o.start(n),o.stop(n+.05)}}catch{}}playLand(){try{if(!this._isReady())return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(95,t),n.frequency.exponentialRampToValueAtTime(42,t+.055);const s=e.createGain();if(s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(.22,t+.004),s.gain.exponentialRampToValueAtTime(.001,t+.055),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.06),this.noiseBuffer){const r=e.createBufferSource();r.buffer=this.noiseBuffer;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(380,t);const a=e.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.12,t+.004),a.gain.exponentialRampToValueAtTime(.001,t+.048),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.052)}}catch{}}playDamage(){try{if(!this._isReady())return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(110,t),n.frequency.exponentialRampToValueAtTime(48,t+.11);const s=e.createGain();if(s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(.55,t+.004),s.gain.exponentialRampToValueAtTime(.001,t+.11),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.115),this.noiseBuffer){const r=e.createBufferSource();r.buffer=this.noiseBuffer;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(520,t);const a=e.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.22,t+.003),a.gain.exponentialRampToValueAtTime(.001,t+.055),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.06)}}catch{}}playKill(){try{if(!this._isReady())return;const e=this.ctx,t=e.currentTime,n=[{freq:880,start:t,duration:.095,peak:.28},{freq:1320,start:t+.075,duration:.16,peak:.32}];for(const s of n){const r=e.createOscillator();r.type="triangle",r.frequency.setValueAtTime(s.freq,s.start);const o=e.createGain();o.gain.setValueAtTime(.001,s.start),o.gain.linearRampToValueAtTime(s.peak,s.start+.006),o.gain.exponentialRampToValueAtTime(.001,s.start+s.duration),r.connect(o),o.connect(this.masterGain),r.start(s.start),r.stop(s.start+s.duration+.005)}}catch{}}playRespawn(){try{if(!this._isReady())return;const e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="triangle",n.frequency.setValueAtTime(320,t),n.frequency.exponentialRampToValueAtTime(640,t+.18);const s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(640,t),s.frequency.exponentialRampToValueAtTime(1280,t+.18);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1600,t);const o=e.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.24,t+.02),o.gain.exponentialRampToValueAtTime(.001,t+.18);const a=e.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(o),o.connect(r),s.connect(a),a.connect(r),r.connect(this.masterGain),n.start(t),s.start(t),n.stop(t+.19),s.stop(t+.19)}catch{}}}const Kl="web_fps_1v1_settings_v1",pv=Object.freeze(["#00ff66","#00e5ff","#ffe600","#ff3b5c","#ffffff","#ff44ff"]);function ln(i,e,t,n){const s=Number(i);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):n}function Ja(i,e){return typeof i=="string"&&/^#[0-9a-fA-F]{6}$/.test(i.trim())?i.trim().toLowerCase():e}function Ko(i){const e=i&&typeof i=="object"?i:{};return{color:Ja(e.color,Dt.color),size:Math.round(ln(e.size,2,20,Dt.size)),thickness:Math.round(ln(e.thickness,1,6,Dt.thickness)*2)/2,gap:Math.round(ln(e.gap,-4,14,Dt.gap)),outline:typeof e.outline=="boolean"?e.outline:Dt.outline,dot:typeof e.dot=="boolean"?e.dot:Dt.dot,dynamic:typeof e.dynamic=="boolean"?e.dynamic:Dt.dynamic,alpha:ln(e.alpha,.2,1,Dt.alpha)}}class mv{constructor(){if(this.root=document.getElementById("ui-root"),!this.root)throw new Error("#ui-root elementi bulunamadı.");this._callbacks={createRoom:null,joinRoom:null,resume:null,leaveRoom:null,settingsChange:null},this._settings=this._loadSettings(),this._currentRoomCode="",this._copyFeedbackTimer=null,this._crosshairTimer=null,this._hitmarkerTimer=null,this._damageTimer=null,this._lastSpeedInt=-1,this._lastBhopState=!1,this._lastCrosshairSpread="",this._lastFpsInt=-1,this._lastFpsTier="",this._scopeVisible=!1,this._lastWeaponKey="",this._activePauseTab="general",this._render(),this._bindElements(),this._bindEvents(),this._applyCrosshairStyles(),this._syncFpsVisibility(),this.showLobby()}_loadSettings(){var t;const e={sensitivity:zn.sensitivity,adsSensitivity:zn.adsSensitivity,fov:zn.fov,volume:zn.volume,showFps:!!zn.showFps,crosshair:Ko(Dt)};try{const n=(t=window.localStorage)==null?void 0:t.getItem(Kl);if(!n)return e;const s=JSON.parse(n);return!s||typeof s!="object"?e:{sensitivity:ln(s.sensitivity,.2,3,e.sensitivity),adsSensitivity:ln(s.adsSensitivity,.2,1.5,e.adsSensitivity),fov:Math.round(ln(s.fov,60,110,e.fov)),volume:ln(s.volume,0,1,e.volume),showFps:typeof s.showFps=="boolean"?s.showFps:e.showFps,crosshair:Ko(s.crosshair)}}catch{return e}}_saveSettings(){var e;try{(e=window.localStorage)==null||e.setItem(Kl,JSON.stringify(this._settings))}catch{}}_render(){const e=Math.round(this._settings.volume*100),t=Ni.ROOM_CODE_LENGTH,n=St[Be.AR],s=this._settings.crosshair,r=Math.round(s.alpha*100),o=pv.map(a=>`
        <button
          type="button"
          class="ch-swatch${s.color===a?" active":""}"
          data-color="${a}"
          style="background-color: ${a};"
          aria-label="Renk ${a}"
          title="${a}"
        ></button>`).join("");this.root.innerHTML=`
      <!-- Lobby Overlay -->
      <div id="lobby-overlay">
        <div class="lobby-card">
          <div class="lobby-header">
            <div class="lobby-badge">P2P ARENA</div>
            <h1 class="lobby-title">1v1 ARENA FPS</h1>
            <p class="lobby-subtitle">WASD + Space • Ctrl Crouch-Jump • 1/2/3 Silah • Sağ Tık ADS/Bıçak • R Reload • F İncele</p>
          </div>

          <div class="lobby-sections">
            <section class="lobby-section">
              <h2 class="section-title">Oda Kur</h2>
              <button type="button" id="btn-create-room" class="btn btn-primary">
                Yeni Oda Oluştur
              </button>
              <div id="room-code-box" class="room-code-box hidden">
                <span id="room-code-value" class="room-code-value">------</span>
                <button type="button" id="btn-copy-code" class="btn btn-copy">
                  Kopyala
                </button>
              </div>
            </section>

            <section class="lobby-section">
              <h2 class="section-title">Odaya Katıl</h2>
              <input
                type="text"
                id="join-code-input"
                class="text-input"
                maxlength="${t}"
                placeholder="ODA KODU"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="characters"
                spellcheck="false"
              />
              <button type="button" id="btn-join-room" class="btn btn-secondary">
                Katıl
              </button>
            </section>
          </div>

          <div id="lobby-status" class="lobby-status hidden" role="status"></div>
        </div>
      </div>

      <!-- In-Game HUD -->
      <div id="hud" class="hidden">
        <!-- Sniper Scope Overlay -->
        <div id="sniper-scope" class="sniper-scope hidden" aria-hidden="true">
          <div class="scope-lens">
            <div class="scope-line scope-line-h"></div>
            <div class="scope-line scope-line-v"></div>
            <div class="scope-mildots scope-mildots-h">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="scope-mildots scope-mildots-v">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="scope-center-dot"></div>
          </div>
        </div>

        <div id="damage-vignette" class="damage-vignette"></div>

        <div id="crosshair" class="crosshair">
          <span class="ch-line ch-top"></span>
          <span class="ch-line ch-bottom"></span>
          <span class="ch-line ch-left"></span>
          <span class="ch-line ch-right"></span>
          <span class="ch-dot"></span>
        </div>

        <div id="hitmarker" class="hitmarker">
          <svg viewBox="0 0 28 28" aria-hidden="true">
            <line x1="4" y1="4" x2="10.5" y2="10.5" />
            <line x1="24" y1="4" x2="17.5" y2="10.5" />
            <line x1="4" y1="24" x2="10.5" y2="17.5" />
            <line x1="24" y1="24" x2="17.5" y2="17.5" />
          </svg>
        </div>

        <!-- Krunker Score Pop-up Feed -->
        <div id="score-popup-feed" class="score-popup-feed" aria-live="off"></div>

        <!-- Top-Center Scoreboard -->
        <div class="scoreboard">
          <div class="score-side me">
            <span class="score-label">SEN</span>
            <span id="score-me" class="score-num">0</span>
          </div>
          <span class="score-divider">:</span>
          <div class="score-side enemy">
            <span id="score-enemy" class="score-num">0</span>
            <span class="score-label">RAKİP</span>
          </div>
        </div>

        <!-- Top-Right Status (FPS + ESC Hint) -->
        <div class="hud-top-right">
          <div id="fps-counter" class="fps-counter${this._settings.showFps?"":" hidden"}">-- FPS</div>
          <div class="hud-hint">ESC: Ayarlar</div>
        </div>

        <!-- Bottom-Left HP Panel -->
        <div id="hp-panel" class="hp-panel">
          <div class="hp-top">
            <span class="hp-label">CAN</span>
            <span id="hp-value" class="hp-value">${mt.MAX_HP}</span>
          </div>
          <div class="hp-bar-track">
            <div id="hp-bar-fill" class="hp-bar-fill"></div>
          </div>
        </div>

        <!-- Bottom-Center Live Speedometer -->
        <div id="speedometer" class="speedometer">
          <span id="speed-value" class="speed-value">0</span>
          <span class="speed-unit">u/s</span>
        </div>

        <!-- Bottom-Right Weapon, Ammo & Reload Panel -->
        <div id="weapon-panel" class="weapon-panel">
          <div class="weapon-slots">
            <span id="slot-ar" class="weapon-slot active" data-weapon="${Be.AR}">
              <span class="slot-key">1</span> AR
            </span>
            <span id="slot-sniper" class="weapon-slot" data-weapon="${Be.SNIPER}">
              <span class="slot-key">2</span> SNIPER
            </span>
            <span id="slot-knife" class="weapon-slot" data-weapon="${Be.KNIFE}">
              <span class="slot-key">3</span> BIÇAK
            </span>
          </div>
          <div class="weapon-main">
            <span id="weapon-name" class="weapon-name">${n.name}</span>
            <div class="ammo-readout">
              <span id="ammo-current" class="ammo-current">${n.magSize}</span>
              <span id="ammo-sep" class="ammo-sep">/</span>
              <span id="ammo-mag" class="ammo-mag">${n.magSize}</span>
            </div>
          </div>
          <div id="reload-container" class="reload-container hidden">
            <div class="reload-header">
              <span class="reload-label">ŞARJÖR DEĞİŞTİRİLİYOR</span>
            </div>
            <div class="reload-bar-track">
              <div id="reload-bar-fill" class="reload-bar-fill"></div>
            </div>
          </div>
        </div>

        <div id="respawn-overlay" class="respawn-overlay hidden">
          <div id="respawn-text" class="respawn-text"></div>
        </div>
      </div>

      <!-- ESC Pause Menu -->
      <div id="pause-menu" class="hidden">
        <div class="pause-card">
          <h2 class="pause-title">Ayarlar</h2>

          <div class="pause-tabs" role="tablist">
            <button
              type="button"
              id="tab-btn-general"
              class="pause-tab active"
              role="tab"
              aria-selected="true"
              data-tab="general"
            >
              Genel
            </button>
            <button
              type="button"
              id="tab-btn-crosshair"
              class="pause-tab"
              role="tab"
              aria-selected="false"
              data-tab="crosshair"
            >
              Crosshair
            </button>
          </div>

          <!-- General Settings Tab -->
          <div id="tab-panel-general" class="pause-tab-panel">
            <div class="settings-list">
              <label class="setting-row" for="slider-sensitivity">
                <div class="setting-header">
                  <span>Mouse Hassasiyeti</span>
                  <span id="val-sensitivity" class="setting-value">${this._settings.sensitivity.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  id="slider-sensitivity"
                  class="setting-slider"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value="${this._settings.sensitivity}"
                />
              </label>

              <label class="setting-row" for="slider-ads-sensitivity">
                <div class="setting-header">
                  <span>ADS Hassasiyeti</span>
                  <span id="val-ads-sensitivity" class="setting-value">${this._settings.adsSensitivity.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  id="slider-ads-sensitivity"
                  class="setting-slider"
                  min="0.2"
                  max="1.5"
                  step="0.05"
                  value="${this._settings.adsSensitivity}"
                />
              </label>

              <label class="setting-row" for="slider-fov">
                <div class="setting-header">
                  <span>Görüş Açısı (FOV)</span>
                  <span id="val-fov" class="setting-value">${this._settings.fov}°</span>
                </div>
                <input
                  type="range"
                  id="slider-fov"
                  class="setting-slider"
                  min="60"
                  max="110"
                  step="1"
                  value="${this._settings.fov}"
                />
              </label>

              <label class="setting-row" for="slider-volume">
                <div class="setting-header">
                  <span>Ses Seviyesi</span>
                  <span id="val-volume" class="setting-value">${e}%</span>
                </div>
                <input
                  type="range"
                  id="slider-volume"
                  class="setting-slider"
                  min="0"
                  max="100"
                  step="5"
                  value="${e}"
                />
              </label>

              <label class="setting-toggle-row" for="toggle-show-fps">
                <span class="setting-toggle-label">FPS Göstergesi</span>
                <span class="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle-show-fps"
                    ${this._settings.showFps?"checked":""}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>
            </div>
          </div>

          <!-- Crosshair Customizer Tab -->
          <div id="tab-panel-crosshair" class="pause-tab-panel hidden">
            <div class="crosshair-preview-box" aria-label="Crosshair Önizleme">
              <div class="crosshair-preview-sky"></div>
              <div class="crosshair-preview-wall"></div>
              <div id="crosshair-preview" class="crosshair crosshair-preview">
                <span class="ch-line ch-top"></span>
                <span class="ch-line ch-bottom"></span>
                <span class="ch-line ch-left"></span>
                <span class="ch-line ch-right"></span>
                <span class="ch-dot"></span>
              </div>
            </div>

            <div class="ch-color-row">
              <span class="ch-color-label">Renk</span>
              <div id="ch-swatches" class="ch-swatches">
                ${o}
                <label class="ch-picker-wrap" title="Özel Renk">
                  <input
                    type="color"
                    id="ch-color-picker"
                    class="ch-color-picker"
                    value="${s.color}"
                    aria-label="Özel Crosshair Rengi"
                  />
                  <span class="ch-picker-icon">+</span>
                </label>
              </div>
            </div>

            <div class="ch-sliders-grid">
              <label class="setting-row setting-row--compact" for="slider-ch-size">
                <div class="setting-header">
                  <span>Uzunluk</span>
                  <span id="val-ch-size" class="setting-value setting-value--sm">${s.size}px</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-size"
                  class="setting-slider"
                  min="2"
                  max="20"
                  step="1"
                  value="${s.size}"
                />
              </label>

              <label class="setting-row setting-row--compact" for="slider-ch-thickness">
                <div class="setting-header">
                  <span>Kalınlık</span>
                  <span id="val-ch-thickness" class="setting-value setting-value--sm">${s.thickness}px</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-thickness"
                  class="setting-slider"
                  min="1"
                  max="6"
                  step="0.5"
                  value="${s.thickness}"
                />
              </label>

              <label class="setting-row setting-row--compact" for="slider-ch-gap">
                <div class="setting-header">
                  <span>Boşluk</span>
                  <span id="val-ch-gap" class="setting-value setting-value--sm">${s.gap}px</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-gap"
                  class="setting-slider"
                  min="-4"
                  max="14"
                  step="1"
                  value="${s.gap}"
                />
              </label>

              <label class="setting-row setting-row--compact" for="slider-ch-alpha">
                <div class="setting-header">
                  <span>Opaklık</span>
                  <span id="val-ch-alpha" class="setting-value setting-value--sm">${r}%</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-alpha"
                  class="setting-slider"
                  min="20"
                  max="100"
                  step="5"
                  value="${r}"
                />
              </label>
            </div>

            <div class="ch-toggles-grid">
              <label class="setting-toggle-row setting-toggle-row--compact" for="toggle-ch-outline">
                <span class="setting-toggle-label">Dış Çizgi</span>
                <span class="toggle-switch toggle-switch--sm">
                  <input
                    type="checkbox"
                    id="toggle-ch-outline"
                    ${s.outline?"checked":""}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>

              <label class="setting-toggle-row setting-toggle-row--compact" for="toggle-ch-dot">
                <span class="setting-toggle-label">Orta Nokta</span>
                <span class="toggle-switch toggle-switch--sm">
                  <input
                    type="checkbox"
                    id="toggle-ch-dot"
                    ${s.dot?"checked":""}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>

              <label class="setting-toggle-row setting-toggle-row--compact" for="toggle-ch-dynamic">
                <span class="setting-toggle-label">Dinamik</span>
                <span class="toggle-switch toggle-switch--sm">
                  <input
                    type="checkbox"
                    id="toggle-ch-dynamic"
                    ${s.dynamic?"checked":""}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>
            </div>

            <div class="ch-reset-row">
              <button type="button" id="btn-ch-reset" class="btn btn-reset">
                Varsayılana Sıfırla
              </button>
            </div>
          </div>

          <div class="pause-actions">
            <button type="button" id="btn-resume" class="btn btn-primary">
              Oyuna Dön
            </button>
            <button type="button" id="btn-leave-room" class="btn btn-danger">
              Odadan Ayrıl
            </button>
          </div>
        </div>
      </div>
    `}_bindElements(){const e=t=>document.getElementById(t);this.els={lobbyOverlay:e("lobby-overlay"),btnCreateRoom:e("btn-create-room"),roomCodeBox:e("room-code-box"),roomCodeValue:e("room-code-value"),btnCopyCode:e("btn-copy-code"),joinCodeInput:e("join-code-input"),btnJoinRoom:e("btn-join-room"),lobbyStatus:e("lobby-status"),hud:e("hud"),sniperScope:e("sniper-scope"),damageVignette:e("damage-vignette"),crosshair:e("crosshair"),hitmarker:e("hitmarker"),scorePopupFeed:e("score-popup-feed"),scoreMe:e("score-me"),scoreEnemy:e("score-enemy"),fpsCounter:e("fps-counter"),hpPanel:e("hp-panel"),hpValue:e("hp-value"),hpBarFill:e("hp-bar-fill"),speedometer:e("speedometer"),speedValue:e("speed-value"),weaponPanel:e("weapon-panel"),slotAr:e("slot-ar"),slotSniper:e("slot-sniper"),slotKnife:e("slot-knife"),weaponName:e("weapon-name"),ammoCurrent:e("ammo-current"),ammoSep:e("ammo-sep"),ammoMag:e("ammo-mag"),reloadContainer:e("reload-container"),reloadBarFill:e("reload-bar-fill"),respawnOverlay:e("respawn-overlay"),respawnText:e("respawn-text"),pauseMenu:e("pause-menu"),tabBtnGeneral:e("tab-btn-general"),tabBtnCrosshair:e("tab-btn-crosshair"),tabPanelGeneral:e("tab-panel-general"),tabPanelCrosshair:e("tab-panel-crosshair"),sliderSensitivity:e("slider-sensitivity"),valSensitivity:e("val-sensitivity"),sliderAdsSensitivity:e("slider-ads-sensitivity"),valAdsSensitivity:e("val-ads-sensitivity"),sliderFov:e("slider-fov"),valFov:e("val-fov"),sliderVolume:e("slider-volume"),valVolume:e("val-volume"),toggleShowFps:e("toggle-show-fps"),crosshairPreview:e("crosshair-preview"),chSwatches:e("ch-swatches"),chSwatchButtons:Array.from(document.querySelectorAll("#ch-swatches .ch-swatch")),chColorPicker:e("ch-color-picker"),sliderChSize:e("slider-ch-size"),valChSize:e("val-ch-size"),sliderChThickness:e("slider-ch-thickness"),valChThickness:e("val-ch-thickness"),sliderChGap:e("slider-ch-gap"),valChGap:e("val-ch-gap"),sliderChAlpha:e("slider-ch-alpha"),valChAlpha:e("val-ch-alpha"),toggleChOutline:e("toggle-ch-outline"),toggleChDot:e("toggle-ch-dot"),toggleChDynamic:e("toggle-ch-dynamic"),btnChReset:e("btn-ch-reset"),btnResume:e("btn-resume"),btnLeaveRoom:e("btn-leave-room")}}_bindEvents(){this.els.btnCreateRoom.addEventListener("click",()=>{this._callbacks.createRoom&&this._callbacks.createRoom()}),this.els.btnCopyCode.addEventListener("click",()=>{this._currentRoomCode&&this._copyToClipboard(this._currentRoomCode)}),this.els.joinCodeInput.addEventListener("input",()=>{const r=this.els.joinCodeInput.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,Ni.ROOM_CODE_LENGTH);this.els.joinCodeInput.value=r});const e=()=>{const r=this.els.joinCodeInput.value.trim().toUpperCase();this._callbacks.joinRoom&&this._callbacks.joinRoom(r)};this.els.btnJoinRoom.addEventListener("click",e),this.els.joinCodeInput.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),e())}),this.els.btnResume.addEventListener("click",()=>{this._callbacks.resume&&this._callbacks.resume()}),this.els.btnLeaveRoom.addEventListener("click",()=>{this._callbacks.leaveRoom&&this._callbacks.leaveRoom()}),this.els.tabBtnGeneral.addEventListener("click",()=>{this._setActivePauseTab("general")}),this.els.tabBtnCrosshair.addEventListener("click",()=>{this._setActivePauseTab("crosshair")});const t=()=>{this._saveSettings(),this._callbacks.settingsChange&&this._callbacks.settingsChange(this.getSettings())},n=()=>{const r=parseFloat(this.els.sliderSensitivity.value),o=parseFloat(this.els.sliderAdsSensitivity.value),a=parseInt(this.els.sliderFov.value,10),c=parseInt(this.els.sliderVolume.value,10);this._settings.sensitivity=r,this._settings.adsSensitivity=o,this._settings.fov=a,this._settings.volume=Math.max(0,Math.min(1,c/100)),this.els.valSensitivity.textContent=r.toFixed(1),this.els.valAdsSensitivity.textContent=o.toFixed(2),this.els.valFov.textContent=`${a}°`,this.els.valVolume.textContent=`${c}%`,t()};this.els.sliderSensitivity.addEventListener("input",n),this.els.sliderAdsSensitivity.addEventListener("input",n),this.els.sliderFov.addEventListener("input",n),this.els.sliderVolume.addEventListener("input",n),this.els.toggleShowFps.addEventListener("change",()=>{this._settings.showFps=!!this.els.toggleShowFps.checked,this._syncFpsVisibility(),t()});for(const r of this.els.chSwatchButtons)r.addEventListener("click",()=>{const o=Ja(r.dataset.color,Dt.color);this._settings.crosshair.color=o,this.els.chColorPicker.value=o,this._updateActiveSwatch(o),this._applyCrosshairStyles(),t()});this.els.chColorPicker.addEventListener("input",()=>{const r=Ja(this.els.chColorPicker.value,Dt.color);this._settings.crosshair.color=r,this._updateActiveSwatch(r),this._applyCrosshairStyles(),t()});const s=()=>{const r=parseInt(this.els.sliderChSize.value,10),o=parseFloat(this.els.sliderChThickness.value),a=parseInt(this.els.sliderChGap.value,10),c=parseInt(this.els.sliderChAlpha.value,10);this._settings.crosshair.size=Math.round(ln(r,2,20,Dt.size)),this._settings.crosshair.thickness=Math.round(ln(o,1,6,Dt.thickness)*2)/2,this._settings.crosshair.gap=Math.round(ln(a,-4,14,Dt.gap)),this._settings.crosshair.alpha=ln(c/100,.2,1,Dt.alpha),this._settings.crosshair.outline=!!this.els.toggleChOutline.checked,this._settings.crosshair.dot=!!this.els.toggleChDot.checked,this._settings.crosshair.dynamic=!!this.els.toggleChDynamic.checked,this.els.valChSize.textContent=`${this._settings.crosshair.size}px`,this.els.valChThickness.textContent=`${this._settings.crosshair.thickness}px`,this.els.valChGap.textContent=`${this._settings.crosshair.gap}px`,this.els.valChAlpha.textContent=`${Math.round(this._settings.crosshair.alpha*100)}%`,this._applyCrosshairStyles(),t()};this.els.sliderChSize.addEventListener("input",s),this.els.sliderChThickness.addEventListener("input",s),this.els.sliderChGap.addEventListener("input",s),this.els.sliderChAlpha.addEventListener("input",s),this.els.toggleChOutline.addEventListener("change",s),this.els.toggleChDot.addEventListener("change",s),this.els.toggleChDynamic.addEventListener("change",s),this.els.btnChReset.addEventListener("click",()=>{this._settings.crosshair=Ko(Dt),this._syncCrosshairControls(),this._applyCrosshairStyles(),t()})}_setActivePauseTab(e){const t=e==="crosshair";this._activePauseTab=t?"crosshair":"general",this.els.tabBtnGeneral.classList.toggle("active",!t),this.els.tabBtnGeneral.setAttribute("aria-selected",String(!t)),this.els.tabBtnCrosshair.classList.toggle("active",t),this.els.tabBtnCrosshair.setAttribute("aria-selected",String(t)),this.els.tabPanelGeneral.classList.toggle("hidden",t),this.els.tabPanelCrosshair.classList.toggle("hidden",!t)}_syncFpsVisibility(){const e=!!this._settings.showFps;this.els.fpsCounter.classList.toggle("hidden",!e)}_updateActiveSwatch(e){for(const t of this.els.chSwatchButtons)t.classList.toggle("active",t.dataset.color===e)}_syncCrosshairControls(){const e=this._settings.crosshair,t=Math.round(e.alpha*100);this.els.chColorPicker.value=e.color,this._updateActiveSwatch(e.color),this.els.sliderChSize.value=String(e.size),this.els.valChSize.textContent=`${e.size}px`,this.els.sliderChThickness.value=String(e.thickness),this.els.valChThickness.textContent=`${e.thickness}px`,this.els.sliderChGap.value=String(e.gap),this.els.valChGap.textContent=`${e.gap}px`,this.els.sliderChAlpha.value=String(t),this.els.valChAlpha.textContent=`${t}%`,this.els.toggleChOutline.checked=e.outline,this.els.toggleChDot.checked=e.dot,this.els.toggleChDynamic.checked=e.dynamic}_applyCrosshairStyles(){const e=this._settings.crosshair,t=[this.els.crosshair,this.els.crosshairPreview];for(const n of t)n&&(n.style.setProperty("--ch-color",e.color),n.style.setProperty("--ch-length",`${e.size}px`),n.style.setProperty("--ch-thickness",`${e.thickness}px`),n.style.setProperty("--ch-base-gap",`${e.gap}px`),n.style.setProperty("--ch-alpha",String(e.alpha)),n.classList.toggle("has-outline",e.outline),n.classList.toggle("has-dot",e.dot));!e.dynamic&&this.els.crosshair&&(this._lastCrosshairSpread="0px",this.els.crosshair.style.setProperty("--ch-spread","0px"),this.els.crosshair.classList.remove("pulsing"))}_copyToClipboard(e){const t=()=>{this.els.btnCopyCode.textContent="Kopyalandı!",this.els.btnCopyCode.classList.add("copied"),this._copyFeedbackTimer&&clearTimeout(this._copyFeedbackTimer),this._copyFeedbackTimer=setTimeout(()=>{this.els.btnCopyCode.textContent="Kopyala",this.els.btnCopyCode.classList.remove("copied"),this._copyFeedbackTimer=null},1500)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(t).catch(()=>{this._fallbackCopy(e),t()}):(this._fallbackCopy(e),t())}_fallbackCopy(e){const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch{}document.body.removeChild(t)}onCreateRoom(e){this._callbacks.createRoom=e}onJoinRoom(e){this._callbacks.joinRoom=e}onResume(e){this._callbacks.resume=e}onLeaveRoom(e){this._callbacks.leaveRoom=e}onSettingsChange(e){this._callbacks.settingsChange=e}showLobby(){this.els.lobbyOverlay.classList.remove("hidden"),this.els.hud.classList.add("hidden"),this.els.pauseMenu.classList.add("hidden"),this.setScopeVisible(!1),this.showRespawnCountdown(0),this.els.scorePopupFeed.innerHTML=""}showGame(){this.els.lobbyOverlay.classList.add("hidden"),this.els.hud.classList.remove("hidden"),this.els.pauseMenu.classList.add("hidden")}showPauseMenu(e){this.els.pauseMenu.classList.toggle("hidden",!e)}setRoomCode(e){if(!e){this._currentRoomCode="",this.els.roomCodeValue.textContent="------",this.els.roomCodeBox.classList.add("hidden");return}this._currentRoomCode=String(e).trim().toUpperCase(),this.els.roomCodeValue.textContent=this._currentRoomCode,this.els.roomCodeBox.classList.remove("hidden")}setLobbyStatus(e,t=!1){if(!e){this.els.lobbyStatus.textContent="",this.els.lobbyStatus.classList.add("hidden"),this.els.lobbyStatus.classList.remove("error");return}this.els.lobbyStatus.textContent=e,this.els.lobbyStatus.classList.remove("hidden"),this.els.lobbyStatus.classList.toggle("error",!!t)}updateHP(e){const t=mt.MAX_HP,n=Math.max(0,Math.min(t,Math.round(e))),s=n/t*100;this.els.hpValue.textContent=String(n),this.els.hpBarFill.style.width=`${s}%`,this.els.hpPanel.classList.remove("hp-mid","hp-low"),n<=25?this.els.hpPanel.classList.add("hp-low"):n<=50&&this.els.hpPanel.classList.add("hp-mid")}updateScore(e,t){this.els.scoreMe.textContent=String(e??0),this.els.scoreEnemy.textContent=String(t??0)}updateSpeedometer(e,t=!1){const n=Math.max(0,Math.round(Number(e)||0)),s=!!t;n!==this._lastSpeedInt&&(this._lastSpeedInt=n,this.els.speedValue.textContent=String(n)),s!==this._lastBhopState&&(this._lastBhopState=s,this.els.speedometer.classList.toggle("bhop-active",s))}updateFPS(e){if(!this._settings.showFps)return;const t=Math.max(0,Math.round(Number(e)||0));if(t===this._lastFpsInt)return;this._lastFpsInt=t;const n=this.els.fpsCounter;n.textContent=`${t} FPS`;const s=t>=55?"good":t>=30?"mid":"low";s!==this._lastFpsTier&&(this._lastFpsTier=s,n.classList.remove("fps-good","fps-mid","fps-low"),n.classList.add(`fps-${s}`))}updateWeaponHUD({weaponId:e=Be.AR,weaponName:t,ammo:n=0,magSize:s=30,isReloading:r=!1,reloadProgress:o=0}={}){const a=St[e]||St[Be.AR],c=t||a.name,l=!!(a.isMelee||s===0),h=l?0:Math.max(1,Math.round(Number(s)||a.magSize)),u=l?0:Math.max(0,Math.min(h,Math.round(Number(n)||0))),d=!l&&!!r,f=Math.max(0,Math.min(1,Number(o)||0))*100,g=`${e}|${c}|${u}|${h}|${d}|${f.toFixed(1)}`;if(g===this._lastWeaponKey)return;this._lastWeaponKey=g,this.els.weaponName.textContent=c,l?(this.els.ammoCurrent.textContent="∞",this.els.ammoSep.classList.add("hidden"),this.els.ammoMag.classList.add("hidden")):(this.els.ammoCurrent.textContent=String(u),this.els.ammoSep.classList.remove("hidden"),this.els.ammoMag.classList.remove("hidden"),this.els.ammoMag.textContent=String(h)),this.els.slotAr.classList.toggle("active",e===Be.AR),this.els.slotSniper.classList.toggle("active",e===Be.SNIPER),this.els.slotKnife.classList.toggle("active",e===Be.KNIFE);const v=!l&&(u===0||u/h<=.25);this.els.weaponPanel.classList.toggle("ammo-low",v&&!d),this.els.weaponPanel.classList.toggle("reloading",d),this.els.reloadContainer.classList.toggle("hidden",!d),d?this.els.reloadBarFill.style.width=`${f.toFixed(1)}%`:this.els.reloadBarFill.style.width="0%"}setScopeVisible(e){const t=!!e;t!==this._scopeVisible&&(this._scopeVisible=t,this.els.sniperScope.classList.toggle("hidden",!t),this.els.crosshair.classList.toggle("scope-hidden",t))}setCrosshairSpread(e){if(!this._settings.crosshair.dynamic){this._lastCrosshairSpread!=="0px"&&(this._lastCrosshairSpread="0px",this.els.crosshair.style.setProperty("--ch-spread","0px"));return}const n=`${(Math.max(0,Math.min(1,Number(e)||0))*18).toFixed(1)}px`;n!==this._lastCrosshairSpread&&(this._lastCrosshairSpread=n,this.els.crosshair.style.setProperty("--ch-spread",n))}pushScorePopup(e,t="kill"){if(!e)return;const n=this.els.scorePopupFeed,s=document.createElement("div"),r=t==="headshot"||t==="midair"||t==="kill"?t:"kill";for(s.className=`score-popup score-popup--${r}`,s.textContent=String(e),n.appendChild(s);n.children.length>6;)n.removeChild(n.firstElementChild);let o=!1;const a=()=>{o||(o=!0,s.parentNode===n&&n.removeChild(s))};s.addEventListener("animationend",a,{once:!0}),setTimeout(a,1250)}showHitmarker(e=!1){const t=this.els.hitmarker;t.classList.remove("active","headshot"),t.offsetWidth,e&&t.classList.add("headshot"),t.classList.add("active"),this._hitmarkerTimer&&clearTimeout(this._hitmarkerTimer),this._hitmarkerTimer=setTimeout(()=>{t.classList.remove("active","headshot"),this._hitmarkerTimer=null},170)}flashDamage(){const e=this.els.damageVignette;e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash"),this._damageTimer&&clearTimeout(this._damageTimer),this._damageTimer=setTimeout(()=>{e.classList.remove("flash"),this._damageTimer=null},400)}pulseCrosshair(){if(!this._settings.crosshair.dynamic)return;const e=this.els.crosshair;e.classList.add("pulsing"),this._crosshairTimer&&clearTimeout(this._crosshairTimer),this._crosshairTimer=setTimeout(()=>{e.classList.remove("pulsing"),this._crosshairTimer=null},95)}showRespawnCountdown(e){if(e==null||e<=0){this.els.respawnOverlay.classList.add("hidden"),this.els.respawnText.textContent="";return}const t=Number(e).toFixed(1);this.els.respawnText.textContent=`ELİMİNE EDİLDİN — ${t}s içinde doğuluyor...`,this.els.respawnOverlay.classList.remove("hidden")}getSettings(){return{sensitivity:this._settings.sensitivity,adsSensitivity:this._settings.adsSensitivity,fov:this._settings.fov,volume:this._settings.volume,showFps:this._settings.showFps,crosshair:{...this._settings.crosshair}}}}const dn=document.getElementById("game-canvas"),qn=new zg({canvas:dn,antialias:!0,powerPreference:"high-performance"});qn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));qn.setSize(window.innerWidth,window.innerHeight);qn.shadowMap.enabled=!0;qn.shadowMap.type=th;qn.toneMapping=ih;qn.toneMappingExposure=1.05;const er=new Uh,Ri=new hn(zn.fov,window.innerWidth/window.innerHeight,.08,160);er.add(Ri);const gs=Z_(er,qn),dt=new uv(Ri,er),Cn=new dv(er),Nt=new fv,Yt=new j_,Ge=new mv;Cn.setVisible(!1);dt.setInputEnabled(!1);let Pi=Ge.getSettings();dt.setBaseFov(Pi.fov);Nt.setVolume(Pi.volume);let qt=!1,Yn=!1,Sn=!1,ui=!1,Hn=mt.MAX_HP,Vs=mt.MAX_HP,Fi=0,_s=0,Ks=!1,ci=0,Jl=0,Jo=0;const Ur=new Gh,Zl=new R,Ls=new R;function Lu(){if(!(document.pointerLockElement===dn||!dn.requestPointerLock))try{const i=dn.requestPointerLock({unadjustedMovement:!0});i&&typeof i.catch=="function"&&i.catch(e=>{if(e&&e.name==="NotSupportedError")try{const t=dn.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}})}catch{try{dn.requestPointerLock()}catch{}}}function gv(){var i;if(document.pointerLockElement)try{(i=document.exitPointerLock)==null||i.call(document)}catch{}}function wc(){const i=dt.getState();Yt.sendState(i.pos,i.yaw,i.pitch,i.isCrouching,i.weaponId,i.isADS)}function _v(){qt=!0,Sn=!1,ui=!1,Hn=mt.MAX_HP,Vs=mt.MAX_HP,Fi=0,_s=0,Ks=!1,ci=0;const i=Yt.isHost()?gs.spawnPoints[0]:gs.spawnPoints[1];dt.respawnAt(i.pos,i.yaw),dt.setADS(!1),Cn.setVisible(!0),Ge.updateHP(Hn),Ge.updateScore(Fi,_s),Ge.showRespawnCountdown(0),Ge.setScopeVisible(!1),Ge.updateSpeedometer(0,!1),Ge.showGame(),wc(),Lu();const e=document.pointerLockElement===dn;Yn=!e,dt.setInputEnabled(e),Ge.showPauseMenu(!e)}function Du(i="",e=!1){qt=!1,Yn=!1,Sn=!1,ui=!1,ci=0,dt.setADS(!1),dt.setInputEnabled(!1),Cn.setVisible(!1),gv(),Yt.disconnect(),Ge.setScopeVisible(!1),Ge.showRespawnCountdown(0),Ge.showPauseMenu(!1),Ge.setRoomCode(null),Ge.showLobby(),Ge.setLobbyStatus(i,e)}function Za(i=!1){if(!qt||Yn||Sn||document.pointerLockElement!==dn)return;const e=dt.tryShoot(gs.mapMeshes,Cn.getHitboxes(),i);if(e&&(Nt.playShoot(e.weaponId),Ge.pulseCrosshair(),Yt.sendShoot(e.origin,e.dir,e.weaponId),e.hit)){const{damage:t,isHeadshot:n,isMidAir:s}=e.hit;Nt.playHitmarker(n),Ge.showHitmarker(n),Yt.sendHit(t,n,s),Vs=Math.max(0,Vs-t),Vs<=0&&(Cn.setVisible(!1),Ks||(Fi+=1,Ks=!0,Ge.updateScore(Fi,_s),Nt.playKill(),Ge.pushScorePopup("+100 KILL","kill"),n&&Ge.pushScorePopup("+50 HEADSHOT","headshot"),s&&Ge.pushScorePopup("+25 MID-AIR","midair")))}}function vv(){const i=Cn.getPosition(),e=gs.getFarthestSpawn(i);Hn=mt.MAX_HP,Sn=!1,ci=0,dt.respawnAt(e.pos,e.yaw),dt.setADS(!1),dt.setInputEnabled(!Yn&&document.pointerLockElement===dn),Ge.updateHP(Hn),Ge.showRespawnCountdown(0),Ge.setScopeVisible(!1),Nt.playRespawn(),Yt.sendRespawn(e.pos,e.yaw,Hn,!0),wc()}Ge.onCreateRoom(async()=>{Nt.unlock(),Ge.setRoomCode(null),Ge.setLobbyStatus("Oda oluşturuluyor...");try{const i=await Yt.createRoom();Ge.setRoomCode(i),Ge.setLobbyStatus("Rakip bekleniyor... Oda kodunu arkadaşına gönder.")}catch(i){Ge.setLobbyStatus((i==null?void 0:i.message)||"Oda oluşturulamadı.",!0)}});Ge.onJoinRoom(async i=>{Nt.unlock(),Ge.setRoomCode(null),Ge.setLobbyStatus(`"${i}" odasına bağlanılıyor...`);try{await Yt.joinRoom(i)}catch(e){Ge.setLobbyStatus((e==null?void 0:e.message)||"Odaya bağlanılamadı.",!0)}});Ge.onResume(()=>{Nt.unlock(),qt&&Lu()});Ge.onLeaveRoom(()=>{Du("Odadan ayrıldın.")});Ge.onSettingsChange(i=>{Pi=i,dt.setBaseFov(Pi.fov),Nt.setVolume(Pi.volume)});Yt.on("connected",()=>{_v()});Yt.on("disconnected",()=>{qt?Du("Rakip bağlantıyı kesti.",!0):Ge.setLobbyStatus("Bağlantı kesildi.",!0)});Yt.on("error",i=>{qt||Ge.setLobbyStatus((i==null?void 0:i.message)||"Ağ hatası oluştu.",!0)});Yt.on("state",({pos:i,yaw:e,pitch:t,isCrouching:n,weaponId:s,isADS:r})=>{qt&&Cn.pushState(i,e,t,n,s,r)});Yt.on("shoot",({origin:i,dir:e,weaponId:t})=>{if(!qt)return;const n=St[t]?t:Be.AR,s=St[n];if(!s.isMelee){const a=s.maxRange;Zl.set(i[0],i[1],i[2]),Ls.set(e[0],e[1],e[2]).normalize(),Ur.set(Zl,Ls),Ur.near=0,Ur.far=a;const c=Ur.intersectObjects(gs.mapMeshes,!1),l=c.length>0?c[0].distance:a,h=[i[0]+Ls.x*l,i[1]+Ls.y*l,i[2]+Ls.z*l];if(dt.spawnTracer(i,h,n),c.length>0&&c[0].face){const u=c[0].face.normal.clone().transformDirection(c[0].object.matrixWorld).normalize();dt.spawnBulletImpact(c[0].point,u)}}const r=dt.getPosition(),o=Math.hypot(i[0]-r[0],i[1]-r[1],i[2]-r[2]);Nt.playRemoteShoot(o,n)});Yt.on("hit",({damage:i})=>{!qt||Sn||(Hn=Math.max(0,Hn-i),Ge.updateHP(Hn),Ge.flashDamage(),Nt.playDamage(),Hn<=0&&(Sn=!0,ui=!1,dt.setADS(!1),dt.setInputEnabled(!1),Ge.setScopeVisible(!1),_s+=1,Ge.updateScore(Fi,_s),ci=mt.RESPAWN_DELAY_SEC,Ge.showRespawnCountdown(ci)))});Yt.on("respawn",({pos:i,yaw:e,hp:t,killerScored:n})=>{qt&&(n&&!Ks&&(Fi+=1,Ge.updateScore(Fi,_s),Nt.playKill(),Ge.pushScorePopup("+100 KILL","kill")),Ks=!1,Vs=t,Cn.setVisible(!0),Cn.pushState(i,e,0,!1,Be.AR,!1))});document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===dn;qt&&(Yn=!i,ui=!1,i||(dt.setADS(!1),Ge.setScopeVisible(!1)),dt.setInputEnabled(i&&!Sn),Ge.showPauseMenu(!i))});document.addEventListener("mousemove",i=>{!qt||Yn||Sn||document.pointerLockElement===dn&&dt.handleMouseMove(i.movementX,i.movementY,Pi.sensitivity,Pi.adsSensitivity)});window.addEventListener("contextmenu",i=>{qt&&i.preventDefault()});window.addEventListener("mousedown",i=>{!qt||document.pointerLockElement!==dn||Sn||Yn||(Nt.unlock(),i.button===0?(ui=!0,Za(!1)):i.button===2&&(dt.isMeleeWeapon()?Za(!0):dt.setADS(!0)))});window.addEventListener("mouseup",i=>{i.button===0?ui=!1:i.button===2&&dt.setADS(!1)});window.addEventListener("blur",()=>{ui=!1,dt.setADS(!1),Ge.setScopeVisible(!1)});window.addEventListener("resize",()=>{Ri.aspect=window.innerWidth/window.innerHeight,Ri.updateProjectionMatrix(),qn.setSize(window.innerWidth,window.innerHeight)});let Qa=performance.now(),Zo=0,Ql=Qa;function Uu(i){requestAnimationFrame(Uu);const e=Math.min((i-Qa)/1e3,.05);Qa=i,Zo+=1;const t=i-Ql;if(t>=250){const n=Math.round(Zo*1e3/t);Ge.updateFPS(n),Zo=0,Ql=i}if(qt){Sn?(ci-=e,ci<=0?vv():Ge.showRespawnCountdown(ci)):ui&&!Yn&&dt.isAutomaticWeapon()&&Za();const n=dt.update(e,gs.colliders);Cn.update(e),n.justJumped&&Nt.playJump(n.justBhopped),n.justLanded&&Nt.playLand(),n.weaponChanged&&Nt.playWeaponSwitch(),n.reloadStarted&&Nt.playReload(),Ge.updateSpeedometer(n.speedUnits,n.isBhopSpeed),Ge.setCrosshairSpread(n.spreadNormalized),Ge.setScopeVisible(n.isScoped&&!Yn&&!Sn),Ge.updateWeaponHUD(n.weaponHUD),i-Jl>=Ni.STATE_SEND_INTERVAL_MS&&(Jl=i,wc())}else Jo+=e*.16,Ri.position.set(Math.sin(Jo)*16,8.5,Math.cos(Jo)*18),Ri.lookAt(0,1.4,0);qn.render(er,Ri)}requestAnimationFrame(Uu);
