Entregable 1
Deber 1 Web 3
Idea creativa: Duo-dinamico jugadores NBA
Idea del mini-programa:
Es un analizador de Dúos Dinámicos de la NBA. Basicamente es un simulador que carga estadísticas de jugadores, filtra candidatos por posición y combina a dos de ellos para evaluar la química y el poder del dúo resultante.

Intención auditable:
Construir una máquina de intenciones que reciba las cartas de dos jugadores de baloncesto desde una base de datos simulada de forma asíncrona, que procese sus atributos individuales y retorne un diagnóstico no bloqueante sobre su desempeño conjunto en la cancha.

Restricciones (Reglas):

El catálogo solo aceptará jugadores que tengan una de las 5 posiciones oficiales de baloncesto (Base, Escolta, Alero, Ala-Pívot, Pívot).

Cada carta de jugador debe tener una estructura de datos estricta que incluya estadísticas agrupadas como puntos, rebotes y asistencias.

Si se intenta analizar a un jugador que no existe en el catálogo, el sistema debe capturar el error sin que el programa colapse.

Criterios de aceptación:

El programa simula el tiempo de búsqueda del scout mediante una carga asíncrona (Promesas) que no bloquea la impresión de mensajes en la consola.

Ademas el sistema utiliza funciones de orden superior para filtrar el catálogo (por ejemplo, buscar solo "Bases") y calcular el promedio estadístico del dúo formado.

Al fusionar a los dos jugadores, se genera un nuevo objeto "Dúo Híbrido" que combina sus atributos utilizando spread operator, demostrando que los datos originales de las cartas permanecen intactos.