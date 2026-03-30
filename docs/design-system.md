# Design System — Con Criterio Tools

Sistema de diseño compartido por todas las páginas del ecosistema concriterio.tools.

## Colores

```
Primary:          #7665FF (violeta Con Criterio)
Primary hover:    #8a7bff
Primary muted:    rgba(118, 101, 255, 0.12)
Primary glow:     rgba(118, 101, 255, 0.06)

Background:       #0a0a0a (negro profundo)
Surface:          #111111 (tarjetas, elementos elevados)
Surface hover:    #161616
Border:           #1e1e1e
Border hover:     #2a2a2a

Text:             #e2e2e2 (primario)
Text secondary:   #999999 (subtítulos, taglines)
Text muted:       #666666 (metadata, fechas, categorías)

Success:          #4ade80
Error:            #f87171
Warning:          #fbbf24
```

## Tipografía

Todas las fuentes se importan desde Google Fonts.

```
Display:  'Fraunces', Georgia, serif
          Pesos: 300, 400, 600, 700
          Uso: títulos, headings, nombres de herramientas

Body:     'Outfit', system-ui, sans-serif
          Pesos: 300, 400, 500, 600
          Uso: texto general, descripciones, enlaces, CTAs

Mono:     'Space Mono', monospace
          Pesos: 400, 700
          Uso: badges, categorías, fechas, código, etiquetas técnicas
```

## Espaciado y radios

```
Border radius:    10px (general)
                  6px (badges, pills pequeñas)
                  14px (tarjetas, banners)
                  100px (pills de filtro, badges circulares)

Max width:        1120px (contenedor principal)
Padding lateral:  24px
Gap del grid:     20px
```

## Componentes

### Tarjeta de herramienta

- Fondo: var(--surface)
- Borde: 1px solid var(--border)
- Radio: var(--radius-lg) (14px)
- Cover: 160px de altura, con imagen o CSS pattern + overlay gradient
- Hover: border-color → var(--border-hover), transform → translateY(-2px)

### Badge de tipo

- Font: var(--font-mono), 0.65rem, 700, uppercase
- Color: var(--primary) sobre fondo var(--primary-muted)
- Borde: 1px solid rgba(118, 101, 255, 0.2)
- Radio: var(--radius-sm) (6px)
- Padding: 3px 8px

### Enlace de tarjeta

- Font: var(--font-body), 0.82rem, 500
- Color: var(--text-muted)
- Borde: 1px solid var(--border)
- Radio: var(--radius) (10px)
- Padding: 9px 14px
- Icono SVG 15x15 a la izquierda
- Hover: color → var(--text), border → var(--border-hover), background → var(--surface-hover)

### Enlace primario (demo)

- Igual que enlace de tarjeta pero:
- Color: var(--primary)
- Borde: rgba(118, 101, 255, 0.3)
- Background: var(--primary-muted)

### Banner de footer

- Fondo: var(--surface) (newsletter) o transparent (consultoría)
- Borde: 1px solid var(--border)
- Radio: var(--radius-lg) (14px)
- Padding: 28px 32px
- Layout: flex, space-between, centrado vertical
- En móvil: flex-direction column, centrado

### CTA principal

- Font: var(--font-body), 0.85rem, 600
- Color: var(--bg) sobre fondo var(--primary)
- Radio: var(--radius) (10px)
- Padding: 10px 20px

## Estilo general

- Dark mode por defecto, sin toggle de modo claro
- Sin sombras. Los bordes sutiles son los separadores visuales.
- Backdrop-filter blur(12px) en el header sticky
- Animaciones: fadeInUp (0.45-0.5s ease-out) con delays escalonados
- Densidad media: ni compacto ni espaciado en exceso
