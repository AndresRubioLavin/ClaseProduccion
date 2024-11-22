console.log("Hola");

let miPrimerArray = ["Andres","Ariel","Jesus","Ana"];
console.log(miPrimerArray);
console.log(miPrimerArray[2]);


miPrimerArray.push("Hector");
console.log(miPrimerArray);

miPrimerArray.unshift("Jaime");
console.log(miPrimerArray);

let numero = [1,2,3,4,5,6,7];
console.log(numero);

let impares = numero.filter(num => num % 2 !== 0);
console.log(impares);

let fruta1 = ["fresa", "sandia", "naranja"];
let fruta2 = ["naranja", "platano", "mango"];
let combinado = fruta1.concat(fruta2);
console.log(combinado);

let sinDuplicados = [...new Set(combinado)];
console.log(sinDuplicados);


let numerosMayor = [3,5,6,8,1,9,2,4,7];
console.log(numerosMayor);

numerosMayor.sort();
console.log(numerosMayor);


numerosMayor.reverse();
console.log(numerosMayor);

let numerosDobles = numerosMayor.map(num => num * 2);
console.log(numerosDobles);


let edades = [1,6,9,12,16,18,45,15,20,26];
console.log(edades);

let edadesMayor = edades.filter(edad => edad > 18);
console.log(edadesMayor);

let puntaje = [10,50,60,30];
console.log(puntaje);


let suma = puntaje.reduce((total, num) => total + num, 0);
console.log(suma);

let colores = ["Azul","Amarillo","Cafe","Rojo"];
console.log(colores);

colores.pop();
colores.shift();
console.log(colores);

let verificarSi = puntaje.includes(10);
console.log(verificarSi);



// = es , == igual a, === exactamente igual.  desigual !=//



//sumar
function sumar(a, b) { 
    let resultado = a + b;

    return resultado;
};

console.log(sumar(75,93));


//numero par
function esPar(numero) {
    let resultado;
    if(numero %2 === 0){
        resultado = true;
    }else{
        resultado = false;
    };
    return resultado;
}

console.log(esPar(96));


function saludar(nombre){
    return 'Que onda ' + nombre + ', que rollo con el pollo.';

}

console.log(saludar("Yisus"));

function doble(numero){

    return numero*2;
}


console.log(doble(12));

function celsiusAFahrenheit(gradosCelsius){
let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
return gradosFahrenheit;

}

console.log(celsiusAFahrenheit(1));


//bloque de codigo que se repite = loop//

//iterar es una accion que recorre uno a uno los elementos de un conjunto//

//loop se declara con "for"//

//i = indice/index, i++ = indice recorre uno a uno los elementos de un conjunto//

let vln = "popocatépetl";
 for(i;i<vln.length;i++){

    console.log(i);
 };