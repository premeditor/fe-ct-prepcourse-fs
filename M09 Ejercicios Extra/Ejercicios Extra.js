/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arreglo = [];

  for (const [clave, valor] of Object.entries(objeto)) {
    arreglo.push([clave, valor]);
  }

  return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const objeto = {};

   for (const letra of string.toLowerCase()) {
     objeto[letra] = (objeto[letra] || 0) + 1;
   }
 
   const letrasOrdenadas = Object.keys(objeto).sort();
 
   return letrasOrdenadas.reduce((obj, letra) => {
     obj[letra] = objeto[letra];
     return obj;
   }, {});
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const letrasMayusculas = [];
   const letrasMinusculas = [];
 
   for (const letra of string) {
     if (letra.toUpperCase() === letra) {
       letrasMayusculas.push(letra);
     } else {
       letrasMinusculas.push(letra);
     }
   }
 
   return letrasMayusculas.concat(letrasMinusculas).join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabras = frase.split(" ");
   const palabrasInvertidas = palabras.map((palabra) => palabra.split("").reverse().join(""));
 
   return palabrasInvertidas.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   const numeroStr = numero.toString();

   // Invierte la cadena de texto
   const numeroInvertido = numeroStr.split('').reverse().join('');

   // Compara el número original con el número invertido
   if (numeroStr === numeroInvertido) {
       return "Es capicua";
   } else {
       return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const letras = string.split("");
   const letrasSinAbc = letras.filter((letra) => letra !== "a" && letra !== "b" && letra !== "c");
 
   return letrasSinAbc.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b) {
    // Comparamos las longitudes de las cadenas a y b
    return a.length - b.length;
});

return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const arregloInterseccion = [];

   for (const numero1 of array1) {
     for (const numero2 of array2) {
       if (numero1 === numero2) {
         arregloInterseccion.push(numero1);
         break;
       }
     }
   }
 
   return arregloInterseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
