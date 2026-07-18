import React from 'react'
import image404 from  '../public/404.jpg'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Page Not Found</h1>
      <div>
        <Link className="link" to="/">go to Home Page</Link>
      </div>
      <img src={image404} alt="" />
    </div>
  )
}
