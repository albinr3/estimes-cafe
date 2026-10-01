# Medición y atribución de Estime's Café

Actualizado: 2026-10-01. Zona horaria de la propiedad: `America/New_York`. Esta es la referencia para interpretar GA4, GBP y los portales de pedidos. La [guía de UTMs](UTM_PLAYBOOK.md) contiene la convención de enlaces y el [registro](utm_registry.json) guarda las URLs exactas.

## Configuración y acceso

| Elemento | Estado comprobado |
| --- | --- |
| Propiedad GA4 | `properties/556917509` (`EstimesCafe`) |
| Flujo web | `properties/556917509/dataStreams/15896458793`, ID `G-WZTNVR2FKQ` |
| Retención de eventos y usuarios | 14 meses; eventos cambiados desde 2 meses el 2026-10-01 |
| Modelo de atribución | Basado en datos para canales pagados y orgánicos; ventana de adquisición de 30 días y de otros eventos clave de 90 días |
| Medición automática | Clics salientes, cambios de página e interacciones de formularios activados |
| MCP | `analytics_estime_read` para informes y `analytics_estime_admin` para cambios limitados a esta propiedad; la clave de servicio permanece fuera del proyecto |
| Auditoría de administración | [ga4-admin-changes.jsonl](ga4-admin-changes.jsonl), con fecha UTC y estado anterior/posterior |

La cuenta de servicio autorizada es `ga-mcp-reader@dukesteak.iam.gserviceaccount.com`. El cliente `ga4_admin_client.py` invoca el MCP editable por `stdio`; sus operaciones crean solo las audiencias aprobadas y archivan solo los ocho nombres autorizados en Estime. No se cambió el modelo ni sus ventanas durante la reorganización del 2026-10-01.

## Qué mide cada evento

| Evento | Disparador | Datos enviados | Interpretación |
| --- | --- | --- | --- |
| `page_view` | Carga o cambio de página | Parámetros automáticos de GA4 | Visita a una página, no intención ni compra |
| `order_platform_click` | Clic en un botón de DoorDash, Uber Eats o Grubhub | `platform`, `page_path` | Intención de pedido; no confirma compra |
| `click_call` | Clic en un enlace `tel:` | `page_path` | Intención de llamada; no confirma conexión |
| `contact_email_intent` | Clic `mailto:` o formulario válido que abre la aplicación de correo | `contact_type`, `page_path` | Intención de contacto; no confirma entrega |
| `purchase` | Solo una orden confirmada por un proveedor, cuando exista integración fiable | `transaction_id`, `value`, `currency`, proveedor | Compra confirmada, deduplicada por ID de orden |

Los tres eventos de intención están implementados en el sitio. `platform` y `contact_type` están registrados como dimensiones personalizadas de evento. `page_path` se envía en los eventos; para analizar páginas puede usarse la dimensión estándar de GA4. Los eventos personalizados no envían nombres, correos, teléfonos, direcciones, contenido del formulario ni URL completa de `mailto:`.

El clic saliente automático de GA4 también crea un evento genérico `click` cuando alguien sale hacia un portal de pedidos. Para contar **intención de pedido** se usa solo `order_platform_click`; sumar ambos eventos duplicaría el mismo gesto. `order_platform_click` y `click_call` son eventos clave configurados una vez por sesión. También existen los eventos clave `purchase`, `close_convert_lead` y `qualify_lead`, pero su existencia en la configuración no demuestra que se hayan recibido órdenes o leads. No se enviará `generate_lead` hasta confirmar que un formulario entregó el mensaje al negocio.

## Audiencias activas

Una audiencia agrupa usuarios que cumplen condiciones. Sus tamaños no son recuentos de eventos; estas audiencias pueden solaparse y no deben sumarse. La duración de pertenencia (90 o 180 días) es distinta de la retención de datos de 14 meses. `All Users` y `Purchasers` son audiencias predeterminadas de GA4 de 540 días.

| Audiencia | Duración | Condición de entrada |
| --- | ---: | --- |
| `All Users` | 540 días | Todos los usuarios, predeterminada |
| `Purchasers` | 540 días | Compra según GA4, predeterminada; aún sin integración de órdenes de proveedores |
| `Website visitors - 180 days` | 180 días | `page_view` |
| `Menu visitors - 180 days` | 180 días | `page_view` de `/menu/` |
| `Order page visitors - 180 days` | 180 días | `page_view` de `/order-online/` |
| `Catering visitors - 180 days` | 180 días | `page_view` de `/catering/` |
| `Private events visitors - 180 days` | 180 días | `page_view` de `/private-events/` |
| `Order intent - 180 days` | 180 días | `order_platform_click` |
| `Contact intent - 180 days` | 180 días | `click_call` o `contact_email_intent` |
| `Organic Search Visitors - 90 days` | 90 días | Sesión cuyo grupo de canal es `Organic Search` |
| `Google Organic + GBP Visitors - 90 days` | 90 días | Misma sesión `google / organic`, o fuente histórica `google_business_profile / organic` con campaña `gbp_post` |
| `GBP Website Visitors - 90 days` | 90 días | Misma sesión con `google / organic` y campaña que empieza por `gbp`, o `google_business_profile / organic / gbp_post` |
| `High Intent Visitors - 90 days` | 90 días | Vista de `/menu/`, `/order-online/`, `/catering/`, `/private-events/` o `/contact/` |
| `Order or Contact Intent - 90 days` | 90 días | `order_platform_click`, `click_call` o `contact_email_intent` |

