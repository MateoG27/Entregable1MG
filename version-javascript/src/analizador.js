/**
 * analizador.js
 * -------------
 * Contiene la lógica del simulador de Dúos Dinámicos de la NBA.
 * Exporta funciones aisladas para que index.js las utilice.
 */

// 1. Closures: Bóveda de memoria privada
// Creamos un contador para saber cuántos análisis hemos hecho.
// La variable 'total' es inaccesible desde afuera; solo se modifica a través de registrar().
export function crearContadorAnalisis() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },
    obtenerTotal() {
      return total;
    }
  };
}

// 2. Funciones de Orden Superior (HOF): Transformación sin bucles for
// filter(): Recorre el catálogo y devuelve solo los jugadores que coinciden con la posición buscada.
export function filtrarPorPosicion(lista, posicion) {
  return lista.filter((jugador) => jugador.posicion === posicion);
}

// reduce(): Toma todos los puntos individuales y los comprime en un solo valor acumulado.
export function calcularPuntosPromedio(lista) {
  if (lista.length === 0) return 0;
  const sumaPuntos = lista.reduce((acumulado, jugador) => acumulado + jugador.estadisticas.puntos, 0);
  return (sumaPuntos / lista.length).toFixed(1);
}

// 3. Destructuring y Spread Operator (...): Fusión de datos
// Tomamos dos cartas distintas y las combinamos en un Dúo Híbrido sin mutar los originales.
export function fusionarJugadores(jugadorA, jugadorB) {
  // Destructuring: Sacamos las estadísticas para sumarlas más fácilmente y guardamos el resto.
  const { estadisticas: statsA, ...restoA } = jugadorA;
  const { estadisticas: statsB } = jugadorB;

  // Spread: Explayamos las propiedades y creamos la nueva carta fusionada.
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

// 4. Promesas, Asincronía y Manejo de Errores: El flujo no bloqueante
// Retorna el ticket (Promesa) simulando que el ojeador tarda un tiempo en buscar la carta.
function simularBusquedaJugador(jugador) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Si la carta viene vacía o corrupta, rechazamos la promesa para evitar un crash.
      if (!jugador || !jugador.posicion) {
        reject(new Error(`Datos de jugador invalidos (id: ${jugador?.id})`));
        return;
      }
      resolve(jugador);
    }, 800); // 800 milisegundos de retraso simulado
  });
}

// Promise.all manda a buscar a todos los jugadores al mismo tiempo (en paralelo).
export async function analizarCatalogo(lista) {
  try {
    const jugadoresEncontrados = await Promise.all(
      lista.map((jugador) => simularBusquedaJugador(jugador))
    );
    return jugadoresEncontrados;
  } catch (error) {
    // Si falla un solo jugador, el catch atrapa el error elegantemente.
    console.error("⚠️ El ojeador reportó un problema:", error.message);
    return [];
  }
}