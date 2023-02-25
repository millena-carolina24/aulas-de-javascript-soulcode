function calcularIMC(peso, altura) {

    let calculo = peso / (altura * altura) //variavel que armazena o imc
    return calculo // retorna o valor de calculo para usar fora da função

}

let imcJunior = calcularIMC(80, 1.79) // 80 / (1.79 * 1.79)
let imcPedro = calcularIMC(80, 1.60) 
console.log(`O imc de Júnior é ${imcJunior}`)
console.log(`O imc de Pedro é ${imcPedro}`)