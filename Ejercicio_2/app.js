// 2. Control de inventario con inmutabilidad y spread
// Partiendo del arreglo inicial:
// const inventario = ["cámara", "trípode", "micrófono"];
// Crea una función agregarInventario(lista, nuevoItem)
// que devuelva una nueva lista sin modificar la original
// y que registre un mensaje indicando cuántos ítems tiene ahora el inventario.

// Definición del inventario inicial
const inventario = ["cámara", "trípode", "micrófono"];

// Función para agregar un nuevo ítem al inventario sin modificar el original
function agregarInventario(lista, nuevoItem) {

    // Usamos el operador spread para crear una nueva lista con el nuevo ítem
    const nuevaLista = [...lista, nuevoItem];

    // Registramos un mensaje indicando cuántos ítems tiene ahora el inventario
    console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);
    return nuevaLista; // Devolvemos la nueva lista con el nuevo ítem agregado
}

// Definimos el nuevo inventario agregando un nuevo ítem
const nuevoInventario = agregarInventario(inventario, "Flex Reflector");

// Mostramos el inventario original y el nuevo inventario para verificar que el original no ha sido modificado
console.log("Inventario original:", inventario);
console.log("Nuevo inventario:", nuevoInventario);