import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [showLink, setshowLink] = useState(false)
    return (
        <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
      logo
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <button onClick={() => setshowLink(!showLink)}>=</button>
      
    </label>
  </div>
  
  <div class="nav-links"  id= {showLink ? "nav-links" : "hidenav-links"}>
    <Link onClick={() => setshowLink(false)} to="/">Home</Link>
    <Link onClick={() => setshowLink(false)} to="/about">About</Link>
    <Link onClick={() => setshowLink(false)} to="/projects">Projects</Link>
  </div>
</div>
    )
}

export default Navbar
