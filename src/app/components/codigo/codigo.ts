import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-codigo',
  styles: `
    .code-container {
      position: relative;
      background: var(--code-bg, #0f172a);
      border: 1px solid var(--border-subtle, #1e293b);
      border-radius: var(--radius-md, 10px);
      margin: 1.25rem 0;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.65rem 1rem;
      background: rgba(255, 255, 255, 0.03);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .window-dots {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }

    .copy-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      font-family: inherit;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.6rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.15s ease;
      user-select: none;
    }

    .copy-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
    }

    .copy-btn.copied {
      background: rgba(34, 197, 94, 0.2);
      border-color: rgba(34, 197, 94, 0.4);
      color: #86efac;
    }

    pre {
      margin: 0;
      padding: 1.1rem 1.25rem;
      color: var(--code-text, #e2e8f0);
      overflow-x: auto;
      font-family: var(--font-mono, monospace);
      font-size: 0.88rem;
      line-height: 1.6;
    }

    code {
      font-family: inherit;
      background: transparent;
      padding: 0;
      border: none;
      color: inherit;
    }
  `,
  template: `
    <div class="code-container">
      <div class="code-header">
        <div class="window-dots" aria-hidden="true">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <button
          type="button"
          class="copy-btn"
          [class.copied]="copiado()"
          (click)="copiar()"
          [attr.aria-label]="copiado() ? 'Código copiado' : 'Copiar código'">
          @if (copiado()) {
            <span>✓ Copiado</span>
          } @else {
            <span>Copiar</span>
          }
        </button>
      </div>
      <pre><code>{{ codigo() }}</code></pre>
    </div>
  `,
})
export class Codigo {
  readonly codigo = input.required<string>();
  readonly copiado = signal(false);

  async copiar() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(this.codigo());
        this.copiado.set(true);
        setTimeout(() => this.copiado.set(false), 2000);
      } catch {
        // Fallback silencioso
      }
    }
  }
}
