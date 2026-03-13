// 4. Mezcla de configuraciones con spread y destructuración
// Simula un sistema donde existen opciones por defecto y opciones personalizadas:
// const defaults = { tema: "claro", idioma: "es" };
// Crea una función configurarUsuario(defaults, personalizadas) que:
// • Use spread para combinar ambas configuraciones sin mutarlas.
// • Use destructuración para obtener el idioma configurado.
// Retorna el idioma resultante.

// creamos la función configurarUsuario que recibe dos objetos:
// uno con valores por defecto (defaults) y otro con valores personalizados (personalizadas).
function configurarUsuario(defaults, personalizadas) {
  
  //usamos el operador spread (...) para combinar ambos objetos en uno nuevo.
  // spread "desempaqueta" las propiedades de cada objeto y las coloca dentro de un nuevo objeto.
  // esto garantiza inmutabilidad: no modificamos ni defaults ni personalizadas, 
  // simplemente creamos un objeto nuevo con la mezcla.
  const configuracionFinal = { ...defaults, ...personalizadas };

  // ahora usamos desestructuración para extraer directamente la propiedad idioma.
  // la desestructuración nos permite obtener valores de un objeto de forma sencilla,
  // sin necesidad de escribir configuracionFinal.idioma.
  const { idioma } = configuracionFinal;

  // Retornamos el idioma resultante.
  // "return" devuelve el valor para que pueda ser usado fuera de la función.
  return idioma;
}


// ejemplo de uso:

// definimos las configuraciones por defecto
const defaults = { tema: "claro", idioma: "es" };

// definimos configuraciones personalizadas
const personalizadas = { tema: "oscuro" };

// llamamos la función y mostramos el resultado en consola
console.log(configurarUsuario(defaults, personalizadas)); 
// resultado esperado: "es" porque el idioma no fue sobrescrito en personalizadas
