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
- **Secciones Semánticas y Filtros Interactivos (8 Categorías Optimizadas):**
  1. `Off the Spatula (Pancakes & French Toast — Flat $16.95)` (Ataca: `breakfast near me pancakes`, `lemon ricotta pancakes`, `amaretto brioche french toast`, `blueberry pancakes`).
  2. `Chef Specials & Entrees` (Ataca: `surf and turf breakfast`, `lamb chops breakfast`, `prime ny strip steak and eggs`, `haitian herring pasta`).
  3. `Brunch Bowls & Creole Grits` (Ataca: `lobster brunch`, `salmon and grits`, `creole catfish`, `shrimp and grits colonia nj`).
  4. `Benedicts & Gourmet Omelets` (Ataca: `lobster benedict nj`, `keto breakfast near me`, `haitian spicy omelet`, `ny deli pastrami omelet`).
  5. `Handcrafted Burgers & Sandwiches (with Fries)` (Ataca: `truffle burger colonia nj`, `best smash burger`, `catfish sandwich`, `steak sandwich`).
  6. `Breakfast Classics & Handhelds` (Ataca: `breakfast sandwich near me`, `farmer's plate`, `monte estime`, `the mayor sandwich`).
  7. `Let's Get Started & Fresh Salads` (Ataca: `brunch tacos`, `uncle dunn tempura shrimp`, `rob the garden salad`, `kale caesar`).
  8. `Sides, Razzle Dazzle & Cold Drinks` (Ataca: `truffle fries`, `fresh orange juice`, `jammin lemonade`, `hibiscus iced tea`).
- **Navegación Interna a Otros Menús:** Dentro de `/menu/` se incluyen banners destacados de acceso a:
  - *¿Organizando un evento o reunión de oficina?* Ver [Catering Party Trays Menu](/catering/).
  - *¿Celebración privada en nuestro local?* Ver [Private Events Menu & Packages](/private-events/).
- **Schema Markup:** `Menu`, `Restaurant`, `MenuItem`, `Offer` estructurados dinámicamente con precios y divisas exactas en `hasMenuSection`.

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

> [!IMPORTANT]
> **Sin Páginas Individuales por Plato:** Para maximizar la autoridad semántica y evitar "thin content" o canibalización de palabras clave, **no se generan páginas individuales para cada plato**. Todos los platos, ingredientes y precios residen en la **Página Maestra del Menú (`/menu/` o `#menu`)** con datos estructurados `MenuItem` agrupados por `hasMenuSection`.

1. **Navegación Principal (Header):**
   - **Home** (`/`)
   - **Menu (Dropdown con categorías maestras y servicios):**
     * `Breakfast, Brunch & Lunch Menu` -> `/menu/` (o `#menu`)
     * `Catering Party Trays Menu` -> `/catering/` (o `#catering`)
     * `Weekend Brunch Catering Menu` -> `/catering/` (o `#catering`)
     * `Private Events Menu & Packages` -> `/catering/` (o `#catering`)
   - **Catering** (Enlace directo a `#catering`)
   - **Private Events** (Enlace directo a `#catering`)
   - **Botones CTA:** `Call (732) 669-7581` / `View Menu`.

2. **Pie de Página (Footer):**
   - **Columna 1 — Brand & Story:** Enlace a la historia y biografía del Chef Duke (`#about`).
   - **Columna 2 — Café & Catering Menu (Categorías Generales):**
     * Breakfast, Brunch & Lunch Menu (`#menu`)
     * Signature Weekend Brunch (`#menu`)
     * Lunch Specials & Sandwiches (`#menu`)
     * Catering Party Trays & Platters (`#catering`)
     * Corporate Breakfast & Lunch Catering (`#catering`)
     * Private Events & Brunch Packages (`#catering`)
   - **Columna 3 — Explore & About:**
     * About Us & Story (`#about`)
     * Customer Reviews (4.8★) (`#reviews`)
     * Our Location & Map (`#location`)
     * Contact Us (`#location`)
     * Catering Inquiries (`#catering`)
   - **Columna 4 — Location & Contact:** Datos NAP (238 Inman Ave, Colonia NJ, teléfono click-to-call, email, horarios).

---

## 4. Matriz de Datos Estructurados Schema.org (JSON-LD)

| Tipo de Página | Esquemas Schema.org a Implementar | Propiedades Cruciales |
|----------------|-----------------------------------|-----------------------|
| **Home (`/`)** | `Restaurant`, `CafeOrCoffeeShop`, `LocalBusiness` | `name`, `address`, `geo`, `telephone`, `openingHoursSpecification`, `servesCuisine`, `priceRange`, `hasMenu` |
| **Menú Restaurante (`/menu/`)** | `Menu`, `MenuSection`, `MenuItem` | `name`, `description`, `offers` (price, USD), `suitableForDiet`, `hasMenuSection` |
| **Catering (`/catering/*`)** | `Service`, `FoodService`, `LocalBusiness` | `serviceType` ("Corporate Catering", "Party Trays"), `provider`, `areaServed`, `offers` |
| **Eventos Privados (`/private-events/`)**| `EventVenue`, `Service` | `maximumAttendeeCapacity`, `amenityFeature`, `priceRange` |
| **Ubicación (`/locations/colonia-nj/`)**| `LocalBusiness`, `Restaurant` | `name`, `address` (238 Inman Ave, Colonia NJ), `hasMap`, `geo`, `openingHoursSpecification` |
