// src/analizador.ts
// 1. Closures: El retorno es inferido automáticamente por TypeScript.
export function crearContadorAnalisis() {
    let total = 0; // Infiere 'number'
    return {
        registrar() { total += 1; return total; },
        obtenerTotal() { return total; }
    };
}
// 2. Funciones de Orden Superior: Parámetros tipados explícitamente.
export function filtrarPorPosicion(lista, posicion) {
    return lista.filter((jugador) => jugador.posicion === posicion);
}
export function calcularPuntosPromedio(lista) {
    if (lista.length === 0)
        return "0.0";
    const sumaPuntos = lista.reduce((acumulado, jugador) => acumulado + jugador.estadisticas.puntos, 0);
    return (sumaPuntos / lista.length).toFixed(1);
}
// 3. Destructuring y Spread Operator
// Dejamos que TypeScript infiera el tipo del objeto fusionado gigante que retorna.
export function fusionarJugadores(jugadorA, jugadorB) {
    const { estadisticas: statsA, ...restoA } = jugadorA;
    const { estadisticas: statsB } = jugadorB;
    return {
        ...restoA,
        ...jugadorB,
        id: `${jugadorA.id}-${jugadorB.id}`,
        nombreDuo: `${jugadorA.nombre} & ${jugadorB.nombre}`,
        quimica: `${jugadorA.posicion} y ${jugadorB.posicion}`,
        estadisticasCombinadas: {
            puntos: (statsA.puntos + statsB.puntos).toFixed(1),
            rebotes: (statsA.rebotes + statsB.rebotes).toFixed(1),
            asistencias: (statsA.asistencias + statsB.asistencias).toFixed(1)
        }
    };
}
// 4. Promesas y Asincronía: Retorno explícito Promise<T>
function simularBusquedaJugador(jugador) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!jugador || !jugador.posicion) {
                reject(new Error(`Datos de jugador corruptos (id: ${jugador?.id})`));
                return;
            }
            resolve(jugador);
        }, 800);
    });
}
// Envuelve el arreglo final en una Promesa
export async function analizarCatalogo(lista) {
    try {
        const jugadoresEncontrados = await Promise.all(lista.map((jugador) => simularBusquedaJugador(jugador)));
        return jugadoresEncontrados;
    }
    catch (error) {
        // Afirmamos el tipo de error para acceder a .message sin que TS se queje
        console.error("⚠️ El ojeador reportó un problema:", error.message);
        return [];
    }
}
//# sourceMappingURL=analizador.js.map