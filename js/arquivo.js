// var não respeita u bloco de código
function testevar(){

    var mensagem = "Olá var";
    if (true) {
        var mensagem = "troquei a mensagem";
        console.log(mensagem);
    }
    console.log(mensagem);

}

testevar();


function testeLet() {

    let mensagem ="Olá com Let";
    if (true) {
        let mensagem ="Olá com Let no Bloco";
        console.log(mensagem);
    }
    console.log(mensagem);

}

testeLet();

var x1 = 10;
var x1 = 20;

console.log(x1);


var x3;

console.log(x3);


let x2 = 5;
//let x2 = 10;

console.log(x2);
//Constantes


const $constante = 42;

console.log($constante);
// $constante = 45;

const array = [1, 2, 3, 4]; // tudo muda menos o 1, 2, 3, 4
array.push(7);  
console.log(array);

const pessoa ={nome: "Sabado", idade: 99};
pessoa.nome = "Outro Nome";
console.log(pessoa);
function saudacao() {

    alert("Bem Vindo ao nosso site!");
    
}