import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, handleTermClicked, previousTerms, gifs } = useGifs();

  return (
    <>
      <CustomHeader title="Gifs searcher" description="Discover and share the perfect GIF" />
      <SearchBar placeholder="Search gifs" onQuery={handleSearch} />
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
      <GifsList gifs={gifs} />
    </>
  )
}
