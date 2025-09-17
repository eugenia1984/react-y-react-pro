interface PreviousSearchesProps {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>
      <ul className="previous-searches-list">
        {searches.map(term => <li key={term} onClick={() => onLabelClicked(term)}>{term}</li>)}
      </ul>
    </div>
  )
}
