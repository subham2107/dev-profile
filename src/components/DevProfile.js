import './DevProfile.css';

function DevProfile() {
    return (
        <div>
            <div className="Navbar">
                <h2 className="HeaderOne">The Developer Profile</h2>
                <h2>All Developers</h2>
            </div>
            <div className="DevGithubInfo">
                <div>
                    <img className="BigAvatar" src={'images/account_circle-24px.svg'} alt="Avatar" />
                </div>
                <div>
                    <h3>Subham Mitra</h3>
                </div>
            </div>
            <div>
                <h3 className="RepoList">Github Repositories</h3>
            </div>
            <hr></hr>
        </div>
    );
}

export default DevProfile;
