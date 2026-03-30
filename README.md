# concriterio.tools — Landing principal

Directorio de herramientas de Con Criterio. Índice central que agrupa todas las demos interactivas desplegadas en subdominios de concriterio.tools.

## Qué hace esta web

Página única que lista todas las herramientas del ecosistema Con Criterio Tools. Cada herramienta se muestra en una tarjeta con: descripción, enlace a la demo interactiva, enlace al repositorio público, enlace al artículo de newsletter (cuando existe), y enlace a la web oficial de la herramienta.

No hay páginas de detalle. La tarjeta contiene toda la información necesaria.

## Stack

- **Astro** — Sitio 100% estático, sin hidratación de JS frameworks
- **CSS custom** — Design system propio de Con Criterio con variables CSS
- **TypeScript** — Tipado de datos de herramientas
- **Vercel** — Despliegue automático

## Añadir una herramienta nueva

Editar `src/data/tools.ts` y añadir un objeto al array `tools` con la interfaz `Tool`. La tarjeta se genera automáticamente. Si quieres un pattern de cover único, añadir una regla CSS en `src/components/ToolCard.astro` con `.cover-pattern[data-slug='tu-slug']`.

Si tienes captura de pantalla, añadir el campo `image` con la ruta al archivo en `public/`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

Configurado para Vercel. Importar repo, deploy automático. Sin variables de entorno necesarias.

## Parte de

[concriterio.tools](https://concriterio.tools) por [Pol Marzà](https://concriterio.blog)
