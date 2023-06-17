

function operacion(){
    let primerValor = document.getElementById('input1').value;
    let segundoValor = document.getElementById('input2').value;
    let tercerValor = document.getElementById('input3').value;
    let resultado =  primerValor + segundoValor + tercerValor;

    if (primerValor < tercerValor){

        document.getElementById("resultado").value = resultado;
        
    }

   

}

