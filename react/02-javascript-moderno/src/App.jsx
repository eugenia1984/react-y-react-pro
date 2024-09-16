import './App.css'

function App() {
  const firstName = 'María Eugenia';
  const lastName = 'Costa';
  const fullName = `${firstName} ${lastName}`;

  return (
    <h1>
      Hi, I am {fullName}, practising React.
    </h1>
  )
}

export default App
