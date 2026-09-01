// src/tipos.ts

// 1. Uniones Literales: Actúan como candados para aceptar solo estos valores exactos.
export type Posicion = "Base" | "Escolta" | "Alero" | "Ala-Pívot" | "Pívot";
export type Rareza = "Común" | "Rara" | "Leyenda";

// 2. Interface Anidada: Agrupa las métricas estadísticas.
export interface EstadisticasJugador {
  puntos: number;
  rebotes: number;
  asistencias: number;
}

// 3. Interface Principal: Define la forma estricta que debe tener cada carta del catálogo.
export interface JugadorNBA {
  id: number;
  nombre: string;
  equipo: string;
  posicion: Posicion;
  rareza: Rareza;
  estadisticas: EstadisticasJugador;
}