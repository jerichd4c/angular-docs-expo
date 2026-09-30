import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-codigo',
  styles: `
    pre {
      background: #1e1e2e;
      color: #cdd6f4;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  `,
  template: `<pre><code>{{ codigo() }}</code></pre>`,
})
export class Codigo {
  readonly codigo = input.required<string>();
}
