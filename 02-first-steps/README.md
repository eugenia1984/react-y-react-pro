# 02 - First steps

En este proyecto [**02-first-steps**](https://github.com/eugenia1984/react-y-react-pro/blob/main/02-first-steps) hay ejercicios de React para ver:

- componentes. *tip*: con el snipper y `rafc` se crea la estructura básca del componente.

- estructura y nomenclatura

- **hook** (funciones que permiten a los componentes usar el estado y otras características de React) 

-reglas de los hooks...

...siempre llama a los hoks en el mismo orden

...solo usa hooks en componentes funcionales o custom hooks

...los hooks deben comenzar con **use**

-algunos son: **useState** (maneja un estado local en el componente)

- CSS condicional

- módulos de css

- impresiones de variables

- **props**: son valores o funciones que se envían al componente, deben ser inmutables y permiten la personalización.

- **Renderizado** (es el proceso de convertir el código en HTML y mostrarlo en el navegador) y **re-render** (cuando React vuelve a dibujar un componente porque cambió su estado o props)

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/> Tecnologías

- JSX

- <img width="24" height="24" src="https://img.icons8.com/color/24/typescript.png" alt="typescript"/> [TypeScript](https://www.typescriptlang.org/)

- <img width="24" height="24" src="https://img.icons8.com/office/24/react.png" alt="react"/> [React](https://react.dev/)

- <img width="24" height="24" src="https://img.icons8.com/?size=24&id=dJjTWMogzFzg&format=png&color=000000" alt="Vite" /> [Vite](https://vite.dev/)

- [Vitest](https://vitest.dev/), para los test

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/>  Tips aprendidos

### React

1. ¿Cuál es la razón principal por la que un componente de React debe devolver un único elemento raíz (como un `<div>` o un fragmento `<>...</>`)?

Esta es la razón fundamental. JSX necesita un único punto de entrada para cada componente para poder construir el árbol de elementos de manera coherente.

2. Verdadero o Falso: Las dependencias listadas en devDependencies dentro del archivo package.json se incluyen en el paquete final (bundle) que se despliega en producción.

Las devDependencies son herramientas solo para el entorno de desarrollo (como Vite, ESLint, TypeScript) y no forman parte del código que se entrega al usuario final.

3.  Verdadero o Falso: Para pasar una prop de tipo número (number) a un componente en JSX, debes usar comillas, de esta manera: `<MiComponente cantidad="10" />`.

Los valores que no son strings (como números, booleanos u objetos) deben pasarse utilizando llaves {} para que JSX los interprete como expresiones de JavaScript.

4. ¿Por qué en JSX se debe usar className en lugar de class para asignar una clase de CSS a un elemento?

Exacto. Para evitar conflictos con la palabra clave class de JavaScript, el equipo de React decidió usar className en su lugar para la manipulación de clases CSS en JSX.

5. Usando el hook useState, si tienes `const [valor, setValor] = useState(10);` ¿Cuál es la forma correcta de actualizar valor a 11?

Esta es la manera correcta. La función actualizadora (setValor) es la única que debe usarse para cambiar el estado, lo que provoca un nuevo renderizado del componente.

6. Verdadero o Falso: Si intentas renderizar una variable booleana directamente en JSX, como en `<h1>{unaVariableBooleana}</h1>` React mostrará en pantalla el texto "true" o "false".

Los valores booleanos (true, false), null y undefined no producen ninguna salida visual en React. Esto es útil para el renderizado condicional.

7. Verdadero o Falso: Para usar CSS Modules en un proyecto de React, el archivo de estilos debe llamarse `[NombreComponente].css`.

La convención de nomenclatura para activar CSS Modules es [NombreComponente].module.css. La parte .module es la que indica que los estilos deben ser encapsulados.

8. Al renderizar una lista de elementos con .map(), ¿por qué se considera una mala práctica usar el index del arreglo como la key?

Esta es la razón principal. La key debe ser un identificador estable y único asociado al contenido del elemento, no a su posición en la lista.

9. Verdadero o Falso: Al asignar una función a un evento como onClick, la forma correcta es invocar la función directamente en el JSX: `onClick={miFuncion()}`.

Se debe pasar la referencia a la función (onClick={miFuncion}). Invocarla con () la ejecutaría en cada renderizado, no solo cuando ocurra el evento de clic.

10. En una estructura de proyecto de Vite con React, ¿cuál es el propósito principal de la carpeta public?

Exacto. Los archivos en la carpeta public se copian tal cual a la raíz del directorio de compilación, siendo accesibles directamente desde el HTML.

### Testing

1. En el contexto de Vitest, ¿cuál es el propósito principal de la función describe()?

describe() funciona como un contenedor que permite organizar el "test suite" en bloques lógicos, lo cual es especialmente útil cuando un archivo contiene pruebas para múltiples funcionalidades.

2. Al probar un componente de React, ¿cuál es la diferencia fundamental entre usar screen y desestructurar container desde la función render?

Esta es la distinción clave. Se recomienda usar screen porque refleja los cambios en la UI después de que se disparan eventos, mientras que container no se actualiza y solo representa el estado inicial.

3. Verdadero o Falso: Una prueba de "snapshot": (.toMatchSnapshot())` fallará si se modifica la lógica interna de un componente, aunque el HTML resultante sea exactamente el mismo.

Una prueba de snapshot solo compara la "fotografía" del HTML guardado con el nuevo HTML generado. No le importa cómo se generó ese HTML, por lo que cambios en la lógica que no afecten la salida visual no harán que la prueba falle.

4. ¿Cuál es el propósito principal de "mockear" un componente hijo (por ejemplo, ItemCounter) cuando se prueba un componente padre (FirstStepsApp)?

El "mocking" es fundamental para las pruebas unitarias. Permite probar un componente de forma aislada, evitando que su prueba dependa del comportamiento o de las dependencias (ej. llamadas a API) de sus hijos.

5. Para simular un click de un usuario en un botón dentro de una prueba, ¿qué herramienta de React Testing Library se utiliza?

ireEvent es la utilidad proporcionada por Testing Library para disparar eventos del DOM de forma programática, como clics, cambios de input, etc.

6. Verdadero o Falso: El reporte de cobertura de pruebas (coverage) indica qué tan bien está escrita la lógica de las pruebas.

La cobertura es una métrica cuantitativa, no cualitativa. Simplemente te muestra qué partes de tu código fuente no están siendo probadas, pero no te dice si las pruebas existentes son buenas, significativas o correctas.

7. Si una prueba falla porque un "snapshot" no coincide con el renderizado actual y el cambio en el componente fue intencional y correcto, ¿qué se debe hacer?

Esta es la forma estándar y segura de aceptar un cambio en la UI y actualizar la "fotografía" con la que se compararán las futuras ejecuciones.

8. ¿Cuál es el propósito de usar: `afterEach(() => { vi.clearAllMocks(); })` en un archivo de pruebas?

El propósito fundamental es garantizar que cada prueba comience con un "borrón y cuenta nueva" para las funciones mock, reseteando su historial (ej. número de llamadas). Esto es crucial para la independencia y fiabilidad de las pruebas.

9. Para verificar que un componente "mockeado" fue llamado con un conjunto específico de props (por ejemplo, { name: 'Producto A', quantity: 5 }), ¿qué "matcher" de Vitest se debe usar?

Este es el matcher específico para verificar los argumentos con los que se invocó una función "espía" o mock

10. Verdadero o Falso: La mejor estrategia para buscar un elemento en una prueba es siempre usar un data-testid porque es la más robusta y directa.

La jerarquía de consultas recomendada por React Testing Library prioriza métodos que se asemejan a cómo un usuario encontraría los elementos (por rol, por texto, por label), dejando getByTestId como una opción de escape para cuando otras consultas no son prácticas.