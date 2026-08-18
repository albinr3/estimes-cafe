# Arquitectura Web y Estructura de URLs — Estime’s Café

**Dominio Base:** `https://www.estimescafe.com`  
**Estrategia:** Arquitectura en Silos Semánticos (Topic Clusters) + Hubs Locales de Alto Rendimiento

---

## 1. Mapa del Sitio y Jerarquía de URLs (Silo Architecture)

```
https://www.estimescafe.com/
│
├── / (Home — Hub Principal de Marca: Breakfast, Brunch, Lunch & Artisan Coffee en Colonia NJ)
│
├── /menu/ (Hub de Menús Completo en HTML interactivo)
│   ├── /menu/breakfast/ (Desayunos Clásicos, Huevos, Farmer's Plate, Omelets)
│   ├── /menu/brunch/ (Brunch Especial, Tacos de Brunch, Benedicts, Cocktails)
│   ├── /menu/pancakes-french-toast/ (Lemon Ricotta, Brioche Amaretto, Chocolate Chip)
│   ├── /menu/lunch/ (Sandwiches "The Mayor", Sriracha Chicken, Burgers, Ensaladas)
│   ├── /menu/healthy-keto/ (Power Omelet, Alfano Omelet, Veggie Lover, Opciones Saludables)
│   └── /menu/drinks/ (Café de Especialidad, Té de Hibisco, Mocktail Flights)
│
├── /catering/ (Hub de Servicios de Catering B2B & Eventos)
│   ├── /catering/breakfast-catering-nj/ (Bandejas de Desayuno Corporativo y Social)
│   ├── /catering/corporate-lunch-catering/ (Almuerzos para Oficinas y Empresas en NJ)
│   └── /catering/menu/ (Menú Detallado de Bandejas: Rasta Pasta, Haitian Salmon, etc.)
│
├── /private-events/ (Eventos Privados, Baby Showers, Cumpleaños, Cenas Especiales)
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

## 2. Definición Detallada por Página

### 2.1 Página de Inicio (`/`)
- **Objetivo SEO:** Posicionarse para términos de alta intención local de marca y categorías principales de comida matutina y de mediodía (`breakfast near me`, `best brunch near me`, `lunch near me`, `lunch spots near me`, `best lunch in Colonia NJ`, `cafe near me`, `brunch in Colonia NJ`).
- **Encabezado H1:** `Estime’s Café — Premier Breakfast, Brunch, Lunch & Artisan Coffee in Colonia, NJ`
- **Secciones Clave:**
  1. *Hero Section:* Propuesta de valor integral (Desayuno, Brunch de autor y Almuerzos frescos con fusión caribeña/americana), botones CTA directos ("Ver Menú", "Cómo Llegar", "Ordenar Online", "Cotizar Catering").
  2. *Triada de Experiencias Culinarias:* Accesos rápidos a los 3 momentos clave del día:
     - **Breakfast Favorites:** Omelets artesanos, Farmer's plate, huevos al gusto.
     - **Signature Weekend Brunch:** Lemon Ricotta Pancakes, Amaretto French Toast, Shrimp & Grits.
     - **Fresh Midday Lunch:** Sandwiches de autor ("The Mayor", Crispy Sriracha Chicken), Smash Burgers, Bowls de Griot y ensaladas frescas.
  3. *Horarios y Estado en Tiempo Real:* Indicar claramente el horario (Martes a Domingo 8:00 AM – 3:00 PM) y si la cocina está abierta en vivo (factor de ranking top en Google Maps).
  4. *Testimonios y Calificación:* Widget con puntuación de Google Reviews (4.8+ estrellas) y botón a `/reviews`.
  5. *Ubicación y Mapa Integrado:* 238 Inman Ave, Colonia, NJ 07067 + Datos de contacto + Enlace directo a `/locations/colonia-nj/`.

### 2.2 Silo de Menús (`/menu/*`)
*Regla crítica:* Los menús deben estar codificados en HTML semántico, nunca únicamente en archivos PDF o imágenes, para que Google indexe cada ingrediente y plato individual.

| URL | H1 Sugerido | Enfoque de Búsqueda (Keywords) | Schema Markup |
|-----|-------------|--------------------------------|---------------|
| `/menu/` | `Full Dining & Drink Menu — Estime’s Café Colonia` | `lunch menu`, `brunch cafe menu`, `cafe and breakfast` | `Menu`, `Restaurant` |
| `/menu/breakfast/` | `Fresh Farm Breakfast & Artisan Omelets in Colonia, NJ` | `breakfast places`, `cafes for breakfast`, `good breakfast near me`, `eggs for breakfast` | `MenuSection`, `MenuItem` |
| `/menu/brunch/` | `The Best Weekend Brunch in Central NJ: Saturday & Sunday Specials` | `sunday brunch`, `saturday brunch`, `brunch places near me`, `brunch sunday near me` | `MenuSection`, `MenuItem` |
| `/menu/pancakes-french-toast/` | `Gourmet Pancakes & Brioche French Toast in NJ` | `breakfast near me pancakes`, `lemon ricotta pancakes`, `brioche french toast nj` | `MenuSection`, `MenuItem` |
| `/menu/lunch/` | `Fresh Lunch Specials, Handcrafted Sandwiches & Burgers` | `lunch restaurants near me`, `lunch specials near me`, `lunch spots near me`, `sandwich for breakfast` | `MenuSection`, `MenuItem` |
| `/menu/healthy-keto/` | `Keto-Friendly, High-Protein & Healthy Breakfast Options` | `vegan breakfast near me`, `healthy breakfast near me`, `keto omelet nj`, `power omelet` | `MenuSection`, `MenuItem` |

### 2.3 Silo de Catering B2B y Eventos (`/catering/*`)
*Objetivo:* Capturar la demanda de alto ticket proveniente de oficinas corporativas, clínicas, despachos legales, escuelas y celebraciones familiares en Middlesex y Union County.

| URL | H1 Sugerido | Enfoque de Búsqueda (Keywords) | Conversión Principal |
|-----|-------------|--------------------------------|----------------------|
| `/catering/` | `Gourmet Breakfast & Lunch Catering Services in Central New Jersey` | `catering near me`, `catering restaurants`, `catering food near me` | Formulario de Cotización de Catering (RFP) |
| `/catering/breakfast-catering-nj/` | `Corporate Breakfast Catering & Morning Event Trays in NJ` | `catering breakfast near me`, `catering breakfast`, `breakfast catering menu nj` | Selección de Bandejas de Desayuno + Cotización |
| `/catering/corporate-lunch-catering/` | `Office Lunch Catering & Corporate Meeting Platters in Central NJ` | `catering lunch near me`, `lunch catering for office`, `corporate lunch trays` | Cotización de Almuerzos Corporativos |
| `/catering/menu/` | `Estime’s Full Catering Menu: Half & Full Party Trays` | `catering menu`, `catering food`, `party trays catering nj` | Descarga de Menú PDF + Formulario de Pedido |
| `/private-events/` | `Host Your Private Brunch & Special Celebrations at Estime’s Café` | `private brunch events nj`, `bridal shower brunch nj`, `small event venue colonia nj` | Formulario de Reserva de Espacio Privado |

### 2.4 Página de Ubicación Local Física (`/locations/colonia-nj/`)
*Foco:* Consolidar la máxima autoridad de proximidad local para la sede física de Estime's Café en 238 Inman Ave, Colonia, NJ 07067 (Woodbridge Township).

| URL | Ciudad / Área | Keywords Objetivo | Contenido Específico |
|-----|---------------|-------------------|----------------------|
| `/locations/colonia-nj/` | Colonia, NJ (Local Hub) | `breakfast Colonia NJ`, `best brunch in Colonia NJ`, `cafe Inman Ave`, `brunch near me Colonia` | Ubicación física detallada, mapa de Google interactivo, aparcamiento, horario de atención, fotos del restaurante e historia de servicio de más de 8 años en Inman Ave. |

> [!NOTE]
> **Expansión Futura (Fase 2 Opcional):** Si en el futuro se desea expandir a sub-páginas satélite para ciudades vecinas (Woodbridge, Clark, Rahway, Edison, Westfield), se podrán incorporar progresivamente. Por ahora, toda la autoridad y tráfico de proximidad se concentran en Colonia, NJ, mientras que el servicio de catering abarca las ciudades adyacentes a través de `/catering/`.

---

## 3. Estrategia de Enlazado Interno (Internal Linking Graph)

Para transferir autoridad y guiar tanto a los usuarios como a los rastreadores de Google:
1. **Navegación Principal (Header):**
   - Menú (Dropdown con enlaces directos a: Desayuno, Brunch, Pancakes & French Toast, Almuerzo, Opciones Saludables).
   - Catering (Dropdown: Desayuno Corporativo, Almuerzos de Oficina, Menú de Bandejas).
   - Eventos Privados.
   - Sobre Nosotros.
   - Ubicación (Enlace directo a `/locations/colonia-nj/` o `/contact/`).
   - Contacto.
   - Botón CTA destacado: `Order Online` / `Call: (732) 669-7581`.
2. **Contextual In-Content Links:**
   - En la página de inicio, enlazar con anchor text descriptivo hacia `/menu/pancakes-french-toast/` ("explore our famous [Lemon Ricotta Pancakes](file:///menu/pancakes-french-toast/)").
   - En las páginas de categoría de menú, enlazar hacia el servicio de catering correspondiente ("Loving our French toast? We also offer [breakfast catering trays for offices and events](file:///catering/breakfast-catering-nj/)").
   - En la página de ubicación de Colonia, enlazar al menú completo, galería de fotos y formulario de contacto.
3. **Pie de Página (Footer):**
   - Datos NAP completos (Nombre, Dirección física en 238 Inman Ave, Colonia NJ con enlace a Google Maps, Teléfono clickeable, Correo).
   - Enlace directo a `/locations/colonia-nj/`.
   - Enlace directo a la página de `/reviews/` y al perfil de Google Maps para dejar reseñas.

---

## 4. Matriz de Datos Estructurados Schema.org (JSON-LD)

| Tipo de Página | Esquemas Schema.org a Implementar | Propiedades Cruciales |
|----------------|-----------------------------------|-----------------------|
| **Home (`/`)** | `Restaurant`, `CafeOrCoffeeShop`, `LocalBusiness` | `name`, `address`, `geo` (lat/long), `telephone`, `openingHoursSpecification`, `servesCuisine` (["American", "Haitian", "Caribbean", "Brunch"]), `priceRange`, `menu`, `hasMenu`, `sameAs` |
| **Menús (`/menu/*`)** | `Menu`, `MenuSection`, `MenuItem` | `name`, `description`, `offers` (price, priceCurrency: "USD"), `suitableForDiet` (Keto, Vegetarian cuando aplique), `image` |
| **Catering (`/catering/*`)** | `Service`, `FoodService`, `LocalBusiness` | `serviceType` ("Breakfast Catering", "Corporate Lunch Catering"), `provider`, `areaServed` (Condados de Middlesex y Union), `offers` |
| **Página de Ubicación (`/locations/colonia-nj/`)**| `LocalBusiness`, `Restaurant` | `name`, `address` (238 Inman Ave, Colonia NJ), `hasMap`, `geo`, `openingHoursSpecification`, `telephone` |
| **Eventos Privados (`/private-events/`)**| `EventVenue`, `Service` | `maximumAttendeeCapacity`, `amenityFeature`, `priceRange` |
| **Artículos de Blog (`/blog/*`)** | `Article`, `BlogPosting` | `headline`, `author` (Person: Chef Duke Estime), `publisher` (Estime's Cafe), `datePublished`, `dateModified`, `mainEntityOfPage` |
| **Todas las Páginas** | `BreadcrumbList`, `WebSite` | `itemListElement` con jerarquía de navegación limpia para visualización de migas de pan en SERPs. |
