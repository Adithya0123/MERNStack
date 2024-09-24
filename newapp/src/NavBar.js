import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <div>
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/skills">Skills</Link> */}
        <Link to="/list"> Students</Link><br></br>
        <Link to="/">Add new Student</Link>
    </div>
  )
}

export default NavBar