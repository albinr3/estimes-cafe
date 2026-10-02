# Guía de UTMs de Estime's Café

Actualizado: 2026-10-01. Usar esta convención cuando un enlace publicado **fuera** de `www.estimescafe.com` lleve a una página de la web. El [registro de enlaces](utm_registry.json) guarda los destinos y URLs exactos de GBP; el [documento de medición](MEASUREMENT.md) explica qué puede atribuirse a una visita o una orden.

## Diccionario

| Parámetro | Regla | Ejemplo |
| --- | --- | --- |
| `utm_source` | Plataforma concreta que envía la visita | `google`, `instagram`, `facebook`, `newsletter`, `qr`, nombre del colaborador |
| `utm_medium` | Tipo de canal, estable entre campañas | `organic`, `social`, `email`, `offline`, `referral` |
| `utm_campaign` | Iniciativa que se medirá junta | `gbp`, `gbp_post`, `catering_2026_q4` |
| `utm_content` | Pieza, ubicación o versión del enlace; obligatorio para publicaciones GBP | `week_05_weekend_brunch_experience`, `bio`, `story_01` |
| `utm_term` | Palabra clave cuando tenga una utilidad real, normalmente campañas pagadas | `brunch_colonia` |

Los tres primeros parámetros son obligatorios en enlaces etiquetados. Escribir valores en minúsculas, sin espacios, tildes ni datos personales; separar palabras con `_`. Mantener el mismo `utm_campaign` para las piezas de una iniciativa y variar `utm_content` para distinguirlas. No añadir nombres, correos, teléfonos, direcciones, identificadores de clientes ni texto de formularios. Google distingue mayúsculas de minúsculas en los valores UTM y [recomienda usar fuente, medio y campaña juntos](https://support.google.com/analytics/answer/10917952?hl=es).

## Enlaces aprobados de GBP

| Ubicación | Estructura | Estado |
| --- | --- | --- |
| Botón «Website» del perfil | `https://www.estimescafe.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` | Configurado en GBP; revisión de Google pendiente al 2026-10-01 |
| Enlace «Menu» del perfil | `https://www.estimescafe.com/menu?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=menu` | Listo para configurar en el campo de menú de GBP |
| Publicaciones web de semanas 1–4 | `google_business_profile / organic / gbp_post`, con `utm_content=week_XX_slug` | Publicadas; conservar URL histórica |
| Publicaciones web futuras | `google / organic / gbp_post`, con `utm_content=week_XX_slug` | 45 borradores actualizados en calendario |
| Semanas 8, 20 y 34 | Enlace directo a Google Maps sin UTMs | Borradores; medir solicitudes de indicaciones en GBP |

El valor histórico `google_business_profile` no se reescribe en publicaciones ya hechas. Las audiencias GBP de GA4 incluyen esa fuente cuando la campaña es `gbp_post`. El valor nuevo `google` mantiene una fuente coherente con el enlace principal; `gbp` y `gbp_post` distinguen el perfil de las publicaciones en los informes de campaña.

## Apple Business Connect / Apple Maps

| Ubicación | URL exacta | Estado |
| --- | --- | --- |
| Botón «Website» de la ficha | `https://www.estimescafe.com/?utm_source=apple_maps&utm_medium=organic&utm_campaign=apple_business_connect` | Listo para configurar en Apple Business Connect |

Este enlace se usa únicamente en la ficha de Apple Business Connect (visible en Apple Maps). No reutilizarlo en Google ni en enlaces internos. En GA4 se podrá comparar como `apple_maps / organic` y campaña `apple_business_connect`.

## Bing Places

| Ubicación | URL exacta | Estado |
| --- | --- | --- |
| Botón «Website» de la ficha | `https://www.estimescafe.com/?utm_source=bing_places&utm_medium=organic&utm_campaign=bing_places` | Listo para configurar en Bing Places for Business |
| Enlace «Menu» de la ficha | `https://www.estimescafe.com/menu?utm_source=bing_places&utm_medium=organic&utm_campaign=bing_places&utm_content=menu` | Listo para configurar en el campo de menú de Bing Places |
| Enlace «Order online» de la ficha | `https://www.estimescafe.com/order-online?utm_source=bing_places&utm_medium=organic&utm_campaign=bing_places&utm_content=order_online` | Listo para configurar en el campo de pedido en línea de Bing Places |

Este enlace se usa únicamente en la ficha de Bing Places. En GA4 se podrá comparar como `bing_places / organic` y campaña `bing_places`.

## Plantillas para otros canales

Estas son convenciones para **enlaces futuros**, no campañas que ya estén publicadas. Sustituir `campana_aaaa_qn` por un nombre concreto, por ejemplo `catering_2026_q4`, y registrar la URL antes de publicarla.

| Canal | Fuente / medio | Ejemplo de `utm_content` |
| --- | --- | --- |
| Instagram orgánico | `instagram / social` | `bio`, `story_01`, `post_01` |
| Facebook orgánico | `facebook / social` | `page_button`, `post_01` |
| Boletín de correo | `newsletter / email` | `header`, `body_cta` |
| Código QR impreso | `qr / offline` | `table_card`, `flyer_01` |
| Colaborador externo | nombre estable del colaborador / `referral` | `article`, `partner_page` |

En Google Ads, revisar primero la vinculación con GA4 y usar el [etiquetado automático](https://support.google.com/analytics/answer/10723132?hl=en). No fijar UTMs manuales sobre anuncios sin revisar esa configuración.

## Procedimiento de publicación y control

1. Elegir un destino `https://www.estimescafe.com/…` que funcione y definir fuente, medio y campaña. Añadir contenido cuando existan varias piezas o ubicaciones.
2. Registrar la URL exacta, su ubicación, estado, fecha y creador. `unknown_preexisting` significa que el calendario o la ficha ya contenían el enlace y no se conoce a la persona que lo creó; `Codex_updated_2026_10_01` identifica los 45 enlaces actualizados en este trabajo.
3. Abrir el enlace y comprobar que cualquier redirección conserva la consulta UTM. En GA4, revisar **Adquisición de tráfico → fuente/medio/campaña de sesión** después del procesamiento. Una prueba en Realtime confirma recepción de eventos, pero no sustituye el informe procesado.
4. Para el calendario GBP, ejecutar `python analytics/utm_registry.py validate` antes de publicar. Si se cambia una URL o su estado en el Excel, ejecutar `python analytics/utm_registry.py refresh` y revisar la diferencia del registro antes de volver a validar.

No poner UTMs en navegación interna: una nueva campaña durante la sesión puede cambiar la atribución. Tampoco añadirlos a los botones que salen a DoorDash, Uber Eats o Grubhub; esas salidas se cuentan mediante `order_platform_click`. Un clic con UTM demuestra una llegada a la web, nunca por sí mismo una compra del portal. Enlaces directos a Google Maps se analizan con las estadísticas de GBP, no con visitas web de GA4.
