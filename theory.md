# <img width="36" height="36"  src="https://img.icons8.com/?size=36&id=7IASjmQaPyfb&format=png&color=000000" alt="cuaderno de anotaciones"/> Teoría

## <img width="36" height="36"  src="https://img.icons8.com/?size=36&id=wPohyHO_qO1a&format=png&color=000000" alt="React"/> ¿Qué problemas resuelve React?

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

## <img width="26" height="26"  src="https://img.icons8.com/?size=26&id=wPohyHO_qO1a&format=png&color=000000" alt="React"/> Estructura de un componente

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

4. Opcional: crear una función controladora.

-> **ayuda a construir aplicaciones como si fueran bloques de LEGO: compones, reutilizas y actualizas solo lo que cambia**

## ¿Por qué es tan popular?

- Curva de aprendizaje más suave

- Basado en componentes: piensas en pequeñas piezas reutilizables.

- Actualizaciones rápidas sin recargar toda la página

- Gran comunidad y soporte en proyectos reales y empresas.

## <img width="26" height="26"  src="https://img.icons8.com/?size=26&id=wPohyHO_qO1a&format=png&color=000000" alt="React"/> React es una librería

- Es una herramienta específica para resolver un problema concreto.

- Crear interfaces de usuario (UI).

- No impone reglas estrictas sobre cómo estructurar tu aplicación completa. Tu eliges las herramientas, pero tienes que mantenerlas de forma independiente.

-> **La diferencia con un Framework**, este si:

-tiene un sistema de rutas para cambiar de página a página

-peticiones HTTP: tu decides cómo y qué usar.

-pruebas automáticas: preconfigurado para el testing

-estructura de directorios: junto con recomendaciones

-tiene una estructura completa: te da toda la forma "correcta" (y obligatoria) de hacer las cosas

### <img width="26" height="26"  src="https://img.icons8.com/?size=26&id=wPohyHO_qO1a&format=png&color=000000" alt="React"/> ¿Qué usar con React?

- Para crearla...

... si usamos como librería: `Vite`

...si usamos como framework: `Next.js` o `Expo` (para aplicaciones nativas), `React Router (v7)`

- Las dependencias al usarla ocmo librería...

...para el manejo de rutas: `React Router` ó `Tankstack router`

...para data fetching: `React Query`, `SWR` ó `RTK Query`.

### <img width="26" height="26"  src="https://img.icons8.com/?size=26&id=wPohyHO_qO1a&format=png&color=000000" alt="React"/> Beneficios de combinar React con TypeScript:

- autocompletado

- detección de errores en tiempo de desarrollo

- mejor documentación del código (solo leyendo los tipos)

- escalable en equipos

- tiene mejor intellisense y ayudas del editor

---

## <img width="36" height="36"  src="https://img.icons8.com/?size=36&id=wPohyHO_qO1a&format=png&color=000000" alt="React"/>  HOOKS

### Reglas de los hooks...

...siempre llama a los hoks en el mismo orden

...solo usa hooks en componentes funcionales o custom hooks

...los hooks deben comenzar con **use**

### Los hook básicos que hay en toda aplicación:

- `useState`: maneja un estado local en el componente.

- `useEffect`: ejecuta efectos secundarios y limpieza al desmontar el componente.

- `useContext`: accede al valor alojado en el contexto (árbol de componentes)

### Hooks adicionales

Hooks que ofrecen comportamientos adicionales

- `useReducer`
: alternativa al useState para lógica compleja

- `useRef`: referencias motables que no causan re-render

- `useMemo`: memoriza valores para evitar volverlos a calcular entre re-renders

- `useCallBack`: memoriza funciones para evitar recreaciones innecesarias.

- `useLeyourEffect`: similar a useEffect, pero sincronizando justo después del render.

- `useImperativeHandle`: expone métodos desde un componente con forwardRef.

---

## <img width="36" height="36" src="https://img.icons8.com/?size=36&id=dSyJNkceaYP4&format=png&color=000000" alt="test checking list" /> Testing

