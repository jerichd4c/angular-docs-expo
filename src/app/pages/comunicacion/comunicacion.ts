import { Component, signal } from '@angular/core';
import { Etiqueta } from '../../components/etiqueta/etiqueta';
import { MeGusta } from '../../components/me-gusta/me-gusta';
import { Codigo } from '../../components/codigo/codigo';

@Component({
  imports: [Etiqueta, MeGusta, Codigo],
  selector: 'app-comunicacion',
  styleUrl: './comunicacion.css',
  templateUrl: './comunicacion.html',
})
export class Comunicacion {
  readonly texto = signal('Angular');
  readonly color = signal('#dd0031');

  // Demo: Padre -> Hijo
  cambiarTexto(evento: Event) {
    this.texto.set((evento.target as HTMLInputElement).value);
  }

  cambiarColor(evento: Event) {
    this.color.set((evento.target as HTMLInputElement).value);
  }

  // Demo: Hijo -> Padre
  readonly mensaje = signal('Aún no has dado me gusta');

  alCambiar(activo: boolean) {
    this.mensaje.set(activo ? '¡Te gustó! ❤️' : 'Quitaste el me gusta');
  }


  // Codigo ejemplo flujo de datos
  readonly codigoFlujo = `Padre  ──── [texto]="..." ────▶  Hijo     input():  los datos bajan
Padre  ◀─── (cambio)="..." ────  Hijo     output(): los eventos suben`;

  // Codigo ejemplo input hijo
  readonly codigoInputHijo = `import { Component, input } from '@angular/core';

@Component({
  selector: 'app-etiqueta',
  template: '<span [style.background]="color()">{{ texto() }}</span>'
})
export class Etiqueta {
  readonly texto = input.required<string>();   // obligatorio
  readonly color = input('#dd0031');           // opcional, con valor por defecto
}`;
  
  // Codigo ejemplo input padre
  readonly codigoInputPadre = `<!-- Valor fijo -->
<app-etiqueta texto="Angular" />

<!-- Valor dinámico desde el padre (property binding) -->
<app-etiqueta [texto]="nombre()" [color]="colorElegido()" />`;

  // Ejemplo output hijo y padre
  readonly codigoOutputHijo = `import { Component, output, signal } from '@angular/core';

export class MeGusta {
  readonly activo = signal(false);
  readonly cambio = output<boolean>();     // 1. declara el evento

  alternar() {
    this.activo.update(valor => !valor);
    this.cambio.emit(this.activo());       // 2. lo dispara enviando un valor
  }
}`;

  readonly codigoOutputPadre = `<!-- Plantilla del padre: $event es el valor enviado con emit() -->
<app-me-gusta (cambio)="alCambiar($event)" />

// Clase del padre
alCambiar(activo: boolean) {
  this.mensaje.set(activo ? '¡Te gustó! ❤️' : 'Quitaste el me gusta');
}`;

  // Codigo ejemplo model 
  readonly codigoModel = `// Hijo: model() es un input y un output al mismo tiempo
export class Contador {
  readonly valor = model(0);
  sumar() { this.valor.update(v => v + 1); }
}

<!-- Padre: [( )] mantiene sincronizados padre e hijo -->
<app-contador [(valor)]="total" />`;
}