# Hoja de Ruta de Implementación — Estime’s Café (12 Meses)

Este plan de acción desglosa la ejecución cronológica paso a paso en 4 fases estructuradas para el desarrollo, lanzamiento y escalado orgánico de `estimescafe.com`.

---

## Fase 1: Cimientos Técnicos, Desarrollo Web & Lanzamiento (Semanas 1 - 4)

### Objetivos:
- Desarrollar el nuevo sitio web desde cero con arquitectura optimizada para Core Web Vitals.
- Implementar el marcado Schema.org completo.
- Configurar Google Search Console, Google Analytics 4 y la infraestructura de medición de conversiones.
- Optimizar y sincronizar el perfil de Google Business Profile (GBP).

```
Semanas 1-2: Desarrollo Web Core ────────► Semanas 3-4: Schema, Tracking & Lanzamiento
• Arquitectura HTML5 / CSS limpio       • Implementación JSON-LD Schema
• Menús interactivos (no PDFs)           • Configuración GA4 y Search Console
• Mobile-first UX & Sticky CTAs          • Sincronización Google Business Profile
• Optimización WebP / Core Web Vitals    • Indexación inmediata de URLs
```

### Checklist Técnico de la Web (Desarrollo desde Cero):
- [ ] **Estructura Semántica:** Uso riguroso de `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`. Un solo `<h1>` por página.
- [ ] **Optimización de Imágenes:**
  - Conversión a formato `.webp` / `.avif`.
  - Atributos `width` y `height` definidos en cada etiqueta `<img>`.
  - Atributo `loading="lazy"` en todas las imágenes bajo el pliegue (below-the-fold).
- [ ] **Core Web Vitals Targets:**
  - LCP (Largest Contentful Paint) < 1.8 segundos.
  - INP (Interaction to Next Paint) < 100 milisegundos.
  - CLS (Cumulative Layout Shift) < 0.05 (Ideal: 0.00).
- [ ] **Archivos de Control:**
  - `robots.txt` optimizado permitiendo el rastreo de todas las secciones públicas y enlazando al sitemap.
  - `sitemap.xml` dinámico y organizado por prioridad (`/` 1.0, `/menu/*` 0.9, `/catering/*` 0.9, `/locations/*` 0.8).
- [ ] **Tracking y Medición de Conversiones (GA4 & GTM):**
  - Evento `click_to_call`: Clics en el teléfono `732-669-7581`.
  - Evento `menu_view`: Interacción con secciones de menú.
  - Evento `catering_rfp_submit`: Envío de formulario de cotización de catering.
  - Evento `get_directions`: Clics en el mapa / botón de ruta hacia 238 Inman Ave.

