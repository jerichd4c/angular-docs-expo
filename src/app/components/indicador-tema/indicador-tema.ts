import { Component, inject, input } from '@angular/core';
import { Tema } from '../../services/tema';

@Component({
  imports: [],
  selector: 'app-indicador-tema',
  styles: `
    .theme-toggle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.6rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 0.5rem 0.75rem;
      color: #cbd5e1;
      font-size: 0.85rem;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.09);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.15);
    }

    .theme-toggle:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }

    .theme-toggle.colapsado {
      padding: 0.55rem;
      justify-content: center;
    }

    .theme-icon {
      font-size: 1.1rem;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .theme-toggle:hover .theme-icon {
      transform: scale(1.15) rotate(12deg);
    }

    .theme-label {
      font-weight: 500;
      letter-spacing: -0.01em;
    }

    .theme-pill {
      font-size: 0.72rem;
      font-weight: 500;
      padding: 0.15rem 0.45rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.1);
      color: #94a3b8;
    }
  `,
  template: `
    <button
      type="button"
      class="theme-toggle"
      [class.colapsado]="colapsado()"
      (click)="tema.alternar()"
      [attr.aria-label]="tema.oscuro() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      [attr.title]="tema.oscuro() ? 'Modo oscuro activo (click para claro)' : 'Modo claro activo (click para oscuro)'">
      <span class="theme-icon">{{ tema.oscuro() ? '🌙' : '☀️' }}</span>
      @if (!colapsado()) {
        <span class="theme-label">{{ tema.oscuro() ? 'Modo Oscuro' : 'Modo Claro' }}</span>
        <span class="theme-pill">{{ tema.oscuro() ? 'Dark' : 'Light' }}</span>
      }
    </button>
  `,
})
export class IndicadorTema {
  readonly colapsado = input(false);
  protected readonly tema = inject(Tema);
}
