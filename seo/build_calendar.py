import openpyxl
from openpyxl.styles import PatternFill, Font, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import CellIsRule
import csv
import datetime
import shutil
import os

# Create workbook
wb = openpyxl.Workbook()

# Setup sheets
ws_cal = wb.active
ws_cal.title = "Calendario 52 semanas"
ws_res = wb.create_sheet(title="Resumen")
ws_kw = wb.create_sheet(title="Keywords Ubersuggest")

# Colors & Fonts
font_name = "Carlito"
c_dark_header = "FF111827"
c_gold_header = "FFB58B2A"
c_white = "FFFFFFFF"
c_gray_alt = "FFF8FAFC"
c_blue_link = "FF0000FF"

font_title = Font(name=font_name, size=18, bold=True, color=c_white)
font_link = Font(name=font_name, size=10, bold=False, color=c_blue_link, underline="single")
font_header = Font(name=font_name, size=11, bold=True, color=c_white)
font_data = Font(name=font_name, size=11, bold=False)
font_data_bold = Font(name=font_name, size=11, bold=True)
font_data_link = Font(name=font_name, size=11, bold=False, color=c_blue_link, underline="single")

fill_dark = PatternFill(start_color=c_dark_header, end_color=c_dark_header, fill_type="solid")
fill_gold = PatternFill(start_color=c_gold_header, end_color=c_gold_header, fill_type="solid")
fill_white = PatternFill(start_color=c_white, end_color=c_white, fill_type="solid")
fill_alt = PatternFill(start_color=c_gray_alt, end_color=c_gray_alt, fill_type="solid")

align_center = Alignment(horizontal="center", vertical="center")
align_left = Alignment(horizontal="left", vertical="top", wrap_text=True)
align_date = Alignment(horizontal="center", vertical="top", wrap_text=True)
align_num = Alignment(horizontal="right", vertical="top", wrap_text=True)

# ----------------------------------------------------
# 1. SHEET: Calendario 52 semanas
# ----------------------------------------------------
ws_cal.views.sheetView[0].showGridLines = True

# Title banner
ws_cal.row_dimensions[1].height = 21.0
ws_cal.row_dimensions[2].height = 26.0
ws_cal.row_dimensions[3].height = 18.0
ws_cal.row_dimensions[4].height = 28.0

ws_cal.merge_cells("A2:K2")
cell_a2 = ws_cal["A2"]
cell_a2.value = "Calendario anual de publicaciones para Google Business Profile — Estime's Café"
cell_a2.font = font_title
cell_a2.fill = fill_dark
cell_a2.alignment = Alignment(horizontal="center", vertical="center")

# Asset link
cell_a3 = ws_cal["A3"]
cell_a3.value = "https://www.estimescafe.com/ — 238 Inman Ave, Colonia, NJ 07067 — (732) 669-7581"
cell_a3.font = Font(name=font_name, size=10, italic=True, color="FF4B5563")
cell_a3.alignment = Alignment(horizontal="left", vertical="center")

# Headers
headers_cal = [
    ("Fecha", 14.0),
    ("Objetivo", 24.0),
    ("Keyword original", 22.0),
    ("Volumen", 14.0),
    ("Título GBP", 28.0),
    ("Texto listo para publicar (inglés)", 46.0),
    ("Idea de foto o video", 32.0),
    ("Botón", 14.0),
    ("Destino", 52.0),
    ("Revisión antes de publicar", 38.0),
    ("Estado", 16.0)
]

for col_idx, (header_text, width) in enumerate(headers_cal, 1):
    c = ws_cal.cell(row=4, column=col_idx, value=header_text)
    c.font = font_header
    c.fill = fill_gold
    c.alignment = align_center
    col_letter = openpyxl.utils.get_column_letter(col_idx)
    ws_cal.column_dimensions[col_letter].width = width

# 52 Posts data definition
# (date_str, objetivo, keyword, volumen, titulo_gbp, copy_en, visual_idea, boton, url_utm, revision, estado)
base_url = "https://www.estimescafe.com"
utm_base = "utm_source=google_business_profile&utm_medium=organic&utm_campaign=gbp_post"

