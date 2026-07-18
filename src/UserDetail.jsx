import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function UserDetail() {
    const useParamdata=useParams();
    console.log(useParamdata)
  return (
    <div style={{margin:'20px'}}>
      <h1>User Id {useParamdata.id}</h1>
      <h1>User Name {useParamdata.name}</h1>
      
      <NavLink to={"/users"} > Back </NavLink>
    </div>
  )
}
