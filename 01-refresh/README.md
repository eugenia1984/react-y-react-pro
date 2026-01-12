# 01-refresh

Mini aplicación para refrescar conceptos de **JavaScript** y **TypeScript**

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/> Tecnologías

- JSX

- <img width="24" height="24" src="https://img.icons8.com/color/24/typescript.png" alt="typescript"/> [TypeScript](https://www.typescriptlang.org/)

- <img width="24" height="24" src="https://img.icons8.com/office/24/react.png" alt="react"/> R[React](https://react.dev/)

- <img width="24" height="24" src="https://img.icons8.com/?size=24&id=dJjTWMogzFzg&format=png&color=000000" alt="Vite" /> [Vite](https://vite.dev/)

---

## Pre requisitos

Para poder ver este proyecto en local hay que correr ciertos comandos por terminal:

1. Te situas dentro de `/01-refresh` e instalas dependencias con: `npm install`

2. Creas tu propio archivo `.env` guiandote del archivo: `.env.template`. Es decir, ir a https://developers.giphy.com/dashboard/, crear la API_LEY y agregar su valor en `VITE_GIPHY_API_KEY=` para el nuevo archivo `.env` creado.

Tener en cuenta que el archivo `.env` está excluido en el `.gitignore` por lo que la API_KEY no estará en un repositorio expuesto de GitHub.

3. Corres el proyecto con: `npm run dev`.

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/>  Tips aprendidos

1. En JavaScript, si declaras un objeto con const, ¿puedes cambiar el valor de sus propiedades?

`const` en objetos y arreglos asegura que la referencia de la variable no cambie, pero el contenido del objeto o arreglo sí puede ser modificado.

2. ¿Cuál es la principal diferencia entre clonar un objeto con el operador de propagación `(...)` y usar `structuredClone()`?

El operador de propagación copia las propiedades del primer nivel, pero los objetos anidados se copian por referencia. structuredClone crea una copia completamente nueva de todo el objeto, incluyendo los anidados.

3. Verdadero o Falso: Las interfaces de TypeScript se compilan en objetos de JavaScript en el código final, añadiendo peso al archivo.

Falso. Las interfaces y los tipos son construcciones de TypeScript que solo existen en tiempo de desarrollo para la verificación de tipos. Se eliminan por completo durante el proceso de transpilación a JavaScript.

4. En una función de flecha, ¿cuál es la sintaxis correcta para retornar implícitamente un objeto?

Para que el intérprete no confunda las llaves `{}` del objeto con el cuerpo de la función, el objeto debe estar envuelto en paréntesis: `() => ({ key: 'value' })`.

5. Dada la desestructuración de arreglo `const [, , , heroe] = heroes;` ¿Qué elemento del arreglo heroes se está asignando a la variable heroe?

Cada coma en la desestructuración de un arreglo salta un elemento. Las tres comas iniciales saltan los elementos en los índices 0, 1 y 2, asignando el elemento del índice 3 a la variable heroe.

6. En la tarea de useState, en la lección “Tarea – Desestructuración”, ¿por qué fue importante usar la aserción as const en el arreglo que retorna la función?

`as const` le dice a TypeScript que el arreglo tiene una estructura fija (una tupla), permitiéndole saber que el primer elemento siempre es un string y el segundo siempre es una función, lo cual es crucial para la seguridad de tipos.

7. Al usar el Fetch API para obtener datos JSON, ¿por qué es necesario un segundo paso como `.then(response => response.json())`?

La primera promesa de fetch se resuelve con un objeto Response que contiene información de la cabecera y el estado. Se necesita llamar al método .json() para procesar el cuerpo de la respuesta, el cual a su vez devuelve otra promesa.

8. En una función async, ¿qué hace la palabra clave await?

**await** solo puede usarse dentro de funciones **async** y sirve para esperar de forma no bloqueante a que una promesa se complete, simplificando la escritura de código asíncrono.

9. Dado el siguiente objeto: `const user = { fullName: 'Tony Stark', years: 45 };` ¿Cuál es la sintaxis correcta para desestructurar la propiedad fullName y asignarla a una nueva variable llamada heroName en una sola línea?

Esta es la sintaxis para renombrar una propiedad durante la desestructuración. Se indica la propiedad original (fullName), seguida de dos puntos (:) y el nuevo nombre que se le quiere dar a la variable (heroName).

10. Según la estructura de la respuesta de la API de Giphy vista en la lección “Giphy API - Obtener gifs”, ¿cuál sería la ruta de acceso correcta para obtener la URL de la imagen en su tamaño original? Puedes usar Postman para ubicarla de esta forma.

La respuesta de la API envuelve el objeto del GIF en una propiedad data. Dentro de ese objeto, las diferentes versiones de la imagen están en images, y la versión original se encuentra en original, que a su vez contiene la propiedad url.