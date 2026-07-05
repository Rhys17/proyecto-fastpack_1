// src/models/Etiqueta.ts
// Parte constitutiva del Paquete (composición). No tiene
// sentido ni existencia fuera de un Paquete.

export class Etiqueta {
  private codigoBarras: string;
  private esFragil: boolean;

  constructor(codigoBarras: string, esFragil: boolean) {
    this.codigoBarras = codigoBarras;
    this.esFragil = esFragil;
  }

  // Retorna la advertencia según el estado de fragilidad
  public obtenerAdvertencia(): string {
    return this.esFragil ? "¡CUIDADO: FRÁGIL!" : "Paquete Estándar";
  }

  public obtenerCodigo(): string {
    return this.codigoBarras;
  }
}
