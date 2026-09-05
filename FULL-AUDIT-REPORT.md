# Auditoría SEO local — Estime's Café

**Fecha:** 2026-08-28  
**Alcance:** código fuente, configuración y compilación de producción de este repositorio Next.js. No se consultó el sitio publicado, Google Search Console, Google Business Profile, analítica, rankings ni APIs externas.

## Resumen ejecutivo

**SEO Health Score local: 85/100**

El proyecto tiene una base SEO local sólida: compila en producción, cuenta con ocho páginas indexables, `robots.ts`, `sitemap.ts`, canonicals, metadatos sociales, datos estructurados y uso eficiente de `next/image`. No se detectó un bloqueo de indexación en el código.

Los riesgos principales no son de rastreo: dos formularios confirman envíos sin entregarlos, el mismo restaurante tiene coordenadas distintas en JSON-LD y las valoraciones/reseñas declaradas deben coincidir exactamente con evidencia actual. La puntuación mide la implementación local, no el rendimiento real en buscadores.

| Área | Puntuación | Evidencia local |
| --- | ---: | --- |
| Técnico | 90 | Build exitoso, sitemap, robots, redirección permanente y canonicals |
| Contenido | 85 | Páginas de intención local y comercial, menú completo y FAQs |
| On-page | 90 | Títulos, descripciones, H1, Open Graph y Twitter Cards en las rutas principales |
| Schema | 70 | Cobertura rica, pero inconsistencias de entidad y reseñas que deben verificarse |
| Rendimiento | 88 | `next/image`, AVIF/WebP y activos optimizados; sin medición CWV real |
| Preparación para IA | 75 | Entidades, FAQs, menú y contenido estructurado; falta `llms.txt` opcional |
| Imágenes | 94 | Alt descriptivos, imágenes sociales 1200×630 y activos pequeños |

## Inventario indexable

`src/app/sitemap.ts` lista ocho URLs canónicas: `/`, `/menu`, `/catering`, `/private-events`, `/order-online`, `/about`, `/reviews` y `/contact`. `src/app/meet-the-chef/page.tsx` ejecuta una redirección permanente a `/about`, por lo que evita contenido duplicado. La ruta API no entra en el sitemap.

## Hallazgos priorizados

### Alta prioridad

1. **Los formularios de contacto y eventos privados muestran éxito sin enviar datos.**
   - `ContactPageContent.tsx` usa un temporizador de 700 ms y `PrivateEventsContent.tsx` solo activa `formSubmitted`; ninguno realiza `fetch` ni entrega la solicitud.
   - Impacto: se pierden conversiones de tráfico orgánico y se hace una promesa de respuesta que el negocio no puede cumplir.
   - Acción: crear un endpoint validado equivalente a `/api/catering-leads` o reutilizarlo con tipo de solicitud; mostrar éxito únicamente después de una respuesta 2xx.

2. **Coordenadas contradictorias para el mismo `@id` de restaurante.**
   - El schema global, About y Contact usan `40.6003432, -74.3126004`; Order Online usa `40.59868, -74.32115` para `https://www.estimescafe.com/#restaurant`.
   - Impacto: señales NAP/geo inconsistentes que reducen la confianza de la entidad local.
   - Acción: definir las coordenadas canónicas en `src/lib/business.ts` y reutilizarlas en todos los JSON-LD.

3. **Las reseñas y la calificación requieren verificación editorial antes del despliegue.**
   - Se declaran `4.8` y `180` reseñas en el schema global y de `/reviews`, además de reseñas con nombre y fecha.
   - Impacto: si no representan pruebas actuales y publicables, el marcado es inexacto; además, Google normalmente no muestra estrellas de reseñas autocontroladas por el propio negocio.
   - Acción: conservar solo datos verificables, actualizar el conteo mediante un proceso editorial y no depender de este marcado para rich results.

### Prioridad media

4. **No se detectó instrumentación de analítica, eventos de conversión ni verificación de Search Console.**
   - La búsqueda local no encontró GA4, Google Tag Manager, `gtag`, `G-` ni verificación de Search Console.
   - Acción: instalar medición con consentimiento cuando corresponda; registrar clics en teléfono, pedidos externos y formularios enviados. Verificar Search Console tras el despliegue.

5. **El sitemap no comunica fechas de actualización.**
   - `sitemap.ts` genera URL únicamente. Es válido, pero no informa cambios de menú, precios o páginas.
   - Acción: añadir `lastModified` para contenido que tenga una fuente editorial confiable; no inventar fechas ni frecuencias.

6. **Falta un archivo `llms.txt` opcional.**
   - Hay datos de entidad, FAQ y menú, que ya ayudan a la citabilidad, pero no existe una guía concisa para sistemas de IA.
   - Acción: añadirlo solo si se mantiene con los mismos NAP, horario, menú y enlaces canónicos; no sustituye `robots.txt` ni SEO técnico.

7. **El envío de catering depende de configuración de producción.**
   - `/api/catering-leads` está bien validado y devuelve un error claro si faltan `RESEND_API_KEY` y `CATERING_LEAD_FROM_EMAIL`, pero la auditoría no pudo inspeccionar secretos.
   - Acción: configurar las variables en el hosting, usar un remitente de dominio verificado y realizar una prueba controlada posterior al despliegue.

### Prioridad baja

8. **El campo `metadata.keywords` no es una palanca de ranking moderna.**
   - No daña el sitio, pero mantener listas largas de keywords aporta poco frente a títulos, contenido y señales locales verificables.

9. **Revisión editorial de ortografía y descripciones del menú.**
   - La fuente de menú contiene variantes como “Siracha”, “Frech” y “Spatuala”. No bloquean la indexación, pero conviene revisar la nomenclatura aprobada del restaurante antes de publicarla.

## Validaciones superadas

- `npm run build` terminó correctamente: compilación, type-check, generación estática y trazas.
- `metadataBase`, canonical raíz, robots index/follow y directiva de sitemap están configurados.
- Todas las páginas del sitemap tienen metadata específica y canonical propio.
- Los Open Graph de las páginas comerciales usan imágenes sociales locales de 1200×630; los archivos existen.
- Los recursos de imagen pesan aproximadamente entre 32 KB y 321 KB y se sirven mediante `next/image` donde corresponde.
- El menú visible y su JSON-LD se alimentan de `NORMAL_MENU_DATA`; los precios decimales se preservan con `item.price.replace("$", "")` y el ítem “Juice — $6” está presente.
- `hasMenu` del schema global apunta a `/menu`.

## Limitaciones

No es posible determinar desde el repositorio: estado real de indexación, HTTP headers del hosting, redirects de dominio, CWV de usuarios reales, cobertura de sitemap en Search Console, estado del perfil de negocio, reseñas actuales, NAP en directorios, enlaces externos ni rankings. Esos puntos requieren una auditoría posterior al despliegue.
