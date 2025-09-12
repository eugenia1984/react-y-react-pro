// Dentro de la Promise tengo un callbask (una función anonima)
// Es el cuerpo de mi promesa, lo que se ejecutará a destiempo

// Dicho callbask puede tener dos argumentos: resolve, reject

// <number> es un Generic
const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero!!
    // resolve(100);
    reject("Mi amigo se perdio");
  }, 2000);
});

// Si la promesa se resuelve exitosamente (resolve) -> .then()
// Si la promesa no se resuelve (reject) -> .catch()
// .finally() -> se ejecuta siempre, se suele utilizar para cerrar la conexion a una base de datos, por ejemplo
myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => console.warn(reason))
  .finally(() => console.log("- - Cierre - -"));
