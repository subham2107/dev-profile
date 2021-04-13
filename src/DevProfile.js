import React from 'react';
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
            console.log(response.repos);

            this.setState({avatar_url: response.avatar_url});
            this.setState({myName: response.myName});
            //this.setState({ repos: response.repos });
            //console.log(`${response[0].id}`);
            //console.log(`${response[0].avatar_url}`);
        });
    }

    render() {
    const image = `${this.state.avatar_url}`;
    return (
        <div>
            <div className="navbar">
                <h2 className="headerOne" onClick={()=> window.location='/'}>The Developer Profile</h2>
                <h2 className="headerTwo" onClick={()=> window.location='/'}>All Developers</h2>
            </div>
            <div className="devGithubInfo">
                <div>
                    <img className="bigAvatar" src={image} alt="avatar" />
                </div>
                <div>
                    <h3>{this.state.myName}</h3>
                </div>
            </div>
            <div>
                <h3 className="repoList">Github Repositories</h3>
            </div>
            <hr></hr>
            {/* <div>
            {this.state.repos}
            </div> */}
            {/* {(this.state.repos).map((repos) => (
                  <ListingProduct
                  title={product.title}
                  quantity={product.quantity}
                  product_id={product._id}
                  price={(product.price.mrp)}
                  list_price ={product.price.list_price} 
                  />
              ))} */}
        </div>
    );
}
}

export default DevProfile;
