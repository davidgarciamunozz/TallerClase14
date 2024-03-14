const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function numerosMenoresQueOcho(arreglo) {
    return arreglo.filter(numero => numero < 8);
}

const resultado = numerosMenoresQueOcho(fibonacci);
console.log(resultado); 

function numerosMayoresOIgualesQueOcho(arreglo) {
    return arreglo.filter(numero => numero >= 8);
}

const resultado2 = numerosMayoresOIgualesQueOcho(fibonacci);
console.log(resultado2); 

// CONTAR ELEMENTOS

function contarElementos(arreglo) {
    return arreglo.length;
}

const cantidadElementos = contarElementos(fibonacci);
console.log("La cantidad de elementos en el array fibonacci es:", cantidadElementos);


const cantidadMenoresQueOcho = numerosMenoresQueOcho(fibonacci).length;
const cantidadMayoresOIgualesQueOcho = numerosMayoresOIgualesQueOcho(fibonacci).length;


document.getElementById("numerosMenores").textContent = `Existen ${cantidadMenoresQueOcho} números menores que 8`;
document.getElementById("numerosMayores").textContent = `Existen ${cantidadMayoresOIgualesQueOcho} números mayores o iguales que 8`;