import { GiphyResponse } from "../interfaces/giphy.response";
import { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>(
    '/search',
    {
      params: {
        q: query,
        limit: 10,
        offset:0,
        rating: 'g',
        bundle: 'messaging_non_clips'
      },
    }
  );

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height)
  }) )
};
