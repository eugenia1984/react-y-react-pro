import { useState, useRef } from 'react';
import { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
  }

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase(); // delete empty spaces

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return; // avoid duplicated

    setPreviousTerms([query, ...previousTerms].splice(0, 8)); // Have only the last 7 searches

    // Use Giphy APi to get the gifs
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
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
