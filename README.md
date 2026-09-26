# 🧭 GeoExploradores

Aplicación educativa de **Ciencias Sociales para 4.º de Primaria**, creada con Angular 20.

## Tema 1 · La Tierra

Incluye cinco misiones de aprendizaje:

- La Tierra en el sistema solar.
- Los movimientos de la Tierra.
- Las capas de la Tierra.
- La actividad de la Tierra.
- Actuamos ante catástrofes naturales.

Además incluye un banco de **50 preguntas**, partidas aleatorias de 10 preguntas, respuestas barajadas, explicaciones tras cada respuesta, puntuación y progreso persistente en `localStorage`.

## Desarrollo

```bash
npm install
npm start
```

## Calidad de código

```bash
npm run lint
npm run format
npm run format:check
npm test
npm run check
```

## Build

```bash
npm run build
```

El proyecto usa Angular standalone, strict mode, zoneless change detection, Signals, SCSS, Vitest, ESLint y Prettier.

## GitHub Pages

Cuando se cree el repositorio, se puede añadir `angular-cli-ghpages` y desplegar indicando el `base-href` correspondiente al nombre del repositorio.
