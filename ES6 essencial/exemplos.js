/* Currying
Currying é o processo de transformar uma função que espera 
vários argumentos em uma função que espera um único argumento 
e retorna outra função curried. Por exemplo, uma função que 
recebe três argumentos, ao sofrer currying, resulta em uma função 
que recebe um argumento e retorna uma função que recebe um argumento, 
que por sua vez retorna uma função que recebe um argumento e retorna 
o resultado da função original.
*/
function soma(a) {
    return function(b) {
        return a+b;
    }
}

const soma2 = soma(2)

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

//-------------------------------------

/* Hosting
Elevação (içamento/levantar/suspender) é nada mais, nada menos do que trazer para 
o início do escopo a declaração de variáveis e funções.
- Funções são elevadas como um todo.
- No JavaScript Variáveis são definidas como não nao definidas ao inves de 
reference error.
*/

// variavel
function fn() {
    console.log(text);
    var text = 'Exemplo';
    console.log(text);
}
fn();
// função
function fn () {
    log('Hoisting de função');
    function log(value) {
        console.log(value);
    }
}

fn();
//-------------------------------------
/*
Imutabilidade

A variavel nunca vai mudar, se for preciso mudar o valor 
dela, será preciso criar uma nova. 
*/
const user = {
    nome: 'Fabiano',
    lastName: 'Luiz da Silva'
};

function getUserWithFullName(user) {
    return {
        ...user,
        /* spread operator(...)
        A sintaxe de propagação (Spread) permite que um objeto iterável, 
        como um array ou string, seja expandida em locais onde zero ou mais 
        argumentos (para chamadas de função) ou elementos (para literais de 
        array) sejam esperados ou uma expressão de objeto seja expandida 
        em locais onde zero ou mais pares de chave-valor (para literais 
        de objeto) são esperados.
         */
        fullName: '$(user.name) $(user.lastName)' 
        // mesmo que :
        // fullName: user.name+' '+user.lastName;
    }
}
const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);
//-------------------------------------
/**
 * Tipos e Variáveis:
 * var - pioneiro no JS
 * let - 
 * const - 
 * 
 * { } - escopo de bloco
 * Fora de chaves é escopo global.
 * function test() { //escopo de função }
 */
var nameVar = 'Fabiano';
let nameLet = 'Fabiano';
const nameConst = 'Fabiano';

console.log('nameVar: ${nameVar}');
console.log('nameLet: ${nameLet}');
console.log('nameConst: ${nameConst}');