
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.");
}

function redirecionar() {
    window.open("https://www.google.com.br/"); // abre em nova aba
    window.location.href = "https://www.google.com.br/"; // este abre na mesma página
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

function load() {
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1+n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade) {
    var validar;
    if (idade>=18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));

//alert(soma(5,10));
//alert(setReplace("O Japão tem um excelente time de futebol", "Japão", "Brasil"));


var trajeto = ["mãe", "floresta", "avó"];
alert(trajeto.join(">"));
alert(trajeto[1].toString());

var d = new Date();
alert(d.getMonth()+1);
alert(d.getSeconds());

var count;
for (count=0; count <=5; count++) {
    alert("Valor de Count: "+count);
}

var count = 0;
while (count<=5) {
    console.log(count);
    alert("O valor é: "+count);
    count ++;
}

var idade = prompt("Qual sua idade? ")

if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}

var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maça", "pera", "laranja"];
lista.push("uva"); // adiciona elemento na lista
//lista.pop(); // remove o ultimo elemento da lista. 
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "))
*/
//alert(lista[1]);
 



/*function validaIdade(idade) {
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