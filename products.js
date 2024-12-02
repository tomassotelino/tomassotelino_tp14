var prompt = require('prompt-sync')();

const electrodomesticos = [
    "heladera","Lavaropas","Microondas","Televisor","Aspiradora","Licuadora"
]

console.log(electrodomesticos[0]);
console.log(electrodomesticos[3]);
console.log(electrodomesticos[5]);


let posicion_0 = electrodomesticos.shift();
electrodomesticos.push(posicion_0);

console.log(electrodomesticos)



electrodomesticos.push("cafetera", "plancha")

console.log(electrodomesticos)

console.log("la cantidad de productos es:",electrodomesticos.length);

const productoBuscar = prompt("¿que producto quiere buscar? ");
const existeProducto = electrodomesticos.includes(productoBuscar);

if (existeProducto) {
    console.log("producto encontrado");
} else {
    console.log("el producto no existe");
}

const cadenaProductos = electrodomesticos.join(" ");
console.log("productos unidos en una cadena:", cadenaProductos);

const cantidadElementosCadena = cadenaProductos.split(" ").length;
console.log("cantidad de elementos en la cadena:", cantidadElementosCadena);


const nuevaCadena = cadenaProductos.replace("aspiradora", "licuadora");
console.log("cadena con producto cambiado:", nuevaCadena);

const nuevoArrayTexto = nuevaCadena.split(" ");
console.log("nuevo array desde la cadena:", nuevoArrayTexto);