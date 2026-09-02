const menu=document.querySelector(".menu");
window.addEventListener("scroll",()=>{if(window.scrollY>150)menu.classList.add("aparecer");else menu.classList.remove("aparecer")});
