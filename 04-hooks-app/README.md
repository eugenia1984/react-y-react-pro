# 03 - gifs app

Se crea una app en React en la cual se pueden buscar meme.

## <img width="26" height="26"  src="https://img.icons8.com/?size=26&id=7IASjmQaPyfb&format=png&color=000000" alt="cuaderno de anotaciones"/>   Temas:

Objetivo: reforzar el conocimiento de los hooks tradicionales y especializarlos en los "custom hooks"

Puntualmente veremos:

- useState

- useRef

- useEffect

- Custom Hooks como: useCounter, usePokemon y useTrafficLight

- Conectar múltiples custom hooks entre sí

---

## <img width="26" height="26" src="https://img.icons8.com/officel/16/command-line.png" alt="command-line"/> Tecnologías

- JSX

- <img width="24" height="24" src="https://img.icons8.com/color/24/typescript.png" alt="typescript"/> [TypeScript](https://www.typescriptlang.org/)

- <img width="24" height="24" src="https://img.icons8.com/office/24/react.png" alt="react"/> [React](https://react.dev/)

- <img width="24" height="24" src="https://img.icons8.com/?size=24&id=dJjTWMogzFzg&format=png&color=000000" alt="Vite" /> [Vite](https://vite.dev/)

- [Vitest](https://vitest.dev/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (para los test) 

- <img  width="24" height="24" src="https://img.icons8.com/?size=24&id=CIAZz2CYc6Kc&format=png&color=000000" alt="Tailwind" />[Tailwind.CSS](https://tailwindcss.com/), para los estilos

- [PokeAPI](https://pokeapi.co/), para otener la información de los Pokemones

---

### Tailwind.CSS para los estilos

1. Ir a la página de Tailwind y buscar la parte de la instalación con Vite: [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)  e instalar con: `npm install tailwindcss @tailwindcss/vite`

2. Configurar el plugin de Vite en `vite.config.ts`.

3. Agregar el `import` de Tailwind en el CSS con: `@import "tailwindcss";` en el `index.css` asi lo tengo global

