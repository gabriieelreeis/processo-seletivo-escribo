// Importo o readline do javascript
const readline = require("readline")
const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function sumAll(value) {
    // Converso o valor passado para Inteiro
    const parsedValue = parseInt(value);

    // Valor inicial da soma
    let sum = 0;

    // Faço um loop até o valor informado
    for (let i = 0; i < parsedValue; i++) {
        // Verifico se o valor é dividendo por 3 ou 5
        if (!(i % 3) || !(i % 5)) {
            // Caso o valor seja dividido acrescendo o valor atual do loop
            sum += i;
        }
    }

    // Retorno o resultado da soma
    return sum;
}


// Inicio um Readline para poder captar o número informado.
cmd.question("Digite um número inteiro:", function(val) {
    // Constante com o resultado
    const res = sumAll(val)

    // Exibo um log com o resultado;
    console.log(
        "A soma de todos os números múltiplos por 5 e 3 menores que " + val + " é " + res + "."
    )

    // Fecho o ReadLine
    cmd.close()
});