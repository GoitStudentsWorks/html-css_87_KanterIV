(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i=document.querySelector(".go-top");window.addEventListener("scroll",u);i.addEventListener("click",d);function u(){const c=window.pageYOffset,t=document.documentElement.clientHeight;c>t?i.classList.add("go-top--show"):i.classList.remove("go-top--show")}function d(){window.pageYOffset>1e3&&(window.scrollBy(0,-5e5),setTimeout(d,1e3))}AOS.init();(function(c){typeof c.matches!="function"&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(t){for(var n=this,r=(n.document||n.ownerDocument).querySelectorAll(t),e=0;r[e]&&r[e]!==n;)++e;return Boolean(r[e])}),typeof c.closest!="function"&&(c.closest=function(t){for(var n=this;n&&n.nodeType===1;){if(n.matches(t))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var c=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");c.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+o+'"]');s.classList.add("active"),t.classList.add("active")})}),n.forEach(function(r){r.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),t.classList.remove("active")})})});(()=>{const c=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=document.querySelector(".js-close-menu-first"),e=document.querySelector(".js-close-menu-second"),o=document.querySelector(".js-close-menu-third"),s=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),c.classList.toggle("is-open");const a=l?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[a](document.body)};t.addEventListener("click",s),n.addEventListener("click",s),r.addEventListener("click",s),e.addEventListener("click",s),o.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&(c.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
