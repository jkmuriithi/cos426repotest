var Xl=Object.defineProperty;var ql=(r,e,t)=>e in r?Xl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Qi=(r,e,t)=>(ql(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jl(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qa={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Yl,function(){var t=function(){function n(m){return a.appendChild(m.dom),m}function i(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";s=m}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),i(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(d.update(m-o,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,u)){var g=performance.memory;u.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:i}};return t.Panel=function(n,i,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,m=2*c,g=3*c,_=15*c,p=74*c,f=30*c,v=document.createElement("canvas");v.width=h,v.height=d,v.style.cssText="width:80px;height:48px";var x=v.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,h,d),x.fillStyle=i,x.fillText(n,u,m),x.fillRect(g,_,p,f),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g,_,p,f),{dom:v,update:function(y,T){a=Math.min(a,y),o=Math.max(o,y),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,h,_),x.fillStyle=i,x.fillText(l(y)+" "+n+" ("+l(a)+"-"+l(o)+")",u,m),x.drawImage(v,g+c,_,p-c,f,g,_,p-c,f),x.fillRect(g+p-c,_,c,f),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g+p-c,_,c,l((1-y/T)*f))}}},t})})(Qa);var Kl=Qa.exports;const Zl=jl(Kl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gr="158",Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$l=0,ao=1,Jl=2,el=1,Ql=2,dn=3,Rn=0,Rt=1,fn=2,bn=0,Mi=1,lo=2,co=3,ho=4,ec=5,Bn=100,tc=101,nc=102,uo=103,fo=104,ic=200,sc=201,rc=202,oc=203,Dr=204,Ir=205,ac=206,lc=207,cc=208,hc=209,uc=210,dc=211,fc=212,pc=213,mc=214,gc=0,_c=1,vc=2,Cs=3,xc=4,Mc=5,yc=6,Ec=7,tl=0,Sc=1,Tc=2,wn=0,bc=1,wc=2,Ac=3,Rc=4,Cc=5,nl=300,Ei=301,Si=302,Nr=303,Ur=304,Os=306,Fr=1e3,Xt=1001,Or=1002,wt=1003,po=1004,js=1005,Bt=1006,Pc=1007,Xi=1008,An=1009,Lc=1010,Dc=1011,Vr=1012,il=1013,Sn=1014,Tn=1015,qi=1016,sl=1017,rl=1018,Vn=1020,Ic=1021,qt=1023,Nc=1024,Uc=1025,kn=1026,Ti=1027,Fc=1028,ol=1029,Oc=1030,al=1031,ll=1033,Ks=33776,Zs=33777,$s=33778,Js=33779,mo=35840,go=35841,_o=35842,vo=35843,Bc=36196,xo=37492,Mo=37496,yo=37808,Eo=37809,So=37810,To=37811,bo=37812,wo=37813,Ao=37814,Ro=37815,Co=37816,Po=37817,Lo=37818,Do=37819,Io=37820,No=37821,Qs=36492,Uo=36494,Fo=36495,zc=36283,Oo=36284,Bo=36285,zo=36286,cl=3e3,Wn=3001,Hc=3200,Gc=3201,hl=0,Vc=1,zt="",gt="srgb",mn="srgb-linear",kr="display-p3",Bs="display-p3-linear",Ps="linear",Je="srgb",Ls="rec709",Ds="p3",ei=7680,Ho=519,kc=512,Wc=513,Xc=514,qc=515,Yc=516,jc=517,Kc=518,Zc=519,Go=35044,Vo="300 es",Br=1035,pn=2e3,Is=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const Gi=Math.PI/180,bi=180/Math.PI;function Ri(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function Wr(r,e){return(r%e+e)%e}function $c(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Jc(r,e,t){return r!==e?(t-r)/(e-r):0}function Vi(r,e,t){return(1-t)*r+t*e}function Qc(r,e,t,n){return Vi(r,e,1-Math.exp(-t*n))}function eh(r,e=1){return e-Math.abs(Wr(r,e*2)-e)}function th(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function nh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ih(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sh(r,e){return r+Math.random()*(e-r)}function rh(r){return r*(.5-Math.random())}function oh(r){r!==void 0&&(ko=r);let e=ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(r){return r*Gi}function lh(r){return r*bi}function zr(r){return(r&r-1)===0&&r!==0}function ch(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ns(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uh={DEG2RAD:Gi,RAD2DEG:bi,generateUUID:Ri,clamp:yt,euclideanModulo:Wr,mapLinear:$c,inverseLerp:Jc,lerp:Vi,damp:Qc,pingpong:eh,smoothstep:th,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:oh,degToRad:ah,radToDeg:lh,isPowerOfTwo:zr,ceilPowerOfTwo:ch,floorPowerOfTwo:Ns,setQuaternionFromProperEuler:hh,normalize:Tt,denormalize:vi};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],v=i[1],x=i[4],y=i[7],T=i[2],R=i[5],w=i[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*x+l*R,s[6]=a*f+o*y+l*w,s[1]=c*_+h*v+d*T,s[4]=c*p+h*x+d*R,s[7]=c*f+h*y+d*w,s[2]=u*_+m*v+g*T,s[5]=u*p+m*x+g*R,s[8]=u*f+m*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,m=c*s-a*l,g=t*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(er.makeScale(e,t)),this}rotate(e){return this.premultiply(er.makeRotation(-e)),this}translate(e,t){return this.premultiply(er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const er=new Ge;function ul(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dh(){const r=Us("canvas");return r.style.display="block",r}const Wo={};function ki(r){r in Wo||(Wo[r]=!0,console.warn(r))}const Xo=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[mn]:{transfer:Ps,primaries:Ls,toReference:r=>r,fromReference:r=>r},[gt]:{transfer:Je,primaries:Ls,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Bs]:{transfer:Ps,primaries:Ds,toReference:r=>r.applyMatrix3(qo),fromReference:r=>r.applyMatrix3(Xo)},[kr]:{transfer:Je,primaries:Ds,toReference:r=>r.convertSRGBToLinear().applyMatrix3(qo),fromReference:r=>r.applyMatrix3(Xo).convertLinearToSRGB()}},fh=new Set([mn,Bs]),je={enabled:!0,_workingColorSpace:mn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!fh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=es[e].toReference,i=es[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return es[r].primaries},getTransfer:function(r){return r===zt?Ps:es[r].transfer}};function yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ti;class dl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Us("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ph=0;class fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(nr(i[a].image)):s.push(nr(i[a]))}else s=nr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function nr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mh=0;class Nt extends Kn{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Xt,i=Xt,s=Bt,a=Xi,o=qt,l=An,c=Nt.DEFAULT_ANISOTROPY,h=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Ri(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wn?gt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Wn:cl}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?gt:zt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=nl;Nt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,T=(f+1)/2,R=(h+u)/4,w=(d+_)/4,B=(g+p)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=w/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=R/i,s=B/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=B/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gh extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?gt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pl extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _h extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==m||h!==g){let p=1-o;const f=l*u+c*m+h*g+d*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),R=Math.atan2(T,f*v);p=Math.sin(p*R)/T,o=Math.sin(o*R)/T}const y=o*v;if(l=l*p+u*y,c=c*p+m*y,h=h*p+g*y,d=d*p+_*y,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-o*m,e[t+2]=c*g+h*m+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ir.copy(this).projectOnVector(e),this.sub(ir)}reflect(e){return this.sub(ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new H,Yo=new Yn;class Yi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),ns.subVectors(this.max,Di),ni.subVectors(e.a,Di),ii.subVectors(e.b,Di),si.subVectors(e.c,Di),gn.subVectors(ii,ni),_n.subVectors(si,ii),Dn.subVectors(ni,si);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Dn.z,Dn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Dn.z,0,-Dn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Dn.y,Dn.x,0];return!sr(t,ni,ii,si,ns)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,ni,ii,si,ns))?!1:(is.crossVectors(gn,_n),t=[is.x,is.y,is.z],sr(t,ni,ii,si,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new H,new H,new H,new H,new H,new H,new H,new H],Ht=new H,ts=new Yi,ni=new H,ii=new H,si=new H,gn=new H,_n=new H,Dn=new H,Di=new H,ns=new H,is=new H,In=new H;function sr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){In.fromArray(r,s);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=e.dot(In),c=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vh=new Yi,Ii=new H,rr=new H;class Xr{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(rr)),this.expandByPoint(Ii.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new H,or=new H,ss=new H,vn=new H,ar=new H,rs=new H,lr=new H;let ml=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){or.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(or);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ss),o=vn.dot(this.direction),l=-vn.dot(ss),c=vn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(or).addScaledVector(ss,u),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,s){ar.subVectors(t,e),rs.subVectors(n,e),lr.crossVectors(ar,rs);let a=this.direction.dot(lr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(vn,rs));if(l<0)return null;const c=o*this.direction.dot(ar.cross(vn));if(c<0||l+c>a)return null;const h=-o*vn.dot(lr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ct{constructor(e,t,n,i,s,a,o,l,c,h,d,u,m,g,_,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,m,g,_,p)}set(e,t,n,i,s,a,o,l,c,h,d,u,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ri.setFromMatrixColumn(e,0).length(),s=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,Mh)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),xn.crossVectors(n,Lt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),xn.crossVectors(n,Lt)),xn.normalize(),os.crossVectors(Lt,xn),i[0]=xn.x,i[4]=os.x,i[8]=Lt.x,i[1]=xn.y,i[5]=os.y,i[9]=Lt.y,i[2]=xn.z,i[6]=os.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],v=n[3],x=n[7],y=n[11],T=n[15],R=i[0],w=i[4],B=i[8],S=i[12],A=i[1],G=i[5],q=i[9],U=i[13],P=i[2],D=i[6],I=i[10],W=i[14],Z=i[3],j=i[7],J=i[11],F=i[15];return s[0]=a*R+o*A+l*P+c*Z,s[4]=a*w+o*G+l*D+c*j,s[8]=a*B+o*q+l*I+c*J,s[12]=a*S+o*U+l*W+c*F,s[1]=h*R+d*A+u*P+m*Z,s[5]=h*w+d*G+u*D+m*j,s[9]=h*B+d*q+u*I+m*J,s[13]=h*S+d*U+u*W+m*F,s[2]=g*R+_*A+p*P+f*Z,s[6]=g*w+_*G+p*D+f*j,s[10]=g*B+_*q+p*I+f*J,s[14]=g*S+_*U+p*W+f*F,s[3]=v*R+x*A+y*P+T*Z,s[7]=v*w+x*G+y*D+T*j,s[11]=v*B+x*q+y*I+T*J,s[15]=v*S+x*U+y*W+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*m-n*l*m)+_*(+t*l*m-t*c*u+s*a*u-i*a*m+i*c*h-s*l*h)+p*(+t*c*d-t*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+f*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],v=d*p*c-_*u*c+_*l*m-o*p*m-d*l*f+o*u*f,x=g*u*c-h*p*c-g*l*m+a*p*m+h*l*f-a*u*f,y=h*_*c-g*d*c+g*o*m-a*_*m-h*o*f+a*d*f,T=g*d*l-h*_*l-g*o*u+a*_*u+h*o*p-a*d*p,R=t*v+n*x+i*y+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=v*w,e[1]=(_*u*s-d*p*s-_*i*m+n*p*m+d*i*f-n*u*f)*w,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*f+n*l*f)*w,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*m-n*l*m)*w,e[4]=x*w,e[5]=(h*p*s-g*u*s+g*i*m-t*p*m-h*i*f+t*u*f)*w,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*f-t*l*f)*w,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*m+t*l*m)*w,e[8]=y*w,e[9]=(g*d*s-h*_*s-g*n*m+t*_*m+h*n*f-t*d*f)*w,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*w,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*m-t*o*m)*w,e[12]=T*w,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*p+t*d*p)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*w,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,m=s*h,g=s*d,_=a*h,p=a*d,f=o*d,v=l*c,x=l*h,y=l*d,T=n.x,R=n.y,w=n.z;return i[0]=(1-(_+f))*T,i[1]=(m+y)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(m-y)*R,i[5]=(1-(u+f))*R,i[6]=(p+v)*R,i[7]=0,i[8]=(g+x)*w,i[9]=(p-v)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const c=1/s,h=1/a,d=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=pn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let m,g;if(o===pn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Is)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=pn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,m=(n+i)*h;let g,_;if(o===pn)g=(a+s)*d,_=-2*d;else if(o===Is)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new H,Gt=new ct,xh=new H(0,0,0),Mh=new H(1,1,1),xn=new H,os=new H,Lt=new H,jo=new ct,Ko=new Yn;class zs{constructor(e=0,t=0,n=0,i=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yh=0;const Zo=new H,oi=new Yn,rn=new ct,as=new H,Ni=new H,Eh=new H,Sh=new Yn,$o=new H(1,0,0),Jo=new H(0,1,0),Qo=new H(0,0,1),Th={type:"added"},bh={type:"removed"};class _t extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new H,t=new zs,n=new Yn,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ni,as,this.up):rn.lookAt(as,Ni,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(rn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new H(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new H,on=new H,cr=new H,an=new H,ai=new H,li=new H,ea=new H,hr=new H,ur=new H,dr=new H;let ls=!1;class Wt{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vt.subVectors(i,t),on.subVectors(n,t),cr.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(on),l=Vt.dot(cr),c=on.dot(on),h=on.dot(cr),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,a,o,l){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,an),l.setScalar(0),l.addScaledVector(s,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),on.subVectors(e,t),Vt.cross(on).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Vt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ai.subVectors(i,n),li.subVectors(s,n),hr.subVectors(e,n);const l=ai.dot(hr),c=li.dot(hr);if(l<=0&&c<=0)return t.copy(n);ur.subVectors(e,i);const h=ai.dot(ur),d=li.dot(ur);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ai,a);dr.subVectors(e,s);const m=ai.dot(dr),g=li.dot(dr);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(li,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ea.subVectors(s,i),o=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(ea,o);const f=1/(p+_+u);return a=_*f,o=u*f,t.copy(n).addScaledVector(ai,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function fr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Wr(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fr(a,s,e+1/3),this.g=fr(a,s,e),this.b=fr(a,s,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=_l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return je.fromWorkingColorSpace(Mt.copy(this),e),Math.round(yt(Mt.r*255,0,255))*65536+Math.round(yt(Mt.g*255,0,255))*256+Math.round(yt(Mt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,s=Mt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=gt){je.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(cs);const n=Vi(Mn.h,cs.h,t),i=Vi(Mn.s,cs.s,t),s=Vi(Mn.l,cs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new qe;qe.NAMES=_l;let wh=0,ji=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Mi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dr,this.blendDst=Ir,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class qr extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new H,hs=new Fe;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class vl extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xl extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xn extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ah=0;const Ot=new ct,pr=new _t,ci=new H,Dt=new Yi,Ui=new Yi,pt=new H;class Zn extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ul(e)?xl:vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return pr.lookAt(e),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Dt.min,Ui.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,Ui.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(Ui.min),Dt.expandByPoint(Ui.max))}Dt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),pt.add(ci)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new H,h[A]=new H;const d=new H,u=new H,m=new H,g=new Fe,_=new Fe,p=new Fe,f=new H,v=new H;function x(A,G,q){d.fromArray(i,A*3),u.fromArray(i,G*3),m.fromArray(i,q*3),g.fromArray(a,A*2),_.fromArray(a,G*2),p.fromArray(a,q*2),u.sub(d),m.sub(d),_.sub(g),p.sub(g);const U=1/(_.x*p.y-p.x*_.y);isFinite(U)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(U),v.copy(m).multiplyScalar(_.x).addScaledVector(u,-p.x).multiplyScalar(U),c[A].add(f),c[G].add(f),c[q].add(f),h[A].add(v),h[G].add(v),h[q].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,G=y.length;A<G;++A){const q=y[A],U=q.start,P=q.count;for(let D=U,I=U+P;D<I;D+=3)x(n[D+0],n[D+1],n[D+2])}const T=new H,R=new H,w=new H,B=new H;function S(A){w.fromArray(s,A*3),B.copy(w);const G=c[A];T.copy(G),T.sub(w.multiplyScalar(w.dot(G))).normalize(),R.crossVectors(B,G);const U=R.dot(h[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=U}for(let A=0,G=y.length;A<G;++A){const q=y[A],U=q.start,P=q.count;for(let D=U,I=U+P;D<I;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ta=new ct,Nn=new ml,us=new Xr,na=new H,hi=new H,ui=new H,di=new H,mr=new H,ds=new H,fs=new Fe,ps=new Fe,ms=new Fe,ia=new H,sa=new H,ra=new H,gs=new H,_s=new H;class Qt extends _t{constructor(e=new Zn,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(mr.fromBufferAttribute(d,e),a?ds.addScaledVector(mr,h):ds.addScaledVector(mr.sub(t),h))}t.add(ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(us.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(us,na)===null||Nn.origin.distanceToSquared(na)>(e.far-e.near)**2))&&(ta.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(ta),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=x;y<T;y+=3){const R=o.getX(y),w=o.getX(y+1),B=o.getX(y+2);i=vs(this,f,e,n,c,h,d,R,w,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const v=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);i=vs(this,a,e,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,T=x;y<T;y+=3){const R=y,w=y+1,B=y+2;i=vs(this,f,e,n,c,h,d,R,w,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const v=p,x=p+1,y=p+2;i=vs(this,a,e,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Rh(r,e,t,n,i,s,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Rn,o),l===null)return null;_s.copy(o),_s.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:r}}function vs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,hi),r.getVertexPosition(l,ui),r.getVertexPosition(c,di);const h=Rh(r,e,t,n,hi,ui,di,gs);if(h){i&&(fs.fromBufferAttribute(i,o),ps.fromBufferAttribute(i,l),ms.fromBufferAttribute(i,c),h.uv=Wt.getInterpolation(gs,hi,ui,di,fs,ps,ms,new Fe)),s&&(fs.fromBufferAttribute(s,o),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,c),h.uv1=Wt.getInterpolation(gs,hi,ui,di,fs,ps,ms,new Fe),h.uv2=h.uv1),a&&(ia.fromBufferAttribute(a,o),sa.fromBufferAttribute(a,l),ra.fromBufferAttribute(a,c),h.normal=Wt.getInterpolation(gs,hi,ui,di,ia,sa,ra,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};Wt.getNormal(hi,ui,di,d.normal),h.face=d}return h}class $n extends Zn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(h,3)),this.setAttribute("uv",new Xn(d,2));function g(_,p,f,v,x,y,T,R,w,B,S){const A=y/w,G=T/B,q=y/2,U=T/2,P=R/2,D=w+1,I=B+1;let W=0,Z=0;const j=new H;for(let J=0;J<I;J++){const F=J*G-U;for(let O=0;O<D;O++){const le=O*A-q;j[_]=le*v,j[p]=F*x,j[f]=P,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[f]=R>0?1:-1,h.push(j.x,j.y,j.z),d.push(O/w),d.push(1-J/B),W+=1}}for(let J=0;J<B;J++)for(let F=0;F<w;F++){const O=u+F+D*J,le=u+F+D*(J+1),he=u+(F+1)+D*(J+1),de=u+(F+1)+D*J;l.push(O,le,de),l.push(le,he,de),Z+=6}o.addGroup(m,Z,S),m+=Z,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(r){const e={};for(let t=0;t<r.length;t++){const n=wi(r[t]);for(const i in n)e[i]=n[i]}return e}function Ch(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ml(r){return r.getRenderTarget()===null?r.outputColorSpace:je.workingColorSpace}const Ph={clone:wi,merge:bt};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends yl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Ih extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new It(fi,pi,e,t);i.layers=this.layers,this.add(i);const s=new It(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new It(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new It(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new It(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new It(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class El extends Nt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?gt:zt),this.texture=new El(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $n(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:bn});s.uniforms.tEquirect.value=t;const a=new Qt(i,s),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Bt),new Ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const gr=new H,Uh=new H,Fh=new Ge;class En{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gr.subVectors(n,t).cross(Uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fh.getNormalMatrix(e),i=this.coplanarPoint(gr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Xr,xs=new H;class Yr{constructor(e=new En,t=new En,n=new En,i=new En,s=new En,a=new En){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,p-m,y-f).normalize(),n[1].setComponents(l+s,u+c,p+m,y+f).normalize(),n[2].setComponents(l+a,u+h,p+g,y+v).normalize(),n[3].setComponents(l-a,u-h,p-g,y-v).normalize(),n[4].setComponents(l-o,u-d,p-_,y-x).normalize(),t===pn)n[5].setComponents(l+o,u+d,p+_,y+x).normalize();else if(t===Is)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xs.x=i.normal.x>0?e.max.x:e.min.x,xs.y=i.normal.y>0?e.max.y:e.min.y,xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Oh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class jr extends Zn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const v=f*u-a;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const x=v+c*f,y=v+c*(f+1),T=v+1+c*(f+1),R=v+1+c*f;m.push(x,y,R),m.push(y,T,R)}this.setIndex(m),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(_,3)),this.setAttribute("uv",new Xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
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
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
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
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
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
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,au=`vec3 transformedNormal = objectNormal;
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
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`
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
}`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
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
}`,Tu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
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
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
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
#endif`,Uu=`struct PhysicalMaterial {
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
}`,Fu=`
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#if defined( USE_POINTS_UV )
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
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
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
#endif`,$u=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,kd=`#define DISTANCE
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define MATCAP
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
}`,ef=`#define MATCAP
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
}`,tf=`#define NORMAL
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
}`,nf=`#define NORMAL
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
}`,sf=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,af=`#define STANDARD
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
}`,lf=`#define TOON
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
}`,cf=`#define TOON
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
}`,hf=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,ff=`uniform vec3 color;
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
}`,pf=`uniform float rotation;
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
}`,mf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:Hh,alphamap_pars_fragment:Gh,alphatest_fragment:Vh,alphatest_pars_fragment:kh,aomap_fragment:Wh,aomap_pars_fragment:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:jh,iridescence_fragment:Kh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:su,common:ru,cube_uv_reflection_fragment:ou,defaultnormal_vertex:au,displacementmap_pars_vertex:lu,displacementmap_vertex:cu,emissivemap_fragment:hu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Cu,envmap_vertex:vu,fog_vertex:xu,fog_pars_vertex:Mu,fog_fragment:yu,fog_pars_fragment:Eu,gradientmap_pars_fragment:Su,lightmap_fragment:Tu,lightmap_pars_fragment:bu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Au,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Du,lights_phong_pars_fragment:Iu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:Bu,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Vu,map_fragment:ku,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:ju,morphcolor_vertex:Ku,morphnormal_vertex:Zu,morphtarget_pars_vertex:$u,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:ld,opaque_fragment:cd,packing:hd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:Md,skinbase_vertex:yd,skinning_pars_vertex:Ed,skinning_vertex:Sd,skinnormal_vertex:Td,specularmap_fragment:bd,specularmap_pars_fragment:wd,tonemapping_fragment:Ad,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Id,worldpos_vertex:Nd,background_vert:Ud,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:Hd,depth_vert:Gd,depth_frag:Vd,distanceRGBA_vert:kd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:jd,meshbasic_vert:Kd,meshbasic_frag:Zd,meshlambert_vert:$d,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:ef,meshnormal_vert:tf,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:af,meshtoon_vert:lf,meshtoon_frag:cf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:mf},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Jt={basic:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bt([ce.common,ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Jt.physical={uniforms:bt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ms={r:0,b:0,g:0};function gf(r,e,t,n,i,s,a){const o=new qe(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),v=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Os)?(h===void 0&&(h=new Qt(new $n(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:wi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==Je,(d!==x||u!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Qt(new jr(2,2),new jn({name:"BackgroundMaterial",uniforms:wi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Ms,Ml(r)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function _f(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(P,D,I,W,Z){let j=!1;if(a){const J=_(W,I,D);c!==J&&(c=J,m(c.object)),j=f(P,W,I,Z),j&&v(P,W,I,Z)}else{const J=D.wireframe===!0;(c.geometry!==W.id||c.program!==I.id||c.wireframe!==J)&&(c.geometry=W.id,c.program=I.id,c.wireframe=J,j=!0)}Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,B(P,D,I,W),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,D,I){const W=I.wireframe===!0;let Z=o[P.id];Z===void 0&&(Z={},o[P.id]=Z);let j=Z[D.id];j===void 0&&(j={},Z[D.id]=j);let J=j[W];return J===void 0&&(J=p(u()),j[W]=J),J}function p(P){const D=[],I=[],W=[];for(let Z=0;Z<i;Z++)D[Z]=0,I[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:W,object:P,attributes:{},index:null}}function f(P,D,I,W){const Z=c.attributes,j=D.attributes;let J=0;const F=I.getAttributes();for(const O in F)if(F[O].location>=0){const he=Z[O];let de=j[O];if(de===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),he===void 0||he.attribute!==de||de&&he.data!==de.data)return!0;J++}return c.attributesNum!==J||c.index!==W}function v(P,D,I,W){const Z={},j=D.attributes;let J=0;const F=I.getAttributes();for(const O in F)if(F[O].location>=0){let he=j[O];he===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));const de={};de.attribute=he,he&&he.data&&(de.data=he.data),Z[O]=de,J++}c.attributes=Z,c.attributesNum=J,c.index=W}function x(){const P=c.newAttributes;for(let D=0,I=P.length;D<I;D++)P[D]=0}function y(P){T(P,0)}function T(P,D){const I=c.newAttributes,W=c.enabledAttributes,Z=c.attributeDivisors;I[P]=1,W[P]===0&&(r.enableVertexAttribArray(P),W[P]=1),Z[P]!==D&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),Z[P]=D)}function R(){const P=c.newAttributes,D=c.enabledAttributes;for(let I=0,W=D.length;I<W;I++)D[I]!==P[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function w(P,D,I,W,Z,j,J){J===!0?r.vertexAttribIPointer(P,D,I,Z,j):r.vertexAttribPointer(P,D,I,W,Z,j)}function B(P,D,I,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Z=W.attributes,j=I.getAttributes(),J=D.defaultAttributeValues;for(const F in j){const O=j[F];if(O.location>=0){let le=Z[F];if(le===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){const he=le.normalized,de=le.itemSize,Te=t.get(le);if(Te===void 0)continue;const Oe=Te.buffer,Ae=Te.type,Le=Te.bytesPerElement,Ze=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||le.gpuType===il);if(le.isInterleavedBufferAttribute){const Be=le.data,V=Be.stride,vt=le.offset;if(Be.isInstancedInterleavedBuffer){for(let Ee=0;Ee<O.locationSize;Ee++)T(O.location+Ee,Be.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Ee=0;Ee<O.locationSize;Ee++)y(O.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<O.locationSize;Ee++)w(O.location+Ee,de/O.locationSize,Ae,he,V*Le,(vt+de/O.locationSize*Ee)*Le,Ze)}else{if(le.isInstancedBufferAttribute){for(let Be=0;Be<O.locationSize;Be++)T(O.location+Be,le.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<O.locationSize;Be++)y(O.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Be=0;Be<O.locationSize;Be++)w(O.location+Be,de/O.locationSize,Ae,he,de*Le,de/O.locationSize*Be*Le,Ze)}}else if(J!==void 0){const he=J[F];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(O.location,he);break;case 3:r.vertexAttrib3fv(O.location,he);break;case 4:r.vertexAttrib4fv(O.location,he);break;default:r.vertexAttrib1fv(O.location,he)}}}}R()}function S(){q();for(const P in o){const D=o[P];for(const I in D){const W=D[I];for(const Z in W)g(W[Z].object),delete W[Z];delete D[I]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;const D=o[P.id];for(const I in D){const W=D[I];for(const Z in W)g(W[Z].object),delete W[Z];delete D[I]}delete o[P.id]}function G(P){for(const D in o){const I=o[D];if(I[P.id]===void 0)continue;const W=I[P.id];for(const Z in W)g(W[Z].object),delete W[Z];delete I[P.id]}}function q(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function vf(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function xf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,y=a||e.has("OES_texture_float"),T=x&&y,R=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:R}}function Mf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new En,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,x=v*4;let y=f.clippingState||null;l.value=y,y=h(g,u,x,m);for(let T=0;T!==x;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,y=m;x!==_;++x,y+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function yf(r){let e=new WeakMap;function t(a,o){return o===Nr?a.mapping=Ei:o===Ur&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Nr||o===Ur)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nh(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ef extends yl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,oa=[.125,.215,.35,.446,.526,.582],zn=20,_r=new Ef,aa=new qe;let vr=null,xr=0,Mr=0;const On=(1+Math.sqrt(5))/2,mi=1/On,la=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,On,mi),new H(0,On,-mi),new H(mi,0,On),new H(-mi,0,On),new H(On,mi,0),new H(-On,mi,0)];class ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vr,xr,Mr),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:qi,format:qt,colorSpace:mn,depthBuffer:!1},i=ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ha(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(s)),this._blurMaterial=Tf(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,i){const o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(aa),h.toneMapping=wn,h.autoClear=!1;const m=new qr({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Qt(new $n,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(aa),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;ys(i,v*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ei||e.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=da()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ua());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=la[(i-1)%la.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):zn;p>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);const f=[];let v=0;for(let w=0;w<zn;++w){const B=w/_,S=Math.exp(-B*B/2);f.push(S),w===0?v+=S:w<p&&(v+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-xi?i-x+xi:0),R=4*(this._cubeSize-y);ys(t,T,R,3*y,2*y),l.setRenderTarget(t),l.render(d,_r)}}function Sf(r){const e=[],t=[],n=[];let i=r;const s=r-xi+1+oa.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-xi?l=oa[a-r+xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,f=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,B=R>2?0:-1,S=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];v.set(S,_*g*R),x.set(u,p*g*R);const A=[R,R,R,R,R,R];y.set(A,f*g*R)}const T=new Zn;T.setAttribute("position",new en(v,_)),T.setAttribute("uv",new en(x,p)),T.setAttribute("faceIndex",new en(y,f)),e.push(T),i>xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ha(r,e,t){const n=new qn(r,e,t);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Tf(r,e,t){const n=new Float32Array(zn),i=new H(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ua(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function da(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Kr(){return`

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
	`}function bf(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nr||l===Ur,h=l===Ei||l===Si;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new ca(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new ca(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Af(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}u.removeEventListener("dispose",a),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],R=v[x+1],w=v[x+2];u.push(T,R,R,w,w,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,R=x+1,w=x+2;u.push(T,R,R,w,w,T)}}else return;const p=new(ul(u)?xl:vl)(u,1);p.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Rf(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){r.drawElements(s,m,o,u*l),t.update(m,s,1)}function d(u,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,u*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Cf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pf(r,e){return r[0]-e[0]}function Lf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Df(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let D=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var m=D;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let A=h.attributes.position.count*S,G=1;A>e.maxTextureSize&&(G=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const q=new Float32Array(A*G*4*_),U=new pl(q,A,G,_);U.type=Tn,U.needsUpdate=!0;const P=S*4;for(let I=0;I<_;I++){const W=R[I],Z=w[I],j=B[I],J=A*G*4*I;for(let F=0;F<W.count;F++){const O=F*P;x===!0&&(a.fromBufferAttribute(W,F),q[J+O+0]=a.x,q[J+O+1]=a.y,q[J+O+2]=a.z,q[J+O+3]=0),y===!0&&(a.fromBufferAttribute(Z,F),q[J+O+4]=a.x,q[J+O+5]=a.y,q[J+O+6]=a.z,q[J+O+7]=0),T===!0&&(a.fromBufferAttribute(j,F),q[J+O+8]=a.x,q[J+O+9]=a.y,q[J+O+10]=a.z,q[J+O+11]=j.itemSize===4?a.w:1)}}p={count:_,texture:U,size:new Fe(A,G)},s.set(h,p),h.addEventListener("dispose",D)}let f=0;for(let x=0;x<u.length;x++)f+=u[x];const v=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=u[y]}_.sort(Lf);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Pf);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=o[y],R=T[0],w=T[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+y)!==p[R]&&h.setAttribute("morphTarget"+y,p[R]),f&&h.getAttribute("morphNormal"+y)!==f[R]&&h.setAttribute("morphNormal"+y,f[R]),i[y]=w,v+=w):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function If(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Tl=new Nt,bl=new pl,wl=new _h,Al=new El,fa=[],pa=[],ma=new Float32Array(16),ga=new Float32Array(9),_a=new Float32Array(4);function Ci(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fa[i];if(s===void 0&&(s=new Float32Array(i),fa[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hs(r,e){let t=pa[e];t===void 0&&(t=new Int32Array(e),pa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Nf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Uf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function Ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function Of(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function Bf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;_a.set(n),r.uniformMatrix2fv(this.addr,!1,_a),ut(t,n)}}function zf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;ga.set(n),r.uniformMatrix3fv(this.addr,!1,ga),ut(t,n)}}function Hf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;ma.set(n),r.uniformMatrix4fv(this.addr,!1,ma),ut(t,n)}}function Gf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function kf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function Wf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function Xf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function Yf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function Kf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Tl,i)}function Zf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wl,i)}function $f(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Al,i)}function Jf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bl,i)}function Qf(r){switch(r){case 5126:return Nf;case 35664:return Uf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return zf;case 35676:return Hf;case 5124:case 35670:return Gf;case 35667:case 35671:return Vf;case 35668:case 35672:return kf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Jf}}function ep(r,e){r.uniform1fv(this.addr,e)}function tp(r,e){const t=Ci(e,this.size,2);r.uniform2fv(this.addr,t)}function np(r,e){const t=Ci(e,this.size,3);r.uniform3fv(this.addr,t)}function ip(r,e){const t=Ci(e,this.size,4);r.uniform4fv(this.addr,t)}function sp(r,e){const t=Ci(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rp(r,e){const t=Ci(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function op(r,e){const t=Ci(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ap(r,e){r.uniform1iv(this.addr,e)}function lp(r,e){r.uniform2iv(this.addr,e)}function cp(r,e){r.uniform3iv(this.addr,e)}function hp(r,e){r.uniform4iv(this.addr,e)}function up(r,e){r.uniform1uiv(this.addr,e)}function dp(r,e){r.uniform2uiv(this.addr,e)}function fp(r,e){r.uniform3uiv(this.addr,e)}function pp(r,e){r.uniform4uiv(this.addr,e)}function mp(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Tl,s[a])}function gp(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wl,s[a])}function _p(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Al,s[a])}function vp(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bl,s[a])}function xp(r){switch(r){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return op;case 5124:case 35670:return ap;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return vp}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qf(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xp(t.type)}}class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const yr=/(\w+)(\])?(\[|\.)?/g;function va(r,e){r.seq.push(e),r.map[e.id]=e}function Sp(r,e,t){const n=r.name,i=n.length;for(yr.lastIndex=0;;){const s=yr.exec(n),a=yr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){va(t,c===void 0?new Mp(o,r,e):new yp(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Ep(o),va(t,d)),t=d}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Sp(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Tp=37297;let bp=0;function wp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ap(r){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(r);let n;switch(e===t?n="":e===Ds&&t===Ls?n="LinearDisplayP3ToLinearSRGB":e===Ls&&t===Ds&&(n="LinearSRGBToLinearDisplayP3"),r){case mn:case Bs:return[n,"LinearTransferOETF"];case gt:case kr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ma(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+wp(r.getShaderSource(e),a)}else return i}function Rp(r,e){const t=Ap(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cp(r,e){let t;switch(e){case bc:t="Linear";break;case wc:t="Reinhard";break;case Ac:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case Cc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function Lp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dp(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Hi(r){return r!==""}function ya(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ea(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(r){return r.replace(Ip,Up)}const Np=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Up(r,e){let t=ze[e];if(t===void 0){const n=Np.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hr(t)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(r){return r.replace(Fp,Op)}function Op(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ta(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function zp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case Si:e="ENVMAP_TYPE_CUBE";break;case Os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sc:e="ENVMAP_BLENDING_MIX";break;case Tc:e="ENVMAP_BLENDING_ADD";break}return e}function Vp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kp(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Bp(t),c=zp(t),h=Hp(t),d=Gp(t),u=Vp(t),m=t.isWebGL2?"":Pp(t),g=Lp(s),_=i.createProgram();let p,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),f.length>0&&(f+=`
`)):(p=[Ta(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),f=[m,Ta(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?ze.tonemapping_pars_fragment:"",t.toneMapping!==wn?Cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Rp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Hr(a),a=ya(a,t),a=Ea(a,t),o=Hr(o),o=ya(o,t),o=Ea(o,t),a=Sa(a),o=Sa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+p+a,y=v+f+o,T=xa(i,i.VERTEX_SHADER,x),R=xa(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(G){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(T).trim(),P=i.getShaderInfoLog(R).trim();let D=!0,I=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,R);else{const W=Ma(i,T,"vertex"),Z=Ma(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||P==="")&&(I=!1);I&&(G.diagnostics={runnable:D,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:P,prefix:f}})}i.deleteShader(T),i.deleteShader(R),B=new Rs(i,_),S=Dp(i,_)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,Tp)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qp(e),t.set(e,n)),n}}class qp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function Yp(r,e,t,n,i,s,a){const o=new gl,l=new Xp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,A,G,q,U){const P=q.fog,D=U.geometry,I=S.isMeshStandardMaterial?q.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||I),Z=W&&W.mapping===Os?W.image.height:null,j=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,F=J!==void 0?J.length:0;let O=0;D.morphAttributes.position!==void 0&&(O=1),D.morphAttributes.normal!==void 0&&(O=2),D.morphAttributes.color!==void 0&&(O=3);let le,he,de,Te;if(j){const it=Jt[j];le=it.vertexShader,he=it.fragmentShader}else le=S.vertexShader,he=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),Te=l.getFragmentShaderID(S);const Oe=r.getRenderTarget(),Ae=U.isInstancedMesh===!0,Le=!!S.map,Ze=!!S.matcap,Be=!!W,V=!!S.aoMap,vt=!!S.lightMap,Ee=!!S.bumpMap,Re=!!S.normalMap,Ce=!!S.displacementMap,Qe=!!S.emissiveMap,Ne=!!S.metalnessMap,De=!!S.roughnessMap,Xe=S.anisotropy>0,nt=S.clearcoat>0,dt=S.iridescence>0,C=S.sheen>0,E=S.transmission>0,k=Xe&&!!S.anisotropyMap,ne=nt&&!!S.clearcoatMap,ee=nt&&!!S.clearcoatNormalMap,ie=nt&&!!S.clearcoatRoughnessMap,ve=dt&&!!S.iridescenceMap,oe=dt&&!!S.iridescenceThicknessMap,ue=C&&!!S.sheenColorMap,L=C&&!!S.sheenRoughnessMap,re=!!S.specularMap,Q=!!S.specularColorMap,be=!!S.specularIntensityMap,xe=E&&!!S.transmissionMap,Se=E&&!!S.thicknessMap,_e=!!S.gradientMap,pe=!!S.alphaMap,Ve=S.alphaTest>0,N=!!S.alphaHash,ae=!!S.extensions,te=!!D.attributes.uv1,$=!!D.attributes.uv2,se=!!D.attributes.uv3;let ye=wn;return S.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ye=r.toneMapping),{isWebGL2:h,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:he,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:mn,map:Le,matcap:Ze,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:Z,aoMap:V,lightMap:vt,bumpMap:Ee,normalMap:Re,displacementMap:u&&Ce,emissiveMap:Qe,normalMapObjectSpace:Re&&S.normalMapType===Vc,normalMapTangentSpace:Re&&S.normalMapType===hl,metalnessMap:Ne,roughnessMap:De,anisotropy:Xe,anisotropyMap:k,clearcoat:nt,clearcoatMap:ne,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:dt,iridescenceMap:ve,iridescenceThicknessMap:oe,sheen:C,sheenColorMap:ue,sheenRoughnessMap:L,specularMap:re,specularColorMap:Q,specularIntensityMap:be,transmission:E,transmissionMap:xe,thicknessMap:Se,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Mi,alphaMap:pe,alphaTest:Ve,alphaHash:N,combine:S.combine,mapUv:Le&&_(S.map.channel),aoMapUv:V&&_(S.aoMap.channel),lightMapUv:vt&&_(S.lightMap.channel),bumpMapUv:Ee&&_(S.bumpMap.channel),normalMapUv:Re&&_(S.normalMap.channel),displacementMapUv:Ce&&_(S.displacementMap.channel),emissiveMapUv:Qe&&_(S.emissiveMap.channel),metalnessMapUv:Ne&&_(S.metalnessMap.channel),roughnessMapUv:De&&_(S.roughnessMap.channel),anisotropyMapUv:k&&_(S.anisotropyMap.channel),clearcoatMapUv:ne&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(S.sheenRoughnessMap.channel),specularMapUv:re&&_(S.specularMap.channel),specularColorMapUv:Q&&_(S.specularColorMap.channel),specularIntensityMapUv:be&&_(S.specularIntensityMap.channel),transmissionMapUv:xe&&_(S.transmissionMap.channel),thicknessMapUv:Se&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Re||Xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:$,vertexUv3s:se,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Le||pe),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)A.push(G),A.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(v(A,S),x(A,S),A.push(r.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function y(S){const A=g[S.type];let G;if(A){const q=Jt[A];G=Ph.clone(q.uniforms)}else G=S.uniforms;return G}function T(S,A){let G;for(let q=0,U=c.length;q<U;q++){const P=c[q];if(P.cacheKey===A){G=P,++G.usedTimes;break}}return G===void 0&&(G=new kp(r,A,S,s),c.push(G)),G}function R(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:B}}function jp(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ba(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wa(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,m,g,_,p){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function o(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function l(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Kp),n.length>1&&n.sort(u||ba),i.length>1&&i.sort(u||ba)}function h(){for(let d=e,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Zp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new wa,r.set(n,[a])):i>=s.length?(a=new wa,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function $p(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new qe};break;case"SpotLight":t={position:new H,direction:new H,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function Jp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qp=0;function em(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tm(r,e){const t=new $p,n=Jp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);const s=new H,a=new ct,o=new ct;function l(h,d){let u=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,p=0,f=0,v=0,x=0,y=0,T=0,R=0,w=0,B=0,S=0;h.sort(em);const A=d===!0?Math.PI:1;for(let q=0,U=h.length;q<U;q++){const P=h[q],D=P.color,I=P.intensity,W=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*I*A,m+=D.g*I*A,g+=D.b*I*A;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],I);S++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const J=P.shadow,F=n.get(P);F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[_]=F,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(D).multiplyScalar(I*A),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[f]=j;const J=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,J.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[f]=J.matrix,P.castShadow){const F=n.get(P);F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[f]=F,i.spotShadowMap[f]=Z,R++}f++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(D).multiplyScalar(I),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=j,v++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),j.distance=P.distance,j.decay=P.decay,P.castShadow){const J=P.shadow,F=n.get(P);F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=j,p++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(I*A),j.groundColor.copy(P.groundColor).multiplyScalar(I*A),i.hemi[x]=j,x++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==f||G.rectAreaLength!==v||G.hemiLength!==x||G.numDirectionalShadows!==y||G.numPointShadows!==T||G.numSpotShadows!==R||G.numSpotMaps!==w||G.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+w-B,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=S,G.directionalLength=_,G.pointLength=p,G.spotLength=f,G.rectAreaLength=v,G.hemiLength=x,G.numDirectionalShadows=y,G.numPointShadows=T,G.numSpotShadows=R,G.numSpotMaps=w,G.numLightProbes=S,i.version=Qp++)}function c(h,d){let u=0,m=0,g=0,_=0,p=0;const f=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:i}}function Aa(r,e){const t=new tm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function nm(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Aa(r,e),t.set(s,[l])):a>=o.length?(l=new Aa(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class im extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sm extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
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
}`;function am(r,e,t){let n=new Yr;const i=new Fe,s=new Fe,a=new mt,o=new im({depthPacking:Gc}),l=new sm,c={},h=t.maxTextureSize,d={[Rn]:Rt,[Rt]:Rn,[fn]:fn},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:rm,fragmentShader:om}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let f=this.type;this.render=function(T,R,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const B=r.getRenderTarget(),S=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),G=r.state;G.setBlending(bn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=f!==dn&&this.type===dn,U=f===dn&&this.type!==dn;for(let P=0,D=T.length;P<D;P++){const I=T[P],W=I.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Z=W.getFrameExtents();if(i.multiply(Z),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,W.mapSize.y=s.y)),W.map===null||q===!0||U===!0){const J=this.type!==dn?{minFilter:wt,magFilter:wt}:{};W.map!==null&&W.map.dispose(),W.map=new qn(i.x,i.y,J),W.map.texture.name=I.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const j=W.getViewportCount();for(let J=0;J<j;J++){const F=W.getViewport(J);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),G.viewport(a),W.updateMatrices(I,J),n=W.getFrustum(),y(R,w,W.camera,I,this.type)}W.isPointLightShadow!==!0&&this.type===dn&&v(W,w),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(B,S,A)};function v(T,R){const w=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,w,u,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,w,m,_,null)}function x(T,R,w,B){let S=null;const A=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)S=A;else if(S=w.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=S.uuid,q=R.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let P=U[q];P===void 0&&(P=S.clone(),U[q]=P),S=P}if(S.visible=R.visible,S.wireframe=R.wireframe,B===dn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=r.properties.get(S);G.light=w}return S}function y(T,R,w,B,S){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const q=e.update(T),U=T.material;if(Array.isArray(U)){const P=q.groups;for(let D=0,I=P.length;D<I;D++){const W=P[D],Z=U[W.materialIndex];if(Z&&Z.visible){const j=x(T,Z,B,S);r.renderBufferDirect(w,null,q,j,T,W)}}}else if(U.visible){const P=x(T,U,B,S);r.renderBufferDirect(w,null,q,P,T,null)}}const G=T.children;for(let q=0,U=G.length;q<U;q++)y(G[q],R,w,B,S)}}function lm(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const ae=new mt;let te=null;const $=new mt(0,0,0,0);return{setMask:function(se){te!==se&&!N&&(r.colorMask(se,se,se,se),te=se)},setLocked:function(se){N=se},setClear:function(se,ye,ke,it,Ft){Ft===!0&&(se*=it,ye*=it,ke*=it),ae.set(se,ye,ke,it),$.equals(ae)===!1&&(r.clearColor(se,ye,ke,it),$.copy(ae))},reset:function(){N=!1,te=null,$.set(-1,0,0,0)}}}function s(){let N=!1,ae=null,te=null,$=null;return{setTest:function(se){se?Le(r.DEPTH_TEST):Ze(r.DEPTH_TEST)},setMask:function(se){ae!==se&&!N&&(r.depthMask(se),ae=se)},setFunc:function(se){if(te!==se){switch(se){case gc:r.depthFunc(r.NEVER);break;case _c:r.depthFunc(r.ALWAYS);break;case vc:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case xc:r.depthFunc(r.EQUAL);break;case Mc:r.depthFunc(r.GEQUAL);break;case yc:r.depthFunc(r.GREATER);break;case Ec:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=se}},setLocked:function(se){N=se},setClear:function(se){$!==se&&(r.clearDepth(se),$=se)},reset:function(){N=!1,ae=null,te=null,$=null}}}function a(){let N=!1,ae=null,te=null,$=null,se=null,ye=null,ke=null,it=null,Ft=null;return{setTest:function(Ke){N||(Ke?Le(r.STENCIL_TEST):Ze(r.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!N&&(r.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,Et,jt){(te!==Ke||$!==Et||se!==jt)&&(r.stencilFunc(Ke,Et,jt),te=Ke,$=Et,se=jt)},setOp:function(Ke,Et,jt){(ye!==Ke||ke!==Et||it!==jt)&&(r.stencilOp(Ke,Et,jt),ye=Ke,ke=Et,it=jt)},setLocked:function(Ke){N=Ke},setClear:function(Ke){Ft!==Ke&&(r.clearStencil(Ke),Ft=Ke)},reset:function(){N=!1,ae=null,te=null,$=null,se=null,ye=null,ke=null,it=null,Ft=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,_=[],p=null,f=!1,v=null,x=null,y=null,T=null,R=null,w=null,B=null,S=new qe(0,0,0),A=0,G=!1,q=null,U=null,P=null,D=null,I=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=j>=2);let F=null,O={};const le=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),de=new mt().fromArray(le),Te=new mt().fromArray(he);function Oe(N,ae,te,$){const se=new Uint8Array(4),ye=r.createTexture();r.bindTexture(N,ye),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<te;ke++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(ae+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return ye}const Ae={};Ae[r.TEXTURE_2D]=Oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=Oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[r.TEXTURE_2D_ARRAY]=Oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=Oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(r.DEPTH_TEST),l.setFunc(Cs),Ne(!1),De(ao),Le(r.CULL_FACE),Ce(bn);function Le(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function Ze(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function Be(N,ae){return m[N]!==ae?(r.bindFramebuffer(N,ae),m[N]=ae,n&&(N===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ae),N===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function V(N,ae){let te=_,$=!1;if(N)if(te=g.get(ae),te===void 0&&(te=[],g.set(ae,te)),N.isWebGLMultipleRenderTargets){const se=N.texture;if(te.length!==se.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,ke=se.length;ye<ke;ye++)te[ye]=r.COLOR_ATTACHMENT0+ye;te.length=se.length,$=!0}}else te[0]!==r.COLOR_ATTACHMENT0&&(te[0]=r.COLOR_ATTACHMENT0,$=!0);else te[0]!==r.BACK&&(te[0]=r.BACK,$=!0);$&&(t.isWebGL2?r.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function vt(N){return p!==N?(r.useProgram(N),p=N,!0):!1}const Ee={[Bn]:r.FUNC_ADD,[tc]:r.FUNC_SUBTRACT,[nc]:r.FUNC_REVERSE_SUBTRACT};if(n)Ee[uo]=r.MIN,Ee[fo]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ee[uo]=N.MIN_EXT,Ee[fo]=N.MAX_EXT)}const Re={[ic]:r.ZERO,[sc]:r.ONE,[rc]:r.SRC_COLOR,[Dr]:r.SRC_ALPHA,[uc]:r.SRC_ALPHA_SATURATE,[cc]:r.DST_COLOR,[ac]:r.DST_ALPHA,[oc]:r.ONE_MINUS_SRC_COLOR,[Ir]:r.ONE_MINUS_SRC_ALPHA,[hc]:r.ONE_MINUS_DST_COLOR,[lc]:r.ONE_MINUS_DST_ALPHA,[dc]:r.CONSTANT_COLOR,[fc]:r.ONE_MINUS_CONSTANT_COLOR,[pc]:r.CONSTANT_ALPHA,[mc]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(N,ae,te,$,se,ye,ke,it,Ft,Ke){if(N===bn){f===!0&&(Ze(r.BLEND),f=!1);return}if(f===!1&&(Le(r.BLEND),f=!0),N!==ec){if(N!==v||Ke!==G){if((x!==Bn||R!==Bn)&&(r.blendEquation(r.FUNC_ADD),x=Bn,R=Bn),Ke)switch(N){case Mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lo:r.blendFunc(r.ONE,r.ONE);break;case co:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ho:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case co:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ho:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,T=null,w=null,B=null,S.set(0,0,0),A=0,v=N,G=Ke}return}se=se||ae,ye=ye||te,ke=ke||$,(ae!==x||se!==R)&&(r.blendEquationSeparate(Ee[ae],Ee[se]),x=ae,R=se),(te!==y||$!==T||ye!==w||ke!==B)&&(r.blendFuncSeparate(Re[te],Re[$],Re[ye],Re[ke]),y=te,T=$,w=ye,B=ke),(it.equals(S)===!1||Ft!==A)&&(r.blendColor(it.r,it.g,it.b,Ft),S.copy(it),A=Ft),v=N,G=!1}function Qe(N,ae){N.side===fn?Ze(r.CULL_FACE):Le(r.CULL_FACE);let te=N.side===Rt;ae&&(te=!te),Ne(te),N.blending===Mi&&N.transparent===!1?Ce(bn):Ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const $=N.stencilWrite;c.setTest($),$&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Le(r.SAMPLE_ALPHA_TO_COVERAGE):Ze(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){q!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),q=N)}function De(N){N!==$l?(Le(r.CULL_FACE),N!==U&&(N===ao?r.cullFace(r.BACK):N===Jl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ze(r.CULL_FACE),U=N}function Xe(N){N!==P&&(Z&&r.lineWidth(N),P=N)}function nt(N,ae,te){N?(Le(r.POLYGON_OFFSET_FILL),(D!==ae||I!==te)&&(r.polygonOffset(ae,te),D=ae,I=te)):Ze(r.POLYGON_OFFSET_FILL)}function dt(N){N?Le(r.SCISSOR_TEST):Ze(r.SCISSOR_TEST)}function C(N){N===void 0&&(N=r.TEXTURE0+W-1),F!==N&&(r.activeTexture(N),F=N)}function E(N,ae,te){te===void 0&&(F===null?te=r.TEXTURE0+W-1:te=F);let $=O[te];$===void 0&&($={type:void 0,texture:void 0},O[te]=$),($.type!==N||$.texture!==ae)&&(F!==te&&(r.activeTexture(te),F=te),r.bindTexture(N,ae||Ae[N]),$.type=N,$.texture=ae)}function k(){const N=O[F];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(N){de.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Se(N){Te.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Te.copy(N))}function _e(N,ae){let te=d.get(ae);te===void 0&&(te=new WeakMap,d.set(ae,te));let $=te.get(N);$===void 0&&($=r.getUniformBlockIndex(ae,N.name),te.set(N,$))}function pe(N,ae){const $=d.get(ae).get(N);h.get(ae)!==$&&(r.uniformBlockBinding(ae,$,N.__bindingPointIndex),h.set(ae,$))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},F=null,O={},m={},g=new WeakMap,_=[],p=null,f=!1,v=null,x=null,y=null,T=null,R=null,w=null,B=null,S=new qe(0,0,0),A=0,G=!1,q=null,U=null,P=null,D=null,I=null,de.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:Ze,bindFramebuffer:Be,drawBuffers:V,useProgram:vt,setBlending:Ce,setMaterial:Qe,setFlipSided:Ne,setCullFace:De,setLineWidth:Xe,setPolygonOffset:nt,setScissorTest:dt,activeTexture:C,bindTexture:E,unbindTexture:k,compressedTexImage2D:ne,compressedTexImage3D:ee,texImage2D:Q,texImage3D:be,updateUBOMapping:_e,uniformBlockBinding:pe,texStorage2D:L,texStorage3D:re,texSubImage2D:ie,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:xe,viewport:Se,reset:Ve}}function cm(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return f?new OffscreenCanvas(C,E):Us("canvas")}function x(C,E,k,ne){let ee=1;if((C.width>ne||C.height>ne)&&(ee=ne/Math.max(C.width,C.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=E?Ns:Math.floor,ve=ie(ee*C.width),oe=ie(ee*C.height);_===void 0&&(_=v(ve,oe));const ue=k?v(ve,oe):_;return ue.width=ve,ue.height=oe,ue.getContext("2d").drawImage(C,0,0,ve,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+oe+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return zr(C.width)&&zr(C.height)}function T(C){return o?!1:C.wrapS!==Xt||C.wrapT!==Xt||C.minFilter!==wt&&C.minFilter!==Bt}function R(C,E){return C.generateMipmaps&&E&&C.minFilter!==wt&&C.minFilter!==Bt}function w(C){r.generateMipmap(C)}function B(C,E,k,ne,ee=!1){if(o===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=E;if(E===r.RED&&(k===r.FLOAT&&(ie=r.R32F),k===r.HALF_FLOAT&&(ie=r.R16F),k===r.UNSIGNED_BYTE&&(ie=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ie=r.R8UI),k===r.UNSIGNED_SHORT&&(ie=r.R16UI),k===r.UNSIGNED_INT&&(ie=r.R32UI),k===r.BYTE&&(ie=r.R8I),k===r.SHORT&&(ie=r.R16I),k===r.INT&&(ie=r.R32I)),E===r.RG&&(k===r.FLOAT&&(ie=r.RG32F),k===r.HALF_FLOAT&&(ie=r.RG16F),k===r.UNSIGNED_BYTE&&(ie=r.RG8)),E===r.RGBA){const ve=ee?Ps:je.getTransfer(ne);k===r.FLOAT&&(ie=r.RGBA32F),k===r.HALF_FLOAT&&(ie=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ie=ve===Je?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(C,E,k){return R(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==wt&&C.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){return C===wt||C===po||C===js?r.NEAREST:r.LINEAR}function G(C){const E=C.target;E.removeEventListener("dispose",G),U(E),E.isVideoTexture&&g.delete(E)}function q(C){const E=C.target;E.removeEventListener("dispose",q),D(E)}function U(C){const E=n.get(C);if(E.__webglInit===void 0)return;const k=C.source,ne=p.get(k);if(ne){const ee=ne[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(ne).length===0&&p.delete(k)}n.remove(C)}function P(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const k=C.source,ne=p.get(k);delete ne[E.__cacheKey],a.memory.textures--}function D(C){const E=C.texture,k=n.get(C),ne=n.get(E);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let ie=0;ie<k.__webglFramebuffer[ee].length;ie++)r.deleteFramebuffer(k.__webglFramebuffer[ee][ie]);else r.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)r.deleteFramebuffer(k.__webglFramebuffer[ee]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const ve=n.get(E[ee]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(C)}let I=0;function W(){I=0}function Z(){const C=I;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),I+=1,C}function j(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function J(C,E){const k=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,C,E);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function F(C,E){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Le(k,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function O(C,E){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Le(k,C,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function le(C,E){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Ze(k,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const he={[Fr]:r.REPEAT,[Xt]:r.CLAMP_TO_EDGE,[Or]:r.MIRRORED_REPEAT},de={[wt]:r.NEAREST,[po]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[Bt]:r.LINEAR,[Pc]:r.LINEAR_MIPMAP_NEAREST,[Xi]:r.LINEAR_MIPMAP_LINEAR},Te={[kc]:r.NEVER,[Zc]:r.ALWAYS,[Wc]:r.LESS,[qc]:r.LEQUAL,[Xc]:r.EQUAL,[Kc]:r.GEQUAL,[Yc]:r.GREATER,[jc]:r.NOTEQUAL};function Oe(C,E,k){if(k?(r.texParameteri(C,r.TEXTURE_WRAP_S,he[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,he[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,he[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,de[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,de[E.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==Xt||E.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(E.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==wt&&E.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===wt||E.minFilter!==js&&E.minFilter!==Xi||E.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===qi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ae(C,E){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",G));const ne=E.source;let ee=p.get(ne);ee===void 0&&(ee={},p.set(ne,ee));const ie=j(E);if(ie!==C.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ie].usedTimes++;const ve=ee[C.__cacheKey];ve!==void 0&&(ee[C.__cacheKey].usedTimes--,ve.usedTimes===0&&P(E)),C.__cacheKey=ie,C.__webglTexture=ee[ie].texture}return k}function Le(C,E,k){let ne=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=r.TEXTURE_3D);const ee=Ae(C,E),ie=E.source;t.bindTexture(ne,C.__webglTexture,r.TEXTURE0+k);const ve=n.get(ie);if(ie.version!==ve.__version||ee===!0){t.activeTexture(r.TEXTURE0+k);const oe=je.getPrimaries(je.workingColorSpace),ue=E.colorSpace===zt?null:je.getPrimaries(E.colorSpace),L=E.colorSpace===zt||oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const re=T(E)&&y(E.image)===!1;let Q=x(E.image,re,!1,h);Q=dt(E,Q);const be=y(Q)||o,xe=s.convert(E.format,E.colorSpace);let Se=s.convert(E.type),_e=B(E.internalFormat,xe,Se,E.colorSpace,E.isVideoTexture);Oe(ne,E,be);let pe;const Ve=E.mipmaps,N=o&&E.isVideoTexture!==!0,ae=ve.__version===void 0||ee===!0,te=S(E,Q,be);if(E.isDepthTexture)_e=r.DEPTH_COMPONENT,o?E.type===Tn?_e=r.DEPTH_COMPONENT32F:E.type===Sn?_e=r.DEPTH_COMPONENT24:E.type===Vn?_e=r.DEPTH24_STENCIL8:_e=r.DEPTH_COMPONENT16:E.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===kn&&_e===r.DEPTH_COMPONENT&&E.type!==Vr&&E.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Sn,Se=s.convert(E.type)),E.format===Ti&&_e===r.DEPTH_COMPONENT&&(_e=r.DEPTH_STENCIL,E.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Vn,Se=s.convert(E.type))),ae&&(N?t.texStorage2D(r.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,_e,Q.width,Q.height,0,xe,Se,null));else if(E.isDataTexture)if(Ve.length>0&&be){N&&ae&&t.texStorage2D(r.TEXTURE_2D,te,_e,Ve[0].width,Ve[0].height);for(let $=0,se=Ve.length;$<se;$++)pe=Ve[$],N?t.texSubImage2D(r.TEXTURE_2D,$,0,0,pe.width,pe.height,xe,Se,pe.data):t.texImage2D(r.TEXTURE_2D,$,_e,pe.width,pe.height,0,xe,Se,pe.data);E.generateMipmaps=!1}else N?(ae&&t.texStorage2D(r.TEXTURE_2D,te,_e,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,xe,Se,Q.data)):t.texImage2D(r.TEXTURE_2D,0,_e,Q.width,Q.height,0,xe,Se,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,_e,Ve[0].width,Ve[0].height,Q.depth);for(let $=0,se=Ve.length;$<se;$++)pe=Ve[$],E.format!==qt?xe!==null?N?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,Q.depth,xe,pe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,_e,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,Q.depth,xe,Se,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,_e,pe.width,pe.height,Q.depth,0,xe,Se,pe.data)}else{N&&ae&&t.texStorage2D(r.TEXTURE_2D,te,_e,Ve[0].width,Ve[0].height);for(let $=0,se=Ve.length;$<se;$++)pe=Ve[$],E.format!==qt?xe!==null?N?t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,$,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(r.TEXTURE_2D,$,0,0,pe.width,pe.height,xe,Se,pe.data):t.texImage2D(r.TEXTURE_2D,$,_e,pe.width,pe.height,0,xe,Se,pe.data)}else if(E.isDataArrayTexture)N?(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,_e,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xe,Se,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,xe,Se,Q.data);else if(E.isData3DTexture)N?(ae&&t.texStorage3D(r.TEXTURE_3D,te,_e,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xe,Se,Q.data)):t.texImage3D(r.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,xe,Se,Q.data);else if(E.isFramebufferTexture){if(ae)if(N)t.texStorage2D(r.TEXTURE_2D,te,_e,Q.width,Q.height);else{let $=Q.width,se=Q.height;for(let ye=0;ye<te;ye++)t.texImage2D(r.TEXTURE_2D,ye,_e,$,se,0,xe,Se,null),$>>=1,se>>=1}}else if(Ve.length>0&&be){N&&ae&&t.texStorage2D(r.TEXTURE_2D,te,_e,Ve[0].width,Ve[0].height);for(let $=0,se=Ve.length;$<se;$++)pe=Ve[$],N?t.texSubImage2D(r.TEXTURE_2D,$,0,0,xe,Se,pe):t.texImage2D(r.TEXTURE_2D,$,_e,xe,Se,pe);E.generateMipmaps=!1}else N?(ae&&t.texStorage2D(r.TEXTURE_2D,te,_e,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Se,Q)):t.texImage2D(r.TEXTURE_2D,0,_e,xe,Se,Q);R(E,be)&&w(ne),ve.__version=ie.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ze(C,E,k){if(E.image.length!==6)return;const ne=Ae(C,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+k);const ve=je.getPrimaries(je.workingColorSpace),oe=E.colorSpace===zt?null:je.getPrimaries(E.colorSpace),ue=E.colorSpace===zt||ve===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const L=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!L&&!re?Q[$]=x(E.image[$],!1,!0,c):Q[$]=re?E.image[$].image:E.image[$],Q[$]=dt(E,Q[$]);const be=Q[0],xe=y(be)||o,Se=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),pe=B(E.internalFormat,Se,_e,E.colorSpace),Ve=o&&E.isVideoTexture!==!0,N=ie.__version===void 0||ne===!0;let ae=S(E,be,xe);Oe(r.TEXTURE_CUBE_MAP,E,xe);let te;if(L){Ve&&N&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,pe,be.width,be.height);for(let $=0;$<6;$++){te=Q[$].mipmaps;for(let se=0;se<te.length;se++){const ye=te[se];E.format!==qt?Se!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,ye.width,ye.height,Se,_e,ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,pe,ye.width,ye.height,0,Se,_e,ye.data)}}}else{te=E.mipmaps,Ve&&N&&(te.length>0&&ae++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,pe,Q[0].width,Q[0].height));for(let $=0;$<6;$++)if(re){Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Se,_e,Q[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,Q[$].width,Q[$].height,0,Se,_e,Q[$].data);for(let se=0;se<te.length;se++){const ke=te[se].image[$].image;Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,ke.width,ke.height,Se,_e,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,pe,ke.width,ke.height,0,Se,_e,ke.data)}}else{Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,_e,Q[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,Se,_e,Q[$]);for(let se=0;se<te.length;se++){const ye=te[se];Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,Se,_e,ye.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,pe,Se,_e,ye.image[$])}}}R(E,xe)&&w(r.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Be(C,E,k,ne,ee,ie){const ve=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),ue=B(k.internalFormat,ve,oe,k.colorSpace);if(!n.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>ie),Q=Math.max(1,E.height>>ie);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,ue,re,Q,E.depth,0,ve,oe,null):t.texImage2D(ee,ie,ue,re,Q,0,ve,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Xe(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,ee,n.get(k).__webglTexture,0,De(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,ee,n.get(k).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function V(C,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ne=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||Xe(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Tn?ne=r.DEPTH_COMPONENT32F:ee.type===Sn&&(ne=r.DEPTH_COMPONENT24));const ie=De(E);Xe(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,ne,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ne=De(E);k&&Xe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],ve=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),ue=B(ie.internalFormat,ve,oe,ie.colorSpace),L=De(E);k&&Xe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,L,ue,E.width,E.height):Xe(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L,ue,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ue,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,ee=De(E);if(E.depthTexture.format===kn)Xe(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Ti)Xe(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const E=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,C)}else if(k){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=r.createRenderbuffer(),V(E.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),V(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(C,E,k){const ne=n.get(C);E!==void 0&&Be(ne.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ee(C)}function Ce(C){const E=C.texture,k=n.get(C),ne=n.get(E);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=E.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,ve=y(C)||o;if(ee){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let ue=0;ue<E.mipmaps.length;ue++)k.__webglFramebuffer[oe][ue]=r.createFramebuffer()}else k.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)k.__webglFramebuffer[oe]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const oe=C.texture;for(let ue=0,L=oe.length;ue<L;ue++){const re=n.get(oe[ue]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Xe(C)===!1){const oe=ie?E:[E];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const L=oe[ue];k.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const re=s.convert(L.format,L.colorSpace),Q=s.convert(L.type),be=B(L.internalFormat,re,Q,L.colorSpace,C.isXRRenderTarget===!0),xe=De(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,be,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),V(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,E,ve);for(let oe=0;oe<6;oe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)Be(k.__webglFramebuffer[oe][ue],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Be(k.__webglFramebuffer[oe],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);R(E,ve)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=C.texture;for(let ue=0,L=oe.length;ue<L;ue++){const re=oe[ue],Q=n.get(re);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Oe(r.TEXTURE_2D,re,ve),Be(k.__webglFramebuffer,C,re,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),R(re,ve)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),Oe(oe,E,ve),o&&E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)Be(k.__webglFramebuffer[ue],C,E,r.COLOR_ATTACHMENT0,oe,ue);else Be(k.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,oe,0);R(E,ve)&&w(oe),t.unbindTexture()}C.depthBuffer&&Ee(C)}function Qe(C){const E=y(C)||o,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,ee=k.length;ne<ee;ne++){const ie=k[ne];if(R(ie,E)){const ve=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(ie).__webglTexture;t.bindTexture(ve,oe),w(ve),t.unbindTexture()}}}function Ne(C){if(o&&C.samples>0&&Xe(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,ne=C.height;let ee=r.COLOR_BUFFER_BIT;const ie=[],ve=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(C),ue=C.isWebGLMultipleRenderTargets===!0;if(ue)for(let L=0;L<E.length;L++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let L=0;L<E.length;L++){ie.push(r.COLOR_ATTACHMENT0+L),C.depthBuffer&&ie.push(ve);const re=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(re===!1&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[L]),re===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),ue){const Q=n.get(E[L]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,k,ne,0,0,k,ne,ee,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let L=0;L<E.length;L++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,oe.__webglColorRenderbuffer[L]);const re=n.get(E[L]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function De(C){return Math.min(d,C.samples)}function Xe(C){const E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function nt(C){const E=a.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function dt(C,E){const k=C.colorSpace,ne=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Br||k!==mn&&k!==zt&&(je.getTransfer(k)===Je?o===!1?e.has("EXT_sRGB")===!0&&ne===qt?(C.format=Br,C.minFilter=Bt,C.generateMipmaps=!1):E=dl.sRGBToLinear(E):(ne!==qt||ee!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=O,this.setTextureCube=le,this.rebindTextures=Re,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Xe}function hm(r,e,t){const n=t.isWebGL2;function i(s,a=zt){let o;const l=je.getTransfer(a);if(s===An)return r.UNSIGNED_BYTE;if(s===sl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rl)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lc)return r.BYTE;if(s===Dc)return r.SHORT;if(s===Vr)return r.UNSIGNED_SHORT;if(s===il)return r.INT;if(s===Sn)return r.UNSIGNED_INT;if(s===Tn)return r.FLOAT;if(s===qi)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ic)return r.ALPHA;if(s===qt)return r.RGBA;if(s===Nc)return r.LUMINANCE;if(s===Uc)return r.LUMINANCE_ALPHA;if(s===kn)return r.DEPTH_COMPONENT;if(s===Ti)return r.DEPTH_STENCIL;if(s===Br)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Fc)return r.RED;if(s===ol)return r.RED_INTEGER;if(s===Oc)return r.RG;if(s===al)return r.RG_INTEGER;if(s===ll)return r.RGBA_INTEGER;if(s===Ks||s===Zs||s===$s||s===Js)if(l===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$s)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mo||s===go||s===_o||s===vo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===go)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_o)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xo||s===Mo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xo)return l===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Mo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yo||s===Eo||s===So||s===To||s===bo||s===wo||s===Ao||s===Ro||s===Co||s===Po||s===Lo||s===Do||s===Io||s===No)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===yo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===So)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===To)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ao)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ro)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Co)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Po)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lo)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Do)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Io)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===No)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qs||s===Uo||s===Fo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Qs)return l===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zc||s===Oo||s===Bo||s===zo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Qs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Oo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vn?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class um extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fm extends Nt{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:kn,h!==kn&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===kn&&(n=Sn),n===void 0&&h===Ti&&(n=Vn),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pm extends Kn{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const v=[],x=[],y=new It;y.layers.enable(1),y.viewport=new mt;const T=new It;T.layers.enable(2),T.viewport=new mt;const R=[y,T],w=new um;w.layers.enable(1),w.layers.enable(2);let B=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=v[F];return O===void 0&&(O=new Er,v[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=v[F];return O===void 0&&(O=new Er,v[F]=O),O.getGripSpace()},this.getHand=function(F){let O=v[F];return O===void 0&&(O=new Er,v[F]=O),O.getHandSpace()};function A(F){const O=x.indexOf(F.inputSource);if(O===-1)return;const le=v[O];le!==void 0&&(le.update(F.inputSource,F.frame,c||a),le.dispatchEvent({type:F.type,data:F.inputSource}))}function G(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let F=0;F<v.length;F++){const O=x[F];O!==null&&(x[F]=null,v[F].disconnect(O))}B=null,S=null,e.setRenderTarget(p),m=null,u=null,d=null,i=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:m}),f=new qn(m.framebufferWidth,m.framebufferHeight,{format:qt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let O=null,le=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=_.stencil?Ti:kn,le=_.stencil?Vn:Sn);const de={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(de),i.updateRenderState({layers:[u]}),f=new qn(u.textureWidth,u.textureHeight,{format:qt,type:An,depthTexture:new fm(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(F){for(let O=0;O<F.removed.length;O++){const le=F.removed[O],he=x.indexOf(le);he>=0&&(x[he]=null,v[he].disconnect(le))}for(let O=0;O<F.added.length;O++){const le=F.added[O];let he=x.indexOf(le);if(he===-1){for(let Te=0;Te<v.length;Te++)if(Te>=x.length){x.push(le),he=Te;break}else if(x[Te]===null){x[Te]=le,he=Te;break}if(he===-1)break}const de=v[he];de&&de.connect(le)}}const U=new H,P=new H;function D(F,O,le){U.setFromMatrixPosition(O.matrixWorld),P.setFromMatrixPosition(le.matrixWorld);const he=U.distanceTo(P),de=O.projectionMatrix.elements,Te=le.projectionMatrix.elements,Oe=de[14]/(de[10]-1),Ae=de[14]/(de[10]+1),Le=(de[9]+1)/de[5],Ze=(de[9]-1)/de[5],Be=(de[8]-1)/de[0],V=(Te[8]+1)/Te[0],vt=Oe*Be,Ee=Oe*V,Re=he/(-Be+V),Ce=Re*-Be;O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ce),F.translateZ(Re),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Qe=Oe+Re,Ne=Ae+Re,De=vt-Ce,Xe=Ee+(he-Ce),nt=Le*Ae/Ne*Qe,dt=Ze*Ae/Ne*Qe;F.projectionMatrix.makePerspective(De,Xe,nt,dt,Qe,Ne),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function I(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;w.near=T.near=y.near=F.near,w.far=T.far=y.far=F.far,(B!==w.near||S!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,S=w.far);const O=F.parent,le=w.cameras;I(w,O);for(let he=0;he<le.length;he++)I(le[he],O);le.length===2?D(w,y,T):w.projectionMatrix.copy(y.projectionMatrix),W(F,w,O)};function W(F,O,le){le===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy(le.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=bi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let Z=null;function j(F,O){if(h=O.getViewerPose(c||a),g=O,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let he=!1;le.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let de=0;de<le.length;de++){const Te=le[de];let Oe=null;if(m!==null)Oe=m.getViewport(Te);else{const Le=d.getViewSubImage(u,Te);Oe=Le.viewport,de===0&&(e.setRenderTargetTextures(f,Le.colorTexture,u.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let Ae=R[de];Ae===void 0&&(Ae=new It,Ae.layers.enable(de),Ae.viewport=new mt,R[de]=Ae),Ae.matrix.fromArray(Te.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Te.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),de===0&&(w.matrix.copy(Ae.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(Ae)}}for(let le=0;le<v.length;le++){const he=x[le],de=v[le];he!==null&&de!==void 0&&de.update(he,O,c||a)}Z&&Z(F,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}const J=new Sl;J.setAnimationLoop(j),this.setAnimationLoop=function(F){Z=F},this.dispose=function(){}}}function mm(r,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ml(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Rt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Rt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gm(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(v,T);const R=e.render.frame;s[v.id]!==R&&(u(v),s[v.id]=R)}function h(v){const x=d();v.__bindingPointIndex=x;const y=r.createBuffer(),T=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,w=y.length;R<w;R++){const B=y[R];if(m(B,R,T)===!0){const S=B.__offset,A=Array.isArray(B.value)?B.value:[B.value];let G=0;for(let q=0;q<A.length;q++){const U=A[q],P=_(U);typeof U=="number"?(B.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,S+G,B.__data)):U.isMatrix3?(B.__data[0]=U.elements[0],B.__data[1]=U.elements[1],B.__data[2]=U.elements[2],B.__data[3]=U.elements[0],B.__data[4]=U.elements[3],B.__data[5]=U.elements[4],B.__data[6]=U.elements[5],B.__data[7]=U.elements[0],B.__data[8]=U.elements[6],B.__data[9]=U.elements[7],B.__data[10]=U.elements[8],B.__data[11]=U.elements[0]):(U.toArray(B.__data,G),G+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,B.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,x,y){const T=v.value;if(y[x]===void 0){if(typeof T=="number")y[x]=T;else{const R=Array.isArray(T)?T:[T],w=[];for(let B=0;B<R.length;B++)w.push(R[B].clone());y[x]=w}return!0}else if(typeof T=="number"){if(y[x]!==T)return y[x]=T,!0}else{const R=Array.isArray(y[x])?y[x]:[y[x]],w=Array.isArray(T)?T:[T];for(let B=0;B<R.length;B++){const S=R[B];if(S.equals(w[B])===!1)return S.copy(w[B]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const T=16;let R=0;for(let w=0,B=x.length;w<B;w++){const S=x[w],A={boundary:0,storage:0},G=Array.isArray(S.value)?S.value:[S.value];for(let q=0,U=G.length;q<U;q++){const P=G[q],D=_(P);A.boundary+=D.boundary,A.storage+=D.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,w>0){R=y%T;const q=T-R;R!==0&&q-A.boundary<0&&(y+=T-R,S.__offset=y)}y+=A.storage}return R=y%T,R>0&&(y+=T-R),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Rl{constructor(e={}){const{canvas:t=dh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const x=this;let y=!1,T=0,R=0,w=null,B=-1,S=null;const A=new mt,G=new mt;let q=null;const U=new qe(0);let P=0,D=t.width,I=t.height,W=1,Z=null,j=null;const J=new mt(0,0,D,I),F=new mt(0,0,D,I);let O=!1;const le=new Yr;let he=!1,de=!1,Te=null;const Oe=new ct,Ae=new Fe,Le=new H,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return w===null?W:1}let V=n;function vt(b,z){for(let X=0;X<b.length;X++){const Y=b[X],K=t.getContext(Y,z);if(K!==null)return K}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gr}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ae,!1),V===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),V=vt(z,b),V===null)throw vt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,Re,Ce,Qe,Ne,De,Xe,nt,dt,C,E,k,ne,ee,ie,ve,oe,ue,L,re,Q,be,xe,Se;function _e(){Ee=new wf(V),Re=new xf(V,Ee,e),Ee.init(Re),be=new hm(V,Ee,Re),Ce=new lm(V,Ee,Re),Qe=new Cf(V),Ne=new jp,De=new cm(V,Ee,Ce,Ne,Re,be,Qe),Xe=new yf(x),nt=new bf(x),dt=new Oh(V,Re),xe=new _f(V,Ee,dt,Re),C=new Af(V,dt,Qe,xe),E=new If(V,C,dt,Qe),L=new Df(V,Re,De),ve=new Mf(Ne),k=new Yp(x,Xe,nt,Ee,Re,xe,ve),ne=new mm(x,Ne),ee=new Zp,ie=new nm(Ee,Re),ue=new gf(x,Xe,nt,Ce,E,u,l),oe=new am(x,E,Re),Se=new gm(V,Qe,Re,Ce),re=new vf(V,Ee,Qe,Re),Q=new Rf(V,Ee,Qe,Re),Qe.programs=k.programs,x.capabilities=Re,x.extensions=Ee,x.properties=Ne,x.renderLists=ee,x.shadowMap=oe,x.state=Ce,x.info=Qe}_e();const pe=new pm(x,V);this.xr=pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(D,I,!1))},this.getSize=function(b){return b.set(D,I)},this.setSize=function(b,z,X=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,I=z,t.width=Math.floor(b*W),t.height=Math.floor(z*W),X===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(D*W,I*W).floor()},this.setDrawingBufferSize=function(b,z,X){D=b,I=z,W=X,t.width=Math.floor(b*X),t.height=Math.floor(z*X),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,z,X,Y){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,z,X,Y),Ce.viewport(A.copy(J).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(F)},this.setScissor=function(b,z,X,Y){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,z,X,Y),Ce.scissor(G.copy(F).multiplyScalar(W).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){Ce.setScissorTest(O=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(b=!0,z=!0,X=!0){let Y=0;if(b){let K=!1;if(w!==null){const fe=w.texture.format;K=fe===ll||fe===al||fe===ol}if(K){const fe=w.texture.type,Me=fe===An||fe===Sn||fe===Vr||fe===Vn||fe===sl||fe===rl,we=ue.getClearColor(),Pe=ue.getClearAlpha(),He=we.r,Ie=we.g,Ue=we.b;Me?(m[0]=He,m[1]=Ie,m[2]=Ue,m[3]=Pe,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=He,g[1]=Ie,g[2]=Ue,g[3]=Pe,V.clearBufferiv(V.COLOR,0,g))}else Y|=V.COLOR_BUFFER_BIT}z&&(Y|=V.DEPTH_BUFFER_BIT),X&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ee.dispose(),ie.dispose(),Ne.dispose(),Xe.dispose(),nt.dispose(),E.dispose(),xe.dispose(),Se.dispose(),k.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ft),pe.removeEventListener("sessionend",Ke),Te&&(Te.dispose(),Te=null),Et.stop()};function Ve(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Qe.autoReset,z=oe.enabled,X=oe.autoUpdate,Y=oe.needsUpdate,K=oe.type;_e(),Qe.autoReset=b,oe.enabled=z,oe.autoUpdate=X,oe.needsUpdate=Y,oe.type=K}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){const z=b.target;z.removeEventListener("dispose",te),$(z)}function $(b){se(b),Ne.remove(b)}function se(b){const z=Ne.get(b).programs;z!==void 0&&(z.forEach(function(X){k.releaseProgram(X)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,X,Y,K,fe){z===null&&(z=Ze);const Me=K.isMesh&&K.matrixWorld.determinant()<0,we=Gl(b,z,X,Y,K);Ce.setMaterial(Y,Me);let Pe=X.index,He=1;if(Y.wireframe===!0){if(Pe=C.getWireframeAttribute(X),Pe===void 0)return;He=2}const Ie=X.drawRange,Ue=X.attributes.position;let tt=Ie.start*He,Ct=(Ie.start+Ie.count)*He;fe!==null&&(tt=Math.max(tt,fe.start*He),Ct=Math.min(Ct,(fe.start+fe.count)*He)),Pe!==null?(tt=Math.max(tt,0),Ct=Math.min(Ct,Pe.count)):Ue!=null&&(tt=Math.max(tt,0),Ct=Math.min(Ct,Ue.count));const ft=Ct-tt;if(ft<0||ft===1/0)return;xe.setup(K,Y,we,X,Pe);let tn,et=re;if(Pe!==null&&(tn=dt.get(Pe),et=Q,et.setIndex(tn)),K.isMesh)Y.wireframe===!0?(Ce.setLineWidth(Y.wireframeLinewidth*Be()),et.setMode(V.LINES)):et.setMode(V.TRIANGLES);else if(K.isLine){let We=Y.linewidth;We===void 0&&(We=1),Ce.setLineWidth(We*Be()),K.isLineSegments?et.setMode(V.LINES):K.isLineLoop?et.setMode(V.LINE_LOOP):et.setMode(V.LINE_STRIP)}else K.isPoints?et.setMode(V.POINTS):K.isSprite&&et.setMode(V.TRIANGLES);if(K.isInstancedMesh)et.renderInstances(tt,ft,K.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ws=Math.min(X.instanceCount,We);et.renderInstances(tt,ft,Ws)}else et.render(tt,ft)};function ye(b,z,X){b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Rt,b.needsUpdate=!0,Ji(b,z,X),b.side=Rn,b.needsUpdate=!0,Ji(b,z,X),b.side=fn):Ji(b,z,X)}this.compile=function(b,z,X=null){X===null&&(X=b),p=ie.get(X),p.init(),v.push(p),X.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),b!==X&&b.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(x._useLegacyLights);const Y=new Set;return b.traverse(function(K){const fe=K.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const we=fe[Me];ye(we,X,K),Y.add(we)}else ye(fe,X,K),Y.add(fe)}),v.pop(),p=null,Y},this.compileAsync=function(b,z,X=null){const Y=this.compile(b,z,X);return new Promise(K=>{function fe(){if(Y.forEach(function(Me){Ne.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){K(b);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ke=null;function it(b){ke&&ke(b)}function Ft(){Et.stop()}function Ke(){Et.start()}const Et=new Sl;Et.setAnimationLoop(it),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(b){ke=b,pe.setAnimationLoop(b),b===null?Et.stop():Et.start()},pe.addEventListener("sessionstart",Ft),pe.addEventListener("sessionend",Ke),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,z,w),p=ie.get(b,v.length),p.init(),v.push(p),Oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),le.setFromProjectionMatrix(Oe),de=this.localClippingEnabled,he=ve.init(this.clippingPlanes,de),_=ee.get(b,f.length),_.init(),f.push(_),jt(b,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,j),this.info.render.frame++,he===!0&&ve.beginShadows();const X=p.state.shadowsArray;if(oe.render(X,b,z),he===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(_,b),p.setupLights(x._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let K=0,fe=Y.length;K<fe;K++){const Me=Y[K];to(_,b,Me,Me.viewport)}}else to(_,b,z);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,z),xe.resetDefaultState(),B=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function jt(b,z,X,Y){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||le.intersectsSprite(b)){Y&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Oe);const Me=E.update(b),we=b.material;we.visible&&_.push(b,Me,we,X,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||le.intersectsObject(b))){const Me=E.update(b),we=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Le.copy(Me.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(Oe)),Array.isArray(we)){const Pe=Me.groups;for(let He=0,Ie=Pe.length;He<Ie;He++){const Ue=Pe[He],tt=we[Ue.materialIndex];tt&&tt.visible&&_.push(b,Me,tt,X,Le.z,Ue)}}else we.visible&&_.push(b,Me,we,X,Le.z,null)}}const fe=b.children;for(let Me=0,we=fe.length;Me<we;Me++)jt(fe[Me],z,X,Y)}function to(b,z,X,Y){const K=b.opaque,fe=b.transmissive,Me=b.transparent;p.setupLightsView(X),he===!0&&ve.setGlobalState(x.clippingPlanes,X),fe.length>0&&Hl(K,fe,z,X),Y&&Ce.viewport(A.copy(Y)),K.length>0&&$i(K,z,X),fe.length>0&&$i(fe,z,X),Me.length>0&&$i(Me,z,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Hl(b,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const fe=Re.isWebGL2;Te===null&&(Te=new qn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?qi:An,minFilter:Xi,samples:fe?4:0})),x.getDrawingBufferSize(Ae),fe?Te.setSize(Ae.x,Ae.y):Te.setSize(Ns(Ae.x),Ns(Ae.y));const Me=x.getRenderTarget();x.setRenderTarget(Te),x.getClearColor(U),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=wn,$i(b,X,Y),De.updateMultisampleRenderTarget(Te),De.updateRenderTargetMipmap(Te);let Pe=!1;for(let He=0,Ie=z.length;He<Ie;He++){const Ue=z[He],tt=Ue.object,Ct=Ue.geometry,ft=Ue.material,tn=Ue.group;if(ft.side===fn&&tt.layers.test(Y.layers)){const et=ft.side;ft.side=Rt,ft.needsUpdate=!0,no(tt,X,Y,Ct,ft,tn),ft.side=et,ft.needsUpdate=!0,Pe=!0}}Pe===!0&&(De.updateMultisampleRenderTarget(Te),De.updateRenderTargetMipmap(Te)),x.setRenderTarget(Me),x.setClearColor(U,P),x.toneMapping=we}function $i(b,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let K=0,fe=b.length;K<fe;K++){const Me=b[K],we=Me.object,Pe=Me.geometry,He=Y===null?Me.material:Y,Ie=Me.group;we.layers.test(X.layers)&&no(we,z,X,Pe,He,Ie)}}function no(b,z,X,Y,K,fe){b.onBeforeRender(x,z,X,Y,K,fe),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(x,z,X,Y,b,fe),K.transparent===!0&&K.side===fn&&K.forceSinglePass===!1?(K.side=Rt,K.needsUpdate=!0,x.renderBufferDirect(X,z,Y,K,b,fe),K.side=Rn,K.needsUpdate=!0,x.renderBufferDirect(X,z,Y,K,b,fe),K.side=fn):x.renderBufferDirect(X,z,Y,K,b,fe),b.onAfterRender(x,z,X,Y,K,fe)}function Ji(b,z,X){z.isScene!==!0&&(z=Ze);const Y=Ne.get(b),K=p.state.lights,fe=p.state.shadowsArray,Me=K.state.version,we=k.getParameters(b,K.state,fe,z,X),Pe=k.getProgramCacheKey(we);let He=Y.programs;Y.environment=b.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(b.isMeshStandardMaterial?nt:Xe).get(b.envMap||Y.environment),He===void 0&&(b.addEventListener("dispose",te),He=new Map,Y.programs=He);let Ie=He.get(Pe);if(Ie!==void 0){if(Y.currentProgram===Ie&&Y.lightsStateVersion===Me)return so(b,we),Ie}else we.uniforms=k.getUniforms(b),b.onBuild(X,we,x),b.onBeforeCompile(we,x),Ie=k.acquireProgram(we,Pe),He.set(Pe,Ie),Y.uniforms=we.uniforms;const Ue=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=ve.uniform),so(b,we),Y.needsLights=kl(b),Y.lightsStateVersion=Me,Y.needsLights&&(Ue.ambientLightColor.value=K.state.ambient,Ue.lightProbe.value=K.state.probe,Ue.directionalLights.value=K.state.directional,Ue.directionalLightShadows.value=K.state.directionalShadow,Ue.spotLights.value=K.state.spot,Ue.spotLightShadows.value=K.state.spotShadow,Ue.rectAreaLights.value=K.state.rectArea,Ue.ltc_1.value=K.state.rectAreaLTC1,Ue.ltc_2.value=K.state.rectAreaLTC2,Ue.pointLights.value=K.state.point,Ue.pointLightShadows.value=K.state.pointShadow,Ue.hemisphereLights.value=K.state.hemi,Ue.directionalShadowMap.value=K.state.directionalShadowMap,Ue.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ue.spotShadowMap.value=K.state.spotShadowMap,Ue.spotLightMatrix.value=K.state.spotLightMatrix,Ue.spotLightMap.value=K.state.spotLightMap,Ue.pointShadowMap.value=K.state.pointShadowMap,Ue.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.currentProgram=Ie,Y.uniformsList=null,Ie}function io(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Rs.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function so(b,z){const X=Ne.get(b);X.outputColorSpace=z.outputColorSpace,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Gl(b,z,X,Y,K){z.isScene!==!0&&(z=Ze),De.resetTextureUnits();const fe=z.fog,Me=Y.isMeshStandardMaterial?z.environment:null,we=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mn,Pe=(Y.isMeshStandardMaterial?nt:Xe).get(Y.envMap||Me),He=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let ft=wn;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=x.toneMapping);const tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=tn!==void 0?tn.length:0,We=Ne.get(Y),Ws=p.state.lights;if(he===!0&&(de===!0||b!==S)){const Pt=b===S&&Y.id===B;ve.setState(Y,b,Pt)}let st=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ws.state.version||We.outputColorSpace!==we||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||K.isInstancedMesh&&We.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&We.instancingColor===!1&&K.instanceColor!==null||We.envMap!==Pe||Y.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Ie||We.morphTargets!==Ue||We.morphNormals!==tt||We.morphColors!==Ct||We.toneMapping!==ft||Re.isWebGL2===!0&&We.morphTargetsCount!==et)&&(st=!0):(st=!0,We.__version=Y.version);let Pn=We.currentProgram;st===!0&&(Pn=Ji(Y,z,K));let ro=!1,Li=!1,Xs=!1;const St=Pn.getUniforms(),Ln=We.uniforms;if(Ce.useProgram(Pn.program)&&(ro=!0,Li=!0,Xs=!0),Y.id!==B&&(B=Y.id,Li=!0),ro||S!==b){St.setValue(V,"projectionMatrix",b.projectionMatrix),St.setValue(V,"viewMatrix",b.matrixWorldInverse);const Pt=St.map.cameraPosition;Pt!==void 0&&Pt.setValue(V,Le.setFromMatrixPosition(b.matrixWorld)),Re.logarithmicDepthBuffer&&St.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Li=!0,Xs=!0)}if(K.isSkinnedMesh){St.setOptional(V,K,"bindMatrix"),St.setOptional(V,K,"bindMatrixInverse");const Pt=K.skeleton;Pt&&(Re.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),St.setValue(V,"boneTexture",Pt.boneTexture,De),St.setValue(V,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=X.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&Re.isWebGL2===!0)&&L.update(K,X,Pn),(Li||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,St.setValue(V,"receiveShadow",K.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ln.envMap.value=Pe,Ln.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Li&&(St.setValue(V,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Vl(Ln,Xs),fe&&Y.fog===!0&&ne.refreshFogUniforms(Ln,fe),ne.refreshMaterialUniforms(Ln,Y,W,I,Te),Rs.upload(V,io(We),Ln,De)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rs.upload(V,io(We),Ln,De),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(V,"center",K.center),St.setValue(V,"modelViewMatrix",K.modelViewMatrix),St.setValue(V,"normalMatrix",K.normalMatrix),St.setValue(V,"modelMatrix",K.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Pt=Y.uniformsGroups;for(let Ys=0,Wl=Pt.length;Ys<Wl;Ys++)if(Re.isWebGL2){const oo=Pt[Ys];Se.update(oo,Pn),Se.bind(oo,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Vl(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function kl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,z,X){Ne.get(b.texture).__webglTexture=z,Ne.get(b.depthTexture).__webglTexture=X;const Y=Ne.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const X=Ne.get(b);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,X=0){w=b,T=z,R=X;let Y=!0,K=null,fe=!1,Me=!1;if(b){const Pe=Ne.get(b);Pe.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):Pe.__webglFramebuffer===void 0?De.setupRenderTarget(b):Pe.__hasExternalTextures&&De.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ie=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[z])?K=Ie[z][X]:K=Ie[z],fe=!0):Re.isWebGL2&&b.samples>0&&De.useMultisampledRTT(b)===!1?K=Ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?K=Ie[X]:K=Ie,A.copy(b.viewport),G.copy(b.scissor),q=b.scissorTest}else A.copy(J).multiplyScalar(W).floor(),G.copy(F).multiplyScalar(W).floor(),q=O;if(Ce.bindFramebuffer(V.FRAMEBUFFER,K)&&Re.drawBuffers&&Y&&Ce.drawBuffers(b,K),Ce.viewport(A),Ce.scissor(G),Ce.setScissorTest(q),fe){const Pe=Ne.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,X)}else if(Me){const Pe=Ne.get(b.texture),He=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.__webglTexture,X||0,He)}B=-1},this.readRenderTargetPixels=function(b,z,X,Y,K,fe,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){Ce.bindFramebuffer(V.FRAMEBUFFER,we);try{const Pe=b.texture,He=Pe.format,Ie=Pe.type;if(He!==qt&&be.convert(He)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ie===qi&&(Ee.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==An&&be.convert(Ie)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Tn&&(Re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-Y&&X>=0&&X<=b.height-K&&V.readPixels(z,X,Y,K,be.convert(He),be.convert(Ie),fe)}finally{const Pe=w!==null?Ne.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,z,X=0){const Y=Math.pow(2,-X),K=Math.floor(z.image.width*Y),fe=Math.floor(z.image.height*Y);De.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,b.x,b.y,K,fe),Ce.unbindTexture()},this.copyTextureToTexture=function(b,z,X,Y=0){const K=z.image.width,fe=z.image.height,Me=be.convert(X.format),we=be.convert(X.type);De.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,b.x,b.y,K,fe,Me,we,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,b.x,b.y,Me,we,z.image),Y===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,z,X,Y,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,we=b.max.z-b.min.z+1,Pe=be.convert(Y.format),He=be.convert(Y.type);let Ie;if(Y.isData3DTexture)De.setTexture3D(Y,0),Ie=V.TEXTURE_3D;else if(Y.isDataArrayTexture)De.setTexture2DArray(Y,0),Ie=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ue=V.getParameter(V.UNPACK_ROW_LENGTH),tt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ct=V.getParameter(V.UNPACK_SKIP_PIXELS),ft=V.getParameter(V.UNPACK_SKIP_ROWS),tn=V.getParameter(V.UNPACK_SKIP_IMAGES),et=X.isCompressedTexture?X.mipmaps[0]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,et.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,et.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,b.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Ie,K,z.x,z.y,z.z,fe,Me,we,Pe,He,et.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ie,K,z.x,z.y,z.z,fe,Me,we,Pe,et.data)):V.texSubImage3D(Ie,K,z.x,z.y,z.z,fe,Me,we,Pe,He,et),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ue),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,tt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ct),V.pixelStorei(V.UNPACK_SKIP_ROWS,ft),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tn),K===0&&Y.generateMipmaps&&V.generateMipmap(Ie),Ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?De.setTextureCube(b,0):b.isData3DTexture?De.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?De.setTexture2DArray(b,0):De.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){T=0,R=0,w=null,Ce.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kr?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Bs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Wn:cl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?gt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _m extends Rl{}_m.prototype.isWebGL1Renderer=!0;class vm extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xm extends ji{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Zr extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Mm extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sr=new ct,Ra=new H,Ca=new H;class ym{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ra.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ra),Ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ca),t.updateMatrixWorld(),Sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Em extends ym{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sm extends Zr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Em}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tm extends Zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gr);const La={type:"change"},Tr={type:"start"},Da={type:"end"},Es=new ml,Ia=new En,bm=Math.cos(70*uh.DEG2RAD);class wm extends Kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",E),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(La),n.update(),s=i.NONE},this.update=function(){const L=new H,re=new Yn().setFromUnitVectors(e.up,new H(0,1,0)),Q=re.clone().invert(),be=new H,xe=new Yn,Se=new H,_e=2*Math.PI;return function(Ve=null){const N=n.object.position;L.copy(N).sub(n.target),L.applyQuaternion(re),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&G(S(Ve)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ae=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(ae)&&isFinite(te)&&(ae<-Math.PI?ae+=_e:ae>Math.PI&&(ae-=_e),te<-Math.PI?te+=_e:te>Math.PI&&(te-=_e),ae<=te?o.theta=Math.max(ae,Math.min(te,o.theta)):o.theta=o.theta>(ae+te)/2?Math.max(ae,o.theta):Math.min(te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=j(o.radius):o.radius=j(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Q),N.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let $=!1;if(n.zoomToCursor&&R){let se=null;if(n.object.isPerspectiveCamera){const ye=L.length();se=j(ye*c);const ke=ye-se;n.object.position.addScaledVector(y,ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ye=new H(T.x,T.y,0);ye.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$=!0;const ke=new H(T.x,T.y,0);ke.unproject(n.object),n.object.position.sub(ke).add(ye),n.object.updateMatrixWorld(),se=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(se).add(n.object.position):(Es.origin.copy(n.object.position),Es.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Es.direction))<bm?e.lookAt(n.target):(Ia.setFromNormalAndCoplanarPoint(n.object.up,n.target),Es.intersectPlane(Ia,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$=!0);return c=1,R=!1,$||be.distanceToSquared(n.object.position)>a||8*(1-xe.dot(n.object.quaternion))>a||Se.distanceToSquared(n.target)>0?(n.dispatchEvent(La),be.copy(n.object.position),xe.copy(n.object.quaternion),Se.copy(n.target),$=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",Ne),n.domElement.removeEventListener("pointercancel",Xe),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Pa,l=new Pa;let c=1;const h=new H,d=new Fe,u=new Fe,m=new Fe,g=new Fe,_=new Fe,p=new Fe,f=new Fe,v=new Fe,x=new Fe,y=new H,T=new Fe;let R=!1;const w=[],B={};function S(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function G(L){l.theta-=L}function q(L){l.phi-=L}const U=function(){const L=new H;return function(Q,be){L.setFromMatrixColumn(be,0),L.multiplyScalar(-Q),h.add(L)}}(),P=function(){const L=new H;return function(Q,be){n.screenSpacePanning===!0?L.setFromMatrixColumn(be,1):(L.setFromMatrixColumn(be,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Q),h.add(L)}}(),D=function(){const L=new H;return function(Q,be){const xe=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;L.copy(Se).sub(n.target);let _e=L.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),U(2*Q*_e/xe.clientHeight,n.object.matrix),P(2*be*_e/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(Q*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),P(be*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(L){if(!n.zoomToCursor)return;R=!0;const re=n.domElement.getBoundingClientRect(),Q=L.clientX-re.left,be=L.clientY-re.top,xe=re.width,Se=re.height;T.x=Q/xe*2-1,T.y=-(be/Se)*2+1,y.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function J(L){d.set(L.clientX,L.clientY)}function F(L){Z(L),f.set(L.clientX,L.clientY)}function O(L){g.set(L.clientX,L.clientY)}function le(L){u.set(L.clientX,L.clientY),m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;G(2*Math.PI*m.x/re.clientHeight),q(2*Math.PI*m.y/re.clientHeight),d.copy(u),n.update()}function he(L){v.set(L.clientX,L.clientY),x.subVectors(v,f),x.y>0?I(A()):x.y<0&&W(A()),f.copy(v),n.update()}function de(L){_.set(L.clientX,L.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(_),n.update()}function Te(L){Z(L),L.deltaY<0?W(A()):L.deltaY>0&&I(A()),n.update()}function Oe(L){let re=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),re=!0;break}re&&(L.preventDefault(),n.update())}function Ae(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),re=.5*(w[0].pageY+w[1].pageY);d.set(L,re)}}function Le(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),re=.5*(w[0].pageY+w[1].pageY);g.set(L,re)}}function Ze(){const L=w[0].pageX-w[1].pageX,re=w[0].pageY-w[1].pageY,Q=Math.sqrt(L*L+re*re);f.set(0,Q)}function Be(){n.enableZoom&&Ze(),n.enablePan&&Le()}function V(){n.enableZoom&&Ze(),n.enableRotate&&Ae()}function vt(L){if(w.length==1)u.set(L.pageX,L.pageY);else{const Q=ue(L),be=.5*(L.pageX+Q.x),xe=.5*(L.pageY+Q.y);u.set(be,xe)}m.subVectors(u,d).multiplyScalar(n.rotateSpeed);const re=n.domElement;G(2*Math.PI*m.x/re.clientHeight),q(2*Math.PI*m.y/re.clientHeight),d.copy(u)}function Ee(L){if(w.length===1)_.set(L.pageX,L.pageY);else{const re=ue(L),Q=.5*(L.pageX+re.x),be=.5*(L.pageY+re.y);_.set(Q,be)}p.subVectors(_,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(_)}function Re(L){const re=ue(L),Q=L.pageX-re.x,be=L.pageY-re.y,xe=Math.sqrt(Q*Q+be*be);v.set(0,xe),x.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),I(x.y),f.copy(v)}function Ce(L){n.enableZoom&&Re(L),n.enablePan&&Ee(L)}function Qe(L){n.enableZoom&&Re(L),n.enableRotate&&vt(L)}function Ne(L){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",De),n.domElement.addEventListener("pointerup",Xe)),ie(L),L.pointerType==="touch"?k(L):nt(L))}function De(L){n.enabled!==!1&&(L.pointerType==="touch"?ne(L):dt(L))}function Xe(L){ve(L),w.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(Da),s=i.NONE}function nt(L){let re;switch(L.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Jn.DOLLY:if(n.enableZoom===!1)return;F(L),s=i.DOLLY;break;case Jn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;O(L),s=i.PAN}else{if(n.enableRotate===!1)return;J(L),s=i.ROTATE}break;case Jn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),s=i.ROTATE}else{if(n.enablePan===!1)return;O(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Tr)}function dt(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;le(L);break;case i.DOLLY:if(n.enableZoom===!1)return;he(L);break;case i.PAN:if(n.enablePan===!1)return;de(L);break}}function C(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Tr),Te(L),n.dispatchEvent(Da))}function E(L){n.enabled===!1||n.enablePan===!1||Oe(L)}function k(L){switch(oe(L),w.length){case 1:switch(n.touches.ONE){case Qn.ROTATE:if(n.enableRotate===!1)return;Ae(),s=i.TOUCH_ROTATE;break;case Qn.PAN:if(n.enablePan===!1)return;Le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(),s=i.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Tr)}function ne(L){switch(oe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;vt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ee(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qe(L),n.update();break;default:s=i.NONE}}function ee(L){n.enabled!==!1&&L.preventDefault()}function ie(L){w.push(L)}function ve(L){delete B[L.pointerId];for(let re=0;re<w.length;re++)if(w[re].pointerId==L.pointerId){w.splice(re,1);return}}function oe(L){let re=B[L.pointerId];re===void 0&&(re=new Fe,B[L.pointerId]=re),re.set(L.pageX,L.pageY)}function ue(L){const re=L.pointerId===w[0].pointerId?w[1]:w[0];return B[re.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",Ne),n.domElement.addEventListener("pointercancel",Xe),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}class Yt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,a=e.z;return t.x=n[0]*i+n[1]*s+n[2]*a,t.y=n[3]*i+n[4]*s+n[5]*a,t.z=n[6]*i+n[7]*s+n[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Yt);const n=this.elements,i=e.elements,s=t.elements,a=n[0],o=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],_=i[0],p=i[1],f=i[2],v=i[3],x=i[4],y=i[5],T=i[6],R=i[7],w=i[8];return s[0]=a*_+o*v+l*T,s[1]=a*p+o*x+l*R,s[2]=a*f+o*y+l*w,s[3]=c*_+h*v+d*T,s[4]=c*p+h*x+d*R,s[5]=c*f+h*y+d*w,s[6]=u*_+m*v+g*T,s[7]=u*p+m*x+g*R,s[8]=u*f+m*y+g*w,t}scale(e,t){t===void 0&&(t=new Yt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let a,o;for(a=0;a<n*i;a++)s.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)s[a+i*o]=this.elements[a+3*o];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(a=c-l,s[a+i*a]===0){for(o=a+1;o<c;o++)if(s[a+i*o]!==0){h=d;do u=d-h,s[u+i*a]+=s[u+i*o];while(--h);break}}if(s[a+i*a]!==0)for(o=a+1;o<c;o++){const m=s[a+i*o]/s[a+i*a];h=d;do u=d-h,s[u+i*o]=u<=a?0:s[u+i*o]-s[u+i*a]*m;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Yt);const t=3,n=6,i=Am;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)i[s+n*a]=this.elements[s+3*a];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const h=n;let d;do{if(s=l-o,i[s+n*s]===0){for(a=s+1;a<l;a++)if(i[s+n*a]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*a];while(--c);break}}if(i[s+n*s]!==0)for(a=s+1;a<l;a++){const u=i[s+n*a]/i[s+n*s];c=h;do d=h-c,i[d+n*a]=d<=s?0:i[d+n*a]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{a=s-1;do{const u=i[s+n*a]/i[s+n*s];c=n;do d=n-c,i[d+n*a]=i[d+n*a]-i[d+n*s]*u;while(--c)}while(a--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{a=2;do{if(d=i[t+a+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,d)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,a=t+t,o=n+n,l=i+i,c=t*a,h=t*o,d=t*l,u=n*o,m=n*l,g=i*l,_=s*a,p=s*o,f=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-f,v[3*0+2]=d+p,v[3*1+0]=h+f,v[3*1+1]=1-(c+g),v[3*1+2]=m-_,v[3*2+0]=d-p,v[3*2+1]=m+_,v[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new Yt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Am=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,a=this.x,o=this.y,l=this.z;return t.x=o*s-l*i,t.y=l*n-a*s,t.z=a*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Yt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(a-n)*(a-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z;return(s-t)*(s-t)+(a-n)*(a-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Rm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const a=Cm;Math.abs(i.x)<.9?(a.set(1,0,0),i.cross(a,e)):(a.set(0,1,0),i.cross(a,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,a=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Na),Na.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Rm=new M,Cm=new M,Na=new M;class Ut{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,a=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),a.copy(s);for(let l=1;l<e.length;l++){let c=e[l];o&&(o.vmult(c,Ua),c=Ua),c.x>a.x&&(a.x=c.x),c.x<s.x&&(s.x=c.x),c.y>a.y&&(a.y=c.y),c.y<s.y&&(s.y=c.y),c.z>a.z&&(a.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(a,a)),i&&(s.x-=i,s.y-=i,s.z-=i,a.x+=i,a.y+=i,a.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ut().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,a=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return a&&o&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,a,o,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),a.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=Fa,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,a,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];e.pointToLocal(m,m)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Fa,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,a,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];e.pointToWorld(m,m)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,a=1/t.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*a,u=(this.upperBound.z-n.z)*a,m=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const Ua=new M,Fa=[new M,new M,new M,new M,new M,new M,new M,new M];class Oa{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const a=s;s=i,i=a}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Cl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class at{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Pm,i=Lm;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new at);const n=this.x,i=this.y,s=this.z,a=this.w,o=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+a*o+i*c-s*l,t.y=i*h+a*l+s*o-n*c,t.z=s*h+a*c+n*l-i*o,t.w=a*h-n*o-i*l-s*c,t}inverse(e){e===void 0&&(e=new at);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const a=1/(t*t+n*n+i*i+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new at),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,a=this.x,o=this.y,l=this.z,c=this.w,h=c*n+o*s-l*i,d=c*i+l*n-a*s,u=c*s+a*i-o*n,m=-a*n-o*i-l*s;return t.x=h*c+m*-a+d*-l-u*-o,t.y=d*c+m*-o+u*-a-h*-l,t.z=u*c+m*-l+h*-o-d*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const a=this.x,o=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=a*o+l*c;if(h>.499&&(n=2*Math.atan2(a,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(a,c),i=-Math.PI/2,s=0),n===void 0){const d=a*a,u=o*o,m=l*l;n=Math.atan2(2*o*c-2*a*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*a*c-2*o*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*a*o+s*c*h,this.y=s*c*o-l*a*h,this.z=s*a*h+l*c*o,this.w=s*a*o-l*c*h):i==="YXZ"?(this.x=l*a*o+s*c*h,this.y=s*c*o-l*a*h,this.z=s*a*h-l*c*o,this.w=s*a*o+l*c*h):i==="ZXY"?(this.x=l*a*o-s*c*h,this.y=s*c*o+l*a*h,this.z=s*a*h+l*c*o,this.w=s*a*o-l*c*h):i==="ZYX"?(this.x=l*a*o-s*c*h,this.y=s*c*o+l*a*h,this.z=s*a*h-l*c*o,this.w=s*a*o+l*c*h):i==="YZX"?(this.x=l*a*o+s*c*h,this.y=s*c*o+l*a*h,this.z=s*a*h-l*c*o,this.w=s*a*o-l*c*h):i==="XZY"&&(this.x=l*a*o-s*c*h,this.y=s*c*o-l*a*h,this.z=s*a*h+l*c*o,this.w=s*a*o+l*c*h),this}clone(){return new at(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new at);const i=this.x,s=this.y,a=this.z,o=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,m,g,_,p;return m=i*l+s*c+a*h+o*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),_=Math.sin((1-t)*u)/g,p=Math.sin(t*u)/g):(_=1-t,p=t),n.x=_*i+p*l,n.y=_*s+p*c,n.z=_*a+p*h,n.w=_*o+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new at);const s=e.x*n.x,a=e.y*n.y,o=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+a*h-o*c),i.y+=u*(a*d+o*l-s*h),i.z+=u*(o*d+s*c-a*l),i.w+=u*(-s*l-a*c-o*h),i}}const Pm=new M,Lm=new M,Dm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ge{constructor(e){e===void 0&&(e={}),this.id=ge.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ge.idCounter=0;ge.types=Dm;class Ye{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new at,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ye.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ye.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Ba),Ba.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Ba=new at;class Wi extends ge{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:a}=e;super({type:ge.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const a=e[s],o=a.length;for(let l=0;l!==o;l++){const c=(l+1)%o;t[a[l]].vsub(t[a[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],a=this.vertices[n[2]];Wi.computeNormal(i,s,a,t)}static computeNormal(e,t,n,i){const s=new M,a=new M;t.vsub(e,a),n.vsub(t,s),s.cross(a,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,a,o,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(a);_>u&&(u=_,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],p=new M;p.copy(_),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(a,e,t,m,o,l,c)}findSeparatingAxis(e,t,n,i,s,a,o,l){const c=new M,h=new M,d=new M,u=new M,m=new M,g=new M;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let f=0;f!==p.uniqueAxes.length;f++){n.vmult(p.uniqueAxes[f],c);const v=p.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,a.copy(c))}else{const f=o?o.length:p.faces.length;for(let v=0;v<f;v++){const x=o?o[v]:v;c.copy(p.faceNormals[x]),n.vmult(c,c);const y=p.testSepAxis(c,e,t,n,i,s);if(y===!1)return!1;y<_&&(_=y,a.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],h);const v=p.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,a.copy(h))}else{const f=l?l.length:e.faces.length;for(let v=0;v<f;v++){const x=l?l[v]:v;h.copy(e.faceNormals[x]),s.vmult(h,h);const y=p.testSepAxis(h,e,t,n,i,s);if(y===!1)return!1;y<_&&(_=y,a.copy(h))}}for(let f=0;f!==p.uniqueEdges.length;f++){n.vmult(p.uniqueEdges[f],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,a.copy(g))}}return i.vsub(t,d),d.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,n,i,s,a){const o=this;Wi.project(o,e,n,i,br),Wi.project(t,e,s,a,wr);const l=br[0],c=br[1],h=wr[0],d=wr[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,a=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*a*2*a+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,a,o){const l=new M,c=new M,h=new M,d=new M,u=new M,m=new M,g=new M,_=new M,p=this,f=[],v=i,x=f;let y=-1,T=Number.MAX_VALUE;for(let A=0;A<p.faces.length;A++){l.copy(p.faceNormals[A]),n.vmult(l,l);const G=l.dot(e);G<T&&(T=G,y=A)}if(y<0)return;const R=p.faces[y];R.connectedFaces=[];for(let A=0;A<p.faces.length;A++)for(let G=0;G<p.faces[A].length;G++)R.indexOf(p.faces[A][G])!==-1&&A!==y&&R.connectedFaces.indexOf(A)===-1&&R.connectedFaces.push(A);const w=R.length;for(let A=0;A<w;A++){const G=p.vertices[R[A]],q=p.vertices[R[(A+1)%w]];G.vsub(q,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(G),n.vmult(m,m),t.vadd(m,m);const U=R.connectedFaces[A];g.copy(this.faceNormals[U]);const P=this.getPlaneConstantOfFace(U);_.copy(g),n.vmult(_,_);const D=P-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,D);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[y]);const B=this.getPlaneConstantOfFace(y);_.copy(g),n.vmult(_,_);const S=B-_.dot(t);for(let A=0;A<v.length;A++){let G=_.dot(v[A])+S;if(G<=s&&(console.log(`clamped: depth=${G} to minDist=${s}`),G=s),G<=a){const q=v[A];if(G<=1e-6){const U={point:q,normal:_,depth:G};o.push(U)}}}}clipFaceAgainstPlane(e,t,n,i){let s,a;const o=e.length;if(o<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<o;h++){if(c=e[h],a=n.dot(c)+i,s<0)if(a<0){const d=new M;d.copy(c),t.push(d)}else{const d=new M;l.lerp(c,s/(s-a),d),t.push(d)}else if(a<0){const d=new M;l.lerp(c,s/(s-a),d),t.push(d),t.push(c)}l=c,s=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let a,o,l,c,h,d,u=new M;for(let m=0;m<s.length;m++){u.copy(s[m]),t.vmult(u,u),e.vadd(u,u);const g=u;(a===void 0||g.x<a)&&(a=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(a,o,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const a=i[s];t.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];t.vmult(a,a)}}if(e)for(let s=0;s<n;s++){const a=i[s];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,a=new M;this.getAveragePointLocal(a);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=t[n[o][0]],h=new M;e.vsub(c,h);const d=l.dot(h),u=new M;a.vsub(c,u);const m=l.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(e,t,n,i,s){const a=e.vertices.length,o=Im;let l=0,c=0;const h=Nm,d=e.vertices;h.setZero(),Ye.vectorToLocalFrame(n,i,t,o),Ye.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let m=1;m<a;m++){const g=d[m].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const br=[],wr=[];new M;const Im=new M,Nm=new M;class Ki extends ge{constructor(e){super({type:ge.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Wi({vertices:s,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),Ki.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let a=0;a<s.length;a++)yn.set(s[a][0],s[a][1],s[a][2]),t.vmult(yn,yn),e.vadd(yn,yn),n(yn.x,yn.y,yn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Kt[0].set(s.x,s.y,s.z),Kt[1].set(-s.x,s.y,s.z),Kt[2].set(-s.x,-s.y,s.z),Kt[3].set(-s.x,-s.y,-s.z),Kt[4].set(s.x,-s.y,-s.z),Kt[5].set(s.x,s.y,-s.z),Kt[6].set(-s.x,s.y,-s.z),Kt[7].set(s.x,-s.y,s.z);const a=Kt[0];t.vmult(a,a),e.vadd(a,a),i.copy(a),n.copy(a);for(let o=1;o<8;o++){const l=Kt[o];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const yn=new M,Kt=[new M,new M,new M,new M,new M,new M,new M,new M],$r={DYNAMIC:1,STATIC:2,KINEMATIC:4},Jr={AWAKE:0,SLEEPY:1,SLEEPING:2};class me extends Cl{constructor(e){e===void 0&&(e={}),super(),this.id=me.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?me.STATIC:me.DYNAMIC,typeof e.type==typeof me.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=me.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new at,this.initQuaternion=new at,this.previousQuaternion=new at,this.interpolatedQuaternion=new at,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Yt,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Yt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ut,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=me.AWAKE,this.wakeUpAfterNarrowphase=!1,e===me.SLEEPING&&this.dispatchEvent(me.wakeupEvent)}sleep(){this.sleepState=me.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===me.AWAKE&&n<i?(this.sleepState=me.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(me.sleepyEvent)):t===me.SLEEPY&&n>i?this.wakeUp():t===me.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(me.sleepEvent))}}updateSolveMassProperties(){this.sleepState===me.SLEEPING||this.type===me.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new at;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const a=e[s];a.updateBoundingSphereRadius();const o=t[s].length(),l=a.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Um,a=Fm,o=this.quaternion,l=this.aabb,c=Om;for(let h=0;h!==i;h++){const d=e[h];o.vmult(t[h],s),s.vadd(this.position,s),o.mult(n[h],a),d.calculateWorldAABB(s,a,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Bm,i=zm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;this.sleepState===me.SLEEPING&&this.wakeUp();const n=Hm;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;const n=Gm,i=Vm;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===me.DYNAMIC&&(this.sleepState===me.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;this.sleepState===me.SLEEPING&&this.wakeUp();const n=t,i=km;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Wm;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;const n=Xm,i=qm;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Ym;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ki.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===me.DYNAMIC||this.type===me.KINEMATIC)||this.sleepState===me.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,a=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*e;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,_=this.angularFactor,p=l.x*_.x,f=l.y*_.y,v=l.z*_.z;s.x+=e*(g[0]*p+g[1]*f+g[2]*v),s.y+=e*(g[3]*p+g[4]*f+g[5]*v),s.z+=e*(g[6]*p+g[7]*f+g[8]*v),a.x+=i.x*e,a.y+=i.y*e,a.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}me.idCounter=0;me.COLLIDE_EVENT_NAME="collide";me.DYNAMIC=$r.DYNAMIC;me.STATIC=$r.STATIC;me.KINEMATIC=$r.KINEMATIC;me.AWAKE=Jr.AWAKE;me.SLEEPY=Jr.SLEEPY;me.SLEEPING=Jr.SLEEPING;me.wakeupEvent={type:"wakeup"};me.sleepyEvent={type:"sleepy"};me.sleepEvent={type:"sleep"};const Um=new M,Fm=new at,Om=new Ut,Bm=new Yt,zm=new Yt;new Yt;const Hm=new M,Gm=new M,Vm=new M,km=new M,Wm=new M,Xm=new M,qm=new M,Ym=new M;class jm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&me.STATIC||e.sleepState===me.SLEEPING)&&(t.type&me.STATIC||t.sleepState===me.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Km;t.position.vsub(e.position,s);const a=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<a&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Zm,i=$m,s=Jm,a=e.length;for(let o=0;o!==a;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==a;o++){const l=i[o].id,c=s[o].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Km=new M;new M;new at;new M;const Zm={keys:[]},$m=[],Jm=[];new M;new M;new M;class Qm extends jm{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let a,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)a=i[l],o=i[c],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Fs{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=a,this.distance=o}}let Pl,Ll,Dl,Il,Nl,Ul,Fl;const Qr={CLOSEST:1,ANY:2,ALL:4};Pl=ge.types.SPHERE;Ll=ge.types.PLANE;Dl=ge.types.BOX;Il=ge.types.CYLINDER;Nl=ge.types.CONVEXPOLYHEDRON;Ul=ge.types.HEIGHTFIELD;Fl=ge.types.TRIMESH;class ot{get[Pl](){return this._intersectSphere}get[Ll](){return this._intersectPlane}get[Dl](){return this._intersectBox}get[Il](){return this._intersectConvex}get[Nl](){return this._intersectConvex}get[Ul](){return this._intersectHeightfield}get[Fl](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ot.ANY,this.result=new Fs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||ot.ANY,this.result=t.result||new Fs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(za),Ar.length=0,e.broadphase.aabbQuery(e,za,Ar),this.intersectBodies(Ar),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=eg,s=tg;for(let a=0,o=e.shapes.length;a<o;a++){const l=e.shapes[a];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(mg(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const a=this.from,o=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const h=new M;a.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||a.distanceTo(o)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new M,_=new M,p=new M;a.vsub(n,g);const f=-c.dot(g)/m;l.scale(f,_),a.vadd(_,p),this.reportIntersection(c,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const a=ng;a.from.copy(this.from),a.to.copy(this.to),Ye.pointToLocalFrame(n,t,a.from,a.from),Ye.pointToLocalFrame(n,t,a.to,a.to),a.updateDirection();const o=ig;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new Ut;a.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,u),!!u.overlapsRay(a)){if(e.getConvexTrianglePillar(m,g,!1),Ye.pointToWorldFrame(n,t,e.pillarOffset,Ss),this._intersectConvex(e.pillarConvex,t,Ss,i,s,Ha),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),Ye.pointToWorldFrame(n,t,e.pillarOffset,Ss),this._intersectConvex(e.pillarConvex,t,Ss,i,s,Ha)}}}_intersectSphere(e,t,n,i,s){const a=this.from,o=this.to,l=e.radius,c=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,h=2*((o.x-a.x)*(a.x-n.x)+(o.y-a.y)*(a.y-n.y)+(o.z-a.z)*(a.z-n.z)),d=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-l**2,u=h**2-4*c*d,m=sg,g=rg;if(!(u<0))if(u===0)a.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(a.lerp(o,_,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(a.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(e,t,n,i,s,a){const o=og,l=Ga,c=a&&a.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,m=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),f=c?c.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<f;x++){const y=c?c[x]:x,T=h[y],R=u[y],w=t,B=n;l.copy(d[T[0]]),w.vmult(l,l),l.vadd(B,l),l.vsub(g,l),w.vmult(R,o);const S=m.dot(o);if(Math.abs(S)<this.precision)continue;const A=o.dot(l)/S;if(!(A<0)){m.scale(A,At),At.vadd(g,At),kt.copy(d[T[0]]),w.vmult(kt,kt),B.vadd(kt,kt);for(let G=1;!v.shouldStop&&G<T.length-1;G++){Zt.copy(d[T[G]]),$t.copy(d[T[G+1]]),w.vmult(Zt,Zt),w.vmult($t,$t),B.vadd(Zt,Zt),B.vadd($t,$t);const q=At.distanceTo(g);!(ot.pointInTriangle(At,kt,Zt,$t)||ot.pointInTriangle(At,Zt,kt,$t))||q>p||this.reportIntersection(o,At,s,i,y)}}}}_intersectTrimesh(e,t,n,i,s,a){const o=ag,l=fg,c=pg,h=Ga,d=lg,u=cg,m=hg,g=dg,_=ug,p=e.indices;e.vertices;const f=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),Ye.vectorToLocalFrame(n,t,x,d),Ye.pointToLocalFrame(n,t,f,u),Ye.pointToLocalFrame(n,t,v,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,m.vsub(u,d),d.normalize();const y=u.distanceSquared(m);e.tree.rayQuery(this,c,l);for(let T=0,R=l.length;!this.result.shouldStop&&T!==R;T++){const w=l[T];e.getNormal(w,o),e.getVertex(p[w*3],kt),kt.vsub(u,h);const B=d.dot(o),S=o.dot(h)/B;if(S<0)continue;d.scale(S,At),At.vadd(u,At),e.getVertex(p[w*3+1],Zt),e.getVertex(p[w*3+2],$t);const A=At.distanceSquared(u);!(ot.pointInTriangle(At,Zt,kt,$t)||ot.pointInTriangle(At,kt,Zt,$t))||A>y||(Ye.vectorToWorldFrame(t,o,_),Ye.pointToWorldFrame(n,t,At,g),this.reportIntersection(_,g,s,i,w))}l.length=0}reportIntersection(e,t,n,i,s){const a=this.from,o=this.to,l=a.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ot.ALL:this.hasHit=!0,c.set(a,o,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case ot.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,n,i,l));break;case ot.ANY:this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Hn),n.vsub(t,Fi),e.vsub(t,Rr);const s=Hn.dot(Hn),a=Hn.dot(Fi),o=Hn.dot(Rr),l=Fi.dot(Fi),c=Fi.dot(Rr);let h,d;return(h=l*o-a*c)>=0&&(d=s*c-a*o)>=0&&h+d<s*l-a*a}}ot.CLOSEST=Qr.CLOSEST;ot.ANY=Qr.ANY;ot.ALL=Qr.ALL;const za=new Ut,Ar=[],Fi=new M,Rr=new M,eg=new M,tg=new at,At=new M,kt=new M,Zt=new M,$t=new M;new M;new Fs;const Ha={faceList:[0]},Ss=new M,ng=new ot,ig=[],sg=new M,rg=new M,og=new M;new M;new M;const Ga=new M,ag=new M,lg=new M,cg=new M,hg=new M,ug=new M,dg=new M;new Ut;const fg=[],pg=new Ye,Hn=new M,Ts=new M;function mg(r,e,t){t.vsub(r,Hn);const n=Hn.dot(e);return e.scale(n,Ts),Ts.vadd(r,Ts),t.distanceTo(Ts)}class gg{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Va{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Zi{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Zi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Va,this.jacobianElementB=new Va,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,a=n;this.a=4/(a*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(a*a*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-i*t-a*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,a=i.position;return e.spatial.dot(s)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,a=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(a,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,a=i.vlambda,o=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(a,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,a=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,ka),o.scale(h,Wa),n.invInertiaWorldSolve.vmult(a,Xa),i.invInertiaWorldSolve.vmult(l,qa),e.multiplyVectors(ka,Xa)+t.multiplyVectors(Wa,qa)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,a=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+a;return o.vmult(e.rotational,bs),c+=bs.dot(e.rotational),l.vmult(t.rotational,bs),c+=bs.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,a=_g;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,a),i.wlambda.addScaledVector(e,a,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Zi.idCounter=0;const ka=new M,Wa=new M,Xa=new M,qa=new M,bs=new M,_g=new M;class vg extends Zi{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,a=this.ri,o=this.rj,l=xg,c=Mg,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=yg,_=this.jacobianElementA,p=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),p.spatial.copy(f),p.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(a,g);const v=f.dot(g),x=this.restitution+1,y=x*u.dot(f)-x*h.dot(f)+m.dot(c)-d.dot(l),T=this.computeGiMf();return-v*t-y*n-e*T}getImpactVelocityAlongNormal(){const e=Eg,t=Sg,n=Tg,i=bg,s=wg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const xg=new M,Mg=new M,yg=new M,Eg=new M,Sg=new M,Tg=new M,bg=new M,wg=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Ya extends Zi{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Ag,a=Rg,o=this.t;n.cross(o,s),i.cross(o,a);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(a);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const Ag=new M,Rg=new M;class Gs{constructor(e,t,n){n=gg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Gs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Gs.idCounter=0;class Vs{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Vs.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Vs.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ot;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ut;new M;new Ut;new M;new M;new M;new M;new M;new M;new M;new Ut;new M;new Ye;new Ut;class Cg{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Pg extends Cg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=t.bodies,c=l.length,h=e;let d,u,m,g,_,p;if(o!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const f=Dg,v=Ig,x=Lg;f.length=o,v.length=o,x.length=o;for(let y=0;y!==o;y++){const T=a[y];x[y]=0,v[y]=T.computeB(h),f[y]=1/T.computeC()}if(o!==0){for(let R=0;R!==c;R++){const w=l[R],B=w.vlambda,S=w.wlambda;B.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let R=0;R!==o;R++){const w=a[R];d=v[R],u=f[R],p=x[R],_=w.computeGWlambda(),m=u*(d-_-w.eps*p),p+m<w.minForce?m=w.minForce-p:p+m>w.maxForce&&(m=w.maxForce-p),x[R]+=m,g+=m>0?m:-m,w.addToWlambda(m)}if(g*g<s)break}for(let R=0;R!==c;R++){const w=l[R],B=w.velocity,S=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),B.vadd(w.vlambda,B),w.wlambda.vmul(w.angularFactor,w.wlambda),S.vadd(w.wlambda,S)}let y=a.length;const T=1/h;for(;y--;)a[y].multiplier=x[y]*T}return n}}const Lg=[],Dg=[],Ig=[];me.STATIC;class Ng{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Ug extends Ng{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const $e={sphereSphere:ge.types.SPHERE,spherePlane:ge.types.SPHERE|ge.types.PLANE,boxBox:ge.types.BOX|ge.types.BOX,sphereBox:ge.types.SPHERE|ge.types.BOX,planeBox:ge.types.PLANE|ge.types.BOX,convexConvex:ge.types.CONVEXPOLYHEDRON,sphereConvex:ge.types.SPHERE|ge.types.CONVEXPOLYHEDRON,planeConvex:ge.types.PLANE|ge.types.CONVEXPOLYHEDRON,boxConvex:ge.types.BOX|ge.types.CONVEXPOLYHEDRON,sphereHeightfield:ge.types.SPHERE|ge.types.HEIGHTFIELD,boxHeightfield:ge.types.BOX|ge.types.HEIGHTFIELD,convexHeightfield:ge.types.CONVEXPOLYHEDRON|ge.types.HEIGHTFIELD,sphereParticle:ge.types.PARTICLE|ge.types.SPHERE,planeParticle:ge.types.PLANE|ge.types.PARTICLE,boxParticle:ge.types.BOX|ge.types.PARTICLE,convexParticle:ge.types.PARTICLE|ge.types.CONVEXPOLYHEDRON,cylinderCylinder:ge.types.CYLINDER,sphereCylinder:ge.types.SPHERE|ge.types.CYLINDER,planeCylinder:ge.types.PLANE|ge.types.CYLINDER,boxCylinder:ge.types.BOX|ge.types.CYLINDER,convexCylinder:ge.types.CONVEXPOLYHEDRON|ge.types.CYLINDER,heightfieldCylinder:ge.types.HEIGHTFIELD|ge.types.CYLINDER,particleCylinder:ge.types.PARTICLE|ge.types.CYLINDER,sphereTrimesh:ge.types.SPHERE|ge.types.TRIMESH,planeTrimesh:ge.types.PLANE|ge.types.TRIMESH};class Fg{get[$e.sphereSphere](){return this.sphereSphere}get[$e.spherePlane](){return this.spherePlane}get[$e.boxBox](){return this.boxBox}get[$e.sphereBox](){return this.sphereBox}get[$e.planeBox](){return this.planeBox}get[$e.convexConvex](){return this.convexConvex}get[$e.sphereConvex](){return this.sphereConvex}get[$e.planeConvex](){return this.planeConvex}get[$e.boxConvex](){return this.boxConvex}get[$e.sphereHeightfield](){return this.sphereHeightfield}get[$e.boxHeightfield](){return this.boxHeightfield}get[$e.convexHeightfield](){return this.convexHeightfield}get[$e.sphereParticle](){return this.sphereParticle}get[$e.planeParticle](){return this.planeParticle}get[$e.boxParticle](){return this.boxParticle}get[$e.convexParticle](){return this.convexParticle}get[$e.cylinderCylinder](){return this.convexConvex}get[$e.sphereCylinder](){return this.sphereConvex}get[$e.planeCylinder](){return this.planeConvex}get[$e.boxCylinder](){return this.boxConvex}get[$e.convexCylinder](){return this.convexConvex}get[$e.heightfieldCylinder](){return this.heightfieldCylinder}get[$e.particleCylinder](){return this.particleCylinder}get[$e.sphereTrimesh](){return this.sphereTrimesh}get[$e.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ug,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new vg(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=a||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,a=e.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=a.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new Ya(n,i,u*m),p=g.length?g.pop():new Ya(n,i,u*m);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-u*m,_.maxForce=p.maxForce=u*m,_.ri.copy(e.ri),_.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(_.t,p.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),_.enabled=p.enabled=e.enabled,t.push(_,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Fn.setZero(),gi.setZero(),_i.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(Fn.vadd(t.ni,Fn),gi.vadd(t.ri,gi),_i.vadd(t.rj,_i)):(Fn.vsub(t.ni,Fn),gi.vadd(t.rj,gi),_i.vadd(t.ri,_i));const a=1/e;gi.scale(a,n.ri),_i.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Fn.normalize(),Fn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,a,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=a;const l=zg,c=Hg,h=Og,d=Bg;for(let u=0,m=e.length;u!==m;u++){const g=e[u],_=t[u];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const f=g.type&me.KINEMATIC&&_.type&me.STATIC||g.type&me.STATIC&&_.type&me.KINEMATIC||g.type&me.KINEMATIC&&_.type&me.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],d),d.vadd(_.position,d);const T=_.shapes[y];if(!(x.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+T.boundingSphereRadius)continue;let R=null;x.material&&T.material&&(R=n.getContactMaterial(x.material,T.material)||null),this.currentContactMaterial=R||p||n.defaultContactMaterial;const w=x.type|T.type,B=this[w];if(B){let S=!1;x.type<T.type?S=B.call(this,x,T,h,d,l,c,g,_,x,T,f):S=B.call(this,T,x,d,h,c,l,_,g,x,T,f),S&&f&&(n.shapeOverlapKeeper.set(x.id,T.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,a,o,l,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,a,o,l,c,h,d){const u=this.createContactEquation(o,l,e,t,c,h);if(u.ni.set(0,0,1),a.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,ws),u.ni.scale(u.ni.dot(ws),ja),ws.vsub(ja,u.rj),-ws.dot(u.ni)<=e.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,a,o,l,e,t,d)}sphereBox(e,t,n,i,s,a,o,l,c,h,d){const u=this.v3pool,m=d_;n.vsub(i,As),t.getSideNormals(m,a);const g=e.radius;let _=!1;const p=p_,f=m_,v=g_;let x=null,y=0,T=0,R=0,w=null;for(let I=0,W=m.length;I!==W&&_===!1;I++){const Z=c_;Z.copy(m[I]);const j=Z.length();Z.normalize();const J=As.dot(Z);if(J<j+g&&J>0){const F=h_,O=u_;F.copy(m[(I+1)%3]),O.copy(m[(I+2)%3]);const le=F.length(),he=O.length();F.normalize(),O.normalize();const de=As.dot(F),Te=As.dot(O);if(de<le&&de>-le&&Te<he&&Te>-he){const Oe=Math.abs(J-j-g);if((w===null||Oe<w)&&(w=Oe,T=de,R=Te,x=j,p.copy(Z),f.copy(F),v.copy(O),y++,d))return!0}}}if(y){_=!0;const I=this.createContactEquation(o,l,e,t,c,h);p.scale(-g,I.ri),I.ni.copy(p),I.ni.negate(I.ni),p.scale(x,p),f.scale(T,f),p.vadd(f,p),v.scale(R,v),p.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let B=u.get();const S=f_;for(let I=0;I!==2&&!_;I++)for(let W=0;W!==2&&!_;W++)for(let Z=0;Z!==2&&!_;Z++)if(B.set(0,0,0),I?B.vadd(m[0],B):B.vsub(m[0],B),W?B.vadd(m[1],B):B.vsub(m[1],B),Z?B.vadd(m[2],B):B.vsub(m[2],B),i.vadd(B,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;_=!0;const j=this.createContactEquation(o,l,e,t,c,h);j.ri.copy(S),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(B),j.ri.vadd(n,j.ri),j.ri.vsub(o.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(B),B=null;const A=u.get(),G=u.get(),q=u.get(),U=u.get(),P=u.get(),D=m.length;for(let I=0;I!==D&&!_;I++)for(let W=0;W!==D&&!_;W++)if(I%3!==W%3){m[W].cross(m[I],A),A.normalize(),m[I].vadd(m[W],G),q.copy(n),q.vsub(G,q),q.vsub(i,q);const Z=q.dot(A);A.scale(Z,U);let j=0;for(;j===I%3||j===W%3;)j++;P.copy(n),P.vsub(U,P),P.vsub(G,P),P.vsub(i,P);const J=Math.abs(Z),F=P.length();if(J<m[j].length()&&F<g){if(d)return!0;_=!0;const O=this.createContactEquation(o,l,e,t,c,h);G.vadd(U,O.rj),O.rj.copy(O.rj),P.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(g,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}u.release(A,G,q,U,P)}planeBox(e,t,n,i,s,a,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,a,o,l,e,t,d)}convexConvex(e,t,n,i,s,a,o,l,c,h,d,u,m){const g=L_;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,a,g,u,m)){const _=[],p=D_;e.clipAgainstHull(n,s,t,i,a,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(o,l,e,t,c,h),y=x.ri,T=x.rj;g.negate(x.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,y),T.copy(_[v].point),y.vsub(n,y),T.vsub(i,T),y.vadd(n,y),y.vsub(o.position,y),T.vadd(i,T),T.vsub(l.position,T),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,n,i,s,a,o,l,c,h,d){const u=this.v3pool;n.vsub(i,__);const m=t.faceNormals,g=t.faces,_=t.vertices,p=e.radius;let f=!1;for(let v=0;v!==_.length;v++){const x=_[v],y=y_;a.vmult(x,y),i.vadd(y,y);const T=M_;if(y.vsub(n,T),T.lengthSquared()<p*p){if(d)return!0;f=!0;const R=this.createContactEquation(o,l,e,t,c,h);R.ri.copy(T),R.ri.normalize(),R.ni.copy(R.ri),R.ri.scale(p,R.ri),y.vsub(i,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(o.position,R.ri),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&f===!1;v++){const y=m[v],T=g[v],R=E_;a.vmult(y,R);const w=S_;a.vmult(_[T[0]],w),w.vadd(i,w);const B=T_;R.scale(-p,B),n.vadd(B,B);const S=b_;B.vsub(w,S);const A=S.dot(R),G=w_;if(n.vsub(w,G),A<0&&G.dot(R)>0){const q=[];for(let U=0,P=T.length;U!==P;U++){const D=u.get();a.vmult(_[T[U]],D),i.vadd(D,D),q.push(D)}if(l_(q,R,n)){if(d)return!0;f=!0;const U=this.createContactEquation(o,l,e,t,c,h);R.scale(-p,U.ri),R.negate(U.ni);const P=u.get();R.scale(-A,P);const D=u.get();R.scale(-p,D),n.vsub(i,U.rj),U.rj.vadd(D,U.rj),U.rj.vadd(P,U.rj),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),u.release(P),u.release(D),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let I=0,W=q.length;I!==W;I++)u.release(q[I]);return}else for(let U=0;U!==T.length;U++){const P=u.get(),D=u.get();a.vmult(_[T[(U+1)%T.length]],P),a.vmult(_[T[(U+2)%T.length]],D),i.vadd(P,P),i.vadd(D,D);const I=v_;D.vsub(P,I);const W=x_;I.unit(W);const Z=u.get(),j=u.get();n.vsub(P,j);const J=j.dot(W);W.scale(J,Z),Z.vadd(P,Z);const F=u.get();if(Z.vsub(n,F),J>0&&J*J<I.lengthSquared()&&F.lengthSquared()<p*p){if(d)return!0;const O=this.createContactEquation(o,l,e,t,c,h);Z.vsub(i,O.rj),Z.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(p,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let le=0,he=q.length;le!==he;le++)u.release(q[le]);u.release(P),u.release(D),u.release(Z),u.release(F),u.release(j);return}u.release(P),u.release(D),u.release(Z),u.release(F),u.release(j)}for(let U=0,P=q.length;U!==P;U++)u.release(q[U])}}}planeConvex(e,t,n,i,s,a,o,l,c,h,d){const u=A_,m=R_;m.set(0,0,1),s.vmult(m,m);let g=0;const _=C_;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),a.vmult(u,u),i.vadd(u,u),u.vsub(n,_),m.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(o,l,e,t,c,h),x=P_;m.scale(m.dot(_),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,a,o,l,e,t,d)}sphereHeightfield(e,t,n,i,s,a,o,l,c,h,d){const u=t.data,m=e.radius,g=t.elementSize,_=W_,p=k_;Ye.pointToLocalFrame(i,a,n,p);let f=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,x=Math.floor((p.y-m)/g)-1,y=Math.ceil((p.y+m)/g)+1;if(v<0||y<0||f>u.length||x>u[0].length)return;f<0&&(f=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const T=[];t.getRectMinMax(f,x,v,y,T);const R=T[0],w=T[1];if(p.z-m>w||p.z+m<R)return;const B=this.result;for(let S=f;S<v;S++)for(let A=x;A<y;A++){const G=B.length;let q=!1;if(t.getConvexTrianglePillar(S,A,!1),Ye.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(q=this.sphereConvex(e,t.pillarConvex,n,_,s,a,o,l,e,t,d)),d&&q||(t.getConvexTrianglePillar(S,A,!0),Ye.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(q=this.sphereConvex(e,t.pillarConvex,n,_,s,a,o,l,e,t,d)),d&&q))return!0;if(B.length-G>2)return}}boxHeightfield(e,t,n,i,s,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,a,o,l,e,t,d)}convexHeightfield(e,t,n,i,s,a,o,l,c,h,d){const u=t.data,m=t.elementSize,g=e.boundingSphereRadius,_=G_,p=V_,f=H_;Ye.pointToLocalFrame(i,a,n,f);let v=Math.floor((f.x-g)/m)-1,x=Math.ceil((f.x+g)/m)+1,y=Math.floor((f.y-g)/m)-1,T=Math.ceil((f.y+g)/m)+1;if(x<0||T<0||v>u.length||y>u[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),T<0&&(T=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),T>=u[0].length&&(T=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const R=[];t.getRectMinMax(v,y,x,T,R);const w=R[0],B=R[1];if(!(f.z-g>B||f.z+g<w))for(let S=v;S<x;S++)for(let A=y;A<T;A++){let G=!1;if(t.getConvexTrianglePillar(S,A,!1),Ye.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.convexConvex(e,t.pillarConvex,n,_,s,a,o,l,null,null,d,p,null)),d&&G||(t.getConvexTrianglePillar(S,A,!0),Ye.pointToWorldFrame(i,a,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.convexConvex(e,t.pillarConvex,n,_,s,a,o,l,null,null,d,p,null)),d&&G))return!0}}sphereParticle(e,t,n,i,s,a,o,l,c,h,d){const u=F_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,o,t,e,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,a,o,l,c,h,d){const u=I_;u.set(0,0,1),o.quaternion.vmult(u,u);const m=N_;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(l,o,t,e,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=U_;u.scale(u.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,a,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,a,o,l,e,t,d)}convexParticle(e,t,n,i,s,a,o,l,c,h,d){let u=-1;const m=B_,g=z_;let _=null;const p=O_;if(p.copy(i),p.vsub(n,p),s.conjugate(Ka),Ka.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,v=e.faces.length;f!==v;f++){const x=[e.worldVertices[e.faces[f][0]]],y=e.worldFaceNormals[f];i.vsub(x[0],Za);const T=-y.dot(Za);if(_===null||Math.abs(T)<Math.abs(_)){if(d)return!0;_=T,u=f,m.copy(y)}}if(u!==-1){const f=this.createContactEquation(l,o,t,e,c,h);m.scale(_,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),m.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,x=f.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(o.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,a,o,l,c,h,d){return this.convexHeightfield(t,e,i,n,a,s,l,o,c,h,d)}particleCylinder(e,t,n,i,s,a,o,l,c,h,d){return this.convexParticle(t,e,i,n,a,s,l,o,c,h,d)}sphereTrimesh(e,t,n,i,s,a,o,l,c,h,d){const u=jg,m=Kg,g=Zg,_=$g,p=Jg,f=Qg,v=i_,x=Yg,y=Xg,T=s_;Ye.pointToLocalFrame(i,a,n,p);const R=e.radius;v.lowerBound.set(p.x-R,p.y-R,p.z-R),v.upperBound.set(p.x+R,p.y+R,p.z+R),t.getTrianglesInAABB(v,T);const w=qg,B=e.radius*e.radius;for(let U=0;U<T.length;U++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[T[U]*3+P],w),w.vsub(p,y),y.lengthSquared()<=B){if(x.copy(w),Ye.pointToWorldFrame(i,a,x,w),w.vsub(n,y),d)return!0;let D=this.createContactEquation(o,l,e,t,c,h);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(w),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let U=0;U<T.length;U++)for(let P=0;P<3;P++){t.getVertex(t.indices[T[U]*3+P],u),t.getVertex(t.indices[T[U]*3+(P+1)%3],m),m.vsub(u,g),p.vsub(m,f);const D=f.dot(g);p.vsub(u,f);let I=f.dot(g);if(I>0&&D<0&&(p.vsub(u,f),_.copy(g),_.normalize(),I=f.dot(_),_.scale(I,f),f.vadd(u,f),f.distanceTo(p)<e.radius)){if(d)return!0;const Z=this.createContactEquation(o,l,e,t,c,h);f.vsub(p,Z.ni),Z.ni.normalize(),Z.ni.scale(e.radius,Z.ri),Z.ri.vadd(n,Z.ri),Z.ri.vsub(o.position,Z.ri),Ye.pointToWorldFrame(i,a,f,f),f.vsub(l.position,Z.rj),Ye.vectorToWorldFrame(a,Z.ni,Z.ni),Ye.vectorToWorldFrame(a,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}const S=e_,A=t_,G=n_,q=Wg;for(let U=0,P=T.length;U!==P;U++){t.getTriangleVertices(T[U],S,A,G),t.getNormal(T[U],q),p.vsub(S,f);let D=f.dot(q);if(q.scale(D,f),p.vsub(f,f),D=f.distanceTo(p),ot.pointInTriangle(f,S,A,G)&&D<e.radius){if(d)return!0;let I=this.createContactEquation(o,l,e,t,c,h);f.vsub(p,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),Ye.pointToWorldFrame(i,a,f,f),f.vsub(l.position,I.rj),Ye.vectorToWorldFrame(a,I.ni,I.ni),Ye.vectorToWorldFrame(a,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}T.length=0}planeTrimesh(e,t,n,i,s,a,o,l,c,h,d){const u=new M,m=Gg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const _=new M;_.copy(u),Ye.pointToWorldFrame(i,a,_,u);const p=Vg;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(o,l,e,t,c,h);v.ni.copy(m);const x=kg;m.scale(p.dot(m),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(o.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Fn=new M,gi=new M,_i=new M,Og=new M,Bg=new M,zg=new at,Hg=new at,Gg=new M,Vg=new M,kg=new M,Wg=new M,Xg=new M;new M;const qg=new M,Yg=new M,jg=new M,Kg=new M,Zg=new M,$g=new M,Jg=new M,Qg=new M,e_=new M,t_=new M,n_=new M,i_=new Ut,s_=[],ws=new M,ja=new M,r_=new M,o_=new M,a_=new M;function l_(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const a=r[s],o=r_;r[(s+1)%i].vsub(a,o);const l=o_;o.cross(e,l);const c=a_;t.vsub(a,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const As=new M,c_=new M,h_=new M,u_=new M,d_=[new M,new M,new M,new M,new M,new M],f_=new M,p_=new M,m_=new M,g_=new M,__=new M,v_=new M,x_=new M,M_=new M,y_=new M,E_=new M,S_=new M,T_=new M,b_=new M,w_=new M;new M;new M;const A_=new M,R_=new M,C_=new M,P_=new M,L_=new M,D_=new M,I_=new M,N_=new M,U_=new M,F_=new M,Ka=new at,O_=new M;new M;const B_=new M,Za=new M,z_=new M,H_=new M,G_=new M,V_=[0],k_=new M,W_=new M;class $a{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let a=i.length-1;a>=s;a--)i[a+1]=i[a];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,a=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=h===i[o],c||Ja(e,h)}o=0;for(let l=0;l<a;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=n[o]===h,c||Ja(t,h)}}}function Ja(r,e){r.push((e&4294901760)>>16,e&65535)}const Cr=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class X_{constructor(){this.data={keys:[]}}get(e,t){const n=Cr(e,t);return this.data[n]}set(e,t,n){const i=Cr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Cr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class q_ extends Cl{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Qm,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Pg,this.constraints=[],this.narrowphase=new Fg(this),this.collisionMatrix=new Oa,this.collisionMatrixPrevious=new Oa,this.bodyOverlapKeeper=new $a,this.shapeOverlapKeeper=new $a,this.contactmaterials=[],this.contactMaterialTable=new X_,this.defaultMaterial=new Vs("default"),this.defaultContactMaterial=new Gs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Fs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=ot.ALL,n.from=e,n.to=t,n.callback=i,Pr.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=ot.ANY,n.from=e,n.to=t,n.result=i,Pr.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=ot.CLOSEST,n.from=e,n.to=t,n.result=i,Pr.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof me&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const a=i[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=lt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(lt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=$_,i=J_,s=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=me.DYNAMIC;let u=-1/0;const m=this.constraints,g=Z_;l.length();const _=l.x,p=l.y,f=l.z;let v=0;for(c&&(u=lt.now()),v=0;v!==s;v++){const U=a[v];if(U.type===d){const P=U.force,D=U.mass;P.x+=D*_,P.y+=D*p,P.z+=D*f}}for(let U=0,P=this.subsystems.length;U!==P;U++)this.subsystems[U].update();c&&(u=lt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=lt.now()-u);let x=m.length;for(v=0;v!==x;v++){const U=m[v];if(!U.collideConnected)for(let P=n.length-1;P>=0;P-=1)(U.bodyA===n[P]&&U.bodyB===i[P]||U.bodyB===n[P]&&U.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=lt.now());const y=K_,T=t.length;for(v=0;v!==T;v++)y.push(t[v]);t.length=0;const R=this.frictionEquations.length;for(v=0;v!==R;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,g),c&&(h.narrowphase=lt.now()-u),c&&(u=lt.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const w=t.length;for(let U=0;U!==w;U++){const P=t[U],D=P.bi,I=P.bj,W=P.si,Z=P.sj;let j;if(D.material&&I.material?j=this.getContactMaterial(D.material,I.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,D.material&&I.material&&(D.material.friction>=0&&I.material.friction>=0&&D.material.friction*I.material.friction,D.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=D.material.restitution*I.material.restitution)),o.addEquation(P),D.allowSleep&&D.type===me.DYNAMIC&&D.sleepState===me.SLEEPING&&I.sleepState===me.AWAKE&&I.type!==me.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),F=I.sleepSpeedLimit**2;J>=F*2&&(D.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===me.DYNAMIC&&I.sleepState===me.SLEEPING&&D.sleepState===me.AWAKE&&D.type!==me.STATIC){const J=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),F=D.sleepSpeedLimit**2;J>=F*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,I,!0),this.collisionMatrixPrevious.get(D,I)||(Oi.body=I,Oi.contact=P,D.dispatchEvent(Oi),Oi.body=D,I.dispatchEvent(Oi)),this.bodyOverlapKeeper.set(D.id,I.id),this.shapeOverlapKeeper.set(W.id,Z.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=lt.now()-u,u=lt.now()),v=0;v!==s;v++){const U=a[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const U=m[v];U.update();for(let P=0,D=U.equations.length;P!==D;P++){const I=U.equations[P];o.addEquation(I)}}o.solve(e,this),c&&(h.solve=lt.now()-u),o.removeAllEquations();const B=Math.pow;for(v=0;v!==s;v++){const U=a[v];if(U.type&d){const P=B(1-U.linearDamping,e),D=U.velocity;D.scale(P,D);const I=U.angularVelocity;if(I){const W=B(1-U.angularDamping,e);I.scale(W,I)}}}this.dispatchEvent(j_),c&&(u=lt.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(v=0;v!==s;v++)a[v].integrate(e,A,G);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=lt.now()-u),this.stepnumber+=1,this.dispatchEvent(Y_);let q=!0;if(this.allowSleep)for(q=!1,v=0;v!==s;v++){const U=a[v];U.sleepTick(this.time),U.sleepState!==me.SLEEPING&&(q=!0)}this.hasActiveBodies=q}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ln,cn),e){for(let s=0,a=ln.length;s<a;s+=2)Bi.bodyA=this.getBodyById(ln[s]),Bi.bodyB=this.getBodyById(ln[s+1]),this.dispatchEvent(Bi);Bi.bodyA=Bi.bodyB=null}if(t){for(let s=0,a=cn.length;s<a;s+=2)zi.bodyA=this.getBodyById(cn[s]),zi.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(zi);zi.bodyA=zi.bodyB=null}ln.length=cn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ln,cn),n){for(let s=0,a=ln.length;s<a;s+=2){const o=this.getShapeById(ln[s]),l=this.getShapeById(ln[s+1]);hn.shapeA=o,hn.shapeB=l,o&&(hn.bodyA=o.body),l&&(hn.bodyB=l.body),this.dispatchEvent(hn)}hn.bodyA=hn.bodyB=hn.shapeA=hn.shapeB=null}if(i){for(let s=0,a=cn.length;s<a;s+=2){const o=this.getShapeById(cn[s]),l=this.getShapeById(cn[s+1]);un.shapeA=o,un.shapeB=l,o&&(un.bodyA=o.body),l&&(un.bodyB=l.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ut;const Pr=new ot,lt=globalThis.performance||{};if(!lt.now){let r=Date.now();lt.timing&&lt.timing.navigationStart&&(r=lt.timing.navigationStart),lt.now=()=>Date.now()-r}new M;const Y_={type:"postStep"},j_={type:"preStep"},Oi={type:me.COLLIDE_EVENT_NAME,body:null,contact:null},K_=[],Z_=[],$_=[],J_=[],ln=[],cn=[],Bi={type:"beginContact",bodyA:null,bodyB:null},zi={type:"endContact",bodyA:null,bodyB:null},hn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},un={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Q_ extends Gn{constructor(){super();Qi(this,"body");this.name="character";const t=[1,3,1],n=[0,3,0],i=new $n(...t),s=new xm({color:15253164});this.add(new Qt(i,s)),this.translateOnAxis(new H(...n),1),this.body=new me({mass:10,position:new M(...n),shape:new Ki(new M(...t.map(a=>a/2)))}),window.addEventListener("keydown",a=>{a.key===" "&&this.body.applyImpulse(new M(0,100,0))})}update(){this.position.copy(this.body.position),this.quaternion.copy(this.body.quaternion)}}class ev extends Gn{constructor(){super();Qi(this,"body");this.name="room";const t=[10,.1,10],n=[0,-1,0],i=new $n(...t),s=new qr({color:15263976});this.add(new Qt(i,s)),this.translateOnAxis(new H(...n),1),this.body=new me({mass:0,position:new M(...n),shape:new Ki(new M(...t.map(a=>a/2)))}),console.log(this.position),console.log(this.body.position)}update(){this.position.copy(this.body.position),this.quaternion.copy(this.body.quaternion)}}class tv extends Gn{constructor(){super();const e=new Sm(16777215,1.6,7,.8,1,1),t=new Tm(4210752,1.32),n=new Mm(16777147,526368,2.3);e.position.set(5,1,2),e.target.position.set(0,0,0),this.add(t,n,e)}update(){}}const Ol=new q_({gravity:new M(0,-9.82,0)});class nv extends vm{constructor(){super();Qi(this,"children");this.background=new qe(8306926),this.children=[new ev,new Q_,new tv],this.add(...this.children);for(const t of this.children)t.body&&Ol.addBody(t.body)}update(){for(const t of this.children)t.update&&t.update()}}const Lr=new nv,Ai=new It,ks=new Rl({antialias:!0});Ai.position.set(6,3,-10);Ai.lookAt(new H(0,0,0));ks.setPixelRatio(window.devicePixelRatio);const eo=ks.domElement;eo.style.display="block";document.body.style.margin="0";document.body.style.overflow="hidden";document.body.appendChild(eo);const Cn=new Zl;Cn.showPanel(0);Cn.dom.style.top="";Cn.dom.style.left="";Cn.dom.style.bottom="0px";Cn.dom.style.right="0px";document.body.appendChild(Cn.dom);const Pi=new wm(Ai,eo);Pi.enableDamping=!0;Pi.enablePan=!1;Pi.minDistance=4;Pi.maxDistance=16;Pi.update();const Bl=()=>{Cn.begin(),Pi.update(),ks.render(Lr,Ai),Ol.fixedStep(),Lr.update&&Lr.update(),Cn.end(),window.requestAnimationFrame(Bl)};window.requestAnimationFrame(Bl);const zl=()=>{const{innerHeight:r,innerWidth:e}=window;ks.setSize(e,r),Ai.aspect=e/r,Ai.updateProjectionMatrix()};zl();window.addEventListener("resize",zl,!1);
