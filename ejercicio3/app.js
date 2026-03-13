// 3. Registro de actividades con manejo de errores
// Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
// {nombre, fecha}.
// • Usa un try...catch para validar que ambas propiedades existan.

// • Si falta alguna, lanza un error indicando que la actividad no es válida.
// • Si todo está correcto, muestra un mensaje confirmando el registro.

console.log("Bienvenidos al ejercicio3");

function registrarActividad(actividad) {
    //creamos el try catch para capturar el error que nos pide, de que deben validad ambas propiedades
    try{
        // validadmos que el objeto tengo nombre y fecha
        // si la condicion no se cumple lanza un error
        if (!actividad.nombre || !actividad.fecha) {
            throw new Error("la actividad no es validad falta nombre o fecha");
        }
        // si todo es correcto mostramos un mensaje confirmando que todo es correcto
        console.log(`actividad registrada. ${actividad.nombre}, fecha registrada: ${actividad.fecha}`);
    }catch(error){
        // si ocurre un error lo atraoamos aquie y se muestra el mensjae
        console.log("error: ", error.message);
    }
}
