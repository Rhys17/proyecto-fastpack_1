// src/index.ts
// Punto de entrada de la aplicación. No define clases: solo
// orquesta la simulación importando los modelos ya modularizados.

import { Vehiculo } from "./models/Vehiculo";
import { Conductor } from "./models/Conductor";
import { Paquete } from "./models/Paquete";

// Paso 1: instanciar un Vehiculo de forma independiente
const furgoneta = new Vehiculo("PBA-1234", 850);

// Paso 2: instanciar un Conductor, inyectándole el vehículo (agregación)
const conductor = new Conductor("Carlos Mendoza", furgoneta);

// Paso 3: instanciar un Paquete; la Etiqueta se crea internamente (composición)
const paquete = new Paquete(
  "Ana Torres",
  "Av. Principal 456, Guayaquil",
  "BAR-990",
  true
);

// Paso 4: acceder a los métodos para imprimir los resultados
conductor.mostrarDatos();
console.log("");
paquete.mostrarGuia();
