# Landing de apsilum.com

Sitio público de APSILUM. Astro estático, desplegado a GitHub Pages en cada push a `main`.

## Editar el contenido

Todo el texto y la estructura están en `src/pages/index.astro`:

- Los módulos del producto: arreglo `modulos`.
- Los pasos: arreglo `pasos`.
- Las garantías: arreglo `garantias`.
- La cifras del hero: bloque `dl class="cifras"`.

Cambiar copy no requiere tocar estilos. Los colores de marca están al inicio del bloque
`<style>` (`--accent` #ffc107, `--accent-ink` #263238).

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/
```

## Despliegue

Automático por GitHub Actions en cada push a `main`. El dominio `apsilum.com` apunta a
Pages por registros DNS de Hostinger. La aplicación vive en `app.apsilum.com`, en un VPS
aparte: este repo nunca la toca.

## Imágenes

`public/logo-horizontal.svg` y `public/logo-mark.svg` son los originales de la marca.
