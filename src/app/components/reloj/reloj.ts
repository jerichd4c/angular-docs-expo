import { Component, OnDestroy, OnInit, afterNextRender, signal } from '@angular/core';

// Ejemplo para punto 10

@Component({
  imports: [],
  selector: 'app-reloj',
  styles: `
    .reloj {
      font-family: monospace;
      font-size: 1.2rem;
    }
  `,
  template: `<span class="reloj">🕒 {{ hora() }}</span>`,
})
export class Reloj implements OnInit, OnDestroy{
  readonly hora = signal('');
  private intervalo?: ReturnType<typeof setInterval>;

  constructor() {
    // Solo corre en el navegador (no en el server con SSR)
    afterNextRender(() => {
      this.intervalo = setInterval(() => this.actualizar(),
1000);
      console.log('Reloj: afterNextRender → intervalo iniciado');
    });
  }

  ngOnInit() {
    this.actualizar();
    console.log('Reloj: ngOnInit → componente creado');
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
    console.log('Reloj: ngOnDestroy → intervalo limpiado');
  }

  private actualizar() {
    const ahora = new Date();
    this.hora.set(ahora.toLocaleTimeString());
  }
}