posts_data = [
    # MONTH 1: September 2026
    (
        datetime.date(2026, 9, 7),
        "Posicionar el plato insignia dulce de desayuno",
        "breakfast near me pancakes",
        246000,
        "Lemon Ricotta Pancakes in Colonia, NJ",
        "Looking for the fluffiest pancakes near you? Taste our signature Lemon Ricotta Pancakes topped with whipped lemon butter, powdered sugar, and fresh blueberries. Made fresh daily at Estime's Cafe on Inman Ave. Order online or join us for breakfast!",
        "Foto primer plano del stack de Lemon Ricotta con la mantequilla derritiéndose y blueberries frescos.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_01_lemon_ricotta_pancakes",
        "Verificar disponibilidad de blueberries frescos y mantequilla de limón casera.",
        "Publicado"
    ),
    (
        datetime.date(2026, 9, 14),
        "Captar desayunos rápidos y sandwiches matutinos",
        "breakfast sandwich near me",
        301000,
        "Gourmet Breakfast Sandwiches on Inman Ave",
        "Grab the ultimate morning sandwich in Colonia! From 'The Mayor' with eggs and savory sausage to 'The Inman' on toasted brioche, Estime's Cafe serves hot, chef-crafted breakfast sandwiches built to start your day right. Fast pickup available online.",
        "Foto cenital y en corte diagonal de 'The Mayor' mostrando el queso derretido y huevo.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_02_breakfast_sandwich",
        "Confirmar que los pedidos online para pickup matutino estén activos antes de las 8 AM.",
        "Publicado"
    ),
    (
        datetime.date(2026, 9, 21),
        "Impulsar pedidos de catering corporativo de desayuno",
        "catering breakfast near me",
        18100,
        "Office Breakfast Catering in Central NJ",
        "Planning a morning team meeting in Middlesex or Union County? Estime's Cafe delivers gourmet corporate breakfast platters, from scrambled egg trays and crispy bacon to brioche French toast bundles. Request a catering quote today!",
        "Foto de presentación de bandejas de catering listas para entrega corporativa con frutas y repostería.",
        "Learn more",
        f"{base_url}/catering?{utm_base}&utm_content=week_03_office_breakfast_catering",
        "Comprobar disponibilidad del formulario de catering y tiempos mínimos de entrega.",
        "Publicado"
    ),
    (
        datetime.date(2026, 9, 28),
        "Promover el plato estrella fusión de mariscos",
        "shrimp and grits",
        110000,
        "Creole Shrimp & Grits at Estime's Cafe",
        "Craving authentic Southern & Creole comfort? Enjoy jumbo succulent shrimp over stone-ground cheddar grits, simmered in Chef Duke's signature Creole herb reduction. The most talked-about seafood brunch dish in Colonia, NJ. Try it this weekend!",
        "Video corto vertical de Chef Duke vertiendo la salsa criolla caliente sobre los grits cremosos.",
        "Order",
        f"{base_url}/menu?{utm_base}&utm_content=week_04_creole_shrimp_and_grits",
        "Validar calidad y frescura de los camarones jumbo de la semana.",
        "Publicado"
    ),

    # MONTH 2: October 2026
    (
        datetime.date(2026, 10, 5),
        "Posicionar búsqueda general de brunch de fin de semana",
        "brunch places near me",
        201000,
        "Central Jersey's Favorite Weekend Brunch",
        "Looking for the best weekend brunch spots nearby? Estime's Cafe combines classic American brunch plates with vibrant Caribbean spices. Gather your friends in Colonia for sweet stacks, savory skillets, and house specialty drinks every Saturday & Sunday!",
        "Foto de mesa completa con brunch diverso: pancakes, omelet, café y bebidas de la casa.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_05_weekend_brunch_experience",
        "Revisar tiempos de espera y rotación de mesas prevista para el fin de semana.",
        "Borrador"
    ),
    (
        datetime.date(2026, 10, 12),
        "Destacar la herencia culinaria haitiana del Chef Duke",
        "haitian restaurant nj",
        320,
        "Authentic Haitian Fusion by Chef Duke Estime",
        "Experience the authentic bold flavors of Haiti right here in Colonia, NJ. Chef Duke infuses family Creole marinades into morning favorites like our Haitian Spicy Omelet and Creole shrimp bowls. Read Chef Duke's story and taste the heritage!",
        "Retrato profesional de Chef Duke Estime en su cocina con sartenes en acción.",
        "Learn more",
        f"{base_url}/meet-the-chef?{utm_base}&utm_content=week_06_chef_duke_haitian_heritage",
        "Verificar que el enlace a la página del chef funcione con todos los links internos.",
        "Borrador"
    ),
    (
        datetime.date(2026, 10, 19),
        "Captar almuerzos ejecutivos y catering de mediodía",
        "catering lunch near me",
        8100,
        "Corporate Lunch Catering in Woodbridge & Clark",
        "Elevate your office lunch in Central New Jersey with Estime's Cafe catering. We offer hot sandwich platters, fresh garden bowls, Creole chicken trays, and savory pasta options tailored for corporate teams. View our complete catering menu online!",
        "Collage de tres bandejas: wraps gourmet, ensaladas frescas y pollo sriracha.",
        "Learn more",
        f"{base_url}/catering?{utm_base}&utm_content=week_07_corporate_lunch_catering",
        "Revisar menú de almuerzo corporativo y precios actualizados en el PDF.",
        "Borrador"
    ),
    (
        datetime.date(2026, 10, 26),
        "Reforzar ubicación física, parking y llegada fácil",
        "cafe near me",
        2740000,
        "Your Neighborhood Cafe in Colonia, NJ",
        "Conveniently located at 238 Inman Avenue with easy free parking, Estime's Cafe is your welcoming local destination for hot artisan coffee, fresh brunch, and warm hospitality. Tap for directions and stop by this week!",
        "Foto exterior clara y reconocible del café, fachada, letrero y zona de estacionamiento.",
        "Get directions",
        "https://www.google.com/maps/search/?api=1&query=40.60034991904395,-74.31259870657125",
        "Comprobar que el pin de Google Maps y los datos de navegación sean exactos.",
        "Borrador"
    ),

    # MONTH 3: November 2026
    (
        datetime.date(2026, 11, 2),
        "Promover plato indulgence dulce para clima frío",
        "brioche french toast",
        49500,
        "Amaretto Brioche French Toast at Estime's",
        "Warm up your autumn mornings with our famous Amaretto Brioche French Toast! Thick artisan brioche griddled to golden perfection, infused with sweet amaretto notes and served with warm syrup. Pure comfort food in Colonia, NJ.",
        "Foto en plano detalle del corte del pan brioche dorado mostrando su esponjosidad interior.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_09_amaretto_brioche_french_toast",
        "Asegurar pan brioche artesanal recién horneado con los panaderos proveedores.",
        "Borrador"
    ),
    (
        datetime.date(2026, 11, 9),
        "Atraer comensales con opciones saludables y keto",
        "vegan breakfast near me",
        60500,
        "High-Protein & Healthy Breakfast in Colonia",
        "Fuel your day with clean morning nutrition! Estime's Cafe crafts healthy favorites like the Alfano Power Omelet with egg whites, grilled chicken & kale, plus fresh avocado toasts and vegetarian skillets. Delicious healthy breakfast in Middlesex County!",
        "Foto luminosa de la tortilla de claras con pechuga a la plancha, aguacate y ensalada fresca.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_10_healthy_keto_breakfast",
        "Verificar que las opciones keto y sin gluten estén claramente señalizadas.",
        "Borrador"
    ),
    (
        datetime.date(2026, 11, 16),
        "Captar reservas para eventos privados de fin de año",
        "private brunch events nj",
        1200,
        "Host Your Private Holiday Brunch in Colonia",
        "Planning a baby shower, bridal brunch, or holiday team celebration? Estime's Cafe offers private dining and custom brunch packages for intimate gatherings in Central Jersey. Reserve your preferred date before the holiday calendar fills up!",
        "Foto del comedor decorado con temática de evento privado elegante y copas de celebración.",
        "Book",
        f"{base_url}/private-events?{utm_base}&utm_content=week_11_private_brunch_events",
        "Confirmar disponibilidad del calendario de eventos privados para noviembre y diciembre.",
        "Borrador"
    ),
    (
        datetime.date(2026, 11, 23),
        "Promover catering para la semana de Acción de Gracias",
        "catering food near me",
        27100,
        "Holiday Gathering Catering in Woodbridge Township",
        "Hosting family or office celebrations this Thanksgiving season? Let Estime's Cafe handle the food! Delicious brunch platters, gourmet sides, and full trays delivered hot to your doorstep across Colonia, Woodbridge, and Clark NJ.",
        "Foto de banquete de catering con múltiples bandejas calientes y ensaladas decoradas.",
        "Order",
        f"{base_url}/catering?{utm_base}&utm_content=week_12_thanksgiving_holiday_catering",
        "Publicar con al menos 48 horas de antelación al festivo de Acción de Gracias.",
        "Borrador"
    ),
    (
        datetime.date(2026, 11, 30),
        "Impulsar comida rápida para llevar y online pickup",
        "breakfast food near me",
        110000,
        "Hot Breakfast Ready for Fast Takeout",
        "On the go this morning in Colonia? Skip the wait by ordering online from Estime's Cafe! Freshly made omelets, breakfast wraps, and hot coffee packed carefully and ready when you arrive. Order pickup now through our website.",
        "Foto de bolsa de delivery de Estime's y envases ecológicos con café caliente para llevar.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_13_breakfast_takeout_pickup",
        "Comprobar tiempos de preparación estimados en la plataforma de pedidos online.",
        "Borrador"
    ),

    # MONTH 4: December 2026
    (
        datetime.date(2026, 12, 7),
        "Posicionar tacos de desayuno con sazón caribeño",
        "tacos for breakfast",
        60500,
        "Flavor-Packed Breakfast Tacos in Central NJ",
        "Shake up your morning routine with our signature brunch tacos! Three warm tortillas filled with fluffy scrambled eggs, peppers, onions, Haitian Creole marinade, and your choice of chorizo, steak, or crispy shrimp. Try them today at Estime's!",
        "Toma en ángulo de 45° de los tres tacos humeantes con salsa verde y cilantro fresco.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_14_breakfast_tacos_creole",
        "Revisar abastecimiento de tortillas y marinados criollos caseros.",
        "Borrador"
    ),
    (
        datetime.date(2026, 12, 14),
        "Promover catering de fiestas de fin de año de oficina",
        "catering near me",
        135000,
        "Office Holiday Party Catering in Middlesex County",
        "Treat your staff to an unforgettable holiday celebration! Estime's Cafe delivers chef-curated breakfast and lunch catering trays to companies throughout Woodbridge, Edison, and Rahway. Easy ordering and on-time professional delivery.",
        "Foto del equipo de cocina preparando bandejas de catering con etiqueta de cliente corporativo.",
        "Learn more",
        f"{base_url}/catering?{utm_base}&utm_content=week_15_office_holiday_party_catering",
        "Confirmar que los plazos de entrega de diciembre estén acordados con el equipo.",
        "Borrador"
    ),
    (
        datetime.date(2026, 12, 21),
        "Destacar cafés de especialidad y bebidas de invierno",
        "cafes for breakfast",
        40500,
        "Warm Artisan Coffee & Breakfast in Colonia",
        "Escape the winter chill at Estime's Cafe. Sip freshly brewed artisan drip coffee, rich lattes, or specialty hot chocolate paired with warm French toast and fluffy pancakes. Your cozy morning haven on Inman Ave!",
        "Foto artística de taza de café humeante con arte latte junto a un plato de brioche.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_16_warm_artisan_coffee_breakfast",
        "Verificar horarios especiales de Navidad y Nochebuena en el perfil de Google.",
        "Borrador"
    ),
    (
        datetime.date(2026, 12, 28),
        "Atraer comensales para brunch de fin de año y año nuevo",
        "sunday brunch",
        14800,
        "New Year Brunch Celebration at Estime's",
        "Start 2027 with good food and great company! Join us for a celebratory weekend brunch in Colonia featuring Haitian Spicy Omelets, Creole Shrimp & Grits, and signature sweet stacks. Check our holiday hours and celebrate with us!",
        "Foto festiva de comensales disfrutando de un brunch animado en el salón de Estime's.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_17_new_year_brunch_celebration",
        "Actualizar horarios festivos oficiales de Año Nuevo en Google Business Profile.",
        "Borrador"
    ),

    # MONTH 5: January 2027
    (
        datetime.date(2027, 1, 4),
        "Captar metas de año nuevo: desayuno saludable y keto",
        "lunch healthy",
        40500,
        "Clean, High-Protein Mornings in 2027",
        "Sticking to healthy eating resolutions this January? Estime's Cafe offers wholesome, nutritious breakfast options: egg white omelets packed with fresh spinach, grilled lean chicken, goat cheese, and fresh avocado. Nutritious food that tastes incredible!",
        "Foto cenital de bowl saludable con aguacate, claras de huevo y ensalada mixta.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_18_healthy_new_year_breakfast",
        "Comprobar ingredientes frescos para la alta demanda de opciones saludables de enero.",
        "Borrador"
    ),
    (
        datetime.date(2027, 1, 11),
        "Promover Steak and Eggs para arrancar el año con fuerza",
        "steak and eggs breakfast",
        40500,
        "Hearty Steak and Eggs Breakfast in Woodbridge",
        "Hungry for a real high-protein brunch plate? Savor our 12oz juicy NY Strip Steak served with two farm eggs any style, seasoned home fries, and Chef Duke's house Creole chimichurri. The ultimate weekend powerhouse plate at Estime's Cafe!",
        "Foto primer plano del corte jugoso del NY Strip con huevos fritos con yema líquida.",
        "Order",
        f"{base_url}/menu?{utm_base}&utm_content=week_19_steak_and_eggs_breakfast",
        "Verificar gramaje del filete y preparación fresca del chimichurri criollo.",
        "Borrador"
    ),
    (
        datetime.date(2027, 1, 18),
        "Reforzar búsquedas locales en Woodbridge Township",
        "cafe woodbridge",
        320,
        "Top-Rated Cafe Serving Woodbridge Township",
        "Proudly serving Colonia, Woodbridge, Clark, and Edison with 4.8 stars and over 180 verified reviews! Discover why local families love Estime's Cafe for morning comfort, flavorful brunch, and warm neighborhood hospitality. Visit us at 238 Inman Ave.",
        "Foto de clientes en el comedor con el letrero de Estime's Café visible de fondo.",
        "Get directions",
        "https://www.google.com/maps/search/?api=1&query=40.60034991904395,-74.31259870657125",
        "Comprobar que la dirección y el número de teléfono coincidan en todos los directorios.",
        "Borrador"
    ),
    (
        datetime.date(2027, 1, 25),
        "Destacar la historia y valores de los hermanos Estime",
        "haitian restaurant",
        33100,
        "Family, Passion & Flavor: The Estime's Story",
        "Founded by brothers Duke and Dumond Estime, our cafe was built on family recipes, culinary passion, and genuine love for community. From Haitian culinary roots to American breakfast favorites, taste the difference passion makes!",
        "Foto histórica o retrato cálido de los hermanos Duke y Dumond Estime en el local.",
        "Learn more",
        f"{base_url}/about?{utm_base}&utm_content=week_21_estime_brothers_story",
        "Verificar que la sección 'About' refleje con precisión la trayectoria de los hermanos.",
        "Borrador"
    ),

    # MONTH 6: February 2027
    (
        datetime.date(2027, 2, 1),
        "Promover brunch de San Valentín para parejas",
        "best brunch near me",
        246000,
        "Romantic Valentine's Weekend Brunch in NJ",
        "Treat someone special to a cozy, delicious brunch date in Colonia! Share our Amaretto Brioche French Toast, savory seafood omelets, and house specialty mocktails in a welcoming atmosphere. Make your weekend brunch plans at Estime's Cafe!",
        "Foto de mesa íntima para dos con café con arte latte y platos dulces decorados.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_22_valentines_brunch_date",
        "Preparar sugerencias de mesas para parejas y ambientación de San Valentín.",
        "Borrador"
    ),
    (
        datetime.date(2027, 2, 8),
        "Impulsar catering para el fin de semana del Super Bowl",
        "catering restaurants near me",
        27100,
        "Game Day Brunch & Lunch Catering Platters",
        "Hosting friends for the big game? Score big with Estime's Cafe catering! Gourmet breakfast sliders, crispy Sriracha chicken sandwiches, and savory breakfast tacos served in party-ready trays. Order catering early for Sunday pickup!",
        "Foto de bandejas de sliders matutinos y tacos de brunch preparados para fiesta.",
        "Order",
        f"{base_url}/catering?{utm_base}&utm_content=week_23_super_bowl_brunch_catering",
        "Confirmar capacidad de cocina para despachar pedidos matutinos antes del partido.",
        "Borrador"
    ),
    (
        datetime.date(2027, 2, 15),
        "Destacar papas caseras y acompañamientos sazonados",
        "potato breakfast",
        40500,
        "Crispy Seasoned Home Fries in Colonia",
        "No breakfast is complete without the perfect potatoes! At Estime's Cafe, our golden home fries are seasoned with house herbs, sautéed peppers, and caramelized onions for the ultimate savory crunch. Pair them with any omelet today!",
        "Foto en primer plano de las papas caseras crujientes humeantes con pimientos de colores.",
        "Order",
        f"{base_url}/menu?{utm_base}&utm_content=week_24_crispy_seasoned_home_fries",
        "Verificar consistencia del condimento de las home fries con el equipo de línea.",
        "Borrador"
    ),
    (
        datetime.date(2027, 2, 22),
        "Posicionar almuerzos reconfortantes de entre semana",
        "lunch specials near me",
        165000,
        "Weekday Lunch Favorites at Estime's Cafe",
        "Looking for an exceptional lunch spot in Colonia? Try Chef Duke's crispy Sriracha Chicken Sandwich, smashed burgers on toasted brioche, or fresh Creole grain bowls. Fast dine-in and takeout every Tuesday through Sunday!",
        "Foto lateral del Sriracha Chicken Sandwich mostrando la pechuga crujiente y ensalada de col.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_25_weekday_lunch_specials",
        "Comprobar disponibilidad del sándwich de pollo Sriracha para pedidos online.",
        "Borrador"
    ),

    # MONTH 7: March 2027
    (
        datetime.date(2027, 3, 1),
        "Captar búsquedas matutinas de café y desayuno",
        "cafe and breakfast",
        49500,
        "Fresh Mornings Start at Estime's Cafe",
        "Start your weekday morning right in Colonia, NJ. Sip freshly brewed premium coffee alongside fluffy buttermilk pancakes, cheesy omelets, and crispy bacon. Dine-in comfortably or grab curbside pickup on Inman Avenue!",
        "Foto matutina con luz natural del mostrador de café y platos de desayuno recién servidos.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_26_fresh_mornings_cafe_breakfast",
        "Revisar existencias de granos de café de tueste local y leche fresca.",
        "Borrador"
    ),
    (
        datetime.date(2027, 3, 8),
        "Promover opciones gourmet de huevos y benedicts",
        "eggs for breakfast",
        74000,
        "Gourmet Benedicts & Farm-Fresh Omelets",
        "Take eggs for breakfast to another level! Indulge in our decadent Butter-Poached Lobster Benedict with silky hollandaise, or create your custom 3-egg omelet with fresh local veggies and savory cheeses. Visit Estime's Cafe this week!",
        "Foto cenital del Lobster Benedict con la salsa holandesa brillante y huevo pochado.",
        "Order",
        f"{base_url}/menu?{utm_base}&utm_content=week_27_gourmet_eggs_benedict",
        "Confirmar suministro de langosta fresca para el especial de Benedict del fin de semana.",
        "Borrador"
    ),
    (
        datetime.date(2027, 3, 15),
        "Impulsar reuniones de mediodía y almuerzos de equipo",
        "lunch restaurants near me",
        74000,
        "Casual Mid-Day Dining in Colonia, NJ",
        "Break up your workday with a flavorful lunch! Estime's Cafe offers a relaxed atmosphere, comfortable seating, and a scratch-made menu featuring hearty sandwiches, fresh salads, and Creole favorites. Perfect for team lunches!",
        "Foto de mesa de compañeros de oficina compartiendo almuerzo en el restaurante.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_28_midday_team_lunch_dining",
        "Revisar velocidad de servicio para mesas corporativas de almuerzo de 45 minutos.",
        "Borrador"
    ),
    (
        datetime.date(2027, 3, 22),
        "Promover eventos privados primaverales (Baby & Bridal Showers)",
        "private brunch events nj",
        1200,
        "Spring Bridal & Baby Shower Brunch Venue",
        "Looking for an intimate event venue in Middlesex County? Estime's Cafe hosts unforgettable spring baby showers, bridal brunches, and birthday celebrations with customizable menus and warm service. Contact us to reserve your spring date!",
        "Foto de salón preparado para baby shower primaveral con flores y detalles en pastel.",
        "Book",
        f"{base_url}/private-events?{utm_base}&utm_content=week_29_spring_shower_brunch_venue",
        "Revisar paquetes de precios por persona para eventos de primavera en la web.",
        "Borrador"
    ),
    (
        datetime.date(2027, 3, 29),
        "Posicionar desayunos familiares de fin de semana",
        "restaurant with breakfast near me",
        823000,
        "Family-Friendly Breakfast in Woodbridge Township",
        "Bring the whole family together for weekend breakfast at Estime's Cafe! From chocolate chip pancakes for the kids to lobster bowls and artisan coffee for the adults, our diverse menu has something delicious for everyone. Free parking on-site!",
        "Foto familiar espontánea con niños sonriendo frente a un plato de pancakes con chispas.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_30_family_breakfast_woodbridge",
        "Asegurar sillas altas disponibles y menús infantiles limpios.",
        "Borrador"
    ),

    # MONTH 8: April 2027
    (
        datetime.date(2027, 4, 5),
        "Promover reservas y platos especiales para el Brunch de Pascua",
        "brunch restaurants near me",
        40500,
        "Easter Weekend Brunch in Colonia, NJ",
        "Celebrate Easter weekend with an extraordinary brunch at Estime's Cafe! Savor spring specials, Lemon Ricotta stacks, Creole Shrimp & Grits, and refreshing mimosas or juices. Check our weekend schedule and arrive early with family!",
        "Foto primaveral con decoración de Pascua y platos estrella sobre la mesa.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_31_easter_weekend_brunch",
        "Publicar aviso de horarios de apertura del domingo de Pascua con antelación.",
        "Borrador"
    ),
    (
        datetime.date(2027, 4, 12),
        "Impulsar sándwiches de desayuno para llevar en primavera",
        "sandwich for breakfast",
        165000,
        "Chef-Crafted Morning Sandwiches on Brioche",
        "Why settle for fast food breakfast? Estime's Cafe elevates the morning sandwich with thick-cut bacon, grilled pastrami, farm eggs, and house Creole sauces on toasted brioche or hard rolls. Order online for swift pickup in Colonia!",
        "Foto de primer plano del 'Monte Estime' con jamón glaseado y queso fundido.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_32_gourmet_brioche_sandwiches",
        "Comprobar tiempos de preparación de sándwiches en cocina para horas pico de 8-10 AM.",
        "Borrador"
    ),
    (
        datetime.date(2027, 4, 19),
        "Destacar combinaciones con salchicha artesanal de desayuno",
        "breakfast sausage",
        40500,
        "Savory Sausage & Egg Skillets in Colonia",
        "Love hearty breakfast sausage? At Estime's Cafe, our savory country sausage links and patties pair wonderfully with fluffy eggs, golden home fries, and buttered toast. Treat yourself to a classic American morning breakfast done right!",
        "Foto de sartén de hierro con salchicha dorada, huevos soleados y papas crujientes.",
        "Order",
        f"{base_url}/menu?{utm_base}&utm_content=week_33_savory_sausage_breakfast_skillet",
        "Verificar existencias de salchichas de cerdo y alternativas de pavo.",
        "Borrador"
    ),
    (
        datetime.date(2027, 4, 26),
        "Posicionar búsqueda geo-local en Woodbridge NJ",
        "brunch in woodbridge nj",
        320,
        "Your Destination for Brunch in Woodbridge NJ",
        "Looking for the top-rated brunch in Woodbridge Township? Located right on Inman Ave in Colonia, Estime's Cafe offers unmatched culinary creativity blending American brunch classics with vibrant Caribbean flair. Visit us this weekend!",
        "Foto panorámica del salón con comensales disfrutando del brunch soleado.",
        "Get directions",
        "https://www.google.com/maps/search/?api=1&query=40.60034991904395,-74.31259870657125",
        "Verificar que las etiquetas de ubicación en Google Maps incluyan Woodbridge y Colonia.",
        "Borrador"
    ),

    # MONTH 9: May 2027
    (
        datetime.date(2027, 5, 3),
        "Campaña principal: Brunch del Día de la Madre",
        "sunday brunch nearby",
        9900,
        "Celebrate Mother's Day Brunch at Estime's",
        "Make Mom's day truly special with Mother's Day brunch at Estime's Cafe! Treat her to fluffy Lemon Ricotta Pancakes, fresh lobster brunch bowls, and Chef Duke's signature drinks in a warm, welcoming setting. Plan your weekend visit early!",
        "Foto emotiva y cuidada con flores frescas y un plato de pancakes decorado para mamá.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_35_mothers_day_brunch",
        "Planificar refuerzo de personal en cocina y sala para el domingo del Día de la Madre.",
        "Borrador"
    ),
    (
        datetime.date(2027, 5, 10),
        "Impulsar catering para fiestas de graduación",
        "catering food",
        18100,
        "Graduation Party Catering in Central Jersey",
        "Graduation season is here! Celebrate your graduate's achievement with delicious catering platters from Estime's Cafe. Full trays of breakfast favorites, sandwich platters, and hot Creole entrees that feed crowds with ease. Order your date today!",
        "Foto de buffet de catering con bandejas surtidas decoradas para celebración escolar.",
        "Order",
        f"{base_url}/catering?{utm_base}&utm_content=week_36_graduation_party_catering",
        "Comprobar disponibilidad de fechas clave de graduación a finales de mayo y junio.",
        "Borrador"
    ),
    (
        datetime.date(2027, 5, 17),
        "Promover mariscos frescos y bowls caribeños",
        "caribbean brunch",
        2400,
        "Uncle Dunn's Shrimp & Caribbean Bowls",
        "Taste the authentic Caribbean sunshine! Savor Uncle Dunn's Shrimp sautéed in vibrant spices, or our Pan-Seared Salmon Brunch Bowl over Creole stone-ground cheddar grits. Bold, unforgettable flavors you won't find at standard diners.",
        "Video corto de camarones salteándose en la sartén con fuego y especias criollas.",
        "Order",
        f"{base_url}/menu?{utm_base}&utm_content=week_37_caribbean_seafood_brunch_bowls",
        "Verificar inventario de salmón fresco y marinado caribeño especial.",
        "Borrador"
    ),
    (
        datetime.date(2027, 5, 24),
        "Promover fin de semana largo de Memorial Day",
        "saturday brunch",
        4400,
        "Memorial Day Weekend Brunch in Colonia",
        "Kick off summer the right way with Memorial Day weekend brunch at Estime's Cafe! Join us Saturday & Sunday for outdoor vibes, iced coffees, fluffy brioche French toast, and hearty steak skillets. Walk-ins welcome!",
        "Foto luminosa de bebidas heladas y platos de brunch en ambiente veraniego.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_38_memorial_day_weekend_brunch",
        "Confirmar horarios de apertura para el lunes de Memorial Day en GBP.",
        "Borrador"
    ),
    (
        datetime.date(2027, 5, 31),
        "Posicionar almuerzos frescos y ensaladas de temporada",
        "good for lunch near me",
        135000,
        "Fresh & Flavorful Lunch Bowls in Colonia",
        "Looking for a delicious mid-day meal? Estime's Cafe serves fresh garden salads topped with grilled shrimp or blackened chicken, artisanal wraps, and savory smash burgers. Convenient dine-in and fast online ordering on Inman Ave!",
        "Foto de ensalada fresca colorida con pechuga de pollo a la parrilla y aderezo casero.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_39_fresh_flavorful_lunch_bowls",
        "Asegurar verduras de temporada frescas y aderezos caseros listos cada mañana.",
        "Borrador"
    ),

    # MONTH 10: June 2027
    (
        datetime.date(2027, 6, 7),
        "Campaña principal: Brunch del Día del Padre con Steak & Eggs",
        "breakfast with steak and eggs",
        40500,
        "Father's Day Steak & Eggs Brunch at Estime's",
        "Treat Dad to the feast he truly deserves this Father's Day! Our 12oz tender NY Strip Steak served with two eggs, crispy home fries, and house chimichurri is the ultimate dad-approved brunch. Join us in Colonia NJ this weekend!",
        "Foto apetitosa del plato de Steak & Eggs con presentación rústica perfecta para papá.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_40_fathers_day_steak_and_eggs",
        "Asegurar suficiente abastecimiento de NY Strip Steaks de 12oz para el fin de semana.",
        "Borrador"
    ),
    (
        datetime.date(2027, 6, 14),
        "Promover catering para reuniones al aire libre y empresas",
        "catering menu",
        6600,
        "Summer Corporate & Family Catering in NJ",
        "Planning a summer company outing, family reunion, or backyard party? Estime's Cafe delivers full breakfast and lunch catering setups across Middlesex and Union County. Download our complete catering menu and request a quote!",
        "Foto de bandejas de catering montadas en mesa al aire libre con pinzas y platos.",
        "Learn more",
        f"{base_url}/catering?{utm_base}&utm_content=week_41_summer_corporate_family_catering",
        "Verificar que el PDF del menú de catering descargable esté actualizado.",
        "Borrador"
    ),
    (
        datetime.date(2027, 6, 21),
        "Destacar café helado y bebidas refrescantes de verano",
        "breakfast cafe",
        33100,
        "Iced Coffees & Summer Brunch Sips",
        "Beat the June heat with refreshing specialty iced coffees and craft lemonades at Estime's Cafe! Pair your cool beverage with our famous Lemon Ricotta Pancakes or an avocado breakfast wrap. Your sunny morning stop on Inman Ave!",
        "Foto de vasos altos de café helado con hielo brillante y leche espumosa.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_42_iced_coffee_summer_brunch",
        "Revisar abastecimiento de hielo, jarabes artesanales y vasos para llevar.",
        "Borrador"
    ),
    (
        datetime.date(2027, 6, 28),
        "Captar pedidos para el fin de semana del 4 de Julio",
        "breakfast spots near me",
        90500,
        "4th of July Weekend Breakfast in Colonia",
        "Fuel up for your Independence Day celebrations at Estime's Cafe! Enjoy hearty morning platters before heading to barbecues and fireworks, or order breakfast sandwiches online for quick curbside pickup. Happy 4th from Chef Duke and team!",
        "Foto con colores patrióticos o presentación festiva con frutos rojos y arándanos.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_43_fourth_of_july_breakfast",
        "Confirmar horarios festivos del 4 de Julio en los perfiles de redes y Google.",
        "Borrador"
    ),

    # MONTH 11: July 2027
    (
        datetime.date(2027, 7, 5),
        "Promover pancakes con frutas frescas de verano",
        "breakfast near me pancakes",
        246000,
        "Summer Berry Pancakes at Estime's Cafe",
        "Nothing tastes more like summer than fluffy golden pancakes loaded with ripe seasonal berries! Try our Blueberry Stacks or famous Lemon Ricotta Pancakes griddled to perfection in Colonia NJ. Taste the summer goodness today!",
        "Foto de stack de pancakes coronados con moras, fresas y sirope cayendo en cámara lenta.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_44_summer_berry_pancakes",
        "Verificar frescura de las bayas y frutas suministradas en temporada.",
        "Borrador"
    ),
    (
        datetime.date(2027, 7, 12),
        "Posicionar brunch dominical de verano",
        "brunch sunday near me",
        40500,
        "Sunny Sunday Brunch on Inman Avenue",
        "Sundays were made for relaxing brunches. Unwind at Estime's Cafe with friends and family over Creole Shrimp & Grits, brioche French toast, and fresh juices. Dine in our air-conditioned dining room in Colonia, NJ. See you this Sunday!",
        "Foto amplia del salón acogedor y climatizado con luz veraniega y mesas llenas.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_45_sunny_sunday_summer_brunch",
        "Verificar que el aire acondicionado y la comodidad del salón estén a punto.",
        "Borrador"
    ),
    (
        datetime.date(2027, 7, 19),
        "Destacar la cocina criolla y especias caribeñas",
        "haitian restaurant nj",
        320,
        "The Flavor of Creole Spices in Central NJ",
        "What makes Estime's Cafe unique? It's Chef Duke's master blend of Haitian marinades and Creole seasoning, bringing Caribbean depth to classic American breakfast and lunch dishes. Taste something truly original this week in Colonia!",
        "Foto de mortero o cuencos con hierbas y especias criollas junto a platos terminados.",
        "Learn more",
        f"{base_url}/meet-the-chef?{utm_base}&utm_content=week_46_creole_spices_heritage",
        "Asegurar coherencia en las descripciones del menú de especias y nivel de picante.",
        "Borrador"
    ),
    (
        datetime.date(2027, 7, 26),
        "Captar paradas de almuerzo para trabajadores y familias",
        "lunch spots near me",
        90500,
        "Quick & Delicious Weekday Lunch in Colonia",
        "Tired of boring lunchtime choices? Estime's Cafe delivers fast, chef-prepared lunches: gourmet burgers, spicy Sriracha chicken, and healthy salad bowls made fresh to order. Call ahead or order online for prompt pickup!",
        "Foto de almuerzo completo con sandwich gourmet, papas fritas y refresco artesanal.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_47_quick_weekday_lunch_spots",
        "Comprobar tiempos de despacho de almuerzo para pedidos con llamada telefónica previa.",
        "Borrador"
    ),

    # MONTH 12: August 2027
    (
        datetime.date(2027, 8, 2),
        "Promover catering de vuelta al trabajo y eventos corporativos",
        "catering breakfast",
        12100,
        "Back-to-Work Breakfast Catering in Central NJ",
        "Kick off late summer projects and team meetings with hot breakfast catering from Estime's Cafe! Full trays of eggs, breakfast meats, French toast, and fresh fruit delivered right to your corporate office in Woodbridge Township. Book online!",
        "Foto de entrega de catering corporativo con cajas térmicas y presentación elegante.",
        "Order",
        f"{base_url}/catering?{utm_base}&utm_content=week_48_back_to_work_catering",
        "Contactar a clientes corporativos habituales de Middlesex County para reordenar.",
        "Borrador"
    ),
    (
        datetime.date(2027, 8, 9),
        "Destacar 180+ reseñas 5 estrellas y reputación local",
        "best breakfast near me",
        246000,
        "Rated 4.8 Stars by Over 180 Happy Guests",
        "'Best breakfast in Colonia!' See why hundreds of local guests rate Estime's Cafe 5 stars for flavorful dishes, generous portions, and heartfelt service. Thank you to our amazing Central Jersey community! Read our reviews and visit today.",
        "Gráfico con captura de reseña real de 5 estrellas con foto del plato mencionado.",
        "Learn more",
        f"{base_url}/reviews?{utm_base}&utm_content=week_49_verified_customer_reviews",
        "Utilizar solo testimonios y reseñas 100% reales extraídas de Google Reviews.",
        "Borrador"
    ),
    (
        datetime.date(2027, 8, 16),
        "Promover sándwiches gourmet para llevar antes del fin de semana",
        "breakfast shop near me",
        40500,
        "Start Your Weekend with Gourmet Sandwiches",
        "Friday mornings deserve an exceptional breakfast! Pick up 'The Mayor', 'The Beckler', or our savory Steak Egg & Cheese sandwich on your way to work or weekend road trips. Quick online pickup at Estime's Cafe in Colonia NJ.",
        "Foto en primer plano del empaque y presentación del sándwich listo para comer.",
        "Order",
        f"{base_url}/order-online?{utm_base}&utm_content=week_50_weekend_breakfast_shop",
        "Verificar que el botón de pedido en línea enlace directamente a la categoría de sándwiches.",
        "Borrador"
    ),
    (
        datetime.date(2027, 8, 23),
        "Promover el fin de semana de Labor Day y cierre de verano",
        "brunch restaurant",
        60500,
        "Labor Day Weekend Brunch Tradition",
        "Celebrate the long holiday weekend with family and friends at Estime's Cafe! Indulge in our famous Amaretto French Toast, Shrimp & Grits, and specialty morning drinks. The perfect way to wrap up summer in Central Jersey!",
        "Foto de brindis en brunch familiar con vasos altos y platos compartidos.",
        "Learn more",
        f"{base_url}/menu?{utm_base}&utm_content=week_51_labor_day_brunch_tradition",
        "Confirmar horarios de operación para el lunes de Labor Day en el perfil de Google.",
        "Borrador"
    ),
    (
        datetime.date(2027, 8, 30),
        "Celebrar 8 años de tradición, hospitalidad y comunidad",
        "restaurant for breakfast near me",
        1000000,
        "8 Years of Serving Central Jersey with Love",
        "For over 8 years, Estime's Cafe has proudly welcomed neighbors from Colonia, Woodbridge, Clark, and Edison with warm hospitality and scratch-made Caribbean-American comfort food. Join us this week and celebrate community with great food!",
        "Foto conmemorativa del equipo de Estime's Café sonriendo frente al restaurante.",
        "Learn more",
        f"{base_url}/about?{utm_base}&utm_content=week_52_eight_years_community_tradition",
        "Agradecer a los comensales habituales e incluir invitación sincera a nuevos visitantes.",
        "Borrador"
    ),
]

