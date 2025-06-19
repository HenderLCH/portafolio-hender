Portfolio de Desarrollador Full-Stack
Plantilla profesional para desarrolladores con diseño moderno y funcionalidades interactivas

🚀 Características Principales
Diseño Moderno: Interfaz elegante con modo oscuro y efectos visuales sutiles

Totalmente Responsive: Adaptable a móviles, tablets y escritorio

Animaciones Fluidas: Transiciones suaves con Framer Motion

Portafolio Bilingüe: Soporte para español e inglés

Organización Modular: Componentes React bien estructurados

Optimizado para Performance: Construido con Vite y Tailwind CSS

🛠 Tecnologías Utilizadas
Categoría	Tecnologías
Framework	React 18
Estilos	Tailwind CSS, Tailwind Animate
Animaciones	Framer Motion
Componentes UI	Radix UI, Shadcn UI
Iconos	Lucide React
Empaquetador	Vite
Internacionalización	Sistema propio de traducciones
📦 Instalación y Configuración
Sigue estos pasos para configurar el proyecto localmente:

Clonar el repositorio

bash
git clone https://github.com/HenderLCH/portafolio-hender.git
cd tu-portfolio
Instalar dependencias

bash
npm install
Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto:

bash
npm run dev
Generar build de producción

bash
npm run build
🧩 Estructura de Directorios
bash
src/
├── components/       # Componentes reutilizables
├── sections/         # Secciones principales del portafolio
├── data/             # Datos y traducciones
├── styles/           # Estilos globales
├── App.jsx           # Componente principal
└── main.jsx          # Punto de entrada
public/
└── images/           # Imágenes del portafolio
✨ Personalización
1. Actualizar información personal
Modifica el archivo src/data/translations.js con tus datos:

jsx
// Ejemplo para la sección "Acerca de Mí"
about: {
  title: "Acerca de Mí",
  description: "Tu descripción profesional aquí...",
  location: "Tu ubicación",
  languages: "Idiomas que hablas"
},
2. Cambiar el tema de colores
Edita tailwind.config.js para personalizar la paleta:

js
theme: {
  extend: {
    colors: {
      primary: {
        400: '#38bdf8', // Azul principal
        600: '#0284c7', // Azul oscuro
      },
      background: '#0f172a', // Fondo oscuro
    }
  }
}
3. Añadir nuevos proyectos
Agrega tus proyectos en translations.js:

jsx
projects: {
  items: [
    {
      title: "Mi Nuevo Proyecto",
      description: "Descripción del proyecto...",
      tech: ["React", "Node.js"],
      github: "https://github.com/tu-usuario",
      live: "https://tudominio.com",
      image: "/public/images/nuevo-proyecto.jpg"
    }
  ]
}
4. Cambiar imágenes
Sube tus imágenes a public/images/

Actualiza las rutas en translations.js

Asegúrate de usar tamaños óptimos (recomendado: 800x600px)

🌐 Despliegue
Puedes desplegar tu portafolio en:

https://vercel.com/button
https://www.netlify.com/img/deploy/button.svg

Configuración recomendada para Vercel:

Framework: Vite

Build Command: npm run build

Output Directory: dist
