import type { GiphyRandomResponse } from "./data/giphy-response";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
  );

  //  const data = (await response.json()) as GiphyRandomResponse;
  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then((url) => createImageInsideDOM(url));
// Otro modo, ya que mando el argumento como funcion
// getRandomGifUrl().then(createImageInsideDOM();
