import React from 'react'
import { useParams } from 'react-router-dom'

function DogDetails({dogs}) {
   const {name} = useParams();
   const dog = dogs.find((d)=> d.name === name);
   console.log(dog, 'dog-details')
  return (
        <div className='container mt-4'>
           {
            dog ? 
            <>
            <div className="card">
                   <img src={dog.src} className='card-img-top' alt={dog.name}/>
                   <div className="card-body">
                     <h3>{dog.name}</h3>
                     <p className='card-text'>{dog.facts}</p>
                   </div>
             </div>
            </> 
            :
            <h1>Dog Not Found</h1>
           }
      </div>
  )
}

export default DogDetails