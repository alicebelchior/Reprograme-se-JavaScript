// definir uma constante que vai importar um módulo p/ entrada de dados
const prompt = require("prompt-sync")();

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

    var salLiq = salBruto - ir;

    console.log("O salário líquido é R$", salLiq, "\n");
}