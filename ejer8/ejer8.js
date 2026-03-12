function fusionarColecciones(lista1, lista2) {
    try {
        if (verificar(lista1, lista2) === false) {
            throw new Error("Ninguna es una lista");
        } else {
            const lista3 = [...lista1, ...lista2]
            console.log(lista3);
        }
    } catch (error) {
        console.log(error.message);
    }
}

function verificar (lista1, lista2) {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
        return false
    }
    return true
}

let lista1 = [1,2,3]
let lista2 = [4,5,6]

fusionarColecciones(lista1, lista2)