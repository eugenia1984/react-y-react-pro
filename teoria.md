
# INSTALACIONES RECOMENDADAS

## Instalaciones Necesarias

- [Visual Studio Code](https://code.visualstudio.com/)

- [Postman](https://www.postman.com/downloads/)

- [Mongo Compass](https://www.mongodb.com/try/download/compass)

- [Git](https://git-scm.com/)
```
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

- [Node](https://nodejs.org/es/)

- [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)


## Extensiones de VSCode

- [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

### Configuración del Bracket Pair Colorizer 2

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#0098FA"
],
```
### Tema que estoy usando en VSCode:

- [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

- [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Instalaciones adicionales

- [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

- [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)

- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)

---
---

# ¿QUE ES REACT?

- Es una **librería**.

- Es **declarativa**

- Es **eficiente** con su Virtual DOM

- Trabaja de manera prevesible (one way data binding), hay una unica fuente de verdad, la información viaja en una sola vía.

- Se crean **componentes**, piezas más pequeñas, fáciles de mantener

- Server-side con Node.js y aplicaciones móbiles con **React Native**.

## Código de React

JSX = JS + XML

```JSX
// hacemos referencia a un div con el id root
const divRoot = document.querySelector('#root');

// ReactDOM tiene un método llamado .render(), con dos parametros
// lo que va a estar renderizado y donde
ReactDOM.render(<h1>Hola mundo</h1>, divRoot);
```

Sino sería:

```JavaScript
const h1Tag = <h1>Hola mundo</h1>;
const h1Tag = document.createElement('h1', null, 'Hola mundo');
```

---
---

## PROYECTOS:

- [01-intro-react](https://github.com/eugenia1984/react-y-react-pro/tree/main/react/01-intro-react)

Primera aplicacion con el CDN de React, ReactDOM y Babel.

- [02-javascript-moderno](https://github.com/eugenia1984/react-y-react-pro/tree/main/react/02-javascript-moderno), para tener la base de JavaScript moderno (ES6).

- 03-primeros-pasos

---
---

## 03 Primeros pasos

### Temas:

```
-Nuestra primera aplicación - Hola Mundo
-Exposiciones sobre los componentes
-Creación de componentes (Functional Components)
-Propiedades - Props
-Impresiones en el HTML
-PropTypes
-DefaultProps
-Introducción general a los Hooks
-useState
```

### Componente en React

- Es una pequeña pieza de código encapsulada re-utilizable que puede tener estado o no.

- Se nombran con UpperCamelCase

- Hay un componente principal `TwitterApp`que va a tener rutas con el  `Router`y luego apareceran las Screens `Views`con sus componentes hijos (cada uno responsable de una acción determinada) los que pueden ser reutilizables y presonalizables mediante las **props**.

- Un **componente** es una pequeña pieza de código encapsulada que realiza un trabajo en específico. Puede tener un **state**(como se encuentra la información de un componente en un determinado momento) o no.

### Fragment `<>`

Cuando hay en el return varios hermanos, se envuelve todo en un fragment.

Es un agrupados de elementos, ya que solo se regresa **un solo nodo padre**, luego dentro si puede tener multiples hijos.


### JSX

Con `{}` se utiliza para mostrar string, numbers, array, pero **no objetos**, los objetos no son validos como ReactChild.


### Estilos

Se puede usar todo CSS, modulos de CSS, Less, SASS, librerias como TAilwind o Bootrstap, etc.

En `main.jsx`importo: `import './index.css'`que van a ser los estilos globales, disponibles en toda la aplicación.

### Props (Properties)

Comunicación entre componentes.

Las props se reciben, son un **objeto**.

Es el canal de comunicación entre el **componente padre** hacia el **componente hijo**.

Se suelen desestructurar para no tener `props.title` sino usar `title`. Y se le puede asignar un valor por defecto o no

---