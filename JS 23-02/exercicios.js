




function calculaAreaCirculo(pi, r) {

    let areaCirculo = pi * (r * r)

    return areaCirculo
}



function calculaNivelCirculo(area) {

    if (area >= 1 && area <= 20) {

        return "Nível I"

    } else if (area >= 21 && area <= 40) {

        return "Nível II"
    } else {

        return "Nível inválido"
    }
}

let calculo = calculaAreaCirculo(3.14, 2)

let nivelCirculoTotal = calculaNivelCirculo(calculo)

console.log(calculo)
console.log(nivelCirculoTotal)