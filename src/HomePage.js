import React from 'react';
import './HomePage.css';
import Header from './Header';
import SearchBar from './SearchBar';
import DevInfoInput from './DevInfoInput';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DevProfile from './DevProfile';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dev:[],
        };
    }

    componentDidMount() {
        fetch('/api/developers')
        .then(response => response.json())
        .then(response => {

        if(response.length>0) {
            this.setState({dev: response});
            for(let i=0;i<response.length;i++){
                this.setState({id: this.state.dev[i].id});
                this.setState({avatar_url: this.state.dev[i].avatar_url});
            }
            
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
                <SearchBar />
                {(this.state.dev).map((eachDev) => (
                <div class="homePageDevs">
                <div><img className="idIcon" src={`${eachDev.avatar_url}`}></img> {(eachDev.id)} 
                <Link to={`/developers/${eachDev.id}`}>
                <img className="arrowIcon" style={{cursor: 'pointer'}} src='/images/north_east-24px.svg'></img>
                </Link></div>
                </div>
                ))}
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
