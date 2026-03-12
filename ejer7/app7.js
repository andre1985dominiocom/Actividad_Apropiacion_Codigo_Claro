function evaluarValores (...numeros) {
    try {
        for (let numero of numeros) {
            if (typeof numero !== "number") {
                throw new Error("Los datos no son númericos");
            }
        }
        return numeros
    } catch (error) {
        console.log(error.message);
    }
}

try {
    const numeros = evaluarValores(1,2,"j",4,5,6,7,8,9,0)
        if (numeros) {
            let sumaNumeros = 0
            for (let num of numeros) {
                sumaNumeros += num
            }
            const promedio = sumaNumeros / numeros.length
            console.log(`promedio: ${promedio}`);
        } else {
            throw new Error("Hay datos no númericos");
        }
} catch (error) {
    console.log(error.message);
}