### Tipos de pruebas

- **pruebas unitarias**: pruebas atómicas simples. Se recomienda no tener dependencias de otros componentes. Debe de ser especializada en al pieza que estamos probando.

- **pruebas de integración**: ¿Cómo funcionan elementos en conjunto? No deben ser mayores a las unitarias.

- **E2E**: un flujo aislado. Objetivo específico. Pruebas de cosas improbables

### Características de las pruebas:

-fáciles de escribir

-fáciles de leer

-rápidas

-flexibles

### Triple A:

- **30% arrange** -> arreglar: importaciones e incializaciones

- **50% act** -> actuar: aplicar estímulos, llamar métodos, simular clicks

- **20% assert** -> afirmar: ¿que debe haber sucedido

### Coverage

75% de cobertura de:

-líneas (líneas ejecutadas)

-ramas (ramas de decision probadas)

-funciones (funciones/métodos invocados)

-condiciones (condiciones evaluadas en ambos sentidos)

## VITEST

- Similar a Jest, pero creada por la gente de **Vite**.

### Primeros pasos con Vitest

1. Para instalar como dependencia de desarrollo: `npm install -D vitest`

2. En el `script` del `package.json` agrego los script para luego poder utilizarlo:

```JSON
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```

Para tener un ejemplo creo la carpeta `helpers` y dentro el archivo `math.helper.ts` con algunas funciones amtematicas y luego el archivo `math.helper.test.ts` para poder crear mis test usando: `describe`, `expect`, `test` de **Vitest**

## TESTING LIBRARY

Ayuda para hacer las pruebas en componentes que tiene React.

### Primeros pasos con Testing library

1. Instalar la librería: `npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom`.

2. Ir a `vite.config.ts` y cambio la exportación de `defineConfig` por: `import { defineConfig } from 'vitest/config'`.

También agrego:

```TS
test: {
  environment: 'jsdom',
  globals: true,
}
```

3. Corremos `npm run test` y nos va a decir que no tenemos instalado `jsdom`, lo instalamos y volvemos a correr el comando para levantar los test.

4. Puedo desestructurar el `render` para usar el `container`: `const { container } = render(<MyAwesomeApp />);` que me va a englobar todo el componente y con este puedo ir buscando lo que necesite probar. Por ejemplo utilizo el `querySelector()` para localizar el primer elemento que cumpla con lo que busco

Otro modo es utilizando el `screen`. Se usa cuando hay eventos y datos que se actualizan.

- `container` vs `screen` -> el `container` se graba con los datos al renderizar el componente, pero luego si hay cambios o actualizaciones con el container no lo veo, para estos casos es necesario el `screen`

- `snapshot` -> es una radiografía del componente renderizado, para verificar que la estructura fisica del componente creado es exactamente igual a la usada previamente. Cuando utilice el `expect(container).toMatchSnapshot();` se me va a crer la carpeta `_snapshots_`, si a futuro hay cambios me va a avisar que cambio y dar la posibilidad si quiero de actualizar el archivo con el cambio o no.

- **Eventos** cuando quiero disparar un evento utilizo `fireEvent` con el evento, por ejemplo: `click`.

-**mocks**: con `vi.mock`me puedo ir creando los mocks encesarios.

-**ciclo de vida**: antes de los `test('', () => {})` puedo tener un `afterEach(() => {})`, que se ejecutara luego de cada `test`, asi por ejemplo hago una limpieza de los mocks.

5. Para ver el % de coverage, correr: `npm run coverage` y voy a tener una nueva arpeta en mi proyecto: `coverage`, dentro tengo un `index.html` y asi puedo ver en el navegador lo mismo que veo como una tabla por consola.

---

## GENERAR VERSION DE PRODUCCION

- `npm run build`: crea un nuevo directorio `dist`, el que se utiliza para subir a producción.

Se puede utilizar [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server) para crear un servidor local.

Instalarlo con `--global` y abrir terminal como `administrador` en windows, o con `super user` para Linux o Mac.

---