let vln = "popocatépetl";
 for(i=0; i <vln.length; i++){

    console.log(vln[i]);
 };

 //let cosa = 'o--------------------'
 
 //for (let i = 0; i < cosa.length; i++) {
    // Creamos una nueva cadena donde 'o' está en la posición `i` y el resto son guiones
//  let nuevaCosa = '-'.repeat(i) + 'o' + '-'.repeat(cosa.length - i - 1);

//    console.log(nuevaCosa);
//}

 let cosa = ["o","-","-","-","-","-","-","-","-"];
 for (i= 0; i<cosa.length; i++){
    if( cosa[i] == 'o'){

    }
    else{
        cosa[i] = "o";
        cosa[i-1] = "-";
        console.log(cosa);
    }
    let canva = document.getElementById("canva"); 
    let nuevodiv = document.createElement('div'); 
    nuevodiv.append(cosa); 
    //console.log(nuevodiv);
    canva.appendChild(nuevodiv);
    
}
    

//cuantas veces aparece la letra t en la palabra popocatepetl

function cuenta(palabra){   
    let resultado = 0;
    for(i=0;i <vln.length;i++){
        if(palabra[i] == 't'){
        resultado++;
    } 

}
return resultado

}
console.log(cuenta(vln))