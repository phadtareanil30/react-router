import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function College() {
  return (
    <div className='college' style={{textAlign:'center'}}>
      <NavLink className='link' to="/">GoTO Home</NavLink>
      <h1>College Component</h1>
      <NavLink className='link' to=""  >Student</NavLink>
      <NavLink  className='link'to="department"  >Department</NavLink>
      <NavLink className='link' to="detail"  >College Details</NavLink>
<Outlet/>
      
    </div>
  )
}
