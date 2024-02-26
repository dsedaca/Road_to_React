function getTitle(title) {
  return title;
}

var name = {
  firstName: 'Daniel',
  lastName: 'Sedaca',  
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <h3>My name is {name.firstName} {name.lastName}</h3>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
