import './App.css';
import { Component } from 'react';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search />
        </header>
        <main className="App-main"></main>
        <footer>
          <button className="error-button">Throw Error</button>
        </footer>
      </div>
    );
  }
}

export default App;
