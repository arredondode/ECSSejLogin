/*Estructura de Control – Selección Simple

Ejercicio - Login

• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan
*/
let usuarioIngresado: string | null = prompt("Ingrese su usario:");
let claveIngresada: string | null = prompt("Ingrese su clave:");

let usuario: string = "juan";
let clave: string = "clavejuan";

if (usuario === usuarioIngresado && clave === claveIngresada) {
  console.log("Bienvenido");
} else {
  console.log("La clave y/o el usuario ingreados no son correctos.");
}
