
const SUBTRAIR= document.getElementById('subtrair');
const ADICIONAR= document.getElementById('adicionar');
const CURRENT_NUMBER=document.getElementById('currentNumber')
let contador=0;

function subtrair()
{
      contador--;
      if(contador<='0'){
        contador=0;
        CURRENT_NUMBER.innerHTML= contador;
       
    }else {
        
        CURRENT_NUMBER.innerHTML= contador;
        
    } 
}
function adicionar(){
    contador++;
    CURRENT_NUMBER.innerHTML= contador;
}

ADICIONAR.addEventListener('click',adicionar);
SUBTRAIR.addEventListener('click',subtrair);


 