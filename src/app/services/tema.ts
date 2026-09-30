import { Injectable, signal} from '@angular/core';

// ejemplo para punto 8

// una instancia para toda la app
@Injectable({ providedIn: 'root' })
export class Tema {
  readonly oscuro = signal(false);

  alternar() {
    this.oscuro.update(valor => !valor);
  }
}
