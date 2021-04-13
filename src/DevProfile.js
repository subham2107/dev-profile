import './DevProfile.css';

function DevProfile() {
    return (
        <div>
            <div className="navbar">
                <h2 className="headerOne" onClick={()=> window.location='/'}>The Developer Profile</h2>
                <h2 className="headerTwo" onClick={()=> window.location='/'}>All Developers</h2>
            </div>
            <div className="devGithubInfo">
                <div>
                    <img className="bigAvatar" src={'images/account_circle-24px.svg'} alt="avatar" />
                </div>
                <div>
                    <h3>Subham Mitra</h3>
                </div>
            </div>
            <div>
                <h3 className="repoList">Github Repositories</h3>
            </div>
            <hr></hr>
        </div>
    );
}

export default DevProfile;
