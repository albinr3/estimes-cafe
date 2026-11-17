# Estime's Café: Instrucciones y Reglas para Agentes

## ⚠️ Regla Crítica: Acceso a Google Search Console (GSC)

**NUNCA simular, estimar, inventar ni maquetar números de Google Search Console en ningún reporte, auditoría o análisis.**

### Cómo acceder a Google Search Console (GSC)
- GSC **NO** está registrado como un servidor MCP en la lista de herramientas nativas (`<mcp_servers>`).
- **SÍ está conectado y disponible al 100% mediante la API oficial** a través de la cuenta de servicio configurada (`ga-mcp-reader@dukesteak.iam.gserviceaccount.com`), la cual tiene permisos de `siteFullUser` sobre la propiedad:
  - **Propiedad GSC:** `sc-domain:estimescafe.com`
- Para consultar métricas y palabras clave reales de Search Console, ejecutar:
  ```bash
  py -3 "C:/Users/Albin Rodriguez/.gemini/config/skills/seo/scripts/runtime.py" run gsc_query.py --property sc-domain:estimescafe.com --start-date YYYY-MM-DD --end-date YYYY-MM-DD --json
  ```
- **Filtros y opciones disponibles en el script:**
  - `--dimensions query,page` (predeterminado) o `--dimensions query`
  - `--limit 1000`
  - `sites` para listar propiedades verificadas: `... run gsc_query.py sites --json`
  - `sitemaps` para auditar sitemaps: `... run gsc_query.py sitemaps --property sc-domain:estimescafe.com --json`

### Diferencia obligatoria de interpretación: GSC vs. GA4 vs. GBP
- **Google Search Console:** Mide clics e impresiones orgánicas puras en los resultados de búsqueda web de Google que apuntan al dominio.
- **Google Analytics 4 (GA4):** `google / organic` mide sesiones totales, usuarios recurrentes y visitas orgánicas (incluyendo tráfico desde perfiles que no llevan UTM específico).
- **Google Business Profile (GBP):** Clics al sitio web registrados desde la ficha de Google Maps / Búsqueda Local (vía `grid-my-business` MCP o capturas).

---

## Integraciones y Fuentes de Datos Verificadas

### 1. Google Analytics 4 (GA4)
- **MCP Server:** `google-analytics`
- **Property ID:** `556917509`
- **DataStream ID:** `15896458793` (`G-WZTNVR2FKQ`)
- **Uso:** Usar `run_report` para sesiones, usuarios, eventos clave (`click_call`, `order_platform_click`, formularios).

### 2. Google Business Profile & Grid My Business
- **MCP Server:** `grid-my-business`
- **Profile ID:** `6a6cde1b3302c5fcb9cf2a07`
- **Uso:** Obtener análisis de perfil, métricas de rendimiento (llamadas, cómo llegar, clics a la web), reseñas y comparativa con competidores locales.

### 3. Bonsai (Gestión de Tareas y Facturación)
- **MCP Server:** `bonsai`
- **Proyecto:** `Local Seo - Estimes Cafe` (`project_id: 1533745`)
- **Uso:** Listar y verificar tareas ejecutadas (`list_tasks`) para incluir en los entregables mensuales.

---

## Reportes Mensuales SEO
1. **Replicación de Plantillas:** Al clonar o actualizar plantillas de reportes (ej. desde Duke Steakhouse u otros clientes), **todos los datos numéricos deben sustituirse por los datos reales de Estime's Café**.
2. **Consultas Anonimizadas en GSC:** La diferencia entre el total general de clics de GSC (`totals.clicks`) y la suma de las filas individuales de consultas (`query`) corresponde a las consultas protegidas por privacidad de Google (Privacy Threshold). Debe reportarse claramente como "Consultas anonimizadas por privacidad de Google".
