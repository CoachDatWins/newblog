(()=>{var e=document.querySelectorAll("img");e.forEach(o=>{o.src.endsWith("#dark-mode")&&(console.log("found"),o.onload=function(){console.log(`Image loaded: ${o.src}`)})});})();
