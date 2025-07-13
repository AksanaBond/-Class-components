import { Component } from 'react';
class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search characters..."
          className="search-input"
        />
        <button>Search</button>
      </div>
    );
  }
}
export default Search;
