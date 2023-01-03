import logo from './logo.svg';
import './App.css';

function App() {
  const person = {name: 'Toshi', age: '30', favFood: 'burrito', pets: ['boo', 'fred', 'poncho']}

  // #1 - All options
  // console.log(console)

  // #2 - General
  // console.log('console.log(person):')
  // console.log(person)

  // #3 - Drop down format
  // console.dir('console.dir(person):')
  // console.dir(person)

  // #4 - Table format
  // console.table('console.table(person):')
  // console.table(person)

  // #5 - Start a timer
  console.time("Loop")
  // #6 - Log time since timer started
  console.timeLog("Loop")
  console.timeLog("Loop")
  // #7 - End timer and log total time
  console.timeEnd("Loop")

  // #8 - Only log if condition fails
  // console.assert(person.pets.find((p) => p === 'Bob'), 'Person does not have a pet named Bob')

  // #8 - Add CSS
  // console.log('%c I am a logging master', 'font-weight: bold; background: red; padding: 15px')
  // console.log('%c I am a logging master', 'color: red')
  console.log('%c JavaScript!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');


  // #10 -
  console.warn("This is a warning!")

  // #11 - Group messages together
  // console.group('Group 1')
  //   console.log('Message 1')
  //   console.log('Message 2')
  //     console.group("Group 2")
  //       console.log('Message 3')
  //     console.groupEnd()
  // console.groupEnd()

  // #12 - Group messages together with group collapsed by default
  // console.groupCollapsed('Group 1')
  //   console.log('Message 1')
  //   console.log('Message 2')
  //     console.groupCollapsed("Group 2")
  //       console.log('Message 3')
  //     console.groupEnd()
  // console.groupEnd()

  // #13 - clear console
  // console.clear()

  // #14 - 
  // console.error("This is an error!");
  // console.error('person:', person);

  // #15 -     // couterReset resets the counter with the name of counter (i.e., Counter Num)
  // for(let i = 0; i < 5; i++) {
  //   console.count("Counter Num");
  // }
  // console.countReset("Counter Num");

  // #16 - 
  // console.info("Info message");

  // #17 - String substitution
  const user = 'John';
  const age = 25;
  console.log('%s is %i years old', user, age);
  

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
