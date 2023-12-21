# Curso React de cero a experto

## ¿Qué es React?

Es una librería, declarativa, eficiente, prredecible y que se puede separar en componentes.

## JSX

Es la fusión de javascript con xml y nos permite utilizar las etiquetas de html en nuestro código javascript.

JSX = JS + XML

```jsx
const header = <h1>Hola mundo</h1>
```

## Babel

Es una librería para utilizar javascript moderno en cualquier navegador.

## Create React APP

Herramienta para aplicaciones react ya preconfiguradas.

https://create-react-app.dev/

## Componentes en React

Es una pequeña pieza de código encapsulada reutilizable que puede tener estado o no.

## Crear React app con Vite

Es una herramienta de construcción de proyectos para el desarrollo web en JavaScript. Vite es un "bundler" (empaquetador) y un "build tool" (herramienta de construcción) que se centra en la velocidad y la eficiencia. A diferencia de otros "bundlers" como Webpack, Vite se enfoca en ofrecer una experiencia de desarrollo rápida y reactiva.

Algunas características clave de Vite incluyen:

Rápida inicialización: Vite permite crear un nuevo proyecto con un solo comando, lo que facilita comenzar rápidamente.

Desarrollo en tiempo real: Ofrece una experiencia de desarrollo en tiempo real, lo que significa que los cambios en tu código se reflejan instantáneamente en el navegador sin necesidad de recargar la página.

Soporte para múltiples lenguajes: Vite es compatible con varios lenguajes y frameworks, incluyendo JavaScript, TypeScript, React, Vue.js y Svelte.

Optimización de producción: Vite está optimizado para la producción, lo que significa que puede generar paquetes optimizados y eficientes para su implementación en entornos de producción.

HMR (Hot Module Replacement): Vite utiliza HMR para reemplazar módulos en caliente durante el desarrollo, lo que permite una experiencia de desarrollo fluida y sin interrupciones.

En resumen, Vite es una herramienta moderna y eficiente para el desarrollo web con JavaScript y sus frameworks asociados. Es especialmente útil para proyectos que requieren un enfoque rápido y ágil durante el desarrollo.

## Hooks

https://es.legacy.reactjs.org/docs/hooks-intro.html

## Tests en react

### Test de funciones de toda la vida

```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react  
```

### Test de react y el DOM

```bash
npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
```

En el package.json añadir el comando para lanzar los tests:

```json
"scripts: {
  ...
  "test": "jest --watchAll"
```

Añadir configuraciones al babel.config.cjs

```js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true,
                }
            }
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ]
    ],
};
```

Añadir configuraciones en el jest.config.cjs

```js
module.exports = {
    testEnvironment: 'jest-environment-jsdom'
}
```

### Resumen tests

https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

## Importar css

Con un simple import del archivo css en el componente en el que lo queremos usar lo podemos añadir.

```js
import './styles.css'
```

## Estructura de carpetas en React

No hay un patrón oficial pero tenemos sugerencias:

https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
https://es.legacy.reactjs.org/docs/faq-structure.html

## Strict Mode

https://react.dev/reference/react/StrictMode