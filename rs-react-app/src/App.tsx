import './App.css';
import { Component } from 'react';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { fetchItems, type ApiResponseCharacter } from './services/apiService';
interface AllState {
  items: ApiResponseCharacter[];
  searchWord: string;
  error: null;
}
class App extends Component<{}, AllState> {
  state: AllState = {
    items: [],
    searchWord: localStorage.getItem('searchParameter') || '',
    error: null,
  };
  componentDidMount() {
    this.loadItems(this.state.searchWord);
  }
  loadItems = (searchWord: string) => {
    this.setState({ error: null });
    fetchItems(searchWord)
      .then((items) => {
        this.setState({ items });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };
  handleSearch = (searchWord: string) => {
    this.setState({ searchWord });
    localStorage.setItem('searchParameter', searchWord);
    this.loadItems(searchWord);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search
            onSearch={this.handleSearch}
            initialValue={this.state.searchWord}
          />
        </header>
        <main className="App-main">
          {!this.state.error && <CardList items={this.state.items} />}
        </main>
        <footer>
          <button className="error-button">Throw Error</button>
        </footer>
      </div>
    );
  }
}

export default App;
