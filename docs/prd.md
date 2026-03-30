# PRD — concriterio.tools (landing principal)

## Qué es

Landing page que funciona como directorio central del ecosistema Con Criterio Tools. Cada semana se publican herramientas y librerías para builders que construyen productos web con IA. Cada herramienta tiene una demo interactiva en un subdominio (resend.concriterio.tools, mapbox.concriterio.tools, etc.), un repositorio público en GitHub, y un artículo en la newsletter Con Criterio.

Esta página agrupa todas las herramientas en un solo lugar. No genera contenido propio: la pieza editorial vive en la newsletter (concriterio.blog). Esta web es un índice funcional, no un blog.

## Para quién

Builders que construyen aplicaciones web y quieren evaluar herramientas antes de integrarlas. Llegan desde la newsletter, desde LinkedIn, o desde los propios subdominios de las demos.

## Scope exacto

### Lo que hace

1. Muestra un grid de herramientas con toda la información visible (sin accordions ni páginas de detalle)
2. Permite filtrar por tipo de herramienta (SaaS, librería, API, open source)
3. Cada tarjeta enlaza a: demo interactiva, repositorio, artículo de newsletter (si existe) y web oficial

### Lo que NO hace

- No tiene páginas individuales por herramienta
- No duplica el contenido de la newsletter
- No tiene buscador (innecesario con el volumen actual)
- No tiene autenticación ni datos de usuario
- No tiene modo claro (solo dark)

## Flujos de usuario

**Flujo 1: Explorar el directorio**
El usuario llega a concriterio.tools, ve el grid de herramientas ordenadas por fecha (más reciente primero), escanea las tarjetas y decide cuál le interesa.

**Flujo 2: Filtrar por tipo**
El usuario pulsa una pill de filtro (por ejemplo "SaaS") y solo ve herramientas de ese tipo. Las demás se ocultan con animación.

**Flujo 3: Acceder a una herramienta**
Desde la tarjeta, el usuario elige entre: probar la demo en vivo, ver el código fuente, leer el artículo completo en la newsletter, o visitar la web oficial de la herramienta.

## Componentes fijos

- Banner newsletter en el footer: "Cada semana, herramientas como estas en tu bandeja de entrada." → concriterio.blog
- Banner consultoría en el footer: "¿Necesitas ayuda integrando alguna de estas herramientas en tu proyecto?" → cal.com/polmarza/toma-de-contacto (90 EUR/sesión)
- Créditos: "Construido por Pol Marzà con Astro y desplegado en Vercel."
