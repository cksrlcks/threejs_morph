(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="152",Lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,Zc=1,mp=2,cf=1,_p=2,xi=3,Xi=0,cn=1,yi=2,Gi=0,os=1,zl=2,Jc=3,Qc=4,gp=5,Jr=100,vp=101,xp=102,eu=103,tu=104,Mp=200,Sp=201,yp=202,Ep=203,uf=204,hf=205,Tp=206,bp=207,Ap=208,wp=209,Rp=210,Cp=0,Pp=1,Lp=2,kl=3,Dp=4,Up=5,Ip=6,Op=7,Sc=0,Fp=1,Np=2,bi=0,Bp=1,zp=2,kp=3,Gp=4,Hp=5,ff=300,ms=301,_s=302,Gl=303,Hl=304,Uo=306,Vl=1e3,jn=1001,Wl=1002,Qt=1003,nu=1004,Wo=1005,Ln=1006,Vp=1007,sa=1008,Sr=1009,Wp=1010,Xp=1011,df=1012,qp=1013,lr=1014,cr=1015,aa=1016,Yp=1017,jp=1018,ls=1020,Kp=1021,Kn=1023,$p=1024,Zp=1025,fr=1026,gs=1027,Jp=1028,Qp=1029,em=1030,tm=1031,nm=1033,Xo=33776,qo=33777,Yo=33778,jo=33779,iu=35840,ru=35841,su=35842,au=35843,im=36196,ou=37492,lu=37496,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,Mu=37819,Su=37820,yu=37821,Ko=36492,rm=36283,Eu=36284,Tu=36285,bu=36286,pf=3e3,dr=3001,sm=3200,am=3201,mf=0,om=1,pr="",We="srgb",li="srgb-linear",_f="display-p3",$o=7680,lm=519,Au=35044,wu="300 es",Xl=1035;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,ql=180/Math.PI;function pa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function tn(r,e,t){return Math.max(e,Math.min(t,r))}function cm(r,e){return(r%e+e)%e}function Jo(r,e,t){return(1-t)*r+t*e}function Ru(r){return(r&r-1)===0&&r!==0}function um(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xa(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],v=n[8],_=i[0],g=i[3],p=i[6],E=i[1],M=i[4],y=i[7],S=i[2],b=i[5],R=i[8];return s[0]=o*_+a*E+c*S,s[3]=o*g+a*M+c*b,s[6]=o*p+a*y+c*R,s[1]=l*_+u*E+f*S,s[4]=l*g+u*M+f*b,s[7]=l*p+u*y+f*R,s[2]=h*_+d*E+v*S,s[5]=h*g+d*M+v*b,s[8]=h*p+d*y+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,v=t*f+n*h+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new et;function gf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Cu={};function Ys(r){r in Cu||(Cu[r]=!0,console.warn(r))}function cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function el(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const hm=new et().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fm=new et().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dm(r){return r.convertSRGBToLinear().applyMatrix3(fm)}function pm(r){return r.applyMatrix3(hm).convertLinearToSRGB()}const mm={[li]:r=>r,[We]:r=>r.convertSRGBToLinear(),[_f]:dm},_m={[li]:r=>r,[We]:r=>r.convertLinearToSRGB(),[_f]:pm},Gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return li},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=mm[e],i=_m[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ur;class vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=xo("canvas")),Ur.width=e.width,Ur.height=e.height;const n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xf{constructor(e=null){this.isSource=!0,this.uuid=pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(tl(i[o].image)):s.push(tl(i[o]))}else s=tl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gm=0;class Tn extends Cr{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=jn,i=jn,s=Ln,o=sa,a=Kn,c=Sr,l=Tn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=pa(),this.name="",this.source=new xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===dr?We:pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?dr:pf}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?We:pr}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=ff;Tn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],v=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,y=(d+1)/2,S=(p+1)/2,b=(u+h)/4,R=(f+_)/4,D=(v+g)/4;return M>y&&M>S?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=R/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=D/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=D/s),this.set(n,i,s,t),this}let E=Math.sqrt((g-v)*(g-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yr extends Cr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?We:pr),this.texture=new Tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mf extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vm extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=v,e[t+3]=_;return}if(f!==_||c!==h||l!==d||u!==v){let g=1-a;const p=c*h+l*d+u*v+f*_,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const S=Math.sqrt(M),b=Math.atan2(S,p*E);g=Math.sin(g*b)/S,a=Math.sin(a*b)/S}const y=a*E;if(c=c*g+h*y,l=l*g+d*y,u=u*g+v*y,f=f*g+_*y,g===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*f+c*d-l*h,e[t+1]=c*v+u*h+l*f-a*d,e[t+2]=l*v+u*d+a*h-c*f,e[t+3]=u*v-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),h=c(n/2),d=c(i/2),v=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*v,this._y=l*d*f-h*u*v,this._z=l*u*v+h*d*f,this._w=l*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+l*d*v,this._y=l*d*f-h*u*v,this._z=l*u*v-h*d*f,this._w=l*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-l*d*v,this._y=l*d*f+h*u*v,this._z=l*u*v+h*d*f,this._w=l*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-l*d*v,this._y=l*d*f+h*u*v,this._z=l*u*v-h*d*f,this._w=l*u*f+h*d*v;break;case"YZX":this._x=h*u*f+l*d*v,this._y=l*d*f+h*u*v,this._z=l*u*v-h*d*f,this._w=l*u*f-h*d*v;break;case"XZY":this._x=h*u*f-l*d*v,this._y=l*d*f-h*u*v,this._z=l*u*v+h*d*f,this._w=l*u*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,f=c*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new k,Pu=new Er;class ma{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox),Ir.applyMatrix4(e.matrixWorld),this.union(Ir);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)di.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(di)}else i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Ma.subVectors(this.max,Ls),Or.subVectors(e.a,Ls),Fr.subVectors(e.b,Ls),Nr.subVectors(e.c,Ls),Pi.subVectors(Fr,Or),Li.subVectors(Nr,Fr),Ji.subVectors(Or,Nr);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Ji.z,Ji.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Ji.z,0,-Ji.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Ji.y,Ji.x,0];return!il(t,Or,Fr,Nr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!il(t,Or,Fr,Nr,Ma))?!1:(Sa.crossVectors(Pi,Li),t=[Sa.x,Sa.y,Sa.z],il(t,Or,Fr,Nr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new k,new k,new k,new k,new k,new k,new k,new k],di=new k,Ir=new ma,Or=new k,Fr=new k,Nr=new k,Pi=new k,Li=new k,Ji=new k,Ls=new k,Ma=new k,Sa=new k,Qi=new k;function il(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qi.fromArray(r,s);const a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const xm=new ma,Ds=new k,rl=new k;class _a{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(rl)),this.expandByPoint(Ds.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new k,sl=new k,ya=new k,Di=new k,al=new k,Ea=new k,ol=new k;class yc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sl.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(sl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Di.dot(this.direction),c=-Di.dot(ya),l=Di.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*c-a,h=o*a-c,v=s*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(sl).addScaledVector(ya,h),d}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,s){al.subVectors(t,e),Ea.subVectors(n,e),ol.crossVectors(al,Ea);let o=this.direction.dot(ol),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const c=a*this.direction.dot(Ea.crossVectors(Di,Ea));if(c<0)return null;const l=a*this.direction.dot(al.cross(Di));if(l<0||c+l>o)return null;const u=-a*Di.dot(ol);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,f,h,d,v,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+v*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=v+d*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,v=l*u,_=l*f;t[0]=h+_*a,t[4]=v*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,v=l*u,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,_=a*f;t[0]=c*u,t[4]=v*l-d,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=d*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=_-h*f,t[8]=v*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+v,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*c,d=o*l,v=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mm,e,Sm)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ui.crossVectors(n,_n),Ui.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ui.crossVectors(n,_n)),Ui.normalize(),Ta.crossVectors(_n,Ui),i[0]=Ui.x,i[4]=Ta.x,i[8]=_n.x,i[1]=Ui.y,i[5]=Ta.y,i[9]=_n.y,i[2]=Ui.z,i[6]=Ta.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],v=n[2],_=n[6],g=n[10],p=n[14],E=n[3],M=n[7],y=n[11],S=n[15],b=i[0],R=i[4],D=i[8],x=i[12],A=i[1],W=i[5],N=i[9],O=i[13],z=i[2],G=i[6],J=i[10],H=i[14],X=i[3],ee=i[7],P=i[11],de=i[15];return s[0]=o*b+a*A+c*z+l*X,s[4]=o*R+a*W+c*G+l*ee,s[8]=o*D+a*N+c*J+l*P,s[12]=o*x+a*O+c*H+l*de,s[1]=u*b+f*A+h*z+d*X,s[5]=u*R+f*W+h*G+d*ee,s[9]=u*D+f*N+h*J+d*P,s[13]=u*x+f*O+h*H+d*de,s[2]=v*b+_*A+g*z+p*X,s[6]=v*R+_*W+g*G+p*ee,s[10]=v*D+_*N+g*J+p*P,s[14]=v*x+_*O+g*H+p*de,s[3]=E*b+M*A+y*z+S*X,s[7]=E*R+M*W+y*G+S*ee,s[11]=E*D+M*N+y*J+S*P,s[15]=E*x+M*O+y*H+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],_=e[7],g=e[11],p=e[15];return v*(+s*c*f-i*l*f-s*a*h+n*l*h+i*a*d-n*c*d)+_*(+t*c*d-t*l*h+s*o*h-i*o*d+i*l*u-s*c*u)+g*(+t*l*f-t*a*d-s*o*f+n*o*d+s*a*u-n*l*u)+p*(-i*a*u-t*c*f+t*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],_=e[13],g=e[14],p=e[15],E=f*g*l-_*h*l+_*c*d-a*g*d-f*c*p+a*h*p,M=v*h*l-u*g*l-v*c*d+o*g*d+u*c*p-o*h*p,y=u*_*l-v*f*l+v*a*d-o*_*d-u*a*p+o*f*p,S=v*f*c-u*_*c-v*a*h+o*_*h+u*a*g-o*f*g,b=t*E+n*M+i*y+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=E*R,e[1]=(_*h*s-f*g*s-_*i*d+n*g*d+f*i*p-n*h*p)*R,e[2]=(a*g*s-_*c*s+_*i*l-n*g*l-a*i*p+n*c*p)*R,e[3]=(f*c*s-a*h*s-f*i*l+n*h*l+a*i*d-n*c*d)*R,e[4]=M*R,e[5]=(u*g*s-v*h*s+v*i*d-t*g*d-u*i*p+t*h*p)*R,e[6]=(v*c*s-o*g*s-v*i*l+t*g*l+o*i*p-t*c*p)*R,e[7]=(o*h*s-u*c*s+u*i*l-t*h*l-o*i*d+t*c*d)*R,e[8]=y*R,e[9]=(v*f*s-u*_*s-v*n*d+t*_*d+u*n*p-t*f*p)*R,e[10]=(o*_*s-v*a*s+v*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*d-t*a*d)*R,e[12]=S*R,e[13]=(u*_*i-v*f*i+v*n*h-t*_*h-u*n*g+t*f*g)*R,e[14]=(v*a*i-o*_*i-v*n*c+t*_*c+o*n*g-t*a*g)*R,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,v=s*f,_=o*u,g=o*f,p=a*f,E=c*l,M=c*u,y=c*f,S=n.x,b=n.y,R=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+y)*S,i[2]=(v-M)*S,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(h+p))*b,i[6]=(g+E)*b,i[7]=0,i[8]=(v+M)*R,i[9]=(g-E)*R,i[10]=(1-(h+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Br.set(i[0],i[1],i[2]).length();const o=Br.set(i[4],i[5],i[6]).length(),a=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Hn.copy(this);const l=1/s,u=1/o,f=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),f=(t+e)*c,h=(n+i)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Br=new k,Hn=new Rt,Mm=new k(0,0,0),Sm=new k(1,1,1),Ui=new k,Ta=new k,_n=new k,Lu=new Rt,Du=new Er;class Io{constructor(e=0,t=0,n=0,i=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ym=0;const Uu=new k,zr=new Er,mi=new Rt,ba=new k,Us=new k,Em=new k,Tm=new Er,Iu=new k(1,0,0),Ou=new k(0,1,0),Fu=new k(0,0,1),bm={type:"added"},Nu={type:"removed"};class sn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new k,t=new Io,n=new Er,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new et}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Us,ba,this.up):mi.lookAt(ba,Us,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),zr.setFromRotationMatrix(mi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Nu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}sn.DEFAULT_UP=new k(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new k,_i=new k,ll=new k,gi=new k,kr=new k,Gr=new k,Bu=new k,cl=new k,ul=new k,hl=new k;let Aa=!1;class Dn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vn.subVectors(i,t),_i.subVectors(n,t),ll.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(_i),c=Vn.dot(ll),l=_i.dot(_i),u=_i.dot(ll),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(l*c-a*u)*h,v=(o*u-a*c)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,i,s,o,a,c){return Aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Aa=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,gi),c.setScalar(0),c.addScaledVector(s,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),_i.subVectors(e,t),Vn.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Aa=!0),Dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;kr.subVectors(i,n),Gr.subVectors(s,n),cl.subVectors(e,n);const c=kr.dot(cl),l=Gr.dot(cl);if(c<=0&&l<=0)return t.copy(n);ul.subVectors(e,i);const u=kr.dot(ul),f=Gr.dot(ul);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(kr,o);hl.subVectors(e,s);const d=kr.dot(hl),v=Gr.dot(hl);if(v>=0&&d<=v)return t.copy(s);const _=d*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Gr,a);const g=u*v-d*f;if(g<=0&&f-u>=0&&d-v>=0)return Bu.subVectors(s,i),a=(f-u)/(f-u+(d-v)),t.copy(i).addScaledVector(Bu,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(kr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Am=0;class wi extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=os,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uf,this.blendDst=hf,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},wa={h:0,s:0,l:0};function fl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Gn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Gn.workingColorSpace){if(e=cm(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fl(o,s,e+1/3),this.g=fl(o,s,e),this.b=fl(o,s,e-1/3)}return Gn.toWorkingColorSpace(this,i),this}setStyle(e,t=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){const n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return Gn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(tn(Ht.r*255,0,255))*65536+Math.round(tn(Ht.g*255,0,255))*256+Math.round(tn(Ht.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gn.workingColorSpace){Gn.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Gn.workingColorSpace){return Gn.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=We){Gn.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==We?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),Wn.h+=e,Wn.s+=t,Wn.l+=n,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(wa);const n=Jo(Wn.h,wa.h,t),i=Jo(Wn.s,wa.s,t),s=Jo(Wn.l,wa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new ot;ot.NAMES=yf;class Ef extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new k,Ra=new Ze;class si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Au,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Tf extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bf extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wm=0;const wn=new Rt,dl=new sn,Hr=new k,gn=new ma,Is=new ma,Dt=new k;class zn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?bf:Tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(gn.min,Is.min),gn.expandByPoint(Dt),Dt.addVectors(gn.max,Is.max),gn.expandByPoint(Dt)):(gn.expandByPoint(Is.min),gn.expandByPoint(Is.max))}gn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),Dt.add(Hr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let A=0;A<a;A++)l[A]=new k,u[A]=new k;const f=new k,h=new k,d=new k,v=new Ze,_=new Ze,g=new Ze,p=new k,E=new k;function M(A,W,N){f.fromArray(i,A*3),h.fromArray(i,W*3),d.fromArray(i,N*3),v.fromArray(o,A*2),_.fromArray(o,W*2),g.fromArray(o,N*2),h.sub(f),d.sub(f),_.sub(v),g.sub(v);const O=1/(_.x*g.y-g.x*_.y);isFinite(O)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(O),E.copy(d).multiplyScalar(_.x).addScaledVector(h,-g.x).multiplyScalar(O),l[A].add(p),l[W].add(p),l[N].add(p),u[A].add(E),u[W].add(E),u[N].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,W=y.length;A<W;++A){const N=y[A],O=N.start,z=N.count;for(let G=O,J=O+z;G<J;G+=3)M(n[G+0],n[G+1],n[G+2])}const S=new k,b=new k,R=new k,D=new k;function x(A){R.fromArray(s,A*3),D.copy(R);const W=l[A];S.copy(W),S.sub(R.multiplyScalar(R.dot(W))).normalize(),b.crossVectors(D,W);const O=b.dot(u[A])<0?-1:1;c[A*4]=S.x,c[A*4+1]=S.y,c[A*4+2]=S.z,c[A*4+3]=O}for(let A=0,W=y.length;A<W;++A){const N=y[A],O=N.start,z=N.count;for(let G=O,J=O+z;G<J;G+=3)x(n[G+0]),x(n[G+1]),x(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,v=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)h[v++]=l[d++]}return new si(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Rt,Qn=new yc,Ca=new _a,ku=new k,Vr=new k,Wr=new k,Xr=new k,pl=new k,Pa=new k,La=new Ze,Da=new Ze,Ua=new Ze,Gu=new k,Hu=new k,Vu=new k,Ia=new k,Oa=new k;class ii extends sn{constructor(e=new zn,t=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Pa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(pl.fromBufferAttribute(f,e),o?Pa.addScaledVector(pl,u):Pa.addScaledVector(pl.sub(t),u))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(Ca.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ca,ku)===null||Qn.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(zu.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(zu),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,v=f.length;d<v;d++){const _=f[d],g=s[_.materialIndex],p=Math.max(_.start,h.start),E=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let M=p,y=E;M<y;M+=3){const S=o.getX(M),b=o.getX(M+1),R=o.getX(M+2);n=Fa(this,g,e,Qn,c,l,u,S,b,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const d=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let _=d,g=v;_<g;_+=3){const p=o.getX(_),E=o.getX(_+1),M=o.getX(_+2);n=Fa(this,s,e,Qn,c,l,u,p,E,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,v=f.length;d<v;d++){const _=f[d],g=s[_.materialIndex],p=Math.max(_.start,h.start),E=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let M=p,y=E;M<y;M+=3){const S=M,b=M+1,R=M+2;n=Fa(this,g,e,Qn,c,l,u,S,b,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const d=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let _=d,g=v;_<g;_+=3){const p=_,E=_+1,M=_+2;n=Fa(this,s,e,Qn,c,l,u,p,E,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Rm(r,e,t,n,i,s,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Xi,a),c===null)return null;Oa.copy(a),Oa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:r}}function Fa(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Vr),r.getVertexPosition(c,Wr),r.getVertexPosition(l,Xr);const u=Rm(r,e,t,n,Vr,Wr,Xr,Ia);if(u){i&&(La.fromBufferAttribute(i,a),Da.fromBufferAttribute(i,c),Ua.fromBufferAttribute(i,l),u.uv=Dn.getInterpolation(Ia,Vr,Wr,Xr,La,Da,Ua,new Ze)),s&&(La.fromBufferAttribute(s,a),Da.fromBufferAttribute(s,c),Ua.fromBufferAttribute(s,l),u.uv1=Dn.getInterpolation(Ia,Vr,Wr,Xr,La,Da,Ua,new Ze),u.uv2=u.uv1),o&&(Gu.fromBufferAttribute(o,a),Hu.fromBufferAttribute(o,c),Vu.fromBufferAttribute(o,l),u.normal=Dn.getInterpolation(Ia,Vr,Wr,Xr,Gu,Hu,Vu,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new k,materialIndex:0};Dn.getNormal(Vr,Wr,Xr,f.normal),u.face=f}return u}class ga extends zn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function v(_,g,p,E,M,y,S,b,R,D,x){const A=y/R,W=S/D,N=y/2,O=S/2,z=b/2,G=R+1,J=D+1;let H=0,X=0;const ee=new k;for(let P=0;P<J;P++){const de=P*W-O;for(let ae=0;ae<G;ae++){const j=ae*A-N;ee[_]=j*E,ee[g]=de*M,ee[p]=z,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[p]=b>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(ae/R),f.push(1-P/D),H+=1}}for(let P=0;P<D;P++)for(let de=0;de<R;de++){const ae=h+de+G*P,j=h+de+G*(P+1),Q=h+(de+1)+G*(P+1),le=h+(de+1)+G*P;c.push(ae,j,le),c.push(j,Q,le),X+=6}a.addGroup(d,X,x),d+=X,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(r){const e={};for(let t=0;t<r.length;t++){const n=vs(r[t]);for(const i in n)e[i]=n[i]}return e}function Cm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Af(r){return r.getRenderTarget()===null?r.outputColorSpace:li}const Pm={clone:vs,merge:Zt};var Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wf extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends wf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class Um extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Un(qr,Yr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Un(qr,Yr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Un(qr,Yr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Un(qr,Yr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Un(qr,Yr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Un(qr,Yr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=bi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Rf extends Tn{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Im extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dr?We:pr),this.texture=new Rf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ga(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Gi});s.uniforms.tEquirect.value=t;const o=new ii(i,s),a=t.minFilter;return t.minFilter===sa&&(t.minFilter=Ln),new Um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ml=new k,Om=new k,Fm=new et;class ir{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ml.subVectors(n,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fm.getNormalMatrix(e),i=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new _a,Na=new k;class Cf{constructor(e=new ir,t=new ir,n=new ir,i=new ir,s=new ir,o=new ir){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],d=n[9],v=n[10],_=n[11],g=n[12],p=n[13],E=n[14],M=n[15];return t[0].setComponents(a-i,f-c,_-h,M-g).normalize(),t[1].setComponents(a+i,f+c,_+h,M+g).normalize(),t[2].setComponents(a+s,f+l,_+d,M+p).normalize(),t[3].setComponents(a-s,f-l,_-d,M-p).normalize(),t[4].setComponents(a-o,f-u,_-v,M-E).normalize(),t[5].setComponents(a+o,f+u,_+v,M+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,d=u.updateRange;r.bindBuffer(f,l),d.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Ec extends zn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,h=t/c,d=[],v=[],_=[],g=[];for(let p=0;p<u;p++){const E=p*h-o;for(let M=0;M<l;M++){const y=M*f-s;v.push(y,-E,0),_.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const M=E+l*p,y=E+l*(p+1),S=E+1+l*(p+1),b=E+1+l*p;d.push(M,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm="vec3 transformed = vec3( position );",Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,jm=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,r_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s_=`vec3 transformedNormal = objectNormal;
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
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,w_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,R_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,U_=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,I_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,N_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,H_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W_=`#if defined( USE_POINTS_UV )
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
#endif`,X_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
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
#endif`,K_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`#ifdef USE_MORPHTARGETS
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
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Cg=`#ifdef USE_UV
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
#endif`,Pg=`#ifdef USE_UV
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
#endif`,Lg=`#ifdef USE_UV
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zg=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define LAMBERT
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
}`,$g=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define NORMAL
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
}`,e0=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,n0=`#define PHONG
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define STANDARD
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
}`,r0=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
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
}`,a0=`#define TOON
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
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
}`,u0=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,h0=`uniform float rotation;
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
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Gm,aomap_fragment:Hm,aomap_pars_fragment:Vm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:e_,color_pars_vertex:t_,color_vertex:n_,common:i_,cube_uv_reflection_fragment:r_,defaultnormal_vertex:s_,displacementmap_pars_vertex:a_,displacementmap_vertex:o_,emissivemap_fragment:l_,emissivemap_pars_fragment:c_,encodings_fragment:u_,encodings_pars_fragment:h_,envmap_fragment:f_,envmap_common_pars_fragment:d_,envmap_pars_fragment:p_,envmap_pars_vertex:m_,envmap_physical_pars_fragment:w_,envmap_vertex:__,fog_vertex:g_,fog_pars_vertex:v_,fog_fragment:x_,fog_pars_fragment:M_,gradientmap_pars_fragment:S_,lightmap_fragment:y_,lightmap_pars_fragment:E_,lights_lambert_fragment:T_,lights_lambert_pars_fragment:b_,lights_pars_begin:A_,lights_toon_fragment:R_,lights_toon_pars_fragment:C_,lights_phong_fragment:P_,lights_phong_pars_fragment:L_,lights_physical_fragment:D_,lights_physical_pars_fragment:U_,lights_fragment_begin:I_,lights_fragment_maps:O_,lights_fragment_end:F_,logdepthbuf_fragment:N_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:z_,logdepthbuf_vertex:k_,map_fragment:G_,map_pars_fragment:H_,map_particle_fragment:V_,map_particle_pars_fragment:W_,metalnessmap_fragment:X_,metalnessmap_pars_fragment:q_,morphcolor_vertex:Y_,morphnormal_vertex:j_,morphtarget_pars_vertex:K_,morphtarget_vertex:$_,normal_fragment_begin:Z_,normal_fragment_maps:J_,normal_pars_fragment:Q_,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:sg,iridescence_pars_fragment:ag,output_fragment:og,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:_g,shadowmap_vertex:gg,shadowmask_pars_fragment:vg,skinbase_vertex:xg,skinning_pars_vertex:Mg,skinning_vertex:Sg,skinnormal_vertex:yg,specularmap_fragment:Eg,specularmap_pars_fragment:Tg,tonemapping_fragment:bg,tonemapping_pars_fragment:Ag,transmission_fragment:wg,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Dg,background_vert:Ug,background_frag:Ig,backgroundCube_vert:Og,backgroundCube_frag:Fg,cube_vert:Ng,cube_frag:Bg,depth_vert:zg,depth_frag:kg,distanceRGBA_vert:Gg,distanceRGBA_frag:Hg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:Yg,meshbasic_frag:jg,meshlambert_vert:Kg,meshlambert_frag:$g,meshmatcap_vert:Zg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:e0,meshphong_vert:t0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:r0,meshtoon_vert:s0,meshtoon_frag:a0,points_vert:o0,points_frag:l0,shadow_vert:c0,shadow_frag:u0,sprite_vert:h0,sprite_frag:f0},pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaTest:{value:0}}},ti={basic:{uniforms:Zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([pe.lights,pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ti.physical={uniforms:Zt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ba={r:0,b:0,g:0};function d0(r,e,t,n,i,s,o){const a=new ot(0);let c=s===!0?0:1,l,u,f=null,h=0,d=null;function v(g,p){let E=!1,M=p.isScene===!0?p.background:null;switch(M&&M.isTexture&&(M=(p.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),E=!0),r.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),E=!0;break}(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Uo)?(u===void 0&&(u=new ii(new ga(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:vs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=M.colorSpace!==We,(f!==M||h!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ii(new Ec(2,2),new Tr({name:"BackgroundMaterial",uniforms:vs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=M.colorSpace!==We,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(Ba,Af(r)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:v}}function p0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null);let l=c,u=!1;function f(z,G,J,H,X){let ee=!1;if(o){const P=_(H,J,G);l!==P&&(l=P,d(l.object)),ee=p(z,H,J,X),ee&&E(z,H,J,X)}else{const P=G.wireframe===!0;(l.geometry!==H.id||l.program!==J.id||l.wireframe!==P)&&(l.geometry=H.id,l.program=J.id,l.wireframe=P,ee=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,D(z,G,J,H),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function v(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,G,J){const H=J.wireframe===!0;let X=a[z.id];X===void 0&&(X={},a[z.id]=X);let ee=X[G.id];ee===void 0&&(ee={},X[G.id]=ee);let P=ee[H];return P===void 0&&(P=g(h()),ee[H]=P),P}function g(z){const G=[],J=[],H=[];for(let X=0;X<i;X++)G[X]=0,J[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:H,object:z,attributes:{},index:null}}function p(z,G,J,H){const X=l.attributes,ee=G.attributes;let P=0;const de=J.getAttributes();for(const ae in de)if(de[ae].location>=0){const Q=X[ae];let le=ee[ae];if(le===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;P++}return l.attributesNum!==P||l.index!==H}function E(z,G,J,H){const X={},ee=G.attributes;let P=0;const de=J.getAttributes();for(const ae in de)if(de[ae].location>=0){let Q=ee[ae];Q===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),X[ae]=le,P++}l.attributes=X,l.attributesNum=P,l.index=H}function M(){const z=l.newAttributes;for(let G=0,J=z.length;G<J;G++)z[G]=0}function y(z){S(z,0)}function S(z,G){const J=l.newAttributes,H=l.enabledAttributes,X=l.attributeDivisors;J[z]=1,H[z]===0&&(r.enableVertexAttribArray(z),H[z]=1),X[z]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,G),X[z]=G)}function b(){const z=l.newAttributes,G=l.enabledAttributes;for(let J=0,H=G.length;J<H;J++)G[J]!==z[J]&&(r.disableVertexAttribArray(J),G[J]=0)}function R(z,G,J,H,X,ee){n.isWebGL2===!0&&(J===r.INT||J===r.UNSIGNED_INT)?r.vertexAttribIPointer(z,G,J,X,ee):r.vertexAttribPointer(z,G,J,H,X,ee)}function D(z,G,J,H){if(n.isWebGL2===!1&&(z.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=H.attributes,ee=J.getAttributes(),P=G.defaultAttributeValues;for(const de in ee){const ae=ee[de];if(ae.location>=0){let j=X[de];if(j===void 0&&(de==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),de==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),j!==void 0){const Q=j.normalized,le=j.itemSize,oe=t.get(j);if(oe===void 0)continue;const U=oe.buffer,Ce=oe.type,Ie=oe.bytesPerElement;if(j.isInterleavedBufferAttribute){const ce=j.data,we=ce.stride,Me=j.offset;if(ce.isInstancedInterleavedBuffer){for(let ge=0;ge<ae.locationSize;ge++)S(ae.location+ge,ce.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ge=0;ge<ae.locationSize;ge++)y(ae.location+ge);r.bindBuffer(r.ARRAY_BUFFER,U);for(let ge=0;ge<ae.locationSize;ge++)R(ae.location+ge,le/ae.locationSize,Ce,Q,we*Ie,(Me+le/ae.locationSize*ge)*Ie)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<ae.locationSize;ce++)S(ae.location+ce,j.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<ae.locationSize;ce++)y(ae.location+ce);r.bindBuffer(r.ARRAY_BUFFER,U);for(let ce=0;ce<ae.locationSize;ce++)R(ae.location+ce,le/ae.locationSize,Ce,Q,le*Ie,le/ae.locationSize*ce*Ie)}}else if(P!==void 0){const Q=P[de];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(ae.location,Q);break;case 3:r.vertexAttrib3fv(ae.location,Q);break;case 4:r.vertexAttrib4fv(ae.location,Q);break;default:r.vertexAttrib1fv(ae.location,Q)}}}}b()}function x(){N();for(const z in a){const G=a[z];for(const J in G){const H=G[J];for(const X in H)v(H[X].object),delete H[X];delete G[J]}delete a[z]}}function A(z){if(a[z.id]===void 0)return;const G=a[z.id];for(const J in G){const H=G[J];for(const X in H)v(H[X].object),delete H[X];delete G[J]}delete a[z.id]}function W(z){for(const G in a){const J=a[G];if(J[z.id]===void 0)continue;const H=J[z.id];for(const X in H)v(H[X].object),delete H[X];delete J[z.id]}}function N(){O(),u=!0,l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:N,resetDefaultState:O,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:y,disableUnusedAttributes:b}}function m0(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function _0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,y=o||e.has("OES_texture_float"),S=M&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:b}}function g0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ir,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=r.get(f);if(!i||v===null||v.length===0||s&&!g)s?u(null):l();else{const E=s?0:n,M=E*4;let y=p.clippingState||null;c.value=y,y=u(v,h,M,d);for(let S=0;S!==M;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,v){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=c.value,v!==!0||g===null){const p=d+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(f[M]).applyMatrix4(E,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function v0(r){let e=new WeakMap;function t(o,a){return a===Gl?o.mapping=ms:a===Hl&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Gl||a===Hl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Im(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class x0 extends wf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Wu=[.125,.215,.35,.446,.526,.582],or=20,_l=new x0,Xu=new ot;let gl=null;const rr=(1+Math.sqrt(5))/2,jr=1/rr,qu=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,rr,jr),new k(0,rr,-jr),new k(jr,0,rr),new k(-jr,0,rr),new k(rr,jr,0),new k(-rr,jr,0)];class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){gl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:aa,format:Kn,colorSpace:li,depthBuffer:!1},i=ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M0(s)),this._blurMaterial=S0(s,e,t)}return i}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,i){const a=new Un(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Xu),u.toneMapping=bi,u.autoClear=!1;const d=new Ef({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),v=new ii(new ga,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Xu),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;za(i,E*M,p>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=qu[(i-1)%qu.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[i],l),h=l.uniforms,d=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*or-1),_=s/v,g=isFinite(s)?1+Math.floor(u*_):or;g>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${or}`);const p=[];let E=0;for(let R=0;R<or;++R){const D=R/_,x=Math.exp(-D*D/2);p.push(x),R===0?E+=x:R<g&&(E+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-n;const y=this._sizeLods[i],S=3*y*(i>M-ts?i-M+ts:0),b=4*(this._cubeSize-y);za(t,S,b,3*y,2*y),c.setRenderTarget(t),c.render(f,_l)}}function M0(r){const e=[],t=[],n=[];let i=r;const s=r-ts+1+Wu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ts?c=Wu[o-r+ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,_=3,g=2,p=1,E=new Float32Array(_*v*d),M=new Float32Array(g*v*d),y=new Float32Array(p*v*d);for(let b=0;b<d;b++){const R=b%3*2/3-1,D=b>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];E.set(x,_*v*b),M.set(h,g*v*b);const A=[b,b,b,b,b,b];y.set(A,p*v*b)}const S=new zn;S.setAttribute("position",new si(E,_)),S.setAttribute("uv",new si(M,g)),S.setAttribute("faceIndex",new si(y,p)),e.push(S),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ju(r,e,t){const n=new yr(r,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function S0(r,e,t){const n=new Float32Array(or),i=new k(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ku(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function $u(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function y0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gl||c===Hl,u=c===ms||c===_s;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Yu(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Yu(r));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function E0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function T0(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)e.update(h[v],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const _=d[v];for(let g=0,p=_.length;g<p;g++)e.update(_[g],r.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,v=f.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let M=0,y=E.length;M<y;M+=3){const S=E[M+0],b=E[M+1],R=E[M+2];h.push(S,b,b,R,R,S)}}else{const E=v.array;_=v.version;for(let M=0,y=E.length/3-1;M<y;M+=3){const S=M+0,b=M+1,R=M+2;h.push(S,b,b,R,R,S)}}const g=new(gf(h)?bf:Tf)(h,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function b0(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,d){r.drawElements(s,d,a,h*c),t.update(d,s,1)}function f(h,d,v){if(v===0)return;let _,g;if(i)_=r,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,d,a,h*c,v),t.update(d,s,v)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function A0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w0(r,e){return r[0]-e[0]}function R0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function C0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let G=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var d=G;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let x=0;M===!0&&(x=1),y===!0&&(x=2),S===!0&&(x=3);let A=u.attributes.position.count*x,W=1;A>e.maxTextureSize&&(W=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const N=new Float32Array(A*W*4*_),O=new Mf(N,A,W,_);O.type=cr,O.needsUpdate=!0;const z=x*4;for(let J=0;J<_;J++){const H=b[J],X=R[J],ee=D[J],P=A*W*4*J;for(let de=0;de<H.count;de++){const ae=de*z;M===!0&&(o.fromBufferAttribute(H,de),N[P+ae+0]=o.x,N[P+ae+1]=o.y,N[P+ae+2]=o.z,N[P+ae+3]=0),y===!0&&(o.fromBufferAttribute(X,de),N[P+ae+4]=o.x,N[P+ae+5]=o.y,N[P+ae+6]=o.z,N[P+ae+7]=0),S===!0&&(o.fromBufferAttribute(ee,de),N[P+ae+8]=o.x,N[P+ae+9]=o.y,N[P+ae+10]=o.z,N[P+ae+11]=ee.itemSize===4?o.w:1)}}g={count:_,texture:O,size:new Ze(A,W)},s.set(u,g),u.addEventListener("dispose",G)}let p=0;for(let M=0;M<h.length;M++)p+=h[M];const E=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const v=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==v){_=[];for(let y=0;y<v;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<v;y++){const S=_[y];S[0]=y,S[1]=h[y]}_.sort(R0);for(let y=0;y<8;y++)y<v&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(w0);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const S=a[y],b=S[0],R=S[1];b!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+y)!==g[b]&&u.setAttribute("morphTarget"+y,g[b]),p&&u.getAttribute("morphNormal"+y)!==p[b]&&u.setAttribute("morphNormal"+y,p[b]),i[y]=R,E+=R):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function P0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Lf=new Tn,Df=new Mf,Uf=new vm,If=new Rf,Zu=[],Ju=[],Qu=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Zu[i];if(s===void 0&&(s=new Float32Array(i),Zu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Oo(r,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function L0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function D0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function U0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function O0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;th.set(n),r.uniformMatrix2fv(this.addr,!1,th),Pt(t,n)}}function F0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;eh.set(n),r.uniformMatrix3fv(this.addr,!1,eh),Pt(t,n)}}function N0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Qu.set(n),r.uniformMatrix4fv(this.addr,!1,Qu),Pt(t,n)}}function B0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function H0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function V0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function W0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Lf,i)}function Y0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Uf,i)}function j0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||If,i)}function K0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Df,i)}function $0(r){switch(r){case 5126:return L0;case 35664:return D0;case 35665:return U0;case 35666:return I0;case 35674:return O0;case 35675:return F0;case 35676:return N0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return K0}}function Z0(r,e){r.uniform1fv(this.addr,e)}function J0(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function Q0(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function ev(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function tv(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nv(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iv(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rv(r,e){r.uniform1iv(this.addr,e)}function sv(r,e){r.uniform2iv(this.addr,e)}function av(r,e){r.uniform3iv(this.addr,e)}function ov(r,e){r.uniform4iv(this.addr,e)}function lv(r,e){r.uniform1uiv(this.addr,e)}function cv(r,e){r.uniform2uiv(this.addr,e)}function uv(r,e){r.uniform3uiv(this.addr,e)}function hv(r,e){r.uniform4uiv(this.addr,e)}function fv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lf,s[o])}function dv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Uf,s[o])}function pv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||If,s[o])}function mv(r,e,t){const n=this.cache,i=e.length,s=Oo(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Df,s[o])}function _v(r){switch(r){case 5126:return Z0;case 35664:return J0;case 35665:return Q0;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$0(t.type)}}class vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_v(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function nh(r,e){r.seq.push(e),r.map[e.id]=e}function Mv(r,e,t){const n=r.name,i=n.length;for(vl.lastIndex=0;;){const s=vl.exec(n),o=vl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){nh(t,l===void 0?new gv(a,r,e):new vv(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new xv(a),nh(t,f)),t=f}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Mv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ih(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Sv=0;function yv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ev(r){switch(r){case li:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function rh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+yv(r.getShaderSource(e),o)}else return i}function Tv(r,e){const t=Ev(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bv(r,e){let t;switch(e){case Bp:t="Linear";break;case zp:t="Reinhard";break;case kp:t="OptimizedCineon";break;case Gp:t="ACESFilmic";break;case Hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Av(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function wv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Bs(r){return r!==""}function sh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(r){return r.replace(Cv,Pv)}function Pv(r,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yl(t)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(r){return r.replace(Lv,Dv)}function Dv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_p?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Iv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ms:case _s:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Fv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fp:e="ENVMAP_BLENDING_MIX";break;case Np:e="ENVMAP_BLENDING_ADD";break}return e}function Nv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Uv(t),l=Iv(t),u=Ov(t),f=Fv(t),h=Nv(t),d=t.isWebGL2?"":Av(t),v=wv(s),_=i.createProgram();let g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[v].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=[d,v].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[lh(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[d,lh(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?qe.tonemapping_pars_fragment:"",t.toneMapping!==bi?bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Yl(o),o=sh(o,t),o=ah(o,t),a=Yl(a),a=sh(a,t),a=ah(a,t),o=oh(o),a=oh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+g+o,y=E+p+a,S=ih(i,i.VERTEX_SHADER,M),b=ih(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,S),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),A=i.getShaderInfoLog(S).trim(),W=i.getShaderInfoLog(b).trim();let N=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{const z=rh(i,S,"vertex"),G=rh(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+z+`
`+G)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(A===""||W==="")&&(O=!1);O&&(this.diagnostics={runnable:N,programLog:x,vertexShader:{log:A,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(S),i.deleteShader(b);let R;this.getUniforms=function(){return R===void 0&&(R=new so(i,_)),R};let D;return this.getAttributes=function(){return D===void 0&&(D=Rv(i,_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let zv=0;class kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gv(e),t.set(e,n)),n}}class Gv{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}}function Hv(r,e,t,n,i,s,o){const a=new Sf,c=new kv,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function g(x,A,W,N,O){const z=N.fog,G=O.geometry,J=x.isMeshStandardMaterial?N.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),X=H&&H.mapping===Uo?H.image.height:null,ee=v[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const P=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=P!==void 0?P.length:0;let ae=0;G.morphAttributes.position!==void 0&&(ae=1),G.morphAttributes.normal!==void 0&&(ae=2),G.morphAttributes.color!==void 0&&(ae=3);let j,Q,le,oe;if(ee){const nt=ti[ee];j=nt.vertexShader,Q=nt.fragmentShader}else j=x.vertexShader,Q=x.fragmentShader,c.update(x),le=c.getVertexShaderID(x),oe=c.getFragmentShaderID(x);const U=r.getRenderTarget(),Ce=O.isInstancedMesh===!0,Ie=!!x.map,ce=!!x.matcap,we=!!H,Me=!!x.aoMap,ge=!!x.lightMap,Oe=!!x.bumpMap,it=!!x.normalMap,Xe=!!x.displacementMap,Y=!!x.emissiveMap,st=!!x.metalnessMap,Le=!!x.roughnessMap,Qe=x.clearcoat>0,ft=x.iridescence>0,C=x.sheen>0,T=x.transmission>0,$=Qe&&!!x.clearcoatMap,re=Qe&&!!x.clearcoatNormalMap,ne=Qe&&!!x.clearcoatRoughnessMap,ue=ft&&!!x.iridescenceMap,L=ft&&!!x.iridescenceThicknessMap,te=C&&!!x.sheenColorMap,V=C&&!!x.sheenRoughnessMap,he=!!x.specularMap,xe=!!x.specularColorMap,be=!!x.specularIntensityMap,_e=T&&!!x.transmissionMap,Ee=T&&!!x.thicknessMap,Ne=!!x.gradientMap,me=!!x.alphaMap,at=x.alphaTest>0,I=!!x.extensions,K=!!G.attributes.uv1,ie=!!G.attributes.uv2,fe=!!G.attributes.uv3;return{isWebGL2:u,shaderID:ee,shaderName:x.type,vertexShader:j,fragmentShader:Q,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:U===null?r.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:li,map:Ie,matcap:ce,envMap:we,envMapMode:we&&H.mapping,envMapCubeUVHeight:X,aoMap:Me,lightMap:ge,bumpMap:Oe,normalMap:it,displacementMap:h&&Xe,emissiveMap:Y,normalMapObjectSpace:it&&x.normalMapType===om,normalMapTangentSpace:it&&x.normalMapType===mf,metalnessMap:st,roughnessMap:Le,clearcoat:Qe,clearcoatMap:$,clearcoatNormalMap:re,clearcoatRoughnessMap:ne,iridescence:ft,iridescenceMap:ue,iridescenceThicknessMap:L,sheen:C,sheenColorMap:te,sheenRoughnessMap:V,specularMap:he,specularColorMap:xe,specularIntensityMap:be,transmission:T,transmissionMap:_e,thicknessMap:Ee,gradientMap:Ne,opaque:x.transparent===!1&&x.blending===os,alphaMap:me,alphaTest:at,combine:x.combine,mapUv:Ie&&_(x.map.channel),aoMapUv:Me&&_(x.aoMap.channel),lightMapUv:ge&&_(x.lightMap.channel),bumpMapUv:Oe&&_(x.bumpMap.channel),normalMapUv:it&&_(x.normalMap.channel),displacementMapUv:Xe&&_(x.displacementMap.channel),emissiveMapUv:Y&&_(x.emissiveMap.channel),metalnessMapUv:st&&_(x.metalnessMap.channel),roughnessMapUv:Le&&_(x.roughnessMap.channel),clearcoatMapUv:$&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:L&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&_(x.sheenRoughnessMap.channel),specularMapUv:he&&_(x.specularMap.channel),specularColorMapUv:xe&&_(x.specularColorMap.channel),specularIntensityMapUv:be&&_(x.specularIntensityMap.channel),transmissionMapUv:_e&&_(x.transmissionMap.channel),thicknessMapUv:Ee&&_(x.thicknessMap.channel),alphaMapUv:me&&_(x.alphaMap.channel),vertexTangents:it&&!!G.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:ie,vertexUv3s:fe,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Ie||me),fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:bi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:I&&x.extensions.derivatives===!0,extensionFragDepth:I&&x.extensions.fragDepth===!0,extensionDrawBuffers:I&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)A.push(W),A.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(E(A,x),M(A,x),A.push(r.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function E(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),x.push(a.mask)}function y(x){const A=v[x.type];let W;if(A){const N=ti[A];W=Pm.clone(N.uniforms)}else W=x.uniforms;return W}function S(x,A){let W;for(let N=0,O=l.length;N<O;N++){const z=l[N];if(z.cacheKey===A){W=z,++W.usedTimes;break}}return W===void 0&&(W=new Bv(r,A,x,s),l.push(W)),W}function b(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function R(x){c.remove(x)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:D}}function Vv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ch(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,v,_,g){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:_,group:g},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,h,d,v,_,g){const p=o(f,h,d,v,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(f,h,d,v,_,g){const p=o(f,h,d,v,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||Wv),n.length>1&&n.sort(h||ch),i.length>1&&i.sort(h||ch)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function Xv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new uh,r.set(n,[o])):i>=s.length?(o=new uh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function qv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ot};break;case"SpotLight":t={position:new k,direction:new k,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function Yv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jv=0;function Kv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $v(r,e){const t=new qv,n=Yv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,o=new Rt,a=new Rt;function c(u,f){let h=0,d=0,v=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let _=0,g=0,p=0,E=0,M=0,y=0,S=0,b=0,R=0,D=0;u.sort(Kv);const x=f===!0?Math.PI:1;for(let W=0,N=u.length;W<N;W++){const O=u[W],z=O.color,G=O.intensity,J=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=z.r*G*x,d+=z.g*G*x,v+=z.b*G*x;else if(O.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(O.sh.coefficients[X],G);else if(O.isDirectionalLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const ee=O.shadow,P=n.get(O);P.shadowBias=ee.bias,P.shadowNormalBias=ee.normalBias,P.shadowRadius=ee.radius,P.shadowMapSize=ee.mapSize,i.directionalShadow[_]=P,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=O.shadow.matrix,y++}i.directional[_]=X,_++}else if(O.isSpotLight){const X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(z).multiplyScalar(G*x),X.distance=J,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,i.spot[p]=X;const ee=O.shadow;if(O.map&&(i.spotLightMap[R]=O.map,R++,ee.updateMatrices(O),O.castShadow&&D++),i.spotLightMatrix[p]=ee.matrix,O.castShadow){const P=n.get(O);P.shadowBias=ee.bias,P.shadowNormalBias=ee.normalBias,P.shadowRadius=ee.radius,P.shadowMapSize=ee.mapSize,i.spotShadow[p]=P,i.spotShadowMap[p]=H,b++}p++}else if(O.isRectAreaLight){const X=t.get(O);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),i.rectArea[E]=X,E++}else if(O.isPointLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*x),X.distance=O.distance,X.decay=O.decay,O.castShadow){const ee=O.shadow,P=n.get(O);P.shadowBias=ee.bias,P.shadowNormalBias=ee.normalBias,P.shadowRadius=ee.radius,P.shadowMapSize=ee.mapSize,P.shadowCameraNear=ee.camera.near,P.shadowCameraFar=ee.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=O.shadow.matrix,S++}i.point[g]=X,g++}else if(O.isHemisphereLight){const X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(G*x),X.groundColor.copy(O.groundColor).multiplyScalar(G*x),i.hemi[M]=X,M++}}E>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=v;const A=i.hash;(A.directionalLength!==_||A.pointLength!==g||A.spotLength!==p||A.rectAreaLength!==E||A.hemiLength!==M||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==b||A.numSpotMaps!==R)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=E,i.point.length=g,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,A.directionalLength=_,A.pointLength=g,A.spotLength=p,A.rectAreaLength=E,A.hemiLength=M,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=b,A.numSpotMaps=R,i.version=jv++)}function l(u,f){let h=0,d=0,v=0,_=0,g=0;const p=f.matrixWorldInverse;for(let E=0,M=u.length;E<M;E++){const y=u[E];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(y.isSpotLight){const S=i.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),v++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function hh(r,e){const t=new $v(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Zv(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new hh(r,e),t.set(s,[c])):o>=a.length?(c=new hh(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jv extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;function nx(r,e,t){let n=new Cf;const i=new Ze,s=new Ze,o=new zt,a=new Jv({depthPacking:am}),c=new Qv,l={},u=t.maxTextureSize,f={[Xi]:cn,[cn]:Xi,[yi]:yi},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ii(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let p=this.type;this.render=function(S,b,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const D=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Gi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const N=p!==xi&&this.type===xi,O=p===xi&&this.type!==xi;for(let z=0,G=S.length;z<G;z++){const J=S[z],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const X=H.getFrameExtents();if(i.multiply(X),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,H.mapSize.y=s.y)),H.map===null||N===!0||O===!0){const P=this.type!==xi?{minFilter:Qt,magFilter:Qt}:{};H.map!==null&&H.map.dispose(),H.map=new yr(i.x,i.y,P),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ee=H.getViewportCount();for(let P=0;P<ee;P++){const de=H.getViewport(P);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),W.viewport(o),H.updateMatrices(J,P),n=H.getFrustum(),y(b,R,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===xi&&E(H,R),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(D,x,A)};function E(S,b){const R=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yr(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,R,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,R,d,_,null)}function M(S,b,R,D){let x=null;const A=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=x.uuid,N=b.uuid;let O=l[W];O===void 0&&(O={},l[W]=O);let z=O[N];z===void 0&&(z=x.clone(),O[N]=z),x=z}if(x.visible=b.visible,x.wireframe=b.wireframe,D===xi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=r.properties.get(x);W.light=R}return x}function y(S,b,R,D,x){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===xi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const N=e.update(S),O=S.material;if(Array.isArray(O)){const z=N.groups;for(let G=0,J=z.length;G<J;G++){const H=z[G],X=O[H.materialIndex];if(X&&X.visible){const ee=M(S,X,D,x);r.renderBufferDirect(R,null,N,ee,S,H)}}}else if(O.visible){const z=M(S,O,D,x);r.renderBufferDirect(R,null,N,z,S,null)}}const W=S.children;for(let N=0,O=W.length;N<O;N++)y(W[N],b,R,D,x)}}function ix(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const K=new zt;let ie=null;const fe=new zt(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!I&&(r.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,nt,je,gt,Be){Be===!0&&(Ae*=gt,nt*=gt,je*=gt),K.set(Ae,nt,je,gt),fe.equals(K)===!1&&(r.clearColor(Ae,nt,je,gt),fe.copy(K))},reset:function(){I=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,K=null,ie=null,fe=null;return{setTest:function(Ae){Ae?U(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Ae){K!==Ae&&!I&&(r.depthMask(Ae),K=Ae)},setFunc:function(Ae){if(ie!==Ae){switch(Ae){case Cp:r.depthFunc(r.NEVER);break;case Pp:r.depthFunc(r.ALWAYS);break;case Lp:r.depthFunc(r.LESS);break;case kl:r.depthFunc(r.LEQUAL);break;case Dp:r.depthFunc(r.EQUAL);break;case Up:r.depthFunc(r.GEQUAL);break;case Ip:r.depthFunc(r.GREATER);break;case Op:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ie=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){fe!==Ae&&(r.clearDepth(Ae),fe=Ae)},reset:function(){I=!1,K=null,ie=null,fe=null}}}function o(){let I=!1,K=null,ie=null,fe=null,Ae=null,nt=null,je=null,gt=null,Be=null;return{setTest:function(ve){I||(ve?U(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(ve){K!==ve&&!I&&(r.stencilMask(ve),K=ve)},setFunc:function(ve,se,Re){(ie!==ve||fe!==se||Ae!==Re)&&(r.stencilFunc(ve,se,Re),ie=ve,fe=se,Ae=Re)},setOp:function(ve,se,Re){(nt!==ve||je!==se||gt!==Re)&&(r.stencilOp(ve,se,Re),nt=ve,je=se,gt=Re)},setLocked:function(ve){I=ve},setClear:function(ve){Be!==ve&&(r.clearStencil(ve),Be=ve)},reset:function(){I=!1,K=null,ie=null,fe=null,Ae=null,nt=null,je=null,gt=null,Be=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},v=new WeakMap,_=[],g=null,p=!1,E=null,M=null,y=null,S=null,b=null,R=null,D=null,x=!1,A=null,W=null,N=null,O=null,z=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=H>=2);let ee=null,P={};const de=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),j=new zt().fromArray(de),Q=new zt().fromArray(ae);function le(I,K,ie,fe){const Ae=new Uint8Array(4),nt=r.createTexture();r.bindTexture(I,nt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<ie;je++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(K,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(K+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return nt}const oe={};oe[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(oe[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),U(r.DEPTH_TEST),c.setFunc(kl),Xe(!1),Y(Zc),U(r.CULL_FACE),Oe(Gi);function U(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Ce(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Ie(I,K){return d[I]!==K?(r.bindFramebuffer(I,K),d[I]=K,n&&(I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=K),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=K)),!0):!1}function ce(I,K){let ie=_,fe=!1;if(I)if(ie=v.get(K),ie===void 0&&(ie=[],v.set(K,ie)),I.isWebGLMultipleRenderTargets){const Ae=I.texture;if(ie.length!==Ae.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let nt=0,je=Ae.length;nt<je;nt++)ie[nt]=r.COLOR_ATTACHMENT0+nt;ie.length=Ae.length,fe=!0}}else ie[0]!==r.COLOR_ATTACHMENT0&&(ie[0]=r.COLOR_ATTACHMENT0,fe=!0);else ie[0]!==r.BACK&&(ie[0]=r.BACK,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function we(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Me={[Jr]:r.FUNC_ADD,[vp]:r.FUNC_SUBTRACT,[xp]:r.FUNC_REVERSE_SUBTRACT};if(n)Me[eu]=r.MIN,Me[tu]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Me[eu]=I.MIN_EXT,Me[tu]=I.MAX_EXT)}const ge={[Mp]:r.ZERO,[Sp]:r.ONE,[yp]:r.SRC_COLOR,[uf]:r.SRC_ALPHA,[Rp]:r.SRC_ALPHA_SATURATE,[Ap]:r.DST_COLOR,[Tp]:r.DST_ALPHA,[Ep]:r.ONE_MINUS_SRC_COLOR,[hf]:r.ONE_MINUS_SRC_ALPHA,[wp]:r.ONE_MINUS_DST_COLOR,[bp]:r.ONE_MINUS_DST_ALPHA};function Oe(I,K,ie,fe,Ae,nt,je,gt){if(I===Gi){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(U(r.BLEND),p=!0),I!==gp){if(I!==E||gt!==x){if((M!==Jr||b!==Jr)&&(r.blendEquation(r.FUNC_ADD),M=Jr,b=Jr),gt)switch(I){case os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.ONE,r.ONE);break;case Jc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,R=null,D=null,E=I,x=gt}return}Ae=Ae||K,nt=nt||ie,je=je||fe,(K!==M||Ae!==b)&&(r.blendEquationSeparate(Me[K],Me[Ae]),M=K,b=Ae),(ie!==y||fe!==S||nt!==R||je!==D)&&(r.blendFuncSeparate(ge[ie],ge[fe],ge[nt],ge[je]),y=ie,S=fe,R=nt,D=je),E=I,x=!1}function it(I,K){I.side===yi?Ce(r.CULL_FACE):U(r.CULL_FACE);let ie=I.side===cn;K&&(ie=!ie),Xe(ie),I.blending===os&&I.transparent===!1?Oe(Gi):Oe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const fe=I.stencilWrite;l.setTest(fe),fe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){A!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),A=I)}function Y(I){I!==pp?(U(r.CULL_FACE),I!==W&&(I===Zc?r.cullFace(r.BACK):I===mp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),W=I}function st(I){I!==N&&(J&&r.lineWidth(I),N=I)}function Le(I,K,ie){I?(U(r.POLYGON_OFFSET_FILL),(O!==K||z!==ie)&&(r.polygonOffset(K,ie),O=K,z=ie)):Ce(r.POLYGON_OFFSET_FILL)}function Qe(I){I?U(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function ft(I){I===void 0&&(I=r.TEXTURE0+G-1),ee!==I&&(r.activeTexture(I),ee=I)}function C(I,K,ie){ie===void 0&&(ee===null?ie=r.TEXTURE0+G-1:ie=ee);let fe=P[ie];fe===void 0&&(fe={type:void 0,texture:void 0},P[ie]=fe),(fe.type!==I||fe.texture!==K)&&(ee!==ie&&(r.activeTexture(ie),ee=ie),r.bindTexture(I,K||oe[I]),fe.type=I,fe.texture=K)}function T(){const I=P[ee];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(I){j.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function Ee(I){Q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function Ne(I,K){let ie=f.get(K);ie===void 0&&(ie=new WeakMap,f.set(K,ie));let fe=ie.get(I);fe===void 0&&(fe=r.getUniformBlockIndex(K,I.name),ie.set(I,fe))}function me(I,K){const fe=f.get(K).get(I);u.get(K)!==fe&&(r.uniformBlockBinding(K,fe,I.__bindingPointIndex),u.set(K,fe))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ee=null,P={},d={},v=new WeakMap,_=[],g=null,p=!1,E=null,M=null,y=null,S=null,b=null,R=null,D=null,x=!1,A=null,W=null,N=null,O=null,z=null,j.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:U,disable:Ce,bindFramebuffer:Ie,drawBuffers:ce,useProgram:we,setBlending:Oe,setMaterial:it,setFlipSided:Xe,setCullFace:Y,setLineWidth:st,setPolygonOffset:Le,setScissorTest:Qe,activeTexture:ft,bindTexture:C,unbindTexture:T,compressedTexImage2D:$,compressedTexImage3D:re,texImage2D:xe,texImage3D:be,updateUBOMapping:Ne,uniformBlockBinding:me,texStorage2D:V,texStorage3D:he,texSubImage2D:ne,texSubImage3D:ue,compressedTexSubImage2D:L,compressedTexSubImage3D:te,scissor:_e,viewport:Ee,reset:at}}function rx(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,T){return p?new OffscreenCanvas(C,T):xo("canvas")}function M(C,T,$,re){let ne=1;if((C.width>re||C.height>re)&&(ne=re/Math.max(C.width,C.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ue=T?um:Math.floor,L=ue(ne*C.width),te=ue(ne*C.height);_===void 0&&(_=E(L,te));const V=$?E(L,te):_;return V.width=L,V.height=te,V.getContext("2d").drawImage(C,0,0,L,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+L+"x"+te+")."),V}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Ru(C.width)&&Ru(C.height)}function S(C){return a?!1:C.wrapS!==jn||C.wrapT!==jn||C.minFilter!==Qt&&C.minFilter!==Ln}function b(C,T){return C.generateMipmaps&&T&&C.minFilter!==Qt&&C.minFilter!==Ln}function R(C){r.generateMipmap(C)}function D(C,T,$,re,ne=!1){if(a===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue=T;return T===r.RED&&($===r.FLOAT&&(ue=r.R32F),$===r.HALF_FLOAT&&(ue=r.R16F),$===r.UNSIGNED_BYTE&&(ue=r.R8)),T===r.RG&&($===r.FLOAT&&(ue=r.RG32F),$===r.HALF_FLOAT&&(ue=r.RG16F),$===r.UNSIGNED_BYTE&&(ue=r.RG8)),T===r.RGBA&&($===r.FLOAT&&(ue=r.RGBA32F),$===r.HALF_FLOAT&&(ue=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ue=re===We&&ne===!1?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)),(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(C,T,$){return b(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){return C===Qt||C===nu||C===Wo?r.NEAREST:r.LINEAR}function W(C){const T=C.target;T.removeEventListener("dispose",W),O(T),T.isVideoTexture&&v.delete(T)}function N(C){const T=C.target;T.removeEventListener("dispose",N),G(T)}function O(C){const T=n.get(C);if(T.__webglInit===void 0)return;const $=C.source,re=g.get($);if(re){const ne=re[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(C),Object.keys(re).length===0&&g.delete($)}n.remove(C)}function z(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const $=C.source,re=g.get($);delete re[T.__cacheKey],o.memory.textures--}function G(C){const T=C.texture,$=n.get(C),re=n.get(T);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer($.__webglFramebuffer[ne]),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ne=0;ne<$.__webglColorRenderbuffer.length;ne++)$.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[ne]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,ue=T.length;ne<ue;ne++){const L=n.get(T[ne]);L.__webglTexture&&(r.deleteTexture(L.__webglTexture),o.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(C)}let J=0;function H(){J=0}function X(){const C=J;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),J+=1,C}function ee(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function P(C,T){const $=n.get(C);if(C.isVideoTexture&&Qe(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce($,C,T);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function de(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){Ce($,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function ae(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){Ce($,C,T);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function j(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){Ie($,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}const Q={[Vl]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[Wl]:r.MIRRORED_REPEAT},le={[Qt]:r.NEAREST,[nu]:r.NEAREST_MIPMAP_NEAREST,[Wo]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[Vp]:r.LINEAR_MIPMAP_NEAREST,[sa]:r.LINEAR_MIPMAP_LINEAR};function oe(C,T,$){if($?(r.texParameteri(C,r.TEXTURE_WRAP_S,Q[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,le[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,le[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==jn||T.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Qt&&T.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Qt||T.minFilter!==Wo&&T.minFilter!==sa||T.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===aa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function U(C,T){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",W));const re=T.source;let ne=g.get(re);ne===void 0&&(ne={},g.set(re,ne));const ue=ee(T);if(ue!==C.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ne[ue].usedTimes++;const L=ne[C.__cacheKey];L!==void 0&&(ne[C.__cacheKey].usedTimes--,L.usedTimes===0&&z(T)),C.__cacheKey=ue,C.__webglTexture=ne[ue].texture}return $}function Ce(C,T,$){let re=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=r.TEXTURE_3D);const ne=U(C,T),ue=T.source;t.bindTexture(re,C.__webglTexture,r.TEXTURE0+$);const L=n.get(ue);if(ue.version!==L.__version||ne===!0){t.activeTexture(r.TEXTURE0+$),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const te=S(T)&&y(T.image)===!1;let V=M(T.image,te,!1,u);V=ft(T,V);const he=y(V)||a,xe=s.convert(T.format,T.colorSpace);let be=s.convert(T.type),_e=D(T.internalFormat,xe,be,T.colorSpace);oe(re,T,he);let Ee;const Ne=T.mipmaps,me=a&&T.isVideoTexture!==!0,at=L.__version===void 0||ne===!0,I=x(T,V,he);if(T.isDepthTexture)_e=r.DEPTH_COMPONENT,a?T.type===cr?_e=r.DEPTH_COMPONENT32F:T.type===lr?_e=r.DEPTH_COMPONENT24:T.type===ls?_e=r.DEPTH24_STENCIL8:_e=r.DEPTH_COMPONENT16:T.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===fr&&_e===r.DEPTH_COMPONENT&&T.type!==df&&T.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=lr,be=s.convert(T.type)),T.format===gs&&_e===r.DEPTH_COMPONENT&&(_e=r.DEPTH_STENCIL,T.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ls,be=s.convert(T.type))),at&&(me?t.texStorage2D(r.TEXTURE_2D,1,_e,V.width,V.height):t.texImage2D(r.TEXTURE_2D,0,_e,V.width,V.height,0,xe,be,null));else if(T.isDataTexture)if(Ne.length>0&&he){me&&at&&t.texStorage2D(r.TEXTURE_2D,I,_e,Ne[0].width,Ne[0].height);for(let K=0,ie=Ne.length;K<ie;K++)Ee=Ne[K],me?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Ee.width,Ee.height,xe,be,Ee.data):t.texImage2D(r.TEXTURE_2D,K,_e,Ee.width,Ee.height,0,xe,be,Ee.data);T.generateMipmaps=!1}else me?(at&&t.texStorage2D(r.TEXTURE_2D,I,_e,V.width,V.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V.width,V.height,xe,be,V.data)):t.texImage2D(r.TEXTURE_2D,0,_e,V.width,V.height,0,xe,be,V.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){me&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,I,_e,Ne[0].width,Ne[0].height,V.depth);for(let K=0,ie=Ne.length;K<ie;K++)Ee=Ne[K],T.format!==Kn?xe!==null?me?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,V.depth,xe,Ee.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,_e,Ee.width,Ee.height,V.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,V.depth,xe,be,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,_e,Ee.width,Ee.height,V.depth,0,xe,be,Ee.data)}else{me&&at&&t.texStorage2D(r.TEXTURE_2D,I,_e,Ne[0].width,Ne[0].height);for(let K=0,ie=Ne.length;K<ie;K++)Ee=Ne[K],T.format!==Kn?xe!==null?me?t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,K,_e,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(r.TEXTURE_2D,K,0,0,Ee.width,Ee.height,xe,be,Ee.data):t.texImage2D(r.TEXTURE_2D,K,_e,Ee.width,Ee.height,0,xe,be,Ee.data)}else if(T.isDataArrayTexture)me?(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,I,_e,V.width,V.height,V.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,xe,be,V.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,V.width,V.height,V.depth,0,xe,be,V.data);else if(T.isData3DTexture)me?(at&&t.texStorage3D(r.TEXTURE_3D,I,_e,V.width,V.height,V.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,xe,be,V.data)):t.texImage3D(r.TEXTURE_3D,0,_e,V.width,V.height,V.depth,0,xe,be,V.data);else if(T.isFramebufferTexture){if(at)if(me)t.texStorage2D(r.TEXTURE_2D,I,_e,V.width,V.height);else{let K=V.width,ie=V.height;for(let fe=0;fe<I;fe++)t.texImage2D(r.TEXTURE_2D,fe,_e,K,ie,0,xe,be,null),K>>=1,ie>>=1}}else if(Ne.length>0&&he){me&&at&&t.texStorage2D(r.TEXTURE_2D,I,_e,Ne[0].width,Ne[0].height);for(let K=0,ie=Ne.length;K<ie;K++)Ee=Ne[K],me?t.texSubImage2D(r.TEXTURE_2D,K,0,0,xe,be,Ee):t.texImage2D(r.TEXTURE_2D,K,_e,xe,be,Ee);T.generateMipmaps=!1}else me?(at&&t.texStorage2D(r.TEXTURE_2D,I,_e,V.width,V.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,be,V)):t.texImage2D(r.TEXTURE_2D,0,_e,xe,be,V);b(T,he)&&R(re),L.__version=ue.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ie(C,T,$){if(T.image.length!==6)return;const re=U(C,T),ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+$);const ue=n.get(ne);if(ne.version!==ue.__version||re===!0){t.activeTexture(r.TEXTURE0+$),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const L=T.isCompressedTexture||T.image[0].isCompressedTexture,te=T.image[0]&&T.image[0].isDataTexture,V=[];for(let K=0;K<6;K++)!L&&!te?V[K]=M(T.image[K],!1,!0,l):V[K]=te?T.image[K].image:T.image[K],V[K]=ft(T,V[K]);const he=V[0],xe=y(he)||a,be=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ee=D(T.internalFormat,be,_e,T.colorSpace),Ne=a&&T.isVideoTexture!==!0,me=ue.__version===void 0||re===!0;let at=x(T,he,xe);oe(r.TEXTURE_CUBE_MAP,T,xe);let I;if(L){Ne&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,at,Ee,he.width,he.height);for(let K=0;K<6;K++){I=V[K].mipmaps;for(let ie=0;ie<I.length;ie++){const fe=I[ie];T.format!==Kn?be!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,fe.width,fe.height,be,_e,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Ee,fe.width,fe.height,0,be,_e,fe.data)}}}else{I=T.mipmaps,Ne&&me&&(I.length>0&&at++,t.texStorage2D(r.TEXTURE_CUBE_MAP,at,Ee,V[0].width,V[0].height));for(let K=0;K<6;K++)if(te){Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,V[K].width,V[K].height,be,_e,V[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,V[K].width,V[K].height,0,be,_e,V[K].data);for(let ie=0;ie<I.length;ie++){const Ae=I[ie].image[K].image;Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Ae.width,Ae.height,be,_e,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ee,Ae.width,Ae.height,0,be,_e,Ae.data)}}else{Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,_e,V[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,be,_e,V[K]);for(let ie=0;ie<I.length;ie++){const fe=I[ie];Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,be,_e,fe.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Ee,be,_e,fe.image[K])}}}b(T,xe)&&R(r.TEXTURE_CUBE_MAP),ue.__version=ne.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ce(C,T,$,re,ne){const ue=s.convert($.format,$.colorSpace),L=s.convert($.type),te=D($.internalFormat,ue,L,$.colorSpace);n.get(T).__hasExternalTextures||(ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,te,T.width,T.height,T.depth,0,ue,L,null):t.texImage2D(ne,0,te,T.width,T.height,0,ue,L,null)),t.bindFramebuffer(r.FRAMEBUFFER,C),Le(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ne,n.get($).__webglTexture,0,st(T)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ne,n.get($).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(C,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let re=r.DEPTH_COMPONENT16;if($||Le(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===cr?re=r.DEPTH_COMPONENT32F:ne.type===lr&&(re=r.DEPTH_COMPONENT24));const ue=st(T);Le(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,re,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,re,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const re=st(T);$&&Le(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,T.width,T.height):Le(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const re=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<re.length;ne++){const ue=re[ne],L=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),V=D(ue.internalFormat,L,te,ue.colorSpace),he=st(T);$&&Le(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,V,T.width,T.height):Le(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,V,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,V,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),P(T.depthTexture,0);const re=n.get(T.depthTexture).__webglTexture,ne=st(T);if(T.depthTexture.format===fr)Le(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(T.depthTexture.format===gs)Le(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ge(C){const T=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,C)}else if($){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]=r.createRenderbuffer(),we(T.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),we(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(C,T,$){const re=n.get(C);T!==void 0&&ce(re.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),$!==void 0&&ge(C)}function it(C){const T=C.texture,$=n.get(C),re=n.get(T);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=T.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,ue=C.isWebGLMultipleRenderTargets===!0,L=y(C)||a;if(ne){$.__webglFramebuffer=[];for(let te=0;te<6;te++)$.__webglFramebuffer[te]=r.createFramebuffer()}else{if($.__webglFramebuffer=r.createFramebuffer(),ue)if(i.drawBuffers){const te=C.texture;for(let V=0,he=te.length;V<he;V++){const xe=n.get(te[V]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Le(C)===!1){const te=ue?T:[T];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let V=0;V<te.length;V++){const he=te[V];$.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[V]);const xe=s.convert(he.format,he.colorSpace),be=s.convert(he.type),_e=D(he.internalFormat,xe,be,he.colorSpace,C.isXRRenderTarget===!0),Ee=st(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,_e,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,$.__webglColorRenderbuffer[V])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),we($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T,L);for(let te=0;te<6;te++)ce($.__webglFramebuffer[te],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te);b(T,L)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const te=C.texture;for(let V=0,he=te.length;V<he;V++){const xe=te[V],be=n.get(xe);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),oe(r.TEXTURE_2D,xe,L),ce($.__webglFramebuffer,C,xe,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D),b(xe,L)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let te=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?te=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,re.__webglTexture),oe(te,T,L),ce($.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,te),b(T,L)&&R(te),t.unbindTexture()}C.depthBuffer&&ge(C)}function Xe(C){const T=y(C)||a,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,ne=$.length;re<ne;re++){const ue=$[re];if(b(ue,T)){const L=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,te=n.get(ue).__webglTexture;t.bindTexture(L,te),R(L),t.unbindTexture()}}}function Y(C){if(a&&C.samples>0&&Le(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,re=C.height;let ne=r.COLOR_BUFFER_BIT;const ue=[],L=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=n.get(C),V=C.isWebGLMultipleRenderTargets===!0;if(V)for(let he=0;he<T.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let he=0;he<T.length;he++){ue.push(r.COLOR_ATTACHMENT0+he),C.depthBuffer&&ue.push(L);const xe=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(xe===!1&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),V&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[he]),xe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[L]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[L])),V){const be=n.get(T[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,$,re,0,0,$,re,ne,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),V)for(let he=0;he<T.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,te.__webglColorRenderbuffer[he]);const xe=n.get(T[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function st(C){return Math.min(f,C.samples)}function Le(C){const T=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(C){const T=o.render.frame;v.get(C)!==T&&(v.set(C,T),C.update())}function ft(C,T){const $=C.colorSpace,re=C.format,ne=C.type;return C.isCompressedTexture===!0||C.format===Xl||$!==li&&$!==pr&&($===We?a===!1?e.has("EXT_sRGB")===!0&&re===Kn?(C.format=Xl,C.minFilter=Ln,C.generateMipmaps=!1):T=vf.sRGBToLinear(T):(re!==Kn||ne!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.setTexture2D=P,this.setTexture2DArray=de,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=Oe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Le}function sx(r,e,t){const n=t.isWebGL2;function i(s,o=pr){let a;if(s===Sr)return r.UNSIGNED_BYTE;if(s===Yp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===jp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wp)return r.BYTE;if(s===Xp)return r.SHORT;if(s===df)return r.UNSIGNED_SHORT;if(s===qp)return r.INT;if(s===lr)return r.UNSIGNED_INT;if(s===cr)return r.FLOAT;if(s===aa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Kp)return r.ALPHA;if(s===Kn)return r.RGBA;if(s===$p)return r.LUMINANCE;if(s===Zp)return r.LUMINANCE_ALPHA;if(s===fr)return r.DEPTH_COMPONENT;if(s===gs)return r.DEPTH_STENCIL;if(s===Xl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jp)return r.RED;if(s===Qp)return r.RED_INTEGER;if(s===em)return r.RG;if(s===tm)return r.RG_INTEGER;if(s===nm)return r.RGBA_INTEGER;if(s===Xo||s===qo||s===Yo||s===jo)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===iu||s===ru||s===su||s===au)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===iu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===su)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===au)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===im)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ou||s===lu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ou)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cu||s===uu||s===hu||s===fu||s===du||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===Mu||s===Su||s===yu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===du)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_u)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Su)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ko)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ko)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rm||s===Eu||s===Tu||s===bu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ko)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ax extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let zs=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const ox={type:"move"};class xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;l.inputState.pinching&&h>d+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lx extends Tn{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:fr,u!==fr&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fr&&(n=lr),n===void 0&&u===gs&&(n=ls),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1}}class cx extends Cr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,v=null;const _=t.getContextAttributes();let g=null,p=null;const E=[],M=[],y=new Set,S=new Map,b=new Un;b.layers.enable(1),b.viewport=new zt;const R=new Un;R.layers.enable(2),R.viewport=new zt;const D=[b,R],x=new ax;x.layers.enable(1),x.layers.enable(2);let A=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=E[j];return Q===void 0&&(Q=new xl,E[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=E[j];return Q===void 0&&(Q=new xl,E[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=E[j];return Q===void 0&&(Q=new xl,E[j]=Q),Q.getHandSpace()};function N(j){const Q=M.indexOf(j.inputSource);if(Q===-1)return;const le=E[Q];le!==void 0&&(le.update(j.inputSource,j.frame,l||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",z);for(let j=0;j<E.length;j++){const Q=M[j];Q!==null&&(M[j]=null,E[j].disconnect(Q))}A=null,W=null,e.setRenderTarget(g),d=null,h=null,f=null,i=null,p=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),p=new yr(d.framebufferWidth,d.framebufferHeight,{format:Kn,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,le=null,oe=null;_.depth&&(oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?gs:fr,le=_.stencil?ls:lr);const U={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(U),i.updateRenderState({layers:[h]}),p=new yr(h.textureWidth,h.textureHeight,{format:Kn,type:Sr,depthTexture:new lx(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(j){for(let Q=0;Q<j.removed.length;Q++){const le=j.removed[Q],oe=M.indexOf(le);oe>=0&&(M[oe]=null,E[oe].disconnect(le))}for(let Q=0;Q<j.added.length;Q++){const le=j.added[Q];let oe=M.indexOf(le);if(oe===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=M.length){M.push(le),oe=Ce;break}else if(M[Ce]===null){M[Ce]=le,oe=Ce;break}if(oe===-1)break}const U=E[oe];U&&U.connect(le)}}const G=new k,J=new k;function H(j,Q,le){G.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(le.matrixWorld);const oe=G.distanceTo(J),U=Q.projectionMatrix.elements,Ce=le.projectionMatrix.elements,Ie=U[14]/(U[10]-1),ce=U[14]/(U[10]+1),we=(U[9]+1)/U[5],Me=(U[9]-1)/U[5],ge=(U[8]-1)/U[0],Oe=(Ce[8]+1)/Ce[0],it=Ie*ge,Xe=Ie*Oe,Y=oe/(-ge+Oe),st=Y*-ge;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(st),j.translateZ(Y),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Le=Ie+Y,Qe=ce+Y,ft=it-st,C=Xe+(oe-st),T=we*ce/Qe*Le,$=Me*ce/Qe*Le;j.projectionMatrix.makePerspective(ft,C,T,$,Le,Qe),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function X(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;x.near=R.near=b.near=j.near,x.far=R.far=b.far=j.far,(A!==x.near||W!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,W=x.far);const Q=j.parent,le=x.cameras;X(x,Q);for(let oe=0;oe<le.length;oe++)X(le[oe],Q);le.length===2?H(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),ee(j,x,Q)};function ee(j,Q,le){le===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const oe=j.children;for(let U=0,Ce=oe.length;U<Ce;U++)oe[U].updateMatrixWorld(!0);j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ql*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.getPlanes=function(){return y};let P=null;function de(j,Q){if(u=Q.getViewerPose(l||o),v=Q,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let oe=!1;le.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let U=0;U<le.length;U++){const Ce=le[U];let Ie=null;if(d!==null)Ie=d.getViewport(Ce);else{const we=f.getViewSubImage(h,Ce);Ie=we.viewport,U===0&&(e.setRenderTargetTextures(p,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let ce=D[U];ce===void 0&&(ce=new Un,ce.layers.enable(U),ce.viewport=new zt,D[U]=ce),ce.matrix.fromArray(Ce.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ce.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),U===0&&(x.matrix.copy(ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(ce)}}for(let le=0;le<E.length;le++){const oe=M[le],U=E[le];oe!==null&&U!==void 0&&U.update(oe,Q,l||o)}if(P&&P(j,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let le=null;for(const oe of y)Q.detectedPlanes.has(oe)||(le===null&&(le=[]),le.push(oe));if(le!==null)for(const oe of le)y.delete(oe),S.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of Q.detectedPlanes)if(!y.has(oe))y.add(oe),S.set(oe,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const U=S.get(oe);oe.lastChangedTime>U&&(S.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}v=null}const ae=new Pf;ae.setAnimationLoop(de),this.setAnimationLoop=function(j){P=j},this.dispose=function(){}}}function ux(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Af(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,E,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),v(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,E,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const M=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hx(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const y=M.program;n.uniformBlockBinding(E,y)}function l(E,M){let y=i[E.id];y===void 0&&(v(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",g));const S=M.program;n.updateUBOMapping(E,S);const b=e.render.frame;s[E.id]!==b&&(h(E),s[E.id]=b)}function u(E){const M=f();E.__bindingPointIndex=M;const y=r.createBuffer(),S=E.__size,b=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const M=i[E.id],y=E.uniforms,S=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,R=y.length;b<R;b++){const D=y[b];if(d(D,b,S)===!0){const x=D.__offset,A=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let N=0;N<A.length;N++){const O=A[N],z=_(O);typeof O=="number"?(D.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,x+W,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=O.elements[0],D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=O.elements[0],D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=O.elements[0]):(O.toArray(D.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,D.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,M,y){const S=E.value;if(y[M]===void 0){if(typeof S=="number")y[M]=S;else{const b=Array.isArray(S)?S:[S],R=[];for(let D=0;D<b.length;D++)R.push(b[D].clone());y[M]=R}return!0}else if(typeof S=="number"){if(y[M]!==S)return y[M]=S,!0}else{const b=Array.isArray(y[M])?y[M]:[y[M]],R=Array.isArray(S)?S:[S];for(let D=0;D<b.length;D++){const x=b[D];if(x.equals(R[D])===!1)return x.copy(R[D]),!0}}return!1}function v(E){const M=E.uniforms;let y=0;const S=16;let b=0;for(let R=0,D=M.length;R<D;R++){const x=M[R],A={boundary:0,storage:0},W=Array.isArray(x.value)?x.value:[x.value];for(let N=0,O=W.length;N<O;N++){const z=W[N],G=_(z);A.boundary+=G.boundary,A.storage+=G.storage}if(x.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=y,R>0){b=y%S;const N=S-b;b!==0&&N-A.boundary<0&&(y+=S-b,x.__offset=y)}y+=A.storage}return b=y%S,b>0&&(y+=S-b),E.__size=y,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){const M=E.target;M.removeEventListener("dispose",g);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}function fx(){const r=xo("canvas");return r.style.display="block",r}class Of{constructor(e={}){const{canvas:t=fx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let d=null,v=null;const _=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=We,this.useLegacyLights=!0,this.toneMapping=bi,this.toneMappingExposure=1;const p=this;let E=!1,M=0,y=0,S=null,b=-1,R=null;const D=new zt,x=new zt;let A=null,W=t.width,N=t.height,O=1,z=null,G=null;const J=new zt(0,0,W,N),H=new zt(0,0,W,N);let X=!1;const ee=new Cf;let P=!1,de=!1,ae=null;const j=new Rt,Q=new k,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return S===null?O:1}let U=n;function Ce(w,B){for(let q=0;q<w.length;q++){const F=w[q],Z=t.getContext(F,B);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),U=Ce(B,w),U===null)throw Ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ie,ce,we,Me,ge,Oe,it,Xe,Y,st,Le,Qe,ft,C,T,$,re,ne,ue,L,te,V,he,xe;function be(){Ie=new E0(U),ce=new _0(U,Ie,e),Ie.init(ce),V=new sx(U,Ie,ce),we=new ix(U,Ie,ce),Me=new A0(U),ge=new Vv,Oe=new rx(U,Ie,we,ge,ce,V,Me),it=new v0(p),Xe=new y0(p),Y=new Nm(U,ce),he=new p0(U,Ie,Y,ce),st=new T0(U,Y,Me,he),Le=new P0(U,st,Y,Me),ue=new C0(U,ce,Oe),$=new g0(ge),Qe=new Hv(p,it,Xe,Ie,ce,he,$),ft=new ux(p,ge),C=new Xv,T=new Zv(Ie,ce),ne=new d0(p,it,Xe,we,Le,h,c),re=new nx(p,Le,ce),xe=new hx(U,Me,ce,we),L=new m0(U,Ie,Me,ce),te=new b0(U,Ie,Me,ce),Me.programs=Qe.programs,p.capabilities=ce,p.extensions=Ie,p.properties=ge,p.renderLists=C,p.shadowMap=re,p.state=we,p.info=Me}be();const _e=new cx(p,U);this.xr=_e,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(W,N,!1))},this.getSize=function(w){return w.set(W,N)},this.setSize=function(w,B,q=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,N=B,t.width=Math.floor(w*O),t.height=Math.floor(B*O),q===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(W*O,N*O).floor()},this.setDrawingBufferSize=function(w,B,q){W=w,N=B,O=q,t.width=Math.floor(w*q),t.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,B,q,F){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,B,q,F),we.viewport(D.copy(J).multiplyScalar(O).floor())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,B,q,F){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,B,q,F),we.scissor(x.copy(H).multiplyScalar(O).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){we.setScissorTest(X=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,B=!0,q=!0){let F=0;w&&(F|=U.COLOR_BUFFER_BIT),B&&(F|=U.DEPTH_BUFFER_BIT),q&&(F|=U.STENCIL_BUFFER_BIT),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",me,!1),C.dispose(),T.dispose(),ge.dispose(),it.dispose(),Xe.dispose(),Le.dispose(),he.dispose(),xe.dispose(),Qe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ae),_e.removeEventListener("sessionend",nt),ae&&(ae.dispose(),ae=null),je.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Me.autoReset,B=re.enabled,q=re.autoUpdate,F=re.needsUpdate,Z=re.type;be(),Me.autoReset=w,re.enabled=B,re.autoUpdate=q,re.needsUpdate=F,re.type=Z}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const B=w.target;B.removeEventListener("dispose",at),I(B)}function I(w){K(w),ge.remove(w)}function K(w){const B=ge.get(w).programs;B!==void 0&&(B.forEach(function(q){Qe.releaseProgram(q)}),w.isShaderMaterial&&Qe.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,F,Z,Se){B===null&&(B=le);const ye=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=yt(w,B,q,F,Z);we.setMaterial(F,ye);let Ue=q.index,He=1;F.wireframe===!0&&(Ue=st.getWireframeAttribute(q),He=2);const ke=q.drawRange,De=q.attributes.position;let ze=ke.start*He,ut=(ke.start+ke.count)*He;Se!==null&&(ze=Math.max(ze,Se.start*He),ut=Math.min(ut,(Se.start+Se.count)*He)),Ue!==null?(ze=Math.max(ze,0),ut=Math.min(ut,Ue.count)):De!=null&&(ze=Math.max(ze,0),ut=Math.min(ut,De.count));const jt=ut-ze;if(jt<0||jt===1/0)return;he.setup(Z,F,Te,q,Ue);let Jn,ht=L;if(Ue!==null&&(Jn=Y.get(Ue),ht=te,ht.setIndex(Jn)),Z.isMesh)F.wireframe===!0?(we.setLineWidth(F.wireframeLinewidth*oe()),ht.setMode(U.LINES)):ht.setMode(U.TRIANGLES);else if(Z.isLine){let Ge=F.linewidth;Ge===void 0&&(Ge=1),we.setLineWidth(Ge*oe()),Z.isLineSegments?ht.setMode(U.LINES):Z.isLineLoop?ht.setMode(U.LINE_LOOP):ht.setMode(U.LINE_STRIP)}else Z.isPoints?ht.setMode(U.POINTS):Z.isSprite&&ht.setMode(U.TRIANGLES);if(Z.isInstancedMesh)ht.renderInstances(ze,jt,Z.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hi=Math.min(q.instanceCount,Ge);ht.renderInstances(ze,jt,hi)}else ht.render(ze,jt)},this.compile=function(w,B){function q(F,Z,Se){F.transparent===!0&&F.side===yi&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,Fe(F,Z,Se),F.side=Xi,F.needsUpdate=!0,Fe(F,Z,Se),F.side=yi):Fe(F,Z,Se)}v=T.get(w),v.init(),g.push(v),w.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights(p.useLegacyLights),w.traverse(function(F){const Z=F.material;if(Z)if(Array.isArray(Z))for(let Se=0;Se<Z.length;Se++){const ye=Z[Se];q(ye,w,F)}else q(Z,w,F)}),g.pop(),v=null};let ie=null;function fe(w){ie&&ie(w)}function Ae(){je.stop()}function nt(){je.start()}const je=new Pf;je.setAnimationLoop(fe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(w){ie=w,_e.setAnimationLoop(w),w===null?je.stop():je.start()},_e.addEventListener("sessionstart",Ae),_e.addEventListener("sessionend",nt),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,B,S),v=T.get(w,g.length),v.init(),g.push(v),j.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(j),de=this.localClippingEnabled,P=$.init(this.clippingPlanes,de),d=C.get(w,_.length),d.init(),_.push(d),gt(w,B,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(z,G),P===!0&&$.beginShadows();const q=v.state.shadowsArray;if(re.render(q,w,B),P===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,w),v.setupLights(p.useLegacyLights),B.isArrayCamera){const F=B.cameras;for(let Z=0,Se=F.length;Z<Se;Z++){const ye=F[Z];Be(d,w,ye,ye.viewport)}}else Be(d,w,B);S!==null&&(Oe.updateMultisampleRenderTarget(S),Oe.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(p,w,B),he.resetDefaultState(),b=-1,R=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,_.pop(),_.length>0?d=_[_.length-1]:d=null};function gt(w,B,q,F){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){F&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);const ye=Le.update(w),Te=w.material;Te.visible&&d.push(w,ye,Te,q,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==Me.render.frame&&(w.skeleton.update(),w.skeleton.frame=Me.render.frame);const ye=Le.update(w),Te=w.material;if(F&&(ye.boundingSphere===null&&ye.computeBoundingSphere(),Q.copy(ye.boundingSphere.center).applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(Te)){const Ue=ye.groups;for(let He=0,ke=Ue.length;He<ke;He++){const De=Ue[He],ze=Te[De.materialIndex];ze&&ze.visible&&d.push(w,ye,ze,q,Q.z,De)}}else Te.visible&&d.push(w,ye,Te,q,Q.z,null)}}const Se=w.children;for(let ye=0,Te=Se.length;ye<Te;ye++)gt(Se[ye],B,q,F)}function Be(w,B,q,F){const Z=w.opaque,Se=w.transmissive,ye=w.transparent;v.setupLightsView(q),P===!0&&$.setGlobalState(p.clippingPlanes,q),Se.length>0&&ve(Z,Se,B,q),F&&we.viewport(D.copy(F)),Z.length>0&&se(Z,B,q),Se.length>0&&se(Se,B,q),ye.length>0&&se(ye,B,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ve(w,B,q,F){if(ae===null){const Te=ce.isWebGL2;ae=new yr(1024,1024,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?aa:Sr,minFilter:sa,samples:Te&&a===!0?4:0})}const Z=p.getRenderTarget();p.setRenderTarget(ae),p.clear();const Se=p.toneMapping;p.toneMapping=bi,se(w,q,F),Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae);let ye=!1;for(let Te=0,Ue=B.length;Te<Ue;Te++){const He=B[Te],ke=He.object,De=He.geometry,ze=He.material,ut=He.group;if(ze.side===yi&&ke.layers.test(F.layers)){const jt=ze.side;ze.side=cn,ze.needsUpdate=!0,Re(ke,q,F,De,ze,ut),ze.side=jt,ze.needsUpdate=!0,ye=!0}}ye===!0&&(Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae)),p.setRenderTarget(Z),p.toneMapping=Se}function se(w,B,q){const F=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Se=w.length;Z<Se;Z++){const ye=w[Z],Te=ye.object,Ue=ye.geometry,He=F===null?ye.material:F,ke=ye.group;Te.layers.test(q.layers)&&Re(Te,B,q,Ue,He,ke)}}function Re(w,B,q,F,Z,Se){w.onBeforeRender(p,B,q,F,Z,Se),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(p,B,q,F,w,Se),Z.transparent===!0&&Z.side===yi&&Z.forceSinglePass===!1?(Z.side=cn,Z.needsUpdate=!0,p.renderBufferDirect(q,B,F,Z,w,Se),Z.side=Xi,Z.needsUpdate=!0,p.renderBufferDirect(q,B,F,Z,w,Se),Z.side=yi):p.renderBufferDirect(q,B,F,Z,w,Se),w.onAfterRender(p,B,q,F,Z,Se)}function Fe(w,B,q){B.isScene!==!0&&(B=le);const F=ge.get(w),Z=v.state.lights,Se=v.state.shadowsArray,ye=Z.state.version,Te=Qe.getParameters(w,Z.state,Se,B,q),Ue=Qe.getProgramCacheKey(Te);let He=F.programs;F.environment=w.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(w.isMeshStandardMaterial?Xe:it).get(w.envMap||F.environment),He===void 0&&(w.addEventListener("dispose",at),He=new Map,F.programs=He);let ke=He.get(Ue);if(ke!==void 0){if(F.currentProgram===ke&&F.lightsStateVersion===ye)return Ve(w,Te),ke}else Te.uniforms=Qe.getUniforms(w),w.onBuild(q,Te,p),w.onBeforeCompile(Te,p),ke=Qe.acquireProgram(Te,Ue),He.set(Ue,ke),F.uniforms=Te.uniforms;const De=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=$.uniform),Ve(w,Te),F.needsLights=dt(w),F.lightsStateVersion=ye,F.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.directionalShadowMap.value=Z.state.directionalShadowMap,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotShadowMap.value=Z.state.spotShadowMap,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMap.value=Z.state.pointShadowMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix);const ze=ke.getUniforms(),ut=so.seqWithValue(ze.seq,De);return F.currentProgram=ke,F.uniformsList=ut,ke}function Ve(w,B){const q=ge.get(w);q.outputColorSpace=B.outputColorSpace,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function yt(w,B,q,F,Z){B.isScene!==!0&&(B=le),Oe.resetTextureUnits();const Se=B.fog,ye=F.isMeshStandardMaterial?B.environment:null,Te=S===null?p.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:li,Ue=(F.isMeshStandardMaterial?Xe:it).get(F.envMap||ye),He=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!F.normalMap&&!!q.attributes.tangent,De=!!q.morphAttributes.position,ze=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color,jt=F.toneMapped?p.toneMapping:bi,Jn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=Jn!==void 0?Jn.length:0,Ge=ge.get(F),hi=v.state.lights;if(P===!0&&(de===!0||w!==R)){const pn=w===R&&F.id===b;$.setState(F,w,pn)}let Lt=!1;F.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hi.state.version||Ge.outputColorSpace!==Te||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ue||F.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$.numPlanes||Ge.numIntersection!==$.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==ke||Ge.morphTargets!==De||Ge.morphNormals!==ze||Ge.morphColors!==ut||Ge.toneMapping!==jt||ce.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(Lt=!0):(Lt=!0,Ge.__version=F.version);let $i=Ge.currentProgram;Lt===!0&&($i=Fe(F,B,Z));let Kc=!1,Ps=!1,Go=!1;const Kt=$i.getUniforms(),Zi=Ge.uniforms;if(we.useProgram($i.program)&&(Kc=!0,Ps=!0,Go=!0),F.id!==b&&(b=F.id,Ps=!0),Kc||R!==w){if(Kt.setValue(U,"projectionMatrix",w.projectionMatrix),ce.logarithmicDepthBuffer&&Kt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),R!==w&&(R=w,Ps=!0,Go=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const pn=Kt.map.cameraPosition;pn!==void 0&&pn.setValue(U,Q.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Kt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Z.isSkinnedMesh)&&Kt.setValue(U,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){Kt.setOptional(U,Z,"bindMatrix"),Kt.setOptional(U,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(ce.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Kt.setValue(U,"boneTexture",pn.boneTexture,Oe),Kt.setValue(U,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ho=q.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&ce.isWebGL2===!0)&&ue.update(Z,q,$i),(Ps||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,Kt.setValue(U,"receiveShadow",Z.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Zi.envMap.value=Ue,Zi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ps&&(Kt.setValue(U,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&rt(Zi,Go),Se&&F.fog===!0&&ft.refreshFogUniforms(Zi,Se),ft.refreshMaterialUniforms(Zi,F,O,N,ae),so.upload(U,Ge.uniformsList,Zi,Oe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(so.upload(U,Ge.uniformsList,Zi,Oe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Kt.setValue(U,"center",Z.center),Kt.setValue(U,"modelViewMatrix",Z.modelViewMatrix),Kt.setValue(U,"normalMatrix",Z.normalMatrix),Kt.setValue(U,"modelMatrix",Z.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const pn=F.uniformsGroups;for(let Vo=0,dp=pn.length;Vo<dp;Vo++)if(ce.isWebGL2){const $c=pn[Vo];xe.update($c,$i),xe.bind($c,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function rt(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function dt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,B,q){ge.get(w.texture).__webglTexture=B,ge.get(w.depthTexture).__webglTexture=q;const F=ge.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const q=ge.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){S=w,M=B,y=q;let F=!0,Z=null,Se=!1,ye=!1;if(w){const Ue=ge.get(w);Ue.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):Ue.__webglFramebuffer===void 0?Oe.setupRenderTarget(w):Ue.__hasExternalTextures&&Oe.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const ke=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=ke[B],Se=!0):ce.isWebGL2&&w.samples>0&&Oe.useMultisampledRTT(w)===!1?Z=ge.get(w).__webglMultisampledFramebuffer:Z=ke,D.copy(w.viewport),x.copy(w.scissor),A=w.scissorTest}else D.copy(J).multiplyScalar(O).floor(),x.copy(H).multiplyScalar(O).floor(),A=X;if(we.bindFramebuffer(U.FRAMEBUFFER,Z)&&ce.drawBuffers&&F&&we.drawBuffers(w,Z),we.viewport(D),we.scissor(x),we.setScissorTest(A),Se){const Ue=ge.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,q)}else if(ye){const Ue=ge.get(w.texture),He=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,He)}b=-1},this.readRenderTargetPixels=function(w,B,q,F,Z,Se,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){we.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ue=w.texture,He=Ue.format,ke=Ue.type;if(He!==Kn&&V.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=ke===aa&&(Ie.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(ke!==Sr&&V.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===cr&&(ce.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-F&&q>=0&&q<=w.height-Z&&U.readPixels(B,q,F,Z,V.convert(He),V.convert(ke),Se)}finally{const Ue=S!==null?ge.get(S).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(w,B,q=0){const F=Math.pow(2,-q),Z=Math.floor(B.image.width*F),Se=Math.floor(B.image.height*F);Oe.setTexture2D(B,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,w.x,w.y,Z,Se),we.unbindTexture()},this.copyTextureToTexture=function(w,B,q,F=0){const Z=B.image.width,Se=B.image.height,ye=V.convert(q.format),Te=V.convert(q.type);Oe.setTexture2D(q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,w.x,w.y,Z,Se,ye,Te,B.image.data):B.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,ye,B.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,w.x,w.y,ye,Te,B.image),F===0&&q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,B,q,F,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Ue=V.convert(F.format),He=V.convert(F.type);let ke;if(F.isData3DTexture)Oe.setTexture3D(F,0),ke=U.TEXTURE_3D;else if(F.isDataArrayTexture)Oe.setTexture2DArray(F,0),ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ut=U.getParameter(U.UNPACK_SKIP_PIXELS),jt=U.getParameter(U.UNPACK_SKIP_ROWS),Jn=U.getParameter(U.UNPACK_SKIP_IMAGES),ht=q.isCompressedTexture?q.mipmaps[0]:q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ht.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,w.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,w.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?U.texSubImage3D(ke,Z,B.x,B.y,B.z,Se,ye,Te,Ue,He,ht.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ke,Z,B.x,B.y,B.z,Se,ye,Te,Ue,ht.data)):U.texSubImage3D(ke,Z,B.x,B.y,B.z,Se,ye,Te,Ue,He,ht),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),Z===0&&F.generateMipmaps&&U.generateMipmap(ke),we.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Oe.setTextureCube(w,0):w.isData3DTexture?Oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Oe.setTexture2DArray(w,0):Oe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){M=0,y=0,S=null,we.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?dr:pf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?We:li}}class dx extends Of{}dx.prototype.isWebGL1Renderer=!0;class px extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ao extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fh=new k,dh=new k,ph=new Rt,Ml=new yc,ka=new _a;class mx extends sn{constructor(e=new zn,t=new ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fh.fromBufferAttribute(t,i-1),dh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fh.distanceTo(dh);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;ph.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new k,u=new k,f=new k,h=new k,d=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),E=Math.min(v.count,o.start+o.count);for(let M=p,y=E-1;M<y;M+=d){const S=v.getX(M),b=v.getX(M+1);if(l.fromBufferAttribute(g,S),u.fromBufferAttribute(g,b),Ml.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let M=p,y=E-1;M<y;M+=d){if(l.fromBufferAttribute(g,M),u.fromBufferAttribute(g,M+1),Ml.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const mh=new k,_h=new k;class gh extends mx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mh.distanceTo(_h);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ns extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new Rt,jl=new yc,Ga=new _a,Ha=new k;class oo extends sn{constructor(e=new zn,t=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(i),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;vh.copy(i).invert(),jl.copy(e.ray).applyMatrix4(vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let v=h,_=d;v<_;v++){const g=l.getX(v);Ha.fromBufferAttribute(f,g),xh(Ha,g,c,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let v=h,_=d;v<_;v++)Ha.fromBufferAttribute(f,v),xh(Ha,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xh(r,e,t,n,i,s,o){const a=jl.distanceSqToPoint(r);if(a<t){const c=new k;jl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class _x extends wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Mh={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],v=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const vx=new gx;class Ff{constructor(e){this.manager=e!==void 0?e:vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const vi={};class xx extends Error{constructor(e,t){super(e),this.response=t}}class Mx extends Ff{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mh.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vi[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,v=d!==0;let _=0;const g=new ReadableStream({start(p){E();function E(){f.read().then(({done:M,value:y})=>{if(M)p.close();else{_+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:d});for(let b=0,R=u.length;b<R;b++){const D=u[b];D.onProgress&&D.onProgress(S)}p.enqueue(y),E()}})}}});return new Response(g)}else throw new xx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(v=>d.decode(v))}}}).then(l=>{Mh.add(e,l);const u=vi[e];delete vi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);var ks;typeof self>"u"&&typeof process<"u"&&process.hrtime?ks=function(){var r=process.hrtime();return r[0]*1e3+r[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?ks=self.performance.now.bind(self.performance):Date.now!==void 0?ks=Date.now:ks=function(){return new Date().getTime()};var Sx=ks,yx=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=Sx()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),Ex=new yx,ci=Ex;ci.getAll.bind(ci);ci.removeAll.bind(ci);ci.add.bind(ci);ci.remove.bind(ci);ci.update.bind(ci);const yh={type:"change"},Sl={type:"start"},Eh={type:"end"};class Tx extends Cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Qe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Qe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yh),n.update(),s=i.NONE},this.update=function(){const L=new k,te=new Er().setFromUnitVectors(e.up,new k(0,1,0)),V=te.clone().invert(),he=new k,xe=new Er,be=2*Math.PI;return function(){const Ee=n.object.position;L.copy(Ee).sub(n.target),L.applyQuaternion(te),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&x(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ne=n.minAzimuthAngle,me=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(me)&&(Ne<-Math.PI?Ne+=be:Ne>Math.PI&&(Ne-=be),me<-Math.PI?me+=be:me>Math.PI&&(me-=be),Ne<=me?a.theta=Math.max(Ne,Math.min(me,a.theta)):a.theta=a.theta>(Ne+me)/2?Math.max(Ne,a.theta):Math.min(me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(V),Ee.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||he.distanceToSquared(n.object.position)>o||8*(1-xe.dot(n.object.quaternion))>o?(n.dispatchEvent(yh),he.copy(n.object.position),xe.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",Xe),n.domElement.removeEventListener("wheel",Le),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Qe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Sh,c=new Sh;let l=1;const u=new k;let f=!1;const h=new Ze,d=new Ze,v=new Ze,_=new Ze,g=new Ze,p=new Ze,E=new Ze,M=new Ze,y=new Ze,S=[],b={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function D(){return Math.pow(.95,n.zoomSpeed)}function x(L){c.theta-=L}function A(L){c.phi-=L}const W=function(){const L=new k;return function(V,he){L.setFromMatrixColumn(he,0),L.multiplyScalar(-V),u.add(L)}}(),N=function(){const L=new k;return function(V,he){n.screenSpacePanning===!0?L.setFromMatrixColumn(he,1):(L.setFromMatrixColumn(he,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(V),u.add(L)}}(),O=function(){const L=new k;return function(V,he){const xe=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;L.copy(be).sub(n.target);let _e=L.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),W(2*V*_e/xe.clientHeight,n.object.matrix),N(2*he*_e/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(V*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),N(he*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(L){n.object.isPerspectiveCamera?l/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(L){n.object.isPerspectiveCamera?l*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){h.set(L.clientX,L.clientY)}function H(L){E.set(L.clientX,L.clientY)}function X(L){_.set(L.clientX,L.clientY)}function ee(L){d.set(L.clientX,L.clientY),v.subVectors(d,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;x(2*Math.PI*v.x/te.clientHeight),A(2*Math.PI*v.y/te.clientHeight),h.copy(d),n.update()}function P(L){M.set(L.clientX,L.clientY),y.subVectors(M,E),y.y>0?z(D()):y.y<0&&G(D()),E.copy(M),n.update()}function de(L){g.set(L.clientX,L.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),O(p.x,p.y),_.copy(g),n.update()}function ae(L){L.deltaY<0?G(D()):L.deltaY>0&&z(D()),n.update()}function j(L){let te=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),te=!0;break}te&&(L.preventDefault(),n.update())}function Q(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);h.set(L,te)}}function le(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);_.set(L,te)}}function oe(){const L=S[0].pageX-S[1].pageX,te=S[0].pageY-S[1].pageY,V=Math.sqrt(L*L+te*te);E.set(0,V)}function U(){n.enableZoom&&oe(),n.enablePan&&le()}function Ce(){n.enableZoom&&oe(),n.enableRotate&&Q()}function Ie(L){if(S.length==1)d.set(L.pageX,L.pageY);else{const V=ue(L),he=.5*(L.pageX+V.x),xe=.5*(L.pageY+V.y);d.set(he,xe)}v.subVectors(d,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;x(2*Math.PI*v.x/te.clientHeight),A(2*Math.PI*v.y/te.clientHeight),h.copy(d)}function ce(L){if(S.length===1)g.set(L.pageX,L.pageY);else{const te=ue(L),V=.5*(L.pageX+te.x),he=.5*(L.pageY+te.y);g.set(V,he)}p.subVectors(g,_).multiplyScalar(n.panSpeed),O(p.x,p.y),_.copy(g)}function we(L){const te=ue(L),V=L.pageX-te.x,he=L.pageY-te.y,xe=Math.sqrt(V*V+he*he);M.set(0,xe),y.set(0,Math.pow(M.y/E.y,n.zoomSpeed)),z(y.y),E.copy(M)}function Me(L){n.enableZoom&&we(L),n.enablePan&&ce(L)}function ge(L){n.enableZoom&&we(L),n.enableRotate&&Ie(L)}function Oe(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",Xe)),$(L),L.pointerType==="touch"?ft(L):Y(L))}function it(L){n.enabled!==!1&&(L.pointerType==="touch"?C(L):st(L))}function Xe(L){re(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(Eh),s=i.NONE}function Y(L){let te;switch(L.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Lr.DOLLY:if(n.enableZoom===!1)return;H(L),s=i.DOLLY;break;case Lr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;X(L),s=i.PAN}else{if(n.enableRotate===!1)return;J(L),s=i.ROTATE}break;case Lr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),s=i.ROTATE}else{if(n.enablePan===!1)return;X(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Sl)}function st(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(L);break;case i.DOLLY:if(n.enableZoom===!1)return;P(L);break;case i.PAN:if(n.enablePan===!1)return;de(L);break}}function Le(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Sl),ae(L),n.dispatchEvent(Eh))}function Qe(L){n.enabled===!1||n.enablePan===!1||j(L)}function ft(L){switch(ne(L),S.length){case 1:switch(n.touches.ONE){case Dr.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case Dr.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Dr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(),s=i.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Sl)}function C(L){switch(ne(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ie(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(L),n.update();break;default:s=i.NONE}}function T(L){n.enabled!==!1&&L.preventDefault()}function $(L){S.push(L)}function re(L){delete b[L.pointerId];for(let te=0;te<S.length;te++)if(S[te].pointerId==L.pointerId){S.splice(te,1);return}}function ne(L){let te=b[L.pointerId];te===void 0&&(te=new Ze,b[L.pointerId]=te),te.set(L.pageX,L.pageY)}function ue(L){const te=L.pointerId===S[0].pointerId?S[1]:S[0];return b[te.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",Xe),n.domElement.addEventListener("wheel",Le,{passive:!1}),this.update()}}const bx=/^[og]\s*(.+)?/,Ax=/^mtllib /,wx=/^usemtl /,Rx=/^usemap /,Th=/\s+/,bh=new k,yl=new k,Ah=new k,wh=new k,Rn=new k,Va=new ot;function Cx(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;bh.fromArray(i,e),yl.fromArray(i,t),Ah.fromArray(i,n),Rn.subVectors(Ah,yl),wh.subVectors(bh,yl),Rn.cross(wh),Rn.normalize(),s.push(Rn.x,Rn.y,Rn.z),s.push(Rn.x,Rn.y,Rn.z),s.push(Rn.x,Rn.y,Rn.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,c,l){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const v=this.normals.length;f=this.parseNormalIndex(a,v),h=this.parseNormalIndex(c,v),d=this.parseNormalIndex(l,v),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(i!==void 0&&i!==""){const v=this.uvs.length;f=this.parseUVIndex(i,v),h=this.parseUVIndex(s,v),d=this.parseUVIndex(o,v),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class Px extends Ff{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new Mx(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Cx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const f=l.split(Th);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Va.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Va.r,Va.g,Va.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=l.slice(1).trim().split(Th),d=[];for(let _=0,g=h.length;_<g;_++){const p=h[_];if(p.length>0){const E=p.split("/");d.push(E)}}const v=d[0];for(let _=1,g=d.length-1;_<g;_++){const p=d[_],E=d[_+1];t.addFace(v[0],p[0],E[0],v[1],p[1],E[1],v[2],p[2],E[2])}}else if(u==="l"){const f=l.substring(1).trim().split(" ");let h=[];const d=[];if(l.indexOf("/")===-1)h=f;else for(let v=0,_=f.length;v<_;v++){const g=f[v].split("/");g[0]!==""&&h.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(h,d)}else if(u==="p"){const h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((i=bx.exec(l))!==null){const f=(" "+i[0].slice(1).trim()).slice(1);t.startObject(f)}else if(wx.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Ax.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Rx.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const h=i[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new zs;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,f=l.materials,h=u.type==="Line",d=u.type==="Points";let v=!1;if(u.vertices.length===0)continue;const _=new zn;_.setAttribute("position",new Wt(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new Wt(u.normals,3)),u.colors.length>0&&(v=!0,_.setAttribute("color",new Wt(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new Wt(u.uvs,2));const g=[];for(let E=0,M=f.length;E<M;E++){const y=f[E],S=y.name+"_"+y.smooth+"_"+v;let b=t.materials[S];if(this.materials!==null){if(b=this.materials.create(y.name),h&&b&&!(b instanceof ao)){const R=new ao;wi.prototype.copy.call(R,b),R.color.copy(b.color),b=R}else if(d&&b&&!(b instanceof ns)){const R=new ns({size:10,sizeAttenuation:!1});wi.prototype.copy.call(R,b),R.color.copy(b.color),R.map=b.map,b=R}}b===void 0&&(h?b=new ao:d?b=new ns({size:1,sizeAttenuation:!1}):b=new _x,b.name=y.name,b.flatShading=!y.smooth,b.vertexColors=v,t.materials[S]=b),g.push(b)}let p;if(g.length>1){for(let E=0,M=f.length;E<M;E++){const y=f[E];_.addGroup(y.groupStart,y.groupCount,E)}h?p=new gh(_,g):d?p=new oo(_,g):p=new ii(_,g)}else h?p=new gh(_,g[0]):d?p=new oo(_,g[0]):p=new ii(_,g[0]);p.name=l.name,s.add(p)}else if(t.vertices.length>0){const a=new ns({size:1,sizeAttenuation:!1}),c=new zn;c.setAttribute("position",new Wt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Wt(t.colors,3)),a.vertexColors=!0);const l=new oo(c,a);s.add(l)}return s}}const Ft=new Dn,Wa=new k;class Nf{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,n=new Float32Array(e.count/3);for(let s=0;s<e.count;s+=3){let o=1;t&&(o=t.getX(s)+t.getX(s+1)+t.getX(s+2)),Ft.a.fromBufferAttribute(e,s),Ft.b.fromBufferAttribute(e,s+1),Ft.c.fromBufferAttribute(e,s+2),o*=Ft.getArea(),n[s/3]=o}this.distribution=new Float32Array(e.count/3);let i=0;for(let s=0;s<n.length;s++)i+=n[s],this.distribution[s]=i;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n){const i=this.distribution[this.distribution.length-1],s=this.binarySearch(this.randomFunction()*i);return this.sampleFace(s,e,t,n)}binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,s=-1;for(;n<=i;){const o=Math.ceil((n+i)/2);if(o===0||t[o-1]<=e&&t[o]>e){s=o;break}else e<t[o]?i=o-1:n=o+1}return s}sampleFace(e,t,n,i){let s=this.randomFunction(),o=this.randomFunction();return s+o>1&&(s=1-s,o=1-o),Ft.a.fromBufferAttribute(this.positionAttribute,e*3),Ft.b.fromBufferAttribute(this.positionAttribute,e*3+1),Ft.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(Ft.a,s).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(s+o)),n!==void 0&&Ft.getNormal(n),i!==void 0&&this.colorAttribute!==void 0&&(Ft.a.fromBufferAttribute(this.colorAttribute,e*3),Ft.b.fromBufferAttribute(this.colorAttribute,e*3+1),Ft.c.fromBufferAttribute(this.colorAttribute,e*3+2),Wa.set(0,0,0).addScaledVector(Ft.a,s).addScaledVector(Ft.b,o).addScaledVector(Ft.c,1-(s+o)),i.r=Wa.x,i.g=Wa.y,i.b=Wa.z),this}}function Mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xs={duration:.5,overwrite:!1,delay:0},bc,qt,Tt,On=1e8,ct=1/On,Kl=Math.PI*2,Lx=Kl/4,Dx=0,zf=Math.sqrt,Ux=Math.cos,Ix=Math.sin,Ot=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Ac=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},un=function(e){return e!==!1},wc=function(){return typeof window<"u"},Xa=function(e){return xt(e)||Ot(e)},kf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,$l=/(?:-?\.?\d|\.)+/gi,Gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,El=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hf=/[+-]=-?[.\d]+/,Vf=/[^,'"\[\]\s]+/gi,Ox=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,Pn,Zl,Rc,An={},Mo={},Wf,Xf=function(e){return(Mo=br(e,An))&&dn},Cc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},So=function(e,t){return!t&&console.warn(e)},qf=function(e,t){return e&&(An[e]=t)&&Mo&&(Mo[e]=t)||An},oa=function(){return 0},Fx={suppressEvents:!0,isStart:!0,kill:!1},lo={suppressEvents:!0,kill:!1},Nx={suppressEvents:!0},Pc={},Hi=[],Jl={},Yf,Mn={},Tl={},Rh=30,co=[],Lc="",Dc=function(e){var t=e[0],n,i;if(ui(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=co.length;i--&&!co[i].targetTest(t););n=co[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new gd(e[i],n)))||e.splice(i,1);return e},mr=function(e){return e._gsap||Dc(Fn(e))[0]._gsap},jf=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Ac(n)&&e.getAttribute&&e.getAttribute(t)||n},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},yo=function(){var e=Hi.length,t=Hi.slice(0),n,i;for(Jl={},Hi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kf=function(e,t,n,i){Hi.length&&!qt&&yo(),e.render(t,n,i||qt&&t<0&&(e._initted||e._startAt)),Hi.length&&!qt&&yo()},$f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vf).length<2?t:Ot(e)?e.trim():e},Zf=function(e){return e},kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},br=function(e,t){for(var n in t)e[n]=t[n];return e},Ch=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Eo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},js=function(e){var t=e.parent||mt,n=e.keyframes?zx(Yt(e.keyframes)):kn;if(un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Fo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},qi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},_r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Gx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ql=function(e,t,n,i){return e._startAt&&(qt?e._startAt.revert(lo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Hx=function r(e){return!e||e._ts&&r(e.parent)},Ph=function(e){return e._repeat?Ms(e._tTime,e=e.duration()+e._rDelay)*e:0},Ms=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},To=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},No=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},Bo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),No(e),n._dirty||_r(n,e)),e},Qf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=To(e.rawTime(),t),(!t._dur||va(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),_r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},ni=function(e,t,n,i){return t.parent&&qi(t),t._start=Bt((Ri(n)?n:n||e!==mt?Cn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jf(e,t,"_first","_last",e._sort?"_start":0),ec(t)||(e._recent=t),i||Qf(e,t),e._ts<0&&Bo(e,e._tTime),e},ed=function(e,t){return(An.ScrollTrigger||Cc("scrollTrigger",t))&&An.ScrollTrigger.create(t,e)},td=function(e,t,n,i,s){if(Ic(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yf!==yn.frame)return Hi.push(e),e._lazy=[s,i],1},Vx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ec=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Vx(e)&&!(!e._initted&&ec(e))||(e._ts<0||e._dp._ts<0)&&!ec(e))?0:1,a=e._rDelay,c=0,l,u,f;if(a&&e._repeat&&(c=va(0,e._tDur,t),u=Ms(c,a),e._yoyo&&u&1&&(o=1-o),u!==Ms(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&td(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Ql(e,t,n,!0),e._onUpdate&&!n&&Nn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qi(e,1),!n&&!qt&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ss=function(e,t,n,i){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Bo(e,e._tTime=e._tDur*a),e.parent&&No(e),n||_r(e.parent,e),e},Lh=function(e){return e instanceof ln?_r(e):Ss(e,e._dur)},qx={_start:0,endTime:oa,totalDuration:oa},Cn=function r(e,t,n){var i=e.labels,s=e._recent||qx,o=e.duration()>=On?s.endTime(!1):e._dur,a,c,l;return Ot(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Yt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Ks=function(e,t,n){var i=Ri(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=un(c.vars.inherit)&&c.parent;o.immediateRender=un(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new At(t[0],o,t[s+1])},Ki=function(e,t){return e||e===0?t(e):t},va=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!Ot(e)||!(t=Ox.exec(e))?"":t[1]},Yx=function(e,t,n){return Ki(n,function(i){return va(e,t,i)})},tc=[].slice,nd=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==Pn},jx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ot(i)&&!t||nd(i,1)?(s=n).push.apply(s,Fn(i)):n.push(i)})||n},Fn=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):Ot(e)&&!n&&(Zl||!ys())?tc.call((t||Rc).querySelectorAll(e),0):Yt(e)?jx(e,n):nd(e)?tc.call(e,0):e?[e]:[]},nc=function(e){return e=Fn(e)[0]||So("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fn(t,n.querySelectorAll?n:n===e?So("Invalid scope")||Rc.createElement("div"):e)}},id=function(e){return e.sort(function(){return .5-Math.random()})},rd=function(e){if(xt(e))return e;var t=ui(e)?e:{each:e},n=gr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,f=i;return Ot(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],f=i[1]),function(h,d,v){var _=(v||t).length,g=o[_],p,E,M,y,S,b,R,D,x;if(!g){if(x=t.grid==="auto"?0:(t.grid||[1,On])[1],!x){for(R=-On;R<(R=v[x++].getBoundingClientRect().left)&&x<_;);x--}for(g=o[_]=[],p=c?Math.min(x,_)*u-.5:i%x,E=x===On?0:c?_*f/x-.5:i/x|0,R=0,D=On,b=0;b<_;b++)M=b%x-p,y=E-(b/x|0),g[b]=S=l?Math.abs(l==="y"?y:M):zf(M*M+y*y),S>R&&(R=S),S<D&&(D=S);i==="random"&&id(g),g.max=R-D,g.min=D,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Xt(t.amount||t.each)||0,n=n&&_<0?pd(n):n}return _=(g[h]-g.min)/g.max||0,Bt(g.b+(n?n(_):_)*g.v)+g.u}},ic=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:Xt(n))}},sd=function(e,t){var n=Yt(e),i,s;return!n&&ui(e)&&(i=n=e.radius||On,e.values?(e=Fn(e.values),(s=!Ri(e[0]))&&(i*=i)):e=ic(e.increment)),Ki(t,n?xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=On,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-c,h=h*h+d*d):h=Math.abs(e[f]-a),h<l&&(l=h,u=f);return u=!i||l<=i?e[u]:o,s||u===o||Ri(o)?u:u+Xt(o)}:ic(e))},ad=function(e,t,n,i){return Ki(Yt(e)?!t:n===!0?!!(n=0):!i,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Kx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},$x=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},Zx=function(e,t,n){return ld(e,t,0,1,n)},od=function(e,t,n){return Ki(n,function(i){return e[~~t(i)]})},Jx=function r(e,t,n){var i=t-e;return Yt(e)?od(e,r(0,e.length),t):Ki(n,function(s){return(i+(s-e)%i)%i+e})},Qx=function r(e,t,n){var i=t-e,s=i*2;return Yt(e)?od(e,r(0,e.length-1),t):Ki(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},la=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Vf:$l),n+=e.substr(t,i-t)+ad(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ld=function(e,t,n,i,s){var o=t-e,a=i-n;return Ki(s,function(c){return n+((c-e)/o*a||0)})},eM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ot(e),a={},c,l,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(u=[],f=e.length,h=f-2,l=1;l<f;l++)u.push(r(e[l-1],e[l]));f--,s=function(v){v*=f;var _=Math.min(h,~~v);return u[_](v-_)},n=t}else i||(e=br(Yt(e)?[]:{},e));if(!u){for(c in t)Uc.call(a,e,c,"get",t[c]);s=function(v){return Nc(v,a)||(o?e.p:e)}}}return Ki(n,s)},Dh=function(e,t,n){var i=e.labels,s=On,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},Nn=function(e,t,n){var i=e.vars,s=i[t],o=Tt,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Hi.length&&yo(),a&&(Tt=a),u=c?s.apply(l,c):s.call(l),Tt=o,u},Gs=function(e){return qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Nn(e,"onInterrupt"),e},rs,cd=[],ud=function(e){if(!wc()){cd.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oa,render:Nc,add:Uc,kill:_M,modifier:mM,rawVars:0},o={targetTest:0,get:0,getSetter:Fc,aliases:{},register:0};if(ys(),e!==i){if(Mn[t])return;kn(i,kn(Eo(e,s),o)),br(i.prototype,br(s,Eo(e,o))),Mn[i.prop=t]=i,e.targetTest&&(co.push(i),Pc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qf(t,i),e.register&&e.register(dn,i,fn)},lt=255,Hs={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},bl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},hd=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&lt,e&lt]:0:Hs.black,s,o,a,c,l,u,f,h,d,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])i=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match($l),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=bl(c+1/3,s,o),i[1]=bl(c,s,o),i[2]=bl(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Gf),n&&i.length<4&&(i[3]=1),i}else i=e.match($l)||Hs.transparent;i=i.map(Number)}return t&&!v&&(s=i[0]/lt,o=i[1]/lt,a=i[2]/lt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?c=l=0:(d=f-h,l=u>.5?d/(2-f-h):d/(f+h),c=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},fd=function(e){var t=[],n=[],i=-1;return e.split(Vi).forEach(function(s){var o=s.match(is)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Uh=function(e,t,n){var i="",s=(e+i).match(Vi),o=t?"hsla(":"rgba(",a=0,c,l,u,f;if(!s)return e;if(s=s.map(function(h){return(h=hd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=fd(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Vi,"1").split(is),f=l.length-1;a<f;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Vi),f=l.length-1;a<f;a++)i+=l[a]+s[a];return i+l[f]},Vi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),tM=/hsl[a]?\(/,dd=function(e){var t=e.join(" "),n;if(Vi.lastIndex=0,Vi.test(t))return n=tM.test(t),e[1]=Uh(e[1],n),e[0]=Uh(e[0],n,fd(e[1])),!0},ca,yn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,f,h,d,v=function _(g){var p=r()-i,E=g===!0,M,y,S,b;if(p>e&&(n+=p-t),i+=p,S=i-n,M=S-o,(M>0||E)&&(b=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,o+=M+(M>=s?4:s-M),y=1),E||(c=l(_)),y)for(d=0;d<a.length;d++)a[d](S,h,b,g)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){Wf&&(!Zl&&wc()&&(Pn=Zl=window,Rc=Pn.document||{},An.gsap=dn,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(dn.version),Xf(Mo||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),u=Pn.requestAnimationFrame,cd.forEach(ud)),c&&f.sleep(),l=u||function(g){return setTimeout(g,o-f.time*1e3+1|0)},ca=1,v(2))},sleep:function(){(u?Pn.cancelAnimationFrame:clearTimeout)(c),ca=0,l=oa},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,p,E){var M=p?function(y,S,b,R){g(y,S,b,R),f.remove(M)}:g;return f.remove(g),a[E?"unshift":"push"](M),ys(),M},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),ys=function(){return!ca&&yn.wake()},tt={},nM=/^[\d.\-M][\d.\-,\s]/,iM=/["']/g,rM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(iM,"").trim():+l,i=c.substr(a+1).trim();return t},sM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},aM=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[rM(t[1])]:sM(e).split(",").map($f)):tt._CE&&nM.test(e)?tt._CE("",e):n},pd=function(e){return function(t){return 1-e(1-t)}},md=function r(e,t){for(var n=e._first,i;n;)n instanceof ln?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},gr=function(e,t){return e&&(xt(e)?e:tt[e]||aM(e))||t},Pr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return hn(e,function(a){tt[a]=An[a]=s,tt[o=a.toLowerCase()]=n;for(var c in s)tt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=tt[a+"."+c]=s[c]}),s},_d=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Al=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Kl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ix((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:_d(a);return s=Kl/s,c.config=function(l,u){return r(e,l,u)},c},wl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:_d(n);return i.config=function(s){return r(e,s)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Pr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;Pr("Elastic",Al("in"),Al("out"),Al());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Pr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Pr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Pr("Circ",function(r){return-(zf(1-r*r)-1)});Pr("Sine",function(r){return r===1?1:-Ux(r*Lx)+1});Pr("Back",wl("in"),wl("out"),wl());tt.SteppedEase=tt.steps=An.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ct;return function(a){return((i*va(0,o,a)|0)+s)*n}}};xs.ease=tt["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Lc+=r+","+r+"Params,"});var gd=function(e,t){this.id=Dx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jf,this.set=t?t.getSetter:Fc},Es=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ss(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),ca||yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bo(this,n),!s._dp||s.parent||Qf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ph(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ph(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ms(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?To(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(va(-Math.abs(this._delay),this._tDur,i),!0),No(this),Gx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?To(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Nx);var i=qt;return qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Cn(this,n),un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,un(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=xt(n)?n:Zf,a=function(){var l=i.then;i.then=null,xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Gs(this)},r}();kn(Es.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var ln=function(r){Bf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=un(n.sortChildren),mt&&ni(n.parent||mt,Mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ed(Mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ks(0,arguments,this),this},t.from=function(i,s,o){return Ks(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ks(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,js(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(i,s,Cn(this,o),1),this},t.call=function(i,s,o){return ni(this,At.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new At(i,o,Cn(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,js(o).immediateRender=un(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,f){return a.startAt=o,js(a).immediateRender=un(a.immediateRender),this.staggerTo(i,s,a,c,l,u,f)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Bt(i),f=this._zTime<0!=i<0&&(this._initted||!l),h,d,v,_,g,p,E,M,y,S,b,R;if(this!==mt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||f){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,M=this._ts,p=!M,f&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(h=Bt(u%g),u===c?(_=this._repeat,h=l):(_=~~(u/g),_&&_===u/g&&(h=l,_--),h>l&&(h=l)),S=Ms(this._tTime,g),!a&&this._tTime&&S!==_&&this._tTime-S*g-this._dur<=0&&(S=_),b&&_&1&&(h=l-h,R=1),_!==S&&!this._lock){var D=b&&S&1,x=D===(b&&_&1);if(_<S&&(D=!D),a=D?0:l,this._lock=1,this.render(a||(R?0:Bt(_*g)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=D?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;md(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Xx(this,Bt(a),Bt(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!_&&(Nn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(v=d._next,(d._act||h>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=-ct);break}}d=v}else{d=this._last;for(var A=i<0?i:h;d;){if(v=d._prev,(d._act||A<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||qt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){E=0,v&&(u+=this._zTime=A?-ct:ct);break}}d=v}}if(E&&!s&&(this.pause(),E.render(h>=a?0:-ct)._zTime=h>=a?1:-1,this._ts))return this._start=y,No(this),this.render(i,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&qi(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(Nn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ri(s)||(s=Cn(this,s,i)),!(i instanceof Es)){if(Yt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ot(i))return this.addLabel(i,s);if(xt(i))i=At.delayedCall(0,i);else return this}return this!==i?ni(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-On);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof At?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ot(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(Fo(this,i),i===this._recent&&(this._recent=this._last),_r(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Cn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=At.delayedCall(0,s||oa,o);return a.data="isPause",this._hasPause=1,ni(this,a,Cn(this,i))},t.removePause=function(i){var s=this._first;for(i=Cn(this,i);s;)s._start===i&&s.data==="isPause"&&qi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Oi!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Fn(i),c=this._first,l=Ri(s),u;c;)c instanceof At?Bx(c._targets,a)&&(l?(!Oi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Cn(o,i),c=s,l=c.startAt,u=c.onStart,f=c.onStartParams,h=c.immediateRender,d,v=At.to(o,kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ct,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());v._dur!==g&&Ss(v,g,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,f||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,kn({startAt:{time:Cn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dh(this,Cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dh(this,Cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return _r(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_r(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=On,l,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Ss(o,o===mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(mt._ts&&(Kf(mt,To(i,mt)),Yf=yn.frame),yn.frame>=Rh){Rh+=bn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&bn.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e}(Es);kn(ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var oM=function(e,t,n,i,s,o,a){var c=new fn(this._pt,e,t,0,1,Ed,null,s),l=0,u=0,f,h,d,v,_,g,p,E;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=la(i)),o&&(E=[n,i],o(E,e,t),n=E[0],i=E[1]),h=n.match(El)||[];f=El.exec(i);)v=f[0],_=i.substring(l,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),v!==h[u++]&&(g=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:g,c:v.charAt(1)==="="?us(g,v)-g:parseFloat(v)-g,m:d&&d<4?Math.round:0},l=El.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Hf.test(i)||p)&&(c.e=0),this._pt=c,c},Uc=function(e,t,n,i,s,o,a,c,l,u){xt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:xt(f)?l?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,d=xt(f)?l?fM:Sd:Oc,v;if(Ot(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(v=us(h,i)+(Xt(h)||0),(v||v===0)&&(i=v))),!u||h!==i||rc)return!isNaN(h*i)&&i!==""?(v=new fn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?pM:yd,0,d),l&&(v.fp=l),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Cc(t,i),oM.call(this,e,t,h,i,d,c||bn.stringFilter,l))},lM=function(e,t,n,i,s){if(xt(e)&&(e=$s(e,s,t,n,i)),!ui(e)||e.style&&e.nodeType||Yt(e)||kf(e))return Ot(e)?$s(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=$s(e[a],s,t,n,i);return o},vd=function(e,t,n,i,s,o){var a,c,l,u;if(Mn[e]&&(a=new Mn[e]).init(s,a.rawVars?t[e]:lM(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new fn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==rs))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Oi,rc,Ic=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,d=i.yoyoEase,v=i.keyframes,_=i.autoRevert,g=e._dur,p=e._startAt,E=e._targets,M=e.parent,y=M&&M.data==="nested"?M.vars.targets:E,S=e._overwrite==="auto"&&!bc,b=e.timeline,R,D,x,A,W,N,O,z,G,J,H,X,ee;if(b&&(!v||!s)&&(s="none"),e._ease=gr(s,xs.ease),e._yEase=d?pd(gr(d===!0?s:d,xs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!b&&!!i.runBackwards,!b||v&&!i.stagger){if(z=E[0]?mr(E[0]).harness:0,X=z&&i[z.prop],R=Eo(i,Pc),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!_?p.render(-1,!0):p.revert(h&&g?lo:Fx),p._lazy=0),o){if(qi(e._startAt=At.set(E,kn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!p&&un(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!_)&&e._startAt.revert(lo),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!p){if(t&&(a=!1),x=kn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&un(c),immediateRender:a,stagger:0,parent:M},R),X&&(x[z.prop]=X),qi(e._startAt=At.set(E,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(lo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&un(c)||c&&!g,D=0;D<E.length;D++){if(W=E[D],O=W._gsap||Dc(E)[D]._gsap,e._ptLookup[D]=J={},Jl[O.id]&&Hi.length&&yo(),H=y===E?D:y.indexOf(W),z&&(G=new z).init(W,X||R,e,H,y)!==!1&&(e._pt=A=new fn(e._pt,W,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(P){J[P]=A}),G.priority&&(N=1)),!z||X)for(x in R)Mn[x]&&(G=vd(x,R,e,H,W,y))?G.priority&&(N=1):J[x]=A=Uc.call(e,W,x,"get",R[x],H,y,0,i.stringFilter);e._op&&e._op[D]&&e.kill(W,e._op[D]),S&&e._pt&&(Oi=e,mt.killTweensOf(W,J,e.globalTime(t)),ee=!e.parent,Oi=0),e._pt&&c&&(Jl[O.id]=1)}N&&Td(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ee,v&&t<=0&&b.render(On,!0,!0)},cM=function(e,t,n,i,s,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(l=f[h][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return rc=1,e.vars[t]="+=0",Ic(e,a),rc=0,1;c.push(l)}for(h=c.length;h--;)u=c[h],l=u._pt||u,l.s=(i||i===0)&&!s?i:l.s+(i||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=St(n)+Xt(u.e)),u.b&&(u.b=l.s+Xt(u.b))},uM=function(e,t){var n=e[0]?mr(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=br({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},hM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Yt(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$s=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):Ot(e)&&~e.indexOf("random(")?la(e):e},xd=Lc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Md={};hn(xd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Md[r]=1});var At=function(r){Bf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:js(i))||this;var c=a.vars,l=c.duration,u=c.delay,f=c.immediateRender,h=c.stagger,d=c.overwrite,v=c.keyframes,_=c.defaults,g=c.scrollTrigger,p=c.yoyoEase,E=i.parent||mt,M=(Yt(n)||kf(n)?Ri(n[0]):"length"in i)?[n]:Fn(n),y,S,b,R,D,x,A,W;if(a._targets=M.length?Dc(M):So("GSAP target "+n+" not found. https://greensock.com",!bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,v||h||Xa(l)||Xa(u)){if(i=a.vars,y=a.timeline=new ln({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:M}),y.kill(),y.parent=y._dp=Mi(a),y._start=0,h||Xa(l)||Xa(u)){if(R=M.length,A=h&&rd(h),ui(h))for(D in h)~xd.indexOf(D)&&(W||(W={}),W[D]=h[D]);for(S=0;S<R;S++)b=Eo(i,Md),b.stagger=0,p&&(b.yoyoEase=p),W&&br(b,W),x=M[S],b.duration=+$s(l,Mi(a),S,x,M),b.delay=(+$s(u,Mi(a),S,x,M)||0)-a._delay,!h&&R===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),y.to(x,b,A?A(S,x,M):0),y._ease=tt.none;y.duration()?l=u=0:a.timeline=0}else if(v){js(kn(y.vars.defaults,{ease:"none"})),y._ease=gr(v.ease||i.ease||"none");var N=0,O,z,G;if(Yt(v))v.forEach(function(J){return y.to(M,J,">")}),y.duration();else{b={};for(D in v)D==="ease"||D==="easeEach"||hM(D,v[D],b,v.easeEach);for(D in b)for(O=b[D].sort(function(J,H){return J.t-H.t}),N=0,S=0;S<O.length;S++)z=O[S],G={ease:z.e,duration:(z.t-(S?O[S-1].t:0))/100*l},G[D]=z.v,y.to(M,G,N),N+=G.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return d===!0&&!bc&&(Oi=Mi(a),mt.killTweensOf(M),Oi=0),ni(E,Mi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!l&&!v&&a._start===Bt(E._time)&&un(f)&&Hx(Mi(a))&&E.data!=="nested")&&(a._tTime=-ct,a.render(Math.max(0,-u)||0)),g&&ed(Mi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,f=i>c-ct&&!u?c:i<ct?0:i,h,d,v,_,g,p,E,M,y;if(!l)Wx(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,M=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Bt(f%_),f===c?(v=this._repeat,h=l):(v=~~(f/_),v&&v===f/_&&(h=l,v--),h>l&&(h=l)),p=this._yoyo&&v&1,p&&(y=this._yEase,h=l-h),g=Ms(this._tTime,_),h===a&&!o&&this._initted)return this._tTime=f,this;v!==g&&(M&&this._yEase&&md(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Bt(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(td(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(y||this._ease)(h/l),this._from&&(this.ratio=E=1-E),h&&!a&&!s&&!v&&(Nn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;M&&M.render(i<0?i:!h&&p?-ct:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ql(this,i,s,o),Nn(this,"onUpdate")),this._repeat&&v!==g&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ql(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&qi(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Nn(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){ca||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Ic(this,c),l=this._ease(c/this._dur),cM(this,i,s,o,a,l,c)?this.resetTo(i,s,o,a):(Bo(this,0),this.parent||Jf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Oi&&Oi.vars.overwrite!==!0)._first||Gs(this),this.parent&&o!==this.timeline.totalDuration()&&Ss(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Fn(i):a,l=this._ptLookup,u=this._pt,f,h,d,v,_,g,p;if((!s||s==="all")&&kx(a,c))return s==="all"&&(this._pt=0),Gs(this);for(f=this._op=this._op||[],s!=="all"&&(Ot(s)&&(_={},hn(s,function(E){return _[E]=1}),s=_),s=uM(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){h=l[p],s==="all"?(f[p]=s,v=h,d={}):(d=f[p]=f[p]||{},v=s);for(_ in v)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Fo(this,g,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Gs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ks(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ks(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return mt.killTweensOf(i,s,o)},e}(Es);kn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(r){At[r]=function(){var e=new ln,t=tc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Oc=function(e,t,n){return e[t]=n},Sd=function(e,t,n){return e[t](n)},fM=function(e,t,n,i){return e[t](i.fp,n)},dM=function(e,t,n){return e.setAttribute(t,n)},Fc=function(e,t){return xt(e[t])?Sd:Ac(e[t])&&e.setAttribute?dM:Oc},yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ed=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},mM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},_M=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Td=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},fn=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||yd,this.d=c||this,this.set=l||Oc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gM,this.m=n,this.mt=s,this.tween=i},r}();hn(Lc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Pc[r]=1});An.TweenMax=An.TweenLite=At;An.TimelineLite=An.TimelineMax=ln;mt=new ln({sortChildren:!1,defaults:xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=dd;var Ts=[],uo={},vM=[],Ih=0,Rl=function(e){return(uo[e]||vM).map(function(t){return t()})},sc=function(){var e=Date.now(),t=[];e-Ih>2&&(Rl("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=Pn.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Rl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ih=e,Rl("matchMedia"))},bd=function(){function r(t,n){this.selector=n&&nc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){xt(n)&&(s=i,i=n,n=xt);var o=this,a=function(){var l=Tt,u=o.selector,f;return l&&l!==o&&l.data.push(o),s&&(o.selector=nc(s)),Tt=o,f=i.apply(o,arguments),xt(f)&&o._r.push(f),Tt=l,o.selector=u,o.isReverted=!1,f};return o.last=a,n===xt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=Tt;Tt=null,n(this),Tt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return o.splice(o.indexOf(l),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Es)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=Ts.indexOf(this);~a&&Ts.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),xM=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){ui(n)||(n={matches:n});var o=new bd(0,s||this.scope),a=o.conditions={},c,l,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Pn.matchMedia(n[l]),c&&(Ts.indexOf(o)<0&&Ts.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(sc):c.addEventListener("change",sc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),bo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ud(i)})},timeline:function(e){return new ln(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ot(e)&&(e=Fn(e)[0]);var s=mr(e||{}).get,o=n?Zf:$f;return n==="native"&&(n=""),e&&(t?o((Mn[t]&&Mn[t].get||s)(e,t,n,i)):function(a,c,l){return o((Mn[a]&&Mn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Fn(e),e.length>1){var i=e.map(function(u){return dn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Mn[t],a=mr(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var f=new o;rs._pt=0,f.init(e,n?u+n:u,rs,0,[e]),f.render(1,f),rs._pt&&Nc(1,rs)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=dn.to(e,br((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,xs.ease)),Ch(xs,e||{})},config:function(e){return Ch(bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Mn[a]&&!An[a]&&So(t+" effect requires "+a+" plugin.")}),Tl[t]=function(a,c,l){return n(Fn(a),kn(c||{},s),l)},o&&(ln.prototype[t]=function(a,c,l){return this.add(Tl[t](a,ui(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){tt[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):tt},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ln(e),i,s;for(n.smoothChildTiming=un(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=s;return ni(mt,n,0),n},context:function(e,t){return e?new bd(e,t):Tt},matchMedia:function(e){return new xM(e)},matchMediaRefresh:function(){return Ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||sc()},addEventListener:function(e,t){var n=uo[e]||(uo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=uo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Jx,wrapYoyo:Qx,distribute:rd,random:ad,snap:sd,normalize:Zx,getUnit:Xt,clamp:Yx,splitColor:hd,toArray:Fn,selector:nc,mapRange:ld,pipe:Kx,unitize:$x,interpolate:eM,shuffle:id},install:Xf,effects:Tl,ticker:yn,updateRoot:ln.updateRoot,plugins:Mn,globalTimeline:mt,core:{PropTween:fn,globals:qf,Tween:At,Timeline:ln,Animation:Es,getCache:mr,_removeLinkedListItem:Fo,reverting:function(){return qt},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return bc=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bo[r]=At[r]});yn.add(ln.updateRoot);rs=bo.to({},{duration:0});var MM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},SM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=MM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Cl=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(Ot(s)&&(c={},hn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}SM(a,s)}}}},dn=bo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cl("roundProps",ic),Cl("modifiers"),Cl("snap",sd))||bo;At.version=ln.version=dn.version="3.11.5";Wf=1;wc()&&ys();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oh,Fi,hs,Bc,ur,Fh,zc,yM=function(){return typeof window<"u"},Ci={},sr=180/Math.PI,fs=Math.PI/180,Kr=Math.atan2,Nh=1e8,kc=/([A-Z])/g,EM=/(left|right|width|margin|padding|x)/i,TM=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ac=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ad=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},RM=function(e,t,n){return e.style[t]=n},CM=function(e,t,n){return e.style.setProperty(t,n)},PM=function(e,t,n){return e._gsap[t]=n},LM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},DM=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},UM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},_t="transform",Zn=_t+"Origin",IM=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Ci){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Si(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Si(i,e);else return ri.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(_t)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},Rd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},OM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(kc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zc(),(!s||!s.isStart)&&!n[_t]&&(Rd(n),i.uncache=1)}},Cd=function(e,t){var n={target:e,props:[],revert:OM,save:IM};return e._gsap||dn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Pd,oc=function(e,t){var n=Fi.createElementNS?Fi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fi.createElement(e);return n.style?n:Fi.createElement(e)},ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,bs(t)||t,1)||""},Bh="O,Moz,ms,Ms,Webkit".split(","),bs=function(e,t,n){var i=t||ur,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Bh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Bh[o]:"")+e},lc=function(){yM()&&window.document&&(Oh=window,Fi=Oh.document,hs=Fi.documentElement,ur=oc("div")||{style:{}},oc("div"),_t=bs(_t),Zn=_t+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pd=!!bs("perspective"),zc=dn.core.reverting,Bc=1)},Pl=function r(e){var t=oc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(hs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),hs.removeChild(t),this.style.cssText=s,o},zh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ld=function(e){var t;try{t=e.getBBox()}catch{t=Pl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Pl||(t=Pl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+zh(e,["x","cx","x1"])||0,y:+zh(e,["y","cy","y1"])||0,width:0,height:0}:t},Dd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ld(e))},ua=function(e,t){if(t){var n=e.style;t in Ci&&t!==Zn&&(t=_t),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(kc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ni=function(e,t,n,i,s,o){var a=new fn(e._pt,t,n,0,1,o?wd:Ad);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},kh={deg:1,rad:1,turn:1},FM={grid:1,flex:1},Yi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ur.style,c=EM.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,h=i==="px",d=i==="%",v,_,g,p;return i===o||!s||kh[i]||kh[o]?s:(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Dd(e),(d||o==="%")&&(Ci[t]||~t.indexOf("adius"))?(v=p?e.getBBox()[c?"width":"height"]:e[u],St(d?s/v*f:s/100*v)):(a[c?"width":"height"]=f+(h?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Fi||!_.appendChild)&&(_=Fi.body),g=_._gsap,g&&d&&g.width&&c&&g.time===yn.time&&!g.uncache?St(s/g.width*f):((d||o==="%")&&!FM[ai(_,"display")]&&(a.position=ai(e,"position")),_===e&&(a.position="static"),_.appendChild(ur),v=ur[u],_.removeChild(ur),a.position="absolute",c&&d&&(g=mr(_),g.time=yn.time,g.width=_[u]),St(h?v*s/f:v&&s?f/v*s:0))))},Si=function(e,t,n,i){var s;return Bc||lc(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(s=fa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wo(ai(e,Zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ao[t]&&Ao[t](e,t,n)||ai(e,t)||jf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Yi(e,t,s,n)+n:s},NM=function(e,t,n,i){if(!n||n==="none"){var s=bs(t,e,1),o=s&&ai(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var a=new fn(this._pt,e.style,t,0,1,Ed),c=0,l=0,u,f,h,d,v,_,g,p,E,M,y,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ai(e,t)||i,e.style[t]=n),u=[n,i],dd(u),n=u[0],i=u[1],h=n.match(is)||[],S=i.match(is)||[],S.length){for(;f=is.exec(i);)g=f[0],E=i.substring(c,f.index),v?v=(v+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(v=1),g!==(_=h[l++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),g.charAt(1)==="="&&(g=us(d,g)+y),p=parseFloat(g),M=g.substr((p+"").length),c=is.lastIndex-M.length,M||(M=M||bn.units[t]||y,c===i.length&&(i+=M,a.e+=M)),y!==M&&(d=Yi(e,t,_,M)||0),a._pt={_next:a._pt,p:E||l===1?E:",",s:d,c:p-d,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?wd:Ad;return Hf.test(i)&&(a.e=0),this._pt=a,a},Gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gh[n]||n,t[1]=Gh[i]||i,t.join(" ")},zM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Ci[a]&&(c=1,a=a==="transformOrigin"?Zn:_t),ua(n,a);c&&(ua(n,_t),o&&(o.svg&&n.removeAttribute("transform"),fa(n,1),o.uncache=1,Rd(i)))}},Ao={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new fn(e._pt,t,n,0,0,zM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ha=[1,0,0,1,0,0],Ud={},Id=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hh=function(e){var t=ai(e,_t);return Id(t)?ha:t.substr(7).match(Gf).map(St)},Gc=function(e,t){var n=e._gsap||mr(e),i=e.style,s=Hh(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!e.offsetParent&&e!==hs&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,hs.appendChild(e)),s=Hh(e),c?i.display=c:ua(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cc=function(e,t,n,i,s,o){var a=e._gsap,c=s||Gc(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=c[0],v=c[1],_=c[2],g=c[3],p=c[4],E=c[5],M=t.split(" "),y=parseFloat(M[0])||0,S=parseFloat(M[1])||0,b,R,D,x;n?c!==ha&&(R=d*g-v*_)&&(D=y*(g/R)+S*(-_/R)+(_*E-g*p)/R,x=y*(-v/R)+S*(d/R)-(d*E-v*p)/R,y=D,S=x):(b=Ld(e),y=b.x+(~M[0].indexOf("%")?y/100*b.width:y),S=b.y+(~(M[1]||M[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&a.smooth?(p=y-l,E=S-u,a.xOffset=f+(p*d+E*_)-p,a.yOffset=h+(p*v+E*g)-E):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Zn]="0px 0px",o&&(Ni(o,a,"xOrigin",l,y),Ni(o,a,"yOrigin",u,S),Ni(o,a,"xOffset",f,a.xOffset),Ni(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},fa=function(e,t){var n=e._gsap||new gd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=ai(e,Zn)||"0",u,f,h,d,v,_,g,p,E,M,y,S,b,R,D,x,A,W,N,O,z,G,J,H,X,ee,P,de,ae,j,Q,le;return u=f=h=_=g=p=E=M=y=0,d=v=1,n.svg=!!(e.getCTM&&Dd(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[_t]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[_t]!=="none"?c[_t]:"")),i.scale=i.rotate=i.translate="none"),R=Gc(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),l=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),cc(e,H||l,!!H||n.originIsAbsolute,n.smooth!==!1,R)),S=n.xOrigin||0,b=n.yOrigin||0,R!==ha&&(W=R[0],N=R[1],O=R[2],z=R[3],u=G=R[4],f=J=R[5],R.length===6?(d=Math.sqrt(W*W+N*N),v=Math.sqrt(z*z+O*O),_=W||N?Kr(N,W)*sr:0,E=O||z?Kr(O,z)*sr+_:0,E&&(v*=Math.abs(Math.cos(E*fs))),n.svg&&(u-=S-(S*W+b*O),f-=b-(S*N+b*z))):(le=R[6],j=R[7],P=R[8],de=R[9],ae=R[10],Q=R[11],u=R[12],f=R[13],h=R[14],D=Kr(le,ae),g=D*sr,D&&(x=Math.cos(-D),A=Math.sin(-D),H=G*x+P*A,X=J*x+de*A,ee=le*x+ae*A,P=G*-A+P*x,de=J*-A+de*x,ae=le*-A+ae*x,Q=j*-A+Q*x,G=H,J=X,le=ee),D=Kr(-O,ae),p=D*sr,D&&(x=Math.cos(-D),A=Math.sin(-D),H=W*x-P*A,X=N*x-de*A,ee=O*x-ae*A,Q=z*A+Q*x,W=H,N=X,O=ee),D=Kr(N,W),_=D*sr,D&&(x=Math.cos(D),A=Math.sin(D),H=W*x+N*A,X=G*x+J*A,N=N*x-W*A,J=J*x-G*A,W=H,G=X),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=St(Math.sqrt(W*W+N*N+O*O)),v=St(Math.sqrt(J*J+le*le)),D=Kr(G,J),E=Math.abs(D)>2e-4?D*sr:0,y=Q?1/(Q<0?-Q:Q):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Id(ai(e,_t)),H&&e.setAttribute("transform",H))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=St(d),n.scaleY=St(v),n.rotation=St(_)+a,n.rotationX=St(g)+a,n.rotationY=St(p)+a,n.skewX=E+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Zn]=wo(l)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?GM:Pd?Od:kM,n.uncache=0,n},wo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ll=function(e,t,n){var i=Xt(t);return St(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",i)))+i},kM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Od(e,t)},tr="0deg",Os="0px",nr=") ",Od=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,v=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,E=n.target,M=n.zOrigin,y="",S=p==="auto"&&e&&e!==1||p===!0;if(M&&(f!==tr||u!==tr)){var b=parseFloat(u)*fs,R=Math.sin(b),D=Math.cos(b),x;b=parseFloat(f)*fs,x=Math.cos(b),o=Ll(E,o,R*x*-M),a=Ll(E,a,-Math.sin(b)*-M),c=Ll(E,c,D*x*-M+M)}g!==Os&&(y+="perspective("+g+nr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==Os||a!==Os||c!==Os)&&(y+=c!==Os||S?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+nr),l!==tr&&(y+="rotate("+l+nr),u!==tr&&(y+="rotateY("+u+nr),f!==tr&&(y+="rotateX("+f+nr),(h!==tr||d!==tr)&&(y+="skew("+h+", "+d+nr),(v!==1||_!==1)&&(y+="scale("+v+", "+_+nr),E.style[_t]=y||"translate(0, 0)"},GM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,v=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,E=n.forceCSS,M=parseFloat(o),y=parseFloat(a),S,b,R,D,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=fs,l*=fs,S=Math.cos(c)*f,b=Math.sin(c)*f,R=Math.sin(c-l)*-h,D=Math.cos(c-l)*h,l&&(u*=fs,x=Math.tan(l-u),x=Math.sqrt(1+x*x),R*=x,D*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),S*=x,b*=x)),S=St(S),b=St(b),R=St(R),D=St(D)):(S=f,D=h,b=R=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Yi(d,"x",o,"px"),y=Yi(d,"y",a,"px")),(v||_||g||p)&&(M=St(M+v-(v*S+_*R)+g),y=St(y+_-(v*b+_*D)+p)),(i||s)&&(x=d.getBBox(),M=St(M+i/100*x.width),y=St(y+s/100*x.height)),x="matrix("+S+","+b+","+R+","+D+","+M+","+y+")",d.setAttribute("transform",x),E&&(d.style[_t]=x)},HM=function(e,t,n,i,s){var o=360,a=Ot(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?sr:1),l=c-i,u=i+l+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),f==="cw"&&l<0?l=(l+o*Nh)%o-~~(l/o)*o:f==="ccw"&&l>0&&(l=(l-o*Nh)%o-~~(l/o)*o)),e._pt=h=new fn(e._pt,t,n,i,l,bM),h.e=u,h.u="deg",e._props.push(n),h},Vh=function(e,t){for(var n in t)e[n]=t[n];return e},VM=function(e,t,n){var i=Vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,f,h,d,v;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[_t]=t,a=fa(n,1),ua(n,_t),n.setAttribute("transform",l)):(l=getComputedStyle(n)[_t],o[_t]=t,a=fa(n,1),o[_t]=l);for(c in Ci)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(d=Xt(l),v=Xt(u),f=d!==v?Yi(n,c,l,v):parseFloat(l),h=parseFloat(u),e._pt=new fn(e._pt,a,c,f,h-f,ac),e._pt.u=v||0,e._props.push(c));Vh(a,i)};hn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ao[e>1?"border"+r:r]=function(a,c,l,u,f){var h,d;if(arguments.length<4)return h=o.map(function(v){return Si(a,v,l)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(v,_){return d[v]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(c,d,f)}});var Fd={name:"css",register:lc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,f,h,d,v,_,g,p,E,M,y,S,b,R,D;Bc||lc(),this.styles=this.styles||Cd(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Mn[_]&&vd(_,t,n,i,e,s)))){if(d=typeof u,v=Ao[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=la(u)),v)v(this,e,_,u,n)&&(R=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Vi.lastIndex=0,Vi.test(l)||(g=Xt(l),p=Xt(u)),p?g!==p&&(l=Yi(e,_,l,p)+p):g&&(u+=g),this.add(a,"setProperty",l,u,i,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],Ot(l)&&~l.indexOf("random(")&&(l=la(l)),Xt(l+"")||(l+=bn.units[_]||Xt(Si(e,_))||""),(l+"").charAt(1)==="="&&(l=Si(e,_))):l=Si(e,_),h=parseFloat(l),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in ri&&(_==="autoAlpha"&&(h===1&&Si(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),Ni(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Ci,M){if(this.styles.save(_),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||fa(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new fn(this._pt,a,_t,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new fn(this._pt,S,"scaleY",S.scaleY,(E?us(S.scaleY,E+f):f)-S.scaleY||0,ac),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Zn,0,a[Zn]),u=BM(u),S.svg?cc(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&Ni(this,S,"zOrigin",S.zOrigin,p),Ni(this,a,_,wo(l),wo(u)));continue}else if(_==="svgOrigin"){cc(e,u,1,b,0,this);continue}else if(_ in Ud){HM(this,S,_,h,E?us(h,E+u):u);continue}else if(_==="smoothOrigin"){Ni(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){VM(this,u,e);continue}}else _ in a||(_=bs(_)||_);if(M||(f||f===0)&&(h||h===0)&&!TM.test(u)&&_ in a)g=(l+"").substr((h+"").length),f||(f=0),p=Xt(u)||(_ in bn.units?bn.units[_]:g),g!==p&&(h=Yi(e,_,l,p)),this._pt=new fn(this._pt,M?S:a,_,h,(E?us(h,E+f):f)-h,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?wM:ac),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=AM);else if(_ in a)NM.call(this,e,_,l,E?E+u:u);else if(_ in e)this.add(e,_,l||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Cc(_,u);continue}M||(_ in a?D.push(_,0,a[_]):D.push(_,1,l||e[_])),o.push(_)}}R&&Td(this)},render:function(e,t){if(t.tween._time||!zc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Si,aliases:ri,getSetter:function(e,t,n){var i=ri[t];return i&&i.indexOf(",")<0&&(t=i),t in Ci&&t!==Zn&&(e._gsap.x||Si(e,"x"))?n&&Fh===n?t==="scale"?LM:PM:(Fh=n||{})&&(t==="scale"?DM:UM):e.style&&!Ac(e.style[t])?RM:~t.indexOf("-")?CM:Fc(e,t)},core:{_removeProperty:ua,_getMatrix:Gc}};dn.utils.checkPrefix=bs;dn.core.getStyleSaver=Cd;(function(r,e,t,n){var i=hn(r+","+e+","+t,function(s){Ci[s]=1});hn(e,function(s){bn.units[s]="deg",Ud[s]=1}),ri[i[13]]=r+","+e,hn(n,function(s){var o=s.split(":");ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){bn.units[r]="px"});dn.registerPlugin(Fd);var Hc=dn.registerPlugin(Fd)||dn;Hc.core.Tween;function Wh(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function WM(r,e,t){return e&&Wh(r.prototype,e),t&&Wh(r,t),r}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt,uc,En,Bi,zi,ds,Nd,ar,Zs,Bd,Ti,Xn,zd,kd=function(){return kt||typeof window<"u"&&(kt=window.gsap)&&kt.registerPlugin&&kt},Gd=1,ss=[],Ke=[],oi=[],Js=Date.now,hc=function(e,t){return t},XM=function(){var e=Zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ke),i.push.apply(i,oi),Ke=n,oi=i,hc=function(o,a){return t[o](a)}},Wi=function(e,t){return~oi.indexOf(e)&&oi[oi.indexOf(e)+1][t]},Qs=function(e){return!!~Bd.indexOf(e)},an=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},$t=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa="scrollLeft",Ya="scrollTop",fc=function(){return Ti&&Ti.isPressed||Ke.cache++},Ro=function(e,t){var n=function i(s){if(s||s===0){Gd&&(En.history.scrollRestoration="manual");var o=Ti&&Ti.isPressed;s=i.v=Math.round(s)||(Ti&&Ti.iOS?1:0),e(s),i.cacheID=Ke.cache,o&&hc("ss",s)}else(t||Ke.cache!==i.cacheID||hc("ref"))&&(i.cacheID=Ke.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},nn={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ro(function(r){return arguments.length?En.scrollTo(r,wt.sc()):En.pageXOffset||Bi[qa]||zi[qa]||ds[qa]||0})},wt={s:Ya,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:nn,sc:Ro(function(r){return arguments.length?En.scrollTo(nn.sc(),r):En.pageYOffset||Bi[Ya]||zi[Ya]||ds[Ya]||0})},on=function(e){return kt.utils.toArray(e)[0]||(typeof e=="string"&&kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ji=function(e,t){var n=t.s,i=t.sc;Qs(e)&&(e=Bi.scrollingElement||zi);var s=Ke.indexOf(e),o=i===wt.sc?1:2;!~s&&(s=Ke.push(e)-1),Ke[s+o]||e.addEventListener("scroll",fc);var a=Ke[s+o],c=a||(Ke[s+o]=Ro(Wi(e,n),!0)||(Qs(e)?i:Ro(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=kt.getProperty(e,"scrollBehavior")==="smooth"),c},dc=function(e,t,n){var i=e,s=e,o=Js(),a=o,c=t||50,l=Math.max(500,c*3),u=function(v,_){var g=Js();_||g-o>c?(s=i,i=v,a=o,o=g):n?i+=v:i=s+(v-s)/(g-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(v){var _=a,g=s,p=Js();return(v||v===0)&&v!==i&&u(v),o===a||p-a>l?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Fs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hd=function(){Zs=kt.core.globals().ScrollTrigger,Zs&&Zs.core&&XM()},Vd=function(e){return kt=e||kd(),kt&&typeof document<"u"&&document.body&&(En=window,Bi=document,zi=Bi.documentElement,ds=Bi.body,Bd=[En,Bi,zi,ds],kt.utils.clamp,zd=kt.core.context||function(){},ar="onpointerenter"in ds?"pointer":"mouse",Nd=bt.isTouch=En.matchMedia&&En.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in En||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xn=bt.eventTypes=("ontouchstart"in zi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gd=0},500),Hd(),uc=1),uc};nn.op=wt;Ke.cache=0;var bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){uc||Vd(kt)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||Hd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,v=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,E=n.onDrag,M=n.onPress,y=n.onRelease,S=n.onRight,b=n.onLeft,R=n.onUp,D=n.onDown,x=n.onChangeX,A=n.onChangeY,W=n.onChange,N=n.onToggleX,O=n.onToggleY,z=n.onHover,G=n.onHoverEnd,J=n.onMove,H=n.ignoreCheck,X=n.isNormalizer,ee=n.onGestureStart,P=n.onGestureEnd,de=n.onWheel,ae=n.onEnable,j=n.onDisable,Q=n.onClick,le=n.scrollSpeed,oe=n.capture,U=n.allowClicks,Ce=n.lockAxis,Ie=n.onLockAxis;this.target=a=on(a)||zi,this.vars=n,d&&(d=kt.utils.toArray(d)),i=i||1e-9,s=s||0,v=v||1,le=le||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(En.getComputedStyle(ds).lineHeight)||22);var ce,we,Me,ge,Oe,it,Xe,Y=this,st=0,Le=0,Qe=ji(a,nn),ft=ji(a,wt),C=Qe(),T=ft(),$=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xn[0]==="pointerdown",re=Qs(a),ne=a.ownerDocument||Bi,ue=[0,0,0],L=[0,0,0],te=0,V=function(){return te=Js()},he=function(ve,se){return(Y.event=ve)&&d&&~d.indexOf(ve.target)||se&&$&&ve.pointerType!=="touch"||H&&H(ve,se)},xe=function(){Y._vx.reset(),Y._vy.reset(),we.pause(),f&&f(Y)},be=function(){var ve=Y.deltaX=Xh(ue),se=Y.deltaY=Xh(L),Re=Math.abs(ve)>=i,Fe=Math.abs(se)>=i;W&&(Re||Fe)&&W(Y,ve,se,ue,L),Re&&(S&&Y.deltaX>0&&S(Y),b&&Y.deltaX<0&&b(Y),x&&x(Y),N&&Y.deltaX<0!=st<0&&N(Y),st=Y.deltaX,ue[0]=ue[1]=ue[2]=0),Fe&&(D&&Y.deltaY>0&&D(Y),R&&Y.deltaY<0&&R(Y),A&&A(Y),O&&Y.deltaY<0!=Le<0&&O(Y),Le=Y.deltaY,L[0]=L[1]=L[2]=0),(ge||Me)&&(J&&J(Y),Me&&(E(Y),Me=!1),ge=!1),it&&!(it=!1)&&Ie&&Ie(Y),Oe&&(de(Y),Oe=!1),ce=0},_e=function(ve,se,Re){ue[Re]+=ve,L[Re]+=se,Y._vx.update(ve),Y._vy.update(se),l?ce||(ce=requestAnimationFrame(be)):be()},Ee=function(ve,se){Ce&&!Xe&&(Y.axis=Xe=Math.abs(ve)>Math.abs(se)?"x":"y",it=!0),Xe!=="y"&&(ue[2]+=ve,Y._vx.update(ve,!0)),Xe!=="x"&&(L[2]+=se,Y._vy.update(se,!0)),l?ce||(ce=requestAnimationFrame(be)):be()},Ne=function(ve){if(!he(ve,1)){ve=Fs(ve,u);var se=ve.clientX,Re=ve.clientY,Fe=se-Y.x,Ve=Re-Y.y,yt=Y.isDragging;Y.x=se,Y.y=Re,(yt||Math.abs(Y.startX-se)>=s||Math.abs(Y.startY-Re)>=s)&&(E&&(Me=!0),yt||(Y.isDragging=!0),Ee(Fe,Ve),yt||g&&g(Y))}},me=Y.onPress=function(Be){he(Be,1)||Be&&Be.button||(Y.axis=Xe=null,we.pause(),Y.isPressed=!0,Be=Fs(Be),st=Le=0,Y.startX=Y.x=Be.clientX,Y.startY=Y.y=Be.clientY,Y._vx.reset(),Y._vy.reset(),an(X?a:ne,Xn[1],Ne,u,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},at=Y.onRelease=function(Be){if(!he(Be,1)){$t(X?a:ne,Xn[1],Ne,!0);var ve=!isNaN(Y.y-Y.startY),se=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Re=Fs(Be);!se&&ve&&(Y._vx.reset(),Y._vy.reset(),u&&U&&kt.delayedCall(.08,function(){if(Js()-te>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(ne.createEvent){var Fe=ne.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,En,1,Re.screenX,Re.screenY,Re.clientX,Re.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(Fe)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&!X&&we.restart(!0),p&&se&&p(Y),y&&y(Y,se)}},I=function(ve){return ve.touches&&ve.touches.length>1&&(Y.isGesturing=!0)&&ee(ve,Y.isDragging)},K=function(){return(Y.isGesturing=!1)||P(Y)},ie=function(ve){if(!he(ve)){var se=Qe(),Re=ft();_e((se-C)*le,(Re-T)*le,1),C=se,T=Re,f&&we.restart(!0)}},fe=function(ve){if(!he(ve)){ve=Fs(ve,u),de&&(Oe=!0);var se=(ve.deltaMode===1?c:ve.deltaMode===2?En.innerHeight:1)*v;_e(ve.deltaX*se,ve.deltaY*se,0),f&&!X&&we.restart(!0)}},Ae=function(ve){if(!he(ve)){var se=ve.clientX,Re=ve.clientY,Fe=se-Y.x,Ve=Re-Y.y;Y.x=se,Y.y=Re,ge=!0,(Fe||Ve)&&Ee(Fe,Ve)}},nt=function(ve){Y.event=ve,z(Y)},je=function(ve){Y.event=ve,G(Y)},gt=function(ve){return he(ve)||Fs(ve,u)&&Q(Y)};we=Y._dc=kt.delayedCall(h||.25,xe).pause(),Y.deltaX=Y.deltaY=0,Y._vx=dc(0,50,!0),Y._vy=dc(0,50,!0),Y.scrollX=Qe,Y.scrollY=ft,Y.isDragging=Y.isGesturing=Y.isPressed=!1,zd(this),Y.enable=function(Be){return Y.isEnabled||(an(re?ne:a,"scroll",fc),o.indexOf("scroll")>=0&&an(re?ne:a,"scroll",ie,u,oe),o.indexOf("wheel")>=0&&an(a,"wheel",fe,u,oe),(o.indexOf("touch")>=0&&Nd||o.indexOf("pointer")>=0)&&(an(a,Xn[0],me,u,oe),an(ne,Xn[2],at),an(ne,Xn[3],at),U&&an(a,"click",V,!1,!0),Q&&an(a,"click",gt),ee&&an(ne,"gesturestart",I),P&&an(ne,"gestureend",K),z&&an(a,ar+"enter",nt),G&&an(a,ar+"leave",je),J&&an(a,ar+"move",Ae)),Y.isEnabled=!0,Be&&Be.type&&me(Be),ae&&ae(Y)),Y},Y.disable=function(){Y.isEnabled&&(ss.filter(function(Be){return Be!==Y&&Qs(Be.target)}).length||$t(re?ne:a,"scroll",fc),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),$t(X?a:ne,Xn[1],Ne,!0)),$t(re?ne:a,"scroll",ie,oe),$t(a,"wheel",fe,oe),$t(a,Xn[0],me,oe),$t(ne,Xn[2],at),$t(ne,Xn[3],at),$t(a,"click",V,!0),$t(a,"click",gt),$t(ne,"gesturestart",I),$t(ne,"gestureend",K),$t(a,ar+"enter",nt),$t(a,ar+"leave",je),$t(a,ar+"move",Ae),Y.isEnabled=Y.isPressed=Y.isDragging=!1,j&&j(Y))},Y.kill=Y.revert=function(){Y.disable();var Be=ss.indexOf(Y);Be>=0&&ss.splice(Be,1),Ti===Y&&(Ti=0)},ss.push(Y),X&&Qs(a)&&(Ti=Y),Y.enable(_)},WM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();bt.version="3.11.5";bt.create=function(r){return new bt(r)};bt.register=Vd;bt.getAll=function(){return ss.slice()};bt.getById=function(r){return ss.filter(function(e){return e.vars.id===r})[0]};kd()&&kt.registerPlugin(bt);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Qr,$e,pt,Yn,vt,Wd,Co,Po,as,ho,ja,Vt,zo,pc,Jt,qh,Yh,es,Xd,Dl,qd,vn,Yd,jd,Kd,Ii,mc,Vc,Ul,Ka=1,en=Date.now,Il=en(),Bn=0,Vs=0,qM=function r(){return Vs&&requestAnimationFrame(r)},jh=function(){return zo=1},Kh=function(){return zo=0},ei=function(e){return e},Ws=function(e){return Math.round(e*1e5)/1e5||0},$d=function(){return typeof window<"u"},Zd=function(){return Pe||$d()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Ar=function(e){return!!~Wd.indexOf(e)},Jd=function(e){return Wi(e,"getBoundingClientRect")||(Ar(e)?function(){return vo.width=$e.innerWidth,vo.height=$e.innerHeight,vo}:function(){return Ei(e)})},YM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Wi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?$e["inner"+s]:e["client"+s])||0}},jM=function(e,t){return!t||~oi.indexOf(e)?Jd(e):function(){return vo}},ki=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Wi(e,n))?o()-Jd(e)()[s]:Ar(e)?(Yn[n]||vt[n])-($e["inner"+i]||Yn["client"+i]||vt["client"+i]):e[n]-e["offset"+i])},$a=function(e,t){for(var n=0;n<es.length;n+=3)(!t||~t.indexOf(es[n+1]))&&e(es[n],es[n+1],es[n+2])},qn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},Xs=function(e){return typeof e=="number"},fo=function(e){return typeof e=="object"},Ns=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ol=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},$r=Math.abs,Qd="left",ep="top",Wc="right",Xc="bottom",vr="width",xr="height",ea="Right",ta="Left",na="Top",ia="Bottom",Mt="padding",In="margin",As="Width",qc="Height",Nt="px",$n=function(e){return $e.getComputedStyle(e)},KM=function(e){var t=$n(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$h=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ei=function(e,t){var n=t&&$n(e)[pc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},_c=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},tp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},$M=function(e){return function(t){return Pe.utils.snap(tp(e),t)}},Yc=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},ZM=function(e){return function(t,n){return Yc(tp(e))(t,n.direction)}},Za=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},It=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ut=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ja=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Zh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qa={toggleActions:"play",anticipatePin:0},Lo={top:0,left:0,center:.5,bottom:1,right:1},po=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Lo?Lo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},eo=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,v=pt.createElement("div"),_=Ar(n)||Wi(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?vt:n,E=e.indexOf("start")!==-1,M=E?l:u,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||c)&&_?"fixed;":"absolute;"),(g||c||!_)&&(y+=(i===wt?Wc:Xc)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=E,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=y,v.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(v,p.children[0]):p.appendChild(v),v._offset=v["offset"+i.op.d2],mo(v,0,i,E),v},mo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+As]=1,s["border"+a+As]=0,s[n.p]=t+"px",Pe.set(e,s)},Ye=[],gc={},da,Jh=function(){return en()-Bn>34&&(da||(da=requestAnimationFrame(Ai)))},Zr=function(){(!vn||!vn.isPressed||vn.startX>vt.clientWidth)&&(Ke.cache++,vn?da||(da=requestAnimationFrame(Ai)):Ai(),Bn||Rr("scrollStart"),Bn=en())},Fl=function(){Kd=$e.innerWidth,jd=$e.innerHeight},qs=function(){Ke.cache++,!Vt&&!qd&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!Yd||Kd!==$e.innerWidth||Math.abs($e.innerHeight-jd)>$e.innerHeight*.25)&&Co.restart(!0)},wr={},JM=[],np=function r(){return Ut(Je,"scrollEnd",r)||hr(!0)},Rr=function(e){return wr[e]&&wr[e].map(function(t){return t()})||JM},xn=[],ip=function(e){for(var t=0;t<xn.length;t+=5)(!e||xn[t+4]&&xn[t+4].query===e)&&(xn[t].style.cssText=xn[t+1],xn[t].getBBox&&xn[t].setAttribute("transform",xn[t+2]||""),xn[t+3].uncache=1)},jc=function(e,t){var n;for(Jt=0;Jt<Ye.length;Jt++)n=Ye[Jt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&ip(t),t||Rr("revert")},rp=function(e,t){Ke.cache++,(t||!Sn)&&Ke.forEach(function(n){return rn(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&($e.history.scrollRestoration=Vc=e)},Sn,Mr=0,Qh,QM=function(){if(Qh!==Mr){var e=Qh=Mr;requestAnimationFrame(function(){return e===Mr&&hr(!0)})}},hr=function(e,t){if(Bn&&!e){It(Je,"scrollEnd",np);return}Sn=Je.isRefreshing=!0,Ke.forEach(function(i){return rn(i)&&i.cacheID++&&(i.rec=i())});var n=Rr("refreshInit");Xd&&Je.sort(),t||jc(),Ke.forEach(function(i){rn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),Ye.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),Ye.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,ki(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ke.forEach(function(i){rn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),rp(Vc,1),Co.pause(),Mr++,Sn=2,Ai(2),Ye.forEach(function(i){return rn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Sn=Je.isRefreshing=!1,Rr("refresh")},vc=0,_o=1,ra,Ai=function(e){if(!Sn||e===2){Je.isUpdating=!0,ra&&ra.update(0);var t=Ye.length,n=en(),i=n-Il>=50,s=t&&Ye[0].scroll();if(_o=vc>s?-1:1,Sn||(vc=s),i&&(Bn&&!zo&&n-Bn>200&&(Bn=0,Rr("scrollEnd")),ho=Il,Il=n),_o<0){for(Jt=t;Jt-- >0;)Ye[Jt]&&Ye[Jt].update(0,i);_o=1}else for(Jt=0;Jt<t;Jt++)Ye[Jt]&&Ye[Jt].update(0,i);Je.isUpdating=!1}da=0},xc=[Qd,ep,Xc,Wc,In+ia,In+ea,In+na,In+ta,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],go=xc.concat([vr,xr,"boxSizing","max"+As,"max"+qc,"position",In,Mt,Mt+na,Mt+ea,Mt+ia,Mt+ta]),eS=function(e,t,n){ps(n);var i=e._gsap;if(i.spacerIsNative)ps(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=xc.length,o=t.style,a=e.style,c;s--;)c=xc[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Xc]=a[Wc]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vr]=_c(e,nn)+Nt,o[xr]=_c(e,wt)+Nt,o[Mt]=a[In]=a[ep]=a[Qd]="0",ps(i),a[vr]=a["max"+As]=n[vr],a[xr]=a["max"+qc]=n[xr],a[Mt]=n[Mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},tS=/([A-Z])/g,ps=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(tS,"-$1").toLowerCase())}},to=function(e){for(var t=go.length,n=e.style,i=[],s=0;s<t;s++)i.push(go[s],n[go[s]]);return i.t=e,i},nS=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},vo={left:0,top:0},ef=function(e,t,n,i,s,o,a,c,l,u,f,h,d){rn(e)&&(e=e(c)),qn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?po("0"+e.substr(3),n):0));var v=d?d.time():0,_,g,p;if(d&&d.seek(0),Xs(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&mo(a,n,i,!0);else{rn(t)&&(t=t(c));var E=(e||"0").split(" "),M,y,S,b;p=on(t)||vt,M=Ei(p)||{},(!M||!M.left&&!M.top)&&$n(p).display==="none"&&(b=p.style.display,p.style.display="block",M=Ei(p),b?p.style.display=b:p.style.removeProperty("display")),y=po(E[0],M[i.d]),S=po(E[1]||"0",n),e=M[i.p]-l[i.p]-u+y+s-S,a&&mo(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(o){var R=e+n,D=o._isStart;_="scroll"+i.d2,mo(o,R,i,D&&R>20||!D&&(f?Math.max(vt[_],Yn[_]):o.parentNode[_])<=R+1),f&&(l=Ei(a),f&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Nt))}return d&&p&&(_=Ei(p),d.seek(h),g=Ei(p),d._caScrollDist=_[i.p]-g[i.p],e=e/d._caScrollDist*h),d&&d.seek(v),d?e:Math.round(e)},iS=/(webkit|moz|length|cssText|inset)/i,tf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=$n(e);for(o in a)!+o&&!iS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},sp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},nf=function(e,t){var n=ji(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,f){var h=o.tween,d=c.onComplete,v={};l=l||n();var _=sp(n,l,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-l,h&&h.kill(),c[i]=a,c.modifiers=v,v[i]=function(){return _(l+u*h.ratio+f*h.ratio*h.ratio)},c.onUpdate=function(){Ke.cache++,Ai()},c.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Pe.to(e,c),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},It(e,"wheel",n.wheelHandler),Je.isTouch&&It(e,"touchmove",n.wheelHandler),s},Je=function(){function r(t,n){Qr||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Vs){this.update=this.refresh=this.kill=ei;return}n=$h(qn(n)||Xs(n)||n.nodeType?{trigger:n}:n,Qa);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,v=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,M=s.once,y=s.snap,S=s.pinReparent,b=s.pinSpacer,R=s.containerAnimation,D=s.fastScrollEnd,x=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?nn:wt,W=!f&&f!==0,N=on(n.scroller||$e),O=Pe.core.getCache(N),z=Ar(N),G=("pinType"in n?n.pinType:Wi(N,"pinType")||z&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=W&&n.toggleActions.split(" "),X="markers"in n?n.markers:Qa.markers,ee=z?0:parseFloat($n(N)["border"+A.p2+As])||0,P=this,de=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ae=YM(N,z,A),j=jM(N,z),Q=0,le=0,oe=ji(N,A),U,Ce,Ie,ce,we,Me,ge,Oe,it,Xe,Y,st,Le,Qe,ft,C,T,$,re,ne,ue,L,te,V,he,xe,be,_e,Ee,Ne,me,at,I,K,ie,fe,Ae,nt,je;if(mc(P),P._dir=A,g*=45,P.scroller=N,P.scroll=R?R.time.bind(R):oe,ce=oe(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xd=1,n.refreshPriority===-9999&&(ra=P)),O.tweenScroll=O.tweenScroll||{top:nf(N,wt),left:nf(N,nn)},P.tweenTo=U=O.tweenScroll[A.p],P.scrubDuration=function(se){at=Xs(se)&&se,at?me?me.duration(se):me=Pe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:at,paused:!0,onComplete:function(){return p&&p(P)}}):(me&&me.progress(1).kill(),me=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),me&&me.resetTo&&me.resetTo("totalProgress",0),Ee=0,c||(c=i.vars.id)),Ye.push(P),y&&((!fo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&Pe.set(z?[vt,Yn]:N,{scrollBehavior:"auto"}),Ke.forEach(function(se){return rn(se)&&se.target===(z?pt.scrollingElement||Yn:N)&&(se.smooth=!1)}),Ie=rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?$M(i):y.snapTo==="labelsDirectional"?ZM(i):y.directional!==!1?function(se,Re){return Yc(y.snapTo)(se,en()-le<500?0:Re.direction)}:Pe.utils.snap(y.snapTo),I=y.duration||{min:.1,max:2},I=fo(I)?as(I.min,I.max):as(I,I),K=Pe.delayedCall(y.delay||at/2||.1,function(){var se=oe(),Re=en()-le<500,Fe=U.tween;if((Re||Math.abs(P.getVelocity())<10)&&!Fe&&!zo&&Q!==se){var Ve=(se-Me)/Le,yt=i&&!W?i.totalProgress():Ve,rt=Re?0:(yt-Ne)/(en()-ho)*1e3||0,dt=Pe.utils.clamp(-Ve,1-Ve,$r(rt/2)*rt/.185),w=Ve+(y.inertia===!1?0:dt),B=as(0,1,Ie(w,P)),q=Math.round(Me+B*Le),F=y,Z=F.onStart,Se=F.onInterrupt,ye=F.onComplete;if(se<=ge&&se>=Me&&q!==se){if(Fe&&!Fe._initted&&Fe.data<=$r(q-se))return;y.inertia===!1&&(dt=B-Ve),U(q,{duration:I($r(Math.max($r(w-yt),$r(B-yt))*.185/rt/.05||0)),ease:y.ease||"power3",data:$r(q-se),onInterrupt:function(){return K.restart(!0)&&Se&&Se(P)},onComplete:function(){P.update(),Q=oe(),Ee=Ne=i&&!W?i.totalProgress():P.progress,E&&E(P),ye&&ye(P)}},se,dt*Le,q-se-dt*Le),Z&&Z(P,U.tween)}}else P.isActive&&Q!==se&&K.restart(!0)}).pause()),c&&(gc[c]=P),h=P.trigger=on(h||d),je=h&&h._gsap&&h._gsap.stRevert,je&&(je=je(P)),d=d===!0?h:on(d),qn(a)&&(a={targets:h,className:a}),d&&(v===!1||v===In||(v=!v&&d.parentNode&&d.parentNode.style&&$n(d.parentNode).display==="flex"?!1:Mt),P.pin=d,Ce=Pe.core.getCache(d),Ce.spacer?Qe=Ce.pinState:(b&&(b=on(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ce.spacerIsNative=!!b,b&&(Ce.spacerState=to(b))),Ce.spacer=T=b||pt.createElement("div"),T.classList.add("pin-spacer"),c&&T.classList.add("pin-spacer-"+c),Ce.pinState=Qe=to(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),P.spacer=T=Ce.spacer,_e=$n(d),te=_e[v+A.os2],re=Pe.getProperty(d),ne=Pe.quickSetter(d,A.a,Nt),Nl(d,T,_e),C=to(d)),X){st=fo(X)?$h(X,Zh):Zh,Xe=eo("scroller-start",c,N,A,st,0),Y=eo("scroller-end",c,N,A,st,0,Xe),$=Xe["offset"+A.op.d2];var gt=on(Wi(N,"content")||N);Oe=this.markerStart=eo("start",c,gt,A,st,$,0,R),it=this.markerEnd=eo("end",c,gt,A,st,$,0,R),R&&(nt=Pe.quickSetter([Oe,it],A.a,Nt)),!G&&!(oi.length&&Wi(N,"fixedMarkers")===!0)&&(KM(z?vt:N),Pe.set([Xe,Y],{force3D:!0}),he=Pe.quickSetter(Xe,A.a,Nt),be=Pe.quickSetter(Y,A.a,Nt))}if(R){var Be=R.vars.onUpdate,ve=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){P.update(0,0,1),Be&&Be.apply(R,ve||[])})}P.previous=function(){return Ye[Ye.indexOf(P)-1]},P.next=function(){return Ye[Ye.indexOf(P)+1]},P.revert=function(se,Re){if(!Re)return P.kill(!0);var Fe=se!==!1||!P.enabled,Ve=Vt;Fe!==P.isReverted&&(Fe&&(fe=Math.max(oe(),P.scroll.rec||0),ie=P.progress,Ae=i&&i.progress()),Oe&&[Oe,it,Xe,Y].forEach(function(yt){return yt.style.display=Fe?"none":"block"}),Fe&&(Vt=P,P.update(Fe)),d&&(!S||!P.isActive)&&(Fe?eS(d,T,Qe):Nl(d,T,$n(d),V)),Fe||P.update(Fe),Vt=Ve,P.isReverted=Fe)},P.refresh=function(se,Re){if(!((Vt||!P.enabled)&&!Re)){if(d&&se&&Bn){It(r,"scrollEnd",np);return}!Sn&&de&&de(P),Vt=P,le=en(),U.tween&&(U.tween.kill(),U.tween=0),me&&me.pause(),_&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;for(var Fe=ae(),Ve=j(),yt=R?R.duration():ki(N,A),rt=Le<=.01,dt=0,w=0,B=n.end,q=n.endTrigger||h,F=n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Z=P.pinnedContainer=n.pinnedContainer&&on(n.pinnedContainer),Se=h&&Math.max(0,Ye.indexOf(P))||0,ye=Se,Te,Ue,He,ke,De,ze,ut,jt,Jn,ht,Ge;ye--;)ze=Ye[ye],ze.end||ze.refresh(0,1)||(Vt=P),ut=ze.pin,ut&&(ut===h||ut===d||ut===Z)&&!ze.isReverted&&(ht||(ht=[]),ht.unshift(ze),ze.revert(!0,!0)),ze!==Ye[ye]&&(Se--,ye--);for(rn(F)&&(F=F(P)),Me=ef(F,h,Fe,A,oe(),Oe,Xe,P,Ve,ee,G,yt,R)||(d?-.001:0),rn(B)&&(B=B(P)),qn(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(qn(F)?F.split(" ")[0]:"")+B:(dt=po(B.substr(2),Fe),B=qn(F)?F:(R?Pe.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,Me):Me)+dt,q=h)),ge=Math.max(Me,ef(B||(q?"100% 0":yt),q,Fe,A,oe()+dt,it,Y,P,Ve,ee,G,yt,R))||-.001,Le=ge-Me||(Me-=.01)&&.001,dt=0,ye=Se;ye--;)ze=Ye[ye],ut=ze.pin,ut&&ze.start-ze._pinPush<=Me&&!R&&ze.end>0&&(Te=ze.end-ze.start,(ut===h&&ze.start-ze._pinPush<Me||ut===Z)&&!Xs(F)&&(dt+=Te*(1-ze.progress)),ut===d&&(w+=Te));if(Me+=dt,ge+=dt,rt&&(ie=Pe.utils.clamp(0,1,Pe.utils.normalize(Me,ge,fe))),P._pinPush=w,Oe&&dt&&(Te={},Te[A.a]="+="+dt,Z&&(Te[A.p]="-="+oe()),Pe.set([Oe,it],Te)),d)Te=$n(d),ke=A===wt,He=oe(),ue=parseFloat(re(A.a))+w,!yt&&ge>1&&(Ge=(z?pt.scrollingElement||Yn:N).style,Ge={style:Ge,value:Ge["overflow"+A.a.toUpperCase()]},Ge.style["overflow"+A.a.toUpperCase()]="scroll"),Nl(d,T,Te),C=to(d),Ue=Ei(d,!0),jt=G&&ji(N,ke?nn:wt)(),v&&(V=[v+A.os2,Le+w+Nt],V.t=T,ye=v===Mt?_c(d,A)+Le+w:0,ye&&V.push(A.d,ye+Nt),ps(V),Z&&Ye.forEach(function(hi){hi.pin===Z&&hi.vars.pinSpacing!==!1&&(hi._subPinOffset=!0)}),G&&oe(fe)),G&&(De={top:Ue.top+(ke?He-Me:jt)+Nt,left:Ue.left+(ke?jt:He-Me)+Nt,boxSizing:"border-box",position:"fixed"},De[vr]=De["max"+As]=Math.ceil(Ue.width)+Nt,De[xr]=De["max"+qc]=Math.ceil(Ue.height)+Nt,De[In]=De[In+na]=De[In+ea]=De[In+ia]=De[In+ta]="0",De[Mt]=Te[Mt],De[Mt+na]=Te[Mt+na],De[Mt+ea]=Te[Mt+ea],De[Mt+ia]=Te[Mt+ia],De[Mt+ta]=Te[Mt+ta],ft=nS(Qe,De,S),Sn&&oe(0)),i?(Jn=i._initted,Dl(1),i.render(i.duration(),!0,!0),L=re(A.a)-ue+Le+w,xe=Math.abs(Le-L)>1,G&&xe&&ft.splice(ft.length-2,2),i.render(0,!0,!0),Jn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dl(0)):L=Le,Ge&&(Ge.value?Ge.style["overflow"+A.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+A.a));else if(h&&oe()&&!R)for(Ue=h.parentNode;Ue&&Ue!==vt;)Ue._pinOffset&&(Me-=Ue._pinOffset,ge-=Ue._pinOffset),Ue=Ue.parentNode;ht&&ht.forEach(function(hi){return hi.revert(!1,!0)}),P.start=Me,P.end=ge,ce=we=Sn?fe:oe(),!R&&!Sn&&(ce<fe&&oe(fe),P.scroll.rec=0),P.revert(!1,!0),K&&(Q=-1,P.isActive&&oe(Me+Le*ie),K.restart(!0)),Vt=0,i&&W&&(i._initted||Ae)&&i.progress()!==Ae&&i.progress(Ae,!0).render(i.time(),!0,!0),(rt||ie!==P.progress||R)&&(i&&!W&&i.totalProgress(R&&Me<-.001&&!ie?Pe.utils.normalize(Me,ge,0):ie,!0),P.progress=(ce-Me)/Le===ie?0:ie),d&&v&&(T._pinOffset=Math.round(P.progress*L)),me&&me.invalidate(),u&&!Sn&&u(P)}},P.getVelocity=function(){return(oe()-we)/(en()-ho)*1e3||0},P.endAnimation=function(){Ns(P.callbackAnimation),i&&(me?me.progress(1):i.paused()?W||Ns(i,P.direction<0,1):Ns(i,i.reversed()))},P.labelToScroll=function(se){return i&&i.labels&&(Me||P.refresh()||Me)+i.labels[se]/i.duration()*Le||0},P.getTrailing=function(se){var Re=Ye.indexOf(P),Fe=P.direction>0?Ye.slice(0,Re).reverse():Ye.slice(Re+1);return(qn(se)?Fe.filter(function(Ve){return Ve.vars.preventOverlaps===se}):Fe).filter(function(Ve){return P.direction>0?Ve.end<=Me:Ve.start>=ge})},P.update=function(se,Re,Fe){if(!(R&&!Fe&&!se)){var Ve=Sn===!0?fe:P.scroll(),yt=se?0:(Ve-Me)/Le,rt=yt<0?0:yt>1?1:yt||0,dt=P.progress,w,B,q,F,Z,Se,ye,Te;if(Re&&(we=ce,ce=R?oe():Ve,y&&(Ne=Ee,Ee=i&&!W?i.totalProgress():rt)),g&&!rt&&d&&!Vt&&!Ka&&Bn&&Me<Ve+(Ve-we)/(en()-ho)*g&&(rt=1e-4),rt!==dt&&P.enabled){if(w=P.isActive=!!rt&&rt<1,B=!!dt&&dt<1,Se=w!==B,Z=Se||!!rt!=!!dt,P.direction=rt>dt?1:-1,P.progress=rt,Z&&!Vt&&(q=rt&&!dt?0:rt===1?1:dt===1?2:3,W&&(F=!Se&&H[q+1]!=="none"&&H[q+1]||H[q],Te=i&&(F==="complete"||F==="reset"||F in i))),x&&(Se||Te)&&(Te||f||!i)&&(rn(x)?x(P):P.getTrailing(x).forEach(function(De){return De.endAnimation()})),W||(me&&!Vt&&!Ka?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",rt,i._tTime/i._tDur):(me.vars.totalProgress=rt,me.invalidate().restart())):i&&i.totalProgress(rt,!!Vt)),d){if(se&&v&&(T.style[v+A.os2]=te),!G)ne(Ws(ue+L*rt));else if(Z){if(ye=!se&&rt>dt&&ge+1>Ve&&Ve+1>=ki(N,A),S)if(!se&&(w||ye)){var Ue=Ei(d,!0),He=Ve-Me;tf(d,vt,Ue.top+(A===wt?He:0)+Nt,Ue.left+(A===wt?0:He)+Nt)}else tf(d,T);ps(w||ye?ft:C),xe&&rt<1&&w||ne(ue+(rt===1&&!ye?L:0))}}y&&!U.tween&&!Vt&&!Ka&&K.restart(!0),a&&(Se||M&&rt&&(rt<1||!Ul))&&Po(a.targets).forEach(function(De){return De.classList[w||M?"add":"remove"](a.className)}),o&&!W&&!se&&o(P),Z&&!Vt?(W&&(Te&&(F==="complete"?i.pause().totalProgress(1):F==="reset"?i.restart(!0).pause():F==="restart"?i.restart(!0):i[F]()),o&&o(P)),(Se||!Ul)&&(l&&Se&&Ol(P,l),J[q]&&Ol(P,J[q]),M&&(rt===1?P.kill(!1,1):J[q]=0),Se||(q=rt===1?1:3,J[q]&&Ol(P,J[q]))),D&&!w&&Math.abs(P.getVelocity())>(Xs(D)?D:2500)&&(Ns(P.callbackAnimation),me?me.progress(1):Ns(i,F==="reverse"?1:!rt,1))):W&&o&&!Vt&&o(P)}if(be){var ke=R?Ve/R.duration()*(R._caScrollDist||0):Ve;he(ke+(Xe._isFlipped?1:0)),be(ke)}nt&&nt(-Ve/R.duration()*(R._caScrollDist||0))}},P.enable=function(se,Re){P.enabled||(P.enabled=!0,It(N,"resize",qs),It(z?pt:N,"scroll",Zr),de&&It(r,"refreshInit",de),se!==!1&&(P.progress=ie=0,ce=we=Q=oe()),Re!==!1&&P.refresh())},P.getTween=function(se){return se&&U?U.tween:me},P.setPositions=function(se,Re){d&&(ue+=se-Me,L+=Re-se-Le,v===Mt&&P.adjustPinSpacing(Re-se-Le)),P.start=Me=se,P.end=ge=Re,Le=Re-se,P.update()},P.adjustPinSpacing=function(se){if(V&&se){var Re=V.indexOf(A.d)+1;V[Re]=parseFloat(V[Re])+se+Nt,V[1]=parseFloat(V[1])+se+Nt,ps(V)}},P.disable=function(se,Re){if(P.enabled&&(se!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Re||me&&me.pause(),fe=0,Ce&&(Ce.uncache=1),de&&Ut(r,"refreshInit",de),K&&(K.pause(),U.tween&&U.tween.kill()&&(U.tween=0)),!z)){for(var Fe=Ye.length;Fe--;)if(Ye[Fe].scroller===N&&Ye[Fe]!==P)return;Ut(N,"resize",qs),Ut(N,"scroll",Zr)}},P.kill=function(se,Re){P.disable(se,Re),me&&!Re&&me.kill(),c&&delete gc[c];var Fe=Ye.indexOf(P);Fe>=0&&Ye.splice(Fe,1),Fe===Jt&&_o>0&&Jt--,Fe=0,Ye.forEach(function(Ve){return Ve.scroller===P.scroller&&(Fe=1)}),Fe||Sn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Re||i.kill()),Oe&&[Oe,it,Xe,Y].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),ra===P&&(ra=0),d&&(Ce&&(Ce.uncache=1),Fe=0,Ye.forEach(function(Ve){return Ve.pin===d&&Fe++}),Fe||(Ce.spacer=0)),n.onKill&&n.onKill(P)},P.enable(!1,!1),je&&je(P),!i||!i.add||Le?P.refresh():Pe.delayedCall(.01,function(){return Me||ge||P.refresh()})&&(Le=.01)&&(Me=ge=0),d&&QM()},r.register=function(n){return Qr||(Pe=n||Zd(),$d()&&window.document&&r.enable(),Qr=Vs),Qr},r.defaults=function(n){if(n)for(var i in n)Qa[i]=n[i];return Qa},r.disable=function(n,i){Vs=0,Ye.forEach(function(o){return o[i?"kill":"disable"](n)}),Ut($e,"wheel",Zr),Ut(pt,"scroll",Zr),clearInterval(ja),Ut(pt,"touchcancel",ei),Ut(vt,"touchstart",ei),Za(Ut,pt,"pointerdown,touchstart,mousedown",jh),Za(Ut,pt,"pointerup,touchend,mouseup",Kh),Co.kill(),$a(Ut);for(var s=0;s<Ke.length;s+=3)Ja(Ut,Ke[s],Ke[s+1]),Ja(Ut,Ke[s],Ke[s+2])},r.enable=function(){if($e=window,pt=document,Yn=pt.documentElement,vt=pt.body,Pe&&(Po=Pe.utils.toArray,as=Pe.utils.clamp,mc=Pe.core.context||ei,Dl=Pe.core.suppressOverwrites||ei,Vc=$e.history.scrollRestoration||"auto",vc=$e.pageYOffset,Pe.core.globals("ScrollTrigger",r),vt)){Vs=1,qM(),bt.register(Pe),r.isTouch=bt.isTouch,Ii=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),It($e,"wheel",Zr),Wd=[$e,pt,Yn,vt],Pe.matchMedia?(r.matchMedia=function(c){var l=Pe.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Pe.addEventListener("matchMediaInit",function(){return jc()}),Pe.addEventListener("matchMediaRevert",function(){return ip()}),Pe.addEventListener("matchMedia",function(){hr(0,1),Rr("matchMedia")}),Pe.matchMedia("(orientation: portrait)",function(){return Fl(),Fl})):console.warn("Requires GSAP 3.11.0 or later"),Fl(),It(pt,"scroll",Zr);var n=vt.style,i=n.borderTopStyle,s=Pe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ei(vt),wt.m=Math.round(o.top+wt.sc())||0,nn.m=Math.round(o.left+nn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ja=setInterval(Jh,250),Pe.delayedCall(.5,function(){return Ka=0}),It(pt,"touchcancel",ei),It(vt,"touchstart",ei),Za(It,pt,"pointerdown,touchstart,mousedown",jh),Za(It,pt,"pointerup,touchend,mouseup",Kh),pc=Pe.utils.checkPrefix("transform"),go.push(pc),Qr=en(),Co=Pe.delayedCall(.2,hr).pause(),es=[pt,"visibilitychange",function(){var c=$e.innerWidth,l=$e.innerHeight;pt.hidden?(qh=c,Yh=l):(qh!==c||Yh!==l)&&qs()},pt,"DOMContentLoaded",hr,$e,"load",hr,$e,"resize",qs],$a(It),Ye.forEach(function(c){return c.enable(0,1)}),a=0;a<Ke.length;a+=3)Ja(Ut,Ke[a],Ke[a+1]),Ja(Ut,Ke[a],Ke[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Ul=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ja)||(ja=i)&&setInterval(Jh,i),"ignoreMobileResize"in n&&(Yd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($a(Ut)||$a(It,n.autoRefreshEvents||"none"),qd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=on(n),o=Ke.indexOf(s),a=Ar(s);~o&&Ke.splice(o,a?6:2),i&&(a?oi.unshift($e,i,vt,i,Yn,i):oi.unshift(s,i))},r.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?on(n):n).getBoundingClientRect(),a=o[s?vr:xr]*i||0;return s?o.right-a>0&&o.left+a<$e.innerWidth:o.bottom-a>0&&o.top+a<$e.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=on(n));var o=n.getBoundingClientRect(),a=o[s?vr:xr],c=i==null?a/2:i in Lo?Lo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/$e.innerWidth:(o.top+c)/$e.innerHeight},r.killAll=function(n){if(Ye.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=wr.killAll||[];wr={},i.forEach(function(s){return s()})}},r}();Je.version="3.11.5";Je.saveStyles=function(r){return r?Po(r).forEach(function(e){if(e&&e.style){var t=xn.indexOf(e);t>=0&&xn.splice(t,5),xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),mc())}}):xn};Je.revert=function(r,e){return jc(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?qs():(Qr||Je.register())&&hr(!0)};Je.update=function(r){return++Ke.cache&&Ai(r===!0?2:0)};Je.clearScrollMemory=rp;Je.maxScroll=function(r,e){return ki(r,e?nn:wt)};Je.getScrollFunc=function(r,e){return ji(on(r),e?nn:wt)};Je.getById=function(r){return gc[r]};Je.getAll=function(){return Ye.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Bn};Je.snapDirectional=Yc;Je.addEventListener=function(r,e){var t=wr[r]||(wr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=wr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var f=[],h=[],d=Pe.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(v){f.length||d.restart(!0),f.push(v.trigger),h.push(v),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return rn(s)&&(s=s(),It(Je,"refresh",function(){return s=e.batchMax()})),Po(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Je.create(l))}),t};var rf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Bl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===Yn&&r(vt,t)},no={auto:1,scroll:1},rS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=en(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(no[(c=$n(s)).overflowY]||no[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ar(s)&&(no[(c=$n(s)).overflowY]||no[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ap=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&rS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&It(pt,bt.eventTypes[0],af,!1,!0)},onDisable:function(){return Ut(pt,bt.eventTypes[0],af,!0)}})},sS=/(input|label|select|textarea)/i,sf,af=function(e){var t=sS.test(e.target.tagName);(t||sf)&&(e._gsapAllow=!0,sf=t)},aS=function(e){fo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=on(e.target)||Yn,u=Pe.core.globals().ScrollSmoother,f=u&&u.get(),h=Ii&&(e.content&&on(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ji(l,wt),v=ji(l,nn),_=1,g=(bt.isTouch&&$e.visualViewport?$e.visualViewport.scale*$e.visualViewport.width:$e.outerWidth)/$e.innerWidth,p=0,E=rn(i)?function(){return i(a)}:function(){return i||2.8},M,y,S=ap(l,e.type,!0,s),b=function(){return y=!1},R=ei,D=ei,x=function(){c=ki(l,wt),D=as(Ii?1:0,c),n&&(R=as(0,ki(l,nn))),M=Mr},A=function(){h._gsap.y=Ws(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},W=function(){if(y){requestAnimationFrame(b);var X=Ws(a.deltaY/2),ee=D(d.v-X);if(h&&ee!==d.v+d.offset){d.offset=ee-d.v;var P=Ws((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=Ke.cache,Ai()}return!0}d.offset&&A(),y=!0},N,O,z,G,J=function(){x(),N.isActive()&&N.vars.scrollY>c&&(d()>c?N.progress(1)&&d(c):N.resetTo("scrollY",c))};return h&&Pe.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return Ii&&H.type==="touchmove"&&W()||_>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=_;_=Ws(($e.visualViewport&&$e.visualViewport.scale||1)/g),N.pause(),H!==_&&Bl(l,_>1.01?!0:n?!1:"x"),O=v(),z=d(),x(),M=Mr},e.onRelease=e.onGestureStart=function(H,X){if(d.offset&&A(),!X)G.restart(!0);else{Ke.cache++;var ee=E(),P,de;n&&(P=v(),de=P+ee*.05*-H.velocityX/.227,ee*=rf(v,P,de,ki(l,nn)),N.vars.scrollX=R(de)),P=d(),de=P+ee*.05*-H.velocityY/.227,ee*=rf(d,P,de,ki(l,wt)),N.vars.scrollY=D(de),N.invalidate().duration(ee).play(.01),(Ii&&N.vars.scrollY>=c||P>=c-1)&&Pe.to({},{onUpdate:J,duration:ee})}o&&o(H)},e.onWheel=function(){N._ts&&N.pause(),en()-p>1e3&&(M=0,p=en())},e.onChange=function(H,X,ee,P,de){if(Mr!==M&&x(),X&&n&&v(R(P[2]===X?O+(H.startX-H.x):v()+X-P[1])),ee){d.offset&&A();var ae=de[2]===ee,j=ae?z+H.startY-H.y:d()+ee-de[1],Q=D(j);ae&&j!==Q&&(z+=Q-j),d(Q)}(ee||X)&&Ai()},e.onEnable=function(){Bl(l,n?!1:"x"),Je.addEventListener("refresh",J),It($e,"resize",J),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=v.smooth=!1),S.enable()},e.onDisable=function(){Bl(l,!0),Ut($e,"resize",J),Je.removeEventListener("refresh",J),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new bt(e),a.iOS=Ii,Ii&&!d()&&d(1),Ii&&Pe.ticker.add(ei),G=a._dc,N=Pe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sp(d,d(),function(){return N.pause()})},onUpdate:Ai,onComplete:G.vars.onComplete}),a};Je.sort=function(r){return Ye.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new bt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1)return vn&&vn.kill();var e=r instanceof bt?r:aS(r);return vn&&vn.target===e.target&&vn.kill(),Ar(e.target)&&(vn=e),e};Je.core={_getVelocityProp:dc,_inputObserver:ap,_scrollers:Ke,_proxies:oi,bridge:{ss:function(){Bn||Rr("scrollStart"),Bn=en()},ref:function(){return Vt}}};Zd()&&Pe.registerPlugin(Je);Hc.registerPlugin(Je);const op=new Px,lp=document.createElement("div");document.body.appendChild(lp);const ko=new px;ko.background=new ot(14914665);const ws=new Of;ws.setSize(window.innerWidth,window.innerHeight);lp.appendChild(ws.domElement);const Rs=new Un(35,window.innerWidth/window.innerHeight,1,100);Rs.position.set(-9,7,-1);ko.add(Rs);window.addEventListener("resize",()=>{const r=window.innerWidth,e=window.innerHeight;Rs.aspect=r/e,Rs.updateProjectionMatrix(),ws.setSize(r,e),composer.setSize(r,e),ws.setPixelRatio(1),m.uniforms.iResolution.value.set(r,e)});const oS=new Tx(Rs,ws.domElement);oS.enabled=!1;op.load("/teamugobj.obj",function(r){cp=new Nf(r.children[0]).build(),lS(),uS()});op.load("/sphere.obj",function(r){up=new Nf(r.children[0]).build(),cS()});let cp,of,Do=new zn;const lf=[],io=new k;function lS(){for(let e=0;e<3e4;e++)cp.sample(io),lf.push(io.x,io.y,io.z);Do.setAttribute("position",new Wt(lf,3));const r=new ns({color:6032151,size:.05,blending:zl,transparent:!0,opacity:.8,depthWrite:!1});of=new oo(Do,r),ko.add(of)}let up;const hp=[],ro=new k;function cS(){for(let r=0;r<3e4;r++)up.sample(ro),hp.push(ro.x,ro.y,ro.z)}function fp(){ws.render(ko,Rs),requestAnimationFrame(fp)}fp();function uS(){Hc.to(Do.attributes.position.array,{endArray:hp,scrollTrigger:{trigger:".trigger",start:"top top",scrub:1},onUpdate:()=>Do.attributes.position.needsUpdate=!0})}
