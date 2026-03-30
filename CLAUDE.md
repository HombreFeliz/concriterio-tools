# concriterio.tools — Landing principal — Instrucciones para Claude Code

## Qué es esto

Landing page principal del directorio de herramientas de Con Criterio.
Vive en concriterio.tools (dominio raíz, sin subdominio).
Las demos individuales viven en subdominios: resend.concriterio.tools, mapbox.concriterio.tools, etc.
Esta página es el índice que las agrupa todas.

Lee docs/prd.md antes de empezar.

## Stack

- Astro (sitio estático, sin framework de UI adicional)
- CSS custom con variables (design system propio de Con Criterio, sin Tailwind)
- TypeScript
- Desplegado en Vercel

No se necesita base de datos. No se necesitan API routes. No se necesita autenticación.

## Lo que debes construir

### Página única: index

Una sola página con estas secciones en orden:

**1. Header sticky**
- Logo: "con criterio" (Fraunces) + "tools" (Space Mono, badge violeta)
- Nav con 3 enlaces externos: Newsletter (concriterio.blog), Recursos (concriterio.dev), GitHub (github.com/polmarza)
- Fondo semitransparente con backdrop-filter blur

**2. Hero**
- Badge superior: "Directorio de herramientas" (mono, uppercase, pill violeta)
- Título: "Herramientas" (Fraunces, tamaño grande, responsive con clamp)
- Subtítulo: "Demos interactivas de librerías y servicios para construir productos web. Código abierto, sin humo: pruebas cada herramienta antes de integrarla."
- Meta line: "Nuevas cada semana · Código público · Parte de Con Criterio"
- Glow sutil violeta detrás del hero (radial-gradient)

**3. Filtros**
- Pills horizontales centradas: "Todas" (activo por defecto), y una pill por cada categoryType único que exista en los datos
- Filtrado client-side: al pulsar una pill, mostrar/ocultar tarjetas con animación fadeInUp
- Sin JavaScript frameworks, vanilla JS en un script tag

**4. Grid de herramientas**
- 2 columnas en desktop, 1 en móvil (breakpoint 700px)
- Gap de 20px
- Orden: cronológico inverso (la más reciente arriba). Las herramientas en src/data/tools.ts ya deben estar ordenadas así.
- Contador al final: "N herramientas" (mono, muted)

**5. Tarjeta de herramienta (sin accordion, todo visible)**

Cada tarjeta muestra TODO su contenido sin necesidad de expandir nada:

- Zona de cover (160px altura):
  - Si la herramienta tiene campo `image`: mostrar la imagen con object-fit cover
  - Si no tiene `image`: mostrar un CSS pattern único por slug (ver más abajo)
  - Overlay gradient de transparente a var(--surface) para fundir con el body
- Fila de meta: badge de tipo (SaaS/Librería/API/Open Source) + categoría en texto mono
- Título (Fraunces, 1.4rem)
- Tagline (Outfit, color secondary)
- Descripción corta (Outfit, color muted, 2-3 líneas máximo)
- Bloque de enlaces (vertical, uno debajo de otro, gap 6px):
  - "Probar la demo" (enlace primario, fondo violeta muted) → demoUrl
  - "Ver código" → repoUrl
  - "Leer en la newsletter" (SOLO si newsletterUrl existe) → newsletterUrl
  - "Web oficial" → officialUrl
- Footer con fecha de publicación (mono, muted)

Cada enlace es un <a> con icono SVG inline + texto, borde sutil, hover con fondo surface-hover.

**6. Footer**
- Banner newsletter: "Cada semana, herramientas como estas en tu bandeja de entrada." + CTA "Suscríbete a Con Criterio" → concriterio.blog
- Banner consultoría: "¿Necesitas ayuda integrando alguna de estas herramientas en tu proyecto?" + CTA "Agenda una sesión (90 EUR)" → cal.com/polmarza/toma-de-contacto
- Créditos: "Construido por Pol Marzà con Astro y desplegado en Vercel."

### Datos de herramientas

Los datos viven en `src/data/tools.ts` como un array tipado. Interfaz:

```typescript
interface Tool {
  slug: string;           // Identificador único, usado para CSS patterns y data attributes
  name: string;           // Nombre visible
  tagline: string;        // Una línea
  description: string;    // 2-3 líneas
  category: string;       // Categoría legible ("Email y comunicación", "Mapas y geolocalización", etc.)
  categoryType: 'saas' | 'library' | 'api' | 'open-source';
  demoUrl: string;        // URL del subdominio de la demo
  repoUrl: string;        // URL del repo en GitHub
  newsletterUrl?: string; // URL del artículo en Substack (opcional)
  officialUrl: string;    // URL de la web oficial de la herramienta
  publishedAt: string;    // Fecha ISO (YYYY-MM-DD)
  image?: string;         // Ruta a captura de pantalla (opcional)
}
```

