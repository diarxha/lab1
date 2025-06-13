import React from 'react'

const Header = () => {
  return (
    <header className="border-b py-8 px-6 mx-20">
  <div className="flex items-center justify-between max-w-7xl mx-auto">
    <a href="/" className="text-3xl font-bold">🍕 FoodApp</a>
    <nav>
      <ul className="flex gap-x-4 md:gap-x-10 text-lg font-normal">
        <li><a href="/" className="hover:text-red-600 duration-200">Home</a></li>
        <li><a href="/menu" className="hover:text-red-600 duration-200">Menu</a></li>
        <li><a href="/about" className="hover:text-red-600 duration-200">About</a></li>
        <li><a href="/login" className="hover:text-red-600 duration-200">Login</a></li>
      </ul>
    </nav>
  </div>
</header>
  )
}

export default Header