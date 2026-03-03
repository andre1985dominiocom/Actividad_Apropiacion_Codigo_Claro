// 1. Gestión de pedidos con rest y destructuración
// Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente, producto, cantidad}.
// • Usa destructuración para obtener sus propiedades.
// • Usa parámetros rest para almacenar los extras del pedido.
// La función debe retornar un objeto final con toda la información consolidada.

// Se define la función procesarPedido que recibe un objeto pedido y un número variable de argumentos extras
function procesarPedido(pedido, ...extras) {

    // Desestructuramos el objeto pedido para obtener las propiedades cliente, producto y cantidad
    const { cliente, producto, cantidad } = pedido;
    return { // Retornamos un nuevo objeto que contiene las propiedades del pedido y los extras
        cliente,
        producto,
        cantidad,
        extras
    };
}

// Se define un objeto pedido1 con la información del cliente, producto y cantidad
const pedido1 = {
    cliente: "Juan Pérez",
    producto: "Camiseta",
    cantidad: 2
};

// Llamamos a la función procesarPedido con el objeto pedido1 y algunos extras,
// y almacenamos el resultado en la variable resultado
const resultado = procesarPedido(pedido1, "Color: Rojo", "Talla: M");

// Imprimimos el resultado en la consola
console.log(resultado);