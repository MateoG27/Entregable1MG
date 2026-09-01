import type { JugadorNBA, Posicion } from "./tipos.js";
export declare function crearContadorAnalisis(): {
    registrar(): number;
    obtenerTotal(): number;
};
export declare function filtrarPorPosicion(lista: JugadorNBA[], posicion: Posicion): JugadorNBA[];
export declare function calcularPuntosPromedio(lista: JugadorNBA[]): string;
export declare function fusionarJugadores(jugadorA: JugadorNBA, jugadorB: JugadorNBA): {
    nombre: string;
    equipo: string;
    posicion: Posicion;
    rareza: import("./tipos.js").Rareza;
    estadisticas: import("./tipos.js").EstadisticasJugador;
    id: string;
    nombreDuo: string;
    quimica: string;
    estadisticasCombinadas: {
        puntos: string;
        rebotes: string;
        asistencias: string;
    };
};
export declare function analizarCatalogo(lista: JugadorNBA[]): Promise<JugadorNBA[]>;
//# sourceMappingURL=analizador.d.ts.map