import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

function Currentexp ()  {
    const [text] = useTypewriter({
        words:['Working as an Integration Engineer for more than 5 years not only I honed my skills as a Technical consultant but also enhanced my development capabilities on various frameworks like React, PHP, Java, Python and .Net.','Additional ability to analyze and debug any technical error that are being faced at the time of integration by the merchant on any platform and provide real-time capability to enable fast integration.','Also skillful enough to understand the requirement and creating various automation tool that helps to make process faster and more reliable.Also provided contribution on developing and maintaining documentation portal and websites.'],
        loop:false,
        deleteSpeed:0,
        typeSpeed:30

    })
  return (
    <>
   {text}
    <Cursor/>
    </>

  )
}


export default Currentexp