# Populate 52 weeks
for idx, p in enumerate(posts_data):
    row_idx = 5 + idx
    ws_cal.row_dimensions[row_idx].height = 60.75
    
    # Monthly alternating fill: check month
    dt = p[0]
    month = dt.month
    # Alternate fill based on month parity or groups
    # Sept (9): white, Oct (10): alt, Nov (11): white, Dec (12): alt, Jan (1): white, Feb (2): alt, Mar (3): white, Apr (4): alt, May (5): white, Jun (6): alt, Jul (7): white, Aug (8): alt
    row_fill = fill_white if (month % 2 == 1) else fill_alt

    # Col A: Fecha
    cA = ws_cal.cell(row=row_idx, column=1, value=dt)
    cA.number_format = "mmm\\ d\\,\\ yyyy"
    cA.alignment = align_date
    
    # Col B: Objetivo
    cB = ws_cal.cell(row=row_idx, column=2, value=p[1])
    cB.alignment = align_left

    # Col C: Keyword original
    cC = ws_cal.cell(row=row_idx, column=3, value=p[2])
    cC.alignment = align_left

    # Col D: Volumen
    cD = ws_cal.cell(row=row_idx, column=4, value=p[3])
    cD.number_format = "#,##0"
    cD.alignment = align_num

    # Col E: Título GBP
    cE = ws_cal.cell(row=row_idx, column=5, value=p[4])
    cE.alignment = align_left
    cE.font = font_data_bold

    # Col F: Texto listo para publicar (inglés)
    cF = ws_cal.cell(row=row_idx, column=6, value=p[5])
    cF.alignment = align_left

    # Col G: Idea de foto o video
    cG = ws_cal.cell(row=row_idx, column=7, value=p[6])
    cG.alignment = align_left

    # Col H: Botón
    cH = ws_cal.cell(row=row_idx, column=8, value=p[7])
    cH.alignment = align_center

    # Col I: Destino (URL con UTM)
    cI = ws_cal.cell(row=row_idx, column=9, value=p[8])
    cI.alignment = align_left
    cI.font = font_data_link

    # Col J: Revisión antes de publicar
    cJ = ws_cal.cell(row=row_idx, column=10, value=p[9])
    cJ.alignment = align_left

    # Col K: Estado
    cK = ws_cal.cell(row=row_idx, column=11, value=p[10])
    cK.alignment = align_center

    # Apply fills & default font
    for c_col in range(1, 12):
        cell = ws_cal.cell(row=row_idx, column=c_col)
        cell.fill = row_fill
        if c_col not in [5, 9]:
            cell.font = font_data

