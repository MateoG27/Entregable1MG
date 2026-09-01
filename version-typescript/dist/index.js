// src/index.ts
import { jugadores } from "./jugadores.js";
import { crearContadorAnalisis, filtrarPorPosicion, calcularPuntosPromedio, fusionarJugadores, analizarCatalogo } from "./analizador.js";
async function main() {
    console.log("\n=== Analizador de Dúos Dinámicos NBA (Versión TS) ===");
    const contador = crearContadorAnalisis();
    contador.registrar();
    console.log(`\nAnálisis registrados en esta sesión: ${contador.registrar()}`);
    console.log("\nEl ojeador está buscando los datos en la base...");
    const catalogo = await analizarCatalogo(jugadores);
    console.log(`¡Datos encontrados! Jugadores listos: ${catalogo.length}`);
    const bases = filtrarPorPosicion(catalogo, "Base");
    console.log(`\nBases disponibles: ${bases.map(j => j.nombre).join(", ")}`);
    const promedioPuntos = calcularPuntosPromedio(catalogo);
    console.log(`Promedio de puntos del catálogo general: ${promedioPuntos} pts`);
    // Fusión aleatoria
    const indiceA = Math.floor(Math.random() * catalogo.length);
    let indiceB = Math.floor(Math.random() * catalogo.length);
    while (indiceA === indiceB) {
        indiceB = Math.floor(Math.random() * catalogo.length);
    }
    const jugadorA = catalogo[indiceA];
    const jugadorB = catalogo[indiceB];
    if (!jugadorA || !jugadorB) {
        console.log("No hay suficientes jugadores para generar un dúo.");
        return;
    }
    const duoAleatorio = fusionarJugadores(jugadorA, jugadorB);
    console.log("\n🔥 Dúo Dinámico Generado 🔥");
    console.log(duoAleatorio);
}
main();
//# sourceMappingURL=index.js.map