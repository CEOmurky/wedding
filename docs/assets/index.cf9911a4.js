(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function a(){const c=new Date,o=new Date("2023","0","7","18","20")-c,r=Math.round(o/(1e3*60*60*24));document.querySelector(".diff-day").innerHTML=`\uACB0\uD63C\uC2DD ${r}\uC77C \uC804`}document.addEventListener("DOMContentLoaded",function(c){a(),new ClipboardJS(".btn"),document.querySelector(".clickable").addEventListener("mousedown",()=>{const o=document.querySelector(".player-group"),r=document.querySelectorAll("lottie-player");o.style.display="block",r[0].addEventListener("complete",()=>{o.style.opacity="0",setTimeout(()=>{o.remove()},2e3)}),r.forEach(t=>{t.play()});let e=!1;s(2),setInterval(()=>{s(e?3:2),e=!e},1e3)})});function s(c){const n=document.querySelectorAll(".character"),o="col character ",r=["man-","woman-"];n.forEach((e,t)=>{e.className=o+r[t]+c})}