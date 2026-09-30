import { Component, signal } from '@angular/core';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { MeGusta } from '../../components/me-gusta/me-gusta';
@Component({
  imports: [Etiqueta, MeGusta],
  selector: 'app-comunicacion',
  styleUrl: './comunicacion.css',
  templateUrl: './comunicacion.html',
})
export class Comunicacion {
  readonly mensaje = signal('Aún no has dado me gusta');

  alCambiar(activo: boolean) {
    this.mensaje.set(activo ? '¡Te gustó! ❤️' : 'Quitaste el me gusta');
  }
}
