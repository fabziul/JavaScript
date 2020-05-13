function validaIdade(idade) {
    var valida;
    if (idade > 18) {
        valida = true;
    } else {
        valida = false;
    }
    return valida;
}

var idade = prompt("Qual sua idade? ");
alert(validaIdade(idade));
console.log(validaIdade(idade));

/*
function soma(n1,n2) {
    return n1+n2;
}

alert(soma(5,2));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Yahoo é o melhor site de pesquisa", "Yahoo", "Google"));
*/

/*
var nome = "Fabiano";
var idade = 44;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo "+nome+" tem "+idade+" de vida.");
alert(n1*n2);
alert(frase.replace("Japão", "Brasil"))
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
//console.log(frase.toUpperCase());
*/