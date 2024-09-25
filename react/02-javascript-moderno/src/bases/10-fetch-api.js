const API_KEY = 'rP8BAcF63JtePn6KPgtPAEw9qcZxp6qh';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

// httpCall.then( (resp) => {
//  resp.json().then( data => console.log(data))
// })
// .catch(console.warn);

// Promesas en cadena, el resultado de la promesa pasa la siguiente then()
httpCall
  .then( (resp) => resp.json())
  .then( ({data}) =>  {
    const { url } = console.log(data.images.original);
    console.log(url)
  })
  .catch(console.warn);

  