const idade=19 
const dinheiro =  100

if (idade>=18 && dinheiro >= 20) {
dinheiroFinal = dinheiro - 20 
console.log(`Seu troco é ${dinheiroFinal} `)

} else {

console.log("Você não pode comprar a bebida")

}

let salario = 9000

if (salario <500)

{

    salario = salario + 50
    
} else if (salario>=500 && salario <=1000) {

    salario = salario + 25
    
} else {
console.log(`Não houve aumento salarial`)

}
console.log(`Seu salário é de ${salario}`)