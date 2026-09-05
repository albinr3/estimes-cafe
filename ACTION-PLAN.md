# Plan de acción SEO local

Este plan procede de la auditoría de código del 2026-08-28. No presupone resultados del sitio publicado.

| Prioridad | Acción | Responsable sugerido | Criterio de aceptación |
| --- | --- | --- | --- |
| Alta | Conectar los formularios de Contact y Private Events a una entrega real | Desarrollo | No se muestra éxito hasta recibir 2xx; error útil y fallback telefónico en fallos |
| Alta | Centralizar NAP y coordenadas en `src/lib/business.ts` | Desarrollo | Cada JSON-LD del restaurante usa idéntico nombre, teléfono, dirección y geo |
| Alta | Verificar calificación, conteo y cada reseña mostrada | Negocio / contenido | Todo valor declarado tiene fuente, fecha de revisión y permiso cuando aplique |
| Media | Configurar Resend en el entorno de producción y probar catering | Desarrollo / operaciones | Una solicitud de prueba llega al buzón correcto con Reply-To del cliente |
| Media | Instalar GA4/GTM y eventos de conversión | Analítica | Se registran envíos, clics `tel:`, clics a plataformas de pedido y CTA de catering |
| Media | Añadir `lastModified` al sitemap cuando haya fechas reales | Desarrollo / contenido | Las URLs modificadas reflejan su fecha editorial verificable |
| Media | Crear `llms.txt` mantenido editorialmente | Contenido | Resume NAP, horario, páginas canónicas y fuente del menú sin contradicciones |
| Baja | Corregir ortografía y uniformar nombres del menú | Contenido / negocio | El catálogo web coincide con el menú aprobado por el restaurante |

## Checklist posterior al despliegue

1. Comprobar `https://dominio/robots.txt`, `https://dominio/sitemap.xml` y los canonicals renderizados.
2. Enviar el sitemap a Search Console y solicitar indexación de inicio, menú, catering y eventos privados.
3. Validar el JSON-LD con el validador Schema.org y Rich Results Test; corregir solo errores reales y no forzar resultados de estrellas.
4. Ejecutar PageSpeed Insights móvil y escritorio, y corregir los CWV basándose en mediciones reales.
5. Verificar que el nombre, dirección, teléfono, horario y coordenadas coincidan con Google Business Profile y los directorios que el negocio controle.
