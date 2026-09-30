import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

interface Frase {
  quote: string;
  author: string;
}

@Component({
  imports: [],
  selector: 'app-frase-aleatoria',
  styles:  `
    .frase {
      cursor: pointer;
      font-style: italic;
    }
  `,
  template: `
    <span class="frase" (click)="frase.reload()" title="Clic para otra frase">
      @if (frase.isLoading()) {
        Cargando...
      } @else if (frase.error()) {
        No se pudo cargar la frase 😢
      } @else if (frase.hasValue()) {
        “{{ frase.value().quote }}” — <em>{{ frase.value().author }}</em>
      }
    </span>
  `,
})
export class FraseAleatoria {
  readonly frase = httpResource<Frase>(() => 
'https://dummyjson.com/quotes/random');
}
