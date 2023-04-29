import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = (data) => {
  
  const rating =data.data;
  console.log(rating)
  
  return (
    <div>
      {[...Array(5)].map((star,i)=>{
        const ratingValue = i +1 ;
        return(<FaStar size={10} color={ratingValue <= rating ? "yellow":"white"} />)
      })}
    </div>
  )
}

export default Rating