# FoodieDiw-Co 🍽️

Reto 1 - Diseño de Interfaces Web

## 📋 Descripción

FoodieDiw-Co es una aplicación web para un restaurante que permite a los usuarios explorar el menú, añadir productos al carrito y gestionar sus pedidos. El proyecto está desarrollado con HTML, CSS y JavaScript (jQuery).

## 🌐 Demo en Vivo

🔗 **[Pulsar para ver el sitio web](https://albavelascoglez.github.io/FoodieDiw-Co/)**



## ✨ Características

- **Navegación intuitiva**: Menú responsive con toggle para móviles
- **Categorías de menú**: Entrantes, Principales, Postres y Bebidas
- **Carrito de compra**:
  - Añadir productos con cantidad personalizada
  - Modificar cantidades desde el carrito
  - Eliminar productos
  - Persistencia en localStorage
  - Badge con contador de items
- **Diseño responsive**: Adaptado para móviles, tablets y desktop
- **Mapa interactivo**: Integración con Leaflet/OpenStreetMap
- **Secciones informativas**: Sobre nosotros, contacto y FAQs

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- jQuery 3.7.1
- Leaflet.js (para mapas)
- Google Fonts

## 📁 Estructura del Proyecto

```
FoodieDiw-Co/
├── index.html
├── pages/
│   ├── starters.html
│   ├── mains.html
│   ├── desserts.html
│   ├── drinks.html
│   ├── cart.html
│   ├── about-us.html
│   ├── contact.html
│   └── faqs.html
├── css/
│   ├── styles.css
│   ├── menu-items.css
│   ├── cart.css
│   ├── categories.css
│   └── ...
├── js/
│   ├── script.js
│   ├── menu-cart.js
│   └── cart-page.js
└── assets/
    └── (imágenes)
```

## 🚀 Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/AlbaVelascoGlez/FoodieDiw-Co.git
```

2. Abre el archivo `index.html` en tu navegador web

No se requiere instalación de dependencias ya que todas las librerías se cargan desde CDN.

## 🎨 Diseño Visual

### Paleta de Colores

- **Principal**: `#9c27b0` (Morado)
- **Hover**: `#7b1fa2` (Morado oscuro)
- **Texto**: `#333` (Gris oscuro)
- **Texto secundario**: `#666`
- **Fondo**: `#ffffff`
- **Fondo alternativo**: `#f9f9f9`
- **Bordes**: `#eee`

### Tipografía

- **Fuente principal**: Arial, sans-serif
- **Tamaños de fuente**:
  - Títulos principales (h1): `3rem` / `2.5rem` (menú)
  - Títulos secundarios (h2): `2rem` - `1.5rem`
  - Títulos de producto (h3): `1.3rem` - `1.5rem`
  - Texto normal: `16px` / `1rem`
  - Texto secundario: `0.95rem`
  - Precio: `1.4rem`
  - Botones: `0.95rem` - `1rem`

### Iconos

- **Sistema de iconos**: SVG inline
- **Fuente**: [Font Awesome](https://fontawesome.com/) (convertidos a SVG)
- **Iconos utilizados**:
  - 🛒 Carrito de compra (navbar) - `shopping-cart`
  - 🗑️ Eliminar producto (carrito) - `trash`
  - ➕ Añadir cantidad - texto "+"
  - ➖ Reducir cantidad - texto "-"
- **Características**:
  - Vectoriales (escalables sin pérdida de calidad)
  - Personalizables mediante CSS (color, tamaño, stroke)
  - Sin dependencias externas (SVG inline)
  - Código inline para mejor rendimiento

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets y Desktop (≥ 768px)
- 🖥️ Pantallas grandes (max-width: 1680px para contenido)

## 👥 Autor

Alba Velasco González

## 📄 Licencia

Este proyecto es parte de un trabajo académico para el módulo de Diseño de Interfaces Web.
