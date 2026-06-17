# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




## Apuntes temporales

Este proyecto usa Tailwind CSS, importado en vite.config.js y posteriormente en el index.css.
También usa lucide-react para lo iconos.
Usa react-router-dom para enrutamiento.
tailwind-merge.
@radix-ui/react-toast
class-variance-authority
clsx

Para las rutas a la hora de importar, creo un alias "@" dentro del vite.config.js


Faltan definir algunas clases: text-muted-foreground, etc.

Debería poner los botones del Sobre Mi como w-fit mx-auto ?

La información de contacto no me convence, debería hacer mini tarjetas con los links y logos y hacer un flex, o mejor grid.
Addemás el formulario de contacto no creo que lo use.

En la seccion Skills debería hacer que cada skill pueda tener más de una categoría, no hacer solo backend y frontend puro. O separar lenguajes, Frameworks, librerías, etc.

Falta poner el link a mi Linkedin
Además, hacer que cada item del contacto tenga redirección en todo el contenido y no solo en una línea de texto.

Hacer un fondo animado para el tema claro también

Completar con mis proyectos

Debería traer los proyectos y skills de un Google Sheets? Hay una forma de consumir la api

debería retocar un poco la paleta de colores o poner separadores de secciones?

Completar la página de error 404 y del CV

Agregar una página que funcione como CV online, con un formato muy simple, estilo Harvard o los cvs profesionales que se usan comunmente.

corregir footer para que la distancia del texto al botón de cambio de tema claro/oscuro y al botón de subir al hero section sea la misma

el botón de theme toggle debería cambiar el mouse a la "manito" cuando se hace hover