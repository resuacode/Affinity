# Affinity

Repositorio con el proyecto Docusaurus del curso de Affinity (3 horas). El sitio se publica en <https://resuacode.es/affinity>.

## Desarrollo

```bash
npm install
npm start      # servidor local en http://localhost:3000/affinity/
npm run build  # genera la versión estática en ./build
```

## Despliegue

El workflow `.github/workflows/deploy.yml` compila y publica en GitHub Pages en cada push a `master`. Los pull requests contra `master` se compilan con `.github/workflows/test-build.yml` para detectar errores (por ejemplo, enlaces rotos) antes de fusionar.

Para que se sirva en `https://resuacode.es/affinity`:

1. En **Settings > Pages** del repositorio, selecciona **Source: GitHub Actions**.
2. El dominio personalizado `resuacode.es` debe estar configurado en el sitio principal de la cuenta `resuacode` (repositorio `resuacode.github.io`); los repositorios de proyecto se sirven automáticamente bajo `/<nombre-del-repo>`, en este caso `/affinity`.
