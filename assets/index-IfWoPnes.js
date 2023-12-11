var pc=Object.defineProperty;var mc=(r,t,e)=>t in r?pc(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>(mc(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _c(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ml={exports:{}};(function(r,t){(function(e,n){r.exports=n()})(gc,function(){var e=function(){function n(m){return a.appendChild(m.dom),m}function i(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";s=m}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),i(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=n(new e.Panel("FPS","#0ff","#002")),d=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-o,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,u)){var g=performance.memory;u.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:i}};return e.Panel=function(n,i,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,m=2*c,g=3*c,_=15*c,p=74*c,f=30*c,v=document.createElement("canvas");v.width=h,v.height=d,v.style.cssText="width:80px;height:48px";var x=v.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,h,d),x.fillStyle=i,x.fillText(n,u,m),x.fillRect(g,_,p,f),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g,_,p,f),{dom:v,update:function(M,w){a=Math.min(a,M),o=Math.max(o,M),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,h,_),x.fillStyle=i,x.fillText(l(M)+" "+n+" ("+l(a)+"-"+l(o)+")",u,m),x.drawImage(v,g+c,_,p-c,f,g,_,p-c,f),x.fillRect(g+p-c,_,c,f),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g+p-c,_,c,l((1-M/w)*f))}}},e})})(Ml);var vc=Ml.exports;const xc=_c(vc);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="158",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yc=0,Mo=1,Mc=2,Sl=1,El=2,_n=3,Fn=0,Ce=1,vn=2,Dn=0,Ri=1,So=2,Eo=3,wo=4,Sc=5,Yn=100,Ec=101,wc=102,To=103,bo=104,Tc=200,bc=201,Ac=202,Rc=203,qr=204,Yr=205,Cc=206,Pc=207,Lc=208,Dc=209,Ic=210,Nc=211,Uc=212,Fc=213,Oc=214,Bc=0,zc=1,Hc=2,Fs=3,Gc=4,Vc=5,kc=6,Wc=7,$s=0,Xc=1,qc=2,In=0,Yc=1,jc=2,Kc=3,Zc=4,$c=5,wl=300,Pi=301,Li=302,jr=303,Kr=304,Js=306,Zr=1e3,je=1001,$r=1002,Ae=1003,Ao=1004,lr=1005,He=1006,Jc=1007,Ji=1008,Nn=1009,Qc=1010,th=1011,io=1012,Tl=1013,Cn=1014,Pn=1015,Qi=1016,bl=1017,Al=1018,Zn=1020,eh=1021,Ke=1023,nh=1024,ih=1025,$n=1026,Di=1027,sh=1028,Rl=1029,rh=1030,Cl=1031,Pl=1033,cr=33776,hr=33777,ur=33778,dr=33779,Ro=35840,Co=35841,Po=35842,Lo=35843,oh=36196,Do=37492,Io=37496,No=37808,Uo=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,Ho=37814,Go=37815,Vo=37816,ko=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,fr=36492,jo=36494,Ko=36495,ah=36283,Zo=36284,$o=36285,Jo=36286,Ll=3e3,Jn=3001,lh=3200,ch=3201,so=0,hh=1,Ge="",ve="srgb",yn="srgb-linear",ro="display-p3",Qs="display-p3-linear",Os="linear",Qt="srgb",Bs="rec709",zs="p3",oi=7680,Qo=519,uh=512,dh=513,fh=514,ph=515,mh=516,gh=517,_h=518,vh=519,ta=35044,ea="300 es",Jr=1035,xn=2e3,Hs=2001;class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let na=1234567;const ji=Math.PI/180,Ii=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[r&255]+ye[r>>8&255]+ye[r>>16&255]+ye[r>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Se(r,t,e){return Math.max(t,Math.min(e,r))}function oo(r,t){return(r%t+t)%t}function xh(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function yh(r,t,e){return r!==t?(e-r)/(t-r):0}function Ki(r,t,e){return(1-e)*r+e*t}function Mh(r,t,e,n){return Ki(r,t,1-Math.exp(-e*n))}function Sh(r,t=1){return t-Math.abs(oo(r,t*2)-t)}function Eh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function wh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Th(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bh(r,t){return r+Math.random()*(t-r)}function Ah(r){return r*(.5-Math.random())}function Rh(r){r!==void 0&&(na=r);let t=na+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ch(r){return r*ji}function Ph(r){return r*Ii}function Qr(r){return(r&r-1)===0&&r!==0}function Lh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Dh(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ti(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ih={DEG2RAD:ji,RAD2DEG:Ii,generateUUID:Ui,clamp:Se,euclideanModulo:oo,mapLinear:xh,inverseLerp:yh,lerp:Ki,damp:Mh,pingpong:Sh,smoothstep:Eh,smootherstep:wh,randInt:Th,randFloat:bh,randFloatSpread:Ah,seededRandom:Rh,degToRad:Ch,radToDeg:Ph,isPowerOfTwo:Qr,ceilPowerOfTwo:Lh,floorPowerOfTwo:Gs,setQuaternionFromProperEuler:Dh,normalize:Te,denormalize:Ti};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],v=i[1],x=i[4],M=i[7],w=i[2],R=i[5],b=i[8];return s[0]=a*_+o*v+l*w,s[3]=a*p+o*x+l*R,s[6]=a*f+o*M+l*b,s[1]=c*_+h*v+d*w,s[4]=c*p+h*x+d*R,s[7]=c*f+h*M+d*b,s[2]=u*_+m*v+g*w,s[5]=u*p+m*x+g*R,s[8]=u*f+m*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,m=c*s-a*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pr.makeScale(t,e)),this}rotate(t){return this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new Vt;function Dl(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Vs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Nh(){const r=Vs("canvas");return r.style.display="block",r}const ia={};function Zi(r){r in ia||(ia[r]=!0,console.warn(r))}const sa=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[yn]:{transfer:Os,primaries:Bs,toReference:r=>r,fromReference:r=>r},[ve]:{transfer:Qt,primaries:Bs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Qs]:{transfer:Os,primaries:zs,toReference:r=>r.applyMatrix3(ra),fromReference:r=>r.applyMatrix3(sa)},[ro]:{transfer:Qt,primaries:zs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ra),fromReference:r=>r.applyMatrix3(sa).convertLinearToSRGB()}},Uh=new Set([yn,Qs]),Kt={enabled:!0,_workingColorSpace:yn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Uh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=os[t].toReference,i=os[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return os[r].primaries},getTransfer:function(r){return r===Ge?Os:os[r].transfer}};function Ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ai;class Il{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=Vs("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fh=0;class Nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(gr(i[a].image)):s.push(gr(i[a]))}else s=gr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function gr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Il.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;class Fe extends ei{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=je,i=je,s=He,a=Ji,o=Ke,l=Nn,c=Fe.DEFAULT_ANISOTROPY,h=Ge){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ui(),this.name="",this.source=new Nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Jn?ve:Ge),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Jn:Ll}set encoding(t){Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?ve:Ge}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=wl;Fe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(m+1)/2,w=(f+1)/2,R=(h+u)/4,b=(d+_)/4,z=(g+p)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=b/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=R/i,s=z/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=z/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bh extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?ve:Ge),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Bh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ul extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let On=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==m||h!==g){let p=1-o;const f=l*u+c*m+h*g+d*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const w=Math.sqrt(x),R=Math.atan2(w,f*v);p=Math.sin(p*R)/w,o=Math.sin(o*R)/w}const M=o*v;if(l=l*p+u*M,c=c*p+m*M,h=h*p+g*M,d=d*p+_*M,p===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new B,oa=new On;class ts{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(s,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),ls.subVectors(this.max,zi),li.subVectors(t.a,zi),ci.subVectors(t.b,zi),hi.subVectors(t.c,zi),Sn.subVectors(ci,li),En.subVectors(hi,ci),Hn.subVectors(li,hi);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Hn.z,Hn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Hn.z,0,-Hn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Hn.y,Hn.x,0];return!vr(e,li,ci,hi,ls)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,li,ci,hi,ls))?!1:(cs.crossVectors(Sn,En),e=[cs.x,cs.y,cs.z],vr(e,li,ci,hi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new B,new B,new B,new B,new B,new B,new B,new B],ke=new B,as=new ts,li=new B,ci=new B,hi=new B,Sn=new B,En=new B,Hn=new B,zi=new B,ls=new B,cs=new B,Gn=new B;function vr(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Gn.fromArray(r,s);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hh=new ts,Hi=new B,xr=new B;class tr{constructor(t=new B,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(xr)),this.expandByPoint(Hi.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new B,yr=new B,hs=new B,wn=new B,Mr=new B,us=new B,Sr=new B;let er=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(yr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=wn.dot(this.direction),l=-wn.dot(hs),c=wn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yr).addScaledVector(hs,u),m}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,s){Mr.subVectors(e,t),us.subVectors(n,t),Sr.crossVectors(Mr,us);let a=this.direction.dot(Sr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);const l=o*this.direction.dot(us.crossVectors(wn,us));if(l<0)return null;const c=o*this.direction.dot(Mr.cross(wn));if(c<0||l+c>a)return null;const h=-o*wn.dot(Sr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ce{constructor(t,e,n,i,s,a,o,l,c,h,d,u,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,d,u,m,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,d,u,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),s=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,Vh)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Tn.crossVectors(n,De),Tn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Tn.crossVectors(n,De)),Tn.normalize(),ds.crossVectors(De,Tn),i[0]=Tn.x,i[4]=ds.x,i[8]=De.x,i[1]=Tn.y,i[5]=ds.y,i[9]=De.y,i[2]=Tn.z,i[6]=ds.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],v=n[3],x=n[7],M=n[11],w=n[15],R=i[0],b=i[4],z=i[8],E=i[12],A=i[1],G=i[5],q=i[9],U=i[13],P=i[2],D=i[6],I=i[10],W=i[14],Z=i[3],j=i[7],J=i[11],F=i[15];return s[0]=a*R+o*A+l*P+c*Z,s[4]=a*b+o*G+l*D+c*j,s[8]=a*z+o*q+l*I+c*J,s[12]=a*E+o*U+l*W+c*F,s[1]=h*R+d*A+u*P+m*Z,s[5]=h*b+d*G+u*D+m*j,s[9]=h*z+d*q+u*I+m*J,s[13]=h*E+d*U+u*W+m*F,s[2]=g*R+_*A+p*P+f*Z,s[6]=g*b+_*G+p*D+f*j,s[10]=g*z+_*q+p*I+f*J,s[14]=g*E+_*U+p*W+f*F,s[3]=v*R+x*A+M*P+w*Z,s[7]=v*b+x*G+M*D+w*j,s[11]=v*z+x*q+M*I+w*J,s[15]=v*E+x*U+M*W+w*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*m-n*l*m)+_*(+e*l*m-e*c*u+s*a*u-i*a*m+i*c*h-s*l*h)+p*(+e*c*d-e*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+f*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],v=d*p*c-_*u*c+_*l*m-o*p*m-d*l*f+o*u*f,x=g*u*c-h*p*c-g*l*m+a*p*m+h*l*f-a*u*f,M=h*_*c-g*d*c+g*o*m-a*_*m-h*o*f+a*d*f,w=g*d*l-h*_*l-g*o*u+a*_*u+h*o*p-a*d*p,R=e*v+n*x+i*M+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=v*b,t[1]=(_*u*s-d*p*s-_*i*m+n*p*m+d*i*f-n*u*f)*b,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*f+n*l*f)*b,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*m-n*l*m)*b,t[4]=x*b,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*f+e*u*f)*b,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*f-e*l*f)*b,t[7]=(a*u*s-h*l*s+h*i*c-e*u*c-a*i*m+e*l*m)*b,t[8]=M*b,t[9]=(g*d*s-h*_*s-g*n*m+e*_*m+h*n*f-e*d*f)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*f+e*o*f)*b,t[11]=(h*o*s-a*d*s-h*n*c+e*d*c+a*n*m-e*o*m)*b,t[12]=w*b,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*p+e*d*p)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*b,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,u=s*c,m=s*h,g=s*d,_=a*h,p=a*d,f=o*d,v=l*c,x=l*h,M=l*d,w=n.x,R=n.y,b=n.z;return i[0]=(1-(_+f))*w,i[1]=(m+M)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(m-M)*R,i[5]=(1-(u+f))*R,i[6]=(p+v)*R,i[7]=0,i[8]=(g+x)*b,i[9]=(p-v)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ui.set(i[0],i[1],i[2]).length();const a=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],We.copy(this);const c=1/s,h=1/a,d=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=xn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,g;if(o===xn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Hs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=xn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-s),u=(e+t)*c,m=(n+i)*h;let g,_;if(o===xn)g=(a+s)*d,_=-2*d;else if(o===Hs)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new B,We=new ce,Gh=new B(0,0,0),Vh=new B(1,1,1),Tn=new B,ds=new B,De=new B,aa=new ce,la=new On;class nr{constructor(t=0,e=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return la.setFromEuler(this),this.setFromQuaternion(la,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kh=0;const ca=new B,di=new On,hn=new ce,fs=new B,Gi=new B,Wh=new B,Xh=new On,ha=new B(1,0,0),ua=new B(0,1,0),da=new B(0,0,1),qh={type:"added"},Yh={type:"removed"};class _e extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new B,e=new nr,n=new On,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Vt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(ha,t)}rotateY(t){return this.rotateOnAxis(ua,t)}rotateZ(t){return this.rotateOnAxis(da,t)}translateOnAxis(t,e){return ca.copy(t).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ha,t)}translateY(t){return this.translateOnAxis(ua,t)}translateZ(t){return this.translateOnAxis(da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Gi,fs,this.up):hn.lookAt(fs,Gi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new B(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new B,un=new B,Er=new B,dn=new B,fi=new B,pi=new B,fa=new B,wr=new B,Tr=new B,br=new B;let ps=!1;class Ye{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xe.subVectors(t,e),i.cross(Xe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Xe.subVectors(i,e),un.subVectors(n,e),Er.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(un),l=Xe.dot(Er),c=un.dot(un),h=un.dot(Er),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(t,e,n,i,s,a,o,l){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,dn),l.setScalar(0),l.addScaledVector(s,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l}static isFrontFacing(t,e,n,i){return Xe.subVectors(n,e),un.subVectors(t,e),Xe.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Xe.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;fi.subVectors(i,n),pi.subVectors(s,n),wr.subVectors(t,n);const l=fi.dot(wr),c=pi.dot(wr);if(l<=0&&c<=0)return e.copy(n);Tr.subVectors(t,i);const h=fi.dot(Tr),d=pi.dot(Tr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(fi,a);br.subVectors(t,s);const m=fi.dot(br),g=pi.dot(br);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(pi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return fa.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(fa,o);const f=1/(p+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Ar(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=oo(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ar(a,s,t+1/3),this.g=Ar(a,s,t),this.b=Ar(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=Fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Kt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Se(Me.r*255,0,255))*65536+Math.round(Se(Me.g*255,0,255))*256+Math.round(Se(Me.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,s=Me.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ve){Kt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(ms);const n=Ki(bn.h,ms.h,e),i=Ki(bn.s,ms.s,e),s=Ki(bn.l,ms.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=Fl;let jh=0,ni=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ri,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ol extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new B,gs=new Ut;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ta,this.updateRange={offset:0,count:-1},this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ta&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Bl extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zl extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Un extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kh=0;const ze=new ce,Rr=new _e,mi=new B,Ie=new ts,Vi=new ts,me=new B;class Mn extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dl(t)?zl:Bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ie.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Ie.min,Vi.min),Ie.expandByPoint(me),me.addVectors(Ie.max,Vi.max),Ie.expandByPoint(me)):(Ie.expandByPoint(Vi.min),Ie.expandByPoint(Vi.max))}Ie.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)me.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(me));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)me.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(t,c),me.add(mi)),i=Math.max(i,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new B,h[A]=new B;const d=new B,u=new B,m=new B,g=new Ut,_=new Ut,p=new Ut,f=new B,v=new B;function x(A,G,q){d.fromArray(i,A*3),u.fromArray(i,G*3),m.fromArray(i,q*3),g.fromArray(a,A*2),_.fromArray(a,G*2),p.fromArray(a,q*2),u.sub(d),m.sub(d),_.sub(g),p.sub(g);const U=1/(_.x*p.y-p.x*_.y);isFinite(U)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(U),v.copy(m).multiplyScalar(_.x).addScaledVector(u,-p.x).multiplyScalar(U),c[A].add(f),c[G].add(f),c[q].add(f),h[A].add(v),h[G].add(v),h[q].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,G=M.length;A<G;++A){const q=M[A],U=q.start,P=q.count;for(let D=U,I=U+P;D<I;D+=3)x(n[D+0],n[D+1],n[D+2])}const w=new B,R=new B,b=new B,z=new B;function E(A){b.fromArray(s,A*3),z.copy(b);const G=c[A];w.copy(G),w.sub(b.multiplyScalar(b.dot(G))).normalize(),R.crossVectors(z,G);const U=R.dot(h[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=U}for(let A=0,G=M.length;A<G;++A){const q=M[A],U=q.start,P=q.count;for(let D=U,I=U+P;D<I;D+=3)E(n[D+0]),E(n[D+1]),E(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new on(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new ce,Vn=new er,_s=new tr,ma=new B,gi=new B,_i=new B,vi=new B,Cr=new B,vs=new B,xs=new Ut,ys=new Ut,Ms=new Ut,ga=new B,_a=new B,va=new B,Ss=new B,Es=new B;class rn extends _e{constructor(t=new Mn,e=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Cr.fromBufferAttribute(d,t),a?vs.addScaledVector(Cr,h):vs.addScaledVector(Cr.sub(e),h))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),Vn.copy(t.ray).recast(t.near),!(_s.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(_s,ma)===null||Vn.origin.distanceToSquared(ma)>(t.far-t.near)**2))&&(pa.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(pa),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,w=x;M<w;M+=3){const R=o.getX(M),b=o.getX(M+1),z=o.getX(M+2);i=ws(this,f,t,n,c,h,d,R,b,z),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const v=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=ws(this,a,t,n,c,h,d,v,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,w=x;M<w;M+=3){const R=M,b=M+1,z=M+2;i=ws(this,f,t,n,c,h,d,R,b,z),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const v=p,x=p+1,M=p+2;i=ws(this,a,t,n,c,h,d,v,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Zh(r,t,e,n,i,s,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Fn,o),l===null)return null;Es.copy(o),Es.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Es);return c<e.near||c>e.far?null:{distance:c,point:Es.clone(),object:r}}function ws(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,gi),r.getVertexPosition(l,_i),r.getVertexPosition(c,vi);const h=Zh(r,t,e,n,gi,_i,vi,Ss);if(h){i&&(xs.fromBufferAttribute(i,o),ys.fromBufferAttribute(i,l),Ms.fromBufferAttribute(i,c),h.uv=Ye.getInterpolation(Ss,gi,_i,vi,xs,ys,Ms,new Ut)),s&&(xs.fromBufferAttribute(s,o),ys.fromBufferAttribute(s,l),Ms.fromBufferAttribute(s,c),h.uv1=Ye.getInterpolation(Ss,gi,_i,vi,xs,ys,Ms,new Ut),h.uv2=h.uv1),a&&(ga.fromBufferAttribute(a,o),_a.fromBufferAttribute(a,l),va.fromBufferAttribute(a,c),h.normal=Ye.getInterpolation(Ss,gi,_i,vi,ga,_a,va,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};Ye.getNormal(gi,_i,vi,d.normal),h.face=d}return h}class ii extends Mn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(h,3)),this.setAttribute("uv",new Un(d,2));function g(_,p,f,v,x,M,w,R,b,z,E){const A=M/b,G=w/z,q=M/2,U=w/2,P=R/2,D=b+1,I=z+1;let W=0,Z=0;const j=new B;for(let J=0;J<I;J++){const F=J*G-U;for(let O=0;O<D;O++){const lt=O*A-q;j[_]=lt*v,j[p]=F*x,j[f]=P,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[f]=R>0?1:-1,h.push(j.x,j.y,j.z),d.push(O/b),d.push(1-J/z),W+=1}}for(let J=0;J<z;J++)for(let F=0;F<b;F++){const O=u+F+D*J,lt=u+F+D*(J+1),ht=u+(F+1)+D*(J+1),dt=u+(F+1)+D*J;l.push(O,lt,dt),l.push(lt,ht,dt),Z+=6}o.addGroup(m,Z,E),m+=Z,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(r){const t={};for(let e=0;e<r.length;e++){const n=Ni(r[e]);for(const i in n)t[i]=n[i]}return t}function $h(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Hl(r){return r.getRenderTarget()===null?r.outputColorSpace:Kt.workingColorSpace}const Jh={clone:Ni,merge:be};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=$h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gl extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ue extends Gl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ji*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,yi=1;class eu extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ue(xi,yi,t,e);i.layers=this.layers,this.add(i);const s=new Ue(xi,yi,t,e);s.layers=this.layers,this.add(s);const a=new Ue(xi,yi,t,e);a.layers=this.layers,this.add(a);const o=new Ue(xi,yi,t,e);o.layers=this.layers,this.add(o);const l=new Ue(xi,yi,t,e);l.layers=this.layers,this.add(l);const c=new Ue(xi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vl extends Fe{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nu extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Jn?ve:Ge),this.texture=new Vl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ii(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Dn});s.uniforms.tEquirect.value=e;const a=new rn(i,s),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=He),new eu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Pr=new B,iu=new B,su=new Vt;class Rn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pr.subVectors(n,e).cross(iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||su.getNormalMatrix(t),i=this.coplanarPoint(Pr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new tr,Ts=new B;class lo{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,s=new Rn,a=new Rn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,u-c,p-m,M-f).normalize(),n[1].setComponents(l+s,u+c,p+m,M+f).normalize(),n[2].setComponents(l+a,u+h,p+g,M+v).normalize(),n[3].setComponents(l-a,u-h,p-g,M-v).normalize(),n[4].setComponents(l-o,u-d,p-_,M-x).normalize(),e===xn)n[5].setComponents(l+o,u+d,p+_,M+x).normalize();else if(e===Hs)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ts.x=i.normal.x>0?t.max.x:t.min.x,Ts.y=i.normal.y>0?t.max.y:t.min.y,Ts.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ru(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class co extends Mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const v=f*u-a;for(let x=0;x<c;x++){const M=x*d-s;g.push(M,-v,0),_.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const x=v+c*f,M=v+c*(f+1),w=v+1+c*(f+1),R=v+1+c*f;m.push(x,M,R),m.push(M,w,R)}this.setIndex(m),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.width,t.height,t.widthSegments,t.heightSegments)}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
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
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,du=`#ifdef USE_AOMAP
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
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,vu=`#ifdef USE_BUMPMAP
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Au=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
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
}`,qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,$u=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,sd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,uf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ff=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vf=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,xf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Mf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Sf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ef=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Af=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Cf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Lf=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Df=`uniform float size;
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
}`,If=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Nf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Uf=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Of=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ht={alphahash_fragment:ou,alphahash_pars_fragment:au,alphamap_fragment:lu,alphamap_pars_fragment:cu,alphatest_fragment:hu,alphatest_pars_fragment:uu,aomap_fragment:du,aomap_pars_fragment:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:vu,clipping_planes_fragment:xu,clipping_planes_pars_fragment:yu,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:Su,color_fragment:Eu,color_pars_fragment:wu,color_pars_vertex:Tu,color_vertex:bu,common:Au,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Pu,displacementmap_vertex:Lu,emissivemap_fragment:Du,emissivemap_pars_fragment:Iu,colorspace_fragment:Nu,colorspace_pars_fragment:Uu,envmap_fragment:Fu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Bu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:$u,envmap_vertex:Hu,fog_vertex:Gu,fog_pars_vertex:Vu,fog_fragment:ku,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Ku,lights_pars_begin:Zu,lights_toon_fragment:Ju,lights_toon_pars_fragment:Qu,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:od,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:_d,morphnormal_vertex:vd,morphtarget_pars_vertex:xd,morphtarget_vertex:yd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:Ed,normal_pars_vertex:wd,normal_vertex:Td,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Pd,opaque_fragment:Ld,packing:Dd,premultiplied_alpha_fragment:Id,project_vertex:Nd,dithering_fragment:Ud,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Vd,skinbase_vertex:kd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:jd,tonemapping_fragment:Kd,tonemapping_pars_fragment:Zd,transmission_fragment:$d,transmission_pars_fragment:Jd,uv_pars_fragment:Qd,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:of,backgroundCube_frag:af,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:uf,distanceRGBA_vert:df,distanceRGBA_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:vf,meshbasic_frag:xf,meshlambert_vert:yf,meshlambert_frag:Mf,meshmatcap_vert:Sf,meshmatcap_frag:Ef,meshnormal_vert:wf,meshnormal_frag:Tf,meshphong_vert:bf,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:Df,points_frag:If,shadow_vert:Nf,shadow_frag:Uf,sprite_vert:Ff,sprite_frag:Of},ct={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},nn={basic:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:be([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:be([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:be([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:be([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:be([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:be([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:be([ct.common,ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:be([ct.lights,ct.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};nn.physical={uniforms:be([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const bs={r:0,b:0,g:0};function Bf(r,t,e,n,i,s,a){const o=new kt(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),v=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Js)?(h===void 0&&(h=new rn(new ii(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ni(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(x.colorSpace)!==Qt,(d!==x||u!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new rn(new co(2,2),new ti({name:"BackgroundMaterial",uniforms:Ni(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(bs,Hl(r)),n.buffers.color.setClear(bs.r,bs.g,bs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function zf(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(P,D,I,W,Z){let j=!1;if(a){const J=_(W,I,D);c!==J&&(c=J,m(c.object)),j=f(P,W,I,Z),j&&v(P,W,I,Z)}else{const J=D.wireframe===!0;(c.geometry!==W.id||c.program!==I.id||c.wireframe!==J)&&(c.geometry=W.id,c.program=I.id,c.wireframe=J,j=!0)}Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,z(P,D,I,W),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,D,I){const W=I.wireframe===!0;let Z=o[P.id];Z===void 0&&(Z={},o[P.id]=Z);let j=Z[D.id];j===void 0&&(j={},Z[D.id]=j);let J=j[W];return J===void 0&&(J=p(u()),j[W]=J),J}function p(P){const D=[],I=[],W=[];for(let Z=0;Z<i;Z++)D[Z]=0,I[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:W,object:P,attributes:{},index:null}}function f(P,D,I,W){const Z=c.attributes,j=D.attributes;let J=0;const F=I.getAttributes();for(const O in F)if(F[O].location>=0){const ht=Z[O];let dt=j[O];if(dt===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),ht===void 0||ht.attribute!==dt||dt&&ht.data!==dt.data)return!0;J++}return c.attributesNum!==J||c.index!==W}function v(P,D,I,W){const Z={},j=D.attributes;let J=0;const F=I.getAttributes();for(const O in F)if(F[O].location>=0){let ht=j[O];ht===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor));const dt={};dt.attribute=ht,ht&&ht.data&&(dt.data=ht.data),Z[O]=dt,J++}c.attributes=Z,c.attributesNum=J,c.index=W}function x(){const P=c.newAttributes;for(let D=0,I=P.length;D<I;D++)P[D]=0}function M(P){w(P,0)}function w(P,D){const I=c.newAttributes,W=c.enabledAttributes,Z=c.attributeDivisors;I[P]=1,W[P]===0&&(r.enableVertexAttribArray(P),W[P]=1),Z[P]!==D&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),Z[P]=D)}function R(){const P=c.newAttributes,D=c.enabledAttributes;for(let I=0,W=D.length;I<W;I++)D[I]!==P[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function b(P,D,I,W,Z,j,J){J===!0?r.vertexAttribIPointer(P,D,I,Z,j):r.vertexAttribPointer(P,D,I,W,Z,j)}function z(P,D,I,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const Z=W.attributes,j=I.getAttributes(),J=D.defaultAttributeValues;for(const F in j){const O=j[F];if(O.location>=0){let lt=Z[F];if(lt===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),lt!==void 0){const ht=lt.normalized,dt=lt.itemSize,wt=e.get(lt);if(wt===void 0)continue;const Bt=wt.buffer,At=wt.type,Dt=wt.bytesPerElement,$t=n.isWebGL2===!0&&(At===r.INT||At===r.UNSIGNED_INT||lt.gpuType===Tl);if(lt.isInterleavedBufferAttribute){const zt=lt.data,V=zt.stride,xe=lt.offset;if(zt.isInstancedInterleavedBuffer){for(let St=0;St<O.locationSize;St++)w(O.location+St,zt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let St=0;St<O.locationSize;St++)M(O.location+St);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let St=0;St<O.locationSize;St++)b(O.location+St,dt/O.locationSize,At,ht,V*Dt,(xe+dt/O.locationSize*St)*Dt,$t)}else{if(lt.isInstancedBufferAttribute){for(let zt=0;zt<O.locationSize;zt++)w(O.location+zt,lt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<O.locationSize;zt++)M(O.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let zt=0;zt<O.locationSize;zt++)b(O.location+zt,dt/O.locationSize,At,ht,dt*Dt,dt/O.locationSize*zt*Dt,$t)}}else if(J!==void 0){const ht=J[F];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(O.location,ht);break;case 3:r.vertexAttrib3fv(O.location,ht);break;case 4:r.vertexAttrib4fv(O.location,ht);break;default:r.vertexAttrib1fv(O.location,ht)}}}}R()}function E(){q();for(const P in o){const D=o[P];for(const I in D){const W=D[I];for(const Z in W)g(W[Z].object),delete W[Z];delete D[I]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;const D=o[P.id];for(const I in D){const W=D[I];for(const Z in W)g(W[Z].object),delete W[Z];delete D[I]}delete o[P.id]}function G(P){for(const D in o){const I=o[D];if(I[P.id]===void 0)continue;const W=I[P.id];for(const Z in W)g(W[Z].object),delete W[Z];delete I[P.id]}}function q(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function Hf(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Gf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=a||t.has("OES_texture_float"),w=x&&M,R=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:R}}function Vf(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Rn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,x=v*4;let M=f.clippingState||null;l.value=M,M=h(g,u,x,m);for(let w=0;w!==x;++w)M[w]=e[w];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,M=m;x!==_;++x,M+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function kf(r){let t=new WeakMap;function e(a,o){return o===jr?a.mapping=Pi:o===Kr&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===jr||o===Kr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nu(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Wf extends Gl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bi=4,xa=[.125,.215,.35,.446,.526,.582],jn=20,Lr=new Wf,ya=new kt;let Dr=null,Ir=0,Nr=0;const Xn=(1+Math.sqrt(5))/2,Mi=1/Xn,Ma=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Xn,Mi),new B(0,Xn,-Mi),new B(Mi,0,Xn),new B(-Mi,0,Xn),new B(Xn,Mi,0),new B(-Xn,Mi,0)];class Sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dr,Ir,Nr),t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Qi,format:Ke,colorSpace:yn,depthBuffer:!1},i=Ea(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xf(s)),this._blurMaterial=qf(s,t,e)}return i}_compileMaterial(t){const e=new rn(this._lodPlanes[0],t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,n,i){const o=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ya),h.toneMapping=In,h.autoClear=!1;const m=new Ol({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new rn(new ii,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ya),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;As(i,v*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wa());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new rn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ma[(i-1)%Ma.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new rn(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*jn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):jn;p>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const f=[];let v=0;for(let b=0;b<jn;++b){const z=b/_,E=Math.exp(-z*z/2);f.push(E),b===0?v+=E:b<p&&(v+=2*E)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[i],w=3*M*(i>x-bi?i-x+bi:0),R=4*(this._cubeSize-M);As(e,w,R,3*M,2*M),l.setRenderTarget(e),l.render(d,Lr)}}function Xf(r){const t=[],e=[],n=[];let i=r;const s=r-bi+1+xa.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-bi?l=xa[a-r+bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,f=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,z=R>2?0:-1,E=[b,z,0,b+2/3,z,0,b+2/3,z+1,0,b,z,0,b+2/3,z+1,0,b,z+1,0];v.set(E,_*g*R),x.set(u,p*g*R);const A=[R,R,R,R,R,R];M.set(A,f*g*R)}const w=new Mn;w.setAttribute("position",new on(v,_)),w.setAttribute("uv",new on(x,p)),w.setAttribute("faceIndex",new on(M,f)),t.push(w),i>bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ea(r,t,e){const n=new Qn(r,t,e);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function qf(r,t,e){const n=new Float32Array(jn),i=new B(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function wa(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ta(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function Yf(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===jr||l===Kr,h=l===Pi||l===Li;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Sa(r)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Sa(r));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kf(r,t,e,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}u.removeEventListener("dispose",a),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,M=v.length;x<M;x+=3){const w=v[x+0],R=v[x+1],b=v[x+2];u.push(w,R,R,b,b,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const w=x+0,R=x+1,b=x+2;u.push(w,R,R,b,b,w)}}else return;const p=new(Dl(u)?zl:Bl)(u,1);p.version=_;const f=s.get(d);f&&t.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Zf(r,t,e,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){r.drawElements(s,m,o,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,u*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function $f(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jf(r,t){return r[0]-t[0]}function Qf(r,t){return Math.abs(t[1])-Math.abs(r[1])}function tp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new ge,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let D=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var m=D;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let E=0;x===!0&&(E=1),M===!0&&(E=2),w===!0&&(E=3);let A=h.attributes.position.count*E,G=1;A>t.maxTextureSize&&(G=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const q=new Float32Array(A*G*4*_),U=new Ul(q,A,G,_);U.type=Pn,U.needsUpdate=!0;const P=E*4;for(let I=0;I<_;I++){const W=R[I],Z=b[I],j=z[I],J=A*G*4*I;for(let F=0;F<W.count;F++){const O=F*P;x===!0&&(a.fromBufferAttribute(W,F),q[J+O+0]=a.x,q[J+O+1]=a.y,q[J+O+2]=a.z,q[J+O+3]=0),M===!0&&(a.fromBufferAttribute(Z,F),q[J+O+4]=a.x,q[J+O+5]=a.y,q[J+O+6]=a.z,q[J+O+7]=0),w===!0&&(a.fromBufferAttribute(j,F),q[J+O+8]=a.x,q[J+O+9]=a.y,q[J+O+10]=a.z,q[J+O+11]=j.itemSize===4?a.w:1)}}p={count:_,texture:U,size:new Ut(A,G)},s.set(h,p),h.addEventListener("dispose",D)}let f=0;for(let x=0;x<u.length;x++)f+=u[x];const v=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const w=_[M];w[0]=M,w[1]=u[M]}_.sort(Qf);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Jf);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const w=o[M],R=w[0],b=w[1];R!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+M)!==p[R]&&h.setAttribute("morphTarget"+M,p[R]),f&&h.getAttribute("morphNormal"+M)!==f[R]&&h.setAttribute("morphNormal"+M,f[R]),i[M]=b,v+=b):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function ep(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Wl=new Fe,Xl=new Ul,ql=new zh,Yl=new Vl,ba=[],Aa=[],Ra=new Float32Array(16),Ca=new Float32Array(9),Pa=new Float32Array(4);function Fi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ba[i];if(s===void 0&&(s=new Float32Array(i),ba[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function de(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ir(r,t){let e=Aa[t];e===void 0&&(e=new Int32Array(t),Aa[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function np(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ip(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2fv(this.addr,t),de(e,t)}}function sp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;r.uniform3fv(this.addr,t),de(e,t)}}function rp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4fv(this.addr,t),de(e,t)}}function op(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Pa.set(n),r.uniformMatrix2fv(this.addr,!1,Pa),de(e,n)}}function ap(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ca.set(n),r.uniformMatrix3fv(this.addr,!1,Ca),de(e,n)}}function lp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ra.set(n),r.uniformMatrix4fv(this.addr,!1,Ra),de(e,n)}}function cp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2iv(this.addr,t),de(e,t)}}function up(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3iv(this.addr,t),de(e,t)}}function dp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4iv(this.addr,t),de(e,t)}}function fp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2uiv(this.addr,t),de(e,t)}}function mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;r.uniform3uiv(this.addr,t),de(e,t)}}function gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4uiv(this.addr,t),de(e,t)}}function _p(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Wl,i)}function vp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ql,i)}function xp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yl,i)}function yp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xl,i)}function Mp(r){switch(r){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return op;case 35675:return ap;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return yp}}function Sp(r,t){r.uniform1fv(this.addr,t)}function Ep(r,t){const e=Fi(t,this.size,2);r.uniform2fv(this.addr,e)}function wp(r,t){const e=Fi(t,this.size,3);r.uniform3fv(this.addr,e)}function Tp(r,t){const e=Fi(t,this.size,4);r.uniform4fv(this.addr,e)}function bp(r,t){const e=Fi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ap(r,t){const e=Fi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Rp(r,t){const e=Fi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Cp(r,t){r.uniform1iv(this.addr,t)}function Pp(r,t){r.uniform2iv(this.addr,t)}function Lp(r,t){r.uniform3iv(this.addr,t)}function Dp(r,t){r.uniform4iv(this.addr,t)}function Ip(r,t){r.uniform1uiv(this.addr,t)}function Np(r,t){r.uniform2uiv(this.addr,t)}function Up(r,t){r.uniform3uiv(this.addr,t)}function Fp(r,t){r.uniform4uiv(this.addr,t)}function Op(r,t,e){const n=this.cache,i=t.length,s=ir(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Wl,s[a])}function Bp(r,t,e){const n=this.cache,i=t.length,s=ir(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ql,s[a])}function zp(r,t,e){const n=this.cache,i=t.length,s=ir(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Yl,s[a])}function Hp(r,t,e){const n=this.cache,i=t.length,s=ir(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Xl,s[a])}function Gp(r){switch(r){case 5126:return Sp;case 35664:return Ep;case 35665:return wp;case 35666:return Tp;case 35674:return bp;case 35675:return Ap;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Dp;case 5125:return Ip;case 36294:return Np;case 36295:return Up;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Mp(e.type)}}class kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Gp(e.type)}}class Wp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function La(r,t){r.seq.push(t),r.map[t.id]=t}function Xp(r,t,e){const n=r.name,i=n.length;for(Ur.lastIndex=0;;){const s=Ur.exec(n),a=Ur.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){La(e,c===void 0?new Vp(o,r,t):new kp(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Wp(o),La(e,d)),e=d}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Xp(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Da(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const qp=37297;let Yp=0;function jp(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Kp(r){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(r);let n;switch(t===e?n="":t===zs&&e===Bs?n="LinearDisplayP3ToLinearSRGB":t===Bs&&e===zs&&(n="LinearSRGBToLinearDisplayP3"),r){case yn:case Qs:return[n,"LinearTransferOETF"];case ve:case ro:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ia(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+jp(r.getShaderSource(t),a)}else return i}function Zp(r,t){const e=Kp(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $p(r,t){let e;switch(t){case Yc:e="Linear";break;case jc:e="Reinhard";break;case Kc:e="OptimizedCineon";break;case Zc:e="ACESFilmic";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Qp(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Yi(r){return r!==""}function Na(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ua(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(r){return r.replace(em,im)}const nm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function im(r,t){let e=Ht[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fa(r){return r.replace(sm,rm)}function rm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oa(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function om(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function am(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function cm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $s:t="ENVMAP_BLENDING_MULTIPLY";break;case Xc:t="ENVMAP_BLENDING_MIX";break;case qc:t="ENVMAP_BLENDING_ADD";break}return t}function hm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function um(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=om(e),c=am(e),h=lm(e),d=cm(e),u=hm(e),m=e.isWebGL2?"":Jp(e),g=Qp(s),_=i.createProgram();let p,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yi).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yi).join(`
`),f.length>0&&(f+=`
`)):(p=[Oa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),f=[m,Oa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Ht.tonemapping_pars_fragment:"",e.toneMapping!==In?$p("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Zp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),a=to(a),a=Na(a,e),a=Ua(a,e),o=to(o),o=Na(o,e),o=Ua(o,e),a=Fa(a),o=Fa(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+p+a,M=v+f+o,w=Da(i,i.VERTEX_SHADER,x),R=Da(i,i.FRAGMENT_SHADER,M);i.attachShader(_,w),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(G){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(w).trim(),P=i.getShaderInfoLog(R).trim();let D=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,R);else{const W=Ia(i,w,"vertex"),Z=Ia(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||P==="")&&(I=!1);I&&(G.diagnostics={runnable:D,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:P,prefix:f}})}i.deleteShader(w),i.deleteShader(R),z=new Us(i,_),E=tm(i,_)}let z;this.getUniforms=function(){return z===void 0&&b(this),z};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,qp)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let dm=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pm(t),e.set(t,n)),n}}class pm{constructor(t){this.id=dm++,this.code=t,this.usedTimes=0}}function mm(r,t,e,n,i,s,a){const o=new ao,l=new fm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,A,G,q,U){const P=q.fog,D=U.geometry,I=E.isMeshStandardMaterial?q.environment:null,W=(E.isMeshStandardMaterial?e:t).get(E.envMap||I),Z=W&&W.mapping===Js?W.image.height:null,j=g[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,F=J!==void 0?J.length:0;let O=0;D.morphAttributes.position!==void 0&&(O=1),D.morphAttributes.normal!==void 0&&(O=2),D.morphAttributes.color!==void 0&&(O=3);let lt,ht,dt,wt;if(j){const se=nn[j];lt=se.vertexShader,ht=se.fragmentShader}else lt=E.vertexShader,ht=E.fragmentShader,l.update(E),dt=l.getVertexShaderID(E),wt=l.getFragmentShaderID(E);const Bt=r.getRenderTarget(),At=U.isInstancedMesh===!0,Dt=!!E.map,$t=!!E.matcap,zt=!!W,V=!!E.aoMap,xe=!!E.lightMap,St=!!E.bumpMap,Rt=!!E.normalMap,Ct=!!E.displacementMap,te=!!E.emissiveMap,Ft=!!E.metalnessMap,It=!!E.roughnessMap,Yt=E.anisotropy>0,ie=E.clearcoat>0,fe=E.iridescence>0,C=E.sheen>0,S=E.transmission>0,k=Yt&&!!E.anisotropyMap,nt=ie&&!!E.clearcoatMap,tt=ie&&!!E.clearcoatNormalMap,it=ie&&!!E.clearcoatRoughnessMap,vt=fe&&!!E.iridescenceMap,ot=fe&&!!E.iridescenceThicknessMap,ut=C&&!!E.sheenColorMap,L=C&&!!E.sheenRoughnessMap,rt=!!E.specularMap,Q=!!E.specularColorMap,Tt=!!E.specularIntensityMap,xt=S&&!!E.transmissionMap,Et=S&&!!E.thicknessMap,_t=!!E.gradientMap,pt=!!E.alphaMap,Wt=E.alphaTest>0,N=!!E.alphaHash,at=!!E.extensions,et=!!D.attributes.uv1,$=!!D.attributes.uv2,st=!!D.attributes.uv3;let Mt=In;return E.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(Mt=r.toneMapping),{isWebGL2:h,shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:lt,fragmentShader:ht,defines:E.defines,customVertexShaderID:dt,customFragmentShaderID:wt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:At,instancingColor:At&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Bt===null?r.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:yn,map:Dt,matcap:$t,envMap:zt,envMapMode:zt&&W.mapping,envMapCubeUVHeight:Z,aoMap:V,lightMap:xe,bumpMap:St,normalMap:Rt,displacementMap:u&&Ct,emissiveMap:te,normalMapObjectSpace:Rt&&E.normalMapType===hh,normalMapTangentSpace:Rt&&E.normalMapType===so,metalnessMap:Ft,roughnessMap:It,anisotropy:Yt,anisotropyMap:k,clearcoat:ie,clearcoatMap:nt,clearcoatNormalMap:tt,clearcoatRoughnessMap:it,iridescence:fe,iridescenceMap:vt,iridescenceThicknessMap:ot,sheen:C,sheenColorMap:ut,sheenRoughnessMap:L,specularMap:rt,specularColorMap:Q,specularIntensityMap:Tt,transmission:S,transmissionMap:xt,thicknessMap:Et,gradientMap:_t,opaque:E.transparent===!1&&E.blending===Ri,alphaMap:pt,alphaTest:Wt,alphaHash:N,combine:E.combine,mapUv:Dt&&_(E.map.channel),aoMapUv:V&&_(E.aoMap.channel),lightMapUv:xe&&_(E.lightMap.channel),bumpMapUv:St&&_(E.bumpMap.channel),normalMapUv:Rt&&_(E.normalMap.channel),displacementMapUv:Ct&&_(E.displacementMap.channel),emissiveMapUv:te&&_(E.emissiveMap.channel),metalnessMapUv:Ft&&_(E.metalnessMap.channel),roughnessMapUv:It&&_(E.roughnessMap.channel),anisotropyMapUv:k&&_(E.anisotropyMap.channel),clearcoatMapUv:nt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(E.sheenRoughnessMap.channel),specularMapUv:rt&&_(E.specularMap.channel),specularColorMapUv:Q&&_(E.specularColorMap.channel),specularIntensityMapUv:Tt&&_(E.specularIntensityMap.channel),transmissionMapUv:xt&&_(E.transmissionMap.channel),thicknessMapUv:Et&&_(E.thicknessMap.channel),alphaMapUv:pt&&_(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Rt||Yt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:$,vertexUv3s:st,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Dt||pt),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&Kt.getTransfer(E.map.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vn,flipSided:E.side===Ce,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:at&&E.extensions.derivatives===!0,extensionFragDepth:at&&E.extensions.fragDepth===!0,extensionDrawBuffers:at&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)A.push(G),A.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(v(A,E),x(A,E),A.push(r.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function v(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function x(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){const A=g[E.type];let G;if(A){const q=nn[A];G=Jh.clone(q.uniforms)}else G=E.uniforms;return G}function w(E,A){let G;for(let q=0,U=c.length;q<U;q++){const P=c[q];if(P.cacheKey===A){G=P,++G.usedTimes;break}}return G===void 0&&(G=new um(r,A,E,s),c.push(G)),G}function R(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:z}}function gm(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _m(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ba(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function za(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,m,g,_,p){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function o(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||_m),n.length>1&&n.sort(u||Ba),i.length>1&&i.sort(u||Ba)}function h(){for(let d=t,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function vm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new za,r.set(n,[a])):i>=s.length?(a=new za,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function xm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new kt};break;case"SpotLight":e={position:new B,direction:new B,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function ym(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Mm=0;function Sm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Em(r,t){const e=new xm,n=ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const s=new B,a=new ce,o=new ce;function l(h,d){let u=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,p=0,f=0,v=0,x=0,M=0,w=0,R=0,b=0,z=0,E=0;h.sort(Sm);const A=d===!0?Math.PI:1;for(let q=0,U=h.length;q<U;q++){const P=h[q],D=P.color,I=P.intensity,W=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*I*A,m+=D.g*I*A,g+=D.b*I*A;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],I);E++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const J=P.shadow,F=n.get(P);F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[_]=F,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=P.shadow.matrix,M++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(D).multiplyScalar(I*A),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[f]=j;const J=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,J.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[f]=J.matrix,P.castShadow){const F=n.get(P);F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[f]=F,i.spotShadowMap[f]=Z,R++}f++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(D).multiplyScalar(I),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=j,v++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),j.distance=P.distance,j.decay=P.decay,P.castShadow){const J=P.shadow,F=n.get(P);F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=P.shadow.matrix,w++}i.point[p]=j,p++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(I*A),j.groundColor.copy(P.groundColor).multiplyScalar(I*A),i.hemi[x]=j,x++}}v>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==f||G.rectAreaLength!==v||G.hemiLength!==x||G.numDirectionalShadows!==M||G.numPointShadows!==w||G.numSpotShadows!==R||G.numSpotMaps!==b||G.numLightProbes!==E)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=R+b-z,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=E,G.directionalLength=_,G.pointLength=p,G.spotLength=f,G.rectAreaLength=v,G.hemiLength=x,G.numDirectionalShadows=M,G.numPointShadows=w,G.numSpotShadows=R,G.numSpotMaps=b,G.numLightProbes=E,i.version=Mm++)}function c(h,d){let u=0,m=0,g=0,_=0,p=0;const f=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Ha(r,t){const e=new Em(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wm(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Ha(r,t),e.set(s,[l])):a>=o.length?(l=new Ha(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Tm extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
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
}`;function Cm(r,t,e){let n=new lo;const i=new Ut,s=new Ut,a=new ge,o=new Tm({depthPacking:ch}),l=new bm,c={},h=e.maxTextureSize,d={[Fn]:Ce,[Ce]:Fn,[vn]:vn},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let f=this.type;this.render=function(w,R,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const z=r.getRenderTarget(),E=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=f!==_n&&this.type===_n,U=f===_n&&this.type!==_n;for(let P=0,D=w.length;P<D;P++){const I=w[P],W=I.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Z=W.getFrameExtents();if(i.multiply(Z),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,W.mapSize.y=s.y)),W.map===null||q===!0||U===!0){const J=this.type!==_n?{minFilter:Ae,magFilter:Ae}:{};W.map!==null&&W.map.dispose(),W.map=new Qn(i.x,i.y,J),W.map.texture.name=I.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const j=W.getViewportCount();for(let J=0;J<j;J++){const F=W.getViewport(J);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),G.viewport(a),W.updateMatrices(I,J),n=W.getFrustum(),M(R,b,W.camera,I,this.type)}W.isPointLightShadow!==!0&&this.type===_n&&v(W,b),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(z,E,A)};function v(w,R){const b=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,b,u,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,b,m,_,null)}function x(w,R,b,z){let E=null;const A=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)E=A;else if(E=b.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=E.uuid,q=R.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let P=U[q];P===void 0&&(P=E.clone(),U[q]=P),E=P}if(E.visible=R.visible,E.wireframe=R.wireframe,z===_n?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=r.properties.get(E);G.light=b}return E}function M(w,R,b,z,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===_n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const q=t.update(w),U=w.material;if(Array.isArray(U)){const P=q.groups;for(let D=0,I=P.length;D<I;D++){const W=P[D],Z=U[W.materialIndex];if(Z&&Z.visible){const j=x(w,Z,z,E);r.renderBufferDirect(b,null,q,j,w,W)}}}else if(U.visible){const P=x(w,U,z,E);r.renderBufferDirect(b,null,q,P,w,null)}}const G=w.children;for(let q=0,U=G.length;q<U;q++)M(G[q],R,b,z,E)}}function Pm(r,t,e){const n=e.isWebGL2;function i(){let N=!1;const at=new ge;let et=null;const $=new ge(0,0,0,0);return{setMask:function(st){et!==st&&!N&&(r.colorMask(st,st,st,st),et=st)},setLocked:function(st){N=st},setClear:function(st,Mt,Xt,se,Be){Be===!0&&(st*=se,Mt*=se,Xt*=se),at.set(st,Mt,Xt,se),$.equals(at)===!1&&(r.clearColor(st,Mt,Xt,se),$.copy(at))},reset:function(){N=!1,et=null,$.set(-1,0,0,0)}}}function s(){let N=!1,at=null,et=null,$=null;return{setTest:function(st){st?Dt(r.DEPTH_TEST):$t(r.DEPTH_TEST)},setMask:function(st){at!==st&&!N&&(r.depthMask(st),at=st)},setFunc:function(st){if(et!==st){switch(st){case Bc:r.depthFunc(r.NEVER);break;case zc:r.depthFunc(r.ALWAYS);break;case Hc:r.depthFunc(r.LESS);break;case Fs:r.depthFunc(r.LEQUAL);break;case Gc:r.depthFunc(r.EQUAL);break;case Vc:r.depthFunc(r.GEQUAL);break;case kc:r.depthFunc(r.GREATER);break;case Wc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=st}},setLocked:function(st){N=st},setClear:function(st){$!==st&&(r.clearDepth(st),$=st)},reset:function(){N=!1,at=null,et=null,$=null}}}function a(){let N=!1,at=null,et=null,$=null,st=null,Mt=null,Xt=null,se=null,Be=null;return{setTest:function(Zt){N||(Zt?Dt(r.STENCIL_TEST):$t(r.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!N&&(r.stencilMask(Zt),at=Zt)},setFunc:function(Zt,Ee,$e){(et!==Zt||$!==Ee||st!==$e)&&(r.stencilFunc(Zt,Ee,$e),et=Zt,$=Ee,st=$e)},setOp:function(Zt,Ee,$e){(Mt!==Zt||Xt!==Ee||se!==$e)&&(r.stencilOp(Zt,Ee,$e),Mt=Zt,Xt=Ee,se=$e)},setLocked:function(Zt){N=Zt},setClear:function(Zt){Be!==Zt&&(r.clearStencil(Zt),Be=Zt)},reset:function(){N=!1,at=null,et=null,$=null,st=null,Mt=null,Xt=null,se=null,Be=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,_=[],p=null,f=!1,v=null,x=null,M=null,w=null,R=null,b=null,z=null,E=new kt(0,0,0),A=0,G=!1,q=null,U=null,P=null,D=null,I=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=j>=2);let F=null,O={};const lt=r.getParameter(r.SCISSOR_BOX),ht=r.getParameter(r.VIEWPORT),dt=new ge().fromArray(lt),wt=new ge().fromArray(ht);function Bt(N,at,et,$){const st=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(N,Mt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<et;Xt++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(at,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(at+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return Mt}const At={};At[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),At[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),At[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(r.DEPTH_TEST),l.setFunc(Fs),Ft(!1),It(Mo),Dt(r.CULL_FACE),Ct(Dn);function Dt(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function $t(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function zt(N,at){return m[N]!==at?(r.bindFramebuffer(N,at),m[N]=at,n&&(N===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=at),N===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=at)),!0):!1}function V(N,at){let et=_,$=!1;if(N)if(et=g.get(at),et===void 0&&(et=[],g.set(at,et)),N.isWebGLMultipleRenderTargets){const st=N.texture;if(et.length!==st.length||et[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Xt=st.length;Mt<Xt;Mt++)et[Mt]=r.COLOR_ATTACHMENT0+Mt;et.length=st.length,$=!0}}else et[0]!==r.COLOR_ATTACHMENT0&&(et[0]=r.COLOR_ATTACHMENT0,$=!0);else et[0]!==r.BACK&&(et[0]=r.BACK,$=!0);$&&(e.isWebGL2?r.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function xe(N){return p!==N?(r.useProgram(N),p=N,!0):!1}const St={[Yn]:r.FUNC_ADD,[Ec]:r.FUNC_SUBTRACT,[wc]:r.FUNC_REVERSE_SUBTRACT};if(n)St[To]=r.MIN,St[bo]=r.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(St[To]=N.MIN_EXT,St[bo]=N.MAX_EXT)}const Rt={[Tc]:r.ZERO,[bc]:r.ONE,[Ac]:r.SRC_COLOR,[qr]:r.SRC_ALPHA,[Ic]:r.SRC_ALPHA_SATURATE,[Lc]:r.DST_COLOR,[Cc]:r.DST_ALPHA,[Rc]:r.ONE_MINUS_SRC_COLOR,[Yr]:r.ONE_MINUS_SRC_ALPHA,[Dc]:r.ONE_MINUS_DST_COLOR,[Pc]:r.ONE_MINUS_DST_ALPHA,[Nc]:r.CONSTANT_COLOR,[Uc]:r.ONE_MINUS_CONSTANT_COLOR,[Fc]:r.CONSTANT_ALPHA,[Oc]:r.ONE_MINUS_CONSTANT_ALPHA};function Ct(N,at,et,$,st,Mt,Xt,se,Be,Zt){if(N===Dn){f===!0&&($t(r.BLEND),f=!1);return}if(f===!1&&(Dt(r.BLEND),f=!0),N!==Sc){if(N!==v||Zt!==G){if((x!==Yn||R!==Yn)&&(r.blendEquation(r.FUNC_ADD),x=Yn,R=Yn),Zt)switch(N){case Ri:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case So:r.blendFunc(r.ONE,r.ONE);break;case Eo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ri:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case So:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Eo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,w=null,b=null,z=null,E.set(0,0,0),A=0,v=N,G=Zt}return}st=st||at,Mt=Mt||et,Xt=Xt||$,(at!==x||st!==R)&&(r.blendEquationSeparate(St[at],St[st]),x=at,R=st),(et!==M||$!==w||Mt!==b||Xt!==z)&&(r.blendFuncSeparate(Rt[et],Rt[$],Rt[Mt],Rt[Xt]),M=et,w=$,b=Mt,z=Xt),(se.equals(E)===!1||Be!==A)&&(r.blendColor(se.r,se.g,se.b,Be),E.copy(se),A=Be),v=N,G=!1}function te(N,at){N.side===vn?$t(r.CULL_FACE):Dt(r.CULL_FACE);let et=N.side===Ce;at&&(et=!et),Ft(et),N.blending===Ri&&N.transparent===!1?Ct(Dn):Ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const $=N.stencilWrite;c.setTest($),$&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):$t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){q!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),q=N)}function It(N){N!==yc?(Dt(r.CULL_FACE),N!==U&&(N===Mo?r.cullFace(r.BACK):N===Mc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$t(r.CULL_FACE),U=N}function Yt(N){N!==P&&(Z&&r.lineWidth(N),P=N)}function ie(N,at,et){N?(Dt(r.POLYGON_OFFSET_FILL),(D!==at||I!==et)&&(r.polygonOffset(at,et),D=at,I=et)):$t(r.POLYGON_OFFSET_FILL)}function fe(N){N?Dt(r.SCISSOR_TEST):$t(r.SCISSOR_TEST)}function C(N){N===void 0&&(N=r.TEXTURE0+W-1),F!==N&&(r.activeTexture(N),F=N)}function S(N,at,et){et===void 0&&(F===null?et=r.TEXTURE0+W-1:et=F);let $=O[et];$===void 0&&($={type:void 0,texture:void 0},O[et]=$),($.type!==N||$.texture!==at)&&(F!==et&&(r.activeTexture(et),F=et),r.bindTexture(N,at||At[N]),$.type=N,$.texture=at)}function k(){const N=O[F];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(N){dt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function Et(N){wt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),wt.copy(N))}function _t(N,at){let et=d.get(at);et===void 0&&(et=new WeakMap,d.set(at,et));let $=et.get(N);$===void 0&&($=r.getUniformBlockIndex(at,N.name),et.set(N,$))}function pt(N,at){const $=d.get(at).get(N);h.get(at)!==$&&(r.uniformBlockBinding(at,$,N.__bindingPointIndex),h.set(at,$))}function Wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},F=null,O={},m={},g=new WeakMap,_=[],p=null,f=!1,v=null,x=null,M=null,w=null,R=null,b=null,z=null,E=new kt(0,0,0),A=0,G=!1,q=null,U=null,P=null,D=null,I=null,dt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Dt,disable:$t,bindFramebuffer:zt,drawBuffers:V,useProgram:xe,setBlending:Ct,setMaterial:te,setFlipSided:Ft,setCullFace:It,setLineWidth:Yt,setPolygonOffset:ie,setScissorTest:fe,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:nt,compressedTexImage3D:tt,texImage2D:Q,texImage3D:Tt,updateUBOMapping:_t,uniformBlockBinding:pt,texStorage2D:L,texStorage3D:rt,texSubImage2D:it,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:xt,viewport:Et,reset:Wt}}function Lm(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return f?new OffscreenCanvas(C,S):Vs("canvas")}function x(C,S,k,nt){let tt=1;if((C.width>nt||C.height>nt)&&(tt=nt/Math.max(C.width,C.height)),tt<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const it=S?Gs:Math.floor,vt=it(tt*C.width),ot=it(tt*C.height);_===void 0&&(_=v(vt,ot));const ut=k?v(vt,ot):_;return ut.width=vt,ut.height=ot,ut.getContext("2d").drawImage(C,0,0,vt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+vt+"x"+ot+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return Qr(C.width)&&Qr(C.height)}function w(C){return o?!1:C.wrapS!==je||C.wrapT!==je||C.minFilter!==Ae&&C.minFilter!==He}function R(C,S){return C.generateMipmaps&&S&&C.minFilter!==Ae&&C.minFilter!==He}function b(C){r.generateMipmap(C)}function z(C,S,k,nt,tt=!1){if(o===!1)return S;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=S;if(S===r.RED&&(k===r.FLOAT&&(it=r.R32F),k===r.HALF_FLOAT&&(it=r.R16F),k===r.UNSIGNED_BYTE&&(it=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(it=r.R8UI),k===r.UNSIGNED_SHORT&&(it=r.R16UI),k===r.UNSIGNED_INT&&(it=r.R32UI),k===r.BYTE&&(it=r.R8I),k===r.SHORT&&(it=r.R16I),k===r.INT&&(it=r.R32I)),S===r.RG&&(k===r.FLOAT&&(it=r.RG32F),k===r.HALF_FLOAT&&(it=r.RG16F),k===r.UNSIGNED_BYTE&&(it=r.RG8)),S===r.RGBA){const vt=tt?Os:Kt.getTransfer(nt);k===r.FLOAT&&(it=r.RGBA32F),k===r.HALF_FLOAT&&(it=r.RGBA16F),k===r.UNSIGNED_BYTE&&(it=vt===Qt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function E(C,S,k){return R(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==Ae&&C.minFilter!==He?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){return C===Ae||C===Ao||C===lr?r.NEAREST:r.LINEAR}function G(C){const S=C.target;S.removeEventListener("dispose",G),U(S),S.isVideoTexture&&g.delete(S)}function q(C){const S=C.target;S.removeEventListener("dispose",q),D(S)}function U(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,nt=p.get(k);if(nt){const tt=nt[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(C),Object.keys(nt).length===0&&p.delete(k)}n.remove(C)}function P(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const k=C.source,nt=p.get(k);delete nt[S.__cacheKey],a.memory.textures--}function D(C){const S=C.texture,k=n.get(C),nt=n.get(S);if(nt.__webglTexture!==void 0&&(r.deleteTexture(nt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(k.__webglFramebuffer[tt]))for(let it=0;it<k.__webglFramebuffer[tt].length;it++)r.deleteFramebuffer(k.__webglFramebuffer[tt][it]);else r.deleteFramebuffer(k.__webglFramebuffer[tt]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[tt])}else{if(Array.isArray(k.__webglFramebuffer))for(let tt=0;tt<k.__webglFramebuffer.length;tt++)r.deleteFramebuffer(k.__webglFramebuffer[tt]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let tt=0;tt<k.__webglColorRenderbuffer.length;tt++)k.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[tt]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let tt=0,it=S.length;tt<it;tt++){const vt=n.get(S[tt]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(S[tt])}n.remove(S),n.remove(C)}let I=0;function W(){I=0}function Z(){const C=I;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),I+=1,C}function j(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function J(C,S){const k=n.get(C);if(C.isVideoTexture&&ie(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(k,C,S);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function F(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Dt(k,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function O(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Dt(k,C,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function lt(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){$t(k,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const ht={[Zr]:r.REPEAT,[je]:r.CLAMP_TO_EDGE,[$r]:r.MIRRORED_REPEAT},dt={[Ae]:r.NEAREST,[Ao]:r.NEAREST_MIPMAP_NEAREST,[lr]:r.NEAREST_MIPMAP_LINEAR,[He]:r.LINEAR,[Jc]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},wt={[uh]:r.NEVER,[vh]:r.ALWAYS,[dh]:r.LESS,[ph]:r.LEQUAL,[fh]:r.EQUAL,[_h]:r.GEQUAL,[mh]:r.GREATER,[gh]:r.NOTEQUAL};function Bt(C,S,k){if(k?(r.texParameteri(C,r.TEXTURE_WRAP_S,ht[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ht[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ht[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,dt[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,dt[S.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==je||S.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Ae&&S.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ae||S.minFilter!==lr&&S.minFilter!==Ji||S.type===Pn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Qi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(C,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function At(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",G));const nt=S.source;let tt=p.get(nt);tt===void 0&&(tt={},p.set(nt,tt));const it=j(S);if(it!==C.__cacheKey){tt[it]===void 0&&(tt[it]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),tt[it].usedTimes++;const vt=tt[C.__cacheKey];vt!==void 0&&(tt[C.__cacheKey].usedTimes--,vt.usedTimes===0&&P(S)),C.__cacheKey=it,C.__webglTexture=tt[it].texture}return k}function Dt(C,S,k){let nt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=r.TEXTURE_3D);const tt=At(C,S),it=S.source;e.bindTexture(nt,C.__webglTexture,r.TEXTURE0+k);const vt=n.get(it);if(it.version!==vt.__version||tt===!0){e.activeTexture(r.TEXTURE0+k);const ot=Kt.getPrimaries(Kt.workingColorSpace),ut=S.colorSpace===Ge?null:Kt.getPrimaries(S.colorSpace),L=S.colorSpace===Ge||ot===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const rt=w(S)&&M(S.image)===!1;let Q=x(S.image,rt,!1,h);Q=fe(S,Q);const Tt=M(Q)||o,xt=s.convert(S.format,S.colorSpace);let Et=s.convert(S.type),_t=z(S.internalFormat,xt,Et,S.colorSpace,S.isVideoTexture);Bt(nt,S,Tt);let pt;const Wt=S.mipmaps,N=o&&S.isVideoTexture!==!0,at=vt.__version===void 0||tt===!0,et=E(S,Q,Tt);if(S.isDepthTexture)_t=r.DEPTH_COMPONENT,o?S.type===Pn?_t=r.DEPTH_COMPONENT32F:S.type===Cn?_t=r.DEPTH_COMPONENT24:S.type===Zn?_t=r.DEPTH24_STENCIL8:_t=r.DEPTH_COMPONENT16:S.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===$n&&_t===r.DEPTH_COMPONENT&&S.type!==io&&S.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Cn,Et=s.convert(S.type)),S.format===Di&&_t===r.DEPTH_COMPONENT&&(_t=r.DEPTH_STENCIL,S.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Zn,Et=s.convert(S.type))),at&&(N?e.texStorage2D(r.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,_t,Q.width,Q.height,0,xt,Et,null));else if(S.isDataTexture)if(Wt.length>0&&Tt){N&&at&&e.texStorage2D(r.TEXTURE_2D,et,_t,Wt[0].width,Wt[0].height);for(let $=0,st=Wt.length;$<st;$++)pt=Wt[$],N?e.texSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,xt,Et,pt.data):e.texImage2D(r.TEXTURE_2D,$,_t,pt.width,pt.height,0,xt,Et,pt.data);S.generateMipmaps=!1}else N?(at&&e.texStorage2D(r.TEXTURE_2D,et,_t,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,xt,Et,Q.data)):e.texImage2D(r.TEXTURE_2D,0,_t,Q.width,Q.height,0,xt,Et,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,_t,Wt[0].width,Wt[0].height,Q.depth);for(let $=0,st=Wt.length;$<st;$++)pt=Wt[$],S.format!==Ke?xt!==null?N?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,Q.depth,xt,pt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,_t,pt.width,pt.height,Q.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,Q.depth,xt,Et,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,_t,pt.width,pt.height,Q.depth,0,xt,Et,pt.data)}else{N&&at&&e.texStorage2D(r.TEXTURE_2D,et,_t,Wt[0].width,Wt[0].height);for(let $=0,st=Wt.length;$<st;$++)pt=Wt[$],S.format!==Ke?xt!==null?N?e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,xt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,_t,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?e.texSubImage2D(r.TEXTURE_2D,$,0,0,pt.width,pt.height,xt,Et,pt.data):e.texImage2D(r.TEXTURE_2D,$,_t,pt.width,pt.height,0,xt,Et,pt.data)}else if(S.isDataArrayTexture)N?(at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,_t,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xt,Et,Q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,xt,Et,Q.data);else if(S.isData3DTexture)N?(at&&e.texStorage3D(r.TEXTURE_3D,et,_t,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xt,Et,Q.data)):e.texImage3D(r.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,xt,Et,Q.data);else if(S.isFramebufferTexture){if(at)if(N)e.texStorage2D(r.TEXTURE_2D,et,_t,Q.width,Q.height);else{let $=Q.width,st=Q.height;for(let Mt=0;Mt<et;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,_t,$,st,0,xt,Et,null),$>>=1,st>>=1}}else if(Wt.length>0&&Tt){N&&at&&e.texStorage2D(r.TEXTURE_2D,et,_t,Wt[0].width,Wt[0].height);for(let $=0,st=Wt.length;$<st;$++)pt=Wt[$],N?e.texSubImage2D(r.TEXTURE_2D,$,0,0,xt,Et,pt):e.texImage2D(r.TEXTURE_2D,$,_t,xt,Et,pt);S.generateMipmaps=!1}else N?(at&&e.texStorage2D(r.TEXTURE_2D,et,_t,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Et,Q)):e.texImage2D(r.TEXTURE_2D,0,_t,xt,Et,Q);R(S,Tt)&&b(nt),vt.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $t(C,S,k){if(S.image.length!==6)return;const nt=At(C,S),tt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const it=n.get(tt);if(tt.version!==it.__version||nt===!0){e.activeTexture(r.TEXTURE0+k);const vt=Kt.getPrimaries(Kt.workingColorSpace),ot=S.colorSpace===Ge?null:Kt.getPrimaries(S.colorSpace),ut=S.colorSpace===Ge||vt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const L=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!L&&!rt?Q[$]=x(S.image[$],!1,!0,c):Q[$]=rt?S.image[$].image:S.image[$],Q[$]=fe(S,Q[$]);const Tt=Q[0],xt=M(Tt)||o,Et=s.convert(S.format,S.colorSpace),_t=s.convert(S.type),pt=z(S.internalFormat,Et,_t,S.colorSpace),Wt=o&&S.isVideoTexture!==!0,N=it.__version===void 0||nt===!0;let at=E(S,Tt,xt);Bt(r.TEXTURE_CUBE_MAP,S,xt);let et;if(L){Wt&&N&&e.texStorage2D(r.TEXTURE_CUBE_MAP,at,pt,Tt.width,Tt.height);for(let $=0;$<6;$++){et=Q[$].mipmaps;for(let st=0;st<et.length;st++){const Mt=et[st];S.format!==Ke?Et!==null?Wt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,pt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,0,0,Mt.width,Mt.height,Et,_t,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st,pt,Mt.width,Mt.height,0,Et,_t,Mt.data)}}}else{et=S.mipmaps,Wt&&N&&(et.length>0&&at++,e.texStorage2D(r.TEXTURE_CUBE_MAP,at,pt,Q[0].width,Q[0].height));for(let $=0;$<6;$++)if(rt){Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Et,_t,Q[$].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pt,Q[$].width,Q[$].height,0,Et,_t,Q[$].data);for(let st=0;st<et.length;st++){const Xt=et[st].image[$].image;Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,0,0,Xt.width,Xt.height,Et,_t,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,pt,Xt.width,Xt.height,0,Et,_t,Xt.data)}}else{Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,_t,Q[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pt,Et,_t,Q[$]);for(let st=0;st<et.length;st++){const Mt=et[st];Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,0,0,Et,_t,Mt.image[$]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,st+1,pt,Et,_t,Mt.image[$])}}}R(S,xt)&&b(r.TEXTURE_CUBE_MAP),it.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function zt(C,S,k,nt,tt,it){const vt=s.convert(k.format,k.colorSpace),ot=s.convert(k.type),ut=z(k.internalFormat,vt,ot,k.colorSpace);if(!n.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>it),Q=Math.max(1,S.height>>it);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,it,ut,rt,Q,S.depth,0,vt,ot,null):e.texImage2D(tt,it,ut,rt,Q,0,vt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Yt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,tt,n.get(k).__webglTexture,0,It(S)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,tt,n.get(k).__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function V(C,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let nt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||Yt(S)){const tt=S.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Pn?nt=r.DEPTH_COMPONENT32F:tt.type===Cn&&(nt=r.DEPTH_COMPONENT24));const it=It(S);Yt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,nt,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,it,nt,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,nt,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const nt=It(S);k&&Yt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,S.width,S.height):Yt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const nt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0;tt<nt.length;tt++){const it=nt[tt],vt=s.convert(it.format,it.colorSpace),ot=s.convert(it.type),ut=z(it.internalFormat,vt,ot,it.colorSpace),L=It(S);k&&Yt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,L,ut,S.width,S.height):Yt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L,ut,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ut,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const nt=n.get(S.depthTexture).__webglTexture,tt=It(S);if(S.depthTexture.format===$n)Yt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Di)Yt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function St(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]=r.createRenderbuffer(),V(S.__webglDepthbuffer[nt],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),V(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(C,S,k){const nt=n.get(C);S!==void 0&&zt(nt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&St(C)}function Ct(C){const S=C.texture,k=n.get(C),nt=n.get(S);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=S.version,a.memory.textures++);const tt=C.isWebGLCubeRenderTarget===!0,it=C.isWebGLMultipleRenderTargets===!0,vt=M(C)||o;if(tt){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(o&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let ut=0;ut<S.mipmaps.length;ut++)k.__webglFramebuffer[ot][ut]=r.createFramebuffer()}else k.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)k.__webglFramebuffer[ot]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(it)if(i.drawBuffers){const ot=C.texture;for(let ut=0,L=ot.length;ut<L;ut++){const rt=n.get(ot[ut]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Yt(C)===!1){const ot=it?S:[S];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){const L=ot[ut];k.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const rt=s.convert(L.format,L.colorSpace),Q=s.convert(L.type),Tt=z(L.internalFormat,rt,Q,L.colorSpace,C.isXRRenderTarget===!0),xt=It(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,Tt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),V(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,S,vt);for(let ot=0;ot<6;ot++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)zt(k.__webglFramebuffer[ot][ut],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else zt(k.__webglFramebuffer[ot],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);R(S,vt)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ot=C.texture;for(let ut=0,L=ot.length;ut<L;ut++){const rt=ot[ut],Q=n.get(rt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Bt(r.TEXTURE_2D,rt,vt),zt(k.__webglFramebuffer,C,rt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),R(rt,vt)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,nt.__webglTexture),Bt(ot,S,vt),o&&S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)zt(k.__webglFramebuffer[ut],C,S,r.COLOR_ATTACHMENT0,ot,ut);else zt(k.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,ot,0);R(S,vt)&&b(ot),e.unbindTexture()}C.depthBuffer&&St(C)}function te(C){const S=M(C)||o,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0,tt=k.length;nt<tt;nt++){const it=k[nt];if(R(it,S)){const vt=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ot=n.get(it).__webglTexture;e.bindTexture(vt,ot),b(vt),e.unbindTexture()}}}function Ft(C){if(o&&C.samples>0&&Yt(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,nt=C.height;let tt=r.COLOR_BUFFER_BIT;const it=[],vt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(C),ut=C.isWebGLMultipleRenderTargets===!0;if(ut)for(let L=0;L<S.length;L++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let L=0;L<S.length;L++){it.push(r.COLOR_ATTACHMENT0+L),C.depthBuffer&&it.push(vt);const rt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(rt===!1&&(C.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),ut&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[L]),rt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[vt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[vt])),ut){const Q=n.get(S[L]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,k,nt,0,0,k,nt,tt,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let L=0;L<S.length;L++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,ot.__webglColorRenderbuffer[L]);const rt=n.get(S[L]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function It(C){return Math.min(d,C.samples)}function Yt(C){const S=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ie(C){const S=a.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function fe(C,S){const k=C.colorSpace,nt=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Jr||k!==yn&&k!==Ge&&(Kt.getTransfer(k)===Qt?o===!1?t.has("EXT_sRGB")===!0&&nt===Ke?(C.format=Jr,C.minFilter=He,C.generateMipmaps=!1):S=Il.sRGBToLinear(S):(nt!==Ke||tt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=O,this.setTextureCube=lt,this.rebindTextures=Rt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=Yt}function Dm(r,t,e){const n=e.isWebGL2;function i(s,a=Ge){let o;const l=Kt.getTransfer(a);if(s===Nn)return r.UNSIGNED_BYTE;if(s===bl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Al)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Qc)return r.BYTE;if(s===th)return r.SHORT;if(s===io)return r.UNSIGNED_SHORT;if(s===Tl)return r.INT;if(s===Cn)return r.UNSIGNED_INT;if(s===Pn)return r.FLOAT;if(s===Qi)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===eh)return r.ALPHA;if(s===Ke)return r.RGBA;if(s===nh)return r.LUMINANCE;if(s===ih)return r.LUMINANCE_ALPHA;if(s===$n)return r.DEPTH_COMPONENT;if(s===Di)return r.DEPTH_STENCIL;if(s===Jr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===sh)return r.RED;if(s===Rl)return r.RED_INTEGER;if(s===rh)return r.RG;if(s===Cl)return r.RG_INTEGER;if(s===Pl)return r.RGBA_INTEGER;if(s===cr||s===hr||s===ur||s===dr)if(l===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===cr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===cr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ur)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ro||s===Co||s===Po||s===Lo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ro)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Co)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Po)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Do||s===Io)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Do)return l===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Io)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===No||s===Uo||s===Fo||s===Oo||s===Bo||s===zo||s===Ho||s===Go||s===Vo||s===ko||s===Wo||s===Xo||s===qo||s===Yo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===No)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ho)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Go)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yo)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fr||s===jo||s===Ko)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===fr)return l===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ko)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ah||s===Zo||s===$o||s===Jo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===fr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$o)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zn?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Im extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ln extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Um extends Fe{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:$n,h!==$n&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$n&&(n=Cn),n===void 0&&h===Di&&(n=Zn),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fm extends ei{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const v=[],x=[],M=new Ue;M.layers.enable(1),M.viewport=new ge;const w=new Ue;w.layers.enable(2),w.viewport=new ge;const R=[M,w],b=new Im;b.layers.enable(1),b.layers.enable(2);let z=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=v[F];return O===void 0&&(O=new Fr,v[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=v[F];return O===void 0&&(O=new Fr,v[F]=O),O.getGripSpace()},this.getHand=function(F){let O=v[F];return O===void 0&&(O=new Fr,v[F]=O),O.getHandSpace()};function A(F){const O=x.indexOf(F.inputSource);if(O===-1)return;const lt=v[O];lt!==void 0&&(lt.update(F.inputSource,F.frame,c||a),lt.dispatchEvent({type:F.type,data:F.inputSource}))}function G(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let F=0;F<v.length;F++){const O=x[F];O!==null&&(x[F]=null,v[F].disconnect(O))}z=null,E=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:m}),f=new Qn(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let O=null,lt=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=_.stencil?Di:$n,lt=_.stencil?Zn:Cn);const dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(dt),i.updateRenderState({layers:[u]}),f=new Qn(u.textureWidth,u.textureHeight,{format:Ke,type:Nn,depthTexture:new Um(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const wt=t.properties.get(f);wt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(F){for(let O=0;O<F.removed.length;O++){const lt=F.removed[O],ht=x.indexOf(lt);ht>=0&&(x[ht]=null,v[ht].disconnect(lt))}for(let O=0;O<F.added.length;O++){const lt=F.added[O];let ht=x.indexOf(lt);if(ht===-1){for(let wt=0;wt<v.length;wt++)if(wt>=x.length){x.push(lt),ht=wt;break}else if(x[wt]===null){x[wt]=lt,ht=wt;break}if(ht===-1)break}const dt=v[ht];dt&&dt.connect(lt)}}const U=new B,P=new B;function D(F,O,lt){U.setFromMatrixPosition(O.matrixWorld),P.setFromMatrixPosition(lt.matrixWorld);const ht=U.distanceTo(P),dt=O.projectionMatrix.elements,wt=lt.projectionMatrix.elements,Bt=dt[14]/(dt[10]-1),At=dt[14]/(dt[10]+1),Dt=(dt[9]+1)/dt[5],$t=(dt[9]-1)/dt[5],zt=(dt[8]-1)/dt[0],V=(wt[8]+1)/wt[0],xe=Bt*zt,St=Bt*V,Rt=ht/(-zt+V),Ct=Rt*-zt;O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ct),F.translateZ(Rt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const te=Bt+Rt,Ft=At+Rt,It=xe-Ct,Yt=St+(ht-Ct),ie=Dt*At/Ft*te,fe=$t*At/Ft*te;F.projectionMatrix.makePerspective(It,Yt,ie,fe,te,Ft),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function I(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;b.near=w.near=M.near=F.near,b.far=w.far=M.far=F.far,(z!==b.near||E!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,E=b.far);const O=F.parent,lt=b.cameras;I(b,O);for(let ht=0;ht<lt.length;ht++)I(lt[ht],O);lt.length===2?D(b,M,w):b.projectionMatrix.copy(M.projectionMatrix),W(F,b,O)};function W(F,O,lt){lt===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy(lt.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ii*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let Z=null;function j(F,O){if(h=O.getViewerPose(c||a),g=O,h!==null){const lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let ht=!1;lt.length!==b.cameras.length&&(b.cameras.length=0,ht=!0);for(let dt=0;dt<lt.length;dt++){const wt=lt[dt];let Bt=null;if(m!==null)Bt=m.getViewport(wt);else{const Dt=d.getViewSubImage(u,wt);Bt=Dt.viewport,dt===0&&(t.setRenderTargetTextures(f,Dt.colorTexture,u.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(f))}let At=R[dt];At===void 0&&(At=new Ue,At.layers.enable(dt),At.viewport=new ge,R[dt]=At),At.matrix.fromArray(wt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(wt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),dt===0&&(b.matrix.copy(At.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ht===!0&&b.cameras.push(At)}}for(let lt=0;lt<v.length;lt++){const ht=x[lt],dt=v[lt];ht!==null&&dt!==void 0&&dt.update(ht,O,c||a)}Z&&Z(F,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const J=new kl;J.setAnimationLoop(j),this.setAnimationLoop=function(F){Z=F},this.dispose=function(){}}}function Om(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Hl(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ce&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ce&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bm(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(v,w);const R=t.render.frame;s[v.id]!==R&&(u(v),s[v.id]=R)}function h(v){const x=d();v.__bindingPointIndex=x;const M=r.createBuffer(),w=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,w,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],M=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,b=M.length;R<b;R++){const z=M[R];if(m(z,R,w)===!0){const E=z.__offset,A=Array.isArray(z.value)?z.value:[z.value];let G=0;for(let q=0;q<A.length;q++){const U=A[q],P=_(U);typeof U=="number"?(z.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,E+G,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=U.elements[0],z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=U.elements[0],z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=U.elements[0]):(U.toArray(z.__data,G),G+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,z.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,x,M){const w=v.value;if(M[x]===void 0){if(typeof w=="number")M[x]=w;else{const R=Array.isArray(w)?w:[w],b=[];for(let z=0;z<R.length;z++)b.push(R[z].clone());M[x]=b}return!0}else if(typeof w=="number"){if(M[x]!==w)return M[x]=w,!0}else{const R=Array.isArray(M[x])?M[x]:[M[x]],b=Array.isArray(w)?w:[w];for(let z=0;z<R.length;z++){const E=R[z];if(E.equals(b[z])===!1)return E.copy(b[z]),!0}}return!1}function g(v){const x=v.uniforms;let M=0;const w=16;let R=0;for(let b=0,z=x.length;b<z;b++){const E=x[b],A={boundary:0,storage:0},G=Array.isArray(E.value)?E.value:[E.value];for(let q=0,U=G.length;q<U;q++){const P=G[q],D=_(P);A.boundary+=D.boundary,A.storage+=D.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,b>0){R=M%w;const q=w-R;R!==0&&q-A.boundary<0&&(M+=w-R,E.__offset=M)}M+=A.storage}return R=M%w,R>0&&(M+=w-R),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class jl{constructor(t={}){const{canvas:e=Nh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const x=this;let M=!1,w=0,R=0,b=null,z=-1,E=null;const A=new ge,G=new ge;let q=null;const U=new kt(0);let P=0,D=e.width,I=e.height,W=1,Z=null,j=null;const J=new ge(0,0,D,I),F=new ge(0,0,D,I);let O=!1;const lt=new lo;let ht=!1,dt=!1,wt=null;const Bt=new ce,At=new Ut,Dt=new B,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return b===null?W:1}let V=n;function xe(T,H){for(let X=0;X<T.length;X++){const Y=T[X],K=e.getContext(Y,H);if(K!==null)return K}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",at,!1),V===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),V=xe(H,T),V===null)throw xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let St,Rt,Ct,te,Ft,It,Yt,ie,fe,C,S,k,nt,tt,it,vt,ot,ut,L,rt,Q,Tt,xt,Et;function _t(){St=new jf(V),Rt=new Gf(V,St,t),St.init(Rt),Tt=new Dm(V,St,Rt),Ct=new Pm(V,St,Rt),te=new $f(V),Ft=new gm,It=new Lm(V,St,Ct,Ft,Rt,Tt,te),Yt=new kf(x),ie=new Yf(x),fe=new ru(V,Rt),xt=new zf(V,St,fe,Rt),C=new Kf(V,fe,te,xt),S=new ep(V,C,fe,te),L=new tp(V,Rt,It),vt=new Vf(Ft),k=new mm(x,Yt,ie,St,Rt,xt,vt),nt=new Om(x,Ft),tt=new vm,it=new wm(St,Rt),ut=new Bf(x,Yt,ie,Ct,S,u,l),ot=new Cm(x,S,Rt),Et=new Bm(V,te,Rt,Ct),rt=new Hf(V,St,te,Rt),Q=new Zf(V,St,te,Rt),te.programs=k.programs,x.capabilities=Rt,x.extensions=St,x.properties=Ft,x.renderLists=tt,x.shadowMap=ot,x.state=Ct,x.info=te}_t();const pt=new Fm(x,V);this.xr=pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=St.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=St.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(D,I,!1))},this.getSize=function(T){return T.set(D,I)},this.setSize=function(T,H,X=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,I=H,e.width=Math.floor(T*W),e.height=Math.floor(H*W),X===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(D*W,I*W).floor()},this.setDrawingBufferSize=function(T,H,X){D=T,I=H,W=X,e.width=Math.floor(T*X),e.height=Math.floor(H*X),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,H,X,Y){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,H,X,Y),Ct.viewport(A.copy(J).multiplyScalar(W).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,H,X,Y){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,X,Y),Ct.scissor(G.copy(F).multiplyScalar(W).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(T){Ct.setScissorTest(O=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(T=!0,H=!0,X=!0){let Y=0;if(T){let K=!1;if(b!==null){const ft=b.texture.format;K=ft===Pl||ft===Cl||ft===Rl}if(K){const ft=b.texture.type,yt=ft===Nn||ft===Cn||ft===io||ft===Zn||ft===bl||ft===Al,bt=ut.getClearColor(),Pt=ut.getClearAlpha(),Gt=bt.r,Nt=bt.g,Ot=bt.b;yt?(m[0]=Gt,m[1]=Nt,m[2]=Ot,m[3]=Pt,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=Gt,g[1]=Nt,g[2]=Ot,g[3]=Pt,V.clearBufferiv(V.COLOR,0,g))}else Y|=V.COLOR_BUFFER_BIT}H&&(Y|=V.DEPTH_BUFFER_BIT),X&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",at,!1),tt.dispose(),it.dispose(),Ft.dispose(),Yt.dispose(),ie.dispose(),S.dispose(),xt.dispose(),Et.dispose(),k.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Be),pt.removeEventListener("sessionend",Zt),wt&&(wt.dispose(),wt=null),Ee.stop()};function Wt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=te.autoReset,H=ot.enabled,X=ot.autoUpdate,Y=ot.needsUpdate,K=ot.type;_t(),te.autoReset=T,ot.enabled=H,ot.autoUpdate=X,ot.needsUpdate=Y,ot.type=K}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function et(T){const H=T.target;H.removeEventListener("dispose",et),$(H)}function $(T){st(T),Ft.remove(T)}function st(T){const H=Ft.get(T).programs;H!==void 0&&(H.forEach(function(X){k.releaseProgram(X)}),T.isShaderMaterial&&k.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,X,Y,K,ft){H===null&&(H=$t);const yt=K.isMesh&&K.matrixWorld.determinant()<0,bt=hc(T,H,X,Y,K);Ct.setMaterial(Y,yt);let Pt=X.index,Gt=1;if(Y.wireframe===!0){if(Pt=C.getWireframeAttribute(X),Pt===void 0)return;Gt=2}const Nt=X.drawRange,Ot=X.attributes.position;let ne=Nt.start*Gt,Pe=(Nt.start+Nt.count)*Gt;ft!==null&&(ne=Math.max(ne,ft.start*Gt),Pe=Math.min(Pe,(ft.start+ft.count)*Gt)),Pt!==null?(ne=Math.max(ne,0),Pe=Math.min(Pe,Pt.count)):Ot!=null&&(ne=Math.max(ne,0),Pe=Math.min(Pe,Ot.count));const pe=Pe-ne;if(pe<0||pe===1/0)return;xt.setup(K,Y,bt,X,Pt);let an,ee=rt;if(Pt!==null&&(an=fe.get(Pt),ee=Q,ee.setIndex(an)),K.isMesh)Y.wireframe===!0?(Ct.setLineWidth(Y.wireframeLinewidth*zt()),ee.setMode(V.LINES)):ee.setMode(V.TRIANGLES);else if(K.isLine){let qt=Y.linewidth;qt===void 0&&(qt=1),Ct.setLineWidth(qt*zt()),K.isLineSegments?ee.setMode(V.LINES):K.isLineLoop?ee.setMode(V.LINE_LOOP):ee.setMode(V.LINE_STRIP)}else K.isPoints?ee.setMode(V.POINTS):K.isSprite&&ee.setMode(V.TRIANGLES);if(K.isInstancedMesh)ee.renderInstances(ne,pe,K.count);else if(X.isInstancedBufferGeometry){const qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,sr=Math.min(X.instanceCount,qt);ee.renderInstances(ne,pe,sr)}else ee.render(ne,pe)};function Mt(T,H,X){T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=Ce,T.needsUpdate=!0,rs(T,H,X),T.side=Fn,T.needsUpdate=!0,rs(T,H,X),T.side=vn):rs(T,H,X)}this.compile=function(T,H,X=null){X===null&&(X=T),p=it.get(X),p.init(),v.push(p),X.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),T!==X&&T.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(x._useLegacyLights);const Y=new Set;return T.traverse(function(K){const ft=K.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const bt=ft[yt];Mt(bt,X,K),Y.add(bt)}else Mt(ft,X,K),Y.add(ft)}),v.pop(),p=null,Y},this.compileAsync=function(T,H,X=null){const Y=this.compile(T,H,X);return new Promise(K=>{function ft(){if(Y.forEach(function(yt){Ft.get(yt).currentProgram.isReady()&&Y.delete(yt)}),Y.size===0){K(T);return}setTimeout(ft,10)}St.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Xt=null;function se(T){Xt&&Xt(T)}function Be(){Ee.stop()}function Zt(){Ee.start()}const Ee=new kl;Ee.setAnimationLoop(se),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(T){Xt=T,pt.setAnimationLoop(T),T===null?Ee.stop():Ee.start()},pt.addEventListener("sessionstart",Be),pt.addEventListener("sessionend",Zt),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(H),H=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,b),p=it.get(T,v.length),p.init(),v.push(p),Bt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),lt.setFromProjectionMatrix(Bt),dt=this.localClippingEnabled,ht=vt.init(this.clippingPlanes,dt),_=tt.get(T,f.length),_.init(),f.push(_),$e(T,H,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,j),this.info.render.frame++,ht===!0&&vt.beginShadows();const X=p.state.shadowsArray;if(ot.render(X,T,H),ht===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(_,T),p.setupLights(x._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let K=0,ft=Y.length;K<ft;K++){const yt=Y[K];mo(_,T,yt,yt.viewport)}}else mo(_,T,H);b!==null&&(It.updateMultisampleRenderTarget(b),It.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,H),xt.resetDefaultState(),z=-1,E=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function $e(T,H,X,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||lt.intersectsSprite(T)){Y&&Dt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Bt);const yt=S.update(T),bt=T.material;bt.visible&&_.push(T,yt,bt,X,Dt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||lt.intersectsObject(T))){const yt=S.update(T),bt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Dt.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Dt.copy(yt.boundingSphere.center)),Dt.applyMatrix4(T.matrixWorld).applyMatrix4(Bt)),Array.isArray(bt)){const Pt=yt.groups;for(let Gt=0,Nt=Pt.length;Gt<Nt;Gt++){const Ot=Pt[Gt],ne=bt[Ot.materialIndex];ne&&ne.visible&&_.push(T,yt,ne,X,Dt.z,Ot)}}else bt.visible&&_.push(T,yt,bt,X,Dt.z,null)}}const ft=T.children;for(let yt=0,bt=ft.length;yt<bt;yt++)$e(ft[yt],H,X,Y)}function mo(T,H,X,Y){const K=T.opaque,ft=T.transmissive,yt=T.transparent;p.setupLightsView(X),ht===!0&&vt.setGlobalState(x.clippingPlanes,X),ft.length>0&&cc(K,ft,H,X),Y&&Ct.viewport(A.copy(Y)),K.length>0&&ss(K,H,X),ft.length>0&&ss(ft,H,X),yt.length>0&&ss(yt,H,X),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function cc(T,H,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ft=Rt.isWebGL2;wt===null&&(wt=new Qn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Qi:Nn,minFilter:Ji,samples:ft?4:0})),x.getDrawingBufferSize(At),ft?wt.setSize(At.x,At.y):wt.setSize(Gs(At.x),Gs(At.y));const yt=x.getRenderTarget();x.setRenderTarget(wt),x.getClearColor(U),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const bt=x.toneMapping;x.toneMapping=In,ss(T,X,Y),It.updateMultisampleRenderTarget(wt),It.updateRenderTargetMipmap(wt);let Pt=!1;for(let Gt=0,Nt=H.length;Gt<Nt;Gt++){const Ot=H[Gt],ne=Ot.object,Pe=Ot.geometry,pe=Ot.material,an=Ot.group;if(pe.side===vn&&ne.layers.test(Y.layers)){const ee=pe.side;pe.side=Ce,pe.needsUpdate=!0,go(ne,X,Y,Pe,pe,an),pe.side=ee,pe.needsUpdate=!0,Pt=!0}}Pt===!0&&(It.updateMultisampleRenderTarget(wt),It.updateRenderTargetMipmap(wt)),x.setRenderTarget(yt),x.setClearColor(U,P),x.toneMapping=bt}function ss(T,H,X){const Y=H.isScene===!0?H.overrideMaterial:null;for(let K=0,ft=T.length;K<ft;K++){const yt=T[K],bt=yt.object,Pt=yt.geometry,Gt=Y===null?yt.material:Y,Nt=yt.group;bt.layers.test(X.layers)&&go(bt,H,X,Pt,Gt,Nt)}}function go(T,H,X,Y,K,ft){T.onBeforeRender(x,H,X,Y,K,ft),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(x,H,X,Y,T,ft),K.transparent===!0&&K.side===vn&&K.forceSinglePass===!1?(K.side=Ce,K.needsUpdate=!0,x.renderBufferDirect(X,H,Y,K,T,ft),K.side=Fn,K.needsUpdate=!0,x.renderBufferDirect(X,H,Y,K,T,ft),K.side=vn):x.renderBufferDirect(X,H,Y,K,T,ft),T.onAfterRender(x,H,X,Y,K,ft)}function rs(T,H,X){H.isScene!==!0&&(H=$t);const Y=Ft.get(T),K=p.state.lights,ft=p.state.shadowsArray,yt=K.state.version,bt=k.getParameters(T,K.state,ft,H,X),Pt=k.getProgramCacheKey(bt);let Gt=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?ie:Yt).get(T.envMap||Y.environment),Gt===void 0&&(T.addEventListener("dispose",et),Gt=new Map,Y.programs=Gt);let Nt=Gt.get(Pt);if(Nt!==void 0){if(Y.currentProgram===Nt&&Y.lightsStateVersion===yt)return vo(T,bt),Nt}else bt.uniforms=k.getUniforms(T),T.onBuild(X,bt,x),T.onBeforeCompile(bt,x),Nt=k.acquireProgram(bt,Pt),Gt.set(Pt,Nt),Y.uniforms=bt.uniforms;const Ot=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=vt.uniform),vo(T,bt),Y.needsLights=dc(T),Y.lightsStateVersion=yt,Y.needsLights&&(Ot.ambientLightColor.value=K.state.ambient,Ot.lightProbe.value=K.state.probe,Ot.directionalLights.value=K.state.directional,Ot.directionalLightShadows.value=K.state.directionalShadow,Ot.spotLights.value=K.state.spot,Ot.spotLightShadows.value=K.state.spotShadow,Ot.rectAreaLights.value=K.state.rectArea,Ot.ltc_1.value=K.state.rectAreaLTC1,Ot.ltc_2.value=K.state.rectAreaLTC2,Ot.pointLights.value=K.state.point,Ot.pointLightShadows.value=K.state.pointShadow,Ot.hemisphereLights.value=K.state.hemi,Ot.directionalShadowMap.value=K.state.directionalShadowMap,Ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ot.spotShadowMap.value=K.state.spotShadowMap,Ot.spotLightMatrix.value=K.state.spotLightMatrix,Ot.spotLightMap.value=K.state.spotLightMap,Ot.pointShadowMap.value=K.state.pointShadowMap,Ot.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.currentProgram=Nt,Y.uniformsList=null,Nt}function _o(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Us.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function vo(T,H){const X=Ft.get(T);X.outputColorSpace=H.outputColorSpace,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function hc(T,H,X,Y,K){H.isScene!==!0&&(H=$t),It.resetTextureUnits();const ft=H.fog,yt=Y.isMeshStandardMaterial?H.environment:null,bt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yn,Pt=(Y.isMeshStandardMaterial?ie:Yt).get(Y.envMap||yt),Gt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Nt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color;let pe=In;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(pe=x.toneMapping);const an=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ee=an!==void 0?an.length:0,qt=Ft.get(Y),sr=p.state.lights;if(ht===!0&&(dt===!0||T!==E)){const Le=T===E&&Y.id===z;vt.setState(Y,T,Le)}let re=!1;Y.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==sr.state.version||qt.outputColorSpace!==bt||K.isInstancedMesh&&qt.instancing===!1||!K.isInstancedMesh&&qt.instancing===!0||K.isSkinnedMesh&&qt.skinning===!1||!K.isSkinnedMesh&&qt.skinning===!0||K.isInstancedMesh&&qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qt.instancingColor===!1&&K.instanceColor!==null||qt.envMap!==Pt||Y.fog===!0&&qt.fog!==ft||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==vt.numPlanes||qt.numIntersection!==vt.numIntersection)||qt.vertexAlphas!==Gt||qt.vertexTangents!==Nt||qt.morphTargets!==Ot||qt.morphNormals!==ne||qt.morphColors!==Pe||qt.toneMapping!==pe||Rt.isWebGL2===!0&&qt.morphTargetsCount!==ee)&&(re=!0):(re=!0,qt.__version=Y.version);let Bn=qt.currentProgram;re===!0&&(Bn=rs(Y,H,K));let xo=!1,Bi=!1,rr=!1;const we=Bn.getUniforms(),zn=qt.uniforms;if(Ct.useProgram(Bn.program)&&(xo=!0,Bi=!0,rr=!0),Y.id!==z&&(z=Y.id,Bi=!0),xo||E!==T){we.setValue(V,"projectionMatrix",T.projectionMatrix),we.setValue(V,"viewMatrix",T.matrixWorldInverse);const Le=we.map.cameraPosition;Le!==void 0&&Le.setValue(V,Dt.setFromMatrixPosition(T.matrixWorld)),Rt.logarithmicDepthBuffer&&we.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Bi=!0,rr=!0)}if(K.isSkinnedMesh){we.setOptional(V,K,"bindMatrix"),we.setOptional(V,K,"bindMatrixInverse");const Le=K.skeleton;Le&&(Rt.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),we.setValue(V,"boneTexture",Le.boneTexture,It),we.setValue(V,"boneTextureSize",Le.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const or=X.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0&&Rt.isWebGL2===!0)&&L.update(K,X,Bn),(Bi||qt.receiveShadow!==K.receiveShadow)&&(qt.receiveShadow=K.receiveShadow,we.setValue(V,"receiveShadow",K.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zn.envMap.value=Pt,zn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Bi&&(we.setValue(V,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&uc(zn,rr),ft&&Y.fog===!0&&nt.refreshFogUniforms(zn,ft),nt.refreshMaterialUniforms(zn,Y,W,I,wt),Us.upload(V,_o(qt),zn,It)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Us.upload(V,_o(qt),zn,It),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(V,"center",K.center),we.setValue(V,"modelViewMatrix",K.modelViewMatrix),we.setValue(V,"normalMatrix",K.normalMatrix),we.setValue(V,"modelMatrix",K.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Le=Y.uniformsGroups;for(let ar=0,fc=Le.length;ar<fc;ar++)if(Rt.isWebGL2){const yo=Le[ar];Et.update(yo,Bn),Et.bind(yo,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function uc(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function dc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,H,X){Ft.get(T.texture).__webglTexture=H,Ft.get(T.depthTexture).__webglTexture=X;const Y=Ft.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const X=Ft.get(T);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,X=0){b=T,w=H,R=X;let Y=!0,K=null,ft=!1,yt=!1;if(T){const Pt=Ft.get(T);Pt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):Pt.__webglFramebuffer===void 0?It.setupRenderTarget(T):Pt.__hasExternalTextures&&It.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);const Nt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[H])?K=Nt[H][X]:K=Nt[H],ft=!0):Rt.isWebGL2&&T.samples>0&&It.useMultisampledRTT(T)===!1?K=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?K=Nt[X]:K=Nt,A.copy(T.viewport),G.copy(T.scissor),q=T.scissorTest}else A.copy(J).multiplyScalar(W).floor(),G.copy(F).multiplyScalar(W).floor(),q=O;if(Ct.bindFramebuffer(V.FRAMEBUFFER,K)&&Rt.drawBuffers&&Y&&Ct.drawBuffers(T,K),Ct.viewport(A),Ct.scissor(G),Ct.setScissorTest(q),ft){const Pt=Ft.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,X)}else if(yt){const Pt=Ft.get(T.texture),Gt=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pt.__webglTexture,X||0,Gt)}z=-1},this.readRenderTargetPixels=function(T,H,X,Y,K,ft,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){Ct.bindFramebuffer(V.FRAMEBUFFER,bt);try{const Pt=T.texture,Gt=Pt.format,Nt=Pt.type;if(Gt!==Ke&&Tt.convert(Gt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===Qi&&(St.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Nt!==Nn&&Tt.convert(Nt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Pn&&(Rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&X>=0&&X<=T.height-K&&V.readPixels(H,X,Y,K,Tt.convert(Gt),Tt.convert(Nt),ft)}finally{const Pt=b!==null?Ft.get(b).__webglFramebuffer:null;Ct.bindFramebuffer(V.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(T,H,X=0){const Y=Math.pow(2,-X),K=Math.floor(H.image.width*Y),ft=Math.floor(H.image.height*Y);It.setTexture2D(H,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,T.x,T.y,K,ft),Ct.unbindTexture()},this.copyTextureToTexture=function(T,H,X,Y=0){const K=H.image.width,ft=H.image.height,yt=Tt.convert(X.format),bt=Tt.convert(X.type);It.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,T.x,T.y,K,ft,yt,bt,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,yt,H.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,T.x,T.y,yt,bt,H.image),Y===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,H,X,Y,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,bt=T.max.z-T.min.z+1,Pt=Tt.convert(Y.format),Gt=Tt.convert(Y.type);let Nt;if(Y.isData3DTexture)It.setTexture3D(Y,0),Nt=V.TEXTURE_3D;else if(Y.isDataArrayTexture)It.setTexture2DArray(Y,0),Nt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ot=V.getParameter(V.UNPACK_ROW_LENGTH),ne=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Pe=V.getParameter(V.UNPACK_SKIP_PIXELS),pe=V.getParameter(V.UNPACK_SKIP_ROWS),an=V.getParameter(V.UNPACK_SKIP_IMAGES),ee=X.isCompressedTexture?X.mipmaps[0]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ee.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ee.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,T.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,T.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Nt,K,H.x,H.y,H.z,ft,yt,bt,Pt,Gt,ee.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Nt,K,H.x,H.y,H.z,ft,yt,bt,Pt,ee.data)):V.texSubImage3D(Nt,K,H.x,H.y,H.z,ft,yt,bt,Pt,Gt,ee),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ne),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Pe),V.pixelStorei(V.UNPACK_SKIP_ROWS,pe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,an),K===0&&Y.generateMipmaps&&V.generateMipmap(Nt),Ct.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?It.setTextureCube(T,0):T.isData3DTexture?It.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?It.setTexture2DArray(T,0):It.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){w=0,R=0,b=null,Ct.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ro?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Qs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Jn:Ll}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?ve:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zm extends jl{}zm.prototype.isWebGL1Renderer=!0;class Hm extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Gm extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ga=new B,Va=new B,ka=new ce,Or=new er,Rs=new tr;class Vm extends _e{constructor(t=new Mn,e=new Gm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ga.fromBufferAttribute(e,i-1),Va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Va);t.setAttribute("lineDistance",new Un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,t.ray.intersectsSphere(Rs)===!1)return;ka.copy(i).invert(),Or.copy(t.ray).applyMatrix4(ka);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,d=new B,u=new B,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=f,M=v-1;x<M;x+=m){const w=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,R),Or.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(u);z<t.near||z>t.far||e.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let x=f,M=v-1;x<M;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Or.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(u);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class km extends ni{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wm extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kl extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Xm extends Kl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Br=new ce,Wa=new B,Xa=new B;class qm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wa),Xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xa),e.updateMatrixWorld(),Br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ym extends qm{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ii*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class qa extends Kl{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Ym}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jm{constructor(t,e,n=0,i=1/0){this.ray=new er(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return eo(t,this,n,e),n.sort(Ya),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)eo(t[i],this,n,e);return n.sort(Ya),n}}function Ya(r,t){return r.distance-t.distance}function eo(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)eo(i[s],t,e,!0)}}class ja{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);const Ka={type:"change"},zr={type:"start"},Za={type:"end"},Cs=new er,$a=new Rn,Km=Math.cos(70*Ih.DEG2RAD);class Zm extends ei{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",S),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ka),n.update(),s=i.NONE},this.update=function(){const L=new B,rt=new On().setFromUnitVectors(t.up,new B(0,1,0)),Q=rt.clone().invert(),Tt=new B,xt=new On,Et=new B,_t=2*Math.PI;return function(Wt=null){const N=n.object.position;L.copy(N).sub(n.target),L.applyQuaternion(rt),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&G(E(Wt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let at=n.minAzimuthAngle,et=n.maxAzimuthAngle;isFinite(at)&&isFinite(et)&&(at<-Math.PI?at+=_t:at>Math.PI&&(at-=_t),et<-Math.PI?et+=_t:et>Math.PI&&(et-=_t),at<=et?o.theta=Math.max(at,Math.min(et,o.theta)):o.theta=o.theta>(at+et)/2?Math.max(at,o.theta):Math.min(et,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Q),N.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let $=!1;if(n.zoomToCursor&&R){let st=null;if(n.object.isPerspectiveCamera){const Mt=L.length();st=j(Mt*c);const Xt=Mt-st;n.object.position.addScaledVector(M,Xt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Mt=new B(w.x,w.y,0);Mt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$=!0;const Xt=new B(w.x,w.y,0);Xt.unproject(n.object),n.object.position.sub(Xt).add(Mt),n.object.updateMatrixWorld(),st=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(Cs.origin.copy(n.object.position),Cs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Cs.direction))<Km?t.lookAt(n.target):($a.setFromNormalAndCoplanarPoint(n.object.up,n.target),Cs.intersectPlane($a,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$=!0);return c=1,R=!1,$||Tt.distanceToSquared(n.object.position)>a||8*(1-xt.dot(n.object.quaternion))>a||Et.distanceToSquared(n.target)>0?(n.dispatchEvent(Ka),Tt.copy(n.object.position),xt.copy(n.object.quaternion),Et.copy(n.target),$=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",tt),n.domElement.removeEventListener("pointerdown",Ft),n.domElement.removeEventListener("pointercancel",Yt),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",It),n.domElement.removeEventListener("pointerup",Yt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new ja,l=new ja;let c=1;const h=new B,d=new Ut,u=new Ut,m=new Ut,g=new Ut,_=new Ut,p=new Ut,f=new Ut,v=new Ut,x=new Ut,M=new B,w=new Ut;let R=!1;const b=[],z={};function E(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function G(L){l.theta-=L}function q(L){l.phi-=L}const U=function(){const L=new B;return function(Q,Tt){L.setFromMatrixColumn(Tt,0),L.multiplyScalar(-Q),h.add(L)}}(),P=function(){const L=new B;return function(Q,Tt){n.screenSpacePanning===!0?L.setFromMatrixColumn(Tt,1):(L.setFromMatrixColumn(Tt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Q),h.add(L)}}(),D=function(){const L=new B;return function(Q,Tt){const xt=n.domElement;if(n.object.isPerspectiveCamera){const Et=n.object.position;L.copy(Et).sub(n.target);let _t=L.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),U(2*Q*_t/xt.clientHeight,n.object.matrix),P(2*Tt*_t/xt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(Q*(n.object.right-n.object.left)/n.object.zoom/xt.clientWidth,n.object.matrix),P(Tt*(n.object.top-n.object.bottom)/n.object.zoom/xt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(L){if(!n.zoomToCursor)return;R=!0;const rt=n.domElement.getBoundingClientRect(),Q=L.clientX-rt.left,Tt=L.clientY-rt.top,xt=rt.width,Et=rt.height;w.x=Q/xt*2-1,w.y=-(Tt/Et)*2+1,M.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function J(L){d.set(L.clientX,L.clientY)}function F(L){Z(L),f.set(L.clientX,L.clientY)}function O(L){g.set(L.clientX,L.clientY)}function lt(L){u.set(L.clientX,L.clientY),m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const rt=n.domElement;G(2*Math.PI*m.x/rt.clientHeight),q(2*Math.PI*m.y/rt.clientHeight),d.copy(u),n.update()}function ht(L){v.set(L.clientX,L.clientY),x.subVectors(v,f),x.y>0?I(A()):x.y<0&&W(A()),f.copy(v),n.update()}function dt(L){_.set(L.clientX,L.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(_),n.update()}function wt(L){Z(L),L.deltaY<0?W(A()):L.deltaY>0&&I(A()),n.update()}function Bt(L){let rt=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),rt=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),rt=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),rt=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),rt=!0;break}rt&&(L.preventDefault(),n.update())}function At(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),rt=.5*(b[0].pageY+b[1].pageY);d.set(L,rt)}}function Dt(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),rt=.5*(b[0].pageY+b[1].pageY);g.set(L,rt)}}function $t(){const L=b[0].pageX-b[1].pageX,rt=b[0].pageY-b[1].pageY,Q=Math.sqrt(L*L+rt*rt);f.set(0,Q)}function zt(){n.enableZoom&&$t(),n.enablePan&&Dt()}function V(){n.enableZoom&&$t(),n.enableRotate&&At()}function xe(L){if(b.length==1)u.set(L.pageX,L.pageY);else{const Q=ut(L),Tt=.5*(L.pageX+Q.x),xt=.5*(L.pageY+Q.y);u.set(Tt,xt)}m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const rt=n.domElement;G(2*Math.PI*m.x/rt.clientHeight),q(2*Math.PI*m.y/rt.clientHeight),d.copy(u)}function St(L){if(b.length===1)_.set(L.pageX,L.pageY);else{const rt=ut(L),Q=.5*(L.pageX+rt.x),Tt=.5*(L.pageY+rt.y);_.set(Q,Tt)}p.subVectors(_,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(_)}function Rt(L){const rt=ut(L),Q=L.pageX-rt.x,Tt=L.pageY-rt.y,xt=Math.sqrt(Q*Q+Tt*Tt);v.set(0,xt),x.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),I(x.y),f.copy(v)}function Ct(L){n.enableZoom&&Rt(L),n.enablePan&&St(L)}function te(L){n.enableZoom&&Rt(L),n.enableRotate&&xe(L)}function Ft(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",It),n.domElement.addEventListener("pointerup",Yt)),it(L),L.pointerType==="touch"?k(L):ie(L))}function It(L){n.enabled!==!1&&(L.pointerType==="touch"?nt(L):fe(L))}function Yt(L){vt(L),b.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",It),n.domElement.removeEventListener("pointerup",Yt)),n.dispatchEvent(Za),s=i.NONE}function ie(L){let rt;switch(L.button){case 0:rt=n.mouseButtons.LEFT;break;case 1:rt=n.mouseButtons.MIDDLE;break;case 2:rt=n.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case si.DOLLY:if(n.enableZoom===!1)return;F(L),s=i.DOLLY;break;case si.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;O(L),s=i.PAN}else{if(n.enableRotate===!1)return;J(L),s=i.ROTATE}break;case si.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),s=i.ROTATE}else{if(n.enablePan===!1)return;O(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(zr)}function fe(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;lt(L);break;case i.DOLLY:if(n.enableZoom===!1)return;ht(L);break;case i.PAN:if(n.enablePan===!1)return;dt(L);break}}function C(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(zr),wt(L),n.dispatchEvent(Za))}function S(L){n.enabled===!1||n.enablePan===!1||Bt(L)}function k(L){switch(ot(L),b.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;At(),s=i.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;Dt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;zt(),s=i.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(zr)}function nt(L){switch(ot(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;St(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(L),n.update();break;default:s=i.NONE}}function tt(L){n.enabled!==!1&&L.preventDefault()}function it(L){b.push(L)}function vt(L){delete z[L.pointerId];for(let rt=0;rt<b.length;rt++)if(b[rt].pointerId==L.pointerId){b.splice(rt,1);return}}function ot(L){let rt=z[L.pointerId];rt===void 0&&(rt=new Ut,z[L.pointerId]=rt),rt.set(L.pageX,L.pageY)}function ut(L){const rt=L.pointerId===b[0].pointerId?b[1]:b[0];return z[rt.pointerId]}n.domElement.addEventListener("contextmenu",tt),n.domElement.addEventListener("pointerdown",Ft),n.domElement.addEventListener("pointercancel",Yt),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}class Ze{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new y);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new y);const n=this.elements,i=t.x,s=t.y,a=t.z;return e.x=n[0]*i+n[1]*s+n[2]*a,e.y=n[3]*i+n[4]*s+n[5]*a,e.z=n[6]*i+n[7]*s+n[8]*a,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ze);const n=this.elements,i=t.elements,s=e.elements,a=n[0],o=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],_=i[0],p=i[1],f=i[2],v=i[3],x=i[4],M=i[5],w=i[6],R=i[7],b=i[8];return s[0]=a*_+o*v+l*w,s[1]=a*p+o*x+l*R,s[2]=a*f+o*M+l*b,s[3]=c*_+h*v+d*w,s[4]=c*p+h*x+d*R,s[5]=c*f+h*M+d*b,s[6]=u*_+m*v+g*w,s[7]=u*p+m*x+g*R,s[8]=u*f+m*M+g*b,e}scale(t,e){e===void 0&&(e=new Ze);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new y);const n=3,i=4,s=[];let a,o;for(a=0;a<n*i;a++)s.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)s[a+i*o]=this.elements[a+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(a=c-l,s[a+i*a]===0){for(o=a+1;o<c;o++)if(s[a+i*o]!==0){h=d;do u=d-h,s[u+i*a]+=s[u+i*o];while(--h);break}}if(s[a+i*a]!==0)for(o=a+1;o<c;o++){const m=s[a+i*o]/s[a+i*a];h=d;do u=d-h,s[u+i*o]=u<=a?0:s[u+i*o]-s[u+i*a]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Ze);const e=3,n=6,i=$m;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)i[s+n*a]=this.elements[s+3*a];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const h=n;let d;do{if(s=l-o,i[s+n*s]===0){for(a=s+1;a<l;a++)if(i[s+n*a]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*a];while(--c);break}}if(i[s+n*s]!==0)for(a=s+1;a<l;a++){const u=i[s+n*a]/i[s+n*s];c=h;do d=h-c,i[d+n*a]=d<=s?0:i[d+n*a]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{a=s-1;do{const u=i[s+n*a]/i[s+n*s];c=n;do d=n-c,i[d+n*a]=i[d+n*a]-i[d+n*s]*u;while(--c)}while(a--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{a=2;do{if(d=i[e+a+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,a,d)}while(a--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,a=e+e,o=n+n,l=i+i,c=e*a,h=e*o,d=e*l,u=n*o,m=n*l,g=i*l,_=s*a,p=s*o,f=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-f,v[3*0+2]=d+p,v[3*1+0]=h+f,v[3*1+1]=1-(c+g),v[3*1+2]=m-_,v[3*2+0]=d-p,v[3*2+1]=m+_,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new Ze);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const $m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,s=t.z,a=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-a*s,e.z=a*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new y(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new y(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ze([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new y);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(a-n)*(a-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z;return(s-e)*(s-e)+(a-n)*(a-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new y);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new y),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new y),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new y),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Jm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const a=Qm;Math.abs(i.x)<.9?(a.set(1,0,0),i.cross(a,t)):(a.set(0,1,0),i.cross(a,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,a=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=a+(t.z-a)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ja),Ja.almostEquals(t,e)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Jm=new y,Qm=new y,Ja=new y;class Oe{constructor(t){t===void 0&&(t={}),this.lowerBound=new y,this.upperBound=new y,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,a=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),a.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,Qa),c=Qa),c.x>a.x&&(a.x=c.x),c.x<s.x&&(s.x=c.x),c.y>a.y&&(a.y=c.y),c.y<s.y&&(s.y=c.y),c.z>a.z&&(a.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(a,a)),i&&(s.x-=i,s.y-=i,s.z-=i,a.x+=i,a.y+=i,a.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Oe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,a=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return a&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,a,o,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),a.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=tl,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,a,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=tl,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,a,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,a=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*a,u=(this.upperBound.z-n.z)*a,m=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const Qa=new y,tl=[new y,new y,new y,new y,new y,new y,new y,new y];class el{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const a=s;s=i,i=a}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Zl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class le{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new y),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=tg,i=eg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new le);const n=this.x,i=this.y,s=this.z,a=this.w,o=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+a*o+i*c-s*l,e.y=i*h+a*l+s*o-n*c,e.z=s*h+a*c+n*l-i*o,e.w=a*h-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new le);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const a=1/(e*e+n*n+i*i+s*s);return t.x*=a,t.y*=a,t.z*=a,t.w*=a,t}conjugate(t){return t===void 0&&(t=new le),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,s=t.z,a=this.x,o=this.y,l=this.z,c=this.w,h=c*n+o*s-l*i,d=c*i+l*n-a*s,u=c*s+a*i-o*n,m=-a*n-o*i-l*s;return e.x=h*c+m*-a+d*-l-u*-o,e.y=d*c+m*-o+u*-a-h*-l,e.z=u*c+m*-l+h*-o-d*-a,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const a=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=a*o+l*c;if(h>.499&&(n=2*Math.atan2(a,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(a,c),i=-Math.PI/2,s=0),n===void 0){const d=a*a,u=o*o,m=l*l;n=Math.atan2(2*o*c-2*a*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*a*c-2*o*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),a=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*a*o+s*c*h,this.y=s*c*o-l*a*h,this.z=s*a*h+l*c*o,this.w=s*a*o-l*c*h):i==="YXZ"?(this.x=l*a*o+s*c*h,this.y=s*c*o-l*a*h,this.z=s*a*h-l*c*o,this.w=s*a*o+l*c*h):i==="ZXY"?(this.x=l*a*o-s*c*h,this.y=s*c*o+l*a*h,this.z=s*a*h+l*c*o,this.w=s*a*o-l*c*h):i==="ZYX"?(this.x=l*a*o-s*c*h,this.y=s*c*o+l*a*h,this.z=s*a*h-l*c*o,this.w=s*a*o+l*c*h):i==="YZX"?(this.x=l*a*o+s*c*h,this.y=s*c*o+l*a*h,this.z=s*a*h-l*c*o,this.w=s*a*o-l*c*h):i==="XZY"&&(this.x=l*a*o-s*c*h,this.y=s*c*o-l*a*h,this.z=s*a*h+l*c*o,this.w=s*a*o+l*c*h),this}clone(){return new le(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new le);const i=this.x,s=this.y,a=this.z,o=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,g,_,p;return m=i*l+s*c+a*h+o*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),_=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(_=1-e,p=e),n.x=_*i+p*l,n.y=_*s+p*c,n.z=_*a+p*h,n.w=_*o+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new le);const s=t.x*n.x,a=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+a*h-o*c),i.y+=u*(a*d+o*l-s*h),i.z+=u*(o*d+s*c-a*l),i.w+=u*(-s*l-a*c-o*h),i}}const tg=new y,eg=new y,ng={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=ng;class jt{constructor(t){t===void 0&&(t={}),this.position=new y,this.quaternion=new le,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return jt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return jt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),n.vsub(t,i),e.conjugate(nl),nl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new y),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new y),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const nl=new le;class $i extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:a}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==t.length;s++){const a=t[s],o=a.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[a[l]].vsub(e[a[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new y;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],a=this.vertices[n[2]];$i.computeNormal(i,s,a,e)}static computeNormal(t,e,n,i){const s=new y,a=new y;e.vsub(t,a),n.vsub(e,s),s.cross(a,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,a,o,l,c){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(a);_>u&&(u=_,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],p=new y;p.copy(_),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(a,t,e,m,o,l,c)}findSeparatingAxis(t,e,n,i,s,a,o,l){const c=new y,h=new y,d=new y,u=new y,m=new y,g=new y;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let f=0;f!==p.uniqueAxes.length;f++){n.vmult(p.uniqueAxes[f],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,a.copy(c))}else{const f=o?o.length:p.faces.length;for(let v=0;v<f;v++){const x=o?o[v]:v;c.copy(p.faceNormals[x]),n.vmult(c,c);const M=p.testSepAxis(c,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,a.copy(c))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){s.vmult(t.uniqueAxes[f],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,a.copy(h))}else{const f=l?l.length:t.faces.length;for(let v=0;v<f;v++){const x=l?l[v]:v;h.copy(t.faceNormals[x]),s.vmult(h,h);const M=p.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,a.copy(h))}}for(let f=0;f!==p.uniqueEdges.length;f++){n.vmult(p.uniqueEdges[f],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,a.copy(g))}}return i.vsub(e,d),d.dot(a)>0&&a.negate(a),!0}testSepAxis(t,e,n,i,s,a){const o=this;$i.project(o,t,n,i,Hr),$i.project(e,t,s,a,Gr);const l=Hr[0],c=Hr[1],h=Gr[0],d=Gr[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,a=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*a*2*a+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,a,o){const l=new y,c=new y,h=new y,d=new y,u=new y,m=new y,g=new y,_=new y,p=this,f=[],v=i,x=f;let M=-1,w=Number.MAX_VALUE;for(let A=0;A<p.faces.length;A++){l.copy(p.faceNormals[A]),n.vmult(l,l);const G=l.dot(t);G<w&&(w=G,M=A)}if(M<0)return;const R=p.faces[M];R.connectedFaces=[];for(let A=0;A<p.faces.length;A++)for(let G=0;G<p.faces[A].length;G++)R.indexOf(p.faces[A][G])!==-1&&A!==M&&R.connectedFaces.indexOf(A)===-1&&R.connectedFaces.push(A);const b=R.length;for(let A=0;A<b;A++){const G=p.vertices[R[A]],q=p.vertices[R[(A+1)%b]];G.vsub(q,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(G),n.vmult(m,m),e.vadd(m,m);const U=R.connectedFaces[A];g.copy(this.faceNormals[U]);const P=this.getPlaneConstantOfFace(U);_.copy(g),n.vmult(_,_);const D=P-_.dot(e);for(this.clipFaceAgainstPlane(v,x,_,D);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[M]);const z=this.getPlaneConstantOfFace(M);_.copy(g),n.vmult(_,_);const E=z-_.dot(e);for(let A=0;A<v.length;A++){let G=_.dot(v[A])+E;if(G<=s&&(console.log(`clamped: depth=${G} to minDist=${s}`),G=s),G<=a){const q=v[A];if(G<=1e-6){const U={point:q,normal:_,depth:G};o.push(U)}}}}clipFaceAgainstPlane(t,e,n,i){let s,a;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<o;h++){if(c=t[h],a=n.dot(c)+i,s<0)if(a<0){const d=new y;d.copy(c),e.push(d)}else{const d=new y;l.lerp(c,s/(s-a),d),e.push(d)}else if(a<0){const d=new y;l.lerp(c,s/(s-a),d),e.push(d),e.push(c)}l=c,s=a}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let a,o,l,c,h,d,u=new y;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(a===void 0||g.x<a)&&(a=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(a,o,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new y);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const a=i[s];e.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];e.vmult(a,a)}}if(t)for(let s=0;s<n;s++){const a=i[s];a.vadd(t,a)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,a=new y;this.getAveragePointLocal(a);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=e[n[o][0]],h=new y;t.vsub(c,h);const d=l.dot(h),u=new y;a.vsub(c,u);const m=l.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){const a=t.vertices.length,o=ig;let l=0,c=0;const h=sg,d=t.vertices;h.setZero(),jt.vectorToLocalFrame(n,i,e,o),jt.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let m=1;m<a;m++){const g=d[m].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const Hr=[],Gr=[];new y;const ig=new y,sg=new y;class es extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new $i({vertices:s,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new y),es.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let a=0;a<s.length;a++)An.set(s[a][0],s[a][1],s[a][2]),e.vmult(An,An),t.vadd(An,An),n(An.x,An.y,An.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Je[0].set(s.x,s.y,s.z),Je[1].set(-s.x,s.y,s.z),Je[2].set(-s.x,-s.y,s.z),Je[3].set(-s.x,-s.y,-s.z),Je[4].set(s.x,-s.y,-s.z),Je[5].set(s.x,s.y,-s.z),Je[6].set(-s.x,s.y,-s.z),Je[7].set(s.x,-s.y,s.z);const a=Je[0];e.vmult(a,a),t.vadd(a,a),i.copy(a),n.copy(a);for(let o=1;o<8;o++){const l=Je[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const An=new y,Je=[new y,new y,new y,new y,new y,new y,new y,new y],uo={DYNAMIC:1,STATIC:2,KINEMATIC:4},fo={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends Zl{constructor(t){t===void 0&&(t={}),super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new y,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new y,this.force=new y;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new le,this.initQuaternion=new le,this.previousQuaternion=new le,this.interpolatedQuaternion=new le,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new y,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Ze,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Ze,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new y(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new y(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Oe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new y),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new y),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new y,s=new le;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const a=t[s];a.updateBoundingSphereRadius();const o=e[s].length(),l=a.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=rg,a=og,o=this.quaternion,l=this.aabb,c=ag;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],a),d.calculateWorldAABB(s,a,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=lg,i=cg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new y),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=hg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new y),this.type!==mt.DYNAMIC)return;const n=ug,i=dg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===mt.DYNAMIC&&(this.sleepState===mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new y),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=e,i=fg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=pg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new y),this.type!==mt.DYNAMIC)return;const n=mg,i=gg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=_g;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),es.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new y;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,a=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,_=this.angularFactor,p=l.x*_.x,f=l.y*_.y,v=l.z*_.z;s.x+=t*(g[0]*p+g[1]*f+g[2]*v),s.y+=t*(g[3]*p+g[4]*f+g[5]*v),s.z+=t*(g[6]*p+g[7]*f+g[8]*v),a.x+=i.x*t,a.y+=i.y*t,a.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.idCounter=0;mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=uo.DYNAMIC;mt.STATIC=uo.STATIC;mt.KINEMATIC=uo.KINEMATIC;mt.AWAKE=fo.AWAKE;mt.SLEEPY=fo.SLEEPY;mt.SLEEPING=fo.SLEEPING;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const rg=new y,og=new le,ag=new Oe,lg=new Ze,cg=new Ze;new Ze;const hg=new y,ug=new y,dg=new y,fg=new y,pg=new y,mg=new y,gg=new y,_g=new y;class vg{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&mt.STATIC||t.sleepState===mt.SLEEPING)&&(e.type&mt.STATIC||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=xg;e.position.vsub(t.position,s);const a=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<a&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=yg,i=Mg,s=Sg,a=t.length;for(let o=0;o!==a;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==a;o++){const l=i[o].id,c=s[o].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new y;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const xg=new y;new y;new le;new y;const yg={keys:[]},Mg=[],Sg=[];new y;new y;new y;class Eg extends vg{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let a,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)a=i[l],o=i[c],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class ks{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,a,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=a,this.distance=o}}let $l,Jl,Ql,tc,ec,nc,ic;const po={CLOSEST:1,ANY:2,ALL:4};$l=gt.types.SPHERE;Jl=gt.types.PLANE;Ql=gt.types.BOX;tc=gt.types.CYLINDER;ec=gt.types.CONVEXPOLYHEDRON;nc=gt.types.HEIGHTFIELD;ic=gt.types.TRIMESH;class ae{get[$l](){return this._intersectSphere}get[Jl](){return this._intersectPlane}get[Ql](){return this._intersectBox}get[tc](){return this._intersectConvex}get[ec](){return this._intersectConvex}get[nc](){return this._intersectHeightfield}get[ic](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new y),e===void 0&&(e=new y),this.from=t.clone(),this.to=e.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ae.ANY,this.result=new ks,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ae.ANY,this.result=e.result||new ks,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(il),Vr.length=0,t.broadphase.aabbQuery(t,il,Vr),this.intersectBodies(Vr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=wg,s=Tg;for(let a=0,o=t.shapes.length;a<o;a++){const l=t.shapes[a];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[a],s),t.quaternion.vmult(t.shapeOffsets[a],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(zg(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const a=this.from,o=this.to,l=this.direction,c=new y(0,0,1);e.vmult(c,c);const h=new y;a.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||a.distanceTo(o)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new y,_=new y,p=new y;a.vsub(n,g);const f=-c.dot(g)/m;l.scale(f,_),a.vadd(_,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const a=bg;a.from.copy(this.from),a.to.copy(this.to),jt.pointToLocalFrame(n,e,a.from,a.from),jt.pointToLocalFrame(n,e,a.to,a.to),a.updateDirection();const o=Ag;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Oe;a.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(a)){if(t.getConvexTrianglePillar(m,g,!1),jt.pointToWorldFrame(n,e,t.pillarOffset,Ps),this._intersectConvex(t.pillarConvex,e,Ps,i,s,sl),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),jt.pointToWorldFrame(n,e,t.pillarOffset,Ps),this._intersectConvex(t.pillarConvex,e,Ps,i,s,sl)}}}_intersectSphere(t,e,n,i,s){const a=this.from,o=this.to,l=t.radius,c=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,h=2*((o.x-a.x)*(a.x-n.x)+(o.y-a.y)*(a.y-n.y)+(o.z-a.z)*(a.z-n.z)),d=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-l**2,u=h**2-4*c*d,m=Rg,g=Cg;if(!(u<0))if(u===0)a.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(a.lerp(o,_,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(a.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,a){const o=Pg,l=rl,c=a&&a.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),f=c?c.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<f;x++){const M=c?c[x]:x,w=h[M],R=u[M],b=e,z=n;l.copy(d[w[0]]),b.vmult(l,l),l.vadd(z,l),l.vsub(g,l),b.vmult(R,o);const E=m.dot(o);if(Math.abs(E)<this.precision)continue;const A=o.dot(l)/E;if(!(A<0)){m.scale(A,Re),Re.vadd(g,Re),qe.copy(d[w[0]]),b.vmult(qe,qe),z.vadd(qe,qe);for(let G=1;!v.shouldStop&&G<w.length-1;G++){Qe.copy(d[w[G]]),tn.copy(d[w[G+1]]),b.vmult(Qe,Qe),b.vmult(tn,tn),z.vadd(Qe,Qe),z.vadd(tn,tn);const q=Re.distanceTo(g);!(ae.pointInTriangle(Re,qe,Qe,tn)||ae.pointInTriangle(Re,Qe,qe,tn))||q>p||this.reportIntersection(o,Re,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,a){const o=Lg,l=Og,c=Bg,h=rl,d=Dg,u=Ig,m=Ng,g=Fg,_=Ug,p=t.indices;t.vertices;const f=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),jt.vectorToLocalFrame(n,e,x,d),jt.pointToLocalFrame(n,e,f,u),jt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const M=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let w=0,R=l.length;!this.result.shouldStop&&w!==R;w++){const b=l[w];t.getNormal(b,o),t.getVertex(p[b*3],qe),qe.vsub(u,h);const z=d.dot(o),E=o.dot(h)/z;if(E<0)continue;d.scale(E,Re),Re.vadd(u,Re),t.getVertex(p[b*3+1],Qe),t.getVertex(p[b*3+2],tn);const A=Re.distanceSquared(u);!(ae.pointInTriangle(Re,Qe,qe,tn)||ae.pointInTriangle(Re,qe,Qe,tn))||A>M||(jt.vectorToWorldFrame(e,o,_),jt.pointToWorldFrame(n,e,Re,g),this.reportIntersection(_,g,s,i,b))}l.length=0}reportIntersection(t,e,n,i,s){const a=this.from,o=this.to,l=a.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ae.ALL:this.hasHit=!0,c.set(a,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ae.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(a,o,t,e,n,i,l));break;case ae.ANY:this.hasHit=!0,c.hasHit=!0,c.set(a,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Kn),n.vsub(e,ki),t.vsub(e,kr);const s=Kn.dot(Kn),a=Kn.dot(ki),o=Kn.dot(kr),l=ki.dot(ki),c=ki.dot(kr);let h,d;return(h=l*o-a*c)>=0&&(d=s*c-a*o)>=0&&h+d<s*l-a*a}}ae.CLOSEST=po.CLOSEST;ae.ANY=po.ANY;ae.ALL=po.ALL;const il=new Oe,Vr=[],ki=new y,kr=new y,wg=new y,Tg=new le,Re=new y,qe=new y,Qe=new y,tn=new y;new y;new ks;const sl={faceList:[0]},Ps=new y,bg=new ae,Ag=[],Rg=new y,Cg=new y,Pg=new y;new y;new y;const rl=new y,Lg=new y,Dg=new y,Ig=new y,Ng=new y,Ug=new y,Fg=new y;new Oe;const Og=[],Bg=new jt,Kn=new y,Ls=new y;function zg(r,t,e){e.vsub(r,Kn);const n=Kn.dot(t);return t.scale(n,Ls),Ls.vadd(r,Ls),e.distanceTo(Ls)}class Hg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ol{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ns{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ns.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ol,this.jacobianElementB=new ol,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,a=n;this.a=4/(a*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(a*a*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*t-i*e-a*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,a=i.position;return t.spatial.dot(s)+e.spatial.dot(a)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,a=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(a,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,a=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(a,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,a=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,al),o.scale(h,ll),n.invInertiaWorldSolve.vmult(a,cl),i.invInertiaWorldSolve.vmult(l,hl),t.multiplyVectors(al,cl)+e.multiplyVectors(ll,hl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,a=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+a;return o.vmult(t.rotational,Ds),c+=Ds.dot(t.rotational),l.vmult(e.rotational,Ds),c+=Ds.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,a=Gg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,a),i.wlambda.addScaledVector(t,a,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,a),s.wlambda.addScaledVector(t,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ns.idCounter=0;const al=new y,ll=new y,cl=new y,hl=new y,Ds=new y,Gg=new y;class Vg extends ns{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,a=this.ri,o=this.rj,l=kg,c=Wg,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Xg,_=this.jacobianElementA,p=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),p.spatial.copy(f),p.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(a,g);const v=f.dot(g),x=this.restitution+1,M=x*u.dot(f)-x*h.dot(f)+m.dot(c)-d.dot(l),w=this.computeGiMf();return-v*e-M*n-t*w}getImpactVelocityAlongNormal(){const t=qg,e=Yg,n=jg,i=Kg,s=Zg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const kg=new y,Wg=new y,Xg=new y,qg=new y,Yg=new y,jg=new y,Kg=new y,Zg=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class ul extends ns{constructor(t,e,n){super(t,e,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=$g,a=Jg,o=this.t;n.cross(o,s),i.cross(o,a);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(a);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const $g=new y,Jg=new y;class is{constructor(t,e,n){n=Hg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=is.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}is.idCounter=0;class Oi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Oi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Oi.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new ae;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Oe;new y;new Oe;new y;new y;new y;new y;new y;new y;new y;new Oe;new y;new jt;new Oe;class Qg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class t_ extends Qg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=e.bodies,c=l.length,h=t;let d,u,m,g,_,p;if(o!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const f=n_,v=i_,x=e_;f.length=o,v.length=o,x.length=o;for(let M=0;M!==o;M++){const w=a[M];x[M]=0,v[M]=w.computeB(h),f[M]=1/w.computeC()}if(o!==0){for(let R=0;R!==c;R++){const b=l[R],z=b.vlambda,E=b.wlambda;z.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let R=0;R!==o;R++){const b=a[R];d=v[R],u=f[R],p=x[R],_=b.computeGWlambda(),m=u*(d-_-b.eps*p),p+m<b.minForce?m=b.minForce-p:p+m>b.maxForce&&(m=b.maxForce-p),x[R]+=m,g+=m>0?m:-m,b.addToWlambda(m)}if(g*g<s)break}for(let R=0;R!==c;R++){const b=l[R],z=b.velocity,E=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),z.vadd(b.vlambda,z),b.wlambda.vmul(b.angularFactor,b.wlambda),E.vadd(b.wlambda,E)}let M=a.length;const w=1/h;for(;M--;)a[M].multiplier=x[M]*w}return n}}const e_=[],n_=[],i_=[];mt.STATIC;class s_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class r_ extends s_{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const Jt={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class o_{get[Jt.sphereSphere](){return this.sphereSphere}get[Jt.spherePlane](){return this.spherePlane}get[Jt.boxBox](){return this.boxBox}get[Jt.sphereBox](){return this.sphereBox}get[Jt.planeBox](){return this.planeBox}get[Jt.convexConvex](){return this.convexConvex}get[Jt.sphereConvex](){return this.sphereConvex}get[Jt.planeConvex](){return this.planeConvex}get[Jt.boxConvex](){return this.boxConvex}get[Jt.sphereHeightfield](){return this.sphereHeightfield}get[Jt.boxHeightfield](){return this.boxHeightfield}get[Jt.convexHeightfield](){return this.convexHeightfield}get[Jt.sphereParticle](){return this.sphereParticle}get[Jt.planeParticle](){return this.planeParticle}get[Jt.boxParticle](){return this.boxParticle}get[Jt.convexParticle](){return this.convexParticle}get[Jt.cylinderCylinder](){return this.convexConvex}get[Jt.sphereCylinder](){return this.sphereConvex}get[Jt.planeCylinder](){return this.planeConvex}get[Jt.boxCylinder](){return this.boxConvex}get[Jt.convexCylinder](){return this.convexConvex}get[Jt.heightfieldCylinder](){return this.heightfieldCylinder}get[Jt.particleCylinder](){return this.particleCylinder}get[Jt.sphereTrimesh](){return this.sphereTrimesh}get[Jt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new r_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new Vg(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=a||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,a=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=a.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new ul(n,i,u*m),p=g.length?g.pop():new ul(n,i,u*m);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-u*m,_.maxForce=p.maxForce=u*m,_.ri.copy(t.ri),_.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(_.t,p.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),_.enabled=p.enabled=t.enabled,e.push(_,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Wn.setZero(),Si.setZero(),Ei.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Wn.vadd(e.ni,Wn),Si.vadd(e.ri,Si),Ei.vadd(e.rj,Ei)):(Wn.vsub(e.ni,Wn),Si.vadd(e.rj,Si),Ei.vadd(e.ri,Ei));const a=1/t;Si.scale(a,n.ri),Ei.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Wn.normalize(),Wn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,a,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=a;const l=c_,c=h_,h=a_,d=l_;for(let u=0,m=t.length;u!==m;u++){const g=t[u],_=e[u];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const f=g.type&mt.KINEMATIC&&_.type&mt.STATIC||g.type&mt.STATIC&&_.type&mt.KINEMATIC||g.type&mt.KINEMATIC&&_.type&mt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],c),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const w=_.shapes[M];if(!(x.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+w.boundingSphereRadius)continue;let R=null;x.material&&w.material&&(R=n.getContactMaterial(x.material,w.material)||null),this.currentContactMaterial=R||p||n.defaultContactMaterial;const b=x.type|w.type,z=this[b];if(z){let E=!1;x.type<w.type?E=z.call(this,x,w,h,d,l,c,g,_,x,w,f):E=z.call(this,w,x,d,h,c,l,_,g,x,w,f),E&&f&&(n.shapeOverlapKeeper.set(x.id,w.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,a,o,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,a,o,l,c,h,d){const u=this.createContactEquation(o,l,t,e,c,h);if(u.ni.set(0,0,1),a.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Is),u.ni.scale(u.ni.dot(Is),dl),Is.vsub(dl,u.rj),-Is.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,a,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,a,o,l,t,e,d)}sphereBox(t,e,n,i,s,a,o,l,c,h,d){const u=this.v3pool,m=F_;n.vsub(i,Ns),e.getSideNormals(m,a);const g=t.radius;let _=!1;const p=B_,f=z_,v=H_;let x=null,M=0,w=0,R=0,b=null;for(let I=0,W=m.length;I!==W&&_===!1;I++){const Z=I_;Z.copy(m[I]);const j=Z.length();Z.normalize();const J=Ns.dot(Z);if(J<j+g&&J>0){const F=N_,O=U_;F.copy(m[(I+1)%3]),O.copy(m[(I+2)%3]);const lt=F.length(),ht=O.length();F.normalize(),O.normalize();const dt=Ns.dot(F),wt=Ns.dot(O);if(dt<lt&&dt>-lt&&wt<ht&&wt>-ht){const Bt=Math.abs(J-j-g);if((b===null||Bt<b)&&(b=Bt,w=dt,R=wt,x=j,p.copy(Z),f.copy(F),v.copy(O),M++,d))return!0}}}if(M){_=!0;const I=this.createContactEquation(o,l,t,e,c,h);p.scale(-g,I.ri),I.ni.copy(p),I.ni.negate(I.ni),p.scale(x,p),f.scale(w,f),p.vadd(f,p),v.scale(R,v),p.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let z=u.get();const E=O_;for(let I=0;I!==2&&!_;I++)for(let W=0;W!==2&&!_;W++)for(let Z=0;Z!==2&&!_;Z++)if(z.set(0,0,0),I?z.vadd(m[0],z):z.vsub(m[0],z),W?z.vadd(m[1],z):z.vsub(m[1],z),Z?z.vadd(m[2],z):z.vsub(m[2],z),i.vadd(z,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;_=!0;const j=this.createContactEquation(o,l,t,e,c,h);j.ri.copy(E),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(z),j.ri.vadd(n,j.ri),j.ri.vsub(o.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(z),z=null;const A=u.get(),G=u.get(),q=u.get(),U=u.get(),P=u.get(),D=m.length;for(let I=0;I!==D&&!_;I++)for(let W=0;W!==D&&!_;W++)if(I%3!==W%3){m[W].cross(m[I],A),A.normalize(),m[I].vadd(m[W],G),q.copy(n),q.vsub(G,q),q.vsub(i,q);const Z=q.dot(A);A.scale(Z,U);let j=0;for(;j===I%3||j===W%3;)j++;P.copy(n),P.vsub(U,P),P.vsub(G,P),P.vsub(i,P);const J=Math.abs(Z),F=P.length();if(J<m[j].length()&&F<g){if(d)return!0;_=!0;const O=this.createContactEquation(o,l,t,e,c,h);G.vadd(U,O.rj),O.rj.copy(O.rj),P.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(g,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}u.release(A,G,q,U,P)}planeBox(t,e,n,i,s,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,a,o,l,t,e,d)}convexConvex(t,e,n,i,s,a,o,l,c,h,d,u,m){const g=ev;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,a,g,u,m)){const _=[],p=nv;t.clipAgainstHull(n,s,e,i,a,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(o,l,t,e,c,h),M=x.ri,w=x.rj;g.negate(x.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,M),w.copy(_[v].point),M.vsub(n,M),w.vsub(i,w),M.vadd(n,M),M.vsub(o.position,M),w.vadd(i,w),w.vsub(l.position,w),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,s,a,o,l,c,h,d){const u=this.v3pool;n.vsub(i,G_);const m=e.faceNormals,g=e.faces,_=e.vertices,p=t.radius;let f=!1;for(let v=0;v!==_.length;v++){const x=_[v],M=X_;a.vmult(x,M),i.vadd(M,M);const w=W_;if(M.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;f=!0;const R=this.createContactEquation(o,l,t,e,c,h);R.ri.copy(w),R.ri.normalize(),R.ni.copy(R.ri),R.ri.scale(p,R.ri),M.vsub(i,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(o.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&f===!1;v++){const M=m[v],w=g[v],R=q_;a.vmult(M,R);const b=Y_;a.vmult(_[w[0]],b),b.vadd(i,b);const z=j_;R.scale(-p,z),n.vadd(z,z);const E=K_;z.vsub(b,E);const A=E.dot(R),G=Z_;if(n.vsub(b,G),A<0&&G.dot(R)>0){const q=[];for(let U=0,P=w.length;U!==P;U++){const D=u.get();a.vmult(_[w[U]],D),i.vadd(D,D),q.push(D)}if(D_(q,R,n)){if(d)return!0;f=!0;const U=this.createContactEquation(o,l,t,e,c,h);R.scale(-p,U.ri),R.negate(U.ni);const P=u.get();R.scale(-A,P);const D=u.get();R.scale(-p,D),n.vsub(i,U.rj),U.rj.vadd(D,U.rj),U.rj.vadd(P,U.rj),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),u.release(P),u.release(D),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let I=0,W=q.length;I!==W;I++)u.release(q[I]);return}else for(let U=0;U!==w.length;U++){const P=u.get(),D=u.get();a.vmult(_[w[(U+1)%w.length]],P),a.vmult(_[w[(U+2)%w.length]],D),i.vadd(P,P),i.vadd(D,D);const I=V_;D.vsub(P,I);const W=k_;I.unit(W);const Z=u.get(),j=u.get();n.vsub(P,j);const J=j.dot(W);W.scale(J,Z),Z.vadd(P,Z);const F=u.get();if(Z.vsub(n,F),J>0&&J*J<I.lengthSquared()&&F.lengthSquared()<p*p){if(d)return!0;const O=this.createContactEquation(o,l,t,e,c,h);Z.vsub(i,O.rj),Z.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(p,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let lt=0,ht=q.length;lt!==ht;lt++)u.release(q[lt]);u.release(P),u.release(D),u.release(Z),u.release(F),u.release(j);return}u.release(P),u.release(D),u.release(Z),u.release(F),u.release(j)}for(let U=0,P=q.length;U!==P;U++)u.release(q[U])}}}planeConvex(t,e,n,i,s,a,o,l,c,h,d){const u=$_,m=J_;m.set(0,0,1),s.vmult(m,m);let g=0;const _=Q_;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),a.vmult(u,u),i.vadd(u,u),u.vsub(n,_),m.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,h),x=tv;m.scale(m.dot(_),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,a,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,a,o,l,t,e,d)}sphereHeightfield(t,e,n,i,s,a,o,l,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,_=pv,p=fv;jt.pointToLocalFrame(i,a,n,p);let f=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,x=Math.floor((p.y-m)/g)-1,M=Math.ceil((p.y+m)/g)+1;if(v<0||M<0||f>u.length||x>u[0].length)return;f<0&&(f=0),v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const w=[];e.getRectMinMax(f,x,v,M,w);const R=w[0],b=w[1];if(p.z-m>b||p.z+m<R)return;const z=this.result;for(let E=f;E<v;E++)for(let A=x;A<M;A++){const G=z.length;let q=!1;if(e.getConvexTrianglePillar(E,A,!1),jt.pointToWorldFrame(i,a,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(q=this.sphereConvex(t,e.pillarConvex,n,_,s,a,o,l,t,e,d)),d&&q||(e.getConvexTrianglePillar(E,A,!0),jt.pointToWorldFrame(i,a,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(q=this.sphereConvex(t,e.pillarConvex,n,_,s,a,o,l,t,e,d)),d&&q))return!0;if(z.length-G>2)return}}boxHeightfield(t,e,n,i,s,a,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,a,o,l,t,e,d)}convexHeightfield(t,e,n,i,s,a,o,l,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,_=uv,p=dv,f=hv;jt.pointToLocalFrame(i,a,n,f);let v=Math.floor((f.x-g)/m)-1,x=Math.ceil((f.x+g)/m)+1,M=Math.floor((f.y-g)/m)-1,w=Math.ceil((f.y+g)/m)+1;if(x<0||w<0||v>u.length||M>u[0].length)return;v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const R=[];e.getRectMinMax(v,M,x,w,R);const b=R[0],z=R[1];if(!(f.z-g>z||f.z+g<b))for(let E=v;E<x;E++)for(let A=M;A<w;A++){let G=!1;if(e.getConvexTrianglePillar(E,A,!1),jt.pointToWorldFrame(i,a,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,e.pillarConvex,n,_,s,a,o,l,null,null,d,p,null)),d&&G||(e.getConvexTrianglePillar(E,A,!0),jt.pointToWorldFrame(i,a,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,e.pillarConvex,n,_,s,a,o,l,null,null,d,p,null)),d&&G))return!0}}sphereParticle(t,e,n,i,s,a,o,l,c,h,d){const u=ov;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,o,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,a,o,l,c,h,d){const u=iv;u.set(0,0,1),o.quaternion.vmult(u,u);const m=sv;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(l,o,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=rv;u.scale(u.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,a,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,a,o,l,t,e,d)}convexParticle(t,e,n,i,s,a,o,l,c,h,d){let u=-1;const m=lv,g=cv;let _=null;const p=av;if(p.copy(i),p.vsub(n,p),s.conjugate(fl),fl.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let f=0,v=t.faces.length;f!==v;f++){const x=[t.worldVertices[t.faces[f][0]]],M=t.worldFaceNormals[f];i.vsub(x[0],pl);const w=-M.dot(pl);if(_===null||Math.abs(w)<Math.abs(_)){if(d)return!0;_=w,u=f,m.copy(M)}}if(u!==-1){const f=this.createContactEquation(l,o,e,t,c,h);m.scale(_,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),m.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,x=f.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(o.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,a,o,l,c,h,d){return this.convexHeightfield(e,t,i,n,a,s,l,o,c,h,d)}particleCylinder(t,e,n,i,s,a,o,l,c,h,d){return this.convexParticle(e,t,i,n,a,s,l,o,c,h,d)}sphereTrimesh(t,e,n,i,s,a,o,l,c,h,d){const u=v_,m=x_,g=y_,_=M_,p=S_,f=E_,v=A_,x=__,M=m_,w=R_;jt.pointToLocalFrame(i,a,n,p);const R=t.radius;v.lowerBound.set(p.x-R,p.y-R,p.z-R),v.upperBound.set(p.x+R,p.y+R,p.z+R),e.getTrianglesInAABB(v,w);const b=g_,z=t.radius*t.radius;for(let U=0;U<w.length;U++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[w[U]*3+P],b),b.vsub(p,M),M.lengthSquared()<=z){if(x.copy(b),jt.pointToWorldFrame(i,a,x,b),b.vsub(n,M),d)return!0;let D=this.createContactEquation(o,l,t,e,c,h);D.ni.copy(M),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(b),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let U=0;U<w.length;U++)for(let P=0;P<3;P++){e.getVertex(e.indices[w[U]*3+P],u),e.getVertex(e.indices[w[U]*3+(P+1)%3],m),m.vsub(u,g),p.vsub(m,f);const D=f.dot(g);p.vsub(u,f);let I=f.dot(g);if(I>0&&D<0&&(p.vsub(u,f),_.copy(g),_.normalize(),I=f.dot(_),_.scale(I,f),f.vadd(u,f),f.distanceTo(p)<t.radius)){if(d)return!0;const Z=this.createContactEquation(o,l,t,e,c,h);f.vsub(p,Z.ni),Z.ni.normalize(),Z.ni.scale(t.radius,Z.ri),Z.ri.vadd(n,Z.ri),Z.ri.vsub(o.position,Z.ri),jt.pointToWorldFrame(i,a,f,f),f.vsub(l.position,Z.rj),jt.vectorToWorldFrame(a,Z.ni,Z.ni),jt.vectorToWorldFrame(a,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}const E=w_,A=T_,G=b_,q=p_;for(let U=0,P=w.length;U!==P;U++){e.getTriangleVertices(w[U],E,A,G),e.getNormal(w[U],q),p.vsub(E,f);let D=f.dot(q);if(q.scale(D,f),p.vsub(f,f),D=f.distanceTo(p),ae.pointInTriangle(f,E,A,G)&&D<t.radius){if(d)return!0;let I=this.createContactEquation(o,l,t,e,c,h);f.vsub(p,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),jt.pointToWorldFrame(i,a,f,f),f.vsub(l.position,I.rj),jt.vectorToWorldFrame(a,I.ni,I.ni),jt.vectorToWorldFrame(a,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,a,o,l,c,h,d){const u=new y,m=u_;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const _=new y;_.copy(u),jt.pointToWorldFrame(i,a,_,u);const p=d_;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,h);v.ni.copy(m);const x=f_;m.scale(p.dot(m),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(o.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Wn=new y,Si=new y,Ei=new y,a_=new y,l_=new y,c_=new le,h_=new le,u_=new y,d_=new y,f_=new y,p_=new y,m_=new y;new y;const g_=new y,__=new y,v_=new y,x_=new y,y_=new y,M_=new y,S_=new y,E_=new y,w_=new y,T_=new y,b_=new y,A_=new Oe,R_=[],Is=new y,dl=new y,C_=new y,P_=new y,L_=new y;function D_(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const a=r[s],o=C_;r[(s+1)%i].vsub(a,o);const l=P_;o.cross(t,l);const c=L_;e.vsub(a,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ns=new y,I_=new y,N_=new y,U_=new y,F_=[new y,new y,new y,new y,new y,new y],O_=new y,B_=new y,z_=new y,H_=new y,G_=new y,V_=new y,k_=new y,W_=new y,X_=new y,q_=new y,Y_=new y,j_=new y,K_=new y,Z_=new y;new y;new y;const $_=new y,J_=new y,Q_=new y,tv=new y,ev=new y,nv=new y,iv=new y,sv=new y,rv=new y,ov=new y,fl=new le,av=new y;new y;const lv=new y,pl=new y,cv=new y,hv=new y,uv=new y,dv=[0],fv=new y,pv=new y;class ml{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let a=i.length-1;a>=s;a--)i[a+1]=i[a];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,a=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=h===i[o],c||gl(t,h)}o=0;for(let l=0;l<a;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=n[o]===h,c||gl(e,h)}}}function gl(r,t){r.push((t&4294901760)>>16,t&65535)}const Wr=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class mv{constructor(){this.data={keys:[]}}get(t,e){const n=Wr(t,e);return this.data[n]}set(t,e,n){const i=Wr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Wr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class gv extends Zl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Eg,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new t_,this.constraints=[],this.narrowphase=new o_(this),this.collisionMatrix=new el,this.collisionMatrixPrevious=new el,this.bodyOverlapKeeper=new ml,this.shapeOverlapKeeper=new ml,this.contactmaterials=[],this.contactMaterialTable=new mv,this.defaultMaterial=new Oi("default"),this.defaultContactMaterial=new is(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ks?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.ALL,n.from=t,n.to=e,n.callback=i,Xr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.ANY,n.from=t,n.to=e,n.result=i,Xr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.CLOSEST,n.from=t,n.to=e,n.result=i,Xr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const a=i[s];if(a.id===t)return a}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=he.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=he.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(he.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const a=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Mv,i=Sv,s=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=mt.DYNAMIC;let u=-1/0;const m=this.constraints,g=yv;l.length();const _=l.x,p=l.y,f=l.z;let v=0;for(c&&(u=he.now()),v=0;v!==s;v++){const U=a[v];if(U.type===d){const P=U.force,D=U.mass;P.x+=D*_,P.y+=D*p,P.z+=D*f}}for(let U=0,P=this.subsystems.length;U!==P;U++)this.subsystems[U].update();c&&(u=he.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=he.now()-u);let x=m.length;for(v=0;v!==x;v++){const U=m[v];if(!U.collideConnected)for(let P=n.length-1;P>=0;P-=1)(U.bodyA===n[P]&&U.bodyB===i[P]||U.bodyB===n[P]&&U.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=he.now());const M=xv,w=e.length;for(v=0;v!==w;v++)M.push(e[v]);e.length=0;const R=this.frictionEquations.length;for(v=0;v!==R;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),c&&(h.narrowphase=he.now()-u),c&&(u=he.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const b=e.length;for(let U=0;U!==b;U++){const P=e[U],D=P.bi,I=P.bj,W=P.si,Z=P.sj;let j;if(D.material&&I.material?j=this.getContactMaterial(D.material,I.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,D.material&&I.material&&(D.material.friction>=0&&I.material.friction>=0&&D.material.friction*I.material.friction,D.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=D.material.restitution*I.material.restitution)),o.addEquation(P),D.allowSleep&&D.type===mt.DYNAMIC&&D.sleepState===mt.SLEEPING&&I.sleepState===mt.AWAKE&&I.type!==mt.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),F=I.sleepSpeedLimit**2;J>=F*2&&(D.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===mt.DYNAMIC&&I.sleepState===mt.SLEEPING&&D.sleepState===mt.AWAKE&&D.type!==mt.STATIC){const J=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),F=D.sleepSpeedLimit**2;J>=F*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,I,!0),this.collisionMatrixPrevious.get(D,I)||(Wi.body=I,Wi.contact=P,D.dispatchEvent(Wi),Wi.body=D,I.dispatchEvent(Wi)),this.bodyOverlapKeeper.set(D.id,I.id),this.shapeOverlapKeeper.set(W.id,Z.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=he.now()-u,u=he.now()),v=0;v!==s;v++){const U=a[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const U=m[v];U.update();for(let P=0,D=U.equations.length;P!==D;P++){const I=U.equations[P];o.addEquation(I)}}o.solve(t,this),c&&(h.solve=he.now()-u),o.removeAllEquations();const z=Math.pow;for(v=0;v!==s;v++){const U=a[v];if(U.type&d){const P=z(1-U.linearDamping,t),D=U.velocity;D.scale(P,D);const I=U.angularVelocity;if(I){const W=z(1-U.angularDamping,t);I.scale(W,I)}}}this.dispatchEvent(vv),c&&(u=he.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(v=0;v!==s;v++)a[v].integrate(t,A,G);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=he.now()-u),this.stepnumber+=1,this.dispatchEvent(_v);let q=!0;if(this.allowSleep)for(q=!1,v=0;v!==s;v++){const U=a[v];U.sleepTick(this.time),U.sleepState!==mt.SLEEPING&&(q=!0)}this.hasActiveBodies=q}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(fn,pn),t){for(let s=0,a=fn.length;s<a;s+=2)Xi.bodyA=this.getBodyById(fn[s]),Xi.bodyB=this.getBodyById(fn[s+1]),this.dispatchEvent(Xi);Xi.bodyA=Xi.bodyB=null}if(e){for(let s=0,a=pn.length;s<a;s+=2)qi.bodyA=this.getBodyById(pn[s]),qi.bodyB=this.getBodyById(pn[s+1]),this.dispatchEvent(qi);qi.bodyA=qi.bodyB=null}fn.length=pn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(fn,pn),n){for(let s=0,a=fn.length;s<a;s+=2){const o=this.getShapeById(fn[s]),l=this.getShapeById(fn[s+1]);mn.shapeA=o,mn.shapeB=l,o&&(mn.bodyA=o.body),l&&(mn.bodyB=l.body),this.dispatchEvent(mn)}mn.bodyA=mn.bodyB=mn.shapeA=mn.shapeB=null}if(i){for(let s=0,a=pn.length;s<a;s+=2){const o=this.getShapeById(pn[s]),l=this.getShapeById(pn[s+1]);gn.shapeA=o,gn.shapeB=l,o&&(gn.bodyA=o.body),l&&(gn.bodyB=l.body),this.dispatchEvent(gn)}gn.bodyA=gn.bodyB=gn.shapeA=gn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Oe;const Xr=new ae,he=globalThis.performance||{};if(!he.now){let r=Date.now();he.timing&&he.timing.navigationStart&&(r=he.timing.navigationStart),he.now=()=>Date.now()-r}new y;const _v={type:"postStep"},vv={type:"preStep"},Wi={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},xv=[],yv=[],Mv=[],Sv=[],fn=[],pn=[],Xi={type:"beginContact",bodyA:null,bodyB:null},qi={type:"endContact",bodyA:null,bodyB:null},mn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},gn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},en=.1,Ev=1e-8,Ve={WHITE:16777215,BLACK:0,GRAY:526344,RED:16711680,PLAYER:15253164,BARBIE:16761035},qn=new B(0,1,0),Ne=new Ue,sc=new B(-10,10,10),wi=new jl({antialias:!0}),wv=new y().copy(qn),Ai=new gv({gravity:new y(0,-9.81,0)}),rc=new Oi,oc=new Oi;Ai.addContactMaterial(new is(rc,oc,{friction:0,restitution:0,frictionEquationRelaxation:1,contactEquationRelaxation:1,frictionEquationStiffness:1e9,contactEquationStiffness:1e9}));function Tv(r,t){const e=r;e.transparent=!0,e.hasDynamicOpacity=!0,e.opacity=t.highOpacity;for(const[n,i]of Object.entries(t))e[n]=i;return e.normal&&(e.normal=e.normal.clone()),e}class ac extends Hm{constructor(){super();Lt(this,"raycaster",new jm);Lt(this,"prevTransparent",[]);Lt(this,"player",null)}update(e){for(const n of this.children)n.update&&n.update(e);this.handleMaterialTransparency()}addPhysics(){const e=[...this.children],n=new Set;for(;e.length>0;){const i=e.pop();n.has(i)||(n.add(i),i.body&&Ai.addBody(i.body),e.push(...i.children))}}dispose(){const e=[...this.children],n=new Set;for(;e.length>0;){const i=e.pop();n.has(i)||(n.add(i),i.dispose?i.dispose():e.push(...i.children))}}moveCameraWithPlayer(){if(!this.player)return;const e=new B().subVectors(this.player.position,this.player.initPosition);e.y=0,Ne.position.addVectors(sc,e),Ne.lookAt(this.player.position.clone().add(new B(0,-this.player.position.y,0)))}handleMaterialTransparency(){if(!this.player)return;const e=this.player.position.clone().sub(Ne.position).normalize(),n=[...this.children],i=new Set,s=new Set;for(;n.length>0;){const o=n.pop();if(!i.has(o)&&(i.add(o),n.push(...o.children),o.isMesh)){const l=o.material;if(l.hasDynamicOpacity&&l.detection==="directional"){const c=l.normal;l.transparent&&e.dot(c)>0&&(s.add(l),l.opacity=l.lowOpacity)}}}this.raycaster.set(Ne.position,e);const a=this.raycaster.intersectObjects(this.children);for(const o of a){const{object:l}=o;if(l.id===this.player.children[0].id)break;if(!l.isMesh)continue;const c=l.material;c.hasDynamicOpacity&&c.detection==="playerIntersection"&&(s.add(c),c.opacity=c.lowOpacity)}for(const o of this.prevTransparent)s.has(o)||(o.opacity=o.highOpacity);this.prevTransparent=[...s.values()]}}const Ys=class Ys extends Ln{constructor(e){super();Lt(this,"options");Lt(this,"body");this.options={...Ys.defaultOptions,...e};const{name:n,size:i,position:s,direction:a,color:o,opacityConfig:l}=this.options;this.name=n;const c=new ii(...i),h=Tv(new Wm({color:o}),{...l,normal:new B(...a).normalize()}),d=new rn(c,h);d.name=n,d.receiveShadow=!0,d.castShadow=!0,d.applyQuaternion(new On().setFromUnitVectors(new B(0,1,0),new B(...a).normalize())),this.add(d),this.translateOnAxis(new B(...s),1),this.body=new mt({mass:0,position:new y(...s),shape:new es(new y(...i.map(u=>u/2))),material:rc}),this.body.quaternion.setFromVectors(new y(0,1,0),new y(...a))}update(e){this.position.copy(this.body.position),this.quaternion.copy(this.body.quaternion)}};Lt(Ys,"defaultOptions",{name:"wall",size:[10,en,10],position:[0,0,0],direction:[0,1,0],color:16777215,opacityConfig:{detection:"directional",lowOpacity:.3,highOpacity:1}});let sn=Ys;class lc extends Ln{constructor(){super();Lt(this,"shadowMapSize",512);const e=new qa(Ve.WHITE,100,0,Math.PI/4,1,2);e.position.set(0,10,-5),e.target.position.set(10,0,-5),e.castShadow=!0,e.shadow.mapSize.width=this.shadowMapSize,e.shadow.mapSize.height=this.shadowMapSize,this.add(e,e.target);const n=new qa(Ve.WHITE,100,0,Math.PI/4,1,2);n.position.set(20,10,-5),n.target.position.set(10,0,-5),n.castShadow=!0,n.shadow.mapSize.width=this.shadowMapSize,n.shadow.mapSize.height=this.shadowMapSize,this.add(n,n.target);const i=new Xm(Ve.WHITE,Ve.GRAY,.1);i.position.set(10,20,-5),this.add(i)}}const js=class js extends Ln{constructor(e){super();Lt(this,"options");Lt(this,"floor");Lt(this,"leftBackWall");Lt(this,"rightBackWall");Lt(this,"leftFrontWall");Lt(this,"rightFrontWall");Lt(this,"ceiling");this.options={...js.defaultOptions,...e};const{name:n,position:i,size:s,color:a,opacityConfig:o}=this.options;this.name=n,this.floor=new sn({name:"floor",size:[s[0]+en,en,s[2]+en],position:i,direction:[0,1,0],color:a,opacityConfig:o}),this.leftBackWall=new sn({name:"leftBackWall",size:[s[0]-en,en,s[1]],position:[i[0],i[1]+s[1]/2,i[2]-s[2]/2],direction:[0,0,1],color:a,opacityConfig:o}),this.rightBackWall=new sn({name:"rightBackWall",size:[s[1],en,s[2]+en],position:[i[0]+s[0]/2,i[1]+s[1]/2,i[2]],direction:[-1,0,0],color:a,opacityConfig:o}),this.leftFrontWall=new sn({name:"leftFrontWall",size:this.leftBackWall.options.size.slice(),position:[i[0],i[1]+s[1]/2,i[2]+s[2]/2],direction:[0,0,-1],color:a,opacityConfig:o}),this.rightFrontWall=new sn({name:"rightFrontWall",size:this.rightBackWall.options.size.slice(),position:[i[0]-s[0]/2,i[1]+s[1]/2,i[2]],direction:[1,0,0],color:a,opacityConfig:o}),this.ceiling=new sn({name:"ceiling",size:this.floor.options.size.slice(),position:[i[0],i[1]+s[1],i[2]],direction:[0,-1,0],color:a,opacityConfig:o}),this.add(this.floor,this.leftBackWall,this.rightBackWall,this.leftFrontWall,this.rightFrontWall,this.ceiling)}};Lt(js,"defaultOptions",{name:"room",size:[10,10,10],position:[0,0,0],color:Ve.WHITE,opacityConfig:{detection:"directional",lowOpacity:.3,highOpacity:1}});let Ws=js;const Ks=class Ks extends Ln{constructor(e){super();Lt(this,"front");Lt(this,"initPosition");Lt(this,"initQuaternion");Lt(this,"options");Lt(this,"size");Lt(this,"body");this.options={...Ks.defaultOptions,...e};const{name:n,size:i,position:s,color:a,front:o}=this.options;this.name=n,this.size=new B(...i),this.initPosition=new B(...s),this.front=new B(...o);const l=new ii(...i),c=new km({color:a,shininess:100}),h=new rn(l,c);h.name=n,h.receiveShadow=!0,h.castShadow=!0,this.add(h),this.add(new Vm(new Mn().setFromPoints([new B,this.front]))),this.translateOnAxis(this.initPosition,1),this.initQuaternion=this.quaternion.clone(),this.body=new mt({mass:1,position:new y(...s),shape:new es(new y(...i.map(d=>d/2))),material:oc}),this.body.quaternion.copy(this.quaternion)}setPosition(e){this.position.copy(e),this.body.position.copy(e)}setQuaternion(e){this.quaternion.copy(e),this.body.quaternion.copy(e)}turnToFace(e){this.quaternion.setFromUnitVectors(this.front,e),this.body.quaternion.setFromVectors(new y().copy(this.front),new y().copy(e))}reset(){this.position.copy(this.initPosition),this.body.position.copy(this.initPosition),this.quaternion.copy(this.initQuaternion),this.body.quaternion.copy(this.initQuaternion),this.body.velocity.setZero(),this.body.angularVelocity.setZero()}update(e){this.position.copy(this.body.position),this.quaternion.copy(this.body.quaternion)}};Lt(Ks,"defaultOptions",{name:"character",size:[1,1,1],position:[0,0,0],color:Ve.WHITE,front:[1,0,0]});let Xs=Ks;const _l=new Set(["KeyW","ArrowUp"]),vl=new Set(["KeyS","ArrowDown"]),xl=new Set(["KeyA","ArrowLeft"]),yl=new Set(["KeyD","ArrowRight"]),bv=new Set(["Space"]),Zs=class Zs extends Xs{constructor(e){super({...Zs.defaultOptions,...e});Lt(this,"contactNormal",new y);Lt(this,"moveForwards",!1);Lt(this,"moveBackwards",!1);Lt(this,"moveLeft",!1);Lt(this,"moveRight",!1);Lt(this,"forwards");Lt(this,"backwards");Lt(this,"left");Lt(this,"right");Lt(this,"maxJumps",2);Lt(this,"controlsDisabled",!1);Lt(this,"jumpsLeft",0);Lt(this,"jumpVelocity",5);Lt(this,"moveVelocity",12);Lt(this,"inputDirection",new B);Lt(this,"onCollide",e=>{const{contact:n}=e;this.contactNormal.setZero(),n.bi.id===this.body.id?n.ni.negate(this.contactNormal):this.contactNormal.copy(n.ni),this.contactNormal.dot(wv)>.5&&(this.jumpsLeft=this.maxJumps)});Lt(this,"onKeyDown",e=>{if(e.repeat)return;const{code:n}=e;this.moveForwards=this.moveForwards||_l.has(n),this.moveBackwards=this.moveBackwards||vl.has(n),this.moveLeft=this.moveLeft||xl.has(n),this.moveRight=this.moveRight||yl.has(n),this.jumpsLeft>0&&bv.has(n)&&(this.body.velocity.y+=this.jumpVelocity,--this.jumpsLeft)});Lt(this,"onKeyUp",e=>{const{code:n}=e;this.moveForwards=this.moveForwards&&!_l.has(n),this.moveBackwards=this.moveBackwards&&!vl.has(n),this.moveLeft=this.moveLeft&&!xl.has(n),this.moveRight=this.moveRight&&!yl.has(n)});this.forwards=this.front.clone(),this.backwards=this.forwards.clone().applyAxisAngle(qn,Math.PI),this.left=this.forwards.clone().applyAxisAngle(qn,Math.PI/2),this.right=this.forwards.clone().applyAxisAngle(qn,-Math.PI/2),this.connectEventListeners()}connectEventListeners(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.body.addEventListener("collide",this.onCollide)}disconnectEventListeners(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),this.body.removeEventListener("collide",this.onCollide)}setForwardsDirection(e){this.forwards=e.clone(),this.backwards=this.forwards.clone().applyAxisAngle(qn,Math.PI),this.left=this.forwards.clone().applyAxisAngle(qn,Math.PI/2),this.right=this.forwards.clone().applyAxisAngle(qn,-Math.PI/2)}update(e){if(this.controlsDisabled){super.update(e);return}this.inputDirection.set(0,0,0),this.moveForwards&&this.inputDirection.add(this.forwards),this.moveBackwards&&this.inputDirection.add(this.backwards),this.moveLeft&&this.inputDirection.add(this.left),this.moveRight&&this.inputDirection.add(this.right),this.inputDirection.normalize(),this.inputDirection.length()>Ev&&(this.turnToFace(this.inputDirection),this.body.angularVelocity.setZero()),this.inputDirection.multiplyScalar(this.moveVelocity),this.body.velocity.x=this.inputDirection.x,this.body.velocity.z=this.inputDirection.z,super.update(e)}};Lt(Zs,"defaultOptions",{...Xs.defaultOptions,name:"player"});let qs=Zs;class Av extends ac{constructor(){super(),this.background=new kt(Ve.BLACK),this.player=new qs({size:[1,2,1],position:[10,6,-5],color:Ve.PLAYER});const t=new Ws({size:[30,10,20],position:[10,0,-5],color:Ve.WHITE}),{size:e,position:n,opacityConfig:i,color:s}=t.options,a=new sn({name:"platform",size:[e[0]/4,en,e[2]/4],position:[n[0],n[1]+e[1]/4,n[2]],direction:[0,-1,0],color:s,opacityConfig:{...i,detection:"playerIntersection"}});this.add(this.player,t,a,new lc)}}class Rv extends ac{constructor(){super(),this.background=new kt(Ve.BLACK),this.player=new qs({size:[1,2,1],position:[10,6,-5],color:Ve.PLAYER});const t=new Ws({size:[30,10,20],position:[10,0,-5],color:Ve.BARBIE}),{size:e,position:n,opacityConfig:i,color:s}=t.options,a=new sn({name:"platform",size:[e[0]/4,en,e[2]/4],position:[n[0],n[1]+e[1]/4,n[2]],direction:[0,-1,0],color:s,opacityConfig:{...i,detection:"playerIntersection"}});this.add(this.player,t,a,new lc)}}class Cv{constructor(){Lt(this,"current");Lt(this,"index");Lt(this,"levels",[()=>new Av,()=>new Rv]);this.index=0,this.current=this.levels[this.index](),this.current.addPhysics()}next(){this.current.dispose(),this.index,this.levels.length,this.current=this.levels[++this.index](),this.current.addPhysics()}update(t){this.current.update(t)}}function Pv(){Ne.position.copy(sc),Ne.zoom=.3,Ne.fov=20,Ne.lookAt(new B(0,0,0)),wi.setPixelRatio(window.devicePixelRatio),wi.shadowMap.enabled=!0,wi.shadowMap.type=El;const r=wi.domElement;r.style.display="block",document.body.style.margin="0",document.body.style.overflow="hidden",document.body.appendChild(r),Ai.solver.iterations+=5,Ai.solver.tolerance=1e-9;const t=new xc;t.showPanel(0),t.dom.style.top="",t.dom.style.left="",t.dom.style.bottom="0px",t.dom.style.right="0px",document.body.appendChild(t.dom);let e;e=new Zm(Ne,r),e.enableDamping=!0,e.enablePan=!0,e.enableZoom=!0,e.enableRotate=!0,e.minDistance=2,e.maxDistance=100,e.update();const n=()=>{const{innerHeight:l,innerWidth:c}=window;wi.setSize(c,l),Ne.aspect=c/l,Ne.updateProjectionMatrix()};n(),window.addEventListener("resize",n,!1);const i=new Cv;window.addEventListener("keydown",l=>l.code==="KeyC"&&console.log(Ne)),window.addEventListener("keydown",l=>l.code==="KeyR"&&i.current.player&&i.current.player.reset());const s=1/60;let a;const o=()=>{t.begin();const l=performance.now()/1e3;if(!a)Ai.step(s);else{const c=l-a;Ai.step(s,c),i.update(c)}a=l,e&&e.update(),wi.render(i.current,Ne),t.end(),window.requestAnimationFrame(o)};window.requestAnimationFrame(o)}Pv();