El 2026-10-01 se crearon y verificaron las cinco audiencias de 90 días de las últimas cinco filas. Después se archivaron ocho segmentos redundantes de 30/90 días: visitas web 30/90, menú 30, pedidos 30, catering 90, eventos privados 90, intención de pedido 90 e intención de contacto 90. Quedaron **14 audiencias activas**. El archivo de auditoría conserva las definiciones anteriores. Las audiencias de búsqueda y GBP se solapan cuando una sesión cumple ambas reglas. Todavía no existe vinculación de Google Ads confirmada para activar estas audiencias en campañas.

No se crearán audiencias de `Lead / Converter` ni `Abandoners` hasta disponer, respectivamente, de leads o compras confirmados y de un inicio y fin de checkout medibles.

## Informes y conciliación

| Pregunta | Fuente y medida | Límite |
| --- | --- | --- |
| ¿Cuántas visitas llegaron y desde dónde? | GA4, **Adquisición de tráfico**: sesiones por fuente/medio/campaña de sesión; revisar páginas de destino por separado | Las UTMs identifican una llegada a la web, no una orden |
| ¿Cuántas personas mostraron intención de pedido? | GA4: eventos `order_platform_click`, segmentados por `platform` y página | La persona puede no terminar el checkout; un usuario puede hacer varios clics |
| ¿Cuántas personas mostraron intención de contacto? | GA4: `click_call` y `contact_email_intent`, separados | Una llamada puede no conectar y un correo puede no enviarse |
| ¿Cuántas órdenes y ventas hubo? | Exportación del portal correspondiente, con fecha, estado, ID y valor de cada orden | No atribuirlas individualmente a GA4 sin identificador compartido |
| ¿Cuántas solicitudes de indicaciones hubo? | Estadísticas de Google Business Profile | Los tres enlaces directos a Maps del calendario no crean visitas web en GA4 |

Para conciliar, usar el mismo periodo en zona `America/New_York` y una fila por `proveedor + ID de orden`. Separar órdenes confirmadas, canceladas y reembolsadas, y calcular ventas netas con las reglas del portal. Comparar los totales del proveedor con sus exportaciones antes de enviar cualquier `purchase`. Una futura integración debe evitar repetir `transaction_id` y comprobar cómo trata cambios de estado y reembolsos. Mientras no exista unión a nivel de orden, presentar ventas del portal y clics del sitio en columnas separadas; **ventas del portal ÷ clics de GA4 no es una tasa de conversión a compra**.

## Verificación y cambios pendientes

- El 2026-10-01 se observaron en GA4 Realtime tres `order_platform_click` por tres clics de prueba distintos, además de tres `click` salientes automáticos. También se observó un `click_call` y un `contact_email_intent`. Esas pruebas no hicieron pedidos, llamadas conectadas ni envíos de correo.
- La lectura posterior del MCP el 2026-10-01 confirmó 14 audiencias activas, retención de 14 meses y modelo/ventanas sin cambios. Revisar el desglose de `platform` y `contact_type` en informes estándar tras el procesamiento de GA4.
- El enlace principal de GBP figura en el conector como `https://www.estimescafe.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`; Google muestra una edición pendiente de revisión. Una visita con navegador de prueba el 2026-10-01 abrió esa URL, conservó los tres parámetros y produjo un `page_view` hacia el endpoint de GA4 con respuesta HTTP 204. La prueba HTTP de una URL de publicación futura también devolvió 200 y conservó sus cuatro UTMs. El informe procesado de GA4 aún debe confirmar la campaña `gbp` y Google debe terminar de revisar el enlace público.
- En esa visita de navegador, la página `/order-online/` mostró tres botones de plataforma; un clic real produjo un único envío específico `order_platform_click` con respuesta HTTP 204. El informe Realtime de la Data API no mostraba ese clic al último chequeo, por lo que falta corroborarlo en el informe procesado. Una respuesta 204 de recopilación no demuestra por sí sola la atribución final.
- Probar un enlace de publicación futura después de publicarla y revisar que sus UTMs sobrevivan a cualquier redirección. Los borradores del calendario no generan tráfico real.
- Siguen pendientes los accesos a los portales de DoorDash, Uber Eats y Grubhub. Revisar sus exportaciones, etiquetas de canal, opciones de pedido directo, API/webhooks y costos antes de decidir una integración o modificar botones de pedido.

### Registro de cambios

| Fecha | Cambio | Evidencia |
| --- | --- | --- |
| 2026-10-01 | Retención de eventos: 2 → 14 meses; usuario ya en 14 meses | Lectura posterior de GA4 y `ga4-admin-changes.jsonl` |
| 2026-10-01 | Eventos de intención desplegados y pruebas en Realtime | Tres clics de plataforma, un teléfono y un correo observados |
| 2026-10-01 | Siete audiencias de 180 días conservadas | Inventario GA4 leído por MCP |
| 2026-10-01 | Cinco audiencias nuevas de 90 días; ocho redundantes archivadas | Lecturas por MCP y `ga4-admin-changes.jsonl` |
| 2026-10-01 | Enlace principal GBP configurado y 45 URLs web futuras del calendario normalizadas | Conector GBP, calendario y `utm_registry.py validate` |
