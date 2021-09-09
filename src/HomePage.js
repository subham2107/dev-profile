import React from 'react';
import './HomePage.css';
import './SearchBar.css';
import Header from './Header';
import DevInfoInput from './DevInfoInput';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dev:[],
            search_id: '',
            api_res_id: '',
            api_res_avatar_url: ''
        };
    }

    onInput = event => {
        this.setState({ [event.target.name]: event.target.value });
        fetch(`/api/developers/${event.target.value}`)
        .then(response => response.json())
        .then(response => {
          this.setState({api_res_id: response.id});
          this.setState({api_res_avatar_url: response.avatar_url});
      });
    }

    componentDidMount() {
        fetch('/api/developers')
        .then(response => response.json())
        .then(response => {

        if(response.length>0) {
            this.setState({dev: response});
        }
        else {
            this.setState({});
        }
            
        });
    }


    render() {
        if(this.state.dev.length>0){
        return (
            <div class="homeContainer">
                <Header />
                <h5>Explore developer profiles</h5>
                <hr></hr>
                
        <div class="searchBar">
            <input className="searchInput" type="text" name='search_id' onInput={this.onInput} value={this.state.search_id} placeholder="Search for username"/>
            <div className="searchIconWrapper">
                <img className="searchIcon" src={'/images/search-24px.svg'} alt="searchIcon" />
            </div>

        </div>
        {this.state.api_res_id ?
        <div class="homePageDevs2">
              <span className='eachDevSpan'>
              <img className="idIcon" src={`${this.state.api_res_avatar_url}`}></img> 
              <span className='devId' >{(this.state.api_res_id)} </span>
              <Link  to={`/developers/${this.state.api_res_id}`}>
              <img className="arrowIcon" style={{cursor: 'pointer'}} src='/images/north_east-24px.svg'></img>
              </Link>
              </span>
        </div>:null} 
        {this.state.api_res_id ? null :
                <div class="homePageDevs" >
                {(this.state.dev).map((eachDev) => (
                <span className='eachDevSpan'>
                <img className="idIcon" src={`${eachDev.avatar_url}`}></img> 
                <span className='devId' >{(eachDev.id)} </span>
                <Link  to={`/developers/${eachDev.id}`}>
                <img className="arrowIcon" style={{cursor: 'pointer'}} src='/images/north_east-24px.svg'></img>
                </Link>
                </span>
                ))}
                </div>} 
                <hr style={{marginTop: '100px'}}></hr>
                <h3>Could not find what you were looking for?</h3>
                <DevInfoInput />
                <Footer /> 
            </div>
        );
        }
        else {
            return (
                <div class="homeContainer">
                <Header />
                <h5>Explore developer profiles</h5>
                <hr></hr>
                <h3>No developers added yet</h3>
                <DevInfoInput />
                <Footer /> 
            </div>
            );
        }
    }
}

export default HomePage;
