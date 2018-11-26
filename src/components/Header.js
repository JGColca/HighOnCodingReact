import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

    render() {
      return (
        <nav> 
          <div className = "sitename"> HighOnCoding </div>
          <a id="Index" href="index.html"><b>Home</b></a>
          <a id="Categories" href="categories.html">Categories</a> 
        </nav>
      )
    }
}

export default Header
