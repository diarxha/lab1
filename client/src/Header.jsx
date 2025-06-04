import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo">🍕 FoodApp</a>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header