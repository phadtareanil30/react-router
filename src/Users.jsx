import React from "react";
import { NavLink } from "react-router-dom";

export default function Users() {
  const userData = [
    {
      id: 1,
      name: "Anil",
    },
    {
      id: 2,
      name: "Nitya",
    },
    {
      id: 3,
      name: "Manisha",
    },
  ];

  return (
    <div style={{margin:'20px'}} >
      <h1>User List</h1>

      {
      userData.map((item) => (
        <div key={item.id} className='users'>
          <h4><NavLink className='link' to={"/users/"+item.id+"/"+item.name}>{item.name}</NavLink></h4>
        </div>
      ))
      }
    </div>
  );
}