Herramientas iniciales (incluir estas 4 en el array, en este orden):

1. **Resend** — slug: resend, SaaS, Email y comunicación, resend.com
2. **Mapbox GL JS** — slug: mapbox, library, Mapas y geolocalización, mapbox.com
3. **Liveblocks** — slug: liveblocks, SaaS, UI / componentes visuales, liveblocks.io
4. **UploadThing** — slug: uploadthing, SaaS, Storage y archivos, uploadthing.com

Todos los demoUrl siguen el patrón: https://[slug].concriterio.tools
Todos los repoUrl siguen el patrón: https://github.com/polmarza/[slug]-concriterio-tools
Ninguno tiene newsletterUrl todavía.
Ninguno tiene image todavía.

### CSS patterns para covers

Cada herramienta sin imagen de portada debe tener un pattern CSS único generado con gradientes (no imágenes externas). Usar el data attribute data-slug para aplicar el pattern correcto. Los patterns deben ser sutiles (opacidad 0.5), usando combinaciones de:
- radial-gradient con el violeta primario (#7665FF) a baja opacidad
- repeating-linear-gradient para texturas geométricas
- Variaciones de ángulo y posición por herramienta para que cada una sea distinta

### Animaciones

- Elementos del hero: fadeInUp escalonado (0.08s de delay entre cada uno)
- Tarjetas del grid: fadeInUp escalonado (0.05s de delay entre cada una, clase .stagger en el contenedor)
- Hover en tarjetas: translateY(-2px) + border-color más claro
- Filtros: al cambiar, las tarjetas que aparecen hacen fadeInUp

## Sistema de diseño

Lee docs/design-system.md. Resumen rápido:

```
Colores:
  --primary: #7665FF
  --primary-hover: #8a7bff
  --primary-muted: rgba(118, 101, 255, 0.12)
  --bg: #0a0a0a
  --surface: #111111
  --surface-hover: #161616
  --border: #1e1e1e
  --border-hover: #2a2a2a
  --text: #e2e2e2
  --text-muted: #666666
  --text-secondary: #999999

Tipografía:
  --font-display: 'Fraunces' (Google Fonts, headings)
  --font-body: 'Outfit' (Google Fonts, cuerpo)
  --font-mono: 'Space Mono' (Google Fonts, badges, fechas, código)

Bordes y radios:
  --radius: 10px
  --radius-sm: 6px
  --radius-lg: 14px

Dark mode por defecto. Sin modo claro.
Sin sombras. Bordes sutiles como separadores.
```

Importar las fuentes desde Google Fonts en el layout.

## Variables de entorno

No hay variables de entorno. El sitio es 100% estático.

## Convenciones

- TypeScript siempre
- Componentes Astro (.astro) pequeños y con responsabilidad única
- CSS scoped en cada componente (style tag dentro del .astro)
- Variables CSS globales definidas en src/styles/global.css e importadas en el layout
- Sin librerías de CSS (no Tailwind, no styled-components)
- Sin librerías de JS (no React, no Alpine, no frameworks)
- El JavaScript necesario (filtros) va en un script tag dentro del componente correspondiente
- El código debe ser legible: este proyecto es también material educativo

## Estructura de carpetas

```
concriterio-tools-hub/
├── src/
│   ├── data/
│   │   └── tools.ts
│   ├── styles/
│   │   └── global.css
│   ├── layouts/
│   │   └── Base.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Filters.astro
│   │   ├── ToolCard.astro
│   │   ├── ToolsGrid.astro
│   │   └── Footer.astro
│   └── pages/
│       └── index.astro
├── public/
│   └── favicon.svg
├── docs/
│   ├── prd.md
│   ├── architecture.md
│   ├── design-system.md
│   └── roadmap.md
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── README.md
└── CLAUDE.md
```

## NO hacer

- No añadir páginas de detalle individuales por herramienta (la tarjeta ES la unidad completa de información)
- No añadir buscador (innecesario con pocas herramientas, filtros son suficientes)
- No añadir dark/light mode toggle (solo dark)
- No instalar Tailwind ni ningún framework CSS
- No instalar React ni ningún framework JS
- No usar estilos inline salvo casos puntuales justificados
- No duplicar contenido de la newsletter en esta web
- No añadir features no descritas en docs/prd.md
