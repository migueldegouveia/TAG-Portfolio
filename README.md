# TAG Estudio – Portfolio de Arquitectura e Interiorismo

Portfolio web desarrollado para TAG Estudio, un espacio donde se presentan proyectos de arquitectura, interiorismo y reformas con un enfoque contemporáneo, funcional y visualmente cuidado.  
El sitio está construido con Next.js y emplea una estructura modular, animaciones suaves y un diseño minimalista orientado a la experiencia del usuario.

---

## Tecnologías utilizadas

- **Next.js 14** – Framework principal
- **React** – Librería de componentes
- **CSS Modules** – Estilos encapsulados por componente
- **JavaScript ES2023**
- **Formspree** – Gestión del formulario de contacto
- **PostCSS** – Procesado de estilos
- **Vercel** (opcional para despliegue)

---

## 📁 Estructura del proyecto
```
├───public
│   │
│   ├───fondos
│   │
│   ├───foto
│   │
│   ├───logo
│   │
│   ├───proyectos
│   │   ├───casa-horizonte
│   │   │
│   │   ├───cocina-moderna
│   │   │
│   │   ├───local-comercial-eco
│   │   │
│   │   ├───mercado-guadalupe
│   │   │
│   │   └───villa-nadia
│   │
│   └───videos
└───src
    ├───app
    │   │   globals.css
    │   │   Home.module.css
    │   │   layout.js
    │   │   page.js
    │   │
    │   ├───contacto
    │   │       Contacto.module.css
    │   │       page.js
    │   │
    │   ├───estudio
    │   │       Estudio.module.css
    │   │       page.js
    │   │
    │   ├───gracias
    │   │       Gracias.module.css
    │   │       page.js
    │   │
    │   └───proyectos
    │       │   page.js
    │       │   Proyectos.module.css
    │       │
    │       └───[slug]
    │               page.js
    │               ProyectoPage.module.css
    │
    ├───components
    │   │   HeroBackground.js
    │   │   HeroBackground.module.css
    │   │   MasonryGrid.js
    │   │   MasonryGrid.module.css
    │   │
    │   ├───layout
    │   │       Footer.js
    │   │       Footer.module.css
    │   │       Navbar.js
    │   │       Navbar.module.css
    │   │
    │   └───projects
    │           HomeProjectCard.js
    │           HomeProjectCard.module.css
    │           ProyectoCard.js
    │           ProyectoCard.module.css
    │
    └───data
            proyectos.js
```

- **/public** contiene imágenes, logos y assets estáticos.  
- **/src/app** organiza las páginas según la estructura de rutas de Next.js.  
- **/src/components** incluye componentes reutilizables.  
- **/src/data/proyectos.js** centraliza toda la información de los proyectos.

---

## Características principales

-  Animaciones suaves en todas las páginas  
-  Diseño minimalista y editorial  
-  Galerías con efecto fade-in progresivo  
-  Navegación fluida y transiciones consistentes  
-  Código modular y fácil de mantener  
-  Totalmente responsive  
-  Fichas técnicas completas para cada proyecto  

---

El proyecto estará disponible próximamente.
