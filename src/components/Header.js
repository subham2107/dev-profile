import './Header.css';

function Header() {
  return (<div className="HeaderContainer">
    <div className="HeaderText">
      <div>The Developer</div> 
      <div>Repository</div>
      </div>
      <div className ="HeaderImg"><img src={'/images/undraw_dev_productivity_umsq 1.png'} alt="header"/>
      </div>
      </div>);
}

export default Header;