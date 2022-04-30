const menuOpen= document.getElementById('open-menu');
const menuClose=document.getElementById('menu-mobile');
const Close=document.getElementById('close-menu');

function openMenu(){
    const menu= document.getElementById('menu-mobile');
    const cabecalho= document.getElementById('cabecalho');
    menu.classList.toggle('active');
    cabecalho.classList.toggle('active');
    
}

menuOpen.addEventListener('click',openMenu);
menuClose.addEventListener('click',openMenu);
Close.addEventListener('click',openMenu);