function TransformReal(valor) { //função de transformar em real

    let real = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) //codigo pra converter em formato real

    return real

}

let valorConvertido = TransformReal(10) //retornou real, entao a variavel let valorConvertido terá o mesmo valor que a let real.

console.log(valorConvertido)