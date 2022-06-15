import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'

import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" className="brand">
            <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
    </div>
  )
}

export default Navbar