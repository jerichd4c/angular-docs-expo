import { Component, inject } from '@angular/core';
import { Tema } from '../../services/tema';

@Component({
  imports: [],
  selector: 'app-indicador-tema',
  styles: `
    .indicador {
      font-size: 1.5rem;
      cursor: pointer;
      user-select: none;
    }
  `,
  template: `
    <span class="indicador" (click)="tema.alternar()">
      {{ tema.oscuro() ? '🌙' : '☀️' }}
    </span>
  `,
})
export class IndicadorTema {
  protected readonly tema = inject(Tema);
}
