import React from 'react'
import {AiOutLineMenu} from 'react-icons/ai'
import React, {useState} from 'react'
const Sidenav = () => {
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div>
        <AiOutLineMenu onClick= {handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
    </div>
  )
}

export default Sidenav