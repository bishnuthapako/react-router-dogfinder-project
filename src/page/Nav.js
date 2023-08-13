import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav({dogs}) {


  return (
    <ul className='nav d-flex justify-content-center fw-bold gap-3'>
      {
        dogs.map((dog,i)=>(
          <Link to={`/dogs/${dog.name}`} className='fw-bold btn btn-light'>
            <li className='nav-item' key={i}>{dog.name}</li>
          </Link>
        ))
      }
    </ul>
  )
}

export default Nav