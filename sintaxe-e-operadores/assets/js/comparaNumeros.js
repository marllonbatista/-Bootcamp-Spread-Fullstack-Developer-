const FORM = document.getElementById('form');
const TEXT= document.getElementById('text');
let soma=0;
let frase='';

FORM.onsubmit= function (e){
    e.preventDefault();
    const NUMBER1= document.getElementById('number-1').value;
    const NUMBER2= document.getElementById('number-2').value;
    comparador(parseInt(NUMBER1),parseInt(NUMBER2));
    form.reset();
}
function comparador(NUMBER1,NUMBER2){
    soma=NUMBER1+NUMBER2;
    if(NUMBER1==NUMBER2){
        igual(soma,NUMBER1,NUMBER2);
    }else{
        diferente(soma,NUMBER1,NUMBER2);
    }
}
function igual(soma,NUMBER1,NUMBER2){
    if(soma==10){
        frase=`Os números ${NUMBER1} e ${NUMBER2} são iguais. Sua soma é ${soma}, menor que 20.`;

    }else if(soma==20){
        frase=`Os números ${NUMBER1} e ${NUMBER2} são iguais. Sua soma é ${soma}, maior que 10.`;
    } 
    else if(soma<10){
        frase=`Os números ${NUMBER1} e ${NUMBER2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`;

    }else if(soma<20){
        frase=`Os números ${NUMBER1} e ${NUMBER2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`;

    }else {
        frase=`Os números ${NUMBER1} e ${NUMBER2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
    }
    TEXT.innerHTML=frase;
}
function diferente(soma,NUMBER1,NUMBER2){
    if(soma==10){
        frase=`Os números ${NUMBER1} e ${NUMBER2} não são iguais. Sua soma é ${soma}, menor que 20.`;

    }else if(soma==20){
        frase=`Os números ${NUMBER1} e ${NUMBER2} não são iguais. Sua soma é ${soma}, maior que 10.`;
    } 
    else if(soma<10){
        frase=`Os números ${NUMBER1} e ${NUMBER2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`;

    }else if(soma<20){
        frase=`Os números ${NUMBER1} e ${NUMBER2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`;

    }else {
        frase=`Os números ${NUMBER1} e ${NUMBER2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
    }
    TEXT.innerHTML=frase;
}