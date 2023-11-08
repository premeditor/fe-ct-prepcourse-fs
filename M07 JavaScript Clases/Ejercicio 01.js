/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   return class Usuario {
      constructor(usuario, nombre, email, password) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
      }
  
      saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
      }
    };
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Object.defineProperty(Usuario.prototype, "saludar", {
      value: function() {
        return "Hello World!";
      },
      enumerable: true,
      configurable: true,
      writable: true,
    });
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   Object.defineProperty(String.prototype, "reverse", {
      value: function() {
        const cadena = this;
        const longitud = cadena.length;
        let cadenaInvertida = "";
  
        for (let i = longitud - 1; i >= 0; i--) {
          cadenaInvertida += cadena[i];
        }
  
        return cadenaInvertida;
      },
      enumerable: true,
      configurable: true,
      writable: true,
    });
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
