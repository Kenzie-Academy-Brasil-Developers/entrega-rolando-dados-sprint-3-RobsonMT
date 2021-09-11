let dado1;
let dado2;

function rolarDado(){
  const $btnRolar = document.querySelector('#rolar');
   $btnRolar.addEventListener( "click", rolar,false);//false
   dado1 = window.document.getElementById('dado1');
   dado2 = window.document.getElementById('dado2');
}
const rolar=() =>{trocarImg1( dado1 );trocarImg2( dado2 );somaD1D2()}

let resultadoD1 ;//armazeno o resulta gerado no valor 1
let resultadoD2 ;//armazeno o resulta gerado no valor 2


function somaD1D2 () {
  let soma = resultadoD1 + resultadoD2;
  const mostrarResultado = window.document.querySelector('.resultado');
  let textResult = window.document.createElement('p');
  textResult.style.fontSize = '22px';
  textResult.innerText = soma;
  mostrarResultado.replaceChildren(textResult);
  mostrarResultado.appendChild(textResult);
}

function trocarImg1( dado1 ){
  const valor1 = Math.floor( Math.random() * 6 + 1);
  // console.log(valor1);
  resultadoD1 = valor1;
  dado1.setAttribute( "src", "./images/lado" + valor1 + ".png" );
} 
window.addEventListener("load", rolarDado,false);//false

function trocarImg2( dado2 ){
  const valor2 = Math.floor( Math.random() * 6 + 1);
  resultadoD2 = valor2;
  // console.log(valor2);
  dado2.setAttribute( "src", "./images/lado" + valor2 + ".png" );
} 
window.addEventListener("load", rolarDado, false);//false


//100 Lançamentos
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let somaDados = 0;
let lancamentos = 0;

  while(lancamentos <1000){
    lancamentos++;
    let valorDado1 = Math.floor(Math.random()* 6+1);
    // console.log(valorDado1)
    let valorDado2 = Math.floor(Math.random()* 6+1);
    // console.log(valorDado2)
    somaDados = valorDado1 + valorDado2;

    //count[rollOfDice] = count[rollOfDice] + 1;
    if(somaDados == 2){
      count[0] += 1;
    }
    else if(somaDados == 3){
      count[1] += 1;
    }
    else if(somaDados == 4){
      count[2] +=1;
    }
    else if(somaDados == 5){
      count[3] +=+1;
    }
    else if(somaDados == 6){
      count[4] +=1;
    }
    else if(somaDados == 7){
      count[5] +=1;
    }
    else if(somaDados == 8){
      count[6] +=1;
    }
    else if(somaDados == 9){
      count[7] +=1;
    }
    else if(somaDados == 10)
    {count[8] +=1;
    }
    else if(somaDados == 11)
    {count[9] +=1;
    }
    else{count[10] +=1;
    }
  }

  for(let g= 0; g < count.length; g++){
    const $graficoBar = window.document.querySelector('#GraficoBarra');

    let divGraficoBarra = window.document.createElement('div');
    let nGraficoBarra = window.document.createElement('p');

    nGraficoBarra.innerText = `${g+2}`
    divGraficoBarra.classList.add('GraficoStyle');

    divGraficoBarra.appendChild(nGraficoBarra);
    $graficoBar.appendChild(divGraficoBarra);

    // Estilos do grafico
    let GraficoStyle = document.querySelectorAll('.GraficoStyle')[g]; 
    GraficoStyle.style.backgroundColor = '#ccc';
    GraficoStyle.style.height = `${count[g]}px`;
    GraficoStyle.style.textShadow = '1px 1px #000';
    GraficoStyle.style.margin= '5px';
    GraficoStyle.style.width = '7vw';
  }

  for(let i= 0; i < count.length; i++){
      const $Nvezes = document.querySelector('#Nvezes>ul');
    
      let NvezesList = document.createElement('li')
      let nVezesItem = document.createElement('p');

      nVezesItem.innerHTML = `<strong>${i+2}:</strong> ${count[i]}`;
      NvezesList.appendChild(nVezesItem);
      $Nvezes.appendChild(NvezesList);
  }

let Simular1k =() =>{ location.reload()}









  
  