import logo from './logo.svg';
import './App.css';

function App() {
  console.log('hello')

  const person = {name: 'Toshi', age: '30', favFood: 'burrito', pets: ['boo', 'fred', 'poncho']}

  // #1 - All options
  console.log(console)

  // #2 - General
  console.log(person)

  // #3 - Drop down format
  console.dir(person)

  // #4 - Table format
  console.table(person)

  // #5 - Start a timer
  console.time()
  // #6 - Log time since timer started
  console.timeLog()
  console.timeLog()
  // #7 - End timer and log total time
  console.timeEnd()

  console.time()
  console.timeLog()
  console.timeEnd()

  // #8 - Only log if condition fails
  console.assert(person.pets.find((p) => p === 'Bob'), 'Person does not have a pet named Bob')

  // #8 - Add CSS
  console.log('%c I am a logging master', 'font-weight: bold; background: red; padding: 15px')

  // #10 -
  console.warn("This is a warning!")


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
