# Arquitectura Web y Estructura de URLs — Estime’s Café

**Dominio Base:** `https://www.estimescafe.com`  
**Estrategia:** Arquitectura en Silos Semánticos (Topic Clusters) + Páginas Maestras de Alto Rendimiento

---

## 1. Mapa del Sitio y Jerarquía de URLs (Silo Architecture)

```
https://www.estimescafe.com/
│
├── / (Home — Hub Principal de Marca: Breakfast, Brunch, Lunch & Artisan Coffee en Colonia NJ)
│
├── /menu/ (Página Maestra del Menú del Restaurante: Desayuno, Brunch de Fin de Semana, Almuerzo y Bebidas)
│
├── /catering/ (Página Pilar Maestra de Servicios de Catering B2B & Eventos)
│   ├── /catering/menu/ (Menú Detallado de Bandejas de Fiesta: Rasta Pasta, Salmón criollo, Jerk Chicken)
│   └── /catering/brunch/ (Menú Especial de Brunch para Catering Corporativo y Familiar)
│
├── /private-events/ (Eventos Privados, Baby Showers, Cumpleaños y Menú de Celebraciones)
│
├── /about/ (Nuestra Historia, Chef Duke Estime, Fusión Culinaria Haitiana & Americana)
│
├── /locations/ (Hub de Ubicación & Visita)
│   └── /locations/colonia-nj/ (Página Central de la Ubicación Física en 238 Inman Ave)
│
├── /reviews/ (Muro de Testimonios Reales, Reseñas de Google y Prensa Local)
├── /contact/ (Información de Contacto, Mapa Interactivo, Horarios y Formulario)
│
└── /blog/ (Hub de Contenidos, Guías Locales y Cultura Culinaria)
    ├── /blog/best-brunch-spots-central-nj/
    ├── /blog/top-breakfast-catering-ideas-office/
    ├── /blog/guide-to-haitian-creole-brunch-flavors/
    └── /blog/...
```

---

## 2. Definición Detallada por Página y Menús Especializados

### 2.1 Página de Inicio (`/`)
- **Objetivo SEO:** Posicionarse para términos de alta intención local de marca y categorías principales de comida matutina y de mediodía (`breakfast near me`, `best brunch near me`, `lunch near me`, `lunch spots near me`, `best lunch in Colonia NJ`, `cafe near me`, `brunch in Colonia NJ`).
- **Encabezado H1:** `Estime’s Café — Premier Breakfast, Brunch, Lunch & Artisan Coffee in Colonia, NJ`
- **Secciones Clave (Encabezados H2 Temáticos):**
  1. `Signature Weekend Brunch & Specialty Pancakes in Colonia, NJ` (Cluster Brunch & Pancakes).
  2. `Fresh Lunch Specials & Handcrafted Sandwiches in Colonia, NJ` (Cluster Almuerzos & Sandwiches).
  3. `Handcrafted Breakfast, Weekend Brunch & Fresh Lunch Menu` (Acceso al menú completo sin nombres de platos como H-tags).
  4. `Corporate Breakfast & Lunch Catering Services in Central NJ` (Resumen de catering con enlace directo).
  5. `Executive Chef Duke Estime & Authentic Haitian-American Fusion in NJ` (Autoridad E-E-A-T).
  6. `Guest Reviews: Rated Best Breakfast & Weekend Brunch in Colonia, NJ` (Social proof).
  7. `Visit Our Breakfast & Lunch Restaurant in Colonia, NJ (238 Inman Ave)` (Datos NAP y mapa).

### 2.2 Página Maestra del Menú del Restaurante (`/menu/`)
*Estrategia:* Una única página interactiva y completa en HTML puro que reúne toda la oferta gastronómica regular para consumo en el local (*Dine-in*) y para llevar (*Takeout*), sin fragmentar el menú en páginas separadas por plato.

- **Encabezado H1:** `Breakfast, Brunch & Lunch Menu: Daily Favorites & Artisan Coffee`
- **Secciones Semánticas (Encabezados H2):**
  1. `Farm-Fresh Breakfast Classics, Eggs & Artisan Omelets` (Ataca: `breakfast places`, `cafes for breakfast`, `eggs for breakfast`, `steak and eggs breakfast`).
  2. `Signature Weekend Brunch, Specialty Pancakes & Brioche French Toast` (Ataca: `breakfast near me pancakes`, `lemon ricotta pancakes`, `brioche french toast nj`, `sunday brunch`, `saturday brunch`).
  3. `Handcrafted Lunch Specials, Sandwiches & Smash Burgers` (Ataca: `lunch specials near me`, `breakfast sandwich near me`, `lunch menu`, `lunch restaurants`).
  4. `Chef Duke’s Caribbean Fusion Specialties & Creole Grits` (Ataca: `haitian restaurant nj`, `shrimp and grits`, `haitian spicy omelet`).
  5. `Keto-Friendly, High-Protein & Plant-Based Breakfast Options` (Ataca: `vegan breakfast near me`, `keto breakfast`, `power omelet`).
  6. `Artisan Coffee, Espresso & Specialty Drinks` (Ataca: `cafe near me`, `specialty coffee nj`).
