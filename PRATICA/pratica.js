// definir uma constante que vai importar um módulo p/ entrada de dados
const prompt = require("prompt-sync")();

var nome = prompt("Digite o seu nome: ");

// a var abaixo se nao tivesse o "parseFloat" iria ler a entrada de dado como uma string
var salBruto = parseFloat(prompt("Digite o valor do seu salário bruto: "));

if (salBruto > 0.00 && salBruto <= 1903,98) {
    var ir = 0.05 * salBruto;
} else if (salBruto > 2826,65) {
    var ir = 0.15 * salBruto;
} else {
    var ir = 0.075 * salBruto;
}
var salLiq = salBruto - ir;

console.log("O salário líquido é R$", salLiq);