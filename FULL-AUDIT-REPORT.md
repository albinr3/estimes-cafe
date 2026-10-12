# Auditoría SEO Completa y Verificación en Vivo — Estime's Café

**Fecha de Auditoría:** 11 de Octubre de 2026  
**URL Auditada:** [https://www.estimescafe.com/](https://www.estimescafe.com/)  
**Dominio:** `estimescafe.com`  
**Tipo de Negocio:** Negocio de Servicio Local (Restaurante / Brunch / Catering)  
**Ubicación:** 238 Inman Ave, Colonia, NJ 07067  
**Fuentes de Datos:** Rastreo en vivo del servidor web (LiteSpeed/Hostinger), Google Search Console (inspección de URLs), Google Analytics 4 (Propiedad 556917509), Google Business Profile / Grid My Business (604 reseñas), Ubersuggest SERP & Backlinks, y análisis del código Next.js.

---

## 1. Resumen Ejecutivo

### **SEO Health Score General: 84 / 100**

El sitio web público de **Estime's Café** presenta una arquitectura SEO técnica limpia, saludable y con tráfico orgánico recurrente comprobado. Cuenta con ocho páginas indexables en `sitemap.xml`, todas con respuesta HTTP 200 OK, etiquetas canonical 100% alineadas con barra final (`/menu/`, `/about/`, etc.), `robots.txt` válido, metadatos sociales Open Graph y Twitter Cards, y datos estructurados Schema.org consistentes. La inspección de Google Search Console confirma que la versión canonical declarada por el sitio coincide exactamente con la canonical seleccionada por Google.

Además, el perfil local del restaurante es extraordinariamente fuerte, con **4.8 estrellas y 604 reseñas en Google**, logrando posiciones privilegiadas en búsquedas como *"estimes cafe menu"* (#1) y *"colonia restaurants"* (#2).

Las áreas identificadas para optimizar el rendimiento y acelerar el crecimiento orgánico son:
1. **Cadena de Redirección de 2 Saltos en HTTP:** `http://estimescafe.com` salta primero a `https://estimescafe.com/` y luego a `https://www.estimescafe.com/`, sumando más de **1.1 segundos de latencia** en conexiones móviles.
2. **Rendimiento Móvil (Core Web Vitals):** Mientras que en Desktop la velocidad es excelente (LCP 962 ms, CLS 0.000), en Mobile el LCP sube a 6.4 s debido al retardo de redirecciones acumuladas y la carga de la imagen Hero en exportación estática sin compresión dinámica por viewport.
3. **Encabezados de Seguridad Faltantes en el Servidor:** El servidor LiteSpeed en Hostinger no emite HSTS (`Strict-Transport-Security`), `X-Content-Type-Options`, `X-Frame-Options` ni `Referrer-Policy`.
4. **Metadatos y Páginas con Contenido Fino:** El título de `/about/` supera los 60 caracteres (80 caracteres), 6 descripciones superan los 160 caracteres provocando truncamiento en las SERPs, y `/contact/` (87 palabras) y `/reviews/` (107 palabras) tienen contenido delgado susceptible de enriquecimiento.
5. **Protocolo del Enlace en Google Business Profile:** En la ficha de Google Business Profile, el sitio web figura como `http://` en lugar de `https://www.estimescafe.com/`, provocando un salto innecesario para los clientes locales.

---

## 2. Desglose de Puntuación por Categoría

| Categoría | Puntuación | Peso | Contribución | Estado |
|---|:---:|:---:|:---:|:---:|
| **SEO Técnico** | **92 / 100** | 22% | 20.24 | **Excelente:** Canonicals y sitemap 100% alineados con 200 OK y confirmados por GSC. |
| **Calidad de Contenido** | **76 / 100** | 23% | 17.48 | Sólido en portada y menú; oportunidad de expandir Contact y Reviews. |
| **SEO On-Page** | **85 / 100** | 20% | 17.00 | H1 únicos por ruta; títulos y descripciones a ajustar a longitud óptima. |
| **Schema / Datos Estructurados** | **90 / 100** | 10% | 9.00 | Grafo unificado (`Restaurant`, `WebSite`, `FAQPage`), NAP y geo impecables. |
| **Rendimiento (Core Web Vitals)** | **72 / 100** | 10% | 7.20 | Rápido en Desktop (LCP < 1s); LCP mejorable en dispositivos móviles. |
| **Preparación para IA (GEO)** | **88 / 100** | 10% | 8.80 | `llms.txt` activo y verificado en 200 OK; presencia de citas en asistentes de IA. |
| **Imágenes** | **80 / 100** | 5% | 4.00 | Formatos WebP/AVIF y `alt` ricos; optimizar versión para pantallas pequeñas. |
| **TOTAL** | **84 / 100** | **100%** | **83.72** | **MUY BUENO (Base sólida con mejoras puntuales de velocidad y SERP)** |

---

## 3. Verificación de Indexabilidad y Canonicals (Sitio Publicado)

Rastreo directo del HTML servido en producción por LiteSpeed:

| URL Solicitada | Estado HTTP | Canonical Renderizado en HTML | Estado en Google Search Console |
|---|:---:|---|---|
| `https://www.estimescafe.com/` | **200 OK** | `https://www.estimescafe.com/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/menu/` | **200 OK** | `https://www.estimescafe.com/menu/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/catering/` | **200 OK** | `https://www.estimescafe.com/catering/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/private-events/` | **200 OK** | `https://www.estimescafe.com/private-events/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/order-online/` | **200 OK** | `https://www.estimescafe.com/order-online/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/about/` | **200 OK** | `https://www.estimescafe.com/about/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/reviews/` | **200 OK** | `https://www.estimescafe.com/reviews/` | Declarada y Seleccionada por Google |
| `https://www.estimescafe.com/contact/` | **200 OK** | `https://www.estimescafe.com/contact/` | Declarada y Seleccionada por Google |

**Comportamiento confirmado:**  
1. Next.js (`trailingSlash: true`) compila y añade automáticamente la barra final en las etiquetas `<link rel="canonical">` de cada página HTML generada en `/out/`.
2. Las solicitudes sin barra final (p. ej. `/menu`) redirigen de forma limpia vía 301 a la URL canónica `/menu/`, la cual responde 200 OK con su canonical auto-referenciada.
3. No existe ningún conflicto canónico ni bucle de indexación en el sitio publicado.

---

## 4. Rendimiento Real en Buscadores y Analítica (Datos en Vivo)

### A. Google Analytics 4 (Últimos 30 Días — Propiedad 556917509)
- **Sesiones Totales:** 577 sesiones (448 usuarios únicos).
- **Búsqueda Orgánica (Google/Bing):** **270 sesiones** (46.8% de todo el tráfico) | **203 usuarios** | **501 páginas vistas** | **3 conversiones directas registradas**.
- **Tráfico Directo:** 237 sesiones | 192 usuarios | 385 páginas vistas | 7 conversiones.
- **Asistentes de IA (ChatGPT, Perplexity, etc.):** **5 sesiones** | 5 usuarios | 12 páginas vistas (Confirmación de citabilidad en IA).
- **Tráfico Referido y Social:** 17 sesiones de referencia | 12 sesiones de redes sociales.

**Páginas con Mayor Tráfico Orgánico:**
1. `/` (Portada): 499 páginas vistas (334 usuarios) — Tasa de rebote: 40.9%
2. `/menu/`: 293 páginas vistas (214 usuarios) — Tasa de rebote: 25.9% (Muy alta interacción)
3. `/school/`: 68 páginas vistas (45 usuarios) — *Página utilitaria configurada intencionalmente con `noindex`.*
4. `/catering/`: 37 páginas vistas (28 usuarios) — Tasa de rebote: 25.0%
5. `/order-online/`: 35 páginas vistas (27 usuarios) — Tasa de rebote: 22.6%
6. `/private-events/`: 25 páginas vistas (18 usuarios) — Tasa de rebote: 21.1%
7. `/about/`: 24 páginas vistas (19 usuarios)
8. `/contact/`: 8 páginas vistas (5 usuarios)
9. `/reviews/`: 1 página vista

---

### B. Posicionamiento en Palabras Clave (SERP Ubersuggest)
El dominio cuenta con presencia orgánica sólida en búsquedas locales de alta intención:
- **`estimes cafe menu`**: **Posición #1** (Volumen: 170 | Tráfico estimado: 86)
- **`colonia restaurants`**: **Posición #2** (Volumen: 70 | SD: 23)
- **`estimes cafe colonia nj`**: **Posición #3** (Volumen: 40 | SD: 26)
- **`restaurants colonia nj`**: **Posición #5** (Volumen: 260 | SD: 25)
- **`restaurants near colonia nj`**: **Posición #6** (Volumen: 210 | SD: 25)
- **`colonia nj restaurants`**: **Posición #8** (Volumen: 260 | SD: 25)

---

### C. Google Business Profile & Geo-Grid (Grid My Business)
- **Nombre:** *Estime's Café | Breakfast, Brunch & Lunch*
- **Calificación:** **4.8 Estrellas** | **604 Reseñas Reales**
- **GMB Health Score:** **77 / 100**
- **Posiciones Geo-Grid Locales (Radio 5-10 millas):**
  - `brunch near me`: Posición promedio **12.48**
  - `breakfast near me`: Posición promedio **15.88**
  - `lunch near me`: Posición promedio **18.56**
  - `catering brunch near me`: Posición promedio **18.43**
  - `catering lunch near me`: Posición promedio **20.44**
- **Oportunidad en Perfil:** En Google Business Profile, el enlace web está registrado con `http://` (`http://www.estimescafe.com/`). Conviene actualizarlo a `https://www.estimescafe.com/` para eliminar el salto de seguridad a los visitantes.

---

### D. Perfil de Backlinks
- **Domain Authority (DA):** **8 / 100**
- **Backlinks Totales:** 302 enlaces | **Dominios de Referencia:** 128
- **Enlaces Dofollow:** 211 | Nofollow: 91
- **Recomendación:** La autoridad del dominio tiene un gran margen de crecimiento captando menciones y enlaces locales de calidad (asociaciones comerciales de Colonia/Woodbridge, guías gastronómicas de NJ y blogs culinarios locales).

---

## 5. Rendimiento y Core Web Vitals

* **Desktop:**
  * First Contentful Paint (FCP): **666 ms** (Excelente)
  * Largest Contentful Paint (LCP): **962 ms** (Excelente, < 2.5 s)
  * Cumulative Layout Shift (CLS): **0.000** (Perfecto)
  * Total Blocking Time (TBT): **0 ms** (Perfecto)
* **Mobile:**
  * FCP: **4.0 s**
  * LCP: **6.4 s** (Oportunidad de mejora)
  * CLS: **0.014** (Aprobado, muy por debajo del umbral de 0.1)
  * TBT: **11 ms** (Excelente, casi sin bloqueo de CPU)
  * **Causas del retardo en móvil:**
    1. Cadena de redirección HTTP de 2 saltos que añade hasta 1.1 s de latencia previa.
    2. Peso de la imagen Hero (182 KB) entregada a resolución completa sin variante reducida para viewports móviles.

---

## 6. Schema Markup & Preparación para IA (GEO)

- **Grafo JSON-LD:** La portada implementa un `@graph` que combina `Restaurant`, `CafeOrCoffeeShop`, `LocalBusiness`, `WebSite` y `FAQPage`.
- **Consistencia NAP:** Coordenadas unificadas (`40.60034991904395, -74.31259870657125`), teléfono `+1-732-669-7581` y dirección `238 Inman Avenue, Colonia, NJ 07067`.
- **Buenas Prácticas:** Se removieron las reseñas y calificaciones autocontroladas del schema para respetar estrictamente las directrices de Google.
- **Archivo `llms.txt`:** Verificado y activo en `https://www.estimescafe.com/llms.txt` (código 200 OK) con la información del restaurante, horarios, menú y páginas canónicas. Los datos de GA4 demuestran que ya atrae consultas y citas de sistemas de IA generativa.

---

## 7. Plan de Acción Priorizado

### Alta Prioridad
1. **Redirección Canónica de 1 Salto en Hostinger:** Configurar en `.htaccess` para que `http://estimescafe.com` salte directamente a `https://www.estimescafe.com/` en un único paso 301, eliminando la latencia de 1.1 s en móviles.
2. **Actualizar Enlace en Google Business Profile:** Cambiar en el perfil de Google la URL de `http://...` a `https://www.estimescafe.com/`.
3. **Optimizar Título de `/about/`:** Reducir de 80 a 54 caracteres: *"Chef Duke Estime & Our Story | Estime's Café Colonia NJ"* para evitar que Google lo corte en los resultados.
4. **Encabezados de Seguridad en LiteSpeed:** Activar en `.htaccess` HSTS, X-Content-Type-Options y X-Frame-Options.

### Media Prioridad
5. **Ajustar Meta Descripciones Extensas:** Ajustar las descripciones de `/catering/`, `/about/` y `/contact/` a un rango de 145-155 caracteres.
6. **Enriquecer Páginas con Contenido Fino:**
   - **`/contact/`**: Añadir indicaciones de estacionamiento, transporte público y preguntas frecuentes de llegada.
   - **`/reviews/`**: Incluir menciones de prensa y testimonios destacados de clientes.
7. **Optimización de Imagen Hero en Pantallas Móviles:** Servir un activo de menor peso para pantallas < 640px para acelerar el LCP móvil.
