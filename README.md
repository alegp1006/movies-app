# Movies App

Aplicación web desarrollada en React para buscar películas utilizando la API de OMDb. El proyecto combina una interfaz simple y moderna con una arquitectura limpia, hooks personalizados, gestión de estado con Context API y pruebas end-to-end para asegurar una experiencia fiable.

## ¿Qué hace el proyecto?

Esta app permite a los usuarios:

- Buscar películas escribiendo un título en el campo de búsqueda.
- Visualizar resultados en una cuadrícula responsive con título, año y póster.
- Abrir un modal con información detallada de cada película seleccionada.
- Ordenar los resultados alfabéticamente mediante una opción interactiva.
- Recibir feedback visual cuando la búsqueda está cargando o cuando no hay resultados.

La experiencia está diseñada para ser intuitiva, rápida y preparada para demostrar buenas prácticas de desarrollo frontend.

## Valor para reclutadores

Este proyecto no solo funciona como una pequeña app de películas, sino que demuestra habilidades reales de desarrollo frontend:

- Manejo de React y componentes funcionales.
- Uso de hooks personalizados para encapsular lógica de negocio.
- Integración con APIs externas mediante servicios y manejo de errores.
- Arquitectura escalable con Context API para estado global.
- Implementación de modales con React Portals.
- Pruebas de usuario con Playwright.
- Organización de código en capas claras: componentes, hooks, servicios y contextos.

## Tecnologías utilizadas

- React 19
- Vite 7
- JavaScript ES6+
- CSS personalizado para UI responsive
- React Context API
- OMDb API
- Playwright para pruebas E2E
- Testing Library DOM
- ESLint para calidad de código

## Arquitectura y enfoque técnico

El proyecto está estructurado de forma modular para separar responsabilidades:

- Components: interfaces de usuario y vistas principales.
- Hooks: lógica reutilizable para búsqueda, validación y carga de datos.
- Services: abstracción de las llamadas a la API.
- Context: manejo de estado compartido para el modal y la información de la película.

### Patrones y técnicas aplicadas

- Componentes funcionales con estado y efectos.
- Hooks personalizados para organizar la lógica de búsqueda y carga.
- Memoización con useMemo y useCallback para optimizar renderizados y evitar operaciones redundantes.
- Manejo de estados de carga, error y vacío.
- Modal con portal para mejorar la experiencia de usuario.
- Estilado responsive con CSS propio.

## Recursos utilizados

- OMDb API: fuente principal de datos de películas.
- Documentación oficial de React para composición de componentes y hooks.
- Vite como herramienta de desarrollo y build rápida.
- Playwright y Testing Library para pruebas funcionales y validación de flujos.
- ESLint y buenas prácticas de programación para mantener el código limpio.

## Configuración inicial

1. Clona el repositorio.
2. Instala las dependencias:

```bash
pnpm install
```

3. Crea un archivo de entorno con tu API key de OMDb:

```bash
VITE_KEY_MOVIES_API=tu_api_key
```

4. Inicia la app en modo desarrollo:

```bash
pnpm dev
```

## Pruebas

El proyecto incluye pruebas end-to-end con Playwright para validar:

- visualización del formulario de búsqueda,
- aparición de resultados,
- manejo de búsquedas vacías o sin coincidencias,
- renderizado de tarjetas de películas,
- comportamiento del listado al actualizar búsquedas.

Para ejecutar las pruebas:

```bash
pnpm exec playwright test
```

## Estructura del proyecto

```text
src/
  components/     Componentes de UI
  context/        Contextos para modal y datos globales
  hooks/          Lógica reutilizable con hooks
  services/       Consumo de APIs externas
  styles/         Estilos CSS
  App.jsx         Componente principal
```

## Resumen ejecutivo

Movies App es un ejemplo de una aplicación frontend moderna, con foco en usabilidad, arquitectura limpia y calidad técnica. Sirve como una excelente muestra del trabajo con React, integración de APIs, manejo de estado y pruebas funcionales, ideal para presentar en un portafolio o entrevista técnica.
