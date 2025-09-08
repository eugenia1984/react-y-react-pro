# Teoría

## ¿Qué problemas resuelve React?

Anteriormente las interfaces se construian con JavaScript o jQuery, y se parecían a:

```JavaScript
const button = document.querySelector('#mi-boton');
let contador = 0;

button.addEventListener('click', () => {
  contador++;
  document.querySelector('#contador').innerText = contador;
});
```

-> **manipular el DOM**: decir cómo y dónde

-> **difícil de mantener**: cuano al aplicación crece, la sincronización es complicada.

-> **sin estructura clara**: reutilizar código o dividir responsabilidades es enredado.

### La propuesta de React y lo que viene a solucionar:

- **una librería para contruir interfaces**: curva de aprendizaje suave-

- **sintaxis JSX/TSX**: es una extensión de sintaxis para JavaScript.

- **componentes reutilizables**: parametrizables y predecibles.

- **DOM virtual**: mejora el rendimiento.

## Estructura de un componente

```JSX
import { useState } from React;

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(cunt + 1);

  return (
    <div>
       <p>Haz hecho click {counter} veces</p>
       <button onCLick={handleClick}>Click</button> 
    </div>  
  )
}
```

1. Creamos una función

2. Retornamos un HTML. Los `{}` son expresiones de JavaScript

3. Opcional: creamos una pieza de estado usando un hook. Importar el hook de React.

3. Opcional: crear una función controladora.

-> **ayuda a construir aplicaciones como si fueran bloques de LEGO: compones, reutilizas y actualizas solo lo que cambia**

## ¿Por quñe es tan popular?

- Curva de aprendizaje más suave

- Basado en componentes: piensas en pequeñas piezas reutilizables.

- Actualizaciones rápidas sin recargar toda la página

- Gran comunidad y soporte en proyectos reales y empresas.

## React es una librería

- Es una herramienta específica para resolver un problema concreto.

- Crear interfaces de usuario (UI).

- No impone reglas estrictas sobre cómo estructurar tu aplicación completa. Tu eliges las herramientas, pero tienes que mantenerlas de forma independiente.

-> **La diferencia con un Framework**, este si:

-tiene un sistema de rutas para cambiar de página a página

-peticiones HTTP: tu decides cómo y qué usar.

-pruebas automáticas: preconfigurado para el testing

-estructura de directorios: junto con recomendaciones

-tiene una estructura completa: te da toda la forma "correcta" (y obligatoria) de hacer las cosas

### ¿Qué usar con React?

- Para crearla...

... si usamos como librería: `Vite`

...si usamos como framework: `Next.js` o `Expo` (para aplicaciones nativas), `React Router (v7)`

- Las dependencias al usarla ocmo librería...

...para el manejo de rutas: `React Router` ó `Tankstack router`

...para data fetching: `React Query`, `SWR` ó `RTK Query`.

### Beneficios de combinar REact con TypeScript:

- autocompletado

- detecciçon de errores en tiempo de desarrollo

- mejor documentación del código (solo leyendo los tipos)

- escalable en equipos

- tiene mejor intellisense y ayudas del editor

---