import './Header.css';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerText">
                <div>The Developer</div>
                <div>Repository</div>
            </div>
            <div className="headerImg">
                <img src={'/images/undraw_dev_productivity_umsq.png'} alt="header" />
            </div>
        </div>
    );
}

export default Header;
