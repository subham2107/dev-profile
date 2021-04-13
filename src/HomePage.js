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
        this.state = {};
    }

    // componentDidMount() {
    //     fetch(`/api/developers/`)
    //     .then(response => response.json())
    //     .then(response => {
    //         this.setState({avatar_url: response.avatar_url});
    //         this.setState({id: response.id});
    //        // this.setState({repos: response.repos});
    //     });
    // }

    // onChange = (event) => {
    //     this.setState({ value: event.target.value });
    // };

    // onClick = () => {
    //     window.location = `/developers/${this.state.id}`;
    // };

    render() {
        //const image = `${this.state.avatar_url}`;
        return (
            <div class="homeContainer">
                <Header />
                <h5>Explore developer profiles</h5>
                <hr></hr>
                <SearchBar />
                <div>
                {/* <img className="idIcon" src={image}></img> {(this.state.id)} <img className="arrowIcon" onClick={()=> window.location = `/developers/${this.state.id}`}src='/images/north_east-24px.svg'></img>
                */}
                </div>
                <hr></hr>
                <h3>Could not find what you were looking for?</h3>
                <DevInfoInput />
                <Footer /> 
            </div>
        );
    }
}

export default HomePage;
