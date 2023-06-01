import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-white text-2xl">POS</div>
      <div className="flex items-center">
        <div className='mx-4'>
          <i className="fa fa-bell text-2xl"></i>
        </div>
        <img
          src="../../user.jpg"
          alt="User Profile"
          className="rounded-full w-8 h-8 mx-1"
        />
        <span className="ml-2 text-xl">John Doe</span>
      </div>
    </nav>
  )
}

export default Navbar