// definir uma constante que vai importar um módulo p/ entrada de dados
const prompt = require("prompt-sync")();

//indexação dos salarios liq medios
var salLiqMedio = [];
var sumSal = 0;
var media;
var pessoas;

//laço de repetição para 5 pessoas
for (var ppl = 1; ppl <= 5; ppl++) {// a enquanto q qnt de pessoas nao for 5, iniciando em 1, ppl vai acrescer em 1
    console.log("Pessoa", ppl);

    var nome = prompt("Digite o seu nome: ");
    var salBruto = parseFloat(prompt("Digite o valor do seu salário bruto: "));
    var dep = parseInt(prompt("Digite o número de dependentes: "));

    //laço de repetição para os ganhos dos dependentes (FOR)
    for (i = 1; i <= dep; i++) {
        var ganho = parseFloat(prompt("Digite o seu ganho mensal: "));
        var salBruto = salBruto + ganho;
    }

    //laço de repetição para os ganhos dos dependentes (WHILE)
    /*
    i = 1
    while (i <= dep) {
        var ganho = parseFloat(prompt("Digite o seu ganho mensal: "));
        var salBruto = salBruto + ganho;
        i++
    }
     */

    //renda per capta = salario / pessoas numa casa (dependentes e a pessoa que trabalha)
    var renda = salBruto / (dep + 1);

    var ir = calcIR(salBruto, renda);
    var salLiq = salBruto - ir;

    console.log("O salário líquido é R$", salLiq, "\n");

    salLiqMedio.push(salLiq);
    sumSal = sumSal + salLiq;
}

media = sumSal / 5;

//retornar a quantidade de salários líquidos menores do que a média
pessoas = calcMenorSal(salLiqMedio, media)

console.log("A média dos salários líquidos é R$", media)
console.log("A quantidade de pessoas com salário líquido abaixo da média é", pessoas)

//calculo do IMPOSTO DE RENDA
function calcIR(salBruto, renda) {
    if (renda > 500) {
        if (salBruto > 0.00 && salBruto <= 1903.98) {
            var ir = 0.05 * salBruto;
        } else if (salBruto > 2826.65) {
            var ir = 0.15 * salBruto;
        } else {
            var ir = 0.075 * salBruto;
        }
    } else {
        var ir = 0;
    }
    return ir;
}

function calcMenorSal(salLiqMedio, media) {
    var pessoas = 0;
    //verificação do vetor salario liquido medio que esta abaixo da media
    for (i = 0; i <= 4; i++) {
        if (salLiqMedio[i] < media) {
            pessoas++;
        }
    }
    return pessoas;
}