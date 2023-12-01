import Logo from "../../img/rc2.png"
import './Header.css'
function Header() {
    return ( 
        <header>
            <img src={Logo} alt="logo" />
            <h3>S & F</h3>
        </header>
     );
}

export default Header;