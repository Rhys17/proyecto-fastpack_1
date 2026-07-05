// src/models/Conductor.ts
// Agregación: el Conductor recibe un Vehiculo ya existente desde
// el exterior. El vehículo sobrevive aunque el conductor deje
// de existir en el sistema.

import { Vehiculo } from "./Vehiculo";

export class Conductor {
  private nombre: string;
  private entregasRealizadas: number;
  private vehiculo: Vehiculo; // objeto agregado, inyectado desde afuera

  constructor(nombre: string, vehiculo: Vehiculo) {
    this.nombre = nombre;
    this.vehiculo = vehiculo;
    this.entregasRealizadas = 0;
  }

  // Imprime en consola el nombre del conductor y los datos del vehículo
  public mostrarDatos(): void {
    console.log("----- DATOS DEL CONDUCTOR -----");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Entregas realizadas: ${this.entregasRealizadas}`);
    console.log(`Vehículo asignado -> ${this.vehiculo.obtenerInfo()}`);
    console.log("--------------------------------");
  }
}
