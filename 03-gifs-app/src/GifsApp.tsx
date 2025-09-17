import { useState } from "react";

import { mockGifs } from "./mock-data/gifs.mock";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";


export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['film 1', 'film 2']);

  const handleTermClicked = (term: string) => console.log(term);

  const handleSearch = (query: string) => console.log({ query });

  return (
    <>
      <CustomHeader title="Gifs searcher" description="Discover and share the perfect GIF" />
      <SearchBar placeholder="Search gifs" onQuery={handleSearch} />
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
      <GifsList gifs={mockGifs} />
    </>
  )
}
