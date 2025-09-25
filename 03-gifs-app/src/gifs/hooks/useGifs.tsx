import { useState } from 'react'
import { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions';

const gifCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    if(gifCache[term]) {
      setGifs(gifCache[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  }

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase(); // delete empty spaces

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return; // avoid duplicated

    setPreviousTerms([query, ...previousTerms].splice(0, 8)); // Have only the last 7 searches

    // Use Giphy APi to get the gifs
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifCache[query] = gifs;
  }
  return {
    // Properties
    gifs,
    // Methods
    handleSearch,
    previousTerms,
    handleTermClicked
  }
}
