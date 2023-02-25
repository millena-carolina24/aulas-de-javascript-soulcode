let comida = "batata"

if (comida ==="batata" || comida === "carne" || comida === "chocolate") {

    console.log("Hum, que delícia")
}
else if (comida === "pizza" || comida === "sanduíche") {

    console.log("Às vezes")


} else {

    console.log("Quero não")
}

// -------------------------

let numero = 3

if (numero % 2 == 0) {

    console.log("O número é par")
} else {
    console.log("O número é impar")

}

// ----------------------

switch (comida) {
    case "batata":
    case "chocolate":
    case "carne":
        console.log("Hum, que delícia")
        break
    case "pizza":
    case "sanduíche":
        console.log("Às vezes como")
        break
        default:
        console.log("Quero não")


}