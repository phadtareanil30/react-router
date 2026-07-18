import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
<div className='header'> 
      <div >
        <Link className='link' to ="/"><h2>Logo</h2></Link>
      </div>
      <div >
        <ul className='header-ul'>
            <li className='header-ul-li'><Link className='link' to="/">Home</Link></li>
            <li className='header-ul-li'><Link className='link' to="/user/about">About</Link></li>
            <li className='header-ul-li'><Link className='link' to="/user/login">Login</Link></li>
            <li className='header-ul-li'><Link className='link' to="/college">College</Link></li>
            <li className='header-ul-li'><Link className='link' to="/users">Users</Link></li>
            <li className='header-ul-li'><Link className='link' to="/users/list">List</Link></li>



        </ul>

      </div>
    </div>
    <Outlet/>
    </div>
    
  )
}
