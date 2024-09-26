const newMessage =  {
  message: 'Hi',
  title: 'Eugenia'
}

const getResult = () => {
  return 4 + 4;
}

const FirstComponent = () => {
  return (
    <div>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h1>{`${newMessage.message} ${newMessage.title}!`}</h1>
      <p>First Component</p>
      <p>getResult() retorna: {getResult()} </p>
    </div>
  )
}

export default FirstComponent