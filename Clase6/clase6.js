let frutas = {
    mango: {
        color: "amarillo",
        elementoCaracteristico: "Cascara",
        sabor: "mango"},
    manzana:{
        color: "rojo", 
        elementoCaracteristico: "forma", 
        sabor: "manzana"},
    mandarina: {
        color: "naranja", 
        elementoCaracteristico: "gajos", 
        sabor: "mandarina"},
    platano: {
        color: "amarillo", 
        elementoCaracteristico: "forma", 
        sabor: "platano"},
    mamey: {
        color: "marron", 
        elementoCaracteristico: "Cascara", 
        sabor: "dulce"}
}


console.log(frutas);

let diccionario = document.getElementById('diccionario'); 
diccionario.innerText = JSON.stringify(frutas);
let keys = Object.keys(frutas);

console.log(keys);

for(let i=0; i<keys.length; i++){

    let hijo = document.createElement('div')
    hijo.innerText = keys[i] + JSON.stringify(frutas[keys[i]])
    diccionario.appendChild(hijo)
}