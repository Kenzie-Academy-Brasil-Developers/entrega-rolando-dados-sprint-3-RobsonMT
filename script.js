let dado1;
let dado2;

function  rollOfDice(){
  const $btn = document.querySelector('label>#rolar');
   $btn.addEventListener( "click", rolar, false );
   dado1 = window.document.getElementById('dado1');
   dado2 = window.document.getElementById('dado2');
}

const rolar=() =>{trocarImg1( dado1 );trocarImg2( dado2 );}

function trocarImg1( dado1 ){
  const valor1 = Math.floor( Math.random() * 6 + 1);
  dado1.setAttribute( "src", "./images/lado" + valor1 + ".png" );
} 
window.addEventListener("load", rollOfDice, false);

function trocarImg2( dado2 ){
  const valor2 = Math.floor( Math.random() * 6 + 1);
  dado2.setAttribute( "src", "./images/lado" + valor2 + ".png" );
} 
window.addEventListener("load", rollOfDice, false);



  
  