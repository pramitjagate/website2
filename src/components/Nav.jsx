import { Link} from 'react-router-dom';
import React, { useState } from 'react';

const Nav = () => {
  return (
<nav id="nav1">
        <div id="a">
            <div className="c"><Link to="/home"><img id='img' src="https://cdn.dribbble.com/users/230124/screenshots/15645740/media/5712571f79a059e26b5e4dd286598452.jpg?compress=1&resize=400x300" alt="" /></Link></div>
            <div className="c">
                 <Link to="/men">MEN</Link>
            </div>
            <div className="c">WOMEN</div>
            <div className="c">KIDS</div>
            <div className="c">SPORTS</div>
            <div className="c">NEW ARRIVALS</div>
            <div className="c"><div className="dropdown">
            </div></div>
        </div>




        <div id="b">
            <div id="h">
              <div></div>
              <input type="text" name="bar" id="bar" placeholder=" Browse our collection..." />
            </div>
                <div id="f">
                 <Link to="/login">LOGIN</Link>
            </div>
            <div className="e">
                 <Link to="/">SIGN UP</Link>
            </div>
            <div></div>
        </div>
    </nav>
  )
}

export default Nav
