import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      <div className="content-center">
        <h1>Gifs searcher</h1>
        <p>Discover and share the perfect GIF</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search gifs" />
        <button>Search</button>
      </div>
      <div className="previous-searches">
        <h2>Previous searches</h2>
        <ul className="previous-searches-list">
          <li>Film 1</li>
          <li>Film 2</li>
        </ul>
      </div>
      <div className="gifs-container">
        { mockGifs.map( gif => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title}/>
            <h3>{gif.title}</h3>
            <p>{gif.width}x{gif.height} (1.5mb)</p>
          </div>
        ))}
      </div>
    </>
  )
}
