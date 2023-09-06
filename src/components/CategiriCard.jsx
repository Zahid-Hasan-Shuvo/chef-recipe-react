// import React from 'react'

import img1 from '../assets/image/chef-1.jpg'

const CategiriCard = (props) => {
    const {Name, Picture, YearsOfExperience, NumberOfRecipes, Likes } =props.category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl  ">
    <figure><img src={img1} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Name:{Name}</h2>
      <p>Experience:{YearsOfExperience}</p>
      <p> Num. Recepe: {NumberOfRecipes}</p>
      <p> Likes:{Likes}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Favourite</button>
      </div>
    </div>
  </div>
  )
}

export default CategiriCard