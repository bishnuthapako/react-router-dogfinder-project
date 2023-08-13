import React from 'react'
import { Link } from 'react-router-dom'

function DogList({dogs}) {
  return (
    <div className='container mt-4'>
      <div className="row text-center">
        {
          dogs.map((dog, i)=>(
            <div className="col-lg-6 col-12 mb-2" key={i}>
                <div className="card">
                  <img src={dog.src} className='card-img-top' alt={dog.name}/>
                  <div className="card-body">
                    <Link to={`/dogs/${dog.name}`} style={{textDecoration:"none"}}>
                        <h3>{dog.name}</h3>
                    </Link>
                    <p className='card-text'>{dog.facts}</p>
                  </div>
                </div>
             </div>
          ))
        }
      </div>
    </div>
  )
}

export default DogList