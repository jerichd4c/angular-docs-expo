import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'routing/:framework',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { framework: 'angular' },
        { framework: 'react' },
        { framework: 'vue' },
        { framework: 'svelte' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
