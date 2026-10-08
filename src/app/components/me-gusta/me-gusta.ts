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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .corazon:hover {
      transform: scale(1.25);
    }
    .corazon:active {
      transform: scale(0.95);
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
