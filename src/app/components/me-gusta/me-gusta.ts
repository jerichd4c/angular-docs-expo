import { Component, output, signal } from '@angular/core';

// Ejemplo para punto 3 y 4

@Component({
  imports: [],
  selector: 'app-me-gusta',
  styles: `
    .corazon {
      font-size: 1.8rem;
      cursor: pointer;
      user-select: none;
    }
  `,
  template: `<span class="corazon" (click)="alternar()">{{ 
activo() ? '❤️' : '🤍' }}</span>`,
})
export class MeGusta {
  readonly activo = signal(false);
  readonly cambio = output<boolean>();

  alternar() {
    this.activo.update(valor => !valor);
    this.cambio.emit(this.activo());
  }
}
