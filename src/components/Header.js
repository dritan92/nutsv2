import React, {Component} from 'react'
import Collapsible from 'react-collapsible';
import '../styles/style.css';


class Header extends Component {
  render() {
    return (
      <header id="header">
          <div class="logo">
            <img src = {"/images/lemi1.png"}/>
          </div>
  				<div class="content">
							<div class="inner">
                 <h1>Premier Australian Walnuts</h1>
                 <p>WE NOW HAVE OUR NEW CROP OF WALNUTS SO COME AND VISIT US TODAY!! JUST CLICK <a href="http://premieraustralianwalnuts.com">HERE</a><br />
                 NEW CROP AUSSIE PEANUTS IN STOCK NOW!! ORDER TODAY.</p>
              </div>
          </div>
          <nav>
             <ul>
               <li><a href="#intro">Home</a></li>
                <Collapsible trigger= "Walnuts" className = "Collapsible" >
                 <li><a href="#chandler-walnuts">Chandler Walnuts</a></li>
                 <li><a href="#cisco-walnuts">Cisco walnuts</a></li>
               </Collapsible>
               <li><a href="#about">About</a></li>
               <li><a href="#review">Reviews</a></li>
               <li><a href="#contact">Contact</a></li>
               <li><a href="#elements">Test</a></li>

             </ul>
           </nav>
    </header>);
  }
}
export default Header;
