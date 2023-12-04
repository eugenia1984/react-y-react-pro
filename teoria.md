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