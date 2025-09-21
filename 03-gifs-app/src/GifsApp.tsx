import { useState } from "react";

import { mockGifs } from "./mock-data/gifs.mock";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => console.log({term});

  const handleSearch = async (query: string) => {
    // delete empty spaces
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    // avoid duplicated
    if (previousTerms.includes(query)) return;

    // Have only the last 7 searches
    setPreviousTerms([query, ...previousTerms].splice(0,8));

    // Use Giphy APi to get the gifs
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  }

  return (
    <>
      <CustomHeader title="Gifs searcher" description="Discover and share the perfect GIF" />
      <SearchBar placeholder="Search gifs" onQuery={handleSearch} />
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
      <GifsList gifs={gifs} />
    </>
  )
}
