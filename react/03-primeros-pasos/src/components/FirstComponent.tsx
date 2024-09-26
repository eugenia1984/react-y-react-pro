const newMessage =  {
  title: 'Eugenia'
}

const getResult = () => {
  return 4 + 4;
}

export const FirstComponent = ( { title } ) => {
  return (
    <div>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h1>{ title }</h1>
      <h2>{`${newMessage.title}!`}</h2>
      <p>First Component</p>
      <p>getResult() retorna: {getResult()} </p>
    </div>
  )
}