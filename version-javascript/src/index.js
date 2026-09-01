/**
 * index.js
 * --------
 * Punto de entrada de la aplicación. Orquesta los datos y la lógica.
 * Para ejecutarlo usa el comando: node src/index.js
 */

import { jugadores } from "./jugadores.js";
import {
  crearContadorAnalisis,
  filtrarPorPosicion,
  calcularPuntosPromedio,
  fusionarJugadores,
  analizarCatalogo
} from "./analizador.js";

async function main() {
  console.log("\n=== Analizador de Dúos Dinámicos NBA (Versión JS) ===");

  // 1. Probamos el closure
  const contador = crearContadorAnalisis();
  contador.registrar();
  console.log(`\nAnálisis registrados en esta sesión: ${contador.registrar()}`);

  // 2. Ejecutamos la promesa simulada (Asincronía)
  console.log("\nEl ojeador está buscando los datos en la base...");
  const catalogo = await analizarCatalogo(jugadores);
  console.log(`¡Datos encontrados! Jugadores listos: ${catalogo.length}`);

  // 3. Probamos las funciones de orden superior
  const bases = filtrarPorPosicion(catalogo, "Base");
  console.log(`\nBases disponibles: ${bases.map(j => j.nombre).join(", ")}`);

  const promedioPuntos = calcularPuntosPromedio(catalogo);
  console.log(`Promedio de puntos del catálogo general: ${promedioPuntos} pts`);

  // 4. Probamos el destructuring y spread (Fusión aleatoria)
  const indiceA = Math.floor(Math.random() * catalogo.length);
  let indiceB = Math.floor(Math.random() * catalogo.length);

  // Evitamos que el programa elija al mismo jugador dos veces
  while (indiceA === indiceB) {
    indiceB = Math.floor(Math.random() * catalogo.length);
  }

  const duoAleatorio = fusionarJugadores(catalogo[indiceA], catalogo[indiceB]);
  console.log("\n🔥 Dúo Dinámico Generado 🔥");
  console.log(duoAleatorio);
}

// Llamamos a la función principal
main();

// Comprobación visual del Event Loop (No bloqueante)
console.log("⏳ [Sistema]: Iniciando aplicación... (Esto se imprime ANTES de que el ojeador termine su búsqueda)");