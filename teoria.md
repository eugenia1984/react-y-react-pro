
## Instalaciones recomendadas

### Instalaciones Necesarias

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


# Seccion 2: Reforzamiento sobre React

## Temas puntuales de la sección

En esta sección aprenderemos:

```
- TypeScript con los principales Hooks de React
- Pequeñas animaciones con GreenSock
- Timelines
- Custom Hooks
- Referencias a elementos del DOM
- Objetos como estado
- Interfaces
- Types
- Reducers
- Actions Creators
```

Es una sección de reforzamiento en la cual la mayoría de los conceptos deberían de ser familiares a nosotros.

---

## Para reforzar React + TypeScript

[Se puede ver en este link](https://www.youtube.com/playlist?list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M)

---

## 1 - Inicializar un repositorio

En este caso lo hizo con **Create-react-app**, peor ahora es recomendable con **Vite**

```BASH
npx create-react-app bases --template typescript
```

---

## 2- Type checking in React with JavaScript

```JavaScript
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

Cuando trabajamos con TypeScript ya no es necesario, porque vamos a usar **interface** con las **props**. Recordar que para que sea opcional hay que usar `?`.

---