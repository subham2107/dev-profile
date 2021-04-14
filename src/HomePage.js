import React from 'react';
import './HomePage.css';
import Header from './Header';
import SearchBar from './SearchBar';
import DevInfoInput from './DevInfoInput';
import Footer from './Footer';
import DevProfile from './DevProfile';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            avatar_url: '',
        };
    }

    componentDidMount() {
        fetch('/api/developers')
        .then(response => response.json())
        .then(response => {
            console.log(response);
        if(response.length>0) {
            this.setState({avatar_url: response[0].avatar_url});
            this.setState({id: response[0].id});
            //console.log(`${response[0].id}`);
            //console.log(`${response[0].avatar_url}`);
        }
        else {
            this.setState({});
        }
            
        });
    }

    
    onArrowClick = () => {
        window.location = `/developers/${this.state.id}`;
    };

    render() {

        if(this.state.avatar_url){
        const image = `${this.state.avatar_url}`;
        return (
            <div class="homeContainer">
                <Header />
                <h5>Explore developer profiles</h5>
                <hr></hr>
                <SearchBar />
                <div>
                <img className="idIcon" src={image}></img> {(this.state.id)} <img className="arrowIcon" style={{cursor: 'pointer'}} onClick={this.onArrowClick} src='/images/north_east-24px.svg'></img>
                </div>
                <hr></hr>
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
