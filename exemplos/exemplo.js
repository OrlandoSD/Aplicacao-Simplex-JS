"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1'), inputElement;
let input2 = document.getElementById('input2'), inputElement;
function adicionarNovoNumero(numero1, numero2, deveprintar) {
    let resultado = numero1 + numero2;
    if (deveprintar) {
        cosole.log(frase + resultado);
    }
    return numero1 + numero2;
}
let deveprintar = true;
let frase = 'o valor é:  ';
if (butoon) {
    button.addElementener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNovoNumero(Number(input1.value), Number(input2.value), deveprintar, frase));
        }
    });
}
