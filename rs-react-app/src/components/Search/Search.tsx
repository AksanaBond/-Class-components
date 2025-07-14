import { Component } from 'react';
interface SearchProps {
  onSearch: (searchword: string) => void;
  initialValue: string;
}
interface SearchState {
  inputValue: string;
}
class Search extends Component<SearchProps, SearchState> {
  state = {
    inputValue: this.props.initialValue || '',
  };
  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };
  searchClick = () => {
    this.props.onSearch(this.state.inputValue.trim());
  };
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search characters..."
          className="search-input"
          onChange={this.inputChange}
        />
        <button onClick={this.searchClick}>Search</button>
      </div>
    );
  }
}
export default Search;
