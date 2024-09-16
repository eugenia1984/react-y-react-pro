
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

## 01-intro-react

Primera aplicacion con el CDN de React, ReactDOM y Babel.