# Data validation for Estado in K5:K56
dv = DataValidation(type="list", formula1='"Borrador,Listo,Programado,Publicado"', allow_blank=True)
dv.error ='Seleccione un estado de la lista: Borrador, Listo, Programado o Publicado'
dv.errorTitle = 'Estado no válido'
ws_cal.add_data_validation(dv)
dv.add("K5:K56")

# Conditional Formatting for Estado in K5:K56
rule_publicado = CellIsRule(operator='equal', formula=['"Publicado"'], 
                            fill=PatternFill(start_color="FFDCFCE7", end_color="FFDCFCE7", fill_type="solid"),
                            font=Font(name=font_name, size=11, bold=True, color="FF166534"))
rule_programado = CellIsRule(operator='equal', formula=['"Programado"'], 
                             fill=PatternFill(start_color="FFDBEAFE", end_color="FFDBEAFE", fill_type="solid"),
                             font=Font(name=font_name, size=11, bold=True, color="FF1E40AF"))
rule_listo = CellIsRule(operator='equal', formula=['"Listo"'], 
                        fill=PatternFill(start_color="FFFEF3C7", end_color="FFFEF3C7", fill_type="solid"),
                        font=Font(name=font_name, size=11, bold=True, color="FF92400E"))

ws_cal.conditional_formatting.add("K5:K56", rule_publicado)
ws_cal.conditional_formatting.add("K5:K56", rule_programado)
ws_cal.conditional_formatting.add("K5:K56", rule_listo)


