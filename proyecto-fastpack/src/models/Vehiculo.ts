// src/models/Vehiculo.ts
// Representa el activo físico de la empresa. Tiene existencia
// propia e independiente del conductor que lo use.

export class Vehiculo {
  private placa: string;
  private capacidadCarga: number; // en kg

  constructor(placa: string, capacidadCarga: number) {
    this.placa = placa;
    this.capacidadCarga = capacidadCarga;
  }

  // Retorna una cadena con la placa y la capacidad de carga
  public obtenerInfo(): string {
    return `Placa: ${this.placa} | Capacidad: ${this.capacidadCarga} kg`;
  }
}
