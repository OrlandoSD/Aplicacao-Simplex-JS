let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

function somarNumeros(numero1, numero2) {
    if (typeof numero1 === 'numero' && typeof numero2 === 'numero') {
        return numero1 + numero2
    }else{
        return Number(numero1) + Number(numero2)
    }
}

button.addEventListener('clck', () =>{
    
   console.log(somarNumeros(input1.value, imput2.value));
})