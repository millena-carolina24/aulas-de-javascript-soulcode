// Função = procedimento = método. Deixa o código mais organizado.

//Sintaxe básica

function dizOla () //declaração de função

{

    console.log("Hello, world!")
    console.log("!!!")
}

// Invocação = chamada

dizOla ()

function exemplo01() { //escopo da função, variavel dentro da função só existe dentro da função

    let a = 1
    let b = 4
    console.log(`A soma é ${a+b}`)


}

//exemplo01()

//////////

// Parâmetros = entrada = o que a função para executar
// a e b são parâmetros

//function soma(a,b) {
// console.log(`A soma de ${a} + ${b} = ${a+b}`)

//}

//soma (20, 75) //envia para a função
//soma (10,5)
//soma(9,80)
//soma(1,1)

function calculadora (a,b,c) {
console.log(`A soma é ${a + b + c}`)
console.log(`A subtração é ${a - b - c}`)
console.log(`A multiplicação é ${a*b*c}`)
console.log(`A divisão é ${a/b/c}`)
}

//chamada 

//calculadora(10,5,2)



let numero1= 50
let numero2= 25
let numero3= 40

//calculadora(numero1, numero2, numero3) // está mandando as variáveis para a função calculadora, argumentos= valores passados para o parâmetro

function media (a,b,c) {

let resultado = (a + b + c) / 3
console.log(`A média das notas é ${media}`)

return resultado //quando for usar o valor fora da função, quando encontra o return, a função entende como final

}

let medBiologia = media(10,9,7)
let medMatematica = media(9,7,6)
let medPortuguês = media(8,7,5)

console.log(`Biologia = ${medBiologia}`)

console.log(`Matemática = ${medMatematica}`)


console.log(`Português = ${medPortuguês}`)





