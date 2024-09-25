const getImage = async () => {
  // try-catch para manejar el error
  try {
    // await ayuda a trabajar el codigo ocmo si fuera sincrono
    const API_KEY = 'cHjKWJE8DGKCmixK8wqjo1Gsa7Sax0MR';

    // await -> espera que esta promesa termine antes de ejecutar la proxima linea de codigo
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await resp.json();

    return data.images.original.url;
  } catch(error) {
    console.error(error);
  }
}

getImage();