# ----------------------------------------------------
# 2. SHEET: Resumen
# ----------------------------------------------------
ws_res.views.sheetView[0].showGridLines = True
ws_res.column_dimensions["A"].width = 30.0
ws_res.column_dimensions["B"].width = 22.0
ws_res.column_dimensions["C"].width = 6.0
ws_res.column_dimensions["D"].width = 16.0
ws_res.column_dimensions["E"].width = 75.0

ws_res.row_dimensions[1].height = 26.0
ws_res.merge_cells("A1:E1")
cell_res_title = ws_res["A1"]
cell_res_title.value = "Resumen Ejecutivo del Calendario GBP — Estime's Café"
cell_res_title.font = font_title
cell_res_title.fill = fill_dark
cell_res_title.alignment = Alignment(horizontal="center", vertical="center")

# Top table headers
ws_res.row_dimensions[3].height = 24.0
for col_letter, text in [("A", "Indicador"), ("B", "Valor"), ("D", "Estado"), ("E", "Cantidad")]:
    c = ws_res[f"{col_letter}3"]
    c.value = text
    c.font = font_header
    c.fill = fill_gold
    c.alignment = align_center

# Indicators Left
res_indicators = [
    ("Total de publicaciones", 52, "0"),
    ("Frecuencia", "1 por semana", None),
    ("Primera publicación", datetime.date(2026, 9, 7), "mmm\\ d\\,\\ yyyy"),
    ("Última publicación", datetime.date(2027, 8, 30), "mmm\\ d\\,\\ yyyy"),
    ("Estado inicial", "Borrador", None)
]

