# 03 - gifs app

Se crea una app en React en la cual se pueden buscar meme.

## <img width="26" height="26"  src="https://img.icons8.com/?size=26&id=7IASjmQaPyfb&format=png&color=000000" alt="cuaderno de anotaciones"/>   Temas:

- peticiones HTTP

- debounce

- manejo de estado

- comunicación entre componentes

- useEffect

- variables de entorno 

- fuentes personalizadas

- Custom Hooks - Hooks personalizados

- DevTools de React

- useRef - Hook propio de React

- Generar versión de producción

- Separación de responsabilidades

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/> Tecnologías

- JSX

- <img width="24" height="24" src="https://img.icons8.com/color/24/typescript.png" alt="typescript"/> TypeScript

- <img width="24" height="24" src="https://img.icons8.com/office/24/react.png" alt="react"/> React

- <img width="24" height="24" src="https://img.icons8.com/?size=24&id=dJjTWMogzFzg&format=png&color=000000" alt="Vite" /> Vite

- Axios

---

## Pre requisitos

Para poder ver este proyecto en local hay que correr ciertos comandos por terminal:

1. Te situas dentro de `/03-gifs-app` e instalas dependencias con: `npm install`

2. Creas tu propio archivo `.env` guiandote del archivo: `.env.template`. Es decir, ir a https://developers.giphy.com/dashboard/, crear la API_LEY y agregar su valor en `VITE_GIPHY_API_KEY=` para el nuevo archivo `.env` creado.

Tener en cuenta que el archivo `.env` está excluido en el `.gitignore` por lo que la API_KEY no estará en un repositorio expuesto de GitHub.

3. Corres el proyecto con: `npm run dev`.

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/>  Tips aprendidos

1. En una aplicación de React, ¿cuál es la principal ventaja de organizar los componentes en carpetas basadas en funcionalidades (por ejemplo, una carpeta gifs y una shared) en lugar de tener una única carpeta global de components?

**Mejora la escalabilidad y el mantenimiento del proyecto, ya que agrupa el código relacionado y facilita su localización y reutilización dentro de su propio módulo.** -> grupar los archivos por funcionalidad (componentes, acciones, interfaces, etc.) dentro de un mismo "módulo" hace que el proyecto sea mucho más fácil de entender, mantener y escalar a medida que crece.

2. ¿Por qué se utiliza el hook useState para manejar datos que cambian con el tiempo (como la lista de búsquedas previas) en lugar de una variable de JavaScript normal?

**Porque useState permite que React "reaccione" a los cambios. Cuando el estado se actualiza con su función set, React vuelve a renderizar el componente para reflejar los nuevos datos en la interfaz.** -> La principal función de useState es conectar una variable al ciclo de vida de renderizado de React. Un cambio en una variable normal no le dice a React que debe "redibujar" la pantalla, mientras que un cambio de estado con set sí lo hace.

3. ¿Cuál es el patrón de diseño principal para que un componente hijo pueda comunicar información o eventos a su componente padre (por ejemplo, notificar que se hizo clic en un término de búsqueda)?

**El componente padre pasa una función (callback) al hijo a través de las props. El hijo ejecuta esa función cuando ocurre un evento, pasándole los datos necesarios como argumentos.** -> Este es el patrón canónico en React, a menudo llamado "levantar el estado" (lifting state up). El padre mantiene el control de la lógica y le da al hijo la "capacidad" de activarla a través de la función pasada por props.

4. ¿Cuál es el objetivo principal de implementar un patrón "debounce" en una funcionalidad de búsqueda que se activa mientras el usuario escribe?

**Optimizar el rendimiento y evitar un número excesivo de peticiones a la API, ejecutando la búsqueda solo después de que el usuario ha dejado de escribir por un instante.** -> El debounce es una técnica de optimización que agrupa múltiples llamadas a una función en un corto período de tiempo en una sola, mejorando significativamente el rendimiento y la experiencia del usuario.

5. ¿Por qué es una buena práctica "mapear" o transformar la data que viene de una API externa (como Giphy) a una interfaz propia (interface Gif) en lugar de usar la respuesta cruda directamente en la aplicación?

**Desacopla la aplicación de la estructura de la API. Si la API cambia su formato de respuesta en el futuro, solo se necesita actualizar el "mapeo" en un lugar, en lugar de modificar todos los componentes que la consumen.** -> Este patrón, a veces llamado "Adaptador", hace que la aplicación sea más robusta y fácil de mantener. El resto de la aplicación trabaja con un modelo de datos consistente y propio, aislado de los cambios de fuentes externas.

6. ¿Cuál es el propósito de utilizar un archivo .env para almacenar la API Key y añadirlo al .gitignore?

**Para mantener las claves secretas y otra información sensible fuera del control de versiones (como Git), evitando que se expongan públicamente y permitiendo que cada desarrollador use su propia clave.** -> Esta es una práctica de seguridad fundamental. Exponer claves en un repositorio público es un riesgo de seguridad grave. .gitignore asegura que este archivo sensible permanezca local.

