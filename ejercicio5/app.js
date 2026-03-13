// 5. Actualización de perfiles con inmutabilidad + rest
// Crea una función actualizarPerfil(perfil, ...nuevosDatos).
// Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad:
// "Medellín"}.
// • Combina todos los datos usando inmutabilidad y spread.
// Retorna el nuevo perfil completo.


// el operador ...rest nos permite recibir multiples parametros como arreglos
function actualizarPerfil(perfil, ...nuevosDatos) {

    // con el metodo Object.assign copias las propiedades de cada objeto dentro de un objeto vacio
    // asi obtenemos un objeto nuevo con todos los cambio juntos
    const cambios = Object.assign({}, ...nuevosDatos);

    // usamos el oprerador ...spread para crear un nuevo objeto perfilActualizado
    // primero copiamos todads las propiedad del perfil original
    // si alguna popiedad ya existe en el perfil sera sobrescrita 
    // esto garantiza la inmutabilidad no modifica el perfil orginal

    const perfilActualizado = {...perfil, ...cambios};

    // sando retunr retorna el nuevo valor para ser usado en la function       
    return perfilActualizado;
    
}
// ejemplos

// defininos un perfl inicial
const perfil = {nombre: "lupe", edad: 4, ciudad: "bucaramanga" };

console.log(actualizarPerfil(perfil, {edad: 5}, {ciudad: "madrid"}));
