import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          search_id: '',
          id: '',
          avatar_url: ''

      };
  }
  onInput = event => {
      this.setState({ [event.target.name]: event.target.value });
      fetch(`/api/developers/${event.target.value}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({id: response.id});
        this.setState({avatar_url: response.avatar_url});
    });
  }

  // searchClick = (search_id) => {
  //   fetch(`/api/developers/${search_id}`)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response)
  //     this.setState({id: response.id});
  //     this.setState({avatar_url: response.avatar_url});
  // });
  // }
 
  
  render() {
  return (
      <div>
      <div class="searchBar">
          <input className="searchInput" type="text" name='search_id' onInput={this.onInput} value={this.state.search_id} placeholder="Search for username"/>
          <div className="searchIconWrapper">
              <img className="searchIcon" src={'/images/search-24px.svg'} alt="searchIcon" />
          </div>
      </div>
      {this.state.id ? 
      <div class="homePageDevs2">
                <span className='eachDevSpan'>
                <img className="idIcon" src={`${this.state.avatar_url}`}></img> 
                <span className='devId' >{(this.state.id)} </span>
                <Link  to={`/developers/${this.state.id}`}>
                <img className="arrowIcon" style={{cursor: 'pointer'}} src='/images/north_east-24px.svg'></img>
                </Link>
                </span>
      </div>
      :null}
      </div>
      
  );
}
}


export default SearchBar