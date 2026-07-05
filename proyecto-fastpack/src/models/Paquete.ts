// src/models/Paquete.ts
// Composición: el Paquete crea su propia Etiqueta internamente.
// Si el paquete se destruye, la etiqueta deja de existir.

import { Etiqueta } from "./Etiqueta";

export class Paquete {
  private destinatario: string;
  private direccion: string;
  private etiqueta: Etiqueta; // objeto compuesto, creado internamente

  constructor(
    destinatario: string,
    direccion: string,
    codigoBarras: string,
    esFragil: boolean
  ) {
    this.destinatario = destinatario;
    this.direccion = direccion;
    // El paquete instancia su propia etiqueta (composición)
    this.etiqueta = new Etiqueta(codigoBarras, esFragil);
  }

  // Imprime en consola los datos de la guía del paquete
  public mostrarGuia(): void {
    console.log("----- GUÍA DE ENVÍO -----");
    console.log(`Destinatario: ${this.destinatario}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Código de etiqueta: ${this.etiqueta.obtenerCodigo()}`);
    console.log(`Advertencia: ${this.etiqueta.obtenerAdvertencia()}`);
    console.log("-------------------------");
  }
}