### Implementación del Código Schema.org (JSON-LD para Home):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.estimescafe.com/#restaurant",
  "name": "Estime's Café",
  "image": [
    "https://www.estimescafe.com/images/estimes-cafe-exterior.webp",
    "https://www.estimescafe.com/images/lemon-ricotta-pancakes.webp",
    "https://www.estimescafe.com/images/shrimp-and-grits.webp"
  ],
  "url": "https://www.estimescafe.com",
  "telephone": "+1-732-669-7581",
  "priceRange": "$$",
  "servesCuisine": [
    "American",
    "Breakfast",
    "Brunch",
    "Haitian",
    "Caribbean"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "238 Inman Avenue",
    "addressLocality": "Colonia",
    "addressRegion": "NJ",
    "postalCode": "07067",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.5989,
    "longitude": -74.3248
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "15:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "hasMenu": "https://www.estimescafe.com/menu/",
  "acceptsReservations": "False",
  "founder": {
    "@type": "Person",
    "name": "Duke Estime",
    "jobTitle": "Executive Chef"
  },
  "areaServed": [
    { "@type": "City", "name": "Colonia" },
    { "@type": "City", "name": "Woodbridge" },
    { "@type": "City", "name": "Clark" },
    { "@type": "City", "name": "Rahway" },
    { "@type": "City", "name": "Edison" },
    { "@type": "City", "name": "Westfield" }
  ]
}
</script>
```

---

## Fase 2: Expansión Local, Menús & Catering (Semanas 5 - 12)

### Objetivos:
- Lanzar las páginas de categoría de menú en HTML completo.
- Desplegar el Silo de Catering B2B (`/catering/*`) con captación activa de solicitudes.
- Publicar la página central de ubicación física (`/locations/colonia-nj/`) con mapa interactivo, galería y directrices NAP.
- Lanzar el blog con los primeros 4 artículos de alto valor E-E-A-T.

### Acciones Específicas:
1. **Páginas de Menú:** Redactar descripciones sensoriales y ricas en palabras clave para cada plato (Lemon Ricotta Pancakes, Amaretto Brioche, The Mayor, Haitian Spicy Omelet).
2. **Página de Ubicación Física (Colonia Hub):**
   - Integración completa de Google Maps Embed y Schema `GeoCoordinates` (238 Inman Ave).
   - Horarios actualizados, facilidades de aparcamiento, fotos del local y testimonios de la comunidad local.
   - Enlace directo con Google Business Profile para reforzar señales de proximidad.
3. **Campaña de Generación de Reseñas de Google (Review Velocity):**
   - Implementar código QR en las mesas y en el ticket de compra enlazando a: `https://g.page/r/[ID_GOOGLE]/review`.
   - Instruir al personal para solicitar reseñas mencionando platos favoritos (esto entrena el algoritmo de Google Maps con keywords como *"best lemon ricotta pancakes in Colonia"*).

---

## Fase 3: Escalamiento de Autoridad, B2B Outreach & Link Building Local (Semanas 13 - 24)

### Objetivos:
- Construir citas locales y menciones en medios de New Jersey.
- Campaña de captación de catering para oficinas y corporaciones.
- Optimización continua de tasa de conversión (CRO).

### Acciones Específicas:
1. **Construcción de Citaciones Locales (Local Citations):**
   - Registrar y verificar NAP exacto en: Yelp, Apple Maps, Bing Places, TripAdvisor, YellowPages, Foursquare, Restaurantji, CentralJersey.com, Woodbridge Chamber of Commerce.
2. **Estrategia de Enlaces Locales (Local Link Building):**
   - Conectar con blogs de comida de NJ (e.g., *NJ Monthly*, *Jersey Bites*, *Best of NJ*).
   - Patrocinio de eventos comunitarios en Colonia / Woodbridge (equipos deportivos juveniles, ferias escolares).
3. **Outreach de Catering Corporativo:**
   - Prospección directa en LinkedIn / Email a gerentes de oficina (Office Managers / HR) en parques corporativos de Edison (Raritan Center), Woodbridge y Clark con muestras de catering o menús descargables.

---

## Fase 4: Dominio del Mercado, Optimización IA & Retención (Meses 7 - 12)

### Objetivos:
- Consolidar la posición #1 en el Local 3-Pack de Google Maps para `brunch near me` y `breakfast near me` en Colonia y alrededores.
- Dominar las recomendaciones de IA (ChatGPT Search, Perplexity, Google AI Overviews).
- Escalar el flujo de catering a más de 50 eventos/pedidos mensuales recurrentes.

### Acciones Específicas:
1. **Auditoría de Deriva SEO (SEO Drift & Health Check):**
   - Monitorear indexación en Google Search Console, identificar canibalizaciones de palabras clave y actualizar contenidos desactualizados.
2. **Expansión Editorial Estacional:**
   - Publicación de ofertas para el Día de la Madre, Día del Padre, Graduaciones, Fiestas Navideñas corporativas.
3. **Monitoreo de GEO / Motores de IA:**
   - Auditar periódicamente cómo los asistentes de inteligencia artificial responden sobre recomendaciones de desayuno y catering en la zona, ajustando las secciones de FAQ y entidades semánticas del sitio.
