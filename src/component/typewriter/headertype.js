import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

 function Headertype ()  {
    const [text] = useTypewriter({
        words:['Intergration Engineer','PG Technician'],
        loop:{},    
    })
  return (
    <>
   {text}
    <Cursor/>
    </>

  )
}


export default Headertype