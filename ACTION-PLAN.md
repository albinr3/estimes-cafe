# Plan de Acción SEO — Estime's Café

**Fecha:** 11 de Octubre de 2026  
**Objetivo:** Optimizar la velocidad móvil, la presentación en SERPs y la autoridad local para acelerar el crecimiento del tráfico orgánico.

---

## 1. Matriz de Prioridades

| Prioridad | Tarea | Impacto SEO | Esfuerzo | Responsable | Criterio de Aceptación |
|:---:|---|:---:|:---:|:---:|---|
| **ALTA** | **Eliminar cadena de redirección 301 en Hostinger** | Alto | Bajo (15 min) | Dev / Hosting | `http://estimescafe.com` salta en 1 solo paso 301 directamente a `https://www.estimescafe.com/`, eliminando 1.1s de latencia en móviles. |
| **ALTA** | **Actualizar enlace en Google Business Profile** | Alto | Inmediato (2 min) | Marketing / Dueño | La URL web en el perfil de Google pasa de `http://...` a `https://www.estimescafe.com/`. |
| **ALTA** | **Optimizar Título de `/about/`** | Medio | Bajo (5 min) | Desarrollo / Contenido | Título de `/about/` reducido de 80 a 54 caracteres: *"Chef Duke Estime & Our Story | Estime's Café Colonia NJ"*. |
| **ALTA** | **Añadir Encabezados de Seguridad y Charset en LiteSpeed** | Medio | Bajo (10 min) | Hosting (.htaccess) | Encabezados HSTS, nosniff, SAMEORIGIN y `Content-Type: text/html; charset=utf-8` activos. |
| **MEDIA** | **Ajustar Meta Descripciones Largas** | Medio | Bajo (15 min) | Contenido | Descripciones de `/catering/`, `/about/` y `/contact/` reducidas a 145-155 caracteres para evitar truncamiento en Google. |
| **MEDIA** | **Enriquecer Páginas con Contenido Fino (`/contact/` y `/reviews/`)** | Medio | Medio | Contenido | Ambas páginas superan las 300 palabras con guías de transporte, estacionamiento, horarios pico y menciones de prensa. |
| **MEDIA** | **Optimizar Hero para Móviles (Reducción de LCP)** | Alto | Medio | Desarrollo | Servir versión adaptada de menor peso de la imagen hero en pantallas < 640px para bajar el LCP móvil a < 2.5s. |

---

## 2. Instrucciones Técnicas de Implementación

### Tarea 1: Redirección Canónica Limpia en `.htaccess` (Hostinger / LiteSpeed)
Para evitar la doble redirección (`http` -> `https non-www` -> `https www`), añadir al inicio de `.htaccess`:
```apache
RewriteEngine On

# Forzar HTTPS y www en un solo salto directo
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.estimescafe.com/$1 [L,R=301]

# Encabezados de Seguridad
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

---

### Tarea 2: Optimización del Título de `/about/`
En `src/app/about/page.tsx`:
```diff
- title: "Meet The Chef & Our Story | Honoree Chef Duke Estime | Estime's Café Colonia NJ"
+ title: "Chef Duke Estime & Our Story | Estime's Café Colonia NJ"
```
*(Reduce de 80 a 54 caracteres, evitando que Google lo trunque en las SERPs).*

---

### Tarea 3: Verificación de Canonical
Confirmado en producción: Las etiquetas canonical están 100% sincronizadas en el HTML publicado (`https://www.estimescafe.com/menu/`, etc.) y ratificadas por Google Search Console. No se requiere ninguna acción en los canonicals.

---

### Tarea 4: Corrección de Redirección a `index.txt` en `/reviews/`
**Causa:**
1. Next.js App Router en exportación estática (`output: 'export'`) genera los archivos `index.html` (vista visual) y `index.txt` (payload RSC de React Server Components para transiciones SPA).
2. Los enlaces en el código apuntaban a `/reviews` sin barra final (`trailingSlash`), mientras que `next.config.mjs` tiene `trailingSlash: true`. Esa discrepancia causaba que el enrutador cliente de Next.js entrara en fallback y cargara o navegara directamente a la ruta interna `index.txt`.
3. LiteSpeed/Apache no tenía protección contra visitas directas a archivos `*.txt` del enrutador, sirviendo el texto plano en el navegador.

**Solución aplicada:**
1. En `.htaccess`: `DirectoryIndex index.html index.php` prioritario.
2. En `.htaccess`: Redirección 301 de cualquier petición de navegador a `index.txt` hacia su ruta limpia HTML correspondiente (`/reviews/`).
3. En `.htaccess`: Alias 301 de `/review` y `/reviews` hacia la canónica `/reviews/`.
4. En el código React: Actualizados todos los enlaces internos (`<Link>`) para incluir la barra final (`/reviews/`, `/menu/`, `/order-online/`, etc.).
5. Se generó el paquete listo para desplegar: `hostinger-static-2026-10-11-reviews-fix.zip`.
