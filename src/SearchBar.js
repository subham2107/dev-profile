import './SearchBar.css';

function SearchBar() {
    return (
        <div class="searchBar">
            <input className="searchInput" type="text" placeholder="Search for username"></input>
            <div className="searchIconWrapper">
                <img className="searchIcon" src={'/images/search-24px.svg'} alt="searchIcon" />
            </div>
        </div>
    );
}

export default SearchBar;
