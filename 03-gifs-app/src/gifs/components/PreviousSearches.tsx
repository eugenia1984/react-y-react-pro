interface PreviousSearchesProps {
  searches: string[];
}

export const PreviousSearches = ({ searches }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {searches.map(term => <li key={term}>{term}</li>)}
      </ul>
    </div>
  )
}
