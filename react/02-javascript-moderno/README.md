# JavaScript moderno

Temas:

```
- Generar la base sobre JavaScript
- Constantes y variables Let
- Template String
- Objetos literales
- Arreglos
- Desestructruación * (sumamente importante)
- Promesas
- Fetch API
- Ternarios
- Async - Await
```

Dentro de `src/bases` se encuentran lso archivos de JavaScript deparados por temas.

En `App.jsx` se van reflejando algunos de los temas,

---

## Importaciones y exportaciones

En `data/index.js`:

```JavaScript
export const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  }
];
```

En `App.jsx`voy a importarlo para usarlo: `import { heroes } from './data/heroes'`.


- Otro modo de exportar es la **Exportacion por defecto**, en este caso va sin nomber:

```JavaScript
export default [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  }
]
```

Y para usarlo en `App.jsx`voy a importarlo para usarlo: `import heroes from './data/heroes'`, en este caso va sin los `{}` y el nombre que voy a usar puede ser el que se me cante, por eso es mejor exportarlo con nombre.

- Mejor opción, si necesitamos exportar por defecto ya con un nombre asignado:

```JavaScript
const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  }
]

export default heroes;
```

Y la puedo importar: `import heroes from './data/heroes'`

- Si tengo una exportación por defecto más una exportación individual:

```JavaScript
const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  }
]

export const owners = ['DC', 'Marvel'];
export default heroes;
```

Para importarlo: `import heroes, { owners } from './data/heroes'`

- Otro modo es directamente esportar todo junto por default:

```JavaScript
const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  }
]

const owners = ['DC', 'Marvel'];

export {
  heroes as default,
  owners
}
```

Para importarlo de nuevo uno por default: `import heroes, { owners } from './data/heroes'`.

---