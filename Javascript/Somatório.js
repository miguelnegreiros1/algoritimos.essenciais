let qtd = parseInt(prompt("Digite quantos numeros você quer somar: "));
let resultado = 0;
for (let i = 1; i <= qtd; i++) {
   num = parseInt(prompt(`Digite o ${i}o Número: `))
   resultado += num
} console.log("Resultado: " + resultado);
