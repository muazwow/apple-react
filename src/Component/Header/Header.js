import React, {Component} from 'react';
import App from '../../App';
import logo from '../../images/icons/logo-sm.png';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';
import './Header.css';
import Navlink from './Navlink';

class Header extends Component {
render() {
    return(

   <div className="nav-wrapper fixed-top">
<div className="container">
    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            ☰
        </button>
        <a className="navbar-brand mx-auto" href="#"><img src={logo}/></a>

        <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Navlink name="Mac"/>
                <Navlink name="iPhone"/>
                <Navlink name="iPod"/>
                <Navlink name="Watch"/>
                <Navlink name="Tv"/>
                <Navlink name="Music"/>
                <Navlink name="Support"/>
                <Navlink  image={<img src={search}/>}/>
                <Navlink  image={<img src={cart}/>}/>
            </ul>
        </div>
    </nav>
</div>
</div>

);

}
}
export default Header;
