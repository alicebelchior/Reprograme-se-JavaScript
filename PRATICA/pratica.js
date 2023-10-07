// definir uma constante que vai importar um módulo p/ entrada de dados
const prompt = require("prompt-sync")();

var nome = prompt("Digite o seu nome: ");
var salBruto = parseFloat(prompt("Digite o valor do seu salário bruto: "));
var dep = parseInt(prompt("Digite o número de dependentes: "));

//renda per capta = salario / pessoas numa casa (dependentes e a pessoa que trabalha)
var renda = salBruto / (dep + 1);

if (renda > 500) {
    if (salBruto > 0.00 && salBruto <= 1903,98) {
        var ir = 0.05 * salBruto;
    } else if (salBruto > 2826,65) {
        var ir = 0.15 * salBruto;
    } else {
        var ir = 0.075 * salBruto;
    }
} else {
    var ir = 0;
}

var salLiq = salBruto - ir;

console.log("O salário líquido é R$", salLiq);