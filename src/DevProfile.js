import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './DevProfile.css';


class DevProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        };
    }

    componentDidMount() {
        fetch(`/api/developers/${this.props.match.params.developerId}`)
        .then(response => response.json())
        .then(response => {
            this.setState({id: response.id});
            this.setState({avatar_url: response.avatar_url});
            this.setState({myName: response.myName});
            this.setState({company: response.company});
            this.setState({blog: response.blog});
            this.setState({location: response.location});
            this.setState({email: response.email});
            this.setState({bio: response.bio});
            this.setState({linkedin_id: response.linkedin_id});
            this.setState({codechef_id: response.codechef_id});
            this.setState({hackerrank_id: response.hackerrank_id});
            this.setState({twitter_id: response.twitter_id});
            this.setState({medium_id: response.medium_id});
            this.setState({ repos: response.repos });

        });
    }

    render() {
    
    return (
        <div>
            <div className="navbar">
                <div className="headerOne">
                    <Link to='/' style={{ textDecoration: 'none' }}><h2>The Developer Profile</h2></Link>
                </div>
                <div className="headerTwo">
                    <Link to='/' style={{ textDecoration: 'none' }}><h2>All Developers</h2></Link>
                </div>
        </div>
            <div className="devGithubInfo">
                <div>
                    <img className="bigAvatar" src={`${this.state.avatar_url}`} alt="avatar" />
                </div>
                <div>
                    <h3>{this.state.myName}</h3>
                    <h5>{this.state.bio}</h5>
                    <div className='devIcons'>
                    <a href = {`https://github.com/${this.state.id}`} target="_blank"><img className="companyIcon0" src={'/images/iconfinder_github_317712.png'} alt="icon" /></a>
                    {this.state.hackerrank_id?<a href = {`https://www.hackerrank.com/${this.state.hackerrank_id}`} target="_blank"><img className="companyIcon3" src={'/images/iconfinder_160_Hackerrank_logo_logos_4373234.png'} alt="icon"/></a>:null}
                    {this.state.codechef_id?<a href = {`https://www.codechef.com/users/${this.state.codechef_id}`} target="_blank"><img className="companyIcon3" src={'/images/codechef-1324440139527402917_32.png'} alt="icon"/></a>:null}
                    {this.state.linkedin_id?<a href = {`https://www.linkedin.com/in/${this.state.linkedin_id}`} target="_blank"><img className="companyIcon3" src={'/images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png'} alt="icon"/></a>:null}
                    {this.state.medium_id?<a href = {`https://medium.com/@${this.state.medium_id}`} target="_blank"><img className="companyIcon3" src={'/images/iconfinder_Circled_Medium_svg5_5279113.png'} alt="icon"/></a>:null}
                    {this.state.twitter_id?<a href = {`https://twitter.com/${this.state.twitter_id}`} target="_blank"><img className="companyIcon3" src={'/images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png'} alt="icon"/></a>:null}
                    {this.state.email?<a href = {`mailto:${this.state.email}`} target="_blank"><img className="companyIcon3" src={'/images/email-24px.svg'} alt="icon"/></a>:null}
                    </div>
                    <div className='gitAddInfo'>
                    <img className="companyIcon2" src={'/images/location_on-24px.svg'} alt="icon"/>
                    <span>{this.state.location}</span>
                    <img className="companyIcon1" src={'/images/business-24px.svg'} alt="icon"/>
                    <span>{this.state.company}</span>
                    <img className="companyIcon1" src={'/images/insert_link-24px (1).svg'} alt="icon"/>
                    <span>{this.state.blog}</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="repoList">Github Repositories</h3>
            </div>
            {this.state.repos?
            <div className='repoContent'>
            <hr ></hr>
            {(this.state.repos).map((eachRepo) => (
            <div>
            <span className='repoName'>{eachRepo.name} </span>
            <a href = {`${eachRepo.html_url}`} target="_blank"><img className="arrowIcon" style={{cursor: 'pointer'}} src='/images/north_east-24px.svg'></img></a>
            <span className='updatedOn'>Updated on {(new Date(eachRepo.updated_at)).toDateString()} </span>
            <div className='repoDescription'>{eachRepo.description}</div>
            <hr></hr>
            </div>
            ))}
            </div>:null}
            <Footer/>
        </div>
    );
}
}

export default DevProfile;
