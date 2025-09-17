import { mockGifs } from "./mock-data/gifs.mock";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Gifs searcher" description="Discover and share the perfect GIF" />
     <SearchBar  placeholder="Search gifs"/>
      <PreviousSearches searches={['Film 1', 'Film 2']}/>
      <GifsList gifs={mockGifs}/>
    </>
  )
}