for idx, (ind, val, num_fmt) in enumerate(res_indicators, 4):
    ws_res.row_dimensions[idx].height = 20.0
    cA = ws_res.cell(row=idx, column=1, value=ind)
    cA.font = font_data
    cB = ws_res.cell(row=idx, column=2, value=val)
    cB.font = font_data_bold
    cB.alignment = align_center
    if num_fmt:
        cB.number_format = num_fmt

# Status counts Right (Formulas)
statuses = ["Borrador", "Listo", "Programado", "Publicado"]
for idx, st in enumerate(statuses, 4):
    cD = ws_res.cell(row=idx, column=4, value=st)
    cD.font = font_data_bold
    cD.alignment = align_center
    cE = ws_res.cell(row=idx, column=5, value=f"=COUNTIF('Calendario 52 semanas'!$K$5:$K$56,D{idx})")
    cE.font = font_data_bold
    cE.alignment = align_num

# Category & Operating Rules Header
ws_res.row_dimensions[10].height = 24.0
ws_res.cell(row=10, column=4, value="Reglas operativas para cada publicación").font = Font(name=font_name, size=12, bold=True, color="FF111827")

ws_res.row_dimensions[11].height = 24.0
ws_res.cell(row=11, column=1, value="Categoría / Cluster").font = font_header
ws_res.cell(row=11, column=1).fill = fill_gold
ws_res.cell(row=11, column=1).alignment = align_center

