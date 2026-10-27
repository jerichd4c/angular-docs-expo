<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/jerichd4c/angular-docs-expo">
    <img src="https://raw.githubusercontent.com/jerichd4c/logos/main/typescript_logo.svg" alt="Logo" width="80" height="80">
  </a>
</div>

<div align="center">

<h3 align="center">Angular Docs</h3>

  <p align="center">
    Interactive documentation about Angular, built with Angular itself. Presentation project for the Frameworks course at URU.
    <br />
    <a href="https://angular-docs-expo.vercel.app"><strong>Open the live site »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#topics">Topics</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The assignment for the course was to present a framework, with the requirement that the documentation itself be built with that framework. This project is a documentation site made with **Angular 22**: every page explains one core concept and, wherever possible, embeds a live component that demonstrates it, so the reader can see the feature working next to the code that produces it.

The site uses standalone components and signals throughout, lazy-loads every page, and is prerendered for server-side rendering. The written content of the pages is in Spanish.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Topics

| # | Page | Route |
|---|---|---|
| 1 | Installation and project structure | `/instalacion` |
| 2 | Components and base syntax | `/componentes` |
| 3 | Props and component communication | `/comunicacion` |
| 4 | State and reactivity | `/estado` |
| 5 | Lifecycle | `/ciclo-de-vida` |
| 6 | Routing and navigation | `/routing` |
| 7 | Consuming APIs | `/apis` |
| 8 | Global state | `/estado-global` |
| 9 | Ecosystem and performance | `/ecosistema` |
| 10 | Server-side rendering (SSR) | `/ssr` |

The live demo components used across the pages are:

* **Tag**, **like button** and **clock**: small signal-based examples for inputs and local state.
* **Random quote**: fetches a quote from [DummyJSON](https://dummyjson.com/) with `httpResource`.
* **Theme indicator**: reads a root-provided service that toggles the light and dark theme.
* **Code block**: displays a snippet with a copy-to-clipboard button.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Angular][Angular-badge]][Angular-url]
* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![Vitest][Vitest-badge]][Vitest-url]
* [![Express][Express-badge]][Express-url]
* [![Vercel][Vercel-badge]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js `^22.22.3`, `^24.15.0` or `>=26` (the range required by Angular 22.2)
* npm 11 (the version pinned in `package.json`)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/jerichd4c/angular-docs-expo.git
   ```
2. Navigate to the project directory
   ```sh
   cd angular-docs-expo
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server and open `http://localhost:4200`
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

| Command | Description |
|---|---|
| `npm start` | Development server with live reload on `http://localhost:4200` |
| `npm run build` | Production build into `dist/docs-angular`, prerendering every route |
| `npm test` | Unit tests with Vitest (18 test files, 21 tests) |
| `npm run serve:ssr:docs-angular` | Serves the server-side build with Node and Express (run `npm run build` first) |

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PROJECT STRUCTURE -->
## Project Structure

```
src/app/
  app.ts, app.html, app.css     # Layout: collapsible sidebar and router outlet
  app.routes.ts                 # Lazy-loaded routes, one per page
  app.routes.server.ts          # Prerender configuration (including routing/:framework)
  pages/                        # The 10 documentation pages
  components/                   # Live demo components shown inside the pages
  services/tema.ts              # Theme service (light and dark), shared by the whole app
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- DEPLOYMENT -->
## Deployment

The site is deployed on Vercel at [angular-docs-expo.vercel.app](https://angular-docs-expo.vercel.app). `vercel.json` runs `npm run build`, publishes the static output in `dist/docs-angular/browser`, redirects `/` to `/instalacion`, and falls back to `index.csr.html` for any other path, so unknown URLs render the app instead of a 404 page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- AUTHORS -->
## Authors

Developed as a group project for the Frameworks course at URU.

* [@jerichd4c](https://github.com/jerichd4c)
* Jesus Quintero - [@JesusQG](https://github.com/JesusQG)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Angular](https://angular.dev/) and its documentation
* [DummyJSON](https://dummyjson.com/) for the demo API used in the live examples
* [Vercel](https://vercel.com/) for hosting

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[Angular-badge]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vitest-badge]: https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white
[Vitest-url]: https://vitest.dev/
[Express-badge]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Vercel-badge]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