7. Al utilizar una librería como Axios, ¿qué ventaja clave ofrece la creación de una instancia preconfigurada (axios.create) para una API específica?

**Permite centralizar la configuración base (como la baseURL y parámetros comunes como la api_key), evitando la repetición de código y facilitando el mantenimiento.** -> Este enfoque sigue el principio DRY (Don't Repeat Yourself - No te repitas). Si la URL base o un parámetro común como la clave de API necesitan cambiar, solo se modifica en un lugar.

8. Verdadero o Falso: El hook useEffect se ejecuta únicamente cuando el componente se monta por primera vez en la pantalla.

**falso** -> useEffect se ejecuta después del primer renderizado y, adicionalmente, cada vez que una de las variables incluidas en su arreglo de dependencias cambia de valor entre renderizados. Si el arreglo de dependencias está vacío ([]), entonces sí se ejecuta solo una vez.

9. ¿Cuál es el propósito de un "input controlado" en React?

**Sincronizar el valor del campo de texto con el estado del componente, haciendo que React sea la "fuente de la verdad".** -> Al vincular el value del input al estado y actualizarlo con onChange, se asegura que el estado del componente y lo que ve el usuario estén siempre sincronizados, lo que facilita la manipulación y validación de los datos.

10. ¿Por qué al crear un componente genérico como un SearchBar, es una buena práctica permitir que reciba props (como placeholder) en lugar de tener valores fijos dentro de él?

**Aumenta su reutilización, permitiendo que se use en diferentes contextos con distintas configuraciones.** -> La parametrización a través de props es un pilar de React. Permite que un mismo componente sea flexible y se adapte a diferentes necesidades, lo cual es fundamental para construir aplicaciones escalables y mantenibles.

11. ¿Cuál es el propósito principal de crear un "Custom Hook" en React (por ejemplo, useGifs)?

El objetivo fundamental de los custom hooks es encapsular lógica que utiliza otros hooks (como useState o useEffect) para que pueda ser extraída de un componente y reutilizada fácilmente en otros, evitando la duplicación de código.

12. Al inspeccionar un componente con las React DevTools, ¿por qué es fundamental entender que los hooks son "posicionales"?

Esta es una de las reglas de oro de los hooks. Su orden de ejecución debe ser consistente en cada renderizado para que React pueda asociar correctamente el estado con la llamada del hook correspondiente.

13. ¿Por qué una variable de JavaScript normal (let o const) declarada dentro de un custom hook pierde su valor entre renderizados?

El cuerpo de un componente o de un custom hook es una función que se ejecuta en cada render. Solo los valores gestionados por hooks específicos como useState o useRef tienen la capacidad de persistir a través de estas ejecuciones.

14. ¿Cuál es la diferencia clave entre useState y useRef al momento de actualizar su valor?

Esta es la distinción más importante. useState está hecho para datos que, al cambiar, deben actualizar la UI. useRef es para mantener datos que deben persistir sin provocar una nueva renderización.

15. Al generar la versión de producción con npm run build, ¿por qué el proceso suele ser más estricto que el servidor de desarrollo?

16. ¿Por qué generalmente no se puede abrir el archivo index.html de la carpeta dist (producción) directamente en el navegador?

El build de producción hace referencia a sus recursos (JavaScript, CSS) con rutas absolutas desde la raíz (ej. /assets/index.js). Un servidor web entiende esta estructura, pero el sistema de archivos local (file://) no.

17. Si dos componentes diferentes en tu aplicación utilizan el mismo custom hook (ej. useGifs), ¿comparten el mismo estado entre ellos?

Esta es una característica clave del diseño de los hooks. Cada vez que se llama a useGifs(), se crea un nuevo "universo" para su estado y lógica. Para compartir estado, se necesitan otras estrategias como levantarlo a un componente padre común.

18. ¿Cuál de las siguientes afirmaciones sobre el hook useRef es correcta?

Su propósito es precisamente tener una "caja" mutable que sobrevevive a los renderizados para almacenar información (como un ID de un temporizador, un objeto de caché o una referencia a un elemento del DOM) sin afectar el ciclo de renderizado.

19. ¿Cuál es la convención de nomenclatura obligatoria para crear un Custom Hook en React?

Es una regla impuesta por React y su linter. Permite a React verificar que se están siguiendo las reglas de los hooks (por ejemplo, que no se llamen condicionalmente). Si no empieza con use, React lo tratará como una función normal.

20. ¿Qué funcionalidad clave de las React DevTools permite probar diferentes escenarios en un componente sin tener que modificar el código fuente?

 Esta es una de las características más potentes para la depuración. Permite simular diferentes estados o valores de props para ver cómo reacciona el componente, acelerando el proceso de desarrollo y solución de errores.
 


