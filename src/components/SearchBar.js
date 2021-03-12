import './SearchBar.css';

function SearchBar(){
  return (<div class="SearchBar">
    <input className="SearchInput" type="text" placeholder="Search for username"></input>
    <div className="SearchIconWrapper"><img className="SearchIcon" src={'/images/search-24px.svg'} alt='searchIcon'/></div>
    </div>);
}

export default SearchBar;