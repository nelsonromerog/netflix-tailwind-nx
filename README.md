# 🎬 Netflix Tailwind Nx

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)](https://nx.dev/)

## 📋 Descripción

Un clon de Netflix construido con Angular, Tailwind CSS y Nx. Este proyecto utiliza la API de The Movie Database (TMDB) para mostrar películas y series, con una interfaz de usuario similar a Netflix.

![Captura de pantalla del proyecto](/apps/netflix-tailwind-nx/src/assets/image.png)

## ✨ Características

- 🔍 Búsqueda de películas en tiempo real
- 📱 Diseño responsive para todos los dispositivos
- 🎭 Visualización de detalles de películas
- 🔄 Carruseles de contenido por categorías
- 🎨 Interfaz de usuario moderna con Tailwind CSS
- 🌊 Transiciones y animaciones fluidas
- 🎯 Navegación intuitiva entre secciones

## 🚀 Tecnologías utilizadas

- **Angular**: Framework para el frontend con soporte para signals
- **Tailwind CSS**: Framework de CSS para el diseño con tema personalizado de Netflix
- **Nx**: Herramienta de desarrollo monorepo para gestionar la aplicación
- **TMDB API**: API para obtener datos de películas y series

## 🛠️ Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/netflix-tailwind-nx.git
   cd netflix-tailwind-nx
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura tu API key de TMDB:
   - Sigue los pasos en la sección "Obtener API Key de TMDB" más abajo
   - Actualiza el archivo `apps/netflix-tailwind-nx/src/environments/environment.prod.ts` con tu API key:
   ```typescript
   export const environment = {
     production: true,
     apiKey: 'TU_API_KEY_AQUI',
     apiUrl: 'https://api.themoviedb.org/3',
   };
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npx nx serve netflix-tailwind-nx
   ```

5. Abre tu navegador en `http://localhost:4200`

## 🔑 Obtener API Key de TMDB

Para utilizar este proyecto, necesitarás una API key de The Movie Database (TMDB). Sigue estos pasos para obtenerla:

1. **Crear una cuenta en TMDB**:
   - Visita [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup)
   - Completa el formulario de registro y verifica tu correo electrónico

2. **Solicitar una API key**:
   - Inicia sesión en tu cuenta de TMDB
   - Ve a [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
   - Haz clic en "Crear" en la sección "API"
   - Selecciona "Developer" como tipo de uso
   - Completa el formulario con la información requerida:
     - Nombre de la aplicación (ej. "Netflix Clone")
     - Descripción (ej. "Un clon de Netflix para fines educativos")
     - URL del sitio web (puedes usar tu GitHub o localhost)
     - Acepta los términos y condiciones

3. **Obtener la API key**:
   - Una vez aprobada tu solicitud (generalmente es inmediato), verás tu API key en la página de configuración de API
   - Copia la "API Key (v3 auth)" que se muestra en la página

4. **Configurar el proyecto**:
   - Copia el archivo `environment.example.ts` a `environment.ts` y `environment.prod.ts`
   - Actualiza ambos archivos con tu API key

> **Nota**: Los archivos de entorno están excluidos en el `.gitignore` para proteger tu API key. Nunca subas estos archivos con tus claves a repositorios públicos.

## 📦 Construcción para producción

Para crear una versión de producción:

```bash
npx nx build netflix-tailwind-nx --configuration=production
```

Los archivos generados estarán en `dist/apps/netflix-tailwind-nx`.

## 📚 Estructura del proyecto

El proyecto está organizado como un monorepo Nx con la siguiente estructura:

```
netflix-tailwind-nx/
├── apps/
│   └── netflix-tailwind-nx/
│       ├── src/
│       │   ├── app/
│       │   │   ├── features/
│       │   │   │   └── movies/       # Componentes relacionados con películas
│       │   │   ├── layout/           # Componentes de estructura (navbar, hero)
│       │   │   ├── shared/           # Servicios y componentes compartidos
│       │   │   └── app.component.ts  # Componente principal
│       │   ├── environments/         # Configuración de entorno
│       │   └── assets/               # Imágenes y recursos estáticos
│       └── public/                   # Archivos públicos
└── node_modules/                     # Dependencias
```

## 🧩 Componentes principales

- **Hero Component**: Muestra una película destacada aleatoria con su información
- **Movie Row Component**: Muestra filas de películas por categoría
- **Search Component**: Permite buscar películas en tiempo real
- **Movie Details Component**: Muestra información detallada de una película

## 🔄 Flujo de datos

El proyecto utiliza el servicio `MoviesService` para gestionar:
- Obtención de películas populares
- Películas en tendencia
- Búsqueda de películas
- Selección aleatoria de películas destacadas

## 🧪 Testing

Para ejecutar los tests:

```bash
npx nx test netflix-tailwind-nx
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Tareas pendientes

- [ ] Implementar autenticación de usuarios
- [ ] Añadir soporte para series de TV
- [ ] Implementar listas de favoritos
- [ ] Añadir reproductor de video
- [ ] Mejorar la accesibilidad

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Tu Nombre - [@tu_twitter](https://twitter.com/tu_twitter) - tu.email@ejemplo.com

Enlace del proyecto: [https://github.com/tu-usuario/netflix-tailwind-nx](https://github.com/tu-usuario/netflix-tailwind-nx)

---

⭐️ Inspirado en Netflix y construido con ❤️ usando Angular, Tailwind CSS y Nx