ws_res.cell(row=11, column=2, value="Publicaciones").font = font_header
ws_res.cell(row=11, column=2).fill = fill_gold
ws_res.cell(row=11, column=2).alignment = align_center

categories = [
    ("Platos Insignia & Especialidades", 12),
    ("Brunch & Fin de semana", 10),
    ("Desayunos Clásicos & Sandwiches", 10),
    ("Catering Corporativo & Eventos", 8),
    ("Fusión Haitiana & Caribeña", 4),
    ("Opciones Saludables & Keto", 4),
    ("Reputación, Historia & Comunidad", 4)
]

rules = [
    ("1", "Usar una sola keyword principal por publicación para evitar canibalización semántica."),
    ("2", "Reemplazar siempre 'near me' por menciones naturales a Colonia NJ, Woodbridge Township o Central Jersey."),
    ("3", "Utilizar exclusivamente fotos y videos reales tomados en Estime's Café (238 Inman Ave). Cero fotos de stock."),
    ("4", "Verificar que la URL de destino lleve sus parámetros UTM completos para trackear pedidos y visitas en Google Analytics 4."),
    ("5", "Enlazar a /order-online para comida para llevar, a /catering para eventos/oficinas y a /menu para platos de salón."),
    ("6", "Comprobar tiempos de espera, disponibilidad de walk-ins y horarios antes de programar posts de fin de semana."),
    ("7", "Verificar disponibilidad de ingredientes frescos y especiales de temporada con Chef Duke antes de lanzar.")
]

