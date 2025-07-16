function somar() {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

function verificarIdade() {

    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {

        document.getElementById("resultado2").innerText = "Maior de Idade";

    } else {

        document.getElementById("resultado2").innerText = "Menor de idade";

    }

}

function contarCaractere() {

    let texto1 = (document.getElementById("texto").value);

    document.getElementById("resultado3").innerText = "Seu texto tem: " + texto1.length + " caracteres";

}


function verificarParImpar(){

    let num1 = Number(document.getElementById("num4").value);

    if(num1 % 2 == 0){

        document.getElementById("resultado4").innerText = num1 + " é PAR";

    }else{

        document.getElementById("resultado4").innerText =  num1 + " é IMPAR";

    }

}

function converterLetraMaiuscula() {

    let texto1 = (document.getElementById("texto").value);

    document.getElementById("resultado5").innerText = "Seu texto em maiusculo: " + texto1.toUpperCase();

}

function maiorMenor(){

    let n1 = Number(document.getElementById("num5").value);
    let n2= Number(document.getElementById("num6").value);

    if (n1>n2) {

        document.getElementById("resultado6").innerText =  n1 + " é maior";
        
    } else if (n2 > n1) {

        document.getElementById("resultado6").innerText =  n2 + " é maior";

    }else{

        document.getElementById("resultado6").innerText = "Os dois são iguais";

    }

}

function gerarTabuada(){

    let numeroX = Number(document.getElementById("num7").value);
    var tabuada;    

    for (let indice = 1; indice <= 10; indice++) {
        if (indice == 1) {

            tabuada = (numeroX + " x " + indice + " = " + (numeroX * indice) + "\n")
        } else

             tabuada += (numeroX + " x " + indice + " = " + (numeroX * indice) + "\n");

        }
    document.getElementById("resultado7").innerText = tabuada;

}

function gerarSequencia(){

    let sequencia = "";    

    for (let indice2 = 1; indice2 <= 10; indice2++) {
        sequencia += indice2 + "\n";
    }
    document.getElementById("resultado8").innerText = sequencia;
}

function calcularMedia(){

    let n1Media = Number(document.getElementById("num1Media").value);
    let n2Media= Number(document.getElementById("num2Media").value);
    let n3Media= Number(document.getElementById("num3Media").value);
    let resultado = (n1Media+ n2Media +n3Media)/3;

    if (resultado >= 6) {

        document.getElementById("resultado9").innerText =  resultado + " é a sua media\n" + "Aprovado!";
    } 
    else{

        document.getElementById("resultado9").innerText =  resultado + " é a sua media\n" + "Reprovado!";
    }

}

