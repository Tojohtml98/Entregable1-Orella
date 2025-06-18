// Este archivo contiene el código JavaScript para la Calculadora de Presupuesto.

// Declaración de variables, constantes y arrays
const nombreCalculadora = "Calculadora de Presupuesto";
let ingresos = [];
let gastos = [];
let resultados = [];

// Función para obtener los ingresos del usuario
function obtenerIngresos() {
    let ingreso = prompt("Ingresa un monto de ingreso (o escribe 'salir' para finalizar):");
    while (ingreso !== null && ingreso.toLowerCase() !== 'salir') {
        if (!isNaN(ingreso) && ingreso !== '') {
            ingresos.push(Number(ingreso));
        } else {
            alert("Por favor, ingresa un número válido.");
        }
        ingreso = prompt("Ingresa un monto de ingreso (o escribe 'salir' para finalizar):");
    }
}

// Función para obtener los gastos del usuario
function obtenerGastos() {
    let gasto = prompt("Ingresa un monto de gasto (o escribe 'salir' para finalizar):");
    while (gasto !== null && gasto.toLowerCase() !== 'salir') {
        if (!isNaN(gasto) && gasto !== '') {
            gastos.push(Number(gasto));
        } else {
            alert("Por favor, ingresa un número válido.");
        }
        gasto = prompt("Ingresa un monto de gasto (o escribe 'salir' para finalizar):");
    }
}

// Función para calcular el balance
function calcularBalance() {
    let totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso, 0);
    let totalGastos = gastos.reduce((acc, gasto) => acc + gasto, 0);
    let balance = totalIngresos - totalGastos;

    resultados.push(`Total de ingresos: $${totalIngresos}`);
    resultados.push(`Total de gastos: $${totalGastos}`);
    resultados.push(`Balance final: $${balance}`);
}

// Función para mostrar los resultados
function mostrarResultados() {
    if (resultados.length > 0) {
        alert(resultados.join("\n"));
    } else {
        alert("No hay resultados para mostrar.");
    }
}

// Función principal para ejecutar la calculadora
function ejecutarCalculadora() {
    alert(`Bienvenido a la ${nombreCalculadora}`);
    obtenerIngresos();
    obtenerGastos();
    calcularBalance();
    mostrarResultados();
}

// Invocar la función principal para iniciar la calculadora
ejecutarCalculadora();