- **Navegación Interna a Otros Menús:** Dentro de `/menu/` se incluyen banners destacados de acceso a:
  - *¿Organizando un evento o reunión de oficina?* Ver [Catering Party Trays Menu](file:///catering/menu/).
  - *¿Buscas brunch para tu fiesta matutina?* Ver [Weekend Brunch Catering Menu](file:///catering/brunch/).
  - *¿Celebración privada en nuestro local?* Ver [Private Events Menu & Packages](file:///private-events/).
- **Schema Markup:** `Menu`, `Restaurant`, `MenuItem` estructurados por `hasMenuSection`.

### 2.3 Páginas de Menús Especializados de Catering y Eventos

| URL | H1 Sugerido | Contenido y Tipo de Menú | Keywords Objetivo |
|-----|-------------|--------------------------|-------------------|
| `/catering/` | `Corporate Breakfast & Lunch Catering Services in Central NJ` | Hub maestro de servicios de catering, zonas de entrega y formulario de cotización (RFP). | `catering near me`, `catering breakfast`, `catering lunch` |
| `/catering/menu/` | `Full Catering Party Trays Menu: Half & Full Platters` | Catálogo completo de bandejas para fiestas y oficinas: Rasta Pasta, Salmón haitiano, Pollo Jerk, Alitas, Ensaladas. | `catering menu`, `catering food`, `party trays catering nj` |
| `/catering/brunch/` | `Weekend Brunch Catering Menu & Morning Platters in NJ` | Bandejas especiales de desayuno y brunch: bandejas de Lemon Ricotta Pancakes, Brioche French Toast, Huevos y Café. | `catering breakfast near me`, `brunch catering nj`, `breakfast catering menu` |
| `/private-events/` | `Host Your Private Brunch & Special Celebrations at Estime’s Café` | Paquetes de eventos privados (Baby Showers, Cumpleaños, Cenas) con menú fijo y alquiler de espacio. | `private brunch events nj`, `bridal shower brunch nj`, `small event venue colonia nj` |

### 2.4 Página de Ubicación Local Física (`/locations/colonia-nj/`)
- **URL:** `/locations/colonia-nj/`
- **Encabezado H1:** `Visit Estime’s Café in Colonia, NJ — 238 Inman Avenue`
- **Keywords:** `breakfast Colonia NJ`, `best brunch in Colonia NJ`, `cafe Inman Ave`, `restaurants in Colonia NJ`.

---

## 3. Estrategia de Enlazado Interno (Internal Linking Graph)

1. **Navegación Principal (Header):**
   - **Home** (`/`)
   - **Menu (Dropdown con los tipos de menús especializados):**
     * `Breakfast, Brunch & Lunch Menu` -> `/menu/` (o `#menu`)
     * `Catering Party Trays Menu` -> `/catering/menu/` (o `#catering`)
     * `Weekend Brunch Catering Menu` -> `/catering/brunch/`
     * `Private Events Menu & Packages` -> `/private-events/`
   - **Catering** (Enlace directo a `/catering/`)
   - **Private Events** (`/private-events/`)
   - **About** (`/about/` o `#about`)
   - **Location** (`/locations/colonia-nj/` o `#location`)
   - **Reviews** (`/reviews/` o `#reviews`)
   - **Botones CTA:** `Call (732) 669-7581` / `Order Online`.

2. **Pie de Página (Footer):**
   - Columna 1: Menú del Restaurante (enlace a `/menu/` y sus secciones principales).
   - Columna 2: Catering & Eventos (enlaces a `/catering/`, `/catering/menu/`, `/catering/brunch/`, `/private-events/`).
   - Columna 3: Información NAP (238 Inman Ave, Colonia NJ, teléfono, horarios).

---

## 4. Matriz de Datos Estructurados Schema.org (JSON-LD)

| Tipo de Página | Esquemas Schema.org a Implementar | Propiedades Cruciales |
|----------------|-----------------------------------|-----------------------|
| **Home (`/`)** | `Restaurant`, `CafeOrCoffeeShop`, `LocalBusiness` | `name`, `address`, `geo`, `telephone`, `openingHoursSpecification`, `servesCuisine`, `priceRange`, `hasMenu` |
| **Menú Restaurante (`/menu/`)** | `Menu`, `MenuSection`, `MenuItem` | `name`, `description`, `offers` (price, USD), `suitableForDiet`, `hasMenuSection` |
| **Catering (`/catering/*`)** | `Service`, `FoodService`, `LocalBusiness` | `serviceType` ("Corporate Catering", "Party Trays"), `provider`, `areaServed`, `offers` |
| **Eventos Privados (`/private-events/`)**| `EventVenue`, `Service` | `maximumAttendeeCapacity`, `amenityFeature`, `priceRange` |
| **Ubicación (`/locations/colonia-nj/`)**| `LocalBusiness`, `Restaurant` | `name`, `address` (238 Inman Ave, Colonia NJ), `hasMap`, `geo`, `openingHoursSpecification` |
