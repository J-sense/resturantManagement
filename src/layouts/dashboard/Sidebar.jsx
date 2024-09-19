import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='col-span-2 h-screen bg-lime-300'>
      <NavLink to="/dashboard/earnigns">Earnings</NavLink>
    </div>
  )
}

export default Sidebar
