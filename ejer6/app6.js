const ventas = [
    { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
    { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
]

function obtenerDatos (ventas) {
    const [{producto, detalles : {precio, unidades}}] = ventas

    const total = precio * unidades;

    return {producto, total};
}

try {
    const resultado = obtenerDatos(ventas)

    if (resultado) {      
        console.log(`ventas del ${resultado.producto}: ${resultado.total}`);
    } else {
        throw new Error("hubo un error en el primer producto");
    }
} catch (error) {
    console.log(error.message);
    
}