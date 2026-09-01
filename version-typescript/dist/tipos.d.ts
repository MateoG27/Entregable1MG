export type Posicion = "Base" | "Escolta" | "Alero" | "Ala-Pívot" | "Pívot";
export type Rareza = "Común" | "Rara" | "Leyenda";
export interface EstadisticasJugador {
    puntos: number;
    rebotes: number;
    asistencias: number;
}
export interface JugadorNBA {
    id: number;
    nombre: string;
    equipo: string;
    posicion: Posicion;
    rareza: Rareza;
    estadisticas: EstadisticasJugador;
}
//# sourceMappingURL=tipos.d.ts.map