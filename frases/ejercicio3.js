//EJERCICIO 1. DOS SOLUCIONES UNO CON REDUCE Y OTRO CON FOR
let numeros1 = [1,2,3,4,5];
let suma1 = numeros1.reduce((total, num) => total + num, 0);
    console.log(suma1);

const numeros = [1, 2, 3, 4, 5]; // CONST ES UNA FORMA DE DECLARAR VALORES CONSTANTES. QUE NO CAMBIAN
let suma = 0; // AQUI ESTOY DECLARANDO LA VARIABLE SUMA Y QUE INICIA EN 0

for (let i = 0; i < numeros.length; i++) { //INICIO DEL BUCLE EN EL QUE I INICIA EN 0, CON LA CONDICION DE QUE I SEA MENOS QUE LA LONGITUD DE LA CONSTANTE NUMEROS, IRA RECORRIENDO UNO A UNO LOS VALORES.
    suma += numeros[i];   // SI LAS CONDICIONES DE BUCLE SE CUMPLEN  SE HACE LA UNA OPERACION DE SUMA. ESTO SE PUEDE EXPLICAR COMO SUMA = SUMA + NUMEROS[I] LO QUE NOS DICE QUE EL VALOR SUMA SE ESTARA REDEFINIENDO Y GUARDANDO SU NUEVO VALOR HASTA QUE EL BUCLE TERMINE. 
}
console.log("Suma total:", suma); // SE IMPRIME LA SUMA.



//EJERCICIO 2, MULTIPLICAR 

const lista = [1, 2, 3, 4, 5]; //CONST ES UNA FORMA DE DECLARAR VALORES CONSTANTES. QUE NO CAMBIAN
let producto = 1 //AQUI ESTOY DECLARANDO LA VARIABLE PRODUCTO DONDE SE ENCONTRARA EL RESULTADO DE LA MULTIPLICACION. Comenzamos con producto = 1, ya que multiplicar por 1 no altera el resultado.

lista.forEach(function(numero) {  //Usamos forEach para iterar sobre cada elemento del array numeros, es un método de arrays en JavaScript que ejecuta una función para cada elemento del array lista. Aquí definimos una función anónima (sin nombre) que forEach ejecutará para cada elemento de lista. El parámetro numero dentro de la función representa el elemento actual en cada iteración del array.
    producto*= numero
});
console.log(producto)



//EJERCICIO 3 Contar cuántas veces aparece la letra "a" en una frase

let fraseA = "A la mañana siguiente, me desperté con ganas de hacer algo asombroso, pero acabé acostado en el sofá, viendo videos de gatos";
 for(i=0; i <fraseA.length; i++){
    console.log(fraseA)
 };
 
 function cuenta(palabra){   
    let resultado = 0;
    for(i=0;i <fraseA.length;i++){
        if(palabra[i] == 'a' || palabra[i] == 'A'){
        resultado++;
    } 
}
return resultado
}
console.log(cuenta(fraseA))



//EJERCICIO 4 invertir un string

const texto = "Hola me llamo Andres";
console.log(texto);

let textoInvertido = ''; // Este es un string vacío donde se acumulan los caracteres invertidos
for (let i = texto.length - 1; i >= 0; i--) { //  let i = texto.length - 1, que es el último índice del string. Para "Hola me llamo Andres", texto.length es 20, así que texto.length - 1 es 19 (el índice de la última letra 's').i >= 0: Esto asegura que el bucle se ejecuta mientras i sea mayor o igual a 0, recorriendo todos los caracteres desde el final hasta el principio.
   textoInvertido += texto[i]; // En cada iteración, texto[i] selecciona el carácter actual desde el final. textoInvertido += texto[i]; agrega el carácter actual al final de textoInvertido.
}
console.log(textoInvertido);



//EJERCICIO 5 Calcular el promedio de un array de números usando forEach.

const listaNumeros = [10, 20, 30, 40, 50];
let suma2 = 0;

console.log(listaNumeros);

listaNumeros.forEach(function(numero) {
    suma2 += numero;
});
const promedio = suma2 / listaNumeros.length;
console.log(promedio);

//EJERCICIO 6 Convertir cada carácter de un string en mayúsculas


const mayus = "la verdad no se que poner";
let textoMayusculas = "";

console.log(mayus);
// Iteramos sobre cada carácter usando for...of
for (const char of mayus) {
    textoMayusculas += char.toUpperCase(); // es un método en JavaScript que se usa para convertir un string a mayúsculas. Este método se puede aplicar a cualquier cadena y devuelve una nueva cadena en la que todos los caracteres están en mayúsculas.
}

console.log(textoMayusculas);


//EJERCICIO 7 Crear un nuevo array con el cuadrado de cada número de un array original.

const numerosSinCuadrado = [1, 2, 3, 4, 5];
const cuadrados = [];

for (let i = 0; i < numerosSinCuadrado.length; i++) {
    cuadrados.push(numerosSinCuadrado[i] ** 2);  //El método .push en JavaScript se usa para agregar un nuevo elemento al final de un array. Es una función que "empuja" el elemento que le pasamos al final del array, y también devuelve la nueva longitud del array después de agregar el elemento.
}

console.log(cuadrados);


// EJERCICIO 8 dos posibilidades. Una usando for y otra usando filter

const numerosP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];

for (let i = 0; i < numerosP.length; i++) {
    if (numerosP[i] % 2 === 0) {
        pares.push(numerosP[i]);
    }
}

console.log(pares);

let pares2 = numerosP.filter(num => num % 2 === 0);

console.log(pares2);


//EJERCICIO 9 Contar cuántas palabras contiene una oración

const palabras = fraseA.split(" "); // split(" ") se utiliza para dividir una cadena en partes (subcadenas) y devolver esas partes en un array. Este método toma como argumento un delimitador. En split(" "), el delimitador es un espacio (" "), lo que significa que estamos dividiendo la cadena cada vez que encuentra un espacio.
const numeroDePalabras = palabras.length;

console.log(numeroDePalabras);


//EJERCICIO 10 

const numero = 8; // Cambia este valor para generar la tabla de cualquier otro número

for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
}