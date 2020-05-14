/**
 * Tipos e Variáveis
 * 
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * Object
 * Function
 * Array
*/

 //Retorna o tamanho de uma string
 const textSize = 'Texto'.length;
 console.log('Quantidade de letras:'+textSize); //console.log('Quantidade de letras: ${textSize}'); - este formato não funcionou. 

 // Retorna um array quebrando a string por um delimitador
 const splittedText = 'Texto'.split('x');
 console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

 // Busca por um valor e substitui por outro
 const replacedText = 'Texto'.replace('Text','txeT');
 console.log('\nSubsituição de valor: ', replacedText);

 // Retorna a fatia de um valor
 const lastChar = 'Texto'.slice(-1);
 console.log('\nÚltima letra de uma string: ',lastChar);

 const allWithoutLastChar = 'Texto'.slice(0,-1);
 console.log('\nValor da string da primeira letra menos a última: ',allWithoutLastChar);
 
 const secondToEnd = 'Texto'.slice(1);
 console.log('\nValor da string da segunda letra até a última', secondToEnd);

 // Retorna N caracters a partir de uma posição
 const twoCharsBeforeFirstPost = 'Texto'.substr(0,2);
 console.log('\nAs duas letras primeiras letras são: ',twoCharsBeforeFirstPost);

 console.log('\n\n------------------- number -------------------');
 const myNumber = 12.4032;

 //Transformar número para string
 const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em string: ',typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais');

// Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.20').toFixed(2));

// Transforma uma string em int
console.log('\nString parseada para int', parseInt('13.20'));

console.log('\n\n------------------- null -------------------');
const nullVariable = null;
console.log('Tipo da Variável nullVariable = ', typeof nullVariable);
console.log('Impressão da Variável nullVariable = ', nullVariable);

console.log('\n\n------------------- undefinedVariable -------------------');
let undefinedVariable;
console.log('Tipo da Variável undefinedVariable = ', typeof undefinedVariable);
console.log('Impressão da Variável undefinedVariable = ', undefinedVariable);

console.log('\n\n------------------- boolean -------------------');
const isActive = true;
const isAuthenticated = false;
console.log('Tipo da Variável isActive = ', typeof isActive);
console.log('Impressão da Variável isActive = ', isActive);

console.log('\n\n------------------- object -------------------');
let user = {
    name: 'Fabiano'
};
console.log(user);
// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name+';
console.log(prop);
user[prop] = 'Outro nome prop';
console.log(prop);

console.log(user);
// Criando uma propriedade
user.lastName = 'Luiz da Silva';

console.log(user);
// Deletando uma propriedade 
//delete user.name;

console.log('Tipo do Objeto user = ', typeof user);
console.log('Impressão do Objeto user = ', user);


console.log('\n\n------------------- funções em object -------------------');
const userNovo = {
    name: 'Fabiano',
    lastName: 'Luiz da Silva'
}

// Recupera as chaves do objeto
console.log('\nPropriedades do objeto userNovo: ', Object.keys(userNovo));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(userNovo));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedade e valores: ', Object.entries(userNovo));

// Mergear propriedades de objetos
Object.assign(userNovo, {fullName: 'Fabiano Luiz da Silva'});

console.log('\nAdiciona a propriedade fullName do objeto user ',userNovo);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, userNovo, {age: 44}));

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes'; // alterações não serão executadas se a opção Object.freeze existe.
delete newObj.foo; // alterações não serão executadas se a opção Object.freeze existe.
newObj.bar = 'foo'; // alterações não serão executadas se a opção Object.freeze existe.
console.log('\nVariavel newObj após as alterações: ', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Fabiano'};
Object.seal(person);

person.name = 'Fabiano Luiz';
delete person.name;
person.age = 44;
console.log('\nVariável person após as alterações: ', person);

console.log('\n\n------------------- Symbol -------------------');
const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbol são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 == symbol2);

// Previnir conflitos entre nome de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const userSymbol = {
    [nameSymbol1]: 'Fabiano',
    [nameSymbol2]: 'Cristiane',
    lastName: 'Luiz da Silva'
}

console.log(userSymbol);

for (const key in userSymbol) {
    if (user.hasOwnProperty(key)) {
        console.log('\nValor da Chave ${key}: ${user[key]}');
    }
}

console.log('\nPropriedades do objeto userSymbol: ', Object.keys(userSymbol));
console.log('\nValores das propriedades do objeto userSymbol: ', Object.values(userSymbol));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(userSymbol));

//Acessando todas as propriedades do objeto
console.log('\nTodas as propriedade do objeto userSymbol: ', Reflect.ownKeys(userSymbol));

// Cria um enum
const directions = {
    UP : Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};






























