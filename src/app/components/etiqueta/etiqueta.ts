import { Component, input } from '@angular/core';

// Ejemplo para punto 2

@Component({
  imports: [],
  selector: 'app-etiqueta',
  styles: `
    .etiqueta {
      color: #fff;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      font-size: 0.85rem;
    }
  `,
  template: `<span class="etiqueta" [style.background]="color()">
  {{ texto() }}</span>`,
})
export class Etiqueta {
  readonly texto = input.required<string>();
  readonly color = input('#dd0031');
}