for idx in range(7):
    row_idx = 12 + idx
    ws_res.row_dimensions[row_idx].height = 20.0
    cat, cnt = categories[idx]
    rule_num, rule_text = rules[idx]

    ws_res.cell(row=row_idx, column=1, value=cat).font = font_data
    ws_res.cell(row=row_idx, column=2, value=cnt).font = font_data_bold
    ws_res.cell(row=row_idx, column=2).alignment = align_center

    ws_res.cell(row=row_idx, column=4, value=rule_num).font = font_data_bold
    ws_res.cell(row=row_idx, column=4).alignment = align_center
    ws_res.cell(row=row_idx, column=5, value=rule_text).font = font_data


# ----------------------------------------------------
# 3. SHEET: Keywords Ubersuggest
# ----------------------------------------------------
ws_res.views.sheetView[0].showGridLines = True
ws_kw.column_dimensions["A"].width = 8.0
ws_kw.column_dimensions["B"].width = 34.0
ws_kw.column_dimensions["C"].width = 16.0
ws_kw.column_dimensions["D"].width = 14.0
ws_kw.column_dimensions["E"].width = 18.0
ws_kw.column_dimensions["F"].width = 18.0
ws_kw.column_dimensions["G"].width = 28.0
ws_kw.column_dimensions["H"].width = 20.0

ws_kw.row_dimensions[1].height = 24.0
headers_kw = [
    ("No", 8.0),
    ("Palabra clave", 34.0),
    ("Volumen", 16.0),
    ("CPC", 14.0),
    ("Dificultad pagada", 18.0),
    ("Dificultad SEO", 18.0),
    ("Cluster", 28.0),
    ("Usos en calendario", 20.0)
]

for col_idx, (header_text, width) in enumerate(headers_kw, 1):
    c = ws_kw.cell(row=1, column=col_idx, value=header_text)
    c.font = font_header
    c.fill = fill_gold
    c.alignment = align_center

# Read keywords from csv
csv_path = "seo/keywordss estime cafe.csv"
with open(csv_path, encoding="utf-8-sig", errors="replace") as f:
    reader = csv.DictReader(f)
    kw_rows = list(reader)

def assign_cluster(kw):
    kw_lower = kw.lower()
    if any(x in kw_lower for x in ["cater", "party"]):
        return "Catering & Eventos"
    elif any(x in kw_lower for x in ["brunch", "sunday brunch", "saturday brunch"]):
        return "Brunch de Fin de Semana"
    elif any(x in kw_lower for x in ["haitian", "caribbean", "creole"]):
        return "Fusión Haitiana & Caribeña"
    elif any(x in kw_lower for x in ["vegan", "healthy", "keto"]):
        return "Opciones Saludables & Keto"
    elif any(x in kw_lower for x in ["sandwich", "taco", "tacos", "steak", "sausage", "potato", "pancake", "pancakes", "eggs"]):
        return "Platos Insignia & Desayunos"
    elif any(x in kw_lower for x in ["lunch"]):
        return "Almuerzos & Mediodía"
    elif any(x in kw_lower for x in ["woodbridge", "colonia", "near me"]):
        return "Local & Cafe"
    else:
        return "Desayuno General"

for idx, r in enumerate(kw_rows, 2):
    ws_kw.row_dimensions[idx].height = 18.0
    no_val = int(r["No"])
    kw_val = r["Palabra clave"]
    vol_val = int(r["Volumen"])
    cpc_val = float(r["CPC"])
    pd_val = int(r["Dificultad pagada"])
    sd_val = int(r["Dificultad SEO"])
    cluster_val = assign_cluster(kw_val)

    cA = ws_kw.cell(row=idx, column=1, value=no_val)
    cA.alignment = align_center
    cA.font = font_data

    cB = ws_kw.cell(row=idx, column=2, value=kw_val)
    cB.font = font_data

    cC = ws_kw.cell(row=idx, column=3, value=vol_val)
    cC.number_format = "#,##0"
    cC.font = font_data
    cC.alignment = align_num

    cD = ws_kw.cell(row=idx, column=4, value=cpc_val)
    cD.number_format = "$#,##0.00"
    cD.font = font_data
    cD.alignment = align_num

    cE = ws_kw.cell(row=idx, column=5, value=pd_val)
    cE.font = font_data
    cE.alignment = align_center

    cF = ws_kw.cell(row=idx, column=6, value=sd_val)
    cF.font = font_data
    cF.alignment = align_center

    cG = ws_kw.cell(row=idx, column=7, value=cluster_val)
    cG.font = font_data

    # Formula for count of uses in calendar
    cH = ws_kw.cell(row=idx, column=8, value=f"=COUNTIF('Calendario 52 semanas'!$C$5:$C$56,B{idx})")
    cH.font = font_data_bold
    cH.alignment = align_center

# Save workbook to seo/
out_path_project = "seo/Calendario_Estimes_Cafe.xlsx"
out_path_downloads = r"C:\Users\Albin Rodriguez\Downloads\Calendario_Estimes_Cafe.xlsx"

wb.save(out_path_project)
print(f"Saved: {out_path_project}")

try:
    shutil.copyfile(out_path_project, out_path_downloads)
    print(f"Copied to: {out_path_downloads}")
except Exception as e:
    print(f"Could not copy to Downloads: {e}")

print("Calendar generation finished successfully!")
